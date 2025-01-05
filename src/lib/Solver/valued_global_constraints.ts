import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { ValuedGlobalToolI } from '../Puzzle/Constraints/ValuedGlobalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { constraintsBuilder, PuzzleModel } from './solver_utils';

type ConstraintF = (grid: Grid, constraint: ValuedGlobalToolI) => string;

function forbiddenAdjacentSumConstraint(grid: Grid, constraint: ValuedGlobalToolI) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint forbidden_adjacent_sum_p(board, ${val});\n`;
	return constraint_str;
}

function minimumDiagonallyAdjacentDifferenceConstraint(grid: Grid, constraint: ValuedGlobalToolI) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint minimum_diagonally_adjacent_difference(board, ${val});\n`;
	return constraint_str;
}

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM, forbiddenAdjacentSumConstraint],
	[TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE, minimumDiagonallyAdjacentDifferenceConstraint]
]);

export function valuedGlobalConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	const out_str = constraintsBuilder(grid, toolId, constraints, tool_map);
	return out_str;
}
