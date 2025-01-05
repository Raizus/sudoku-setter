import type { ArrowToolI } from '../Puzzle/Constraints/ArrowConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToVarsName, constraintsBuilder, PuzzleModel } from './solver_utils';

type ConstraintF = (grid: Grid, constraint: ArrowToolI) => string;

function getArrowPillVars(grid: Grid, constraint: ArrowToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function lineToVarsStr(grid: Grid, line: GridCoordI[]) {
	const line_cells = line
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const line_vars = cellsToVarsName(line_cells.slice(1));
	const line_vars_str = `[${line_vars.join(',')}]`;	
	return line_vars_str;
}

function arrowConstraint(grid: Grid, constraint: ArrowToolI) {
	let out_str = '';
	const vars = getArrowPillVars(grid, constraint);

	if (vars.length === 1) {
		const circ_var = vars[0];
		const lines = constraint.lines;
		for (const line of lines) {
			const line_vars_str = lineToVarsStr(grid, line);
			const constraint_str = `constraint sum(${line_vars_str}) == ${circ_var};\n`;
			out_str += constraint_str;
		}
	}
	return out_str;
}

function averageArrowConstraint(grid: Grid, constraint: ArrowToolI) {
	let out_str = '';
	const vars = getArrowPillVars(grid, constraint);

	if (vars.length === 1) {
		const circ_var = vars[0];
		const lines = constraint.lines;
		for (const line of lines) {
			const line_vars_str = lineToVarsStr(grid, line);
			const constraint_str = `constraint average_arrow_p(${line_vars_str}, ${circ_var});\n`;
			out_str += constraint_str;
		}
	}
	return out_str;
}

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.ARROW, arrowConstraint],
	[TOOLS.AVERAGE_ARROW, averageArrowConstraint]
]);

export function arrowConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	return out_str;
}
