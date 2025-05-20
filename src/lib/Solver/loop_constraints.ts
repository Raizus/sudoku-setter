import type { ConstraintsElement } from '../Puzzle/Constraints/ElementsDict';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import type { PuzzleModel } from './solver_utils';

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
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_p(cell_center_loop, false);\n`;
	out_str += `constraint modular_loop_p(board, cell_center_loop);\n`;

	return out_str;
}

export function cellCenterLoopNoTouchingConstraint(
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
	const loop_diag_touch = neg_constr
		? !!neg_constr[TOOLS.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY]
		: false;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_p(cell_center_loop, ${loop_diag_touch});\n`;

	if (!neg_constr) return out_str;
	const non_loop_sized_regions = !!neg_constr[TOOLS.NOT_LOOP_SIZED_REGIONS];
	const loop_german_whispers = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS];
	const loop_adj_multiples = !!neg_constr[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES];
	const modular_loop = !!neg_constr[TOOLS.MODULAR_LOOP];

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

	return out_str;
}
