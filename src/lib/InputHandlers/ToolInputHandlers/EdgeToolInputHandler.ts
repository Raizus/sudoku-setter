import type { InputHandler } from '../InputHandler';
import { BASIC_TOOL_MODE, type EdgeToolOptions } from './types';
import {
	currentConstraintStore,
	currentShapeStore,
	selectConstraint,
	selectedElementIdStore
} from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import { findEdgeConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	CellEdgePointerHandler,
	type CellEdgeTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgePointerHandler';
import { cellEdgeToCellCoords, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { edgeConstraint } from '$lib/Puzzle/Constraints/EdgeConstraints';
import { type EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
import {
	keyDownUpdateValue,
	pushAddLocalConstraintCommand,
	pushRemoveLocalConstraintCommand,
	setConstraintPreviewOnMove
} from './utils';
import { edgeToolPreviewStore } from '$stores/ElementsStore';
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

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		// determine if adding or removing
		const elements = get(elementsDictStore);
		const match = findEdgeConstraint(elements, tool, cellsCoords);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		// remove constraint
		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(element_id, id, match[1]);
		}
		// add constraint
		else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const defaultValue = options?.defaultValue ?? '';
			const newConstraint = edgeConstraint(tool, cellsCoords, defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(element_id, id, newConstraint, true);
		}
		// select existing constraint
		else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(element_id, match[0]);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		keyDownUpdateValue<EdgeToolI>(
			event,
			currentConstraintStore,
			get(selectedElementIdStore),
			options?.valueUpdater
		);
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
		const match_id = match ? match[0] : undefined;
		setConstraintPreviewOnMove<EdgeToolI>(
			constraint_preview,
			edgeToolPreviewStore,
			match_id,
			mode
		);
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
