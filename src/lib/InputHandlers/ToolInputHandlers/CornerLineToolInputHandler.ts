import type { InputHandler } from '../InputHandler';
import { selectedElementIdStore, updateLocalConstraint } from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import { areCoordsOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	findCornerLineConstraint} from '$src/lib/Puzzle/Constraints/ElementsDict';
import { type ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import {
	cornerLineConstraint,
	updateCornerLineConstraintCoords} from '$src/lib/Puzzle/Constraints/CornerLineConstraints';
import { type CornerLineToolI } from '$src/lib/Puzzle/puzzle_schema';
import {
	CellCornerPointerHandler,
	type CellCornerTapEvent
} from '$input/PointerHandlers/CellCornerPointerHandler';
import { CORNER_LINE_TOOL_MODE, type CornerLineToolInputOptions } from './types';

export function getCornerLineToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CornerLineToolInputOptions
): InputHandler {
	// console.log('getRCLineToolInputHandler');
	const pointerHandler = new CellCornerPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CornerLineToolI | null = null;
	let id: string | null = null;

	let mode = CORNER_LINE_TOOL_MODE.DYNAMIC;

	function handle(event: CellCornerTapEvent) {
		
		const coord = event.coord;
		const onGrid = areCoordsOnGrid(coord, gridShape);
		if (!onGrid) return;
		
		const elements = get(elementsDictStore);
		let match: [string, ConstraintType] | null = null;
		if (mode === CORNER_LINE_TOOL_MODE.DYNAMIC) {
			match = findCornerLineConstraint(elements, tool, coord);
			mode = match ? CORNER_LINE_TOOL_MODE.DELETE : CORNER_LINE_TOOL_MODE.ADD_EDIT;
		}

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		// remove constraint
		if (match) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(element_id, id, match[1]);
			return;
		}
		// new constraint
		if (!currentConstraint && mode === CORNER_LINE_TOOL_MODE.ADD_EDIT) {
			id = uniqueId();
			currentConstraint = cornerLineConstraint(tool, [coord], options?.defaultValue);
			addLocalConstraint(element_id, id, currentConstraint);
			return;
		}
		// add to current cage
		else if (currentConstraint && id && mode === CORNER_LINE_TOOL_MODE.ADD_EDIT) {
			currentConstraint = updateCornerLineConstraintCoords(currentConstraint, coord);
			updateLocalConstraint(element_id, id, currentConstraint);
			return;
		}
	}

	pointerHandler.onDragStart = (event: CellCornerTapEvent): void => {
		id = null;
		currentConstraint = null;
		mode = CORNER_LINE_TOOL_MODE.DYNAMIC;
		if (event.event.shiftKey) mode = CORNER_LINE_TOOL_MODE.ADD_EDIT;
		handle(event);
	};

	pointerHandler.onDrag = (event: CellCornerTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		if (id && currentConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(element_id, id, currentConstraint, false);
		}
		id = null;
	};

	// pointerHandler.onTap = (event: CellCornerTapEvent) => {
	// 	const coords = event.cellCorner;
	// 	const localConstraints = get(localConstraintsStore);
	// 	const match = findCornerLineConstraint(localConstraints, tool, coords);
	// 	console.log(match);
	// 	if (match) {
	// 		const [id, constraint] = match;
	// 		pushRemoveLocalConstraintCommand(id, constraint, tool);
	// 	}
	// };

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
		keyDown: (): void => {
			return;
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
