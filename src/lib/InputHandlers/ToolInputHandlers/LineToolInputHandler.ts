import type { InputHandler } from '../InputHandler';
import { selectedElementIdStore, updateLocalConstraint } from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	updateLineConstraintCells,
	lineConstraint
} from '$lib/Puzzle/Constraints/LineConstraints';
import { type LineToolI } from "$src/lib/Puzzle/puzzle_schema";
import { findLineConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { BASIC_TOOL_MODE, type LineToolInputOptions } from './types';
import { toolModeStore } from '$stores/InputHandlerStore';

export function getLineToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: LineToolInputOptions
): InputHandler {
	// console.log('getLineToolInputHandler');
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	const allowSelfIntersection = options?.allowSelfIntersection ?? false;

	let newConstraint: LineToolI | null = null;
	let id: string | null = null;

	function eventOnGrid(event: CellDragTapEvent) {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return false;
		return true;
	}

	function handle(event: CellDragTapEvent) {
		if (!id || !newConstraint) throw 'UNREACHABLE';

		const coords = event.cell;
		if (!eventOnGrid(event)) return;

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		newConstraint = updateLineConstraintCells(newConstraint, coords, allowSelfIntersection);
		updateLocalConstraint(element_id, id, newConstraint);
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		const mode = get(toolModeStore);

		if (!eventOnGrid(event)) return;

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		if (mode !== BASIC_TOOL_MODE.DELETE) {
			id = uniqueId();
			newConstraint = lineConstraint(tool, [], options?.defaultValue);
			addLocalConstraint(element_id, id, newConstraint);
			handle(event);
		}
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		if (id && newConstraint && newConstraint.cells.length <= 1) {
			removeLocalConstraint(element_id, id);
		} else if (id && newConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(element_id, id, newConstraint, false);
		}

		id = null;
	};

	pointerHandler.onTap = (event: CellDragTapEvent) => {
		const mode = get(toolModeStore);
		if (mode === BASIC_TOOL_MODE.ADD_EDIT) return;

		const coords = event.cell;
		const elements = get(elementsDictStore);
		const match = findLineConstraint(elements, tool, coords);

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

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
