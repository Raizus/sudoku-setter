import {
	cellToGridVarName,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Grid } from '../../Grid/Grid';
import type { CellToolI, ConstraintsElement } from '../../puzzle_schema';
import { SHAPE_TYPES } from '../../Shape/Shape';
import { TOOL_CATEGORIES, TOOLS } from '../../Tools';
import {
	countNeighbourConstraint,
	DEFAULT_SQUARE_SHAPE,
	DEFAULT_CIRCLE_SHAPE
} from '../SingleCellElementsInfo/helpers';
import {
	DEFAULT_SINGLE_CELL_OPTIONS,
	DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
} from '../SingleCellElementsInfo/SingleCellElementsInfo';

export function snakeElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const nrows = grid.nRows;
	const ncols = grid.nCols;

	const snake = VAR_2D_NAMES.SNAKE;
	const edges_h = VAR_2D_NAMES.SNAKE_EDGES_H;
	const edges_v = VAR_2D_NAMES.SNAKE_EDGES_V;

	let out_str = `array[ROW_IDXS, COL_IDXS] of var bool: ${snake};\n`;
	out_str += `array[ROW_IDXS, 0..${ncols - 2}] of var bool: ${edges_h};\n`;
	out_str += `array[0..${nrows - 2}, COL_IDXS] of var bool: ${edges_v};\n`;

	out_str += `constraint graph_edges_p(${snake}, ${edges_h}, ${edges_v});\n`;
	out_str += `constraint snake_edges_p(${snake}, ${edges_h}, ${edges_v});\n`;

	const neg_constr = element.negative_constraints;
	if (!neg_constr) return out_str;

	const no_orthogonal_touch = neg_constr
		? !!neg_constr[TOOLS.SNAKE_CANNOT_TOUCH_ORTHOGONALLY]
		: false;
	const no_diag_touch = neg_constr ? !!neg_constr[TOOLS.SNAKE_CANNOT_TOUCH_DIAGONALLY] : false;
	const snake_whispers = !!neg_constr[TOOLS.SNAKE_WHISPERS_LINE];

	if (no_orthogonal_touch) {
		out_str += `constraint snake_no_orthogonal_touching_p(${snake});\n`;
	}

	if (no_diag_touch) {
		out_str += `constraint path_no_diagonal_touching_p(${snake});\n`;
	}

	if (snake_whispers) {
		out_str += `\n% ${TOOLS.SNAKE_WHISPERS_LINE}\n`;
		out_str += `constraint connected_path_nodes_are_german_whispers_p(board, ${edges_h}, ${edges_v});\n`;
	}

	return out_str;
}

export const snakeInfo: SquareCellElementInfo = {
	toolId: TOOLS.SNAKE,

	negative_constraints: [
		{
			toolId: TOOLS.SNAKE_CANNOT_TOUCH_ORTHOGONALLY,
			description:
				'Draw a 1-cell wide snake of orthogonally connected cells, which cannot touch itself orthogonally.'
		},
		{
			toolId: TOOLS.SNAKE_CANNOT_TOUCH_DIAGONALLY,
			description:
				'Draw a 1-cell wide snake of orthogonally connected cells, which cannot touch itself diagonally.'
		},
		{
			toolId: TOOLS.SNAKE_WHISPERS_LINE,
			description: 'Adjacent digits along the snake must have a difference of at least 5.'
		}
	],

	meta: {
		description:
			'Draw a single snake that travels orthogonally and passes through the centers of cells. The snake may go straight through a cell or turn within a cell, but it cannot branch, cross itself.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: snakeElement
};

function snakeEndpointConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const edges_h = VAR_2D_NAMES.SNAKE_EDGES_H;
	const edges_v = VAR_2D_NAMES.SNAKE_EDGES_V;

	const snake_var = cellToGridVarName(cell, VAR_2D_NAMES.SNAKE);
	let out_str = `constraint ${snake_var} == true;\n`;
	// only 1 of the connected edges is true -> node has degree 1
	out_str += `constraint grid_graph_degree_f(${edges_h}, ${edges_v}, ${cell.r}, ${cell.c}) = 1;\n`;
	return out_str;
}

export const snakeEndpointInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,
	toolId: TOOLS.SNAKE_ENDPOINT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: true, value: 0.01 },
		stroke: { editable: true, value: 'green' },
		r: { editable: true, value: 0.2 },
		fill: { editable: true, value: 'green' }
	},

	meta: {
		description: 'A green circle is a snake endpoint.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, snakeEndpointConstraint);
	}
};

function snakeCellConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const snake_var = cellToGridVarName(cell, VAR_2D_NAMES.SNAKE);
	const out_str = `constraint ${snake_var} == true;\n`;
	return out_str;
}

export const snakeCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,
	toolId: TOOLS.SNAKE_CELL,

	shape: {
		...DEFAULT_SQUARE_SHAPE,
		stroke: { editable: true, value: 'green' },
		fill: { editable: true, value: 'green' }
	},

	meta: {
		description: 'A green circle is a snake cell.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, snakeCellConstraint);
	}
};

function countSnakeNeighborCellsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	return countNeighbourConstraint(
		model.puzzle.grid,
		constraint,
		VAR_2D_NAMES.SNAKE,
		'count_snake_cells_p',
		true
	);
}

export const countSnakeNeighborCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,
	toolId: TOOLS.COUNT_SNAKE_NEIGHBOR_CELLS,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			'A digit in a circle is equal to the number of snake cells in the (up to) 9 surrounding cells, including itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, countSnakeNeighborCellsConstraint);
	}
};
