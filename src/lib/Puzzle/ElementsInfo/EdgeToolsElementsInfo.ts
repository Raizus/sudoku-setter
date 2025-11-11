import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import { SHAPE_TYPES, type EditableShapeI } from '$lib/Puzzle/Shape/Shape';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import type { SquareCellElementInfo } from '../ElementInfo';
import { HANDLER_TOOL_TYPE, type EdgeToolOptions } from '$input/ToolInputHandlers/types';
import {
	adjCellPairGen,
	cellsFromCoords,
	cellsToGridVarsName,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	PuzzleModel,
	simpleElementFunction,
	VAR_2D_NAMES
} from '$src/lib/Solver/solver_utils';
import type { ConstraintsElement, EdgeToolI } from '../puzzle_schema';
import type { Grid } from '../Grid/Grid';
import type { Cell } from '../Grid/Cell';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';

const edgeDefaultCategories = [
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.EDGE_TOOL,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const typableEdgeDefaultCategories = [
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.EDGE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const EDGE_R_1 = 0.15;
const EDGE_STROKE_WIDTH_1 = 0.02;

const DEFAULT_WHITE_CIRCLE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: true, value: EDGE_R_1, lb: 0, ub: 1, step: 0.01 },
	strokeWidth: { editable: true, value: EDGE_STROKE_WIDTH_1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'var(--grid-background-color)' }
};

const DEFAULT_BORDER_LINE: EditableShapeI = {
	type: SHAPE_TYPES.BORDER_LINE,
	strokeWidth: { editable: true, value: 0.1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	opacity: { editable: true, value: 0.9 }
};

export function validateRatioValue(value: string, maxLength = 1): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: false,
		allowNegatives: false
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function validateEdgeValue(value: string, maxLength = 3): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function validateXVValue(value: string): boolean {
	if (value.length > 1) return false;
	if (/^[vVxX]$/.test(value)) return true;

	return false;
}

export function defaultEdgeValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

export function XVValueUpdater(oldValue: string | undefined, key: string): string | undefined {
	if (oldValue === undefined) return 'V';

	if (!validateXVValue(key)) {
		return oldValue;
	}
	return key.toUpperCase();
}

export function validateInequalityValue(value: string): boolean {
	if (value.length > 1) return false;
	if (/^[<>]$/.test(value)) return true;

	return false;
}

export function inequalityValueUpdater(
	oldValue: string | undefined,
	key: string
): string | undefined {
	if (oldValue === undefined) return '<';

	if (!validateInequalityValue(key)) {
		return oldValue;
	}
	return key;
}

const DEFAULT_EDGE_OPTIONS: EdgeToolOptions = {
	type: HANDLER_TOOL_TYPE.EDGE,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
};

function findEdgeConstraintMatch(constraints: Record<string, EdgeToolI>, cell1: Cell, cell2: Cell) {
	const clist = [...Object.values(constraints)];
	const match = clist.find((constraint) => {
		const coord1 = constraint.cells[0];
		const coord2 = constraint.cells[1];
		if (
			cell1.c === coord1.c &&
			cell1.r === coord1.r &&
			cell2.c === coord2.c &&
			cell2.r === coord2.r
		)
			return constraint;
		if (
			cell1.c === coord2.c &&
			cell1.r === coord2.r &&
			cell2.c === coord1.c &&
			cell2.r === coord1.r
		)
			return constraint;
	});
	return match;
}

function getEdgeVars(grid: Grid, constraint: EdgeToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars = cellsToVarsName(cells);
	return vars;
}

function simpleEdgeConstraint(grid: Grid, constraint: EdgeToolI, predicate: string) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;

	const constraint_str = `constraint ${predicate}(${var1}, ${var2});\n`;
	return constraint_str;
}

function simpleEdgeElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleEdgeConstraint(grid, constraint as EdgeToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};
	const default_name = `edge_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function valuedEdgeConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI,
	predicate: string,
	default_value: string = ''
) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;

	const value = constraint.value?.length ? constraint.value : default_value;
	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${var1}, ${var2}, ${var_name});\n`;
	return out_str;
}

function valuedEdgeElement(
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
		const constraint_str = valuedEdgeConstraint(
			model,
			grid,
			c_id,
			constraint as EdgeToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

function ratioElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	let out_str = valuedEdgeElement(model, element, 'ratio_p', '2');

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_RATIOS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, EdgeToolI>;

	let used_vals: string[] = [];
	if (constraints) {
		used_vals = Object.values(constraints)
			.map((constraint) => constraint.value)
			.map((val) => (!val ? '2' : val));
	}
	if (used_vals.length === 0) used_vals.push('2');

	const values = [...new Set(used_vals)];

	console.log('values', values);

	out_str += `\n% ${TOOLS.ALL_RATIOS_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in ratio pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);
		for (const value of values) {
			const val = parseInt(value);
			const constraint_str = `constraint not ratio_p(${var1}, ${var2}, ${val});\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export const ratioInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultEdgeValueUpdater(oldValue, key, validateRatioValue)
	},

	toolId: TOOLS.RATIO,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_RATIOS_GIVEN,
			description: 'All Ratios are given.'
		}
	],

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'black' },
		fontColor: { editable: false, value: 'white' }
	},

	meta: {
		description:
			'Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: ratioElement
};

function differenceElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	let out_str = valuedEdgeElement(model, element, 'abs_difference', '1');

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_DIFFERENCES_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, EdgeToolI>;

	let used_vals: string[] = [];
	if (constraints) {
		used_vals = Object.values(constraints)
			.map((constraint) => constraint.value)
			.map((val) => (!val ? '1' : val));
	}
	if (used_vals.length === 0) used_vals.push('1');

	const values = [...new Set(used_vals)];

	out_str += `\n% ${TOOLS.ALL_DIFFERENCES_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in difference pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);
		for (const value of values) {
			const val = parseInt(value);
			const constraint_str = `constraint abs(${var1} - ${var2}) != ${val};\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export const differenceInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_EDGE_OPTIONS,

	toolId: TOOLS.DIFFERENCE,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_DIFFERENCES_GIVEN,
			description: 'All Differences are given.'
		}
	],

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: differenceElement
};

export const edgeSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_EDGE_OPTIONS,

	toolId: TOOLS.EDGE_SUM,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(96, 96, 255, 0.8)' }
	},

	meta: {
		description:
			'Cells separated by a transparent blue dot marked with an X have a fixed sum of X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return valuedEdgeElement(model, element, 'edge_sum_p');
	}
};

function xvConstraint(grid: Grid, constraint: EdgeToolI) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;
	if (constraint.value === 'V' || constraint.value === 'v') {
		const constraint_str = `constraint ${var1} + ${var2} = 5;\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} + ${var2} = 10;\n`;
	return constraint_str;
}

function xvElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints as Record<string, EdgeToolI>;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = xvConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}

	// negative constraints
	if (!element.negative_constraints) return out_str;
	const all_v_given = !!element.negative_constraints[TOOLS.NEGATIVE_V_CONSTRAINT];
	const all_x_given = !!element.negative_constraints[TOOLS.NEGATIVE_X_CONSTRAINT];
	const all_xv_given = !!element.negative_constraints[TOOLS.NEGATIVE_XV_CONSTRAINT];
	if (!all_v_given && !all_x_given && !all_xv_given) return out_str;

	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);

		const var1_name = cellToVarName(cell1);
		const var2_name = cellToVarName(cell2);
		if (all_v_given && (!match || (match.value !== 'V' && match.value !== 'v'))) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 5;\n`;
			out_str += constraint_str;
		} else if (all_x_given && (!match || (match.value !== 'X' && match.value !== 'x'))) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 10;\n`;
			out_str += constraint_str;
		} else if (all_xv_given && !match) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 5 /\\ (${var1_name} + ${var2_name} != 10);\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export const xvInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE,
		defaultValue: 'V',
		valueUpdater: XVValueUpdater
	},

	toolId: TOOLS.XV,

	negative_constraints: [
		{
			toolId: TOOLS.NEGATIVE_V_CONSTRAINT,
			description: 'All pairs of adjacent cells not joined with an V cannot sum to 5.'
		},
		{
			toolId: TOOLS.NEGATIVE_X_CONSTRAINT,
			description: 'All pairs of adjacent cells not joined with an X cannot sum to 10.'
		},
		{
			toolId: TOOLS.NEGATIVE_XV_CONSTRAINT,
			description: 'All pairs of adjacent cells not joined with an V or X cannot sum to 5 or 10.'
		}
	],

	shape: {
		type: SHAPE_TYPES.TEXT_ONLY,
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fontSize: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description: 'Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: xvElement
};

function edgeInequalityConstraint(grid: Grid, constraint: EdgeToolI) {
	const vars = getEdgeVars(grid, constraint);
	const [var1, var2] = vars;
	const value = constraint.value;

	if (value === '<') {
		const constraint_str = `constraint ${var1} < ${var2};\n`;
		return constraint_str;
	} else if (value === '>') {
		const constraint_str = `constraint ${var1} > ${var2};\n`;
		return constraint_str;
	}
	return '';
}

export function edgeInequalityElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = edgeInequalityConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}
	return out_str;
}

export const edgeInequalityInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE,
		valueUpdater: inequalityValueUpdater,
		defaultValue: '<'
	},

	toolId: TOOLS.EDGE_INEQUALITY,

	shape: {
		type: SHAPE_TYPES.TEXT_ONLY,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fontSize: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'An inequality sign that separates two cells points to the lower of the two digits.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: edgeInequalityElement
};

export const edgeProductInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_EDGE_OPTIONS,

	toolId: TOOLS.EDGE_PRODUCT,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(253, 79, 79, 0.5)' }
	},

	meta: {
		description:
			'Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const edgeModuloInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_EDGE_OPTIONS,

	toolId: TOOLS.EDGE_MODULO,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(253, 175, 49, 0.5)' }
	},

	meta: {
		description:
			'Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return valuedEdgeElement(model, element, 'edge_modulo_p');
	}
};

export const edgeFactorInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_EDGE_OPTIONS,

	toolId: TOOLS.EDGE_FACTOR,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(251, 251, 40, 0.5)' }
	},

	meta: {
		description:
			'For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleEdgeElement(model.puzzle.grid, element, 'edge_factor_p');
	}
};

function xyDiffHelper(grid: Grid, cell1: Cell, cell2: Cell) {
	const var1 = cellToVarName(cell1);
	const var2 = cellToVarName(cell2);

	let var3: string = '';
	if (cell1.r == cell2.r) {
		const row_cells = grid.getRow(cell1.r);
		const first_cell = row_cells[0];
		var3 = cellToVarName(first_cell);
	} else if (cell1.c == cell2.c) {
		const col_cells = grid.getCol(cell1.c);
		const first_cell = col_cells[0];
		var3 = cellToVarName(first_cell);
	}
	if (!var3) return '';

	const out_str = `xy_differences_p(${var1}, ${var2}, ${var3});\n`;
	return out_str;
}

function xyDifferencesConstraint(grid: Grid, constraint: EdgeToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [cell1, cell2] = cells;

	const aux_str = xyDiffHelper(grid, cell1, cell2);
	if (aux_str.length === 0) return '';

	const constraint_str = `constraint ${aux_str}`;
	return constraint_str;
}

function xyDifferencesElement(model: PuzzleModel, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, EdgeToolI>;
	const grid = model.puzzle.grid;
	let out_str = '';

	for (const constraint of Object.values(constraints)) {
		const constraint_str = xyDifferencesConstraint(grid, constraint as EdgeToolI);
		out_str += constraint_str;
	}

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_XY_DIFFERENCES_GIVEN];
	if (!all_given) return out_str;

	out_str += `\n% ${TOOLS.ALL_XY_DIFFERENCES_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xy diff pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const aux_str = xyDiffHelper(grid, cell1, cell2);
		if (aux_str.length === 0) continue;

		const constraint_str = `constraint not ${aux_str}`;
		out_str += constraint_str;
	}

	return out_str;
}

export const xyDifferencesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.XY_DIFFERENCES,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_XY_DIFFERENCES_GIVEN,
			description:
				'If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.'
		}
	],

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 4 },
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: EDGE_STROKE_WIDTH_1, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: xyDifferencesElement
};

function yinYangEdgeConstraint(grid: Grid, constraint: EdgeToolI, predicate: string) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const [var1, var2] = cellsToVarsName(cells);
	const yin_yang_vars = cellsToGridVarsName(cells, VAR_2D_NAMES.YIN_YANG);
	const [yin_yang1, yin_yang2] = yin_yang_vars;

	const constraint_str = `constraint ${predicate}(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
	return constraint_str;
}

function yinYangEdgeElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = yinYangEdgeConstraint(grid, constraint as EdgeToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangKropkiElement(model: PuzzleModel, element: ConstraintsElement): string {
	const grid = model.puzzle.grid;
	let out_str = yinYangEdgeElement(grid, element, 'yin_yang_kropki_p');
	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_YIN_YANG_KROPKI_GIVEN];
	if (!all_given) return out_str;

	const constraints = element.constraints as Record<string, EdgeToolI>;
	out_str += `\n% ${TOOLS.ALL_YIN_YANG_KROPKI_GIVEN}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in kropki pairs
		const match = findEdgeConstraintMatch(constraints, cell1, cell2);
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const yin_yang1 = cellToGridVarName(cell1, VAR_2D_NAMES.YIN_YANG);
		const yin_yang2 = cellToGridVarName(cell2, VAR_2D_NAMES.YIN_YANG);

		const constraint_str = `constraint not yin_yang_kropki_p(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

export const yinYangKropkiInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.YIN_YANG_KROPKI,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_YIN_YANG_KROPKI_GIVEN,
			description: 'All such dots are given.'
		}
	],

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'lightblue' },
		opacity: { editable: false, value: 0.2 },
		fontColor: { editable: false, value: 'white' }
	},

	meta: {
		description:
			'Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: yinYangKropkiElement
};

export const yinYangWhiteKropkiInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.YIN_YANG_WHITE_KROPKI,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return yinYangEdgeElement(model.puzzle.grid, element, 'yin_yang_white_kropki_p');
	}
};

function regionBorderConstraint(grid: Grid, constraint: EdgeToolI, regions_var_name: VAR_2D_NAMES) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const region_vars = cellsToGridVarsName(cells, regions_var_name);
	const [region1, region2] = region_vars;

	const constraint_str = `constraint ${region1} != ${region2};\n`;
	return constraint_str;
}

function regionBorderElement(
	grid: Grid,
	element: ConstraintsElement,
	regions_var_name: VAR_2D_NAMES
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = regionBorderConstraint(grid, constraint as EdgeToolI, regions_var_name);
		out_str += constraint_str;
	}
	return out_str;
}

export const unknownRegionBorderInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.UNKNOWN_REGION_BORDER,

	shape: DEFAULT_BORDER_LINE,

	meta: {
		description: 'A line in the border between cells indicates a region border.',
		tags: [],
		categories: edgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return regionBorderElement(model.puzzle.grid, element, VAR_2D_NAMES.UNKNOWN_REGIONS);
	}
};

export const fillominoRegionBorderInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.FILLOMINO_REGION_BORDER,

	shape: DEFAULT_BORDER_LINE,

	meta: {
		description: 'A line in the border between cells indicates a fillomino region border.',
		tags: [],
		categories: edgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return regionBorderElement(model.puzzle.grid, element, VAR_2D_NAMES.FILLOMINO_REGIONS);
	}
};

export const chaosConstructionSuguruBorderInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.CHAOS_CONSTRUCTION_SUGURU_BORDER,

	shape: DEFAULT_BORDER_LINE,

	meta: {
		description: 'A line in the border between cells indicates a region border.',
		tags: [],
		categories: edgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return regionBorderElement(model.puzzle.grid, element, VAR_2D_NAMES.SUGURU_REGIONS);
	}
};

export const edgeCaveOneOfEachInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE
	},

	toolId: TOOLS.EDGE_CAVE_ONE_OF_EACH,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).',
		tags: [],
		categories: edgeDefaultCategories
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return regionBorderElement(model.puzzle.grid, element, VAR_2D_NAMES.CAVE_SHADING);
	}
};

export const oneWayDoorInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE,
		valueUpdater: inequalityValueUpdater,
		defaultValue: '<'
	},

	toolId: TOOLS.ONE_WAY_DOOR,

	shape: {
		type: SHAPE_TYPES.TEXT_ONLY,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fontSize: { editable: false, value: 0.4 },
		fontColor: { editable: true, value: 'darkblue' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.',
		tags: [],
		categories: typableEdgeDefaultCategories
	},

	solver_func: edgeInequalityElement
};

export const combinedEdgeConstraintInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_EDGE_OPTIONS,

	toolId: TOOLS.COMBINED_EDGE_CONSTRAINT,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description: 'Custom Edge Constraint. Combines several edge constraints into one.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

function differenceIndexingArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: EdgeToolI
) {
	const coords = constraint.cells;
	const cells = cellsFromCoords(grid, coords);
	const cells_vars = cellsToGridVarsName(cells, VAR_2D_NAMES.BOARD);
	const cell1_var = cells_vars[0];
	const cell2_var = cells_vars[1];

	const constraint_str = `constraint difference_indexing_arrow_p(board, ${cell1_var}, ${cell2_var});\n`;
	return constraint_str;
}

export const differenceIndexingArrowInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.DIRECTED_ADJACENT_CELLS,
		defaultValue: ''
	},

	toolId: TOOLS.DIFFERENCE_INDEXING_ARROW,

	shape: {
		type: SHAPE_TYPES.ARROW,
		strokeWidth: { editable: true, value: 0.1, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: true, value: 'black' },
		fontSize: { editable: false, value: 0.3 }
	},

	meta: {
		description:
			"The two digits on an arrow give the coordinates of a particular target cell somewhere in the grid. The digit on the arrow's shaft indicates the target cell's row, and the digit on the arrowhead indicates the target cell's column. The difference between the two digits should be placed into the target cell.",
		tags: [],
		categories: [
			TOOL_CATEGORIES.EDGE_CONSTRAINT,
			TOOL_CATEGORIES.EDGE_TOOL,
			TOOL_CATEGORIES.LOCAL_ELEMENT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT
		]
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, differenceIndexingArrowConstraint);
	}
};
