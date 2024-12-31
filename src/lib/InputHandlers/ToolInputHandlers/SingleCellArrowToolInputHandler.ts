import type { InputHandler } from '../InputHandler';
import type { TOOLID } from '$lib/Puzzle/Tools';
import {
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import { eventIsAltR } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellEdgeCornerPointerHandler,
	CornerOrEdge,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import type { GridShape } from '$lib/Types/types';
import {
	singleCellArrowConstraint,
	type CellArrowToolI
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { idxToDirection, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { findSingleCellConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import { DIRECTION } from '$lib/utils/directions';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';

export function getSingleCellArrowToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	cornerOrEdge = CornerOrEdge.CORNER_OR_EDGE
): InputHandler {
	console.log('getSingleCellArrowToolInputHandler');
	const validDirections = [
		DIRECTION.N,
		DIRECTION.NE,
		DIRECTION.E,
		DIRECTION.SE,
		DIRECTION.S,
		DIRECTION.SW,
		DIRECTION.W,
		DIRECTION.NW
	];
	const pointerHandler = new CellEdgeCornerPointerHandler(cornerOrEdge);
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CellArrowToolI | null = null;
	let id: string | null = null;

	enum MODE {
		DYNAMIC,
		ADDING,
		REMOVING
	}
	let mode = MODE.DYNAMIC;

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(localConstraintsStore);
		const coords = event.cell;
		console.log(event);
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		if (event.event.altKey) mode = MODE.REMOVING;
		// determine if adding or removing

		const match = findSingleCellConstraint<CellArrowToolI>(localConstraints, tool, coords);
		const direction = idxToDirection(event.direction);
		if (match) {
			[id, currentConstraint] = match
			// update arrow or remove
			if (currentConstraint.direction === direction || mode === MODE.REMOVING) {
				//remove
				pushRemoveLocalConstraintCommand(id, currentConstraint, tool);
			} else {
				//update
				currentConstraint = { ...currentConstraint, direction: direction } as CellArrowToolI;
				updateLocalConstraint(tool, id, currentConstraint);
			}
			return;
		} else if (mode !== MODE.REMOVING) {
			currentConstraint = singleCellArrowConstraint(tool, coords, direction);
			id = uniqueId();
			pushAddLocalConstraintCommand(id, currentConstraint, tool, true);
		}
	}

	function handleKeyDown(event: KeyboardEvent): void {
		if (!currentConstraint || !id) return;
		if (!eventIsAltR(event)) return;
		const idx = validDirections.indexOf(currentConstraint.direction);
		const nextIdx = (idx + 1) % validDirections.length;
		currentConstraint = {
			...currentConstraint,
			direction: validDirections[nextIdx]
		} as CellArrowToolI;
		updateLocalConstraint(tool, id, currentConstraint);
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		mode = MODE.DYNAMIC;
		handle(event);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (): void => {
			return;
		},
		pointerUp: (): void => {
			return;
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
