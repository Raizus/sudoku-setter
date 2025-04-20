import type { InputHandler } from '../InputHandler';
import { updateLocalConstraint } from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import { areCoordsOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	findCornerLineConstraint,
	type ConstraintType
} from '$lib/Puzzle/Constraints/LocalConstraints';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import {
	cornerLineConstraint,
	updateCornerLineConstraintCoords,
	type CornerLineToolI
} from '$src/lib/Puzzle/Constraints/CornerLineConstraints';
import {
	CellCornerPointerHandler,
	type CellCornerTapEvent
} from '$input/PointerHandlers/CellCornerPointerHandler';
import type { CornerLineToolInputOptions } from './types';

enum CORNER_LINE_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	ADD_EDIT = 'Add/Edit',
	DELETE = 'Delete'
}

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
		const localConstraints = get(localConstraintsStore);

		const coord = event.coord;
		const onGrid = areCoordsOnGrid(coord, gridShape);
		if (!onGrid) return;

		let match: [string, ConstraintType] | null = null;
		if (mode === CORNER_LINE_TOOL_MODE.DYNAMIC) {
			match = findCornerLineConstraint(localConstraints, tool, coord);
			mode = match ? CORNER_LINE_TOOL_MODE.DELETE : CORNER_LINE_TOOL_MODE.ADD_EDIT;
		}
		// remove constraint
		if (match) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(id, match[1], tool);
			return;
		}
		// new constraint
		if (!currentConstraint && mode === CORNER_LINE_TOOL_MODE.ADD_EDIT) {
			id = uniqueId();
			currentConstraint = cornerLineConstraint(tool, [coord], options?.defaultValue);
			addLocalConstraint(id, currentConstraint);
			return;
		}
		// add to current cage
		else if (currentConstraint && id && mode === CORNER_LINE_TOOL_MODE.ADD_EDIT) {
			currentConstraint = updateCornerLineConstraintCoords(currentConstraint, coord);
			updateLocalConstraint(tool, id, currentConstraint);
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
		if (id && currentConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(id, currentConstraint, tool, false);
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
