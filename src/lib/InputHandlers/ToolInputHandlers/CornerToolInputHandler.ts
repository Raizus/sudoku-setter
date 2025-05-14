import { get } from 'svelte/store';
import { uniqueId } from 'lodash';

import type { InputHandler } from '../InputHandler';
import { BASIC_TOOL_MODE, type CornerToolOptions } from './types';
import {
	currentConstraintStore,
	updateLocalConstraint,
	elementsDictStore,
	currentShapeStore,
	selectConstraint
} from '$stores/BoardStore';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import {
	findCornerConstraint,
	updateConstraintValue,
	type ConstraintType
} from '$lib/Puzzle/Constraints/LocalConstraints';
import { cornerConstraint, type CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
import { cornerCoordToAdjCellCoords, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	CellCornerPointerHandler,
	type CellCornerTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellCornerPointerHandler';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { cornerToolPreviewStore, type ToolPreview } from '$stores/ElementsStore';
import { toolModeStore } from '$stores/InputHandlerStore';

export function getCornerToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CornerToolOptions
): InputHandler {
	// console.log('getCornerToolInputHandler');
	const pointerHandler = new CellCornerPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellCornerTapEvent) {
		const localConstraints = get(elementsDictStore);
		const corner = event.coord;

		let mode = get(toolModeStore);

		const cellsCoords = cornerCoordToAdjCellCoords(corner);

		const onGrid = cellsCoords.every((coord) => isCellOnGrid(coord, gridShape));
		if (!onGrid) return;

		// determine if adding or removing
		let match: [string, ConstraintType] | null = null;
		match = findCornerConstraint(localConstraints, tool, corner);
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
			const newConstraint = cornerConstraint(tool, cellsCoords, options?.defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(id, newConstraint, tool, true);
		} else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(match[0], tool);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as CornerToolI;
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

	pointerHandler.onDragStart = (event: CellCornerTapEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellCornerTapEvent): void => {
		const onGrid = isCellOnGrid(event.coord, gridShape);
		if (!onGrid) {
			cornerToolPreviewStore.set(undefined);
			return;
		}

		const mode = get(toolModeStore);
		const cellsCoords = cornerCoordToAdjCellCoords(event.coord);
		const constraint_preview = cornerConstraint(tool, cellsCoords, options?.defaultValue);
		const currentShape = get(currentShapeStore);
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const localConstraints = get(elementsDictStore);
		const match = findCornerConstraint(localConstraints, tool, event.coord);
		if (!match && mode === BASIC_TOOL_MODE.DELETE) {
			cornerToolPreviewStore.set(undefined);
			return;
		}
		
		let preview_mode: 'add' | 'remove' = 'add';
		let match_id: string | undefined = undefined;
		if (match && (mode === BASIC_TOOL_MODE.DYNAMIC || mode === BASIC_TOOL_MODE.DELETE)) {
			preview_mode = 'remove';
			match_id = match[0];
		}

		const aux: ToolPreview<CornerToolI> = {
			tool: constraint_preview,
			match_id,
			mode: preview_mode
		};

		cornerToolPreviewStore.set(aux);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (event: PointerEvent): void => {
			pointerHandler.pointerMove(event, svgRef);
		},
		pointerUp: (event: PointerEvent): void => {
			pointerHandler.pointerUp(event, svgRef);
		},
		keyDown: (event: KeyboardEvent): void => {
			onKeyDown(event);
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
