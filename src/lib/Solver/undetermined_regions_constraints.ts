import type { Cell } from '../Puzzle/Grid/Cell';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	addHeader,
	cellsToGridVarsStr,
	format_2d_array,
	PENTOMINOES,
	VAR_2D_NAMES
} from './solver_utils';

function yinYangConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function nurimisakiConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function twoContiguousRegionsConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function unknownRegionsConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function sashiganeConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function cellCenterLoopNoTouchingConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function cellCenterLoopCanTouchDiagonallyConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: cell_center_loop;\n`;
	out_str += `constraint cell_center_loop_p(cell_center_loop, false);\n`;

	return out_str;
}

function notLoopSizedRegionsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: loop_regions;\n`;
	out_str += `constraint cell_center_loop_regions_p(cell_center_loop, loop_regions);\n`;
	out_str += `constraint not_loop_sized_regions_p(board, loop_regions, ALLOWED_DIGITS);\n`;

	return out_str;
}

function modularLoopConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function onePerRowColumnRegion(puzzle: PuzzleI, vars_func: (cells: Cell[]) => string) {
	const grid = puzzle.grid;

	let out_str: string = '';
	out_str += '\n% Only 1 per row \n';
	const nrows = grid.nRows;
	for (let i = 0; i < nrows; i++) {
		const row_cells = grid.getRow(i);
		const vars_str = vars_func(row_cells);
		out_str += `constraint count_eq(${vars_str}, true, 1);\n`;
	}

	// one doubler per column
	out_str += '\n% Only 1 per column \n';
	const ncols = grid.nCols;
	for (let i = 0; i < ncols; i++) {
		const col_cells = grid.getCol(i);
		const vars_str = vars_func(col_cells);
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
			const vars_str = vars_func(region_cells);
			out_str += `constraint count_eq(${vars_str}, true, 1);\n`;
		}
	}

	return out_str;
}

function doublersConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;\n`;
	out_str += onePerRowColumnRegion(puzzle, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.DOUBLERS)
	);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);\n`;

	return out_str;
}

function negatorsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'negators_grid';

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${grid_name};\n`;

	out_str += onePerRowColumnRegion(puzzle, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.NEGATORS)
	);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, ${grid_name}, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = negators_value_grid_f(board, ${grid_name});\n`;

	return out_str;
}

function fillominoConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function caveConstraint(puzzle: PuzzleI, tool: TOOLID) {
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

function galaxiesConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.GALAXY_REGIONS;
	const grid_name2 = VAR_2D_NAMES.GALAXY_SIZES;
	const max_galaxies = grid.nCols * grid.nRows;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${max_galaxies}: ${grid_name1};\n`;
	out_str += `constraint galaxy_restrict_numbering_p(${grid_name1});\n`;
	out_str += `array[0..${max_galaxies}] of var 0..${max_galaxies}: ${grid_name2};\n`;
	out_str += `constraint galaxy_sizes_p(${grid_name1}, ${grid_name2});\n`;
	out_str += `constraint adjacent_galaxies_not_size_leq_3_p(${grid_name1}, ${grid_name2});\n`;
	out_str += `constraint gallaxy_connected_regions_p(${grid_name1});\n`;
	// out_str += `constraint galaxy_180_symmetry_p(${grid_name1}, ${grid_name2});\n`;
	return out_str;
}

function nexusConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;\n`;
	out_str += `\nconstraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);\n`;

	return out_str;
}

function goldilocksConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: values_grid;\n`;
	out_str += `constraint goldilocks_zone_p(goldilocks_regions);\n`;
	out_str += `constraint goldilocks_values_p(board, values_grid, goldilocks_regions);\n`;

	return out_str;
}

function pentominoTillingConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const num_pentominoes = PENTOMINOES.size;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${num_pentominoes}: tilling_regions;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${num_pentominoes}: tilling_placing_grid;\n`;
	out_str += `constraint count_different(array1d(tilling_placing_grid), 0) >= 5;\n`;
	// out_str += `constraint tilling_region_no_empty_cells_p(tilling_regions);\n`;
	// iterate over all pentominoes and rotations / reflections
	for (const [pentomino_id, pentomino] of PENTOMINOES.entries()) {
		const h = pentomino.length;
		const w = pentomino[0].length;
		const var_name = `pentomino_${pentomino_id}`;
		out_str += `array[1..${h}, 1..${w}] of 0..1: ${var_name} = ${format_2d_array(pentomino)};\n`;
		out_str += `constraint n_omino_place_p(tilling_placing_grid, tilling_regions, ${var_name}, ${pentomino_id});\n`;
	}

	return out_str;
}

function litsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.LITS_SHADING;
	const grid_name2 = VAR_2D_NAMES.LITS_REGIONS;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..4: ${grid_name2};\n`;
	out_str += `constraint lits_shading_p(${grid_name1});\n`;
	out_str += `constraint lits_shading_ids_p(${grid_name1}, ${grid_name2});\n`;
	out_str += `constraint lits_region_and_ids_p(${VAR_2D_NAMES.BOARD_REGIONS}, ${grid_name2});\n`;
	out_str += `constraint lits_tetromino_shapes_p(${grid_name2});\n`;

	const regions = grid.getUsedRegions();
	if (regions.size) out_str += `\n% Exactly 4 shaded cells per region (known regions)\n`
	for (const region of regions) {
		const region_cells = grid.getRegion(region);
		const shading_vars = cellsToGridVarsStr(region_cells, VAR_2D_NAMES.LITS_SHADING);
		const constraint = `constraint count_eq(${shading_vars}, 1, 4);\n`;
		out_str += constraint;
	}

	return out_str;
}

function caveLitsConstraint(puzzle: PuzzleI, tool: TOOLID) {
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.LITS_SHADING;
	const grid_name2 = VAR_2D_NAMES.LITS_REGIONS;
	const grid_name3 = VAR_2D_NAMES.CAVE_REGIONS;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..4: ${grid_name2};\n`;
	out_str += `constraint lits_shading_p(${grid_name1});\n`;
	out_str += `constraint lits_shading_ids_p(${grid_name1}, ${grid_name2});\n`;
	out_str += `constraint lits_region_and_ids_p(${grid_name3}, ${grid_name2});\n`;
	out_str += `constraint lits_4_per_region_p(${grid_name3}, ${grid_name1});\n`;
	out_str += `constraint lits_tetromino_shapes_p(${grid_name2});\n`;

	const regions = grid.getUsedRegions();
	if (regions.size) out_str += `\n% Exactly 4 shaded cells per region (known regions)\n`;
	for (const region of regions) {
		const region_cells = grid.getRegion(region);
		const shading_vars = cellsToGridVarsStr(region_cells, VAR_2D_NAMES.LITS_SHADING);
		const constraint = `constraint count_eq(${shading_vars}, 1, 4);\n`;
		out_str += constraint;
	}

	return out_str;
}

type ConstraintF = (puzzle: PuzzleI, tool: TOOLID) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.FILLOMINO, fillominoConstraint],
	[TOOLS.CAVE, caveConstraint],
	[TOOLS.GALAXIES, galaxiesConstraint],
	[TOOLS.YIN_YANG, yinYangConstraint],
	[TOOLS.NURIMISAKI, nurimisakiConstraint],
	[TOOLS.TWO_CONTIGUOUS_REGIONS, twoContiguousRegionsConstraint],
	[TOOLS.UNKNOWN_REGIONS, unknownRegionsConstraint],
	[TOOLS.SASHIGANE, sashiganeConstraint],
	[TOOLS.CELL_CENTER_LOOP_NO_TOUCHING, cellCenterLoopNoTouchingConstraint],
	[TOOLS.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY, cellCenterLoopCanTouchDiagonallyConstraint],
	[TOOLS.NOT_LOOP_SIZED_REGIONS, notLoopSizedRegionsConstraint],
	[TOOLS.MODULAR_LOOP, modularLoopConstraint],

	[TOOLS.DOUBLERS, doublersConstraint],
	[TOOLS.NEGATORS, negatorsConstraint],
	[TOOLS.GOLDILOCKS_ZONE, goldilocksConstraint],
	[TOOLS.NEXUS, nexusConstraint],

	[TOOLS.PENTOMINO_TILLING, pentominoTillingConstraint],
	[TOOLS.LITS, litsConstraint],
	[TOOLS.CAVE_LITS, caveLitsConstraint]
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
