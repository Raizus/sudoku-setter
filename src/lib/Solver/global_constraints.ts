import { TOOLS } from '../Puzzle/Tools';
import {
	cellsToVarsName,
	allDifferentConstraint,
	type PuzzleAuxI
} from './solver_utils';

export function sudokuConstraints(puzzle: PuzzleAuxI) {
	const elements_dict = puzzle.elementsDict;
	const not_sudoku = !!elements_dict.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY);

	if (not_sudoku) return '';

	const grid = puzzle.grid;

	let out_str = '';
	// row constraints (digits do not repeat on rows)
	out_str += '\n% row constraints (digits do not repeat on rows)\n';
	const nrows = grid.nRows;
	for (let i = 0; i < nrows; i++) {
		const row_cells = grid.getRow(i);
		const row_vars = cellsToVarsName(row_cells);
		const constraint = allDifferentConstraint(row_vars);
		out_str += constraint;
	}

	// col constraints (digits do not repeat on cols)
	out_str += '\n% col constraints (digits do not repeat on cols)\n';
	const ncols = grid.nCols;
	for (let i = 0; i < ncols; i++) {
		const col_cells = grid.getCol(i);
		const col_vars = cellsToVarsName(col_cells);
		const constraint = allDifferentConstraint(col_vars);
		out_str += constraint;
	}

	// region constraints (digits do not repeat on regions)
	const chaos_construction = !!elements_dict.get(TOOLS.CHAOS_CONSTRUCTION);
	if (!chaos_construction) {
		out_str += '\n% region constraints (digits do not repeat on regions)\n';
		const regions = grid.getUsedRegions();
		for (const region of regions) {
			const region_cells = grid.getRegion(region);
			const region_vars = cellsToVarsName(region_cells);
			const constraint = allDifferentConstraint(region_vars);
			out_str += constraint;
		}
	}

	return out_str;
}

export function hexedSudokuConstraint(puzzle: PuzzleAuxI) {
	const elements_dict = puzzle.elementsDict;

	const tool = TOOLS.HEXED_SUDOKU;
	const hexed_sudoku = elements_dict.get(tool);
	if (!hexed_sudoku || hexed_sudoku.disabled) return '';

	let out_str = `\n% ${tool}\n`;
	out_str += `constraint hexed_sudoku_p(board, ALLOWED_DIGITS);\n`;
	return out_str;
}
