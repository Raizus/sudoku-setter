import type { LineToolI } from '../Puzzle/Constraints/LineConstraints';
import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsFromCoords,
	cellsToGridVarsStr,
	cellsToVarsName,
	constraintsBuilder,
	PuzzleModel,
	simpleElementFunction,
	VAR_2D_NAMES,
	type ElementF
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

function simpleLineElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string,
	use_set: boolean = false
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleLineConstraint(grid, constraint as LineToolI, predicate, use_set);
		out_str += constraint_str;
	}
	return out_str;
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

function valuedLineElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = valuedLineConstraint(
			model,
			grid,
			c_id,
			constraint as LineToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function circularValuedLineConstraint(
	grid: Grid,
	constraint: LineToolI,
	predicate: string,
	default_value: string = ''
) {
	const cells_coords = constraint.cells;
	let cells = cells_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	let circular = false;
	if (cells.length > 2 && cells[0] === cells[cells.length - 1]) {
		cells = cells.slice(0, -1);
		circular = true;
	}
	const vars = cellsToVarsName(cells);
	const vars_str = `[${vars.join(',')}]`;

	let value = constraint.value;
	if (!value) value = default_value;

	const val = parseInt(value);
	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${val}, ${circular});\n`;
	return constraint_str;
}

function circularValuedLineElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = circularValuedLineConstraint(
			grid,
			constraint as LineToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function renbanElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'renban', true);
	return out_str;
}

function doubleRenbanElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'double_renban_p', true);
	return out_str;
}

function renrenbanbanElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'renrenbanban_p', true);
	return out_str;
}

function nabnerConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'knabner_p', true);
	return out_str;
}

function renbanOrNabnerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'renban_or_nabner_line_p', true);
	return out_str;
}

function outOfOrderConsecutiveLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'out_of_order_consecutive_line_p');
	return out_str;
}

function whispersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'whispers', '5');
	return out_str;
}

function dutchWhispersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'whispers', '4');
	return out_str;
}

function thermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'strictly_increasing');
	return out_str;
}

function fuzzyThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'fuzzy_thermo_p');
	return out_str;
}

function slowThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'increasing');
	return out_str;
}

function customThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'custom_thermo_p');
	return out_str;
}

function palindromeElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'palindrome');
	return out_str;
}

function sumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'sum_line_p');
	return out_str;
}

function xvLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'xv_line_p');
	return out_str;
}

function atLeastXLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'at_least_x_line_p', '10');
	return out_str;
}

function productLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'product_line_p');
	return out_str;
}

function maximumAdjacentDifferenceLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'maximum_adjacent_difference_line_p', '2');
	return out_str;
}

function adjacentMultiplesLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'adjacent_multiples_line_p');
	return out_str;
}

function indexLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'index_line_p');
	return out_str;
}

function zipperLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'zipper_line_p');
	return out_str;
}

function segmentedSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = circularValuedLineElement(model, element, 'segmented_sum_line_p');
	return out_str;
}

function segmentedSumAndRenbanLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'segmented_sum_and_renban_line_p');
	return out_str;
}

function nConsecutiveRenbanLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = circularValuedLineElement(model, element, 'n_consecutive_renban_line_p');
	return out_str;
}

function nConsecutiveFuzzySumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = circularValuedLineElement(model, element, 'n_consecutive_fuzzy_sum_line_p');
	return out_str;
}

function rowCycleThermoConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
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

function rowCycleThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = rowCycleThermoConstraint(grid, c_id, constraint as LineToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function adjacentDifferencesCountLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'adjacent_differences_count_line_p');
	return out_str;
}

function sameParityLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'same_parity_line_p');
	return out_str;
}

function renbanOrWhispersLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'renban_or_whispers_p', '5');
	return out_str;
}

function uniqueValuesLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'alldifferent', true);
	return out_str;
}

function repeatedDigitsLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'repeated_digits_line_p');
	return out_str;
}

function superfuzzyArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'superfuzzy_arrow_p');
	return out_str;
}

function ambiguousArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'ambiguous_arrow_p', true);
	return out_str;
}

function headlessArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'headless_arrow_p');
	return out_str;
}

function unimodularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'unimodular_line_p', '3');
	return out_str;
}

function modularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'modular_line_p', '3');
	return out_str;
}

function modularOrUnimodularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'modular_or_unimodular_line_p', '3');
	return out_str;
}

function arithmeticSequenceLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'arithmetic_sequence_line_p');
	return out_str;
}

function oddEvenOscillatorLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'odd_even_oscillator_line_p');
	return out_str;
}

function highLowOscillatorLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'high_low_oscillator_line_p', '5');
	return out_str;
}

function adjacentCellsAreMultiplesOfDifferenceLineElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleLineElement(
		model,
		element,
		'adjacent_cells_are_multiples_of_difference_line_p',
		false
	);
	return out_str;
}

function lookAndSayLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'look_and_say_line_p', true);
	return out_str;
}

function rowSumLineConstraint(grid: Grid, constraint: LineToolI) {
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

function rowSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = rowSumLineConstraint(grid, constraint as LineToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function betweenLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'between_line_p');
	return out_str;
}

function tightropeLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'tightrope_line_p');
	return out_str;
}

function doubleArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'double_arrow_p');
	return out_str;
}

function splitPeasElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'split_peas_p');
	return out_str;
}

function parityCountLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'parity_count_line_p');
	return out_str;
}

function productOfEndsEqualsSumOfLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'product_of_ends_equals_sum_of_line_p');
	return out_str;
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

function regionSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, regionSumLineConstraint);
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

function entropicLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, entropicLineConstraint);
	return out_str;
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

function entropicOrModularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, entropicOrModularLineConstraint);
	return out_str;
}

function peapodsLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'peapods_p');
	return out_str;
}

function yinYangValuedLineConstraint(
	model: PuzzleModel,
	c_id: string,
	constraint: LineToolI,
	predicate: string,
	default_value: string = ''
) {
	const grid = model.puzzle.grid;
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	let value = constraint.value;
	if (!value) value = default_value;
	const val = parseInt(value);

	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
	return constraint_str;
}

export function yinYangValuedLineElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = yinYangValuedLineConstraint(
			model,
			c_id,
			constraint as LineToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangShadedWhispersLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangValuedLineElement(model, element, 'yin_yang_shaded_whispers_line_p', '5');
	return out_str;
}

function yinYangUnshadedModularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangValuedLineElement(model, element, 'yin_yang_unshaded_modular_line_p', '3');
	return out_str;
}

function yinYangSimpleLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str: string = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function yinYangSimpleLineElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = yinYangSimpleLineConstraint(grid, constraint as LineToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangUnshadedEntropicLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangSimpleLineElement(model, element, 'yin_yang_unshaded_entropic_line_p');
	return out_str;
}

function yinYangIndexingLineColoringElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangSimpleLineElement(model, element, 'yin_yang_indexing_line_coloring_p');
	return out_str;
}

function yinYangRegionSumLinesMustCrossColorsAtLeastOnceConstraint(
	puzzle: PuzzleI,
	toolId: TOOLID
): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.elementsDict;
	const element = local_constraints.get(TOOLS.YIN_YANG_REGION_SUM_LINE);
	if (!element || !element.constraints) return '';

	let out_str: string = `\n% ${toolId}\n`;
	for (const constraint of Object.values(element.constraints)) {
		const cells_coords = (constraint as LineToolI).cells;
		const cells = cells_coords
			.map((coord) => grid.getCell(coord.r, coord.c))
			.filter((cell) => !!cell);
		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		out_str += `constraint count_unique_values(${yin_yang_vars_str}) >= 2;\n`;
	}
	return out_str;
}

function yinYangRegionSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = yinYangSimpleLineElement(model, element, 'yin_yang_region_sum_line_p');

	// negative constraints
	if (!element.negative_constraints) return out_str;
	const lines_must_cross_colors =
		!!element.negative_constraints[TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE];

	if (lines_must_cross_colors) {
		out_str += yinYangRegionSumLinesMustCrossColorsAtLeastOnceConstraint(
			model.puzzle,
			TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE
		);
	}

	return out_str;
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

function simpleMultipliersLineConstraint(
	model: PuzzleModel,
	constraint: LineToolI,
	predicate: string
) {
	const grid = model.puzzle.grid;
	const cells = cellsFromCoords(grid, constraint.cells);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const constraint_str: string = `constraint ${predicate}(${values_vars_str});\n`;
	return constraint_str;
}

function simpleMultipliersLineElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleMultipliersLineConstraint(
			model,
			constraint as LineToolI,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

function doublersBetweenLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleMultipliersLineElement(model, element, 'between_line_p');
	return out_str;
}

function doublersDoubleArrowLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleMultipliersLineElement(model, element, 'double_arrow_p');
	return out_str;
}

function doublersThermometerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleMultipliersLineElement(model, element, 'strictly_increasing');
	return out_str;
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

function indexerCellsRegionSubsetLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, indexerCellsRegionSubsetLineConstraint);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.THERMOMETER, thermoElement],
	[TOOLS.FUZZY_THERMOMETER, fuzzyThermoElement],
	[TOOLS.SLOW_THERMOMETER, slowThermoElement],
	[TOOLS.CUSTOM_THERMOMETER, customThermoElement],
	[TOOLS.RENBAN_LINE, renbanElement],
	[TOOLS.DOUBLE_RENBAN_LINE, doubleRenbanElement],
	[TOOLS.RENRENBANBAN_LINE, renrenbanbanElement],
	[TOOLS.NABNER_LINE, nabnerConstraint],
	[TOOLS.WHISPERS_LINE, whispersElement],
	[TOOLS.DUTCH_WHISPERS, dutchWhispersElement],
	[TOOLS.RENBAN_OR_WHISPERS_LINE, renbanOrWhispersLineElement],
	[TOOLS.RENBAN_OR_NABNER_LINE, renbanOrNabnerElement],
	[TOOLS.OUT_OF_ORDER_CONSECUTIVE_LINE, outOfOrderConsecutiveLineElement],
	[TOOLS.N_CONSECUTIVE_RENBAN_LINE, nConsecutiveRenbanLineElement],
	[TOOLS.PALINDROME, palindromeElement],
	[TOOLS.SUM_LINE, sumLineElement],
	[TOOLS.PRODUCT_LINE, productLineElement],
	[TOOLS.XV_LINE, xvLineElement],
	[TOOLS.AT_LEAST_X_LINE, atLeastXLineElement],
	[TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE, maximumAdjacentDifferenceLineElement],
	[TOOLS.SAME_PARITY_LINE, sameParityLineElement],
	[TOOLS.ADJACENT_MULTIPLES_LINE, adjacentMultiplesLineElement],
	[TOOLS.ADJACENT_DIFFERENCES_COUNT_LINE, adjacentDifferencesCountLineElement],
	[TOOLS.LOOK_AND_SAY_LINE, lookAndSayLineElement],
	[TOOLS.ROW_SUM_LINE, rowSumLineElement],
	[TOOLS.INDEX_LINE, indexLineElement],
	[TOOLS.ZIPPER_LINE, zipperLineElement],
	[TOOLS.SEGMENTED_SUM_LINE, segmentedSumLineElement],
	[TOOLS.SEGMENTED_SUM_AND_RENBAN_LINE, segmentedSumAndRenbanLineElement],
	[TOOLS.N_CONSECUTIVE_FUZZY_SUM_LINE, nConsecutiveFuzzySumLineElement],
	[
		TOOLS.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,
		adjacentCellsAreMultiplesOfDifferenceLineElement
	],

	[TOOLS.SUPERFUZZY_ARROW, superfuzzyArrowElement],
	[TOOLS.AMBIGUOUS_ARROW, ambiguousArrowElement],
	[TOOLS.HEADLESS_ARROW, headlessArrowElement],
	[TOOLS.ARITHMETIC_SEQUENCE_LINE, arithmeticSequenceLineElement],
	[TOOLS.ODD_EVEN_OSCILLATOR_LINE, oddEvenOscillatorLineElement],
	[TOOLS.HIGH_LOW_OSCILLATOR_LINE, highLowOscillatorLineElement],
	[TOOLS.UNIQUE_VALUES_LINE, uniqueValuesLineElement],
	[TOOLS.REPEATED_DIGITS_LINE, repeatedDigitsLineElement],
	[TOOLS.UNIMODULAR_LINE, unimodularLineElement],
	[TOOLS.MODULAR_LINE, modularLineElement],
	[TOOLS.MODULAR_OR_UNIMODULAR_LINE, modularOrUnimodularLineElement],
	[TOOLS.REGION_SUM_LINE, regionSumLineElement],
	[TOOLS.ENTROPIC_LINE, entropicLineElement],
	[TOOLS.ENTROPIC_OR_MODULAR_LINE, entropicOrModularLineElement],
	[TOOLS.ROW_CYCLE_THERMOMETER, rowCycleThermoElement],

	[TOOLS.PEAPODS, peapodsLineElement],

	// double ended lines
	[TOOLS.BETWEEN_LINE, betweenLineElement],
	[TOOLS.TIGHTROPE_LINE, tightropeLineElement],
	[TOOLS.DOUBLE_ARROW_LINE, doubleArrowElement],
	[TOOLS.SPLIT_PEAS, splitPeasElement],
	[TOOLS.PARITY_COUNT_LINE, parityCountLineElement],
	[TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE, productOfEndsEqualsSumOfLineElement],

	[TOOLS.DOUBLERS_BETWEEN_LINE, doublersBetweenLineElement],
	[TOOLS.DOUBLERS_DOUBLE_ARROW_LINE, doublersDoubleArrowLineElement],
	[TOOLS.DOUBLERS_THERMOMETER, doublersThermometerElement],

	[TOOLS.INDEXER_CELLS_REGION_SUBSET_LINE, indexerCellsRegionSubsetLineElement],

	// yin_yang_lines
	[TOOLS.YIN_YANG_SHADED_WHISPERS_LINE, yinYangShadedWhispersLineElement],
	[TOOLS.YIN_YANG_UNSHADED_ENTROPIC_LINE, yinYangUnshadedEntropicLineElement],
	[TOOLS.YIN_YANG_UNSHADED_MODULAR_LINE, yinYangUnshadedModularLineElement],
	[TOOLS.YIN_YANG_REGION_SUM_LINE, yinYangRegionSumLineElement],
	[TOOLS.YIN_YANG_INDEXING_LINE_COLORING, yinYangIndexingLineColoringElement]

	// [TOOLS.GOLDILOCKS_ZONE_REGION_SUM, goldilocksZoneRegionSumLineConstraint]
]);

export function lineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
