import type { InputHandler } from '../InputHandler';
import {
	currentConstraintStore,
	setCurrentConstraint,
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import { keyboardInputDefaultValidator } from '../KeyboardEventUtils';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import {
	cageConstraint,
	updateCageConstraintCells,
	type CageToolI,
	updateCageValue
} from '$lib/Puzzle/Constraints/CageConstraints';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { findCageConstraint } from '$lib/Puzzle/Constraints/LocalConstraints';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { BASIC_TOOL_MODE, type CageToolInputOptions } from './types';

export function getCageToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CageToolInputOptions
): InputHandler {
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CageToolI | null = null;
	let id: string | null = null;

	let mode = BASIC_TOOL_MODE.DYNAMIC;

	function handle(event: CellDragTapEvent) {
		const localConstraints = get(localConstraintsStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		// if shift click on an existing cage, add cells to it
		if (event.event.shiftKey) {
			const match = findCageConstraint(localConstraints, tool, coords);
			if (match) {
				id = match[0];
				currentConstraint = match[1];
				setCurrentConstraint({ id, constraint: currentConstraint });
				mode = BASIC_TOOL_MODE.ADD_EDIT;
			}
		}

		// determine if adding or removing
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			const match = findCageConstraint(localConstraints, tool, coords);
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;

			if (match) {
				pushRemoveLocalConstraintCommand(match[0], match[1], tool);
				return;
			}
		}

		// create new cage
		if (!currentConstraint && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			currentConstraint = cageConstraint(tool, [coords]);
			id = uniqueId();
			addLocalConstraint(id, currentConstraint);
			return;
		}
		// add to current cage
		else if (currentConstraint && id && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const allowDiagonallyAdjacent = options?.allowDiagonallyAdjacent ?? false;
			currentConstraint = updateCageConstraintCells(
				currentConstraint,
				coords,
				allowDiagonallyAdjacent
			);
			updateLocalConstraint(tool, id, currentConstraint);
			return;
		}
	}

	function handleKeyDown(event: KeyboardEvent): void {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as CageToolI;
		const id = currentConstraint.id;

		if (constraint.value === undefined) return;
		if (!keyboardInputDefaultValidator(event)) return;
		if (!options?.valueUpdater) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateCageValue(constraint, newValue);
			updateLocalConstraint(tool, id, constraint);
		}
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		id = null;
		currentConstraint = null;
		mode = BASIC_TOOL_MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		if (id && currentConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(id, currentConstraint, tool, false);
		}

		id = null;
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
		keyDown: (event: KeyboardEvent): void => {
			handleKeyDown(event);
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
