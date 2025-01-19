import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { DIRECTION } from '../utils/directions';
import {
	cellsToGridVarsName,
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	getDirectionCells,
	getDirectionsVars,
	PuzzleModel,
	VAR_2D_NAMES
} from './solver_utils';

function simpleSingleCellConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const constraint_str = `constraint ${predicate}(${var1});\n`;
	return constraint_str;
}

function valuedSingleCellConstraint(
	grid: Grid,
	constraint: CellToolI,
	predicate: string,
	default_value: string = ''
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);

	let value = constraint.value;
	if (!value) value = default_value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint ${predicate}(${var1}, ${val});\n`;
	return constraint_str;
}

function oddConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const constraint_str = simpleSingleCellConstraint(grid, constraint, 'odd_p');
	return constraint_str;
}

function evenConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const constraint_str = simpleSingleCellConstraint(grid, constraint, 'even_p');
	return constraint_str;
}

function lowDigitConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const constraint_str = valuedSingleCellConstraint(grid, constraint, 'low_digit_p', '5');
	return constraint_str;
}

function highDigitConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const constraint_str = valuedSingleCellConstraint(grid, constraint, 'high_digit_p', '5');
	return constraint_str;
}

function minesweeperConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	// A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers.
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars_str = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint ${predicate}(${vars_str}) == ${var1};\n`;
	return constraint_str;
}

function oddMinesweeperConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = minesweeperConstraint(grid, constraint, 'odd_count');
	return constraint_str;
}

function evenMinesweeperConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	// A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).
	const constraint_str = minesweeperConstraint(grid, constraint, 'even_count');
	return constraint_str;
}

function countSameParityNeighbourConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars_str = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint count_same_parity_p(${var1}, ${vars_str});\n`;
	return constraint_str;
}

function orthogonalSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function diagonallyAdjacentSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const adj_cells = grid.getDiagonallyAdjacentCells(cell);
	const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function indexingColumnConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = grid.getRow(cell.r);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const col = cell.c + 1;

	const constraint_str = `constraint indexing_column_p(${vars_str}, ${col});\n`;
	return constraint_str;
}

function indexingRowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = grid.getCol(cell.c);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const row = cell.r + 1;

	const constraint_str = `constraint indexing_column_p(${vars_str}, ${row});\n`;
	return constraint_str;
}

function friendlyCellConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const row = cell.r + 1;
	const col = cell.c + 1;
	if (cell.region !== null) {
		const region = cell.region + 1;
		const constraint_str = `constraint ${var1} == ${row} \\/ ${var1} == ${col} \\/ ${var1} == ${region};\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} == ${row} \\/ ${var1} == ${col};\n`;
	return constraint_str;
}

function adjCellsOppositeDirOppositeParityConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';
	const cell1 = grid.getCell(coords.r - 1, coords.c);
	const cell2 = grid.getCell(coords.r + 1, coords.c);
	const cell3 = grid.getCell(coords.r, coords.c - 1);
	const cell4 = grid.getCell(coords.r, coords.c + 1);
	if (!cell1 || !cell2 || !cell3 || !cell4) return '';

	const var1 = cellToVarName(cell1);
	const var2 = cellToVarName(cell2);
	const var3 = cellToVarName(cell3);
	const var4 = cellToVarName(cell4);
	const constraint_str = `constraint groups_opposite_parity_p([${var1},${var2}], [${var3},${var4}]);\n`;
	return constraint_str;
}

function watchtowerFarsightHelper(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint ${predicate}(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars});\n`;
	return constraint_str;
}

function watchtowerConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const constraint_str = watchtowerFarsightHelper(grid, constraint, 'is_watchtower_p');
	return constraint_str;
}

function notWatchtowerConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = watchtowerFarsightHelper(grid, constraint, 'is_not_watchtower_p');
	return constraint_str;
}

function farsightConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const constraint_str = watchtowerFarsightHelper(grid, constraint, 'farsight_p');
	return constraint_str;
}

function radarConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
	return constraint_str;
}

function sandwichRowColCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);

	const row_cells = grid.getRow(cell0.r);
	const row_vars = '[' + cellsToVarsName(row_cells).join(',') + ']';
	const col_cells = grid.getCol(cell0.c);
	const col_vars = '[' + cellsToVarsName(col_cells).join(',') + ']';
	const [r, c] = [cell0.r + 1, cell0.c + 1];
	const constraint_str = `constraint sandwich_row_col_count_p(${row_vars}, ${col_vars}, ${r}, ${c}, ${var0});\n`;
	return constraint_str;
}

function minMaxConstraint(grid: Grid, constraints: CellToolI[], predicate: string) {
	let out_str = '';
	const all_max_coords = constraints.map((constraint) => constraint.cell);
	const max_cells = new Set(
		all_max_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	for (const constraint of constraints) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);

		const adj_cells = grid
			.getOrthogonallyAdjacentCells(cell)
			.filter((cell2) => !max_cells.has(cell2));
		const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${cell_var});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function maximumConstraint(grid: Grid, constraints: CellToolI[]) {
	const constraint_str = minMaxConstraint(grid, constraints, 'maximum_p');
	return constraint_str;
}

function minimumConstraint(grid: Grid, constraints: CellToolI[]) {
	const constraint_str = minMaxConstraint(grid, constraints, 'minimum_p');
	return constraint_str;
}

function countingCirclesConstraint(grid: Grid, constraints: CellToolI[]) {
	let out_str = '';
	const all_coords = constraints.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	out_str += `array[int] of var int: counting_circles = [\n\t${vars_str}\n];\n`;

	for (const constraint of constraints) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);

		const constraint_str = `constraint count(counting_circles, ${cell_var}) == ${cell_var};\n`;
		out_str += constraint_str;
	}
	out_str += '\n';
	return out_str;
}

function coloredCountingCirclesConstraint(grid: Grid, constraints: CellToolI[]) {
	let out_str = '';
	const all_coords = constraints.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	const circle_colors_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);
	const circle_colors_vars_str = `${circle_colors_vars.join(',\n\t')}`;

	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..3: ${VAR_2D_NAMES.COUNTING_CIRCLES_COLORS};\n`;
	out_str += `array[int] of var int: colored_counting_circles = [\n\t${vars_str}\n];\n`;
	out_str += `array[int] of var int: counting_circles_colors = [\n\t${circle_colors_vars_str}\n];\n`;
	out_str += `constraint colored_counting_circles_adjacent_p(${VAR_2D_NAMES.COUNTING_CIRCLES_COLORS});\n`;

	out_str += `\n% cells without circles\n`;
	for (const cell of grid.getAllCells()) {
		if (cells.has(cell)) continue;
		const color_var = cellToGridVarName(cell, VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);
		out_str += `constraint ${color_var} == 0;\n`;
	}

	for (const constraint of constraints) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);
		const color_var = cellToGridVarName(cell, VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);

		const value = constraint.value;
		if (value) {
			out_str += `constraint ${color_var} == ${value};\n`;
		} else {
			out_str += `constraint ${color_var} != 0;\n`;
		}

		out_str += `constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${cell_var}, ${color_var}) == ${cell_var};\n`;
	}
	out_str += '\n';
	return out_str;
}

function uniqueCellsConstraint(grid: Grid, constraints: CellToolI[]) {
	let out_str = '';
	const all_coords = constraints.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	out_str += `array[int] of var int: unique_cells = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(unique_cells);\n`;
	return out_str;
}

function yinYangMinesweeperConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbours];
	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint yin_yang_minesweeper_p(${yin_yang_vars_str}, ${var1});\n`;
	return constraint_str;
}

function yinYangSeenCountConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const dirCells = getDirectionCells(grid, cell);
	const yin_yang_vars: string[] = [];
	for (const cells of dirCells) {
		const _yin_yang_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		yin_yang_vars.push(_yin_yang_vars);
	}

	const cell_yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint ${predicate}(${cell_var}, ${cell_yin_yang_var}, ${yin_yang_vars[0]}, ${yin_yang_vars[1]}, ${yin_yang_vars[2]}, ${yin_yang_vars[3]});\n`;
	return constraint_str;
}

function yinYangSeenUnshadedConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = yinYangSeenCountConstraint(grid, constraint, 'yin_yang_seen_unshaded_p');
	return constraint_str;
}

function yinYangSeenShadedConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = yinYangSeenCountConstraint(grid, constraint, 'yin_yang_seen_shaded_p');
	return constraint_str;
}

function yinYangSeenSameShadeConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = yinYangSeenCountConstraint(grid, constraint, 'yin_yang_seen_same_shade_p');
	return constraint_str;
}

function yinYangAdjacentSameShadeCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const yin_yang_var = cellToGridVarName(cell, VAR_2D_NAMES.YIN_YANG);
	const adjacent_cells = grid.getOrthogonallyAdjacentCells(cell);
	const yin_yang_vars_str = cellsToGridVarsStr(adjacent_cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint yin_yang_adjacent_same_shade_count_p(${var1}, ${yin_yang_var}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function yinYangShadedNeighboursCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const yin_yang_vars_str = cellsToGridVarsStr(neighbour_cells, VAR_2D_NAMES.YIN_YANG);

	const constraint_str = `constraint count(${yin_yang_vars_str}, 1) == ${cell_var};\n`;
	return constraint_str;
}

function twoConstiguousRegionsRowColumnOppositeSetCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const region_var = `two_contiguous_regions[${cell.r},${cell.c}]`;

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_region_vars =
		'[' +
		row_cells.map((cell2) => `two_contiguous_regions[${cell2.r},${cell2.c}]`).join(', ') +
		']';
	const col_region_vars =
		'[' +
		col_cells.map((cell2) => `two_contiguous_regions[${cell2.r},${cell2.c}]`).join(', ') +
		']';

	const constraint_str = `constraint two_contiguous_regions_row_col_opposite_set_count_p(${row_region_vars}, ${col_region_vars}, ${cell_var}, ${region_var});\n`;
	return constraint_str;
}

function seenRegionBordersCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_region_vars =
		'[' + row_cells.map((cell2) => `unknown_regions[${cell2.r},${cell2.c}]`).join(', ') + ']';
	const col_region_vars =
		'[' + col_cells.map((cell2) => `unknown_regions[${cell2.r},${cell2.c}]`).join(', ') + ']';

	const constraint_str = `constraint unknown_regions_seen_region_border_count_p(${row_region_vars}, ${col_region_vars}, ${cell_var});\n`;
	return constraint_str;
}

function nurimisakiUnshadedEndpointsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const cell_nurimisaki = `nurimisaki[${cell.r},${cell.c}]`;

	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_nurimisaki_vars =
		'[' + adj_cells.map((cell2) => `nurimisaki[${cell2.r},${cell2.c}]`).join(', ') + ']';
	let out_str = `constraint nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${cell_nurimisaki});\n`;

	const dirCells = getDirectionCells(grid, cell);
	const nurimisaki_vars: string[] = [];
	for (const cells of dirCells) {
		const _nurimisaki_vars =
			'[' + cells.map((cell2) => `nurimisaki[${cell2.r}, ${cell2.c}]`).join(', ') + ']';
		nurimisaki_vars.push(_nurimisaki_vars);
	}
	out_str += `constraint nurimisaki_count_uninterrupted_unshaded_p(${cell_var}, ${cell_nurimisaki}, ${nurimisaki_vars[0]}, ${nurimisaki_vars[1]}, ${nurimisaki_vars[2]}, ${nurimisaki_vars[3]});\n`;

	return out_str;
}

function sashiganeBendRegionCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);
	const sashigane_bend_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE_BENDS);

	let out_str = `constraint sashigane_bend_region_count_p(${cell_var}, ${sashigane_var}, sashigane);\n`;
	out_str += `constraint ${sashigane_bend_var} = true;\n`;
	return out_str;
}

function sashiganeRegionSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	const constraint_str = `constraint conditional_sum_f(array1d(board), array1d(sashigane), ${sashigane_var}) == ${val};\n`;
	return constraint_str;
}

function cellOnLoopConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_center_loop_var = cellToGridVarName(cell, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint ${cell_center_loop_var} == 1;\n`;
	return constraint_str;
}

function cellNotOnLoopConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_center_loop_var = cellToGridVarName(cell, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint ${cell_center_loop_var} == 0;\n`;
	return constraint_str;
}

function countLoopNeighbourCellsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbour_cells];

	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint sum(${loop_vars_str}) == ${cell_var};\n`;
	return constraint_str;
}

function caveCluesConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const cave_var = cellToGridVarName(cell, VAR_2D_NAMES.CAVE_SHADING);
	const dirCells = getDirectionCells(grid, cell);
	const cave_vars: string[] = [];
	for (const cells of dirCells) {
		const _cave_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.CAVE_SHADING);
		cave_vars.push(_cave_vars);
	}

	const constraint_str = `constraint cave_clue_p(${cell_var}, ${cave_var}, ${cave_vars[0]}, ${cave_vars[1]}, ${cave_vars[2]}, ${cave_vars[3]});\n`;
	return constraint_str;
}

function chaosConstructionChessSumsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	let out_str = '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);

	// king sum
	out_str += `\n% chess sum ${c_id}\n`;
	const king_cells = grid.getNeighboorCells(cell);
	const king_vars = cellsToGridVarsStr(king_cells, VAR_2D_NAMES.BOARD);
	const king_region_vars = cellsToGridVarsStr(king_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: king_sum_${c_id};\n`;
	out_str += `constraint king_sum_${c_id} = conditional_sum_f(${king_vars}, ${king_region_vars}, ${region_var});\n`;
	out_str += `var bool: king_${c_id};\n`;
	out_str += `constraint king_${c_id} = (king_sum_${c_id} == ${cell_var});\n`;

	// knight sum
	const knight_cells = grid.getCellsByKnightMove(cell);
	const knight_vars = cellsToGridVarsStr(knight_cells, VAR_2D_NAMES.BOARD);
	const knight_region_vars = cellsToGridVarsStr(knight_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: knight_sum_${c_id};\n`;
	out_str += `constraint knight_sum_${c_id} = conditional_sum_f(${knight_vars}, ${knight_region_vars}, ${region_var});\n`;
	out_str += `var bool: knight_${c_id};\n`;
	out_str += `constraint knight_${c_id} = (knight_sum_${c_id} == ${cell_var});\n`;

	// bishop sum
	const directions: DIRECTION[] = [DIRECTION.NE, DIRECTION.NW, DIRECTION.SE, DIRECTION.SW];
	const bishop_cells: Cell[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		cells.forEach((_cell) => bishop_cells.push(_cell));
	}
	const bishop_vars = cellsToGridVarsStr(bishop_cells, VAR_2D_NAMES.BOARD);
	const bishop_region_vars = cellsToGridVarsStr(bishop_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: bishop_sum_${c_id};\n`;
	out_str += `constraint bishop_sum_${c_id} = conditional_sum_f(${bishop_vars}, ${bishop_region_vars}, ${region_var});\n`;
	out_str += `var bool: bishop_${c_id};\n`;
	out_str += `constraint bishop_${c_id} = (bishop_sum_${c_id} == ${cell_var});\n`;

	// chess sums
	out_str += `constraint sum([king_${c_id}, knight_${c_id}, bishop_${c_id}]) == ${val};\n`;

	return out_str;
}

function chaosConstructionArrowKnotsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	let out_str = '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_region_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `\n% arrow knot ${c_id}\n`;
	out_str += `constraint count_eq(${adj_region_vars}, ${region_var}) >= ${val};\n`;

	const directions: DIRECTION[] = [DIRECTION.N, DIRECTION.S, DIRECTION.E, DIRECTION.W];
	const arrow_vars: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		if (!cells.length) continue;

		const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
		const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
		const in_arrow_var = `in_arrow_${c_id}_${direction}`;
		const first_arrow_var = `in_arrow_${c_id}_${direction}[1]`;
		arrow_vars.push(first_arrow_var);
		out_str += `array[index_set(${cells_vars})] of var bool: ${in_arrow_var};\n`;
		out_str += `constraint chaos_construction_arrow_knots_p(${cells_vars}, ${region_vars}, ${in_arrow_var}, ${cell_var}, ${region_var});\n`;
	}
	out_str += `constraint sum([${arrow_vars.join(',')}]) == ${val};\n`;

	return out_str;
}

function directedPathStartConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const node_id = cell.r * grid.nCols + cell.c + 1;

	const constraint_str = `constraint dpath_source == ${node_id};\n`;
	return constraint_str;
}

function directedPathEndConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const node_id = cell.r * grid.nCols + cell.c + 1;

	const constraint_str = `constraint dpath_target == ${node_id};\n`;
	return constraint_str;
}

type ConstraintF = (model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) => string;
type ConstraintF2 = (grid: Grid, constraint: CellToolI[]) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.ODD, oddConstraint],
	[TOOLS.EVEN, evenConstraint],
	[TOOLS.LOW_DIGIT, lowDigitConstraint],
	[TOOLS.HIGH_DIGIT, highDigitConstraint],
	[TOOLS.ODD_MINESWEEPER, oddMinesweeperConstraint],
	[TOOLS.EVEN_MINESWEEPER, evenMinesweeperConstraint],
	[TOOLS.DIAGONALLY_ADJACENT_SUM, diagonallyAdjacentSumConstraint],
	[TOOLS.ORTHOGONAL_SUM, orthogonalSumConstraint],
	[TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS, countSameParityNeighbourConstraint],
	[TOOLS.FRIENDLY_CELL, friendlyCellConstraint],
	[
		TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,
		adjCellsOppositeDirOppositeParityConstraint
	],
	[TOOLS.WATCHTOWER, watchtowerConstraint],
	[TOOLS.NOT_WATCHTOWER, notWatchtowerConstraint],
	[TOOLS.FARSIGHT, farsightConstraint],
	[TOOLS.RADAR, radarConstraint],
	[TOOLS.INDEXING_COLUMN, indexingColumnConstraint],
	[TOOLS.INDEXING_ROW, indexingRowConstraint],
	[TOOLS.SANDWICH_ROW_COL_COUNT, sandwichRowColCountConstraint],

	[TOOLS.YIN_YANG_MINESWEEPER, yinYangMinesweeperConstraint],
	[TOOLS.YIN_YANG_SEEN_UNSHADED_CELLS, yinYangSeenUnshadedConstraint],
	[TOOLS.YIN_YANG_SEEN_SHADED_CELLS, yinYangSeenShadedConstraint],
	[TOOLS.YIN_YANG_SEEN_SAME_SHADE_CELLS, yinYangSeenSameShadeConstraint],
	[TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT, yinYangAdjacentSameShadeCountConstraint],
	[TOOLS.YIN_YANG_SHADED_NEIGHBOURS_COUNT, yinYangShadedNeighboursCountConstraint],

	[
		TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,
		twoConstiguousRegionsRowColumnOppositeSetCountConstraint
	],
	[TOOLS.SEEN_REGION_BORDERS_COUNT, seenRegionBordersCountConstraint],
	[TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS, nurimisakiUnshadedEndpointsConstraint],

	[TOOLS.SASHIGANE_BEND_REGION_COUNT, sashiganeBendRegionCountConstraint],
	[TOOLS.SASHIGANE_REGION_SUM, sashiganeRegionSumConstraint],

	[TOOLS.CELL_ON_THE_LOOP, cellOnLoopConstraint],
	[TOOLS.CELL_NOT_ON_THE_LOOP, cellNotOnLoopConstraint],
	[TOOLS.COUNT_LOOP_NEIGHBOUR_CELLS, countLoopNeighbourCellsConstraint],
	[TOOLS.CAVE_CLUE, caveCluesConstraint],

	[TOOLS.CHAOS_CONSTRUCTION_CHESS_SUMS, chaosConstructionChessSumsConstraint],
	[TOOLS.CHAOS_CONSTRUCTION_ARROW_KNOTS, chaosConstructionArrowKnotsConstraint],

	[TOOLS.DIRECTED_PATH_START, directedPathStartConstraint],
	[TOOLS.DIRECTED_PATH_END, directedPathEndConstraint]
]);

const tool_map_2 = new Map<string, ConstraintF2>([
	[TOOLS.MAXIMUM, maximumConstraint],
	[TOOLS.MINIMUM, minimumConstraint],
	[TOOLS.COUNTING_CIRCLES, countingCirclesConstraint],
	[TOOLS.COLORED_COUNTING_CIRCLES, coloredCountingCirclesConstraint],
	[TOOLS.UNIQUE_CELLS, uniqueCellsConstraint]
]);

export function singleCellConstraints(
	model: PuzzleModel,
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	const constraintF2 = tool_map_2.get(toolId);
	if (constraintF) {
		for (const [c_id, constraint] of Object.entries(constraints)) {
			const constraint_str = constraintF(model, grid, c_id, constraint as CellToolI);
			out_str += constraint_str;
		}
	} else if (constraintF2) {
		const constl = Object.values(constraints) as CellToolI[];
		const constraint_str = constraintF2(grid, constl);
		out_str += constraint_str;
	}
	return out_str;
}
