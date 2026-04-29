import { cellsToGridVarsStr, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';

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

function loopBoxLocalSumsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str = `\n% ${tool}\n`;
	const used_regions = grid.getUsedRegions();
	for (const region of used_regions) {
		const cells = grid.getRegion(region);
		const coords = '[' + cells.map((cell) => `(${cell.r},${cell.c})`).join(', ') + ']';
		const grid_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
		const name1 = `lbls_region_${region}_coords`;
		const name2 = `lbls_region_${region}_values`;
		out_str += `array[int] of tuple(int, int): ${name1} = ${coords};\n`;
		out_str += `array[int] of var int: ${name2} = ${grid_vars};\n`;

		const loop = VAR_2D_NAMES.CELL_CENTER_LOOP;
		const edges_h = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_H;
		const edges_v = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_V;

		out_str += `constraint path_same_segment_sum_in_region_p(${name1}, ${name2}, ${loop}, ${edges_h}, ${edges_v});\n`;
	}

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

export function cellCenterLoopElement(model: PuzzleModel, element: ConstraintsElement) {
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

	const loop = VAR_2D_NAMES.CELL_CENTER_LOOP;
	const edges_h = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_H;
	const edges_v = VAR_2D_NAMES.CELL_CENTER_LOOP_EDGES_V;

	let out_str = `array[ROW_IDXS, COL_IDXS] of var bool: ${loop};\n`;
	out_str += `array[ROW_IDXS, 0..${ncols - 2}] of var bool: ${edges_h};\n`;
	out_str += `array[0..${nrows - 2}, COL_IDXS] of var bool: ${edges_v};\n`;
	out_str += `constraint graph_edges_p(${loop}, ${edges_h}, ${edges_v});\n`;
	out_str += `constraint loop_edges_p(${loop}, ${edges_h}, ${edges_v});\n`;

	const neg_constr = element.negative_constraints;
	if (!neg_constr) return out_str;

	const no_orthogonal_touch = neg_constr
		? !!neg_constr[TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_ORTHOGONALLY]
		: false;
	const no_diag_touch = neg_constr
		? !!neg_constr[TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_DIAGONALLY]
		: false;
	const loop_german_whispers = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS];
	const counting_loop = !!neg_constr[TOOLS.COUNTING_LOOP];
	const loop_adj_multiples = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES];
	const loop_parity = !!neg_constr[TOOLS.LOOP_PARITY];
	const non_loop_sized_regions = !!neg_constr[TOOLS.NOT_LOOP_SIZED_REGIONS];
	const loop_box_local_sums = !!neg_constr[TOOLS.LOOP_BOX_LOCAL_SUMS];

	if (no_orthogonal_touch) {
		out_str += `constraint cell_center_loop_no_orthogonal_touching_p(${loop});\n`;
	}
	if (no_diag_touch) {
		out_str += `constraint path_no_diagonal_touching_p(${loop});\n`;
	}
	if (loop_german_whispers) {
		out_str += `\n% ${TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS}\n`;
		out_str += `constraint connected_path_nodes_are_german_whispers_p(board, ${edges_h}, ${edges_v});\n`;
	}
	if (counting_loop) {
		out_str += `constraint counting_loop_p(${VAR_2D_NAMES.BOARD}, ${loop});\n`;
	}
	if (loop_adj_multiples) {
		out_str += `constraint connected_path_nodes_are_multiples_p(board, ${edges_h}, ${edges_v});\n`;
	}
	if (loop_parity) {
		out_str += `constraint connected_path_nodes_parity_p(board, ${edges_h}, ${edges_v});\n`;
	}
	if (non_loop_sized_regions) {
		out_str += notLoopSizedRegionsConstraint(model, TOOLS.NOT_LOOP_SIZED_REGIONS);
	}
	if (loop_box_local_sums) {
		out_str += loopBoxLocalSumsConstraint(model, TOOLS.LOOP_BOX_LOCAL_SUMS);
	}

	return out_str;
}

export const cellCenterLoopInfo: SquareCellElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP,

	negative_constraints: [
		{
			toolId: TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_ORTHOGONALLY,
			description:
				'Draw a 1-cell wide loop of orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.'
		},
		{
			toolId: TOOLS.CELL_CENTER_LOOP_CANNOT_TOUCH_DIAGONALLY,
			description:
				'Draw a 1-cell wide loop of orthogonally connected cells, which does not branch or touch itself diagonally.'
		},
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
			description: 'Adjacent cells along a loop differ by 5 or more.'
		},
		{
			toolId: TOOLS.COUNTING_LOOP,
			description: 'A digit on the loop indicates how many times that digit appears on the loop.'
		},
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,
			description:
				'For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.'
		},
		{
			toolId: TOOLS.LOOP_PARITY,
			description: 'Digits along the loop must alternate between odd and even.'
		},
		{
			toolId: TOOLS.NOT_LOOP_SIZED_REGIONS,
			description:
				'Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.'
		},
		{
			toolId: TOOLS.LOOP_BOX_LOCAL_SUMS,
			description:
				'Each sudoku region divides the loop into segments. Within a region, every segment must have the same sum. (This sum may vary from region to region). Every region must have at least two segments.'
		}
		// {
		// 	toolId: TOOLS.MODULAR_LOOP,
		// 	description:
		// 		'Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.'
		// }
	],

	meta: {
		description:
			'Draw a single loop that travels orthogonally and passes through the centers of cells. The loop may go straight through a cell or turn within a cell, but it cannot branch, cross itself.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: cellCenterLoopElement
};
