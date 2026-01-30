import { get } from 'svelte/store';
import { uniqueId } from 'lodash';

import type { InputHandler } from '../InputHandler';
import { BASIC_TOOL_MODE, type CornerToolOptions } from './types';
import {
	currentConstraintStore,
	elementsDictStore,
	currentShapeStore,
	selectConstraint,
	selectedElementIdStore
} from '$stores/BoardStore';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import { findCornerConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { cornerConstraint } from '$lib/Puzzle/Constraints/CornerConstraints';
import { type CornerToolI } from '$src/lib/Puzzle/puzzle_schema';
import { cornerCoordToAdjCellCoords, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	CellCornerPointerHandler,
	type CellCornerTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellCornerPointerHandler';
import {
	keyDownUpdateValue,
	pushAddLocalConstraintCommand,
	pushRemoveLocalConstraintCommand,
	setConstraintPreviewOnMove
} from './utils';
import { cornerToolPreviewStore } from '$stores/ElementsStore';
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
		const corner = event.coord;

		let mode = get(toolModeStore);

		const cellsCoords = cornerCoordToAdjCellCoords(corner);

		const onGrid = cellsCoords.every((coord) => isCellOnGrid(coord, gridShape));
		if (!onGrid) return;

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		// determine if adding or removing
		const elements = get(elementsDictStore);
		const match = findCornerConstraint(elements, tool, corner);
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
			const newConstraint = cornerConstraint(tool, cellsCoords, options?.defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(element_id, id, newConstraint, true);
		}
		// select existing constraint
		else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(element_id, match[0]);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		keyDownUpdateValue<CornerToolI>(
			event,
			currentConstraintStore,
			get(selectedElementIdStore),
			options?.valueUpdater
		);
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

		const elements = get(elementsDictStore);

		const match = findCornerConstraint(elements, tool, event.coord);
		const match_id = match ? match[0] : undefined;
		setConstraintPreviewOnMove<CornerToolI>(
			constraint_preview,
			cornerToolPreviewStore,
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
