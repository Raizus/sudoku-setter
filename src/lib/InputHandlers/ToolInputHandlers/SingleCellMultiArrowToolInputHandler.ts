import type { InputHandler } from '../InputHandler';
import type { TOOLID } from '$lib/Puzzle/Tools';
import {
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import { CellEdgeCornerPointerHandler, CornerOrEdge, type CellEdgeCornerEvent } from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { singleCellMultiArrowConstraint, type CellMultiArrowToolI } from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { findSingleCellConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import { idxToDirection, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import type { GridShape } from '$lib/Types/types';
import type { DIRECTION } from '$lib/utils/directions';

function updateDirections(directions: DIRECTION[], dir: DIRECTION): DIRECTION[] {
	directions = [...directions];
	const idx = directions.indexOf(dir);
	if (idx !== -1) {
		directions.splice(idx, 1);
		return directions;
	}
	directions.push(dir);
	directions.sort();
	return directions;
}

export function getSingleCellMultiArrowToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	cornerOrEdge = CornerOrEdge.BOTH
): InputHandler {
	console.log('getSingleCellMultiArrowToolInputHandler');
	const pointerHandler = new CellEdgeCornerPointerHandler(cornerOrEdge);
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CellMultiArrowToolI | null = null;
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
		
		const direction = idxToDirection(event.direction);
		const match = findSingleCellConstraint<CellMultiArrowToolI>(localConstraints, tool, coords);
		if (match) {
			id = match[0];
			currentConstraint = match[1];

			if (mode === MODE.REMOVING) {
				removeLocalConstraint(tool, match[0]);
			} else {
				//update directions (if empty remove constraint)
				const newDirections = updateDirections(currentConstraint.directions, direction);
				if (newDirections.length) {
					currentConstraint = {
						...currentConstraint,
						directions: newDirections
					} as CellMultiArrowToolI;
					updateLocalConstraint(tool, id, currentConstraint);
				} else {
					removeLocalConstraint(tool, id);
				}
			}
			return;
		} else if (mode !== MODE.REMOVING) {
			currentConstraint = singleCellMultiArrowConstraint(tool, coords, direction);
			id = uniqueId();
			addLocalConstraint(id, currentConstraint);
		}
	}

	function handleKeyDown(): void {
		if (!currentConstraint || !id) return;
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
		keyDown: (): void => {
			handleKeyDown();
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
