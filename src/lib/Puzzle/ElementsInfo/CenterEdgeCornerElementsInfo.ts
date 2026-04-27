import { defaultValueUpdater } from '$input/InputHandler';
import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type CenterCornerOrEdgeToolInputOptions
} from '$input/ToolInputHandlers/types';
import {
	adjCellPairGen,
	cellsFromCoords,
	cellsToGridVarsStr,
	cellToGridVarName,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';
import {
	cellEdgeToCellCoords,
	coordToAdjCellsCoords,
	cornerCoordToAdjCellCoords,
	type GridCoordI
} from '$src/lib/utils/SquareCellGridCoords';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { Cell } from '../Grid/Cell';
import type { Grid } from '../Grid/Grid';
import type { CenterCornerOrEdgeToolI, ConstraintsElement } from '../puzzle_schema';
import { SHAPE_TYPES, type EditableShapeI } from '../Shape/Shape';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';
import { centerCornerOrEdgeUsage } from '../ToolUsage';
import { DEFAULT_WHITE_CIRCLE } from './EdgeElementsInfo/helpers';

const DEFAULT_CLOSEST_OPTIONS: CenterCornerOrEdgeToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE,
	targets: CornerOrEdge.CLOSEST
};

const DEFAULT_CENTER_EDGE_CORNER_CATEGORIES = [
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CENTER_CORNER_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_GALAXY_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: false, value: 0.15 },
	strokeWidth: { editable: false, value: 0.02, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: false, value: 'black' },
	fill: { editable: false, value: 'var(--grid-background-color)' }
};

function match_constraint(r: number, c: number, element: ConstraintsElement): boolean {
	const constraints = element.constraints as Record<string, CenterCornerOrEdgeToolI>;
	const constraints_list = [...Object.values(constraints)];

	return constraints_list.some((constraint) => {
		const coord = constraint.cell;
		return coord.r === r && coord.c === c;
	});
}

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
		out_str += `\nconstraint max_region_id_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${center_count});\n`;
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

	shape: DEFAULT_GALAXY_SHAPE,

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

	shape: DEFAULT_GALAXY_SHAPE,

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

function balancedLoopSegmentSumCenterOrEdgeConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CenterCornerOrEdgeToolI
) {
	const coord = constraint.cell;
	const value = constraint.value;

	const result = getParsingResult(model, value, c_id);
	if (!result) return '';
	const var_name = result[1];

	const edges_h = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_H;
	const edges_v = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_V;
	const board = VAR_2D_NAMES.BOARD;

	const cells_coords = coordToAdjCellsCoords(coord);
	const cells = cellsFromCoords(grid, cells_coords);
	const loop_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	// cells are loop cells
	let out_str = `constraint loop_cells_p(${loop_vars});\n`;

	// segment sum, two cases:
	//  - center point -> segments on the cell sum to the same
	out_str += result[0];
	if (cells.length == 1) {
		const [r, c] = [cells[0].r, cells[0].c];
		out_str += `constraint balanced_loop_segment_sum_p((${r},${c}), ${board}, ${edges_h}, ${edges_v}, ${var_name});\n`;
	} else {
		//  - edge point -> segments on both sides of the cells are equal
		const [r1, c1] = [cells[0].r, cells[0].c];
		const [r2, c2] = [cells[1].r, cells[1].c];
		const dr = r2 - r1;
		const dc = c2 - c1;
		// the edge connecting the two cells is part of the graph
		out_str += `constraint edge_in_path_graph_p((${r1},${c1}), (${r2},${c2}), ${edges_h}, ${edges_v});\n`;
		out_str += `constraint arm_sum_f(${r1}, ${c1}, ${dr}, ${dc}, ${board}, ${edges_h}, ${edges_v}) = ${var_name};\n`;
		out_str += `constraint arm_sum_f(${r2}, ${c2}, ${-dr}, ${-dc}, ${board}, ${edges_h}, ${edges_v}) = ${var_name};\n`;
	}

	return out_str;
}

function balancedLoopSegmentSumCenterAllGiven(model: PuzzleModel, element: ConstraintsElement) {
	let out_str: string = '';
	const grid = model.puzzle.grid;

	const edges_h = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_H;
	const edges_v = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_V;
	const board = VAR_2D_NAMES.BOARD;

	// cell center constraints
	out_str += `% ${TOOLS.ALL_GIVEN}\n`
	for (const cell of grid.getAllCells()) {
		const [r, c] = [cell.r, cell.c];
		// find cell center matches
		const match = match_constraint(r + 0.5, c + 0.5, element);
		if (match) continue;

		out_str += `constraint not balanced_loop_segment_sum_2_p((${r},${c}), ${board}, ${edges_h}, ${edges_v});\n`;
	}

	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const [r1, c1] = [cell1.r, cell1.c];
		const [r2, c2] = [cell2.r, cell2.c];
		const [r_avg, c_avg] = [(r1 + r2) / 2, (c1 + c2) / 2];
		const match = match_constraint(r_avg + 0.5, c_avg + 0.5, element);
		if (match) continue;

		const loop_var1 = cellToGridVarName(cell1, VAR_2D_NAMES.CELL_CENTER_LOOP);
		const loop_var2 = cellToGridVarName(cell2, VAR_2D_NAMES.CELL_CENTER_LOOP);

		const dr = r2 - r1;
		const dc = c2 - c1;
		out_str += `constraint (${loop_var1} /\\ ${loop_var2}) -> arm_sum_f(${r1}, ${c1}, ${dr}, ${dc}, ${board}, ${edges_h}, ${edges_v}) != arm_sum_f(${r2}, ${c2}, ${-dr}, ${-dc}, ${board}, ${edges_h}, ${edges_v});\n`;
	}

	return out_str;
}

function balancedLoopSegmentSumCenterOrEdgeElement(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	let out_str = simpleElementFunction(model, element, balancedLoopSegmentSumCenterOrEdgeConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_GIVEN];
	if (all_given) {
		out_str += balancedLoopSegmentSumCenterAllGiven(model, element);
	}

	return out_str;
}

export const balancedLoopSegmentSumCenterOrEdgeInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE,
		targets: CornerOrEdge.EDGE_OR_CENTER,
		valueUpdater: (oldValue: string | undefined, key: string) => {
			return defaultValueUpdater(oldValue, key, () => {
				return true;
			});
		},
		defaultValue: ''
	},

	negative_constraints: [
		{
			toolId: TOOLS.ALL_GIVEN,
			description: 'All possible dots are given.'
		}
	],

	toolId: TOOLS.BALANCED_LOOP_SEGMENT_SUM_CENTER_OR_EDGE,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'The loop must travel through each dot. The two loop segments extending from both sides of a dot must be balanced ie the sum of the digits up to and including the digit in the cell containing the first turn must be the same.',
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: DEFAULT_CENTER_EDGE_CORNER_CATEGORIES
	},

	solver_func: balancedLoopSegmentSumCenterOrEdgeElement
};
