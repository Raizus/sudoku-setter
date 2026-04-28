import {
	cellsToGridVarsStr,
	cellToGridVarName,
	cellToVarName,
	getDirectionCells,
	type PuzzleModel,
	type VAR_2D_NAMES
} from '$src/lib/Solver/solver_utils';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';
import type { Grid } from '../../Grid/Grid';
import type { CellToolI, ConstraintsElement } from '../../puzzle_schema';
import { type EditableShapeI, SHAPE_TYPES } from '../../Shape/Shape';

function simpleSingleCellConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const constraint_str = `constraint ${predicate}(${var1});\n`;
	return constraint_str;
}

export function simpleSingleCellElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		if (constraint.disabled) continue;
		const constraint_str = simpleSingleCellConstraint(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

const DEFAULT_PARSE_OPTS: ParseOptions = {
	allow_var: true,
	allow_interval: true,
	allow_int_list: false
};

export function getParsingResult(
	model: PuzzleModel,
	value: string,
	c_id: string,
	parse_opts: ParseOptions = DEFAULT_PARSE_OPTS
) {
	const default_name = `cell_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function valuedSingleCellConstraint(
	grid: Grid,
	constraint: CellToolI,
	predicate: string,
	default_value: string = ''
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);

	let value = constraint.value;
	if (!value) value = default_value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint ${predicate}(${var1}, ${val});\n`;
	return constraint_str;
}

export function valuedSingleCellElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string,
	default_value: string = ''
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = valuedSingleCellConstraint(
			grid,
			constraint as CellToolI,
			predicate,
			default_value
		);
		out_str += constraint_str;
	}
	return out_str;
}

export function orthogonalRegionSeenCountConstraint(
	grid: Grid,
	constraint: CellToolI,
	region_var_name: VAR_2D_NAMES,
	predicate: string
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const dirCells = getDirectionCells(grid, cell);
	const region_vars = dirCells.map((cells) => cellsToGridVarsStr(cells, region_var_name));

	const cell_region_var = cellToGridVarName(cell, region_var_name);

	const constraint_str = `constraint ${predicate}(${region_vars.join(', ')}, ${cell_region_var}, ${cell_var});\n`;
	return constraint_str;
}

export function countNeighbourConstraint(
	grid: Grid,
	constraint: CellToolI,
	region_var_name: VAR_2D_NAMES,
	predicate: string,
	include_cell: boolean
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	if (include_cell) neighbours.push(cell);
	const vars_str = cellsToGridVarsStr(neighbours, region_var_name);

	const constraint_str = `constraint ${predicate}(${var1}, ${vars_str});\n`;
	return constraint_str;
}

export function orthogonalRegionSeenCountElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	region_var_name: VAR_2D_NAMES,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = orthogonalRegionSeenCountConstraint(
			grid,
			constraint as CellToolI,
			region_var_name,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

export const DEFAULT_SQUARE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.SQUARE,
	strokeWidth: { editable: true, value: 0.03 },
	stroke: { editable: true, value: 'black' },
	r: { editable: true, value: 0.35 },
	fill: { editable: true, value: 'none' }
};

export const DEFAULT_CIRCLE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: true, value: 0.35 },
	strokeWidth: { editable: true, value: 0.02 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'none' }
};

export const DEFAULT_INVISIBLE_CAGE: EditableShapeI = {
	type: SHAPE_TYPES.CAGE,
	strokeWidth: { editable: false, value: 0 },
	stroke: { editable: false, value: 'none' },
	fill: { editable: false, value: 'none' }
};