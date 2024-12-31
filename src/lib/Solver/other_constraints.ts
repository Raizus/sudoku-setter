import type { Cell } from '../Puzzle/Grid/Cell';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';
import { cellsToDoublersVarsName, cellsToNegatorsVarsName } from './solver_utils';

export function yinYangConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.YIN_YANG);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Yin Yang not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${TOOLS.YIN_YANG}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;\n`;
	out_str += `constraint yin_yang_p(yin_yang);\n`;

	return out_str;
}

export function nurimisakiConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.NURIMISAKI);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Nurimisaki not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${TOOLS.NURIMISAKI}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;\n`;
	out_str += `constraint nurimisaki_p(nurimisaki);\n`;

	return out_str;
}

export function twoContiguousRegionsConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.TWO_CONTIGUOUS_REGIONS);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Two Contiguous Regions not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% Two Contiguous Regions\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;\n`;
	out_str += `constraint two_contiguous_regions_p(two_contiguous_regions);\n`;

	return out_str;
}

export function unknownRegionsConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.UNKNOWN_REGIONS);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Unknown Regions not implemented when there are cells outisde the grid.');
		return '';
	}

	const n_regions = Math.max(grid.nCols, grid.nRows);

	let out_str: string = '';
	out_str += `\n% Unknown Regions\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${n_regions - 1}: unknown_regions;\n`;
	out_str += `constraint unknown_sudoku_regions_p(unknown_regions, ${n_regions});\n`;
	out_str += `constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${n_regions});\n`;

	return out_str;
}

export function sashiganeConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.SASHIGANE);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Sashigane not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${TOOLS.SASHIGANE}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: sashigane;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;\n`;
	out_str += `constraint sashigane_adjacency_p(sashigane);\n`;
	out_str += `constraint sashigane_bend_bools_p(sashigane, sashigane_bends);\n`;
	out_str += `constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);\n`;
	out_str += `constraint sashigane_links_to_bends(sashigane, sashigane_bends);\n`;

	return out_str;
}

export function cellCenterLoopNoTouchingConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const tool = TOOLS.CELL_CENTER_LOOP_NO_TOUCHING;
	const constraint = gconstraints.get(tool);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_p(cell_center_loop);\n`;

	return out_str;
}

function onePerRowColumnRegion(puzzle: PuzzleI, vars_func: (cells: Cell[]) => string[]) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;

	let out_str: string = '';
	out_str += '\n% Only 1 per row \n';
	const nrows = grid.nRows;
	for (let i = 0; i < nrows; i++) {
		const row_cells = grid.getRow(i);
		const vars = vars_func(row_cells);
		const vars_str = '[' + vars.join(',') + ']';
		out_str += `constraint count_eq(${vars_str}, true, 1);\n`;
	}

	// one doubler per column
	out_str += '\n% Only 1 per column \n';
	const ncols = grid.nCols;
	for (let i = 0; i < ncols; i++) {
		const col_cells = grid.getCol(i);
		const vars = vars_func(col_cells);
		const vars_str = '[' + vars.join(',') + ']';
		out_str += `constraint count_eq(${vars_str}, true, 1);\n`;
	}

	// one doubler per region
	const unknown_regions = gconstraints.get(TOOLS.UNKNOWN_REGIONS);
	if (!unknown_regions) {
		out_str += '\n% Only 1 per region \n';
		const regions = grid.getUsedRegions();
		for (const region of regions) {
			const region_cells = grid.getRegion(region);
			const vars = vars_func(region_cells);
			const vars_str = '[' + vars.join(',') + ']';
			out_str += `constraint count_eq(${vars_str}, true, 1);\n`;
		}
	}

	return out_str;
}

export function doublersConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const tool = TOOLS.DOUBLERS;
	const constraint = gconstraints.get(tool);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;\n`;

	out_str += onePerRowColumnRegion(puzzle, cellsToDoublersVarsName);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);\n`;

	return out_str;
}

export function negatorsConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const tool = TOOLS.NEGATORS;
	const constraint = gconstraints.get(tool);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'negators_grid';

	let out_str: string = '';
	out_str += `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${grid_name};\n`;

	out_str += onePerRowColumnRegion(puzzle, cellsToNegatorsVarsName);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, ${grid_name}, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = negators_value_grid_f(board, ${grid_name});\n`;

	return out_str;
}