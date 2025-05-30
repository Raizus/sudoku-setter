import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type OutsideDirectionToolInputOptions
} from '$input/ToolInputHandlers/types';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import { cellsToGridVarsStr, cellToGridVarName, simpleElementFunction, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Grid } from '../../Grid/Grid';
import type { ConstraintsElement, OutsideDirectionToolI } from '../../puzzle_schema';
import { outsideEdgeUsage } from '../../ToolUsage';
import { defaultOutsideDirectionValueUpdater, getOutsideDirectionConstraintVars, getParsingResult, OUTSIDE_DEFAULT_SHAPE, simpleOutsideDirectionElement, validateOutsideDirectionValue } from './helpers';

const outsideEdgeDefaultCategories = [
	TOOL_CATEGORIES.OUTSIDE_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.OUTSIDE_EDGE_TOOL,
	TOOL_CATEGORIES.OUTSIDE_DIRECTION_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS: OutsideDirectionToolInputOptions = {
	type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
	defaultValue: '',
	cornerOrEdge: CornerOrEdge.EDGE
};

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

export const sandwichSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SANDWICH_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: sandwichSumElement
};


function mysterySandwichSumElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return '';

	const grid = model.puzzle.grid;
	const var_a = 'mystery_sandwich_a';
	const var_b = 'mystery_sandwich_b';

	out_str += `var int: ${var_a};\n`;
	out_str += `var int: ${var_b};\n`;
	out_str += `constraint member(ALLOWED_DIGITS, ${var_a});\n`;
	out_str += `constraint member(ALLOWED_DIGITS, ${var_b});\n`;
	out_str += `constraint ${var_a} <= ${var_b};\n`;

	for (const constraint of Object.values(constraints as Record<string, OutsideDirectionToolI>)) {
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

export const mysterySandwichSumInfo: SquareCellElementInfo = {
	inputOptions: {
		...DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.MYSTERY_SANDWICH_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: mysterySandwichSumElement
};

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

export const sandwichSumXorXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SANDWICH_SUM_XOR_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: sandwichSumXorXSumElement
};

function xSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'x_sum_p');
	return out_str;
}

export const xSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: xSumElement
};

function shortsightedXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'shortsighted_x_sum_p');
	return out_str;
}

export const shortsightedXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SHORTSIGHTED_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: shortsightedXSumElement
};

function shiftedXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'shifted_x_sum_p');
	return out_str;
}

export const shiftedXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SHIFTED_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: shiftedXSumElement
};

function brokenXSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'broken_x_sum_p');
	return out_str;
}

export const brokenXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.BROKEN_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: brokenXSumElement
};

function xSumSkyscrapersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'x_sum_skyscrapers_p');
	return out_str;
}

export const xSumSkyscrapersInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.X_SUM_SKYSCRAPERS,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: xSumSkyscrapersElement
};

function battlefieldElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'battlefield_p');
	return out_str;
}

export const battlefieldInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.BATTLEFIELD,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: battlefieldElement
};

function skyscrapersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'skyscrapers_p');
	return out_str;
}

export const skyscrapersInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SKYSCRAPERS,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description: 'A clue outside the grid indicates the number of skyscrapers seen from that side.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: skyscrapersElement
};

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

export const xIndexInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.X_INDEX,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: xIndexElement
};

function risingStreakElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'rising_streak_p');
	return out_str;
}

export const risingStreakInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.RISING_STREAK,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: risingStreakElement
};

export const rowOrColumnRankInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.ROW_OR_COLUMN_RANK,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Considering all rows and columns as numbers read from the direction of the clue and ranked from lowest (1) to highest (36), a clue represents where in the ranking that row/column lies.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

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

export const outsideEdgeYinYangSumOfShadedInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: outsideEdgeYinYangAdjacentSumOfShadedElement
};

function outsideConsecutiveSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'outside_consecutive_sum_p');
	return out_str;
}

export const outsideConsecutiveSumInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.OUTSIDE_CONSECUTIVE_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: outsideConsecutiveSumElement
};


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

export const loopwhichesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.LOOPWICHES,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: loopwhichesElement
};

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

export const chaosConstructionSumOfFirstEachRegionInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: chaosConstructionSumOfFirstEachRegionElement
};

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

function chaosConstructionXIndexRegionElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, chaosConstructionXIndexRegionConstraint);
	return out_str;
}

export const chaosConstructionXIndexRegionInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.CHAOS_CONSTRUCTION_X_INDEX_REGION,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicate the first N cells pointing in that direction are in the same region - followed by a region border - where N is the first digit seen by the clue.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: chaosConstructionXIndexRegionElement
};

function chaosConstructionXSumRegionBordersConstraint(
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

	out_str += `constraint chaos_construction_x_sum_region_borders_p(${cell_vars}, ${region_vars}, ${var_name});\n`;

	return out_str;
}

function chaosConstructionXSumRegionBordersElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		chaosConstructionXSumRegionBordersConstraint
	);
	return out_str;
}

export const chaosConstructionXSumRegionBordersInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.EDGE
	},

	toolId: TOOLS.CHAOS_CONSTRUCTION_X_SUM_REGION_BORDERS,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A number outside the grid gives the sum of the first M cells of the row/column from that direction. M is the number of region borders in that row/column.**',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: chaosConstructionXSumRegionBordersElement
};

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

export const pentominoBorderCountInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.EDGE
	},

	toolId: TOOLS.PENTOMINO_BORDER_COUNT,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicate the number of borders between pentominoes present in that row or column.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	},

	solver_func: pentominoBorderCountElement
};
