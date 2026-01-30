import type { InputHandler } from '../InputHandler';
import { BASIC_TOOL_MODE, type SingleCellToolOptions } from './types';
import type { TOOLID } from '$lib/Puzzle/Tools';
import {
	currentConstraintStore,
	currentShapeStore,
	selectConstraint,
	selectedElementIdStore
} from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import type { GridShape } from '$lib/Types/types';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	findSingleCellConstraint
} from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	singleCellConstraint} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { type CellToolI } from "$src/lib/Puzzle/puzzle_schema";
import { keyDownUpdateValue, pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand, setConstraintPreviewOnMove } from './utils';
import { simpleCellToolPreviewStore } from '$stores/ElementsStore';
import { toolModeStore } from '$stores/InputHandlerStore';

export function getSingleCellToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: SingleCellToolOptions
): InputHandler {
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellDragTapEvent) {
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		let mode = get(toolModeStore);

		// determine if adding or removing
		const elements = get(elementsDictStore);

		if (options?.oppositeConstraintId) {
			const oppositeConstraintMatch = findSingleCellConstraint<CellToolI>(
				elements,
				options.oppositeConstraintId,
				coords
			);
			if (oppositeConstraintMatch) return;
		}

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		const match = findSingleCellConstraint<CellToolI>(elements, tool, coords);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		// remove constraint
		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const [id, constraint] = match;
			pushRemoveLocalConstraintCommand(element_id, id, constraint);
		}
		// add constraint
		else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const newConstraint = singleCellConstraint(tool, coords, options?.defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(element_id, id, newConstraint, true);
		}
		// select existing constraint
		else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(element_id, match[0]);
		}
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	// pointerHandler.onDragEnd = (): void => {
	// 	mode = BASIC_TOOL_MODE.DYNAMIC;
	// };

	pointerHandler.onMove = (event: CellDragTapEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			simpleCellToolPreviewStore.set(undefined);
			return;
		}

		const constraint_preview = singleCellConstraint(tool, event.cell, options?.defaultValue);
		const currentShape = get(currentShapeStore);
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const mode = get(toolModeStore);
		const elements = get(elementsDictStore);

		const match = findSingleCellConstraint<CellToolI>(elements, tool, event.cell);
		const match_id = match ? match[0] : undefined;
		setConstraintPreviewOnMove<CellToolI>(
			constraint_preview,
			simpleCellToolPreviewStore,
			match_id,
			mode
		);
	};

	function onKeyDown(event: KeyboardEvent) {
		keyDownUpdateValue<CellToolI>(
			event,
			currentConstraintStore,
			get(selectedElementIdStore),
			options?.valueUpdater
		);
	}

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
		keyUp: (): void => {}
	};

	return inputHandler;
}
