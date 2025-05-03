import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsToVarsName,
	allDifferentConstraint,
	cellToVarName,
	addHeader,
	cellsToGridVarsStr,
	VAR_2D_NAMES,
	adjCellPairGen,
	PuzzleModel
} from './solver_utils';

export function positiveDiagonalConstraint(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let out_str = `\n% ${tool}\n`;
	out_str += allDifferentConstraint(diag_vars);
	return out_str;
}

export function negativeDiagonalConstraint(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getNegativeDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let out_str = `\n% ${tool}\n`;
	out_str += allDifferentConstraint(diag_vars);
	return out_str;
}

export function positiveAntidiagonalConstraint(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	const vars_str = '[' + diag_vars.join(',') + ']';
	let out_str = `\n% ${tool}\n`;
	out_str += `constraint count_unique_values(${vars_str}) == 3;\n`;
	return out_str;
}

export function negativeAntidiagonalConstraint(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getNegativeDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	const vars_str = '[' + diag_vars.join(',') + ']';
	let out_str = `\n% ${tool}\n`;
	out_str += `constraint count_unique_values(${vars_str}) == 3;\n`;
	return out_str;
}

export function oddEvenMirrorPositiveDiagonalConstraint(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	if (n_rows !== n_cols) return '';

	let out_str = `\n% ${tool}\n`;
	const diag_cells = grid.getPositiveDiagonal();
	for (const dcell of diag_cells) {
		const [dr, dc] = [dcell.r, dcell.c];
		for (let i = 0; i < dr; i++) {
			const cell = grid.getCell(i, dc);
			const mirror_cell = grid.getCell(dr, dc + (dr - i));

			if (!cell || !mirror_cell) continue;
			const cell_var = cellToVarName(cell);
			const mirror_cell_var = cellToVarName(mirror_cell);
			const vars_str = `[${cell_var}, ${mirror_cell_var}]`;
			const constraint_str = `constraint is_unimodular_line(${vars_str}, 2);\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export function oddEvenMirrorNegativeDiagonalConstraint(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	if (n_rows !== n_cols) return '';

	let out_str = `\n% ${tool}\n`;
	const diag_cells = grid.getNegativeDiagonal();
	for (const dcell of diag_cells) {
		const [dr, dc] = [dcell.r, dcell.c];
		for (let i = 0; i < dr; i++) {
			const cell = grid.getCell(i, dc);
			const mirror_cell = grid.getCell(dr, dc - (dr - i));

			if (!cell || !mirror_cell) continue;
			const cell_var = cellToVarName(cell);
			const mirror_cell_var = cellToVarName(mirror_cell);
			const vars_str = `[${cell_var}, ${mirror_cell_var}]`;
			const constraint_str = `constraint is_unimodular_line(${vars_str}, 2);\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

function disjointGroupsConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;

	let out_str: string = `\n% ${toolId}\n`;
	const num_regions = [...grid.getUsedRegions()].length;
	for (let group_idx = 0; group_idx < num_regions; group_idx++) {
		const disjoint_group = grid.getDisjointGroup(group_idx);
		const vars = cellsToVarsName(disjoint_group);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint alldifferent(${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function antikingConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;

	let out_str: string = `\n% ${toolId}\n`;
	for (const cell of grid.getAllCells()) {
		const kings_move_cells = grid.getNeighboorCells(cell);
		const filtered = kings_move_cells.filter((cell2) => cell2.r + cell2.c >= cell.r + cell.c);
		const var1 = cellToVarName(cell);
		const vars = cellsToVarsName(filtered);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint different_from_group_p(${var1}, ${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function antiknightConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;

	let out_str: string = `\n% ${toolId}\n`;
	for (const cell of grid.getAllCells()) {
		const knight_move_cells = grid.getCellsByKnightMove(cell);
		const filtered = knight_move_cells.filter((cell2) => cell2.r >= cell.r || cell2.c >= cell.c);
		const var1 = cellToVarName(cell);
		const vars = cellsToVarsName(filtered);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint different_from_group_p(${var1}, ${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function antiGiraffeConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint anti_giraffe_p(board);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function antiLongKnightConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint anti_long_knight_p(board);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function tangoConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint tango_p(board);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function antiEntropyConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint anti_entropy_p(board);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function nonconsecutiveConstraint(puzzle: PuzzleI, toolId: TOOLID) {
	const grid = puzzle.grid;
	let out_str: string = `\n% ${toolId}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const constraint_str = `constraint not consecutive_p(${var1}, ${var2});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function nonratioConstraint(puzzle: PuzzleI, toolId: TOOLID) {
	const grid = puzzle.grid;
	let out_str: string = `\n% ${toolId}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const constraint_str = `constraint not ratio_p(${var1}, ${var2}, 2);\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function globalIndexingColumnConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;

	let out_str = `\n% ${toolId}\n`;
	for (const cell of grid.getAllCells()) {
		const row_cells = grid.getRow(cell.r);
		const vars = cellsToVarsName(row_cells);
		const vars_str = `[${vars.join(',')}]`;
		const col = cell.c + 1;
		const constraint_str = `constraint indexing_column_p(${vars_str}, ${col});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function allOddDigitsOrthogonallyConnected(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: even_odd_grid;\n`;
	out_str += `constraint odd_even_grid_p(board, even_odd_grid);\n`;
	out_str += `constraint connected_region(even_odd_grid, 1);\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function twilightCaveFillominoRegionsShading(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function yinYangFillominoParityConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint yin_yang_fillomino_parity_p(board, yin_yang);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function boxRowsAndColumnsFormModularityAndEntropySetConstraint(
	puzzle: PuzzleI,
	toolId: TOOLID
): string {
	let out_str: string = '';
	const grid = puzzle.grid;
	const used_regions = puzzle.grid.getUsedRegions();
	for (const region of used_regions) {
		const region_cells = grid.getRegion(region);
		const used_rows = [...new Set(region_cells.map((cell) => cell.r))];
		const used_cols = [...new Set(region_cells.map((cell) => cell.c))];

		for (const col of used_cols) {
			const cells = region_cells.filter((cell) => cell.c === col);
			const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
			out_str += `constraint entropy_and_modularity_set_p(${cells_vars});\n`;
		}

		for (const row of used_rows) {
			const cells = region_cells.filter((cell) => cell.r === row);
			const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
			out_str += `constraint entropy_and_modularity_set_p(${cells_vars});\n`;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

export function sudokuConstraints(puzzle: PuzzleI) {
	const gconstraints = puzzle.globalConstraints;
	if (gconstraints.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY)) {
		return '';
	}

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
	const chaos_construction = gconstraints.get(TOOLS.CHAOS_CONSTRUCTION);
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

export function hexedSudokuConstraint(puzzle: PuzzleI) {
	const tool = TOOLS.HEXED_SUDOKU;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(tool);
	if (!constraint) return '';

	let out_str = `\n% ${tool}\n`;
	out_str += `constraint hexed_sudoku_p(board, ALLOWED_DIGITS);\n`;
	return out_str;
}

type ConstraintF = (puzzle: PuzzleI, tool: TOOLID) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.ANTIKING, antikingConstraint],
	[TOOLS.ANTIKNIGHT, antiknightConstraint],
	[TOOLS.ANTI_LONG_KNIGHT, antiLongKnightConstraint],
	[TOOLS.ANTI_GIRAFFE, antiGiraffeConstraint],
	[TOOLS.DISJOINT_GROUPS, disjointGroupsConstraint],
	[TOOLS.TANGO, tangoConstraint],
	[TOOLS.NONCONSECUTIVE, nonconsecutiveConstraint],
	[TOOLS.NONRATIO, nonratioConstraint],
	[TOOLS.ANTI_ENTROPY, antiEntropyConstraint],
	[
		TOOLS.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,
		boxRowsAndColumnsFormModularityAndEntropySetConstraint
	],

	[TOOLS.GLOBAL_INDEXING_COLUMN, globalIndexingColumnConstraint],
	[TOOLS.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED, allOddDigitsOrthogonallyConnected],

	[TOOLS.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING, twilightCaveFillominoRegionsShading],
	[TOOLS.YIN_YANG_FILLOMINO_PARITY, yinYangFillominoParityConstraint]
]);

export function globalConstraints(puzzle: PuzzleI): string {
	let out_str = '';

	const gconstraints = puzzle.globalConstraints;
	for (const [toolId, value] of gconstraints.entries()) {
		if (!value) continue;
		const constraintF = tool_map.get(toolId);
		if (!constraintF) continue;

		const constraint_str = constraintF(puzzle, toolId);

		out_str += constraint_str;
	}

	return out_str;
}
