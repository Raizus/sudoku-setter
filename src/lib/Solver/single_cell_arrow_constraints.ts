import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellArrowToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellToVarName,
	cellsToVarsName,
	PuzzleModel,
	constraintsBuilder,
	VAR_2D_NAMES,
	cellsToGridVarsStr,
	cellToGridVarName
} from './solver_utils';

export function sashiganeArrowPointsToBendConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	let cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);
	cells = [cell, ...cells];

	const sashigane_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE)
	const sashigane_bend_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE_BENDS);

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);

	let out_str = `constraint sashigane_arrow_points_to_bend_p(${cell_var}, ${sashigane_var}, ${sashigane_vars_str}, ${sashigane_bend_vars_str});\n`;
	out_str += `constraint count_same_adjacent(sashigane, ${cell.r}, ${cell.c}) == 1;\n`;
	return out_str;
}

export function thermoSightlineLoopArrowConstraint(grid: Grid, constraint: CellArrowToolI) {
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

export type ConstraintF3 = (grid: Grid, constraint: CellArrowToolI) => string;

export const cell_arrow_tool_map = new Map<string, ConstraintF3>([
	[TOOLS.SASHIGANE_ARROW_POINTS_TO_BEND, sashiganeArrowPointsToBendConstraint],
	[TOOLS.THERMO_SIGHTLINE_LOOP_ARROW, thermoSightlineLoopArrowConstraint]
]);

export function singleCellArrowConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	const out_str = constraintsBuilder(grid, toolId, constraints, cell_arrow_tool_map);
	return out_str;
}
