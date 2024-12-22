import type { CornerToolI } from '../Puzzle/Constraints/CornerConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToVarsName } from './solver_utils';

function getCornerVars(grid: Grid, constraint: CornerToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleCornerConstraint(
	grid: Grid,
	constraint: CornerToolI,
	predicate: string
) {
	const vars = getCornerVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const constraint_str = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

function valuedCornerConstraint(
	grid: Grid,
	constraint: CornerToolI,
	predicate: string,
	default_value: string = ''
) {
	const vars = getCornerVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	let value = constraint.value;
	if (!value) value = default_value;

	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function cornerSumConstraint(grid: Grid, constraint: CornerToolI) {
	const constraint_str = valuedCornerConstraint(grid, constraint, 'corner_sum_p');
	return constraint_str;
}

function cornerEvenCountConstraint(grid: Grid, constraint: CornerToolI) {
	const constraint_str = valuedCornerConstraint(grid, constraint, 'corner_even_count_p');
	return constraint_str;
}

function cornerSumOfThreeEqualsTheOtherConstraint(grid: Grid, constraint: CornerToolI) {
	const constraint_str = simpleCornerConstraint(
		grid,
		constraint,
		'corner_sum_of_three_equals_the_other_p'
	);
	return constraint_str;
}

type ConstraintF = (grid: Grid, constraint: CornerToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.CORNER_SUM, cornerSumConstraint],
	[TOOLS.CORNER_EVEN_COUNT, cornerEvenCountConstraint],
	[TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER, cornerSumOfThreeEqualsTheOtherConstraint]
]);

export function cornerConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as CornerToolI);
			out_str += constraint_str;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}
