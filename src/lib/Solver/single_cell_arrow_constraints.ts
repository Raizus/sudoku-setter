import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { CellArrowToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	cellToVarName,
	cellsToVarsName,
	PuzzleModel,
	VAR_2D_NAMES,
	cellsToGridVarsStr,
	cellToGridVarName,
	constraintsBuilder,
	type ElementF
} from './solver_utils';

function simpleCellArrowElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	func: (grid: Grid, constraint: CellArrowToolI) => string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = func(grid, constraint as CellArrowToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function sashiganeArrowPointsToBendConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	let cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);
	cells = [cell, ...cells];

	const sashigane_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE);
	const sashigane_bend_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE_BENDS);

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);

	let out_str = `constraint sashigane_arrow_points_to_bend_p(${cell_var}, ${sashigane_var}, ${sashigane_vars_str}, ${sashigane_bend_vars_str});\n`;
	out_str += `constraint count_same_adjacent(sashigane, ${cell.r}, ${cell.c}) == 1;\n`;
	return out_str;
}

function sashiganeArrowPointsToBendElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCellArrowElement(model, element, sashiganeArrowPointsToBendConstraint);
	return out_str;
}

function thermoSightlineLoopArrowConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	const cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);

	const cells_vars = cellsToVarsName(cells);
	const cells_vars_str = '[' + cells_vars.join(',') + ']';
	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const cell_var = cellToVarName(cell);

	const constraint_str = `constraint thermo_sightline_loop_arrow_p(${cells_vars_str}, ${loop_vars_str}, ${cell_var});\n`;
	return constraint_str;
}

function thermoSightlineLoopArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCellArrowElement(model, element, thermoSightlineLoopArrowConstraint);
	return out_str;
}

function internalLoopSkyscrapersConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	const cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);

	const cells_vars = cellsToVarsName(cells);
	const cells_vars_str = '[' + cells_vars.join(',') + ']';
	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const cell_var = cellToVarName(cell);

	const constraint_str = `constraint internal_loop_skyscrapers_p(${cells_vars_str}, ${loop_vars_str}, ${cell_var});\n`;
	return constraint_str;
}

function internalLoopSkyscrapersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCellArrowElement(model, element, internalLoopSkyscrapersConstraint);
	return out_str;
}

export const tool_map = new Map<string, ElementF>([
	[TOOLS.SASHIGANE_ARROW_POINTS_TO_BEND, sashiganeArrowPointsToBendElement],
	[TOOLS.THERMO_SIGHTLINE_LOOP_ARROW, thermoSightlineLoopArrowElement],
	[TOOLS.INTERNAL_LOOP_SKYSCRAPERS, internalLoopSkyscrapersElement]
]);

export function singleCellArrowElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
