import type { InputHandler } from '../InputHandler';
import {
	currentConstraintStore,
	selectConstraint,
	selectedElementIdStore,
	updateLocalConstraint
} from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { BASIC_TOOL_MODE, CornerOrEdge } from './types';
import type { GridShape } from '$lib/Types/types';
import {
	updateConstraintValue,
	findOutsideDirectionConstraint
} from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	gridCoordsNextInDirection,
	idxToDirection,
	isCellOnGrid
} from '$lib/utils/SquareCellGridCoords';
import {
	outsideDirectionConstraint} from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
import { type OutsideDirectionToolI } from "$src/lib/Puzzle/puzzle_schema";
import type { OutsideDirectionToolInputOptions } from './types';
import { outsideDirectionToolPreviewStore } from '$stores/ElementsStore';
import { toolModeStore } from '$stores/InputHandlerStore';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';

export function getOutsideDirectionToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: OutsideDirectionToolInputOptions
): InputHandler {
	// console.log('getOutsideEdgeToolInputHandler');

	const cornerOrEdge = options?.cornerOrEdge ?? CornerOrEdge.CORNER_OR_EDGE;
	const pointerHandler = new CellFeaturePointerHandler(cornerOrEdge);
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellEdgeCornerEvent) {
		const cell = event.cell;
		const direction_idx = event.direction;
		const direction = idxToDirection(direction_idx);
		
		const onGrid = isCellOnGrid(cell, gridShape);
		if (onGrid) return;
		
		const neighbour = gridCoordsNextInDirection(cell, direction);
		const neighbourOnGrid = isCellOnGrid(neighbour, gridShape);
		if (!neighbourOnGrid) return;
		
		let mode = get(toolModeStore);
		
		// determine if adding or removing
		const elements = get(elementsDictStore);
		const match = findOutsideDirectionConstraint(elements, tool, cell, direction);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const [id, constraint] = match;
			pushRemoveLocalConstraintCommand(element_id, id, constraint);
		} else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const newConstraint = outsideDirectionConstraint(tool, cell, direction, '');
			const id = uniqueId();
			pushAddLocalConstraintCommand(element_id, id, newConstraint, true);
		} else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			selectConstraint(element_id, match[0]);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as OutsideDirectionToolI;
		const id = currentConstraint.id;

		if (constraint.value === undefined) return;
		if (!keyboardInputDefaultValidator(event.key)) return;
		if (!options?.valueUpdater) return;

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateConstraintValue(constraint, newValue);
			updateLocalConstraint(element_id, id, constraint);
		}
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (onGrid) {
			outsideDirectionToolPreviewStore.set(undefined);
			return;
		}

		const direction = idxToDirection(event.direction);
		const neighbour = gridCoordsNextInDirection(event.cell, direction);
		const neighbourOnGrid = isCellOnGrid(neighbour, gridShape);
		if (!neighbourOnGrid) {
			outsideDirectionToolPreviewStore.set(undefined);
			return;
		}

		const mode = get(toolModeStore);
		const elements = get(elementsDictStore);
		const match = findOutsideDirectionConstraint(elements, tool, event.cell, direction);
		if (!match && mode === BASIC_TOOL_MODE.DELETE) {
			outsideDirectionToolPreviewStore.set(undefined);
			return;
		}

		const constraint_preview = outsideDirectionConstraint(tool, event.cell, direction, '');

		outsideDirectionToolPreviewStore.set(constraint_preview);
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
		keyDown: (event: KeyboardEvent): void => {
			onKeyDown(event);
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
