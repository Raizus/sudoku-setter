import type { Cell } from '../Puzzle/Grid/Cell';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import { addHeader, cellsToDoublersVarsName, cellsToNegatorsVarsName } from './solver_utils';

export function yinYangConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;\n`;
	out_str += `constraint yin_yang_p(yin_yang);\n`;

	return out_str;
}

export function nurimisakiConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;\n`;
	out_str += `constraint nurimisaki_p(nurimisaki);\n`;

	return out_str;
}

export function twoContiguousRegionsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `\n% Two Contiguous Regions\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;\n`;
	out_str += `constraint two_contiguous_regions_p(two_contiguous_regions);\n`;

	return out_str;
}

export function unknownRegionsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	const n_regions = Math.max(grid.nCols, grid.nRows);

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${n_regions - 1}: unknown_regions;\n`;
	out_str += `constraint unknown_sudoku_regions_p(unknown_regions, ${n_regions});\n`;
	out_str += `constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${n_regions});\n`;

	return out_str;
}

export function sashiganeConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: sashigane;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;\n`;
	out_str += `constraint sashigane_adjacency_p(sashigane);\n`;
	out_str += `constraint sashigane_bend_bools_p(sashigane, sashigane_bends);\n`;
	out_str += `constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);\n`;
	out_str += `constraint sashigane_links_to_bends(sashigane, sashigane_bends);\n`;

	return out_str;
}

export function cellCenterLoopNoTouchingConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_p(cell_center_loop, true);\n`;

	return out_str;
}

export function modularLoopConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_p(cell_center_loop, false);\n`;
	out_str += `constraint modular_loop_p(board, cell_center_loop);\n`;

	return out_str;
}

function onePerRowColumnRegion(puzzle: PuzzleI, vars_func: (cells: Cell[]) => string[]) {
	const grid = puzzle.grid;

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
	const gconstraints = puzzle.globalConstraints;
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

export function doublersConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;\n`;
	out_str += onePerRowColumnRegion(puzzle, cellsToDoublersVarsName);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);\n`;

	return out_str;
}

export function negatorsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'negators_grid';

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${grid_name};\n`;

	out_str += onePerRowColumnRegion(puzzle, cellsToNegatorsVarsName);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, ${grid_name}, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = negators_value_grid_f(board, ${grid_name});\n`;

	return out_str;
}

export function fillominoConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'fillomino_area';
	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name};\n`;
	out_str += `constraint fillomino_p(board, ${grid_name});\n`;

	return out_str;
}

export function caveConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = 'cave_shading';
	const grid_name2 = 'cave_regions';

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name2};\n`;
	out_str += `constraint cave_p(${grid_name1}, ${grid_name2});\n`;

	return out_str;
}


type ConstraintF = (puzzle: PuzzleI, tool: TOOLID) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.FILLOMINO, fillominoConstraint],
	[TOOLS.CAVE, caveConstraint],
	[TOOLS.YIN_YANG, yinYangConstraint],
	[TOOLS.NURIMISAKI, nurimisakiConstraint],
	[TOOLS.TWO_CONTIGUOUS_REGIONS, twoContiguousRegionsConstraint],
	[TOOLS.UNKNOWN_REGIONS, unknownRegionsConstraint],
	[TOOLS.SASHIGANE, sashiganeConstraint],
	[TOOLS.CELL_CENTER_LOOP_NO_TOUCHING, cellCenterLoopNoTouchingConstraint],
	[TOOLS.MODULAR_LOOP, modularLoopConstraint],

	[TOOLS.DOUBLERS, doublersConstraint],
	[TOOLS.NEGATORS, negatorsConstraint]
]);

export function undeterminedRegionsConstraints(puzzle: PuzzleI): string {
	let out_str = '';

	const gconstraints = puzzle.globalConstraints;
	for (const [toolId, value] of gconstraints.entries()) {
		if (!value) continue;
		const constraintF = tool_map.get(toolId);
		if (!constraintF) continue;

		let constraint_str = constraintF(puzzle, toolId);
		constraint_str = addHeader(constraint_str, `${toolId}`);
		out_str += constraint_str;
	}

	return out_str;
}