import { type LineToolInputOptions, HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import { cellsFromCoords, cellsToGridVarsStr, cellsToVarsName, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';
import type { Grid } from '../../Grid/Grid';
import type { ConstraintsElement, LineToolI } from '../../puzzle_schema';
import { TOOL_CATEGORIES } from '../../Tools';
import { lineUsage } from '../../ToolUsage';

export const simpleLineDefaultCategories = [
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LINE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const doubleEndedLineDefaultCategories = [
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.DOUBLE_ENDED_LINE_CONSTRAINT,
	TOOL_CATEGORIES.LINE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const DEFAULT_META_1 = {
	description: '',
	usage: lineUsage(),
	tags: [],
	categories: simpleLineDefaultCategories
};

export const DEFAULT_LINE_OPTIONS_INTERSECT: LineToolInputOptions = {
	type: HANDLER_TOOL_TYPE.LINE,
	allowSelfIntersection: true
};

export const DEFAULT_LINE_OPTIONS_NO_INTERSECT: LineToolInputOptions = {
	type: HANDLER_TOOL_TYPE.LINE,
	allowSelfIntersection: false
};

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

export function getLineVars(grid: Grid, constraint: LineToolI, use_set: boolean = false) {
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

export function simpleLineElement(
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

export function valuedLineElement(
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

export function circularValuedLineElement(
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

export function simpleMultipliersLineElement(
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
