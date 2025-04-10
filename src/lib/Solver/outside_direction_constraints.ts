import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { OutsideDirectionToolI } from '../Puzzle/Constraints/OutsideDirectionConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { cellsToGridVarsStr, cellsToVarsName, PuzzleModel, VAR_2D_NAMES } from './solver_utils';
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

function simpleOutsideDirectionConstraint(
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

function xSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(model, grid, constraint, 'x_sum_p');
	return constraint_str;
}

function shortsightedXSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'shortsighted_x_sum_p'
	);
	return constraint_str;
}

function brokenXSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'broken_x_sum_p'
	);
	return constraint_str;
}

function shiftedXSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'shifted_x_sum_p'
	);
	return constraint_str;
}

function skyscrapersConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(model, grid, constraint, 'skyscrapers_p');
	return constraint_str;
}

function xSumSkyscrapersConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'x_sum_skyscrapers_p'
	);
	return constraint_str;
}

function battlefieldConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(model, grid, constraint, 'battlefield_p');
	return constraint_str;
}

function risingStreakConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'rising_streak_p'
	);
	return constraint_str;
}

function outsideConsecutiveSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'outside_consecutive_sum_p'
	);
	return constraint_str;
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

function littleKillerSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'little_killer_sum_p'
	);
	return constraint_str;
}

function littleKillerProductConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'little_killer_product_p'
	);
	return constraint_str;
}

function xOmitlittleKillerSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const constraint_str = simpleOutsideDirectionConstraint(
		model,
		grid,
		constraint,
		'x_omit_little_killer_sum_p'
	);
	return constraint_str;
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

function mysterySandwichSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	constraints: Record<string, OutsideDirectionToolI>
) {
	let out_str = '';

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

type ConstraintF = (
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) => string;

type ConstraintF2 = (
	model: PuzzleModel,
	grid: Grid,
	constraints: Record<string, OutsideDirectionToolI>
) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.SANDWICH_SUM, sandwichSumConstraint],
	[TOOLS.X_SUM, xSumConstraint],
	[TOOLS.SHORTSIGHTED_X_SUM, shortsightedXSumConstraint],
	[TOOLS.BROKEN_X_SUM, brokenXSumConstraint],
	[TOOLS.SHIFTED_X_SUM, shiftedXSumConstraint],
	[TOOLS.SKYSCRAPERS, skyscrapersConstraint],
	[TOOLS.X_SUM_SKYSCRAPERS, xSumSkyscrapersConstraint],
	[TOOLS.X_INDEX, xIndexConstraint],
	[TOOLS.BATTLEFIELD, battlefieldConstraint],
	[TOOLS.SANDWICH_SUM_XOR_X_SUM, sandwichSumXorXSumConstraint],
	[TOOLS.RISING_STREAK, risingStreakConstraint],
	[TOOLS.OUTSIDE_CONSECUTIVE_SUM, outsideConsecutiveSumConstraint],
	[TOOLS.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED, outsideEdgeYinYangAdjacentSumOfShadedConstraint],
	[TOOLS.LOOPWICHES, loopwhichesConstraint],
	[
		TOOLS.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,
		chaosConstructionSumOfFirstEachRegionConstraint
	],
	[TOOLS.PENTOMINO_BORDER_COUNT, pentominoBorderCountConstraint],

	// outside corner
	[TOOLS.LITTLE_KILLER_SUM, littleKillerSumConstraint],
	[TOOLS.LITTLE_KILLER_PRODUCT, littleKillerProductConstraint],
	[TOOLS.X_OMIT_LITTLE_KILLER_SUM, xOmitlittleKillerSumConstraint],
	[TOOLS.NEGATORS_LITTLE_KILLER_SUM, negatorsLittleKillerSumConstraint]
]);

const tool_map_2 = new Map<string, ConstraintF2>([
	[TOOLS.MYSTERY_SANDWICH_SUM, mysterySandwichSumConstraint]
]);

export function outsideDirectionConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	const constraintF2 = tool_map_2.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as OutsideDirectionToolI);
			out_str += constraint_str;
		}
	} else if (constraintF2) {
		const constraint_str = constraintF2(
			model,
			grid,
			constraints as Record<string, OutsideDirectionToolI>
		);
		out_str += constraint_str;
	}
	return out_str;
}
