import type { InputHandler } from '../InputHandler';
import {
	currentConstraintStore,
	setCurrentConstraint,
	updateLocalConstraint
} from '$stores/BoardStore';
import { elementsDictStore } from '$stores/BoardStore';
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
	updateCageValue
} from '$lib/Puzzle/Constraints/CageConstraints';
import { type CageToolI } from "$src/lib/Puzzle/puzzle_schema";
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { findCageConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { BASIC_TOOL_MODE, type CageToolInputOptions } from './types';
import { toolModeStore } from '$stores/InputHandlerStore';

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

	function handle(event: CellDragTapEvent) {
		const localConstraints = get(elementsDictStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		let mode = get(toolModeStore);

		// if shift click on an existing cage or mode is add/edit, set it as current constraint
		const match = findCageConstraint(localConstraints, tool, coords);
		if (match && (event.event.shiftKey || mode === BASIC_TOOL_MODE.ADD_EDIT)) {
			id = match[0];
			currentConstraint = match[1];
			setCurrentConstraint({ id, constraint: currentConstraint });
			mode = BASIC_TOOL_MODE.ADD_EDIT;
		}

		// determine if adding or removing
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			pushRemoveLocalConstraintCommand(match[0], match[1], tool);
			return;
		}

		if (!currentConstraint && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			// create new cage
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
		if (!keyboardInputDefaultValidator(event.key)) return;
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
