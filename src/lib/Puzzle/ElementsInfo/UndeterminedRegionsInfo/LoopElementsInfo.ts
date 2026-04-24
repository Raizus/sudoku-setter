import { VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';

function adjacentLoopCellsAreMultiplesConstraint(toolId: TOOLID): string {
	let out_str = `\n% ${toolId}\n`;
	out_str += `constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);\n`;
	return out_str;
}

function adjacentLoopCellsAreGermanWhispersConstraint(toolId: TOOLID): string {
	let out_str = `\n% ${toolId}\n`;
	out_str += `constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);\n`;
	return out_str;
}

function notLoopSizedRegionsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: loop_regions;\n`;
	out_str += `constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);\n`;
	out_str += `constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);\n`;

	return out_str;
}

function modularLoopConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str = `\n% ${tool}\n`;
	out_str += `constraint modular_loop_p(board, cell_center_loop);\n`;

	return out_str;
}

function loopParityConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str = `\n% ${tool}\n`;
	out_str += `constraint loop_parity_p(board, cell_center_loop);\n`;

	return out_str;
}

export function cellCenterLoopCannotTouchOrthogonallyElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const neg_constr = element.negative_constraints;
	const loop_no_diag_touch = neg_constr
		? !!neg_constr[TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_DIAGONALLY]
		: false;

	const loop_grid_name = VAR_2D_NAMES.CELL_CENTER_LOOP;
	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_no_orthogonal_touching_p(${loop_grid_name});\n`;

	if (loop_no_diag_touch) {
		out_str += `constraint cell_center_loop_no_diagonal_touching_p(${loop_grid_name});\n`;
	}

	if (!neg_constr) return out_str;
	const non_loop_sized_regions = !!neg_constr[TOOLS.NOT_LOOP_SIZED_REGIONS];
	const loop_german_whispers = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS];
	const loop_adj_multiples = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES];
	const modular_loop = !!neg_constr[TOOLS.MODULAR_LOOP];
	const loop_parity = !!neg_constr[TOOLS.LOOP_PARITY];
	const counting_loop = !!neg_constr[TOOLS.COUNTING_LOOP];

	if (loop_german_whispers) {
		out_str += adjacentLoopCellsAreGermanWhispersConstraint(
			TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS
		);
	}
	if (loop_adj_multiples) {
		out_str += adjacentLoopCellsAreMultiplesConstraint(
			TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES
		);
	}
	if (non_loop_sized_regions) {
		out_str += notLoopSizedRegionsConstraint(model, TOOLS.NOT_LOOP_SIZED_REGIONS);
	}
	if (modular_loop) {
		out_str += modularLoopConstraint(model, TOOLS.MODULAR_LOOP);
	}
	if (loop_parity) {
		out_str += loopParityConstraint(model, TOOLS.LOOP_PARITY);
	}
	if (counting_loop) {
		out_str += `constraint counting_loop_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.CELL_CENTER_LOOP});\n`;
	}

	return out_str;
}

export const cellCenterLoopCannotTouchOrthogonallyInfo: SquareCellElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_ORTHOGONALLY,

	negative_constraints: [
		{
			toolId: TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_DIAGONALLY,
			description:
				'Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.'
		},
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,
			description:
				'For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.'
		},
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
			description: 'Adjacent cells along a loop differ by 5 or more.'
		},
		{
			toolId: TOOLS.NOT_LOOP_SIZED_REGIONS,
			description:
				'Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.'
		},
		{
			toolId: TOOLS.COUNTING_LOOP,
			description: 'A digit on the loop indicates how many times that digit appears on the loop.'
		},
		{
			toolId: TOOLS.MODULAR_LOOP,
			description:
				'Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.'
		},
		{
			toolId: TOOLS.LOOP_PARITY,
			description: 'Digits along the loop must alternate between odd and even.'
		}
	],

	meta: {
		description:
			'Draw a single loop that travels orthogonally and passes through the centers of cells. The loop may go straight through a cell or turn within a cell, but it cannot branch, cross itself or touch itself orthogonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: cellCenterLoopCannotTouchOrthogonallyElement
};

export function cellCenterLoopElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const neg_constr = element.negative_constraints;

	const nrows = grid.nRows;
	const ncols = grid.nCols;

	const edges_h = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_H;
	const edges_v = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_V;

	let out_str = `array[ROW_IDXS, COL_IDXS] of var bool: cell_center_loop;\n`;
	out_str += `array[ROW_IDXS, 0..${ncols - 2}] of var bool: cell_center_loop_edges_h;\n`;
	out_str += `array[0..${nrows - 2}, COL_IDXS] of var bool: cell_center_loop_edges_v;\n`;

	out_str += `constraint loop_edges_p(cell_center_loop, ${edges_h}, ${edges_v});\n`;

	if (!neg_constr) return out_str;
	const loop_german_whispers = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS];

	if (loop_german_whispers) {
		out_str += `\n% ${TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS}\n`;
		out_str += `constraint connected_loop_nodes_are_german_whispers_p(board, ${edges_h}, ${edges_v});\n`;
	}

	return out_str;
}

export const cellCenterLoopInfo: SquareCellElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP,

	negative_constraints: [
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
			description: 'Adjacent cells along a loop differ by 5 or more.'
		}
	],

	meta: {
		description:
			'Draw a single loop that travels orthogonally and passes through the centers of cells. The loop may go straight through a cell or turn within a cell, but it cannot branch, cross itself.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: cellCenterLoopElement
};
