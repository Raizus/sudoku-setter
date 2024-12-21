import type { LineToolI } from '../Puzzle/Constraints/LineConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToVarsName } from './solver_utils';

function getLineVars(grid: Grid, constraint: LineToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars
}

function simpleLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;	
}

function valuedLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${val});\n`;
	return constraint_str;
}

function renbanConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renban');
	return constraint_str;
}

function doubleRenbanConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'double_renban_p');
	return constraint_str;
}

function renrenbanbanConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renrenbanban_p');
	return constraint_str;
}

function knabnerConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'knabner_p');
	return constraint_str;
}

function whispersConstraint(grid: Grid, constraint: LineToolI) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	const val = value ? parseInt(value) : 5;
	const constraint_str: string = `constraint whispers(${vars_str}, ${val});\n`;
	return constraint_str;
}

function thermoConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'strictly_increasing');
	return constraint_str;
}

function palindromeConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'palindrome');
	return constraint_str;
}

function sumLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'sum_line_p');
	return constraint_str;
}

function productLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'product_line_p');
	return constraint_str;
}

function uniqueValuesLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'alldifferent');
	return constraint_str;
}

function superfuzzyArrowConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'superfuzzy_arrow_p');
	return constraint_str;
}

function unimodularLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'unimodular_line_p');
	return constraint_str;
}

function betweenLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'between_line_p');
	return constraint_str;
}

function tightropeLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'tightrope_line_p');
	return constraint_str;
}

function doubleArrowConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'double_arrow_p');
	return constraint_str;
}

function parityCountLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'parity_count_line_p');
	return constraint_str;
}

function productOfEndsEqualsSumOfLineConstraint(grid: Grid, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(
		grid,
		constraint,
		'product_of_ends_equals_sum_of_line_p'
	);
	return constraint_str;
}

type ConstraintF = (grid: Grid, constraint: LineToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.THERMOMETER, thermoConstraint],
	[TOOLS.RENBAN_LINE, renbanConstraint],
	[TOOLS.DOUBLE_RENBAN_LINE, doubleRenbanConstraint],
	[TOOLS.RENRENBANBAN_LINE, renrenbanbanConstraint],
	[TOOLS.KNABNER_LINE, knabnerConstraint],
	[TOOLS.WHISPERS_LINE, whispersConstraint],
	[TOOLS.PALINDROME, palindromeConstraint],
	[TOOLS.SUM_LINE, sumLineConstraint],
	[TOOLS.PRODUCT_LINE, productLineConstraint],
	[TOOLS.SUPERFUZZY_ARROW, superfuzzyArrowConstraint],
	[TOOLS.UNIQUE_VALUES_LINE, uniqueValuesLineConstraint],
	[TOOLS.UNIMODULAR_LINE, unimodularLineConstraint],
	[TOOLS.BETWEEN_LINE, betweenLineConstraint],
	[TOOLS.TIGHTROPE_LINE, tightropeLineConstraint],
	[TOOLS.DOUBLE_ARROW_LINE, doubleArrowConstraint],
	[TOOLS.PARITY_COUNT_LINE, parityCountLineConstraint],
	[TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE, productOfEndsEqualsSumOfLineConstraint]
]);

export function lineConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as LineToolI);
			out_str += constraint_str;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}
