import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { SHAPE_TYPES, type EditableShapeI } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { cornerUsage, quadrupleUsage } from '../ToolUsage';
import { HANDLER_TOOL_TYPE, type CornerToolOptions } from '$input/ToolInputHandlers/types';
import {
	cellsFromCoords,
	cellsToGridVarsStr,
	cellsToVarsName,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { ConstraintsElement, CornerToolI } from '../puzzle_schema';
import type { Grid } from '../Grid/Grid';
import { parseVarList, type ParseOptions } from '$src/lib/Solver/value_parsing';
import { combinations } from '$src/lib/utils/functionUtils';
import type { GridCoordI } from '$src/lib/utils/SquareCellGridCoords';

const DEFAULT_MEDIUM_BACKGROUND_CORNER_CIRCLE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: false, value: 0.15 },
	strokeWidth: { editable: false, value: 0.023 },
	stroke: { editable: false, value: 'black' },
	fill: { editable: false, value: 'var(--grid-background-color)' }
};

const DEFAULT_LARGE_BACKGROUND_CORNER_CIRCLE: EditableShapeI = {
	...DEFAULT_MEDIUM_BACKGROUND_CORNER_CIRCLE,
	r: { editable: false, value: 0.25 },
};

const DEFAULT_UNTYPABLE_CORNER_CATEGORIES = [
	TOOL_CATEGORIES.CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CORNER_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_TYPABLE_CORNER_CATEGORIES = [
	TOOL_CATEGORIES.CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.CORNER_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

function cellsFromElement(grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, CornerToolI>;
	const constl = Object.values(constraints).filter((constraint) => !constraint.disabled);
	const all_coords: GridCoordI[] = [];

	constl.forEach((constraint) => all_coords.push(...constraint.cells));
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	return cells;
}

export function validateCornerValue(value: string, maxLength = 3): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultCornerValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

function quadrupleValueUpdater(oldValue: string | undefined, key: string): string | undefined {
	function quadrupleValidator(): boolean {
		return true;
	}

	return defaultValueUpdater(oldValue, key, quadrupleValidator);
}

const DEFAULT_CORNER_OPTIONS: CornerToolOptions = {
	type: HANDLER_TOOL_TYPE.CORNER,
	defaultValue: '',
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultCornerValueUpdater(oldValue, key, validateCornerValue)
};

function getCornerVars(grid: Grid, constraint: CornerToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleCornerConstraint(grid: Grid, constraint: CornerToolI, predicate: string) {
	if (constraint.disabled) return '';
	const vars = getCornerVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const constraint_str = `constraint ${predicate}(${vars_str});\n`;
	return constraint_str;
}

function simpleCornerElement(model: PuzzleModel, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleCornerConstraint(grid, constraint as CornerToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

export function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: false,
		allow_int_list: false,
		allow_var_list: false
	};
	const default_name = `corner_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function valuedCornerConstraint(
	model: PuzzleModel,
	c_id: string,
	constraint: CornerToolI,
	predicate: string,
	default_value: string = ''
) {
	if (constraint.disabled) return '';

	const grid = model.puzzle.grid;
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
			c_id,
			constraint as CornerToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function quadrupleConstraint(model: PuzzleModel, c_id: string, constraint: CornerToolI) {
	if (constraint.disabled) return '';

	const grid = model.puzzle.grid;
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

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = quadrupleConstraint(model, c_id, constraint as CornerToolI);
		out_str += constraint_str;
	}
	return out_str;
}

export const quadrupleInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			quadrupleValueUpdater(oldValue, key),
		defaultValue: ''
	},

	toolId: TOOLS.QUADRUPLE,
	shape: DEFAULT_LARGE_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description: 'Digits in a circle appear at least once in the four surrounding cells.',
		tags: [],
		usage: quadrupleUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	},

	solver_func: quadrupleElement
};

export const cornerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CORNER_SUM,
	shape: DEFAULT_LARGE_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'Cells separated by a transparent blue dot marked with an X have a fixed sum of X.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		const out_str = valuedCornerElement(model, element, 'corner_sum_p');
		return out_str;
	}
};

export const cornerSumOfThreeEqualsTheOtherInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: ''
	},

	toolId: TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,
	shape: DEFAULT_MEDIUM_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		const out_str = simpleCornerElement(model, element, 'corner_sum_of_three_equals_the_other_p');
		return out_str;
	}
};

function countingCirclesElement(model: PuzzleModel, element: ConstraintsElement) {
	const cells = cellsFromElement(model.puzzle.grid, element);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	let out_str = '';
	out_str += `array[int] of var int: counting_circles = [\n\t${vars_str}\n];\n`;
	out_str += `constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);\n`;

	return out_str;
}

export const cornerCountingCirclesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: ''
	},

	toolId: TOOLS.CORNER_COUNTING_CIRCLES,
	shape: DEFAULT_LARGE_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'If the digit N appears in any of the four cells adjacent to a circle then it appears exactly N times adjacent to a circle across the grid.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: countingCirclesElement
};

export const cornerEvenCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CORNER_EVEN_COUNT,
	shape: DEFAULT_LARGE_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'Numbers in circles show the amount of even numbers in the surrounding four cells.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		const out_str = valuedCornerElement(model, element, 'corner_even_count_p');
		return out_str;
	}
};

function chaosConstructionCornerCellsBelongToExacltyThreeRegionsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CornerToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const region_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CHAOS_CONSTRUCTION_REGIONS);

	const constraint_str = `constraint chaos_construction_regions_count(${region_vars_str}, 3);\n`;
	return constraint_str;
}

function chaosConstructionCornerCellsBelongToExacltyThreeRegionsElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		chaosConstructionCornerCellsBelongToExacltyThreeRegionsConstraint
	);
	return out_str;
}

export const chaosConstructionCornerCellsBelongToExacltyThreeRegionsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'black' }
	},

	meta: {
		description:
			'The 4 cells surrounding a black square belong to exactly three different regions.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: chaosConstructionCornerCellsBelongToExacltyThreeRegionsElement
};

function chaosConstructionCornerCellsBelongToSameRegionConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CornerToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const region_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CHAOS_CONSTRUCTION_REGIONS);

	const constraint_str = `constraint chaos_construction_regions_count(${region_vars_str}, 1);\n`;
	return constraint_str;
}

export const chaosConstructionCornerCellsBelongToSameRegionsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_SAME_REGION,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description: 'The 4 cells surrounding a circle must belong to the same region.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(
			model,
			element,
			chaosConstructionCornerCellsBelongToSameRegionConstraint
		);
	}
};

export const productSquareInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: 'X'
	},

	toolId: TOOLS.PRODUCT_SQUARE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'var(--grid-background-color)' },
		fontSize: { editable: false, value: 0.34 }
	},

	meta: {
		description:
			"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		const out_str = simpleCornerElement(model, element, 'product_square_p');
		return out_str;
	}
};

export const equalDiagonalDifferencesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: ''
	},

	toolId: TOOLS.EQUAL_DIAGONAL_DIFFERENCES,

	shape: DEFAULT_MEDIUM_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		const out_str = simpleCornerElement(model, element, 'equal_diagonal_differences_p');
		return out_str;
	}
};

export const differentCornerDiagonalSumsInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: ''
	},

	toolId: TOOLS.DIFFERENT_CORNER_DIAGONAL_SUMS,
	shape: DEFAULT_MEDIUM_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'A dot in the centre of a 2x2 square indicates that the sum of the two digits in its positive diagonal is different than the sum of the two digits in its negative diagonal.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		const out_str = simpleCornerElement(model, element, 'different_corner_diagonal_sums_p');
		return out_str;
	}
};

function box2x2NumberRankingElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const values: Set<string> = new Set();
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const cells = (constraint as CornerToolI).cells;
		const first = cells[0];
		const var_str = `${VAR_2D_NAMES.RANKED_2X2_NUMBERS_GRID}[${first.r},${first.c}]`;
		const value = constraint.value || '';
		const result = getParsingResult(model, value, c_id);
		if (!result) continue;

		values.add(result[1]);
		const constraint_str = `constraint ${var_str} = ${result[1]};\n`;
		out_str += result[0];
		out_str += constraint_str;
	}

	// if values are equal -> cells around the corner are equal (redundant but might speed things up)
	const grid = model.puzzle.grid;
	for (const value of values) {
		const target_constraints = Object.values(constraints).filter(
			(constraint) => constraint.value === value
		) as CornerToolI[];

		if (target_constraints.length <= 1) continue;
		for (const [c1, c2] of combinations(target_constraints, 2)) {
			const cells1 = cellsFromCoords(grid, c1.cells);
			const cells2 = cellsFromCoords(grid, c2.cells);
			const vars1 = cellsToGridVarsStr(cells1, VAR_2D_NAMES.BOARD);
			const vars2 = cellsToGridVarsStr(cells2, VAR_2D_NAMES.BOARD);
			out_str += `constraint pairwise_equal_p(${vars1},${vars2});\n`;
		}
	}

	return out_str;
}

export const box2x2NumberRankingInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,
	toolId: TOOLS.BOX_2X2_NUMBER_RANKING,

	shape: DEFAULT_MEDIUM_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'Clues in the centre of a 2x2 area show its rank among those 64 numbers, where the lowest is 1 and the highest is 64.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	},

	solver_func: box2x2NumberRankingElement
};

function cornerCountLoopTurnsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CornerToolI
) {
	const grid_1 = VAR_2D_NAMES.CELL_CENTER_LOOP;
	const edges_h = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_H;
	const edges_v = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_V;

	const cells = cellsFromCoords(grid, constraint.cells);
	const loop_vars_str = cellsToGridVarsStr(cells, grid_1);

	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);
	if (Number.isNaN(val)) return '';

	const coords = '[' + cells.map((cell) => `(${cell.r}, ${cell.c})`).join(',') + ']';

	let out_str = `constraint count(${loop_vars_str}, true) >= ${val};\n`;
	out_str += `constraint count_loop_turns_f(${coords}, ${grid_1}, ${edges_h}, ${edges_v}) = ${val};\n`;

	return out_str;
}

export const cornerCountLoopTurnsInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			quadrupleValueUpdater(oldValue, key),
		defaultValue: ''
	},

	toolId: TOOLS.CORNER_COUNT_LOOP_TURNS,

	shape: DEFAULT_LARGE_BACKGROUND_CORNER_CIRCLE,

	meta: {
		description:
			'A digit in a circle indicates how many of the four surrounding cells contain turns of the loop.',
		tags: [],
		usage: quadrupleUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, cornerCountLoopTurnsConstraint);
	}
};
