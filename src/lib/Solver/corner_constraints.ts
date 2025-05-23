import type { CornerToolI } from '../Puzzle/Constraints/CornerConstraints';
import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	cellsFromCoords,
	cellsToVarsName,
	constraintsBuilder,
	PuzzleModel,
	type ElementF
} from './solver_utils';
import { parseVarList } from './value_parsing';

function getCornerVars(grid: Grid, constraint: CornerToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleCornerConstraint(grid: Grid, constraint: CornerToolI, predicate: string) {
	const vars = getCornerVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const constraint_str = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

function simpleCornerElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleCornerConstraint(grid, constraint as CornerToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function valuedCornerConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
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

function valuedCornerElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = valuedCornerConstraint(
			model,
			grid,
			c_id,
			constraint as CornerToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function quadrupleConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CornerToolI
) {
	const vars = getCornerVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;
	if (!value) return '';
	const parsed_values = parseVarList(value);
	if (!parsed_values) return '';

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

function quadrupleElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = quadrupleConstraint(model, grid, c_id, constraint as CornerToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function cornerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = valuedCornerElement(model, grid, element, 'corner_sum_p');
	return out_str;
}

function cornerEvenCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = valuedCornerElement(model, grid, element, 'corner_even_count_p');
	return out_str;
}

function cornerSumOfThreeEqualsTheOtherElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = simpleCornerElement(grid, element, 'corner_sum_of_three_equals_the_other_p');
	return out_str;
}

function equalDiagonalDifferencesElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const grid = model.puzzle.grid;
	const out_str = simpleCornerElement(grid, element, 'equal_diagonal_differences_p');
	return out_str;
}

function productSquareElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = simpleCornerElement(grid, element, 'product_square_p');
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.QUADRUPLE, quadrupleElement],
	[TOOLS.CORNER_SUM, cornerSumElement],
	[TOOLS.CORNER_EVEN_COUNT, cornerEvenCountElement],
	[TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER, cornerSumOfThreeEqualsTheOtherElement],
	[TOOLS.PRODUCT_SQUARE, productSquareElement],
	[TOOLS.EQUAL_DIAGONAL_DIFFERENCES, equalDiagonalDifferencesElement]
]);

export function cornerElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
