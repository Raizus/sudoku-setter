import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';
import { globalConstraints, hexedSudokuConstraint, sudokuConstraints } from './global_constraints';
import { localConstraints } from './local_constraints';
import { undeterminedRegionsConstraints } from './undetermined_regions_constraints';
import { cellToVarName, PuzzleModel, set_board_regions } from './solver_utils';
import { defineFunctionsPredicates } from './solver_mzn_defs';
import { range } from 'lodash';

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
	let valid_digits = puzzle.valid_digits;
	const model = new PuzzleModel(puzzle);

	const [nrows, ncols] = [grid.nRows, grid.nCols];
	const grid_size = nrows * ncols;

	model.add('include "globals.mzn";\n');
	model.add('include "alldifferent.mzn";\n\n');
	model.add(defineFunctionsPredicates());
	
	const max_val = Math.max(nrows, ncols);
	let allowed_digits_str = `1..${max_val}`;
	const fillomino = !!puzzle.globalConstraints.get(TOOLS.FILLOMINO);
	if (fillomino) {
		allowed_digits_str = `1..${grid_size}`;
	}
	if (puzzle.globalConstraints.get(TOOLS.HEXED_SUDOKU)) {
		valid_digits = [...range(1, 16)];
	}
	if (valid_digits) {
		allowed_digits_str = '{' + valid_digits.join(',') + '}';
	}

	model.add(`set of int: ROW_IDXS = 0..${nrows - 1};\n`);
	model.add(`set of int: COL_IDXS = 0..${ncols - 1};\n`);
	model.add(`set of int: ALLOWED_DIGITS = ${allowed_digits_str};\n`);
	model.add(`array[ROW_IDXS, COL_IDXS] of var ALLOWED_DIGITS: board;\n`);

	// add regions array if applicable
	set_board_regions(model, grid);

	model.add(givenConstraints(puzzle));
	model.add(sudokuConstraints(puzzle));
	model.add(hexedSudokuConstraint(puzzle));

	model.add(undeterminedRegionsConstraints(model));
	model.add(localConstraints(puzzle, model));
	model.add(globalConstraints(puzzle));

	model.add('\nsolve satisfy;');
	return model;
}
