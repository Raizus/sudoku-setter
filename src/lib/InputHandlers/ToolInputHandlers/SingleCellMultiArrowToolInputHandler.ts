import type { InputHandler } from '../InputHandler';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { updateLocalConstraint } from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import type { SingleCellMultiArrowToolOptions } from './types';
import {
	singleCellMultiArrowConstraint,
	type CellMultiArrowToolI
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { findSingleCellConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import { idxToDirection, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import type { GridShape } from '$lib/Types/types';
import type { DIRECTION } from '$lib/utils/directions';
import { singleCellMultiArrowPreviewStore } from '$stores/ElementsStore';

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

enum CELL_MULTI_ARROW_TOOL_MODE {
	DYNAMIC = 'Dynamic',
	ADD_EDIT = 'Add/Edit',
	DELETE = 'Delete'
}

export function getSingleCellMultiArrowToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options: SingleCellMultiArrowToolOptions
): InputHandler {
	// console.log('getSingleCellMultiArrowToolInputHandler');
	const pointerHandler = new CellFeaturePointerHandler(options.cornerOrEdge);
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CellMultiArrowToolI | null = null;
	let id: string | null = null;

	let mode = CELL_MULTI_ARROW_TOOL_MODE.DYNAMIC;

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(localConstraintsStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		if (event.event.altKey) mode = CELL_MULTI_ARROW_TOOL_MODE.DELETE;
		// determine if adding or removing

		const direction = idxToDirection(event.direction);
		const match = findSingleCellConstraint<CellMultiArrowToolI>(localConstraints, tool, coords);
		if (match) {
			id = match[0];
			currentConstraint = match[1];

			if (mode === CELL_MULTI_ARROW_TOOL_MODE.DELETE) {
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
		} else if (mode !== CELL_MULTI_ARROW_TOOL_MODE.DELETE) {
			currentConstraint = singleCellMultiArrowConstraint(tool, coords, direction);
			id = uniqueId();
			addLocalConstraint(id, currentConstraint);
		}
	}

	function handleKeyDown(): void {
		if (!currentConstraint || !id) return;
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		mode = CELL_MULTI_ARROW_TOOL_MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			singleCellMultiArrowPreviewStore.set(undefined);
			return;
		}

		const direction = idxToDirection(event.direction);
		const phantom_constraint = singleCellMultiArrowConstraint(tool, event.cell, direction);
		singleCellMultiArrowPreviewStore.set(phantom_constraint);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (event: PointerEvent): void => {
			pointerHandler.pointerMove(event, svgRef);
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
