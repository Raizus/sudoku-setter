import type { CornerToolI } from '../Puzzle/Constraints/CornerConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToVarsName, PuzzleModel } from './solver_utils';
import { parseVarList } from './value_parsing';

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

function quadrupleConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CornerToolI) {
	const vars = getCornerVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;
	if (!value) return '';
	const parsed_values = parseVarList(value)
	if (!parsed_values) return ''

	let out_str = '';
	for (const parsed_var of parsed_values) {
		const val = parseInt(parsed_var);
		if (Number.isNaN(val) && !model.hasVariable(parsed_var)) {
			out_str += `var int: ${parsed_var};\n`;
			model.addVariable(parsed_var);
		}
	}
	
	const values_str = '[' + parsed_values.join(',') + ']';
	out_str += `constraint quadruple_p(${vars_str}, ${values_str});\n`;
	return out_str;
}

function cornerSumConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CornerToolI) {
	const constraint_str = valuedCornerConstraint(grid, constraint, 'corner_sum_p');
	return constraint_str;
}

function cornerEvenCountConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CornerToolI) {
	const constraint_str = valuedCornerConstraint(grid, constraint, 'corner_even_count_p');
	return constraint_str;
}

function cornerSumOfThreeEqualsTheOtherConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CornerToolI) {
	const constraint_str = simpleCornerConstraint(
		grid,
		constraint,
		'corner_sum_of_three_equals_the_other_p'
	);
	return constraint_str;
}

function equalDiagonalDifferencesConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CornerToolI) {
	const constraint_str = simpleCornerConstraint(grid, constraint, 'equal_diagonal_differences_p');
	return constraint_str;
}

function productSquareConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CornerToolI) {
	const constraint_str = simpleCornerConstraint(grid, constraint, 'product_square_p');
	return constraint_str;
}

type ConstraintF = (
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CornerToolI
) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.QUADRUPLE, quadrupleConstraint],
	[TOOLS.CORNER_SUM, cornerSumConstraint],
	[TOOLS.CORNER_EVEN_COUNT, cornerEvenCountConstraint],
	[TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER, cornerSumOfThreeEqualsTheOtherConstraint],
	[TOOLS.PRODUCT_SQUARE, productSquareConstraint],
	[TOOLS.EQUAL_DIAGONAL_DIFFERENCES, equalDiagonalDifferencesConstraint]
]);

export function cornerConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as CornerToolI);
			out_str += constraint_str;
		}
	}
	return out_str;
}
