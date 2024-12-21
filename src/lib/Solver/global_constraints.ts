import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';
import { cellsToVarsName, allDifferentConstraint, cellToVarName } from './solver_utils';

function positiveDiagonalConstraint(grid: Grid): string {
	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let constraint = allDifferentConstraint(diag_vars);
	constraint = '\n% Positive Diagonal Constraint\n' + constraint;
	return constraint;
}

function negativeDiagonalConstraint(grid: Grid): string {
	const diag_cells = grid.getNegativeDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let constraint = allDifferentConstraint(diag_vars);
	constraint = '\n% Negative Diagonal Constraint\n' + constraint;
	return constraint;
}

function disjointGroupsConstraint(grid: Grid): string {
	let out_str = '\n% Disjoint Groups\n';
	const num_regions = [...grid.getUsedRegions()].length
	for (let group_idx = 0; group_idx < num_regions; group_idx++) {
		const disjoint_group = grid.getDisjointGroup(group_idx);
		const vars = cellsToVarsName(disjoint_group);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint alldifferent(${vars_str});\n`;
		out_str += constraint_str;		
	}
	return out_str;
}

function antikingConstraint(grid: Grid): string {
	let out_str = '\n% Antiking\n';
	for (const cell of grid.getAllCells()) {
		const kings_move_cells = grid.getNeighboorCells(cell);
		const filtered = kings_move_cells.filter(
			(cell2) => cell2.r + cell2.c >= cell.r + cell.c
		);
		const var1 = cellToVarName(cell);
		const vars = cellsToVarsName(filtered);
		const vars_str = `[${vars.join(',')}]`;
		const constraint_str = `constraint different_from_group_p(${var1}, ${vars_str});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function antiknightConstraint(grid: Grid): string {
	let out_str = '\n% Antiknight\n';
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

export function globalConstraints(puzzle: PuzzleI): string {
	let out_str = '';
	const gconstraints = puzzle.globalConstraints;

	for (const [toolId, value] of gconstraints.entries()) {
		if (!value) continue;

		if (toolId === TOOLS.POSITIVE_DIAGONAL) {
			const constraint_str = positiveDiagonalConstraint(puzzle.grid);
			out_str += constraint_str;
		} else if (toolId === TOOLS.NEGATIVE_DIAGONAL) {
			const constraint_str = negativeDiagonalConstraint(puzzle.grid);
			out_str += constraint_str;
		} else if (toolId === TOOLS.ANTIKING) {
			const constraint_str = antikingConstraint(puzzle.grid);
			out_str += constraint_str;
		} else if (toolId === TOOLS.ANTIKNIGHT) {
			const constraint_str = antiknightConstraint(puzzle.grid);
			out_str += constraint_str;
		} else if (toolId === TOOLS.DISJOINT_GROUPS) {
			const constraint_str = disjointGroupsConstraint(puzzle.grid);
			out_str += constraint_str;
		}
	}

	return out_str;
}

