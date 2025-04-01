import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { LineToolI } from '../Puzzle/Constraints/LineConstraints';
import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellMultiArrowToolI, CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { DIRECTION } from '../utils/directions';
import {
	cellsToVarsName,
	allDifferentConstraint,
	cellToVarName,
	addHeader,
	getDirectionsVars,
	cellsToGridVarsStr,
	VAR_2D_NAMES,
	cellToGridVarName
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

function* adjCellPairGen(grid: Grid) {
	for (const cell of grid.getAllCells()) {
		const adj_cells = grid
			.getOrthogonallyAdjacentCells(cell)
			.filter((cell2) => cell2.r >= cell.r || cell2.c >= cell.c);
		for (const cell2 of adj_cells) {
			yield [cell, cell2];
		}
	}
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

function allXVGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const xv_constraints = local_constraints.get(TOOLS.XV);

	if (
		!(toolId === TOOLS.ALL_V_GIVEN || toolId === TOOLS.ALL_X_GIVEN || toolId === TOOLS.ALL_XV_GIVEN)
	)
		return '';

	// find all xv pairs
	const xv_pairs: Set<Cell>[] = [];
	if (xv_constraints) {
		for (const constraint of Object.values(xv_constraints)) {
			const coords = (constraint as EdgeToolI).cells;
			const cell_pair = new Set(
				coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
			);

			const value = constraint.value;
			if (
				(toolId === TOOLS.ALL_V_GIVEN && (value === 'v' || value === 'V')) ||
				(toolId === TOOLS.ALL_X_GIVEN && (value === 'x' || value === 'X')) ||
				toolId === TOOLS.ALL_XV_GIVEN
			)
				xv_pairs.push(cell_pair);
		}
	}

	let out_str: string = '';
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = xv_pairs.find((pair) => pair.has(cell1) && pair.has(cell2));
		if (match) continue;

		const var1_name = cellToVarName(cell1);
		const var2_name = cellToVarName(cell2);
		if (toolId === TOOLS.ALL_V_GIVEN) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 5;\n`;
			out_str += constraint_str;
		} else if (toolId === TOOLS.ALL_X_GIVEN) {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 10;\n`;
			out_str += constraint_str;
		} else {
			const constraint_str = `constraint ${var1_name} + ${var2_name} != 5 /\\ (${var1_name} + ${var2_name} != 10);\n`;
			out_str += constraint_str;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function getEdgeConstraintCellPairs(
	grid: Grid,
	constraints: Record<string, ConstraintType> | undefined
) {
	const edgec_pairs: Set<Cell>[] = [];
	if (constraints) {
		for (const constraint of Object.values(constraints)) {
			const coords = (constraint as EdgeToolI).cells;
			const cell_pair = new Set(
				coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
			);
			edgec_pairs.push(cell_pair);
		}
	}
	return edgec_pairs;
}

function allXYDifferencesGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const xy_diff_constraints = local_constraints.get(TOOLS.XY_DIFFERENCES);

	const xy_diff_pairs: Set<Cell>[] = getEdgeConstraintCellPairs(grid, xy_diff_constraints);

	let out_str: string = '';
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = xy_diff_pairs.find((pair) => pair.has(cell1) && pair.has(cell2));
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		let var3: string = '';
		if (cell1.r == cell2.r) {
			const row_cells = grid.getRow(cell1.r);
			const first_cell = row_cells[0];
			var3 = cellToVarName(first_cell);
		} else if (cell1.c == cell2.c) {
			const col_cells = grid.getCol(cell1.c);
			const first_cell = col_cells[0];
			var3 = cellToVarName(first_cell);
		}
		if (!var3) continue;

		const constraint_str = `constraint abs(${var1} - ${var2}) != ${var3};\n`;
		out_str += constraint_str;
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function allDifferencesGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints = local_constraints.get(TOOLS.DIFFERENCE);
	const ratio_constraints = local_constraints.get(TOOLS.RATIO);

	let cell_pairs: Set<Cell>[] = getEdgeConstraintCellPairs(grid, constraints);
	// extend the pairs with ratios
	cell_pairs = [...cell_pairs, ...getEdgeConstraintCellPairs(grid, ratio_constraints)];

	let used_vals: string[] = [];
	if (constraints) {
		used_vals = Object.values(constraints)
			.map((constraint) => constraint.value)
			.map((val) => (!val ? '1' : val));
	}
	const values = [...new Set(used_vals)];

	let out_str: string = '';
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = cell_pairs.find((pair) => pair.has(cell1) && pair.has(cell2));
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);
		for (const value of values) {
			const val = parseInt(value);
			const constraint_str = `constraint abs(${var1} - ${var2}) != ${val};\n`;
			out_str += constraint_str;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function allRatiosGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints = local_constraints.get(TOOLS.RATIO);
	const differences_constraints = local_constraints.get(TOOLS.DIFFERENCE);

	let cell_pairs: Set<Cell>[] = getEdgeConstraintCellPairs(grid, constraints);
	// extend the pairs with ratios
	cell_pairs = [...cell_pairs, ...getEdgeConstraintCellPairs(grid, differences_constraints)];
	let used_vals: string[] = [];
	if (constraints) {
		used_vals = Object.values(constraints)
			.map((constraint) => constraint.value)
			.map((val) => (!val ? '2' : val));
	}
	const values = [...new Set(used_vals)];

	let out_str: string = '';
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const match = cell_pairs.find((pair) => pair.has(cell1) && pair.has(cell2));
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);
		for (const value of values) {
			const val = parseInt(value);
			const constraint_str = `constraint not ratio_p(${var1}, ${var2}, ${val});\n`;
			out_str += constraint_str;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function allYinYangKropkiGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints = local_constraints.get(TOOLS.YIN_YANG_KROPKI);

	const cells_pairs: Set<Cell>[] = getEdgeConstraintCellPairs(grid, constraints);

	let out_str: string = '';
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		// check if cell pair is not in xv pairs
		const match = cells_pairs.find((pair) => pair.has(cell1) && pair.has(cell2));
		if (match) continue;

		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const yin_yang1 = cellToGridVarName(cell1, VAR_2D_NAMES.YIN_YANG);
		const yin_yang2 = cellToGridVarName(cell2, VAR_2D_NAMES.YIN_YANG);

		const constraint_str = `constraint not yin_yang_kropki_p(${var1}, ${var2}, ${yin_yang1}, ${yin_yang2});\n`;
		out_str += constraint_str;
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function allYinYangCountShadedCellsGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints_record = local_constraints.get(TOOLS.YIN_YANG_COUNT_SHADED_CELLS);
	const constraints: CellMultiArrowToolI[] = constraints_record
		? (Object.values(constraints_record) as CellMultiArrowToolI[])
		: [];

	function find_constraint_match(constraints: CellMultiArrowToolI[], cell: Cell) {
		return constraints.find(
			(constraint) => constraint.cell.r === cell.r && constraint.cell.c === cell.c
		);
	}

	let out_str: string = '';
	for (const cell of grid.getAllCells()) {
		// check if cell pair is not in xv pairs
		const match = find_constraint_match(constraints, cell);
		const used_dirs = match ? match.directions : [];

		const cell_var = cellToVarName(cell);
		const directions: DIRECTION[] = [DIRECTION.E, DIRECTION.N, DIRECTION.S, DIRECTION.W];
		for (const direction of directions) {
			if (used_dirs.includes(direction)) continue;
			const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
			const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
			out_str += `constraint count(${yin_yang_vars_str}, 1) != ${cell_var};\n`;
		}
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function getSingleCellConstraintsCells(
	grid: Grid,
	constraints: Record<string, ConstraintType> | undefined
) {
	const cells: Set<Cell> = new Set();
	if (constraints) {
		for (const constraint of Object.values(constraints)) {
			const coords = (constraint as CellToolI).cell;
			const cell = grid.getCell(coords.r, coords.c);
			if (!cell) continue;
			cells.add(cell);
		}
	}
	return cells;
}

function allIndexingColumnGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints = local_constraints.get(TOOLS.INDEXING_COLUMN);

	const cells: Set<Cell> = getSingleCellConstraintsCells(grid, constraints);

	let out_str: string = '';
	for (const cell of grid.getAllCells()) {
		const match = cells.has(cell);
		if (match) continue;

		const row_cells = grid.getRow(cell.r);
		const vars = cellsToVarsName(row_cells);
		const vars_str = `[${vars.join(',')}]`;
		const col = cell.c + 1;
		const constraint_str = `constraint not indexing_column_p(${vars_str}, ${col});\n`;
		out_str += constraint_str;
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function allRadarsGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints = local_constraints.get(TOOLS.RADAR);

	const cells: Set<Cell> = getSingleCellConstraintsCells(grid, constraints);

	let out_str: string = '';
	for (const cell of grid.getAllCells()) {
		const match = cells.has(cell);
		if (match) continue;

		const var0 = cellToVarName(cell);
		const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell);
		const constraint_str = `constraint not radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
		out_str += constraint_str;
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function allNurimisakiUnshadedEndpointsGivenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.localConstraints;
	const constraints = local_constraints.get(TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS);

	const cells: Set<Cell> = getSingleCellConstraintsCells(grid, constraints);

	let out_str: string = '';
	for (const cell of grid.getAllCells()) {
		const match = cells.has(cell);
		if (match) continue;

		const cell_nurimisaki = `nurimisaki[${cell.r},${cell.c}]`;
		const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
		const adj_nurimisaki_vars =
			'[' + adj_cells.map((cell2) => `nurimisaki[${cell2.r},${cell2.c}]`).join(', ') + ']';

		const constraint_str = `constraint not nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${cell_nurimisaki});\n`;
		out_str += constraint_str;
	}

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
	const local_constraints = puzzle.localConstraints;
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

function caveCellsAreOddConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint cave_cells_are_odd_p(board, cave_shading);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function caveWallsAreEvenConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint cave_walls_are_even_p(board, cave_shading);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function cave2x2NotFullyShadedOrUnshadedConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint shading_2x2_allowed_p(cave_shading, 1..3);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function oneDigitDoesNotAppearInTheCaveConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint one_digit_does_not_appear_in_cave_p(board, cave_shading, ALLOWED_DIGITS);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function everyCellBelongsToAGalaxyConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint every_cell_is_in_a_galaxy_p(galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function galaxy2x2DoesNotBelongToOneGalaxyConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint no_2x2_belongs_to_one_galaxy_p(galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function twoSymmetricGalaxiesConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint two_symmetric_galaxies_p(galaxy_regions);\n`;
	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}

function oneGalaxyIsAGermanWhispersConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	let out_str: string = '';
	out_str += `constraint one_galaxy_is_german_whispers(board, galaxy_regions);\n`;
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
	const unknown_regions = gconstraints.get(TOOLS.UNKNOWN_REGIONS);
	if (!unknown_regions) {
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

	[TOOLS.GLOBAL_INDEXING_COLUMN, globalIndexingColumnConstraint],
	[TOOLS.ALL_V_GIVEN, allXVGivenConstraint],
	[TOOLS.ALL_X_GIVEN, allXVGivenConstraint],
	[TOOLS.ALL_XV_GIVEN, allXVGivenConstraint],
	[TOOLS.ALL_DIFFERENCES_GIVEN, allDifferencesGivenConstraint],
	[TOOLS.ALL_RATIOS_GIVEN, allRatiosGivenConstraint],
	[TOOLS.ALL_XY_DIFFERENCES_GIVEN, allXYDifferencesGivenConstraint],
	[TOOLS.ALL_YIN_YANG_KROPKI_GIVEN, allYinYangKropkiGivenConstraint],
	[TOOLS.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN, allYinYangCountShadedCellsGivenConstraint],
	[TOOLS.ALL_INDEXING_COLUMN_GIVEN, allIndexingColumnGivenConstraint],
	[TOOLS.ALL_RADARS_GIVEN, allRadarsGivenConstraint],
	[TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN, allNurimisakiUnshadedEndpointsGivenConstraint],
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
	[TOOLS.CAVE_CELLS_ARE_ODD, caveCellsAreOddConstraint],
	[TOOLS.CAVE_WALLS_ARE_EVEN, caveWallsAreEvenConstraint],
	[TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED, cave2x2NotFullyShadedOrUnshadedConstraint],
	[TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE, oneDigitDoesNotAppearInTheCaveConstraint],
	[TOOLS.YIN_YANG_FILLOMINO_PARITY, yinYangFillominoParityConstraint],

	[TOOLS.TWO_SYMMETRIC_GALAXIES, twoSymmetricGalaxiesConstraint],
	[TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY, everyCellBelongsToAGalaxyConstraint],
	[TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY, galaxy2x2DoesNotBelongToOneGalaxyConstraint],
	[TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS, oneGalaxyIsAGermanWhispersConstraint],

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
