import type { InputHandler } from '../InputHandler';
import { uniqueId } from 'lodash';
import type { GridShape } from '$lib/Types/types';
import { cageConstraint, updateCageConstraintCells } from '$lib/Puzzle/Constraints/CageConstraints';
import { type CageToolI } from '$src/lib/Puzzle/puzzle_schema';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { findCageConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import {
	keyDownUpdateValue,
	pushAddLocalConstraintCommand,
	pushRemoveLocalConstraintCommand
} from './utils';
import { BASIC_TOOL_MODE, type CageToolInputOptions } from './types';
import { StateStore } from '$stores/StateStore';

export function getCageToolInputHandler(
	svgRef: SVGSVGElement,
	stateStore: StateStore,
	options?: CageToolInputOptions
): InputHandler {
	const pointerHandler = new CellPointerHandler();

	const grid = stateStore.getGrid();
	const tool = stateStore.getCurrentTool();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let mode_aux = stateStore.getCurrentToolMode();
	let currentConstraint: CageToolI | null = null;
	let id: string | null = null;

	function handle(event: CellDragTapEvent) {
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		// if shift click on an existing cage or mode is add/edit, set it as current constraint,
		const elements = stateStore.getElementsDict();
		const match = findCageConstraint(elements, tool, coords);
		if (
			match &&
			(event.event.shiftKey || mode_aux === BASIC_TOOL_MODE.ADD_EDIT)
		) {
			id = match[0];
			currentConstraint = match[1];
			stateStore.setCurrentConstraint({ id, constraint: currentConstraint });
			mode_aux = BASIC_TOOL_MODE.ADD_EDIT;
		}

		// determine if adding or removing
		if (mode_aux === BASIC_TOOL_MODE.DYNAMIC) {
			mode_aux = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		// delete cage
		if (match && mode_aux === BASIC_TOOL_MODE.DELETE) {
			pushRemoveLocalConstraintCommand(element_id, match[0], match[1]);
			return;
		}

		// create new cage
		if (!currentConstraint && mode_aux === BASIC_TOOL_MODE.ADD_EDIT) {
			currentConstraint = cageConstraint(tool, [coords]);
			id = uniqueId();
			stateStore.setShapeAndAddConstraint(element_id, id, currentConstraint);
			return;
		}

		// add to current cage
		else if (currentConstraint && id && mode_aux === BASIC_TOOL_MODE.ADD_EDIT) {
			const allowDiagonallyAdjacent = !!options?.allowDiagonallyAdjacent;
			const allowNonAdjacent = !!options?.allowNonAdjacent;

			currentConstraint = updateCageConstraintCells(
				currentConstraint,
				coords,
				allowDiagonallyAdjacent,
				allowNonAdjacent
			);
			stateStore.updateConstraint(element_id, id, currentConstraint);
			return;
		}
	}

	function handleKeyDown(event: KeyboardEvent): void {
		keyDownUpdateValue<CageToolI>(
			event,
			stateStore,
			options?.valueUpdater
		);
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		if (!event.event.shiftKey) {
			id = null;
			currentConstraint = null;
		}

		mode_aux = stateStore.getCurrentToolMode();
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		if (id && currentConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(element_id, id, currentConstraint, false);
		}
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
			handleKeyDown(event);
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
