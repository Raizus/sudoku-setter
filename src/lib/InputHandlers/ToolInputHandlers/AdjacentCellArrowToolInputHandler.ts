import type { InputHandler } from '../InputHandler';
import { elementsDictStore, updateLocalConstraint } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
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
import { toolModeStore } from '$stores/InputHandlerStore';
import {
	edgeConstraint,
	updateDirectedAdjacentCellsConstraint
} from '$src/lib/Puzzle/Constraints/EdgeConstraints';

export function getDirectedAdjacentCellsToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: DirectedAdjacentCellsToolOptions
): InputHandler {
	// console.log('getLineToolInputHandler');
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let newConstraint: EdgeToolI | null = null;
	let id: string | null = null;

	function eventOnGrid(event: CellDragTapEvent) {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return false;
		return true;
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		const mode = get(toolModeStore);

		if (!eventOnGrid(event)) return;

		if (mode !== BASIC_TOOL_MODE.DELETE) {
			id = uniqueId();
			newConstraint = edgeConstraint(tool, [event.cell], options?.defaultValue);
			addLocalConstraint(id, newConstraint);
		}
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		const coords = event.cell;
		if (!eventOnGrid(event) || !newConstraint || !id) return;

		// if draging over an existing arrow and mode is dynamic, remove the existing arrow
		newConstraint = updateDirectedAdjacentCellsConstraint(newConstraint, coords);
		const elements = get(elementsDictStore);
		const match = findEdgeConstraint(elements, tool, newConstraint.cells);
		const mode = get(toolModeStore);
		if (match && mode === BASIC_TOOL_MODE.DYNAMIC) {
			removeLocalConstraint(tool, id);
			removeLocalConstraint(tool, match[0]);
		} else {
			updateLocalConstraint(tool, id, newConstraint);
		}
	};

	pointerHandler.onDragEnd = () => {
		if (id && newConstraint && newConstraint.cells.length !== 2) {
			removeLocalConstraint(tool, id);
		} else if (id && newConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(id, newConstraint, tool, false);
		}

		id = null;
	};

	pointerHandler.onTap = (event: CellDragTapEvent) => {
		const mode = get(toolModeStore);
		if (mode === BASIC_TOOL_MODE.ADD_EDIT) return;

		const coords = event.cell;
		const elements = get(elementsDictStore);
		const match = findEdgeConstraint(elements, tool, [coords]);
		if (match) {
			const [id, constraint] = match;
			pushRemoveLocalConstraintCommand(id, constraint, tool);
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
