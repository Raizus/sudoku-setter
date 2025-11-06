import { TOOLS } from '../Puzzle/Tools';
import { hexedSudokuConstraint, sudokuConstraints } from './global_constraints';
import { addHeader, cellToVarName, PuzzleModel, set_board_regions, type PuzzleAuxI } from './solver_utils';
import { defineFunctionsPredicates } from './solver_mzn_defs';
import { range } from 'lodash';
import { elementInfoRegistry } from '../Puzzle/ElementsInfo/SquareCellElementHandlers';
import type { SquareCellElementInfo } from '../Puzzle/ElementInfo';

function givenConstraints(puzzle: PuzzleAuxI) {
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

export function elementConstraints(
	model: PuzzleModel,
	element_handlers: Record<string, SquareCellElementInfo>
) {
	// TODO: note that right now the solver will generate the constraints in the order the elements were given
	// maybe make sure the undetermined regions constraints are first
	let out_str = '';
	const puzzle = model.puzzle;
	const elements_map = puzzle.elementsDict;

	for (const [tool_id, element] of elements_map.entries()) {
		if (element.disabled) continue;

		const element_info = element_handlers[tool_id];
		const solver_func = element_info.solver_func;
		if (!solver_func) continue;

		let element_solver_str: string = solver_func(model, element);
		element_solver_str = addHeader(element_solver_str, `${tool_id}`);
		out_str += element_solver_str;
	}

	return out_str;
}

export function createMinizincModel(puzzle: PuzzleAuxI, randomize_search: boolean = false) {
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
	const elements_dict = puzzle.elementsDict;

	const fillomino = !!elements_dict.get(TOOLS.FILLOMINO);
	const hexed_sudoku = !!elements_dict.get(TOOLS.HEXED_SUDOKU);

	if (fillomino) {
		allowed_digits_str = `1..${grid_size}`;
	} else if (hexed_sudoku) {
		valid_digits = [...range(1, 16)];
	} else if (valid_digits) {
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

	model.add(elementConstraints(model, elementInfoRegistry));

	// randomize search doesn't work for the minizinc WASM version
	if (randomize_search) {
		model.add(`\nsolve :: int_search(array1d(board), first_fail, indomain_random) satisfy;`);
	} else {
		model.add('\nsolve satisfy;');
	}

	return model;
}
