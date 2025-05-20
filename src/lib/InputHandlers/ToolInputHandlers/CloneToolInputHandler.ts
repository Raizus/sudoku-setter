import type { InputHandler } from '../InputHandler';
import { updateLocalConstraint } from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import {
	cloneConstraint,
	updateCloneConstraintCells,
	type CloneToolI
} from '$lib/Puzzle/Constraints/CloneConstraints';
import { isCellOnGrid, type GridCoordI, areCoordsEqual } from '$lib/utils/SquareCellGridCoords';
import { findCloneConstraint, findUsedCloneLabels } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { pushAddLocalConstraintCommand, pushUpdateLocalConstraintCommand } from './utils';
import { CLONE_TOOL_MODE } from './types';
import { toolModeStore } from '$stores/InputHandlerStore';

function makeLabel(x: number) {
	x++;

	const out: string[] = [];
	while (x > 0) {
		x--;
		const mod = x % 26;
		x = Math.floor(x / 26);
		out.unshift(String.fromCharCode(65 + mod));
	}
	return out.join('');
}

function getNewLabel(usedLabels: Set<string>): string {
	for (let i = 0; ; i++) {
		const label = makeLabel(i);
		if (!usedLabels.has(label)) return label;
	}
}

export function getCloneToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID
): InputHandler {
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CloneToolI | null = null;
	let oldConstraint: CloneToolI | null = null;
	let id: string | null = null;
	let moveStart: GridCoordI | null = null;
	let movingGroup: 'cells2' | 'cells' = 'cells2';
	let mode = get(toolModeStore);

	function handle(event: CellDragTapEvent) {
		const localConstraints = get(elementsDictStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		// if shift click on an existing cage, add cells to it
		// const match = findCloneConstraint(localConstraints, tool, coords);
		// if (mode === CLONE_TOOL_MODE.DYNAMIC) {
		// 	if (match) {
		// 		id = match[0];
		// 		currentConstraint = match[1];
		// 		mode = CLONE_TOOL_MODE.MOVE;
		// 		moveStart = coords;

		// 		// which group is moving, cells1 or cell2
		// 		const match2 = currentConstraint.cells2.some((_cell) => areCoordsEqual(_cell, coords));
		// 		movingGroup = match2 ? 'cells2' : 'cells';
		// 	} else {
		// 		mode = CLONE_TOOL_MODE.SELECT;
		// 	}
		// }

		const match = findCloneConstraint(localConstraints, tool, coords);
		if (match) {
			id = match[0];
			currentConstraint = match[1];

			if (mode === CLONE_TOOL_MODE.DYNAMIC) {
				mode = CLONE_TOOL_MODE.MOVE
			}

			if (mode === CLONE_TOOL_MODE.MOVE) {
				mode = CLONE_TOOL_MODE.MOVE;
				moveStart = coords;

				// which group is moving, cells1 or cell2
				const match2 = currentConstraint.cells2.some((_cell) => areCoordsEqual(_cell, coords));
				movingGroup = match2 ? 'cells2' : 'cells';
			}
		} else if (mode === CLONE_TOOL_MODE.DYNAMIC) {
			mode = CLONE_TOOL_MODE.SELECT;
		}

		// create new clone or add to existing
		if (mode === CLONE_TOOL_MODE.SELECT && id === null) {
			id = uniqueId();
			const usedLabels = findUsedCloneLabels(localConstraints, tool);
			const label = getNewLabel(usedLabels);
			currentConstraint = cloneConstraint(tool, [coords], label);
			addLocalConstraint(id, currentConstraint);
			return;
		} else if (mode === CLONE_TOOL_MODE.SELECT && id && currentConstraint) {
			// add to current clone
			currentConstraint = updateCloneConstraintCells(currentConstraint, coords);
			updateLocalConstraint(tool, id, currentConstraint);
			return;
		} else if (mode === CLONE_TOOL_MODE.MOVE && id && currentConstraint && moveStart) {
			const dv: GridCoordI = { r: coords.r - moveStart.r, c: coords.c - moveStart.c };
			const groupToUpdate =
				movingGroup === 'cells2' ? currentConstraint.cells2 : currentConstraint.cells;
			const newCells = groupToUpdate.map((cell) => ({ r: cell.r + dv.r, c: cell.c + dv.c }));

			const inGrid = newCells.every((cell) => isCellOnGrid(cell, gridShape));
			if (!inGrid) return;
			if (movingGroup === 'cells') {
				currentConstraint = { ...currentConstraint, cells: newCells };
			} else {
				currentConstraint = { ...currentConstraint, cells2: newCells };
			}
			moveStart = coords;
			updateLocalConstraint(tool, id, currentConstraint);
		}
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		mode = get(toolModeStore);
		id = null;
		currentConstraint = null;
		moveStart = null;
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = (): void => {
		// push command to history stack
		if (!(id && currentConstraint)) return;

		if (mode === CLONE_TOOL_MODE.SELECT) {
			pushAddLocalConstraintCommand(id, currentConstraint, tool);
		} else if (mode === CLONE_TOOL_MODE.MOVE) {
			pushUpdateLocalConstraintCommand(id, oldConstraint, currentConstraint, tool);
		}
		oldConstraint = currentConstraint;
	};

	pointerHandler.onTap = (): void => {
		if (id && mode !== CLONE_TOOL_MODE.SELECT) {
			removeLocalConstraint(tool, id);
			id = null;
			currentConstraint = null;
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
		keyDown: (): void => {
			return;
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
