import type { InputHandler } from '../InputHandler';
import {
	currentConstraintStore,
	currentShapeStore,
	selectConstraint,
	updateLocalConstraint
} from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { BASIC_TOOL_MODE, CornerOrEdge } from './types';
import type { GridShape } from '$lib/Types/types';
import {
	updateConstraintValue,
	findCenterCornerOrEdgeConstraint
} from '$src/lib/Puzzle/Constraints/ElementsDict';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	centerCornerOrEdgeConstraint} from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
import { type CenterCornerOrEdgeToolI } from "$src/lib/Puzzle/puzzle_schema";
import type { CenterCornerOrEdgeToolInputOptions } from './types';
import { toolModeStore } from '$stores/InputHandlerStore';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { centerCornerOrEdgeToolPreviewStore, type ToolPreview } from '$stores/ElementsStore';

export function getCenterCornerOrEdgeToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CenterCornerOrEdgeToolInputOptions
): InputHandler {
	// console.log('getCenterCornerOrEdgeToolInputHandler');

	const targets = options?.targets ?? CornerOrEdge.CLOSEST;
	const pointerHandler = new CellFeaturePointerHandler(targets);

	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(elementsDictStore);
		const cell = event.cell;
		const coords = event.closest;

		let mode = get(toolModeStore);

		const onGrid = isCellOnGrid(cell, gridShape);
		if (!onGrid) return;

		// determine if adding or removing
		const match = findCenterCornerOrEdgeConstraint(localConstraints, tool, coords);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		// remove constraint
		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(id, match[1], tool);
		}
		// add constraint
		else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const newConstraint = centerCornerOrEdgeConstraint(tool, coords, '');
			const id = uniqueId();
			pushAddLocalConstraintCommand(id, newConstraint, tool, true);
		} else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(match[0], tool);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as CenterCornerOrEdgeToolI;
		const id = currentConstraint.id;

		if (constraint.value === undefined) return;
		if (!keyboardInputDefaultValidator(event.key)) return;
		if (!options?.valueUpdater) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateConstraintValue(constraint, newValue);
			updateLocalConstraint(tool, id, constraint);
		}
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			centerCornerOrEdgeToolPreviewStore.set(undefined);
			return;
		}

		const mode = get(toolModeStore);

		const constraint_preview = centerCornerOrEdgeConstraint(tool, event.closest, '');
		const currentShape = get(currentShapeStore);
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const localConstraints = get(elementsDictStore);
		const match = findCenterCornerOrEdgeConstraint(localConstraints, tool, event.closest);
		if (!match && mode === BASIC_TOOL_MODE.DELETE) {
			centerCornerOrEdgeToolPreviewStore.set(undefined);
			return;
		}

		let preview_mode: 'add' | 'remove' = 'add';
		let match_id: string | undefined = undefined;
		if (match && (mode === BASIC_TOOL_MODE.DYNAMIC || mode === BASIC_TOOL_MODE.DELETE)) {
			preview_mode = 'remove';
			match_id = match[0];
		}

		const aux: ToolPreview<CenterCornerOrEdgeToolI> = {
			tool: constraint_preview,
			match_id,
			mode: preview_mode
		};

		centerCornerOrEdgeToolPreviewStore.set(aux);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (event: PointerEvent): void => {
			pointerHandler.pointerMove(event, svgRef);
		},
		pointerUp: (): void => {},
		keyDown: (event: KeyboardEvent): void => {
			onKeyDown(event);
		},
		keyUp: (): void => {}
	};

	return inputHandler;
}
