import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
import type { OutsideDirectionToolI } from '../Puzzle/Constraints/OutsideDirectionConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import {
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	constraintsBuilder,
	PuzzleModel,
	simpleElementFunction,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

function getOutsideDirectionConstraintVars(grid: Grid, constraint: OutsideDirectionToolI) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const vars = cellsToVarsName(cells);
	return vars;
}

export function getParsingResult(
	model: PuzzleModel,
	value: string,
	cell_coord: GridCoordI,
	cell: Cell | undefined
) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};

	let default_name = '';
	if (!cell || cell.outside) {
		default_name = `R${cell_coord.r}C${cell_coord.c}`;
		default_name = default_name.replace('-', 'm');
	}
	if (!value) value = default_name;

	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function simpleOutsideDirectionPredicate(
	model: PuzzleModel,
	grid: Grid,
	constraint: OutsideDirectionToolI,
	predicate: string
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);

	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;

	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${vars_str}, ${var_name});\n`;
	return out_str;
}

function simpleOutsideDirectionElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleOutsideDirectionPredicate(
			model,
			grid,
			constraint as OutsideDirectionToolI,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

function sandwichSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);

	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	const valid_digits = model.puzzle.valid_digits;
	const min_v = Math.min(...valid_digits);
	const max_v = Math.max(...valid_digits);

	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint sandwich_sum_p(${vars_str}, ${var_name}, ${min_v}, ${max_v});\n`;
	return out_str;
}

function sandwichSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, sandwichSumConstraint);
	return out_str;
}

function sandwichSumXorXSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);

	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;
	const valid_digits = model.puzzle.valid_digits;
	const min_v = Math.min(...valid_digits);
	const max_v = Math.max(...valid_digits);

	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	const bool_var_1 = `var_bool_${c_id}_0`;
	const bool_var_2 = `var_bool_${c_id}_1`;
	out_str += `var bool: ${bool_var_1} = sandwich_sum_p(${vars_str}, ${var_name}, ${min_v}, ${max_v});\n`;
	out_str += `var bool: ${bool_var_2} = x_sum_p(${vars_str}, ${var_name});\n`;
	out_str += `constraint 'xor'(${bool_var_1}, ${bool_var_2});\n`;
	return out_str;
}

function sandwichSumXorXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, sandwichSumXorXSumConstraint);
	return out_str;
}

function xIndexConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);

	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const first_var = vars[0];
	const value = constraint.value;
	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint x_index_p(${vars_str}, ${first_var}, ${var_name});\n`;
	return out_str;
}

function xIndexElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, xIndexConstraint);
	return out_str;
}

function xSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'x_sum_p');
	return out_str;
}

function shortsightedXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'shortsighted_x_sum_p');
	return out_str;
}

function brokenXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'broken_x_sum_p');
	return out_str;
}

function shiftedXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'shifted_x_sum_p');
	return out_str;
}

function skyscrapersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'skyscrapers_p');
	return out_str;
}

function xSumSkyscrapersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'x_sum_skyscrapers_p');
	return out_str;
}

function battlefieldElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'battlefield_p');
	return out_str;
}

function risingStreakElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'rising_streak_p');
	return out_str;
}

function outsideConsecutiveSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'outside_consecutive_sum_p');
	return out_str;
}

function loopwhichesConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint loopwhiches_p(${vars_str}, ${loop_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function loopwhichesElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, loopwhichesConstraint);
	return out_str;
}

function chaosConstructionSumOfFirstEachRegionConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);

	const cell_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const value = constraint.value;
	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];

	out_str += `constraint chaos_construction_sum_of_first_each_region_p(${cell_vars}, ${region_vars}, ${var_name});\n`;

	return out_str;
}

function chaosConstructionSumOfFirstEachRegionElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		chaosConstructionSumOfFirstEachRegionConstraint
	);
	return out_str;
}

function chaosConstructionXIndexRegionConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	// const cell = grid.getCell(cell_coord.r, cell_coord.c);
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const first_cell = cells[0];
	const first_var = cellToGridVarName(first_cell, VAR_2D_NAMES.BOARD);
	const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const out_str: string = `constraint chaos_construction_x_index_region_p(${first_var}, ${region_vars});\n`;

	return out_str;
}


function chaosConstructionXIndexRegionElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(model, element, chaosConstructionXIndexRegionConstraint);
	return out_str;
}

function littleKillerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'little_killer_sum_p');
	return out_str;
}

function littleKillerProductElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'little_killer_product_p');
	return out_str;
}

function xOmitlittleKillerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'x_omit_little_killer_sum_p');
	return out_str;
}

function outsideEdgeYinYangAdjacentSumOfShadedConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint outside_edge_yin_yang_sum_of_shaded_p(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function outsideEdgeYinYangAdjacentSumOfShadedElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		outsideEdgeYinYangAdjacentSumOfShadedConstraint
	);
	return out_str;
}

function negatorsLittleKillerSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint little_killer_sum_p(${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function negatorsLittleKillerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, negatorsLittleKillerSumConstraint);
	return out_str;
}

function pentominoBorderCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.PENTOMINO_REGIONS);

	const value = constraint.value;
	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];

	out_str += `constraint pentomino_border_count_p(${region_vars}, ${var_name});\n`;

	return out_str;
}

function pentominoBorderCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, pentominoBorderCountConstraint);
	return out_str;
}

function mysterySandwichSumConstraint(
	model: PuzzleModel,
	constraints: Record<string, OutsideDirectionToolI>
) {
	let out_str = '';

	const grid = model.puzzle.grid;
	const var_a = 'mystery_sandwich_a';
	const var_b = 'mystery_sandwich_b';

	out_str += `var int: ${var_a};\n`;
	out_str += `var int: ${var_b};\n`;
	out_str += `constraint member(ALLOWED_DIGITS, ${var_a});\n`;
	out_str += `constraint member(ALLOWED_DIGITS, ${var_b});\n`;
	out_str += `constraint ${var_a} <= ${var_b};\n`;

	for (const constraint of Object.values(constraints)) {
		const cell_coord = constraint.cell;
		const cell = grid.getCell(cell_coord.r, cell_coord.c);

		const vars = getOutsideDirectionConstraintVars(grid, constraint);
		const vars_str = `[${vars.join(',')}]`;
		const value = constraint.value ?? '';

		const result = getParsingResult(model, value, cell_coord, cell);
		if (!result) continue;

		const var_name = result[1];
		out_str += result[0];

		out_str += `constraint sandwich_sum_p(${vars_str}, ${var_name}, ${var_a}, ${var_b});\n`;
	}

	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.SANDWICH_SUM, sandwichSumElement],
	[TOOLS.X_SUM, xSumElement],
	[TOOLS.SHORTSIGHTED_X_SUM, shortsightedXSumElement],
	[TOOLS.BROKEN_X_SUM, brokenXSumElement],
	[TOOLS.SHIFTED_X_SUM, shiftedXSumElement],
	[TOOLS.SKYSCRAPERS, skyscrapersElement],
	[TOOLS.X_SUM_SKYSCRAPERS, xSumSkyscrapersElement],
	[TOOLS.X_INDEX, xIndexElement],
	[TOOLS.BATTLEFIELD, battlefieldElement],
	[TOOLS.SANDWICH_SUM_XOR_X_SUM, sandwichSumXorXSumElement],
	[TOOLS.RISING_STREAK, risingStreakElement],
	[TOOLS.OUTSIDE_CONSECUTIVE_SUM, outsideConsecutiveSumElement],
	[TOOLS.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED, outsideEdgeYinYangAdjacentSumOfShadedElement],
	[TOOLS.LOOPWICHES, loopwhichesElement],
	[TOOLS.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION, chaosConstructionSumOfFirstEachRegionElement],
	[TOOLS.CHAOS_CONSTRUCTION_X_INDEX_REGION, chaosConstructionXIndexRegionElement],
	[TOOLS.PENTOMINO_BORDER_COUNT, pentominoBorderCountElement],

	// outside corner
	[TOOLS.LITTLE_KILLER_SUM, littleKillerSumElement],
	[TOOLS.LITTLE_KILLER_PRODUCT, littleKillerProductElement],
	[TOOLS.X_OMIT_LITTLE_KILLER_SUM, xOmitlittleKillerSumElement],
	[TOOLS.NEGATORS_LITTLE_KILLER_SUM, negatorsLittleKillerSumElement]
]);

export function outsideDirectionElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
