import type { ConstraintAndId, ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
import type { Grid } from '$src/lib/Puzzle/Grid/Grid';
import { type TOOLID, TOOLS } from '$src/lib/Puzzle/Tools';
import {
	addLocalConstraintAction,
	removeLocalConstraintAction,
	updateLocalConstraintAction
} from '$src/lib/reducers/LocalConstraintsActions';
import type { GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
import { addCommand } from '$stores/CommandHistoryStore';
import { getUpdateElementCommand } from '$stores/LocalConstraintsStore';
import { get, type Writable } from 'svelte/store';
import { keyboardInputDefaultValidator } from '$input/KeyboardEventUtils';
import { BASIC_TOOL_MODE, type ToolModeT, type ValueUpdaterI } from './types';
import { updateConstraintValue } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { updateLocalConstraint } from '$stores/BoardStore';
import type { ToolPreview } from '$stores/ElementsStore';

function getSimilarHighlights(cell: Cell, grid: Grid) {
	const highlights = new Set(cell.highlights);
	const similar_cells = grid.getAllCells().filter((cell2) => {
		const h2 = new Set(cell2.highlights);
		return highlights.difference(h2).size === 0;
	});

	const coords_out = similar_cells.map((cell2) => cell2.toCoords());
	return coords_out;
}

function getSimilarValue(cell: Cell, grid: Grid) {
	const value = cell.value;
	const similar_cells = grid.getAllCells().filter((cell2) => cell2.value === value);
	const coords_out = similar_cells.map((cell2) => cell2.toCoords());
	return coords_out;
}

function getSimilarCornerMarks(cell: Cell, grid: Grid) {
	const corner_marks = new Set(cell.cornerMarks);
	const similar_cells = grid.getAllCells().filter((cell2) => {
		if (cell2.value !== null) return false;
		const h2 = new Set(cell2.cornerMarks);
		return corner_marks.difference(h2).size === 0;
	});

	const coords_out = similar_cells.map((cell2) => cell2.toCoords());
	return coords_out;
}

function getSimilarCenterMarks(cell: Cell, grid: Grid) {
	const center_marks = new Set(cell.centerMarks);
	const similar_cells = grid.getAllCells().filter((cell2) => {
		if (cell2.value !== null) return false;
		const h2 = new Set(cell2.centerMarks);
		return center_marks.difference(h2).size === 0;
	});

	const coords_out = similar_cells.map((cell2) => cell2.toCoords());
	return coords_out;
}

export function getSimilarCells(coords: GridCoordI, grid: Grid, toolId: TOOLID) {
	const target_coords: GridCoordI[] = [coords];
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return target_coords;

	if (toolId === TOOLS.HIGHLIGHTS && cell.highlights.length) {
		const coords_out = getSimilarHighlights(cell, grid);
		return coords_out;
	} else if (cell.value !== null) {
		const coords_out = getSimilarValue(cell, grid);
		return coords_out;
	} else if (toolId === TOOLS.CORNER_PM && cell.cornerMarks.length) {
		const coords_out = getSimilarCornerMarks(cell, grid);
		return coords_out;
	} else if (toolId === TOOLS.CENTER_PM && cell.centerMarks.length) {
		const coords_out = getSimilarCenterMarks(cell, grid);
		return coords_out;
	} else if (cell.cornerMarks.length) {
		const coords_out = getSimilarCornerMarks(cell, grid);
		return coords_out;
	} else if (cell.centerMarks.length) {
		const coords_out = getSimilarCenterMarks(cell, grid);
		return coords_out;
	} else if (cell.highlights.length) {
		const coords_out = getSimilarHighlights(cell, grid);
		return coords_out;
	}

	return target_coords;
}

export function pushAddLocalConstraintCommand(
	element_id: number,
	id: string | null,
	currentConstraint: ConstraintType | null,
	execute: boolean = false
) {
	if (!(id && currentConstraint)) return;
	const action = addLocalConstraintAction(element_id, id, currentConstraint);
	const reverse_action = removeLocalConstraintAction(element_id, id);
	const command = getUpdateElementCommand(action, reverse_action);
	// add it to history but don't execute
	// the clone constraint was already added/updated but only when
	// finishing dragging is the action 'complete'
	addCommand(command, execute);
}

export function pushRemoveLocalConstraintCommand(
	element_id: number,
	id: string | null,
	currentConstraint: ConstraintType | null,
	execute: boolean = true
) {
	if (!(id && currentConstraint)) return;
	const action = removeLocalConstraintAction(element_id, id);
	const reverse_action = addLocalConstraintAction(element_id, id, currentConstraint);
	const command = getUpdateElementCommand(action, reverse_action);
	// add it to histoy but don't execute
	// the clone constraint was already added/updated but only when
	// finishing dragging is the action 'complete'
	addCommand(command, execute);
}

export function pushUpdateLocalConstraintCommand(
	element_id: number,
	id: string | null,
	oldConstraint: ConstraintType | null,
	currentConstraint: ConstraintType | null,
	execute: boolean = false
) {
	if (!(id && currentConstraint && oldConstraint)) return;
	const action = updateLocalConstraintAction(element_id, id, currentConstraint);
	const reverse_action = updateLocalConstraintAction(element_id, id, oldConstraint);
	const command = getUpdateElementCommand(action, reverse_action);
	// add it to histoy but don't execute
	// the clone constraint was already added/updated but only when
	// finishing dragging is the action 'complete'
	addCommand(command, execute);
}

/**
 * Handles keyboard input to update a constraint value.
 *
 * @template T - The type of constraint being updated, must extend ConstraintType.
 * @param event - The keyboard event triggered by user input.
 * @param currentConstraintStore - A writable store containing the current constraint and its ID.
 * @param element_id - The ID of the element being modified, or null if no element is selected.
 * @param value_updater - Optional function that processes the keyboard input and returns the new constraint value.
 *
 * @remarks
 * This function validates that all required parameters are present before attempting to update the constraint.
 * The constraint value is only updated if the value_updater returns a new value different from the current one.
 *
 * @returns void
 */
export function keyDownUpdateValue<T extends ConstraintType>(
	event: KeyboardEvent,
	currentConstraintStore: Writable<ConstraintAndId | null>,
	element_id: number | null,
	value_updater: ValueUpdaterI | undefined
) {
	if (element_id === null) return;
	if (!value_updater) return;

	const currentConstraint = get(currentConstraintStore);
	if (!currentConstraint) return;

	let constraint = currentConstraint.constraint as T;
	const id = currentConstraint.id;

	if (constraint.value === undefined) return;
	if (!keyboardInputDefaultValidator(event.key)) return;

	const newValue = value_updater(constraint?.value, event.key);
	if (newValue !== undefined && newValue !== constraint.value) {
		constraint = updateConstraintValue(constraint, newValue);
		updateLocalConstraint(element_id, id, constraint);
	}
}

export function setConstraintPreviewOnMove<T extends ConstraintType>(
	constraint_preview: T,
	preview_store: Writable<ToolPreview<T> | undefined>,
	match_id: string | undefined,
	tool_mode: ToolModeT
) {

	if (!match_id && tool_mode === BASIC_TOOL_MODE.DELETE) {
		preview_store.set(undefined);
		return;
	}

	let preview_mode: 'add' | 'remove' = 'add';
	if (match_id && (tool_mode === BASIC_TOOL_MODE.DYNAMIC || tool_mode === BASIC_TOOL_MODE.DELETE)) {
		preview_mode = 'remove';
	} else {
		match_id = undefined;
	}

	const aux: ToolPreview<T> = {
		tool: constraint_preview,
		match_id,
		mode: preview_mode
	};
	preview_store.set(aux);
}
