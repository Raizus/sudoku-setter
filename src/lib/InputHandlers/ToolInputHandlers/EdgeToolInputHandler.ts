import type { InputHandler } from '../InputHandler';
import { BASIC_TOOL_MODE, type EdgeToolOptions } from './types';
import {
	currentConstraintStore,
	currentShapeStore,
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import {
	updateConstraintValue,
	findEdgeConstraint,
	type ConstraintType
} from '$lib/Puzzle/Constraints/LocalConstraints';
import {
	CellEdgePointerHandler,
	type CellEdgeTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgePointerHandler';
import { cellEdgeToCellCoords, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { edgeConstraint, type EdgeToolI } from '$lib/Puzzle/Constraints/EdgeConstraints';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { edgeToolPreviewStore, type ToolPreview } from '$stores/ElementsStore';

export function getEdgeToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: EdgeToolOptions
): InputHandler {
	// console.log('getEdgeToolInputHandler');
	const pointerHandler = new CellEdgePointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let mode = BASIC_TOOL_MODE.DYNAMIC;

	function handle(event: CellEdgeTapEvent) {
		const localConstraints = get(localConstraintsStore);
		const edge = event.coord;

		const cellsCoords = cellEdgeToCellCoords(edge);

		const onGrid = cellsCoords.every((cell) => isCellOnGrid(cell, gridShape));
		if (!onGrid) return;

		// determine if adding or removing
		let match: [string, ConstraintType] | null = null;
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			match = findEdgeConstraint(localConstraints, tool, cellsCoords);
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(id, match[1], tool);
		} else if (mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const defaultValue = options?.defaultValue ?? '';
			const currentConstraint = edgeConstraint(tool, cellsCoords, defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(id, currentConstraint, tool, true);
		}

		mode = BASIC_TOOL_MODE.DYNAMIC;
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as EdgeToolI;
		const id = currentConstraint.id;

		if (constraint.value === undefined) return;
		if (!keyboardInputDefaultValidator(event)) return;
		if (!options?.valueUpdater) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateConstraintValue(constraint, newValue);
			updateLocalConstraint(tool, id, constraint);
		}
	}

	pointerHandler.onDragStart = (event: CellEdgeTapEvent): void => {
		mode = BASIC_TOOL_MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeTapEvent): void => {
		const onGrid = isCellOnGrid(event.coord, gridShape);
		if (!onGrid) {
			edgeToolPreviewStore.set(undefined);
			return;
		}

		const cellsCoords = cellEdgeToCellCoords(event.coord);
		const defaultValue = options?.defaultValue ?? '';
		const constraint_preview = edgeConstraint(tool, cellsCoords, defaultValue);
		const currentShape = get(currentShapeStore);
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}
		
		const localConstraints = get(localConstraintsStore);
		const match = findEdgeConstraint(localConstraints, tool, cellsCoords);
		let preview_mode: 'add' | 'remove' = 'add';
		let match_id: string | undefined = undefined;
		if (match && mode === BASIC_TOOL_MODE.DYNAMIC) {
			preview_mode = 'remove';
			match_id = match[0];
		}

		const aux: ToolPreview<EdgeToolI> = {
			tool: constraint_preview,
			match_id,
			mode: preview_mode
		};

		edgeToolPreviewStore.set(aux);
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
