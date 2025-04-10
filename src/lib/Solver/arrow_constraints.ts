import type { ArrowToolI } from '../Puzzle/Constraints/ArrowConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToGridVarsStr, cellsToVarsName, PuzzleModel, VAR_2D_NAMES } from './solver_utils';

function getArrowPillVars(grid: Grid, constraint: ArrowToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function lineToVarsStr(grid: Grid, line: GridCoordI[]) {
	const line_cells = line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	const line_vars = cellsToVarsName(line_cells.slice(1));
	const line_vars_str = `[${line_vars.join(',')}]`;
	return line_vars_str;
}

function arrowConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: ArrowToolI) {
	let out_str = '';
	const vars = getArrowPillVars(grid, constraint);
	const pill_vars_str = '[' + vars.join(',') + ']';

	for (const line of constraint.lines) {
		const line_vars_str = lineToVarsStr(grid, line);
		out_str += `constraint arrow_p(${pill_vars_str}, ${line_vars_str});\n`;
	}

	// const sum_var_name = `arrow_${c_id}`;
	// out_str += `var int: ${sum_var_name};\n`;

	// out_str += '% arrow pill\n';
	// if (vars.length === 1) {
	// 	const circ_var = vars[0];
	// 	out_str += `constraint ${sum_var_name} == ${circ_var};\n`;
	// } else if (vars.length > 1) {
	// 	const aux = vars
	// 		.toReversed()
	// 		.map((_var, i) => `${Math.pow(10, i)}*${_var}`)
	// 		.join(' + ');
	// 	out_str += `constraint ${sum_var_name} == ${aux};\n`;
	// } else return '';

	// const lines = constraint.lines;
	// out_str += '% arrow lines\n';
	// for (const line of lines) {
	// 	const line_vars_str = lineToVarsStr(grid, line);
	// 	const constraint_str = `constraint sum(${line_vars_str}) == ${sum_var_name};\n`;
	// 	out_str += constraint_str;
	// }
	return out_str;
}

function averageArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
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

function chaosConstructionArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';

	const circle_cells = constraint.cells
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const circle_region_vars = cellsToGridVarsStr(circle_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const lines_cells = constraint.lines.map((line) =>
		line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	for (const line of lines_cells) {
		if (line.length <= 1) continue;
		const arrow_vars = cellsToGridVarsStr(line.slice(1), VAR_2D_NAMES.UNKNOWN_REGIONS);
		out_str += `constraint chaos_construction_arrow_p(${circle_region_vars}, ${arrow_vars});\n`;
	}

	out_str += arrowConstraint(model, grid, c_id, constraint);

	return out_str;
}

function bulbousArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';
	const vars = getArrowPillVars(grid, constraint);

	const bulb_str = '[' + vars.join(',') + ']';
	const lines = constraint.lines;
	for (const line of lines) {
		const line_vars_str = lineToVarsStr(grid, line);
		const constraint_str = `constraint bulbous_arrow_p(${bulb_str}, ${line_vars_str});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

type ConstraintF = (model: PuzzleModel, grid: Grid, c_id: string, constraint: ArrowToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.ARROW, arrowConstraint],
	[TOOLS.AVERAGE_ARROW, averageArrowConstraint],
	[TOOLS.BULBOUS_ARROW, bulbousArrowConstraint],
	[TOOLS.CHAOS_CONSTRUCTION_ARROW, chaosConstructionArrowConstraint]
]);

export function arrowConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as ArrowToolI);
			out_str += constraint_str;
		}
	}

	return out_str;
}
