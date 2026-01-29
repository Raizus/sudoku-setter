import type { InputHandler } from '../InputHandler';
import {
	currentConstraintStore,
	selectedElementIdStore,
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
import { type CageToolI } from '$src/lib/Puzzle/puzzle_schema';
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

	let mode_aux = get(toolModeStore);
	let currentConstraint: CageToolI | null = null;
	let id: string | null = null;

	function handle(event: CellDragTapEvent) {
		const coords = event.cell;
		
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;
		
		// if shift click on an existing cage or mode is add/edit, set it as current constraint,
		// if there is no current constraint
		const elements = get(elementsDictStore);
		const match = findCageConstraint(elements, tool, coords);
		if (
			id === null &&
			currentConstraint === null &&
			match &&
			(event.event.shiftKey || mode_aux === BASIC_TOOL_MODE.ADD_EDIT)
		) {
			id = match[0];
			currentConstraint = match[1];
			setCurrentConstraint({ id, constraint: currentConstraint });
			mode_aux = BASIC_TOOL_MODE.ADD_EDIT;
		}

		// determine if adding or removing
		if (mode_aux === BASIC_TOOL_MODE.DYNAMIC) {
			mode_aux = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		if (match && mode_aux === BASIC_TOOL_MODE.DELETE) {
			pushRemoveLocalConstraintCommand(element_id, match[0], match[1]);
			return;
		}

		if (!currentConstraint && mode_aux === BASIC_TOOL_MODE.ADD_EDIT) {
			// create new cage
			currentConstraint = cageConstraint(tool, [coords]);
			id = uniqueId();
			addLocalConstraint(element_id, id, currentConstraint);
			return;
		}

		// add to current cage
		else if (currentConstraint && id && mode_aux === BASIC_TOOL_MODE.ADD_EDIT) {
			const allowDiagonallyAdjacent = options?.allowDiagonallyAdjacent ?? false;
			currentConstraint = updateCageConstraintCells(
				currentConstraint,
				coords,
				allowDiagonallyAdjacent
			);
			updateLocalConstraint(element_id, id, currentConstraint);
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

		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateCageValue(constraint, newValue);
			updateLocalConstraint(element_id, id, constraint);
		}
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		id = null;
		currentConstraint = null;
		mode_aux = get(toolModeStore);
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		const element_id = get(selectedElementIdStore);
		if (element_id === null) return;

		if (id && currentConstraint) {
			// push command to history stack
			pushAddLocalConstraintCommand(element_id, id, currentConstraint, false);
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
