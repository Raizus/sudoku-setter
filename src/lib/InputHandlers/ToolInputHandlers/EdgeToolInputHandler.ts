import type { InputHandler } from '../InputHandler';
import { BASIC_TOOL_MODE, type EdgeToolOptions } from './types';
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
import type { GridShape } from '$lib/Types/types';
import {
	updateConstraintValue,
	findEdgeConstraint} from '$src/lib/Puzzle/Constraints/ElementsDict';
import { type ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import {
	CellEdgePointerHandler,
	type CellEdgeTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgePointerHandler';
import { cellEdgeToCellCoords, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { edgeConstraint } from '$lib/Puzzle/Constraints/EdgeConstraints';
import { type EdgeToolI } from "$src/lib/Puzzle/puzzle_schema";
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { edgeToolPreviewStore, type ToolPreview } from '$stores/ElementsStore';
import { toolModeStore } from '$stores/InputHandlerStore';

export function getEdgeToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: EdgeToolOptions
): InputHandler {
	// console.log('getEdgeToolInputHandler');
	const pointerHandler = new CellEdgePointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellEdgeTapEvent) {
		const edge = event.coord;

		let mode = get(toolModeStore);

		const cellsCoords = cellEdgeToCellCoords(edge);

		const onGrid = cellsCoords.every((cell) => isCellOnGrid(cell, gridShape));
		if (!onGrid) return;

		// determine if adding or removing
		const elements = get(elementsDictStore);
		let match: [string, ConstraintType] | null = null;
		match = findEdgeConstraint(elements, tool, cellsCoords);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(id, match[1], tool);
		} else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const defaultValue = options?.defaultValue ?? '';
			const currentConstraint = edgeConstraint(tool, cellsCoords, defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(id, currentConstraint, tool, true);
		} else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(match[0], tool);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as EdgeToolI;
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

	pointerHandler.onDragStart = (event: CellEdgeTapEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeTapEvent): void => {
		const onGrid = isCellOnGrid(event.coord, gridShape);
		if (!onGrid) {
			edgeToolPreviewStore.set(undefined);
			return;
		}

		const mode = get(toolModeStore);
		const cellsCoords = cellEdgeToCellCoords(event.coord);
		
		const defaultValue = options?.defaultValue ?? '';
		const constraint_preview = edgeConstraint(tool, cellsCoords, defaultValue);
		const currentShape = get(currentShapeStore);
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const elements = get(elementsDictStore);
		const match = findEdgeConstraint(elements, tool, cellsCoords);
		if (!match && mode === BASIC_TOOL_MODE.DELETE) {
			edgeToolPreviewStore.set(undefined);
			return;
		}

		
		let preview_mode: 'add' | 'remove' = 'add';
		let match_id: string | undefined = undefined;
		if (match && (mode === BASIC_TOOL_MODE.DYNAMIC || mode === BASIC_TOOL_MODE.DELETE)) {
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
