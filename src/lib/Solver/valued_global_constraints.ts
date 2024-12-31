import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { ValuedGlobalToolI } from '../Puzzle/Constraints/ValuedGlobalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';

type ConstraintF = (grid: Grid, constraint: ValuedGlobalToolI) => string;

function forbiddenAdjacentSumConstraint(grid: Grid, constraint: ValuedGlobalToolI) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint forbidden_adjacent_sum_p(board, ${val});\n`;
	return constraint_str;
}

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM, forbiddenAdjacentSumConstraint]
]);

export function valuedGlobalConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as ValuedGlobalToolI);
			out_str += constraint_str;
		}
	}
	return out_str;
}
