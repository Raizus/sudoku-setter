import type { LineToolI } from '../Puzzle/Constraints/LineConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsFromCoords,
	cellsToGridVarsStr,
	cellsToVarsName,
	PuzzleModel,
	VAR_2D_NAMES
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};
	const default_name = `line_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function getLineVars(grid: Grid, constraint: LineToolI, use_set: boolean = false) {
	let cells = cellsFromCoords(grid, constraint.cells);
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
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI,
	predicate: string,
	default_value: string = ''
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value?.length ? constraint.value : default_value;
	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];

	out_str += `constraint ${predicate}(${vars_str}, ${var_name});\n`;
	return out_str;
}

function circularValuedLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const cells_coords = constraint.cells;
	let cells = cells_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	let circular = false;
	if (cells.length > 2 && cells[0] === cells[cells.length - 1]) {
		cells = cells.slice(0, -1);
		circular = true;
	}
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${val}, ${circular});\n`;
	return constraint_str;
}

function renbanConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renban', true);
	return constraint_str;
}

function doubleRenbanConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'double_renban_p', true);
	return constraint_str;
}

function renrenbanbanConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renrenbanban_p', true);
	return constraint_str;
}

function nabnerConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'knabner_p', true);
	return constraint_str;
}

function renbanOrNabnerConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'renban_or_nabner_line_p', true);
	return constraint_str;
}

function outOfOrderConsecutiveLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'out_of_order_consecutive_line_p');
	return constraint_str;
}

function whispersConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(model, grid, c_id, constraint, 'whispers', '5');
	return constraint_str;
}

function dutchWhispersConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint whispers(${vars_str}, 4);\n`;
	return constraint_str;
}

function thermoConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'strictly_increasing');
	return constraint_str;
}

function fuzzyThermoConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'fuzzy_thermo_p');
	return constraint_str;
}

function slowThermoConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'increasing');
	return constraint_str;
}

function customThermoConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(model, grid, c_id, constraint, 'custom_thermo_p');
	return constraint_str;
}

function palindromeConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'palindrome');
	return constraint_str;
}

function sumLineConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = valuedLineConstraint(model, grid, c_id, constraint, 'sum_line_p');
	return constraint_str;
}

function xvLineConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'xv_line_p');
	return constraint_str;
}

function atLeastXLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(
		model,
		grid,
		c_id,
		constraint,
		'at_least_x_line_p',
		'10'
	);
	return constraint_str;
}

function productLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(model, grid, c_id, constraint, 'product_line_p');
	return constraint_str;
}

function maximumAdjacentDifferenceLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(
		model,
		grid,
		c_id,
		constraint,
		'maximum_adjacent_difference_line_p',
		'2'
	);
	return constraint_str;
}

function adjacentMultiplesLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'adjacent_multiples_line_p');
	return constraint_str;
}

function indexLineConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'index_line_p');
	return constraint_str;
}

function zipperLineConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'zipper_line_p');
	return constraint_str;
}

function segmentedSumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = circularValuedLineConstraint(grid, constraint, 'segmented_sum_line_p');
	return constraint_str;
}

function segmentedSumAndRenbanLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'segmented_sum_and_renban_line_p');
	return constraint_str;
}

function nConsecutiveRenbanLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = circularValuedLineConstraint(
		grid,
		constraint,
		'n_consecutive_renban_line_p'
	);
	return constraint_str;
}

function nConsecutiveFuzzySumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = circularValuedLineConstraint(
		grid,
		constraint,
		'n_consecutive_fuzzy_sum_line_p'
	);
	return constraint_str;
}

function rowCycleThermoConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);

	let out_str = '';
	const cycle_vars: string[] = [];
	for (let i = 0; i < cells.length; i++) {
		const cell = cells[i];
		const row = grid.getRow(cell.r);
		const row_vars = cellsToGridVarsStr(row, VAR_2D_NAMES.BOARD);
		const var_name = `cycle_${c_id}_${i}`;
		cycle_vars.push(var_name);
		const start = cell.c + 1;
		out_str += `var int: ${var_name} = cycle_order_f(${row_vars}, ${start});\n`;
	}
	const cycle_vars_str = '[' + cycle_vars.join(',') + ']';
	out_str += `constraint strictly_increasing(${cycle_vars_str});\n`;

	return out_str;
}

function adjacentDifferencesCountLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(
		grid,
		constraint,
		'adjacent_differences_count_line_p'
	);
	return constraint_str;
}

function sameParityLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'same_parity_line_p');
	return constraint_str;
}

function renbanOrWhispersLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(
		model,
		grid,
		c_id,
		constraint,
		'renban_or_whispers_p',
		'5'
	);
	return constraint_str;
}

function uniqueValuesLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'alldifferent', true);
	return constraint_str;
}

function repeatedDigitsLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'repeated_digits_line_p');
	return constraint_str;
}

function superfuzzyArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'superfuzzy_arrow_p');
	return constraint_str;
}

function ambiguousArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'ambiguous_arrow_p', true);
	return constraint_str;
}

function headlessArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'headless_arrow_p');
	return constraint_str;
}

function unimodularLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(
		model,
		grid,
		c_id,
		constraint,
		'unimodular_line_p',
		'3'
	);
	return constraint_str;
}

function modularLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(model, grid, c_id, constraint, 'modular_line_p', '3');
	return constraint_str;
}

function modularOrUnimodularLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(
		model,
		grid,
		c_id,
		constraint,
		'modular_or_unimodular_line_p',
		'3'
	);
	return constraint_str;
}

function arithmeticSequenceLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'arithmetic_sequence_line_p');
	return constraint_str;
}

function oddEvenOscillatorLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'odd_even_oscillator_line_p');
	return constraint_str;
}

function highLowOscillatorLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = valuedLineConstraint(
		model,
		grid,
		c_id,
		constraint,
		'high_low_oscillator_line_p',
		'5'
	);
	return constraint_str;
}

function adjacentCellsAreMultiplesOfDifferenceLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(
		grid,
		constraint,
		'adjacent_cells_are_multiples_of_difference_line_p',
		false
	);
	return constraint_str;
}

function lookAndSayLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'look_and_say_line_p', true);
	return constraint_str;
}

function rowSumLineConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);

	function split_by_row(_cells: Cell[]) {
		const groups: Cell[][] = [];
		let prev_row: number | null = null;
		for (const cell of _cells) {
			if (cell.r != prev_row) {
				groups.push([cell]);
				prev_row = cell.r;
			} else {
				groups[groups.length - 1].push(cell);
			}
		}
		return groups;
	}

	const groups = split_by_row(cells);
	if (groups.length < 2) return '';
	const first_group = groups[0];
	const vars1 = cellsToVarsName(first_group);
	const vars1_str = `[${vars1.join(',')}]`;

	let out_str = '';
	for (let i = 1; i < groups.length; i++) {
		const group = groups[i];
		const vars = cellsToVarsName(group);
		const vars_str = `[${vars.join(',')}]`;
		out_str += `constraint sum(${vars_str}) == sum(${vars1_str});\n`;
	}
	return out_str;
}

function betweenLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'between_line_p');
	return constraint_str;
}

function tightropeLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'tightrope_line_p');
	return constraint_str;
}

function doubleArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'double_arrow_p');
	return constraint_str;
}

function splitPeasConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'split_peas_p');
	return constraint_str;
}

function parityCountLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'parity_count_line_p');
	return constraint_str;
}

function productOfEndsEqualsSumOfLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
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

function regionSumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	let out_str = '';
	const cells = cellsFromCoords(grid, constraint.cells);

	const cell_regions = splitLineByRegion(cells);
	if (!cell_regions.length) return '';
	const sum_var: string = `sum_line_${c_id}`;
	out_str += `var int: ${sum_var};\n`;
	for (const cell_region of cell_regions) {
		const vars_str = cellsToGridVarsStr(cell_region, VAR_2D_NAMES.BOARD);
		const constraint_str = `constraint sum(${vars_str}) == ${sum_var};\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function entropicLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint entropic_line_p(${vars_str}, {1,2,3}, {4,5,6}, {7,8,9});\n`;
	return constraint_str;
}

function entropicOrModularLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint entropic_or_modular_line_p(${vars_str}, {1,2,3}, {4,5,6}, {7,8,9}, 3);\n`;
	return constraint_str;
}

function peapodsLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleLineConstraint(grid, constraint, 'peapods_p');
	return constraint_str;
}

function yinYangShadedWhispersLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	let value = constraint.value;
	if (!value) value = '5';
	const val = parseInt(value);

	const constraint_str: string = `constraint yin_yang_shaded_whispers_line_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
	return constraint_str;
}

function yinYangUnshadedModularLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	let value = constraint.value;
	if (!value) value = '3';
	const val = parseInt(value);

	const constraint_str: string = `constraint yin_yang_unshaded_modular_line_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
	return constraint_str;
}

function yinYangSimpleLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function yinYangUnshadedEntropicLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = yinYangSimpleLineConstraint(
		grid,
		constraint,
		'yin_yang_unshaded_entropic_line_p'
	);
	return constraint_str;
}

function yinYangIndexingLineColoringConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = yinYangSimpleLineConstraint(
		grid,
		constraint,
		'yin_yang_indexing_line_coloring_p'
	);
	return constraint_str;
}

function yinYangRegionSumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = yinYangSimpleLineConstraint(
		grid,
		constraint,
		'yin_yang_region_sum_line_p'
	);
	return constraint_str;
}

function goldilocksZoneRegionSumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);

	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);
	const region_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.GOLDILOCKS_REGIONS);

	const constraint_str: string = `constraint goldilocks_zone_region_sum_p(${values_vars_str}, ${region_vars_str});\n`;
	return constraint_str;
}

function simpleMultipliersLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const constraint_str: string = `constraint ${predicate}(${values_vars_str});\n`;
	return constraint_str;
}

function doublersBetweenLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleMultipliersLineConstraint(grid, constraint, 'between_line_p');
	return constraint_str;
}

function doublersDoubleArrowLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleMultipliersLineConstraint(grid, constraint, 'double_arrow_p');
	return constraint_str;
}

function doublersThermometerConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const constraint_str = simpleMultipliersLineConstraint(grid, constraint, 'strictly_increasing');
	return constraint_str;
}

function indexerCellsRegionSubsetLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);

	const cell_regions = splitLineByRegion(cells);
	cell_regions.sort((group1, group2) => group2.length - group1.length);
	if (cell_regions.length <= 1) return '';
	let out_str: string = '';

	const group1 = cell_regions[0];
	const group1_vars = cellsToGridVarsStr(group1, VAR_2D_NAMES.VALUES_GRID);
	for (const group2 of cell_regions.slice(1)) {
		const group2_vars = cellsToGridVarsStr(group2, VAR_2D_NAMES.VALUES_GRID);

		const constraint_str = `constraint subset_p(${group1_vars}, ${group2_vars});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

type ConstraintF = (model: PuzzleModel, grid: Grid, c_id: string, constraint: LineToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.THERMOMETER, thermoConstraint],
	[TOOLS.FUZZY_THERMOMETER, fuzzyThermoConstraint],
	[TOOLS.SLOW_THERMOMETER, slowThermoConstraint],
	[TOOLS.CUSTOM_THERMOMETER, customThermoConstraint],
	[TOOLS.RENBAN_LINE, renbanConstraint],
	[TOOLS.DOUBLE_RENBAN_LINE, doubleRenbanConstraint],
	[TOOLS.RENRENBANBAN_LINE, renrenbanbanConstraint],
	[TOOLS.NABNER_LINE, nabnerConstraint],
	[TOOLS.WHISPERS_LINE, whispersConstraint],
	[TOOLS.DUTCH_WHISPERS, dutchWhispersConstraint],
	[TOOLS.RENBAN_OR_WHISPERS_LINE, renbanOrWhispersLineConstraint],
	[TOOLS.RENBAN_OR_NABNER_LINE, renbanOrNabnerConstraint],
	[TOOLS.OUT_OF_ORDER_CONSECUTIVE_LINE, outOfOrderConsecutiveLineConstraint],
	[TOOLS.N_CONSECUTIVE_RENBAN_LINE, nConsecutiveRenbanLineConstraint],
	[TOOLS.PALINDROME, palindromeConstraint],
	[TOOLS.SUM_LINE, sumLineConstraint],
	[TOOLS.PRODUCT_LINE, productLineConstraint],
	[TOOLS.XV_LINE, xvLineConstraint],
	[TOOLS.AT_LEAST_X_LINE, atLeastXLineConstraint],
	[TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE, maximumAdjacentDifferenceLineConstraint],
	[TOOLS.SAME_PARITY_LINE, sameParityLineConstraint],
	[TOOLS.ADJACENT_MULTIPLES_LINE, adjacentMultiplesLineConstraint],
	[TOOLS.ADJACENT_DIFFERENCES_COUNT_LINE, adjacentDifferencesCountLineConstraint],
	[TOOLS.LOOK_AND_SAY_LINE, lookAndSayLineConstraint],
	[TOOLS.ROW_SUM_LINE, rowSumLineConstraint],
	[TOOLS.INDEX_LINE, indexLineConstraint],
	[TOOLS.ZIPPER_LINE, zipperLineConstraint],
	[TOOLS.SEGMENTED_SUM_LINE, segmentedSumLineConstraint],
	[TOOLS.SEGMENTED_SUM_AND_RENBAN_LINE, segmentedSumAndRenbanLineConstraint],
	[TOOLS.N_CONSECUTIVE_FUZZY_SUM_LINE, nConsecutiveFuzzySumLineConstraint],
	[
		TOOLS.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,
		adjacentCellsAreMultiplesOfDifferenceLineConstraint
	],

	[TOOLS.SUPERFUZZY_ARROW, superfuzzyArrowConstraint],
	[TOOLS.AMBIGUOUS_ARROW, ambiguousArrowConstraint],
	[TOOLS.HEADLESS_ARROW, headlessArrowConstraint],
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
	[TOOLS.ROW_CYCLE_THERMOMETER, rowCycleThermoConstraint],

	[TOOLS.PEAPODS, peapodsLineConstraint],

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

	[TOOLS.INDEXER_CELLS_REGION_SUBSET_LINE, indexerCellsRegionSubsetLineConstraint],

	// yin_yang_lines
	[TOOLS.YIN_YANG_SHADED_WHISPERS_LINE, yinYangShadedWhispersLineConstraint],
	[TOOLS.YIN_YANG_UNSHADED_ENTROPIC_LINE, yinYangUnshadedEntropicLineConstraint],
	[TOOLS.YIN_YANG_UNSHADED_MODULAR_LINE, yinYangUnshadedModularLineConstraint],
	[TOOLS.YIN_YANG_REGION_SUM_LINE, yinYangRegionSumLineConstraint],
	[TOOLS.YIN_YANG_INDEXING_LINE_COLORING, yinYangIndexingLineColoringConstraint],

	[TOOLS.GOLDILOCKS_ZONE_REGION_SUM, goldilocksZoneRegionSumLineConstraint]
]);

export function lineConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as LineToolI);
			out_str += constraint_str;
		}
	}

	return out_str;
}
