import type { InputHandler } from '../InputHandler';
import { uniqueId } from 'lodash';
import type { GridShape } from '$lib/Types/types';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { type EdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
import { findEdgeConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { BASIC_TOOL_MODE, type DirectedAdjacentCellsToolOptions } from './types';
import {
	edgeConstraint,
	updateDirectedAdjacentCellsConstraint
} from '$src/lib/Puzzle/Constraints/EdgeConstraints';
import { StateStore } from '$stores/StateStore';

export function getDirectedAdjacentCellsToolInputHandler(
	svgRef: SVGSVGElement,
	stateStore: StateStore,
	options?: DirectedAdjacentCellsToolOptions
): InputHandler {
	// console.log('getLineToolInputHandler');
	const pointerHandler = new CellPointerHandler();

	const grid = stateStore.getGrid();
	const tool = stateStore.getCurrentTool();

	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let newConstraint: EdgeToolI | null = null;
	let id: string | null = null;

	function eventOnGrid(event: CellDragTapEvent) {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return false;
		return true;
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		const mode = stateStore.getCurrentToolMode();

		if (!eventOnGrid(event)) return;

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		if (mode !== BASIC_TOOL_MODE.DELETE) {
			id = uniqueId();
			newConstraint = edgeConstraint(tool, [event.cell], options?.defaultValue);
			stateStore.setShapeAndAddConstraint(element_id, id, newConstraint);
		}
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		const coords = event.cell;
		if (!eventOnGrid(event) || !newConstraint || !id) return;

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		// if draging over an existing arrow and mode is dynamic, remove the existing arrow
		newConstraint = updateDirectedAdjacentCellsConstraint(newConstraint, coords);
		const elements = stateStore.getElementsDict();
		const match = findEdgeConstraint(elements, tool, newConstraint.cells);
		const mode = stateStore.getCurrentToolMode();
		if (match && mode === BASIC_TOOL_MODE.DYNAMIC) {
			stateStore.removeConstraint(element_id, id);
			stateStore.removeConstraint(element_id, match[0]);
		} else {
			stateStore.updateConstraint(element_id, id, newConstraint);
		}
	};

	pointerHandler.onDragEnd = () => {
		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		if (id && newConstraint && newConstraint.cells.length !== 2) {
			stateStore.removeConstraint(element_id, id);
		} else if (id && newConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(element_id, id, newConstraint, false);
		}

		id = null;
	};

	pointerHandler.onTap = (event: CellDragTapEvent) => {
		const mode = stateStore.getCurrentToolMode();
		if (mode === BASIC_TOOL_MODE.ADD_EDIT) return;

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		const coords = event.cell;
		const elements = stateStore.getElementsDict();
		const match = findEdgeConstraint(elements, tool, [coords]);
		if (match) {
			const [id, constraint] = match;
			pushRemoveLocalConstraintCommand(element_id, id, constraint);
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
		keyDown: (): void => {},
		keyUp: (): void => {}
	};

	return inputHandler;
}
