import type { InputHandler } from '../InputHandler';
import { currentConstraintStore, updateLocalConstraint } from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { CornerOrEdge } from './types';
import type { GridShape } from '$lib/Types/types';
import {
	updateConstraintValue,
	findOutsideDirectionConstraint
} from '$lib/Puzzle/Constraints/LocalConstraints';
import {
	gridCoordsNextInDirection,
	idxToDirection,
	isCellOnGrid
} from '$lib/utils/SquareCellGridCoords';
import {
	outsideDirectionConstraint,
	type OutsideDirectionToolI
} from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
import type { OutsideDirectionToolInputOptions } from './types';
import { outsideDirectionToolPreviewStore } from '$stores/ElementsStore';

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

	let currentConstraint: OutsideDirectionToolI | null = null;
	let id: string | null = null;

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(localConstraintsStore);
		const cell = event.cell;
		const direction_idx = event.direction;
		const direction = idxToDirection(direction_idx);

		const onGrid = isCellOnGrid(cell, gridShape);
		if (onGrid) return;
		const neighbour = gridCoordsNextInDirection(cell, direction);
		const neighbourOnGrid = isCellOnGrid(neighbour, gridShape);
		if (!neighbourOnGrid) return;

		const match = findOutsideDirectionConstraint(localConstraints, tool, cell, direction);
		if (match) {
			removeLocalConstraint(tool, match);
			return;
		}

		currentConstraint = outsideDirectionConstraint(tool, cell, direction, '');
		id = uniqueId();
		addLocalConstraint(id, currentConstraint);
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as OutsideDirectionToolI;
		const id = currentConstraint.id;

		if (constraint.value === undefined) return;
		if (!keyboardInputDefaultValidator(event)) return;
		if (!options?.valueUpdater) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateConstraintValue(constraint, newValue);
			updateLocalConstraint(tool, id, constraint);
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
