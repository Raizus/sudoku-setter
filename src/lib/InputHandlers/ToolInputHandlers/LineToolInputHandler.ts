import type { InputHandler } from '../InputHandler';
import {
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { updateLineConstraintCells, type LineToolI, lineConstraint } from '$lib/Puzzle/Constraints/LineConstraints';
import { findLineConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import { CellPointerHandler, type CellDragTapEvent } from '$src/lib/InputHandlers/PointerHandlers/SquareCellPointerInput';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';

export type LineInputHandlerOptions = {
	// deletePrioritizeHead: boolean,
	// deletePrioritizeTail: boolean,
	allowSelfIntersection: boolean;
	defaultValue?: string;
};

export function getLineToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: LineInputHandlerOptions
): InputHandler {
	console.log('getLineToolInputHandler');
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	const allowSelfIntersection = options?.allowSelfIntersection ?? false;

	let newConstraint: LineToolI | null = null;
	let id: string | null = null;

	// enum MODE {
	// 	DYNAMIC,
	// 	ADDING,
	// 	REMOVING
	// }
	// let mode = MODE.DYNAMIC;

	function handle(event: CellDragTapEvent) {
		if (!id || !newConstraint) throw 'UNREACHABLE';

		const coords = event.cell;
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		newConstraint = updateLineConstraintCells(newConstraint, coords, allowSelfIntersection);
		updateLocalConstraint(tool, id, newConstraint);
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		id = uniqueId();
		newConstraint = lineConstraint(tool, [], options?.defaultValue);
		addLocalConstraint(id, newConstraint);
		// mode = MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		if (id && newConstraint && newConstraint.cells.length <= 1) {
			removeLocalConstraint(tool, id);
		} else if (id && newConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(id, newConstraint, tool, false);
		}

		id = null;
	};

	pointerHandler.onTap = (event: CellDragTapEvent) => {
		const coords = event.cell;
		const localConstraints = get(localConstraintsStore);
		const match = findLineConstraint(localConstraints, tool, coords);
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
		keyDown: (): void => {
			return;
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
