import type { InputHandler } from '../InputHandler';
import { isSingleCellArrowTool, type TOOLID } from '$lib/Puzzle/Tools';
import {
	currentConstraintStore,
	selectConstraint,
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import { eventIsAltR } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { BASIC_TOOL_MODE, type SingleCellArrowToolOptions } from './types';
import type { GridShape } from '$lib/Types/types';
import {
	singleCellArrowConstraint,
	type CellArrowToolI
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { idxToDirection, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { findSingleCellConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import { DIRECTION } from '$lib/utils/directions';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { singleCellArrowPreviewStore, type ToolPreview } from '$stores/ElementsStore';
import { toolModeStore } from '$stores/InputHandlerStore';

export function getSingleCellArrowToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options: SingleCellArrowToolOptions
): InputHandler {
	// console.log('getSingleCellArrowToolInputHandler');
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

	const pointerHandler = new CellFeaturePointerHandler(options.cornerOrEdge);
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CellArrowToolI | null = null;
	let id: string | null = null;

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(localConstraintsStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		let mode = get(toolModeStore);

		// determine if adding or removing
		if (event.event.altKey) mode = BASIC_TOOL_MODE.DELETE;

		const match = findSingleCellConstraint<CellArrowToolI>(localConstraints, tool, coords);
		const direction = idxToDirection(event.direction);

		// create new constraint
		if (!match && mode !== BASIC_TOOL_MODE.DELETE) {
			currentConstraint = singleCellArrowConstraint(tool, coords, direction);
			id = uniqueId();
			pushAddLocalConstraintCommand(id, currentConstraint, tool, true);
		} else if (match) {
			// select
			if (match[1].direction === direction && mode === BASIC_TOOL_MODE.ADD_EDIT) {
				[id, currentConstraint] = match;
				selectConstraint(match[0], tool);
			}
			// remove
			else if (
				(match[1].direction === direction && mode === BASIC_TOOL_MODE.DYNAMIC) ||
				mode === BASIC_TOOL_MODE.DELETE
			) {
				pushRemoveLocalConstraintCommand(match[0], match[1], tool);
			} else {
				// update direction
				id = match[0];
				currentConstraint = { ...match[1], direction: direction } as CellArrowToolI;
				updateLocalConstraint(tool, match[0], currentConstraint);
			}
		}
	}

	function handleKeyDown(event: KeyboardEvent): void {
		if (!eventIsAltR(event)) return;

		const selected = get(currentConstraintStore);
		if (!selected) return;

		const id = selected.id;
		const constraint = selected.constraint;
		if (!isSingleCellArrowTool(constraint.toolId)) return;

		const idx = validDirections.indexOf((constraint as CellArrowToolI).direction);
		const nextIdx = (idx + 1) % validDirections.length;
		currentConstraint = {
			...(constraint as CellArrowToolI),
			direction: validDirections[nextIdx]
		} as CellArrowToolI;
		updateLocalConstraint(tool, id, currentConstraint);
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			singleCellArrowPreviewStore.set(undefined);
			return;
		}

		const direction = idxToDirection(event.direction);
		const constraint_preview = singleCellArrowConstraint(tool, event.cell, direction);

		const mode = get(toolModeStore);
		const localConstraints = get(localConstraintsStore);
		const match = findSingleCellConstraint<CellArrowToolI>(localConstraints, tool, event.cell);
		if (!match && mode === BASIC_TOOL_MODE.DELETE) {
			singleCellArrowPreviewStore.set(undefined);
			return;
		}

		let preview_mode: 'add' | 'remove' = 'add';
		let match_id: string | undefined = undefined;
		if (
			match &&
			(mode === BASIC_TOOL_MODE.DELETE ||
				(match[1].direction === direction && mode === BASIC_TOOL_MODE.DYNAMIC))
		) {
			preview_mode = 'remove';
			match_id = match[0];
		}

		const aux: ToolPreview<CellArrowToolI> = {
			tool: constraint_preview,
			match_id,
			mode: preview_mode
		};

		singleCellArrowPreviewStore.set(aux);
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
		keyDown: (event: KeyboardEvent): void => {
			handleKeyDown(event);
		},
		keyUp: (): void => {}
	};

	return inputHandler;
}
