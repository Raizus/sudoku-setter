import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToVarsName } from './solver_utils';

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
	const constraint_str = valuedEdgeConstraint(grid, constraint, 'abs_difference', '2');
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

type ConstraintF = (grid: Grid, constraint: EdgeToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.XV, xvConstraint],
	[TOOLS.DIFFERENCE, differenceConstraint],
	[TOOLS.RATIO, ratioConstraint],
	[TOOLS.EDGE_SUM, edgeSumConstraint],
	[TOOLS.EDGE_MODULO, edgeModuloConstraint],
	[TOOLS.EDGE_FACTOR, edgeFactorConstraint]
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

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}
