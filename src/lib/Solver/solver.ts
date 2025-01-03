import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';
import { globalConstraints, sudokuConstraints } from './global_constraints';
import { localConstraints } from './local_constraints';
import { undeterminedRegionsConstraints } from './undetermined_regions_constraints';
import { cellToVarName, defineFunctionsPredicates } from './solver_utils';

function givenConstraints(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	let out_str = '';
	for (const cell of grid.getAllCells()) {
		if (!(cell.given && cell.value !== null)) continue;
		const var_name = cellToVarName(cell);
		const constraint = `constraint ${var_name} = ${cell.value};\n`;
		out_str += constraint;
	}
	if (out_str.length) {
		out_str = '\n% Given Digits\n' + out_str;
	}
	return out_str;
}

export function createMinizincModel(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const [nrows, ncols] = [grid.nRows, grid.nCols];
	const fillomino = !!puzzle.globalConstraints.get(TOOLS.FILLOMINO);
	const grid_size = nrows * ncols;

	let out_str = '';
	out_str += 'include "globals.mzn";\n';
	out_str += 'include "alldifferent.mzn";\n\n';
	out_str += defineFunctionsPredicates();

	const max_val = Math.max(nrows, ncols);
	let allowed_digits_str = `1..${max_val}`;
	const valid_digits = puzzle.valid_digits;
	if (fillomino) {
		allowed_digits_str = `1..${grid_size}`;
	}
	if (valid_digits) {
		allowed_digits_str = '{' + valid_digits.join(',') + '}';
	}

	out_str += `set of int: ROW_IDXS = 0..${nrows - 1};\n`;
	out_str += `set of int: COL_IDXS = 0..${ncols - 1};\n`;
	out_str += `set of int: ALLOWED_DIGITS = ${allowed_digits_str};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;\n`;

	out_str += givenConstraints(puzzle);
	out_str += sudokuConstraints(puzzle);

	out_str += undeterminedRegionsConstraints(puzzle);
	out_str += localConstraints(puzzle);
	out_str += globalConstraints(puzzle);

	out_str += '\nsolve satisfy;';
	return out_str;
}
