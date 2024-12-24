import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellsToVarsName,
	cellsToYinYangVarsName,
	cellToVarName,
	cellToYinYangVarName,
	getDirectionCells,
	getDirectionsVars
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

function oddConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = simpleSingleCellConstraint(grid, constraint, 'odd_p');
	return constraint_str;
}

function evenConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = simpleSingleCellConstraint(grid, constraint, 'even_p');
	return constraint_str;
}

function lowDigitConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = valuedSingleCellConstraint(grid, constraint, 'low_digit_p', '5');
	return constraint_str;
}

function highDigitConstraint(grid: Grid, constraint: CellToolI) {
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
	const vars = cellsToVarsName(neighbours);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str = `constraint ${predicate}(${vars_str}) == ${var1};\n`;
	return constraint_str;
}

function oddMinesweeperConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = minesweeperConstraint(grid, constraint, 'odd_count');
	return constraint_str;
}

function evenMinesweeperConstraint(grid: Grid, constraint: CellToolI) {
	// A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).
	const constraint_str = minesweeperConstraint(grid, constraint, 'even_count');
	return constraint_str;
}

function countSameParityNeighbourConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars = cellsToVarsName(neighbours);
	const vars_str = `[${[...vars, var1].join(',')}]`;
	const constraint_str = `constraint count_same_parity_p(${var1}, ${vars_str});\n`;
	return constraint_str;
}

function orthogonalSumConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const vars = cellsToVarsName(adj_cells);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function diagonallyAdjacentSumConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const adj_cells = grid.getDiagonallyAdjacentCells(cell);
	const vars = cellsToVarsName(adj_cells);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function indexingColumnConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const row_cells = grid.getRow(cell.r);
	const vars = cellsToVarsName(row_cells);
	const vars_str = `[${vars.join(',')}]`;
	const col = cell.c + 1;
	const constraint_str = `constraint indexing_column_p(${vars_str}, ${col});\n`;
	return constraint_str;
}

function indexingRowConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const col_cells = grid.getCol(cell.c);
	const vars = cellsToVarsName(col_cells);
	const vars_str = `[${vars.join(',')}]`;
	const row = cell.r + 1;
	const constraint_str = `constraint indexing_column_p(${vars_str}, ${row});\n`;
	return constraint_str;
}

function friendlyCellConstraint(grid: Grid, constraint: CellToolI) {
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

function adjCellsOppositeDirOppositeParityConstraint(grid: Grid, constraint: CellToolI) {
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

function watchtowerConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = watchtowerFarsightHelper(grid, constraint, 'is_watchtower_p');
	return constraint_str;
}

function notWatchtowerConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = watchtowerFarsightHelper(grid, constraint, 'is_not_watchtower_p');
	return constraint_str;
}

function farsightConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = watchtowerFarsightHelper(grid, constraint, 'farsight_p');
	return constraint_str;
}

function radarConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
	return constraint_str;
}

function sandwichRowColCountConstraint(grid: Grid, constraint: CellToolI) {
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
		const vars = cellsToVarsName(adj_cells);
		const vars_str = `[${vars.join(',')}]`;
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
	const vars_str = `[${vars.join(',')}]`;

	for (const constraint of constraints) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);

		const constraint_str = `constraint count(${vars_str}, ${cell_var}) == ${cell_var};\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangMinesweeperConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbours];
	const yin_yang_vars = cellsToYinYangVarsName(cells);
	const yin_yang_vars_str = `[${yin_yang_vars.join(', ')}]`;
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
		const _yin_yang_vars = '[' + cellsToYinYangVarsName(cells).join(', ') + ']';
		yin_yang_vars.push(_yin_yang_vars);
	}
	const cell_yin_yang_var = cellToYinYangVarName(cell);
	const constraint_str = `constraint ${predicate}(${cell_var}, ${cell_yin_yang_var}, ${yin_yang_vars[0]}, ${yin_yang_vars[1]}, ${yin_yang_vars[2]}, ${yin_yang_vars[3]});\n`;
	return constraint_str;
}

function yinYangSeenUnshadedConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = yinYangSeenCountConstraint(grid, constraint, 'yin_yang_seen_unshaded_p');
	return constraint_str;
}

function yinYangSeenShadedConstraint(grid: Grid, constraint: CellToolI) {
	const constraint_str = yinYangSeenCountConstraint(grid, constraint, 'yin_yang_seen_shaded_p');
	return constraint_str;
}

function yinYangAdjacentSameShadeCountConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const cell_yin_yang_var = cellToYinYangVarName(cell);
	const adjacent_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_yin_yang_vars = cellsToYinYangVarsName(adjacent_cells);
	const yin_yang_vars_str = `[${adj_yin_yang_vars.join(', ')}]`;
	const constraint_str = `constraint yin_yang_adjacent_same_shade_count_p(${var1}, ${cell_yin_yang_var}, ${yin_yang_vars_str});\n`;
	return constraint_str;
}

function twoConstiguousRegionsRowColumnOppositeSetCountConstraint(
	grid: Grid,
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

function seenRegionBordersCountConstraint(grid: Grid, constraint: CellToolI) {
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

function nurimisakiUnshadedEndpointsConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const cell_nurimisaki = `nurimisaki[${cell.r},${cell.c}]`;

	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_nurimisaki_vars =
		'[' + adj_cells.map((cell2) => `nurimisaki[${cell2.r},${cell2.c}]`).join(', ') + ']';

	const dirCells = getDirectionCells(grid, cell);
	const nurimisaki_vars: string[] = [];
	for (const cells of dirCells) {
		const _nurimisaki_vars =
			'[' + cells.map((cell2) => `nurimisaki[${cell2.r}, ${cell2.c}]`).join(', ') + ']';
		nurimisaki_vars.push(_nurimisaki_vars);
	}
	let out_str = `constraint nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${cell_nurimisaki});\n`;
	out_str += `constraint nurimisaki_count_uninterrupted_unshaded_p(${cell_var}, ${cell_nurimisaki}, ${nurimisaki_vars[0]}, ${nurimisaki_vars[1]}, ${nurimisaki_vars[2]}, ${nurimisaki_vars[3]});\n`;

	return out_str;
}

type ConstraintF = (grid: Grid, constraint: CellToolI) => string;

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
	[TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT, yinYangAdjacentSameShadeCountConstraint],
	[
		TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,
		twoConstiguousRegionsRowColumnOppositeSetCountConstraint
	],
	[TOOLS.SEEN_REGION_BORDERS_COUNT, seenRegionBordersCountConstraint],
	[TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS, nurimisakiUnshadedEndpointsConstraint]
]);

export function singleCellConstraints(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) {
	let out_str = '';
	const constraintF = tool_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as CellToolI);
			out_str += constraint_str;
		}
	} else if (toolId === TOOLS.MAXIMUM) {
		const constl = Object.values(constraints) as CellToolI[];
		const constraint_str = maximumConstraint(grid, constl);
		out_str += constraint_str;
	} else if (toolId === TOOLS.MINIMUM) {
		const constl = Object.values(constraints) as CellToolI[];
		const constraint_str = minimumConstraint(grid, constl);
		out_str += constraint_str;
	} else if (toolId === TOOLS.COUNTING_CIRCLES) {
		const constl = Object.values(constraints) as CellToolI[];
		const constraint_str = countingCirclesConstraint(grid, constl);
		out_str += constraint_str;
	}
	return out_str;
}
