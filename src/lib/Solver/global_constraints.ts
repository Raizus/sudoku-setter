import type { LineToolI } from '../Puzzle/Constraints/LineConstraints';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsToVarsName,
	allDifferentConstraint,
	cellToVarName,
	addHeader,
	cellsToGridVarsStr,
	VAR_2D_NAMES,
	cellToGridVarName,
	adjCellPairGen
} from './solver_utils';

function positiveDiagonalConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let constraint = allDifferentConstraint(diag_vars);
	constraint = '\n% Positive Diagonal Constraint\n' + constraint;
	return constraint;
}

function negativeDiagonalConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const diag_cells = grid.getNegativeDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let constraint = allDifferentConstraint(diag_vars);
	constraint = '\n% Negative Diagonal Constraint\n' + constraint;
	return constraint;
}

function positiveAntidiagonalConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	const vars_str = '[' + diag_vars.join(',') + ']';
	let out_str: string = `\n% ${toolId}\n`;
	out_str += `constraint count_unique_values(${vars_str}) == 3;\n`;
	return out_str;
}

function negativeAntidiagonalConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const diag_cells = grid.getNegativeDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	const vars_str = '[' + diag_vars.join(',') + ']';
	let out_str: string = `\n% ${toolId}\n`;
	out_str += `constraint count_unique_values(${vars_str}) == 3;\n`;
	return out_str;
}

function oddEvenMirrorPositiveDiagonalConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	if (n_rows !== n_cols) return '';

	let out_str: string = '';
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

function oddEvenMirrorNegativeDiagonalConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	if (n_rows !== n_cols) return '';

	let out_str: string = '';
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

function adjacentLoopCellsAreMultiplesConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str = `\n% ${toolId}\n`;
	out_str += `constraint adjacent_loop_cells_are_multiples_p(board, cell_center_loop);\n`;
	return out_str;
}

function adjacentLoopCellsAreGermanWhispersConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str = `\n% ${toolId}\n`;
	out_str += `constraint adjacent_loop_cells_are_german_whispers_p(board, cell_center_loop);\n`;
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

function nurimisakiPathGermanWhispersConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	let out_str: string = `\n% ${toolId}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const nurimisaki1 = `nurimisaki[${cell1.r},${cell1.c}]`;
		const nurimisaki2 = `nurimisaki[${cell2.r},${cell2.c}]`;

		const constraint_str = `constraint (${nurimisaki1} == 0 /\\ ${nurimisaki2} == 0) -> abs(${var1} - ${var2}) >= 5;\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangRegionSumLinesMustCrossColorsAtLeastOnceConstraint(
	puzzle: PuzzleI,
	toolId: TOOLID
): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.elementsDict;
	const constraints = local_constraints.get(TOOLS.YIN_YANG_REGION_SUM_LINE);
	if (!constraints) return '';

	let out_str: string = `\n% ${toolId}\n`;
	for (const constraint of Object.values(constraints)) {
		const cells_coords = (constraint as LineToolI).cells;
		const cells = cells_coords
			.map((coord) => grid.getCell(coord.r, coord.c))
			.filter((cell) => !!cell);
		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		out_str += `constraint count_unique_values(${yin_yang_vars_str}) >= 2;\n`;
	}
	return out_str;
}

function yinYangShadedCellsAreGermanWhispersConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	let out_str: string = `\n% ${toolId}\n`;
	const name = VAR_2D_NAMES.YIN_YANG;

	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const yinyang1 = `${name}[${cell1.r},${cell1.c}]`;
		const yinyang2 = `${name}[${cell2.r},${cell2.c}]`;

		const constraint_str = `constraint (${yinyang1} == 1 /\\ ${yinyang2} == 1) -> abs(${var1} - ${var2}) >= 5;\n`;
		out_str += constraint_str;
	}
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

function yinYangNeighbourGreaterThanOneWithinRegionShadedConstraint(
	puzzle: PuzzleI,
	toolId: TOOLID
): string {
	let out_str: string = '';
	const grid = puzzle.grid;
	for (const cell of grid.getAllCells()) {
		const neighbours = grid
			.getNeighboorCells(cell)
			.filter((_cell) => cell.region !== null && _cell.region === cell.region);
		const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.BOARD);
		const shading_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);
		const cells_vars = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);
		out_str += `constraint yin_yang_neighbour_greater_than_one_within_region_shaded(${cell_var}, ${shading_var}, ${cells_vars});\n`;
	}
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathAdjacentCellsSumIsPrimeConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint direct_path_adjacent_sum_is_prime(board, dpath_from, dpath_to, dpath_es);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathAdjacentCellsDutchWhispersConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint direct_path_adjacent_dutch_whispers(board, dpath_from, dpath_to, dpath_es);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathIsRegionSumLineConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint directed_path_is_region_sum_line_p(board, board_regions, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathTeleportSegmentsSumConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint directed_path_teleport_segments_sum_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathTeleportRenbanSegmentsConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	const grid = puzzle.grid;
	const used_regions = puzzle.grid.getUsedRegions();
	const reg_sizes = [...used_regions].map((reg) => puzzle.grid.getRegion(reg).length);
	const max_reg_size = reg_sizes.length ? Math.max(...reg_sizes) : grid.nCols * grid.nRows;
	out_str += `constraint directed_path_teleport_renban_segments_p(board, teleports, dpath_from, dpath_to, dpath_ns, dpath_es, dpath_source, ${max_reg_size});\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathIsParityLineConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint directed_path_is_parity_line_p(board, dpath_from, dpath_to, dpath_es);\n`;

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function directedPathSumOfCellsPerRegionIsPrimeConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';

	const grid = puzzle.grid;
	const regions = [...grid.getUsedRegions()];
	const used_regions = '{' + regions.join(',') + '}';
	out_str += `constraint directed_path_sum_path_cells_in_region_is_prime_p(board, board_regions, dpath_ns, ${used_regions});\n`;
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
	[TOOLS.POSITIVE_DIAGONAL, positiveDiagonalConstraint],
	[TOOLS.NEGATIVE_DIAGONAL, negativeDiagonalConstraint],
	[TOOLS.POSITIVE_ANTIDIAGONAL, positiveAntidiagonalConstraint],
	[TOOLS.NEGATIVE_ANTIDIAGONAL, negativeAntidiagonalConstraint],
	[TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL, oddEvenMirrorPositiveDiagonalConstraint],
	[TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL, oddEvenMirrorNegativeDiagonalConstraint],

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
	[TOOLS.NURIMISAKI_PATH_GERMAN_WHISPERS, nurimisakiPathGermanWhispersConstraint],
	[
		TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,
		yinYangRegionSumLinesMustCrossColorsAtLeastOnceConstraint
	],
	[TOOLS.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED, allOddDigitsOrthogonallyConnected],
	[TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES, adjacentLoopCellsAreMultiplesConstraint],
	[
		TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
		adjacentLoopCellsAreGermanWhispersConstraint
	],
	[TOOLS.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING, twilightCaveFillominoRegionsShading],
	[TOOLS.YIN_YANG_FILLOMINO_PARITY, yinYangFillominoParityConstraint],

	[
		TOOLS.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,
		yinYangNeighbourGreaterThanOneWithinRegionShadedConstraint
	],
	[TOOLS.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS, yinYangShadedCellsAreGermanWhispersConstraint],
	[TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME, directedPathAdjacentCellsSumIsPrimeConstraint],
	[
		TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,
		directedPathSumOfCellsPerRegionIsPrimeConstraint
	],
	[
		TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,
		directedPathAdjacentCellsDutchWhispersConstraint
	],
	[TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE, directedPathIsRegionSumLineConstraint],
	[TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM, directedPathTeleportSegmentsSumConstraint],
	[TOOLS.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS, directedPathTeleportRenbanSegmentsConstraint],
	[TOOLS.DIRECTED_PATH_IS_PARITY_LINE, directedPathIsParityLineConstraint]
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
