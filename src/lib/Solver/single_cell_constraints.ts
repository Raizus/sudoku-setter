import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToVarsName, cellToVarName } from './solver_utils';

function simpleSingleCellConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const constraint_str = `constraint ${predicate}(${var1});\n`;
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

function oddMinesweeperConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars = cellsToVarsName(neighbours);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str = `constraint odd_count(${vars_str}) == ${var1};\n`;
	return constraint_str;
}

function evenMinesweeperConstraint(grid: Grid, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars = cellsToVarsName(neighbours);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str = `constraint even_count(${vars_str}) == ${var1};\n`;
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
	const constraint_str = `constraint sum(${vars_str}) == ${var1};\n`;
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
	const constraint_str = `constraint sum(${vars_str}) == ${var1};\n`;
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

type ConstraintF = (grid: Grid, constraint: CellToolI) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.ODD, oddConstraint],
	[TOOLS.EVEN, evenConstraint],
	[TOOLS.ODD_MINESWEEPER, oddMinesweeperConstraint],
	[TOOLS.EVEN_MINESWEEPER, evenMinesweeperConstraint],
	[TOOLS.DIAGONALLY_ADJACENT_SUM, diagonallyAdjacentSumConstraint],
	[TOOLS.ORTHOGONAL_SUM, orthogonalSumConstraint],
	[TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS, countSameParityNeighbourConstraint],
	[TOOLS.FRIENDLY_CELL, friendlyCellConstraint],
	[
		TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,
		adjCellsOppositeDirOppositeParityConstraint
	]
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
	}

	out_str = addHeader(out_str, `${toolId}`);
	return out_str;
}
