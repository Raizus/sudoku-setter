import type { InputHandler } from '../InputHandler';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { selectConstraint, updateLocalConstraint } from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { BASIC_TOOL_MODE, type SingleCellMultiArrowToolOptions } from './types';
import {
	singleCellMultiArrowConstraint,
	type CellMultiArrowToolI
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { findSingleCellConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import { idxToDirection, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import type { GridShape } from '$lib/Types/types';
import type { DIRECTION } from '$lib/utils/directions';
import { singleCellMultiArrowPreviewStore } from '$stores/ElementsStore';
import { toolModeStore } from '$stores/InputHandlerStore';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';

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
	options: SingleCellMultiArrowToolOptions
): InputHandler {
	// console.log('getSingleCellMultiArrowToolInputHandler');
	const pointerHandler = new CellFeaturePointerHandler(options.cornerOrEdge);
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CellMultiArrowToolI | null = null;
	let id: string | null = null;

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(elementsDictStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		let mode = get(toolModeStore);

		if (mode === BASIC_TOOL_MODE.DYNAMIC && event.event.altKey) mode = BASIC_TOOL_MODE.DELETE;

		const direction = idxToDirection(event.direction);
		const match = findSingleCellConstraint<CellMultiArrowToolI>(localConstraints, tool, coords);

		// create new constraint
		if (!match && mode !== BASIC_TOOL_MODE.DELETE) {
			currentConstraint = singleCellMultiArrowConstraint(tool, coords, direction);
			id = uniqueId();
			pushAddLocalConstraintCommand(id, currentConstraint, tool, true);
		} else if (match) {
			// select
			if (match[1].directions.includes(direction) && mode !== BASIC_TOOL_MODE.DELETE) {
				[id, currentConstraint] = match;
				selectConstraint(match[0], tool);
			}
			// remove constraint
			if (match && mode === BASIC_TOOL_MODE.DELETE) {
				pushRemoveLocalConstraintCommand(match[0], match[1], tool);
			}
			// update directions, add/remove arrow (if empty remove constraint)
			else {
				const newDirections = updateDirections(match[1].directions, direction);
				if (newDirections.length > 0) {
					id = match[0];
					currentConstraint = {
						...match[1],
						directions: newDirections
					} as CellMultiArrowToolI;
					updateLocalConstraint(tool, match[0], currentConstraint);
				} else {
					pushRemoveLocalConstraintCommand(match[0], match[1], tool);
				}
			}
		}
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			singleCellMultiArrowPreviewStore.set(undefined);
			return;
		}

		const direction = idxToDirection(event.direction);
		const constraint_preview = singleCellMultiArrowConstraint(tool, event.cell, direction);
		
		const mode = get(toolModeStore);
		// const localConstraints = get(localConstraintsStore);
		// const match = findSingleCellConstraint<CellMultiArrowToolI>(localConstraints, tool, event.cell);
		if (mode === BASIC_TOOL_MODE.DELETE) {
			singleCellMultiArrowPreviewStore.set(undefined);
			return;
		}

		singleCellMultiArrowPreviewStore.set(constraint_preview);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (event: PointerEvent): void => {
			pointerHandler.pointerMove(event, svgRef);
		},
		pointerUp: (): void => {},
		keyDown: (): void => {},
		keyUp: (): void => {}
	};

	return inputHandler;
}
