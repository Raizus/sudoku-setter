import type { LineToolI } from '../Puzzle/Constraints/LineConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { cellsToValueVarsName, cellsToVarsName, cellsToYinYangVarsName } from './solver_utils';

function getLineVars(grid: Grid, constraint: LineToolI, use_set: boolean = false) {
	const cells_coords = constraint.cells;
	let cells = cells_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	if (use_set) {
		cells = [...new Set(cells)];
	}
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleLineConstraint(
	grid: Grid,
	constraint: LineToolI,
	predicate: string,
	use_set: boolean = false
) {
	const vars = getLineVars(grid, constraint, use_set);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

function valuedLineConstraint(
	grid: Grid,
	constraint: LineToolI,
	predicate: string,
	default_value: string = ''
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	let value = constraint.value;
	if (!value) value = default_value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${val});\n`;
	return constraint_str;
}

function renbanConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renban', true);
	return constraint_str;
}

function doubleRenbanConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'double_renban_p', true);
	return constraint_str;
}

function renrenbanbanConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renrenbanban_p', true);
	return constraint_str;
}

function knabnerConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'knabner_p', true);
	return constraint_str;
}

function whispersConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	const val = value ? parseInt(value) : 5;
	const constraint_str: string = `constraint whispers(${vars_str}, ${val});\n`;
	return constraint_str;
}

function thermoConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'strictly_increasing');
	return constraint_str;
}

function palindromeConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'palindrome');
	return constraint_str;
}

function sumLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'sum_line_p');
	return constraint_str;
}

function xvLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'xv_line_p');
	return constraint_str;
}

function atLeastXLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'at_least_x_line_p', '10');
	return constraint_str;
}

function productLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'product_line_p');
	return constraint_str;
}

function maximumAdjacentDifferenceLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(
		grid,
		constraint,
		'maximum_adjacent_difference_line_p',
		'2'
	);
	return constraint_str;
}

function adjacentMultiplesLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'adjacent_multiples_line_p');
	return constraint_str;
}

function sameParityLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'same_parity_line_p');
	return constraint_str;
}

function renbanOrWhispersLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'renban_or_whispers_p', '5');
	return constraint_str;
}

function nConsecutiveRenbanLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'n_consecutive_renban_line_p', '5');
	return constraint_str;
}

function uniqueValuesLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'alldifferent', true);
	return constraint_str;
}

function repeatedDigitsLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'repeated_digits_line_p');
	return constraint_str;
}

function superfuzzyArrowConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'superfuzzy_arrow_p');
	return constraint_str;
}

function unimodularLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'unimodular_line_p', '3');
	return constraint_str;
}

function modularLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'modular_line_p', '3');
	return constraint_str;
}

function modularOrUnimodularLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(
		grid,
		constraint,
		'modular_or_unimodular_line_p',
		'3'
	);
	return constraint_str;
}

function arithmeticSequenceLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'arithmetic_sequence_line_p');
	return constraint_str;
}

function oddEvenOscillatorLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'odd_even_oscillator_line_p');
	return constraint_str;
}

function highLowOscillatorLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(grid, constraint, 'high_low_oscillator_line_p', '5');
	return constraint_str;
}

function betweenLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'between_line_p');
	return constraint_str;
}

function tightropeLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'tightrope_line_p');
	return constraint_str;
}

function doubleArrowConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'double_arrow_p');
	return constraint_str;
}

function splitPeasConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'split_peas_p');
	return constraint_str;
}

function parityCountLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'parity_count_line_p');
	return constraint_str;
}

function productOfEndsEqualsSumOfLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(
		grid,
		constraint,
		'product_of_ends_equals_sum_of_line_p'
	);
	return constraint_str;
}

function splitLineByRegion(line: Cell[]) {
	const regions: Cell[][] = [];
	if (!line.length) return regions;

	let prev_region: number | null = null;
	let cells: Cell[] = [];
	for (const cell of line) {
		const region = cell.region;
		if (prev_region !== region) {
			if (cells.length) regions.push(cells);
			cells = [];
		}
		cells.push(cell);
		prev_region = region;
	}
	if (cells.length) regions.push(cells);

	return regions;
}

function regionSumLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	let out_str = '';
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);

	const cell_regions = splitLineByRegion(cells);
	if (!cell_regions.length) return '';
	const sum_var: string = `sum_line_${c_id}`;
	out_str += `var int: ${sum_var};\n`;
	for (const cell_region of cell_regions) {
		const vars = cellsToVarsName(cell_region);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint sum(${vars_str}) == ${sum_var};\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function entropicLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint entropic_line_p(${vars_str}, {1,2,3}, {4,5,6}, {7,8,9});\n`;
	return constraint_str;
}

function entropicOrModularLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint entropic_or_modular_line_p(${vars_str}, {1,2,3}, {4,5,6}, {7,8,9}, 3);\n`;
	return constraint_str;
}

function yinYangShadedWhispersLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;
	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;

	let value = constraint.value;
	if (!value) value = '5';
	const val = parseInt(value);

	const constraint_str: string = `constraint yin_yang_shaded_whispers_line_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
	return constraint_str;
}

function yinYangUnshadedModularLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;
	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;

	let value = constraint.value;
	if (!value) value = '3';
	const val = parseInt(value);

	const constraint_str: string = `constraint yin_yang_unshaded_modular_line_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
	return constraint_str;
}

function yinYangUnshadedEntropicLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;
	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;

	const constraint_str: string = `constraint yin_yang_unshaded_entropic_line_p(${vars_str}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function yinYangRegionSumLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);

	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;
	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;

	// check if line is circuler and reassign the cells
	// const l = cells.length;
	// if (l > 1 && cells[0] === cells[l - 1]) {
	// 	const constraint_str: string = `constraint yin_yang_circular_region_sum_line_p(${vars_str}, ${yin_yang_vars_str});\n`;
	// 	return constraint_str;
	// }

	const constraint_str: string = `constraint yin_yang_region_sum_line_p(${vars_str}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function simpleMultipliersLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);

	const values_vars = cellsToValueVarsName(cells);
	const values_vars_str = `[${values_vars.join(', ')}]`;

	const constraint_str: string = `constraint ${predicate}(${values_vars_str});\n`;
	return constraint_str;
}

function doublersBetweenLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleMultipliersLineConstraint(grid, constraint, 'between_line_p');
	return constraint_str;
}

function doublersDoubleArrowLineConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleMultipliersLineConstraint(grid, constraint, 'double_arrow_p');
	return constraint_str;
}

function doublersThermometerConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleMultipliersLineConstraint(grid, constraint, 'strictly_increasing');
	return constraint_str;
}

type ConstraintF = (grid: Grid, c_id: string, constraint: LineToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.THERMOMETER, thermoConstraint],
	[TOOLS.RENBAN_LINE, renbanConstraint],
	[TOOLS.DOUBLE_RENBAN_LINE, doubleRenbanConstraint],
	[TOOLS.RENRENBANBAN_LINE, renrenbanbanConstraint],
	[TOOLS.KNABNER_LINE, knabnerConstraint],
	[TOOLS.WHISPERS_LINE, whispersConstraint],
	[TOOLS.RENBAN_OR_WHISPERS_LINE, renbanOrWhispersLineConstraint],
	[TOOLS.N_CONSECUTIVE_RENBAN_LINE, nConsecutiveRenbanLineConstraint],
	[TOOLS.PALINDROME, palindromeConstraint],
	[TOOLS.SUM_LINE, sumLineConstraint],
	[TOOLS.PRODUCT_LINE, productLineConstraint],
	[TOOLS.XV_LINE, xvLineConstraint],
	[TOOLS.AT_LEAST_X_LINE, atLeastXLineConstraint],
	[TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE, maximumAdjacentDifferenceLineConstraint],
	[TOOLS.SAME_PARITY_LINE, sameParityLineConstraint],
	[TOOLS.ADJACENT_MULTIPLES_LINE, adjacentMultiplesLineConstraint],
	[TOOLS.SUPERFUZZY_ARROW, superfuzzyArrowConstraint],
	[TOOLS.ARITHMETIC_SEQUENCE_LINE, arithmeticSequenceLineConstraint],
	[TOOLS.ODD_EVEN_OSCILLATOR_LINE, oddEvenOscillatorLineConstraint],
	[TOOLS.HIGH_LOW_OSCILLATOR_LINE, highLowOscillatorLineConstraint],
	[TOOLS.UNIQUE_VALUES_LINE, uniqueValuesLineConstraint],
	[TOOLS.REPEATED_DIGITS_LINE, repeatedDigitsLineConstraint],
	[TOOLS.UNIMODULAR_LINE, unimodularLineConstraint],
	[TOOLS.MODULAR_LINE, modularLineConstraint],
	[TOOLS.MODULAR_OR_UNIMODULAR_LINE, modularOrUnimodularLineConstraint],
	[TOOLS.REGION_SUM_LINE, regionSumLineConstraint],
	[TOOLS.ENTROPIC_LINE, entropicLineConstraint],
	[TOOLS.ENTROPIC_OR_MODULAR_LINE, entropicOrModularLineConstraint],

	// double ended lines
	[TOOLS.BETWEEN_LINE, betweenLineConstraint],
	[TOOLS.TIGHTROPE_LINE, tightropeLineConstraint],
	[TOOLS.DOUBLE_ARROW_LINE, doubleArrowConstraint],
	[TOOLS.SPLIT_PEAS, splitPeasConstraint],
	[TOOLS.PARITY_COUNT_LINE, parityCountLineConstraint],
	[TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE, productOfEndsEqualsSumOfLineConstraint],

	[TOOLS.DOUBLERS_THERMOMETER, doublersThermometerConstraint],
	[TOOLS.DOUBLERS_BETWEEN_LINE, doublersBetweenLineConstraint],
	[TOOLS.DOUBLERS_DOUBLE_ARROW_LINE, doublersDoubleArrowLineConstraint],

	// yin_yang_lines
	[TOOLS.YIN_YANG_SHADED_WHISPERS_LINE, yinYangShadedWhispersLineConstraint],
	[TOOLS.YIN_YANG_UNSHADED_ENTROPIC_LINE, yinYangUnshadedEntropicLineConstraint],
	[TOOLS.YIN_YANG_UNSHADED_MODULAR_LINE, yinYangUnshadedModularLineConstraint],
	[TOOLS.YIN_YANG_REGION_SUM_LINE, yinYangRegionSumLineConstraint]
]);

export function lineConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(grid, c_id, constraint as LineToolI);
			out_str += constraint_str;
		}
	}

	return out_str;
}
