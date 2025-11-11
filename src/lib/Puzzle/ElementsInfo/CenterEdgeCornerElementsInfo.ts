import { defaultValueUpdater } from '$input/InputHandler';
import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type CenterCornerOrEdgeToolInputOptions
} from '$input/ToolInputHandlers/types';
import {
	cellsToGridVarsStr,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';
import {
	cellEdgeToCellCoords,
	cornerCoordToAdjCellCoords,
	type GridCoordI
} from '$src/lib/utils/SquareCellGridCoords';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { Cell } from '../Grid/Cell';
import type { Grid } from '../Grid/Grid';
import type { CenterCornerOrEdgeToolI, ConstraintsElement } from '../puzzle_schema';
import { SHAPE_TYPES } from '../Shape/Shape';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';
import { centerCornerOrEdgeUsage } from '../ToolUsage';

const DEFAULT_CLOSEST_OPTIONS: CenterCornerOrEdgeToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE,
	targets: CornerOrEdge.CLOSEST
};

const DEFAULT_CENTER_EDGE_CORNER_CATEGORIES = [
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CENTER_CORNER_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

function getCellRot180(grid: Grid, cell: Cell, r: number, c: number) {
	const center_r = cell.r + 0.5;
	const center_c = cell.c + 0.5;

	const dr = r - center_r;
	const dc = c - center_c;
	const nr = Math.floor(r + dr);
	const nc = Math.floor(c + dc);
	const new_cell = grid.getCell(nr, nc);
	return new_cell;
}

function possibleGalaxyCells(
	grid: Grid,
	coord: GridCoordI
): [cells: Cell[], mapped: Cell[], not_in_galaxy: Cell[]] {
	const cells: Cell[] = [];
	const mapped: Cell[] = [];
	const not_in_galaxy: Cell[] = [];

	for (const cell of grid.getAllCells()) {
		const cell2 = getCellRot180(grid, cell, coord.r, coord.c);
		if (cell2 && !cells.includes(cell2)) {
			cells.push(cell);
			mapped.push(cell2);
		} else if (!mapped.includes(cell)) {
			not_in_galaxy.push(cell);
		}
	}

	return [cells, mapped, not_in_galaxy];
}

function getParsingResult(model: PuzzleModel, value: string, c_id: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};
	const default_name = `center_corner_edge_var_${c_id}`;
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function rotationallySymmetricGalaxyCenterElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints as Record<string, CenterCornerOrEdgeToolI>;
	if (!constraints) return out_str;

	const constraints_list = [...Object.values(constraints)];
	const grid = model.puzzle.grid;
	let center_count = 0;

	for (let i = 0; i < constraints_list.length; i++) {
		const constraint = constraints_list[i];
		const coord = constraint.cell;
		const gal_id = i + 1;

		const [cells, mapped, not_in_galaxy] = possibleGalaxyCells(grid, coord);
		const group_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.GALAXY_REGIONS);
		const mapped_vars = cellsToGridVarsStr(mapped, VAR_2D_NAMES.GALAXY_REGIONS);
		const not_in_galaxy_vars = cellsToGridVarsStr(not_in_galaxy, VAR_2D_NAMES.GALAXY_REGIONS);
		out_str += `% galaxy ${gal_id}\n`;
		out_str += `constraint galaxy_center_p(${group_vars}, ${mapped_vars}, ${not_in_galaxy_vars}, ${gal_id});\n`;
		out_str += `constraint connected_region(${VAR_2D_NAMES.GALAXY_REGIONS}, ${gal_id});\n`;
		center_count += 1;
	}
	if (!constraints_list.length) return out_str;

	if (!element.negative_constraints) return out_str;
	const all_galaxy_centers_given = !!element.negative_constraints[TOOLS.ALL_GIVEN];

	if (all_galaxy_centers_given) {
		out_str += `\nconstraint all_galaxy_centers_given_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${center_count});\n`;
	} else {
		const max_galaxies = grid.nCols * grid.nRows;
		const given_galaxies = center_count;
		const reg_idxs = `${given_galaxies + 1}..${max_galaxies}`;
		out_str += `\nconstraint order_remaining_galaxies_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${reg_idxs});\n`;
	}

	return out_str;
}

export const rotationallySymmetricGalaxyCenterInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CLOSEST_OPTIONS,

	toolId: TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_GIVEN,
			description: 'All galaxy centers are given.'
		}
	],

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.15 },
		strokeWidth: { editable: false, value: 0.02, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			"The dots in the grid are centers of 180 degree rotationally symmetric 'galaxies' (non-overlapping set of orthogonally connected cells).",
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: DEFAULT_CENTER_EDGE_CORNER_CATEGORIES
	},

	solver_func: rotationallySymmetricGalaxyCenterElement
};

function rotationallySymmetricGalaxyCenterSumElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	let out_str = '';
	const constraints = element.constraints as Record<string, CenterCornerOrEdgeToolI>;
	if (!constraints) return out_str;

	const constraints_list = [...Object.values(constraints)];
	const grid = model.puzzle.grid;

	for (let i = 0; i < constraints_list.length; i++) {
		const constraint = constraints_list[i];
		const coord = constraint.cell;
		const gal_id = i + 1;

		const [cells, mapped, not_in_galaxy] = possibleGalaxyCells(grid, coord);
		const group_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.GALAXY_REGIONS);
		const mapped_vars = cellsToGridVarsStr(mapped, VAR_2D_NAMES.GALAXY_REGIONS);
		const not_in_galaxy_vars = cellsToGridVarsStr(not_in_galaxy, VAR_2D_NAMES.GALAXY_REGIONS);
		out_str += `% galaxy ${gal_id}\n`;
		out_str += `constraint galaxy_center_p(${group_vars}, ${mapped_vars}, ${not_in_galaxy_vars}, ${gal_id});\n`;
		out_str += `constraint connected_region(${VAR_2D_NAMES.GALAXY_REGIONS}, ${gal_id});\n`;
		const value = constraint.value;
		if (!value) continue;
		const val = parseInt(value);

		out_str += `constraint galaxy_sum_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.GALAXY_REGIONS}, ${val}, ${gal_id});\n`;
	}
	if (!constraints_list.length) return out_str;

	const max_galaxies = grid.nCols * grid.nRows;
	const given_galaxies = constraints_list.length;
	const reg_idxs = `${given_galaxies + 1}..${max_galaxies}`;
	out_str += `\nconstraint order_remaining_galaxies_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${reg_idxs});\n`;
	return out_str;
}

export const rotationallySymmetricGalaxyCenterSumInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE,
		targets: CornerOrEdge.CLOSEST,
		valueUpdater: (oldValue: string | undefined, key: string) => {
			return defaultValueUpdater(oldValue, key, () => {
				return true;
			});
		},
		defaultValue: ''
	},

	toolId: TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.15 },
		strokeWidth: { editable: false, value: 0.02, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)',
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: DEFAULT_CENTER_EDGE_CORNER_CATEGORIES
	},

	solver_func: rotationallySymmetricGalaxyCenterSumElement
};

function yinYangSumOfAdjacentShadedEdgeOrCornerConstraints(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CenterCornerOrEdgeToolI
) {
	const coord = constraint.cell;
	const [r, c] = [coord.r, coord.c];
	const value = constraint.value;

	const result = getParsingResult(model, value, c_id);
	if (!result) return '';
	const var_name = result[1];
	let out_str: string = result[0];

	// is corner coord
	let cells: Cell[] = [];
	if (r % 1 === 0 && c % 1 === 0) {
		const coords = cornerCoordToAdjCellCoords(coord);
		cells = coords.map((_c) => grid.getCell(_c.r, _c.c)).filter((cell) => cell !== undefined);
	} else if ((r % 1 === 0.5 && c % 1 === 0) || (r % 1 === 0 && c % 1 === 0.5)) {
		const coords = cellEdgeToCellCoords(coord);
		cells = coords.map((_c) => grid.getCell(_c.r, _c.c)).filter((cell) => cell !== undefined);
	}
	if (!cells.length) return '';

	const cell_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const yin_yang_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	out_str += `constraint conditional_sum_f(${cell_vars}, ${yin_yang_vars}, 1) == ${var_name};\n`;
	return out_str;
}

export const yinYangSumOfAdjacentShadedEdgeOrCornerInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE,
		targets: CornerOrEdge.CORNER_OR_EDGE,
		valueUpdater: (oldValue: string | undefined, key: string) => {
			return defaultValueUpdater(oldValue, key, () => {
				return true;
			});
		},
		defaultValue: ''
	},

	toolId: TOOLS.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.15 },
		strokeWidth: { editable: false, value: 0.02, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.',
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: DEFAULT_CENTER_EDGE_CORNER_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, yinYangSumOfAdjacentShadedEdgeOrCornerConstraints);
	}
};
