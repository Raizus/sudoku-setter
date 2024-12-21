import type { GlobalConstraintsDict } from './Constraints/GlobalConstraints';
import type { Grid } from './Grid/Grid';

function checkAllCellsFilled(grid: Grid): boolean {
	for (const cell of grid.getAllCells()) {
		if (cell.outside === false) continue;
		else if (cell.value === null) return false;
	}
	return true;
}


export function verifyCompletePuzzle(
	grid: Grid,
	global_constraints: GlobalConstraintsDict
): boolean {
	// if solution exists compare with solution

	// verify all cells are filled.
    const all_filled = checkAllCellsFilled(grid);
    if (!all_filled) return false;

	// check if all sudoku constraints are correct

	// check other boolean constraints

	// check local constraints

	return false;
}
