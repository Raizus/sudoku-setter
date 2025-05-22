import type { ConstraintType } from '$src/lib/Puzzle/Constraints/ElementsDict';
import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
import type { Grid } from '$src/lib/Puzzle/Grid/Grid';
import { type TOOLID, TOOLS } from '$src/lib/Puzzle/Tools';
import {
	addLocalConstraintAction,
	removeLocalConstraintAction,
	updateLocalConstraintAction
} from '$src/lib/reducers/LocalConstraintsActions';
import type { GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
import { addCommand } from '$stores/HistoryStore';
import { getUpdateElementCommand } from '$stores/LocalConstraintsStore';

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
	id: string | null,
	currentConstraint: ConstraintType | null,
	tool: TOOLID,
	execute: boolean = false,
) {
	if (!(id && currentConstraint)) return;
	const action = addLocalConstraintAction(id, currentConstraint);
	const reverse_action = removeLocalConstraintAction(id, tool);
	const command = getUpdateElementCommand(action, reverse_action);
	// add it to histoy but don't execute
	// the clone constraint was already added/updated but only when
	// finishing dragging is the action 'complete'
	addCommand(command, execute);
}

export function pushRemoveLocalConstraintCommand(
	id: string | null,
	currentConstraint: ConstraintType | null,
	tool: TOOLID,
	execute: boolean = true
) {
	if (!(id && currentConstraint)) return;
	const action = removeLocalConstraintAction(id, tool);
	const reverse_action = addLocalConstraintAction(id, currentConstraint);
	const command = getUpdateElementCommand(action, reverse_action);
	// add it to histoy but don't execute
	// the clone constraint was already added/updated but only when
	// finishing dragging is the action 'complete'
	addCommand(command, execute);
}

export function pushUpdateLocalConstraintCommand(
	id: string | null,
	oldConstraint: ConstraintType | null,
	currentConstraint: ConstraintType | null,
	tool: TOOLID,
	execute: boolean = false
) {
	if (!(id && currentConstraint && oldConstraint)) return;
	const action = updateLocalConstraintAction(tool, id, currentConstraint);
	const reverse_action = updateLocalConstraintAction(tool, id, oldConstraint);
	const command = getUpdateElementCommand(action, reverse_action);
	// add it to histoy but don't execute
	// the clone constraint was already added/updated but only when
	// finishing dragging is the action 'complete'
	addCommand(command, execute);
}