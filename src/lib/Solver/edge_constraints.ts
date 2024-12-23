import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToVarsName, cellToVarName } from './solver_utils';

function getEdgeVars(grid: Grid, constraint: EdgeToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function valuedEdgeConstraint(
	grid: Grid,
	constraint: EdgeToolI,
	predicate: string,
	default_value: string = ''
) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;

    let value = constraint.value;
    if (!value) value = default_value;

    if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint ${predicate}(${var1}, ${var2}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function xvConstraint(grid: Grid, constraint: EdgeToolI) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;
	if (constraint.value === 'V' || constraint.value === 'v') {
		const constraint_str = `constraint ${var1} + ${var2} = 5;\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} + ${var2} = 10;\n`;
	return constraint_str;
}

function ratioConstraint(grid: Grid, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(grid, constraint, 'ratio_p', '2');
	return constraint_str;
}

function differenceConstraint(grid: Grid, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(grid, constraint, 'abs_difference', '1');
	return constraint_str;
}

function edgeSumConstraint(grid: Grid, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(grid, constraint, 'edge_sum_p');
	return constraint_str;
}

function edgeModuloConstraint(grid: Grid, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(grid, constraint, 'edge_modulo_p');
	return constraint_str;
}

function edgeFactorConstraint(grid: Grid, constraint: EdgeToolI) {
	const constraint_str = valuedEdgeConstraint(grid, constraint, 'edge_factor_p');
	return constraint_str;
}

function xyDifferencesConstraint(grid: Grid, constraint: EdgeToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const [var1, var2] = cellsToVarsName(cells);
	const [cell1, cell2] = cells;

	let var3: string = '';
	if (cell1.r == cell2.r) {
		const row_cells = grid.getRow(cell1.r);
		const first_cell = row_cells[0];
		var3 = cellToVarName(first_cell);
	} else if (cell1.c == cell2.c) {
		const col_cells = grid.getCol(cell1.c);
		const first_cell = col_cells[0];
		var3 = cellToVarName(first_cell);
	}
	if (!var3) return '';

	const constraint_str = `constraint abs(${var1} - ${var2}) == ${var3};\n`;
	return constraint_str;
}

type ConstraintF = (grid: Grid, constraint: EdgeToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.XV, xvConstraint],
	[TOOLS.DIFFERENCE, differenceConstraint],
	[TOOLS.RATIO, ratioConstraint],
	[TOOLS.EDGE_SUM, edgeSumConstraint],
	[TOOLS.EDGE_MODULO, edgeModuloConstraint],
	[TOOLS.EDGE_FACTOR, edgeFactorConstraint],
	[TOOLS.XY_DIFFERENCES, xyDifferencesConstraint]
]);

export function edgeConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as EdgeToolI);
			out_str += constraint_str;
		}
	}
	return out_str;
}
