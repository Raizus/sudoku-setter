import type { CornerLineToolI } from '../Puzzle/Constraints/CornerLineConstraints';
import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { CellToolI } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	cellEdgeToCellCoords,
	coordsAdd,
	coordsScale,
	cornerCoordToAdjCellCoords,
	type GridCoordI
} from '../utils/SquareCellGridCoords';
import {
	addHeader,
	cellsToGridVarsStr,
	format_2d_array,
	groupConstraintsByValue,
	PENTOMINOES,
	PuzzleModel,
	VAR_2D_NAMES
} from './solver_utils';

function yinYangConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function nurimisakiConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function nurikabeConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;\n`;
	out_str += `constraint nurikabe_p(nurikabe_shading, nurikabe_regions);\n`;

	return out_str;
}

function nurikabeNoRepeatsInIslandsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `constraint nurikabe_no_repeats_in_islands_p(board, nurikabe_regions);\n`;

	return out_str;
}

function twoContiguousRegionsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function unknownRegionsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function sashiganeConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function cellCenterLoopNoTouchingConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function cellCenterLoopCanTouchDiagonallyConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function notLoopSizedRegionsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function modularLoopConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function exactlyNPerRow(
	puzzle: PuzzleI,
	n: number,
	target: boolean | number,
	vars_func: (cells: Cell[]) => string
) {
	const grid = puzzle.grid;

	let out_str: string = '';
	out_str += `% Exactly ${n} per row \n`;
	const nrows = grid.nRows;
	for (let i = 0; i < nrows; i++) {
		const row_cells = grid.getRow(i);
		const vars_str = vars_func(row_cells);
		out_str += `constraint count_eq(${vars_str}, ${target}, ${n});\n`;
	}

	return out_str;
}

function exactlyNPerColumn(
	puzzle: PuzzleI,
	n: number,
	target: boolean | number,
	vars_func: (cells: Cell[]) => string
) {
	const grid = puzzle.grid;

	let out_str: string = '';
	out_str += `\n% Exactly ${n} per column \n`;
	const ncols = grid.nCols;
	for (let i = 0; i < ncols; i++) {
		const col_cells = grid.getCol(i);
		const vars_str = vars_func(col_cells);
		out_str += `constraint count_eq(${vars_str}, ${target}, ${n});\n`;
	}

	return out_str;
}

function exactlyNPerRegion(
	puzzle: PuzzleI,
	n: number,
	target: boolean | number,
	vars_func: (cells: Cell[]) => string
) {
	const grid = puzzle.grid;

	let out_str: string = '';
	const gconstraints = puzzle.globalConstraints;
	const unknown_regions = gconstraints.get(TOOLS.UNKNOWN_REGIONS);
	if (!unknown_regions) {
		out_str += `\n% Exactly ${n} per region \n`;
		const regions = grid.getUsedRegions();
		for (const region of regions) {
			const region_cells = grid.getRegion(region);
			const vars_str = vars_func(region_cells);
			out_str += `constraint count_eq(${vars_str}, ${target}, ${n});\n`;
		}
	}

	return out_str;
}

function exactlyNPerRowColumnRegion(
	puzzle: PuzzleI,
	n: number,
	target: boolean | number,
	vars_func: (cells: Cell[]) => string
) {
	let out_str: string = exactlyNPerRow(puzzle, n, target, vars_func);
	out_str += exactlyNPerColumn(puzzle, n, target, vars_func);
	out_str += exactlyNPerRegion(puzzle, n, target, vars_func);

	return out_str;
}

function doublersConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: doublers_grid;\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 1, true, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.DOUBLERS)
	);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, doublers_grid, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = doublers_value_grid_f(board, doublers_grid);\n`;

	return out_str;
}

function negatorsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'negators_grid';

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${grid_name};\n`;

	out_str += exactlyNPerRowColumnRegion(puzzle, 1, true, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.NEGATORS)
	);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, ${grid_name}, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = negators_value_grid_f(board, ${grid_name});\n`;

	return out_str;
}

function fillominoConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function indexerCellsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const name1 = VAR_2D_NAMES.INDEXER_CELLS_GRID;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${name1};\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 2, true, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, name1)
	);

	// values grid
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: values_grid;\n`;
	out_str += `constraint indexer_cells_p(board, ${name1}, values_grid);\n`;

	return out_str;
}

function shikakuConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.SHIKAKU_REGIONS;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name1};\n`;
	out_str += `constraint shikaku_p(${grid_name1});\n`;

	return out_str;
}

function shikakuNoRepeatsInRegionConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `constraint shikaku_no_repeats_in_regions_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.SHIKAKU_REGIONS});\n`;

	return out_str;
}

function caveConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.CAVE_SHADING;
	const grid_name2 = VAR_2D_NAMES.CAVE_REGIONS;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name2};\n`;
	out_str += `constraint cave_p(${grid_name1}, ${grid_name2});\n`;

	return out_str;
}

function renbanCavesConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.CAVE_SHADING;
	const grid_name2 = VAR_2D_NAMES.BOARD_REGIONS;
	const grid_name3 = 'renban_cave_regions';

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name3};\n`;
	out_str += `constraint renban_cave_regions_p(${grid_name1}, ${grid_name2}, ${grid_name3});\n`;
	out_str += `constraint renban_caves_p(${VAR_2D_NAMES.BOARD}, ${grid_name3});\n`;

	return out_str;
}

function galaxiesConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function nexusConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function goldilocksConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function pentominoTillingConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function litsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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
	if (regions.size) out_str += `\n% Exactly 4 shaded cells per region (known regions)\n`;
	for (const region of regions) {
		const region_cells = grid.getRegion(region);
		const shading_vars = cellsToGridVarsStr(region_cells, VAR_2D_NAMES.LITS_SHADING);
		const constraint = `constraint count_eq(${shading_vars}, 1, 4);\n`;
		out_str += constraint;
	}

	return out_str;
}

function norinoriConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.NORINORI_SHADING;

	let out_str: string = '';

	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `constraint norinori_p(${VAR_2D_NAMES.BOARD_REGIONS}, ${grid_name1});\n`;

	const regions = grid.getUsedRegions();
	if (regions.size) out_str += `\n% Exactly 2 shaded cells per region (known regions)\n`;
	for (const region of regions) {
		const region_cells = grid.getRegion(region);
		const shading_vars = cellsToGridVarsStr(region_cells, VAR_2D_NAMES.NORINORI_SHADING);
		const constraint = `constraint count_eq(${shading_vars}, 1, 2);\n`;
		out_str += constraint;
	}

	return out_str;
}

function caveLitsConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
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

function litsBlackAndWhiteStarBattleConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.LITS_SHADING;
	const grid_name2 = VAR_2D_NAMES.STAR_BATTLE;
	const grid_name3 = VAR_2D_NAMES.LITS_WHITE_BLACK_STAR_BATTLE;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name2};\n`;

	// 2 stars per column, row, region
	out_str += exactlyNPerRowColumnRegion(puzzle, 2, 1, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.STAR_BATTLE)
	);

	// no touching diagonally or orthogonally
	out_str += `\n% Star battle stars can't touch orthogonally or diagonally\n`;
	out_str += `constraint star_battle_no_touching_p(${grid_name2});\n`;

	// white and black stars
	out_str += `\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..2: ${grid_name3};\n`;
	// 1 white star and 1 black star per column, row, region
	out_str += `\n% 1 white star per row, column, region\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 1, 1, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.LITS_WHITE_BLACK_STAR_BATTLE)
	);
	out_str += `\n% 1 black star per row, column, region\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 1, 2, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, VAR_2D_NAMES.LITS_WHITE_BLACK_STAR_BATTLE)
	);
	out_str += `constraint black_and_white_star_battle_p(${grid_name2}, ${grid_name3});\n`;
	out_str += `constraint lits_black_and_white_star_battle_p(${grid_name1}, ${grid_name3});\n`;

	return out_str;
}

function norinoriStarBattleConstraint(model: PuzzleModel, tool: TOOLID) {
	// Place one star in each region such that there are exactly two in each row and column.
	// Stars cannot touch each other, even diagonally.
	// Stars cannot be placed on shaded Norinori cells.
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.NORINORI_SHADING;
	const grid_name2 = VAR_2D_NAMES.STAR_BATTLE;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name2};\n`;

	// 2 stars per column, row, 1 per region
	out_str += exactlyNPerColumn(puzzle, 2, 1, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, grid_name2)
	);
	out_str += exactlyNPerRow(puzzle, 2, 1, (cells: Cell[]) => cellsToGridVarsStr(cells, grid_name2));
	out_str += exactlyNPerRegion(puzzle, 1, 1, (cells: Cell[]) =>
		cellsToGridVarsStr(cells, grid_name2)
	);

	// no touching diagonally or orthogonally
	out_str += `\n% Star battle stars can't touch orthogonally or diagonally\n`;
	out_str += `constraint star_battle_no_touching_p(${grid_name2});\n`;

	// Stars cannot be placed on shaded Norinori cells.
	out_str += `\n% Stars cannot be placed on shaded Norinori cells\n`;
	out_str += `constraint norinori_star_battle_not_on_shaded_p(${grid_name1}, ${grid_name2});\n`;

	return out_str;
}

function coordsToIdx(r: number, c: number, n_cols: number) {
	const n = r * n_cols + c + 1;
	return n;
}

function findWalledEdges(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	function edge_wall_vertical(cell1: Cell, cell2: Cell) {
		const edges: [s: number, t: number][] = [];
		const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
		for (let i = -1; i <= 1; i++) {
			const n2 = coordsToIdx(cell2.r + i, cell2.c, grid.nCols);
			edges.push([n1, n2]);
			edges.push([n2, n1]);
		}
		return edges;
	}

	function edge_wall_horizontal(cell1: Cell, cell2: Cell) {
		const edges: [s: number, t: number][] = [];
		const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
		for (let j = -1; j <= 1; j++) {
			const n2 = coordsToIdx(cell2.r, cell2.c + j, grid.nCols);
			edges.push([n1, n2]);
			edges.push([n2, n1]);
		}
		return edges;
	}

	// find edges blocked by walls
	const edges_rem: [s: number, t: number][] = [];
	const lconstraints = puzzle.localConstraints;
	const wall_constraints = lconstraints.get(TOOLS.MAZE_WALL);
	if (wall_constraints) {
		for (const constraint of Object.values(wall_constraints) as CornerLineToolI[]) {
			const coords = constraint.coords;
			if (coords.length === 1) {
				const corner_coord = coords[0];
				const cells_coords = cornerCoordToAdjCellCoords(corner_coord);
				const cells = cells_coords
					.map((_c) => grid.getCell(_c.r, _c.c))
					.filter((cell) => cell !== undefined);
				let n1 = coordsToIdx(cells[0].r, cells[0].c, grid.nCols);
				let n2 = coordsToIdx(cells[3].r, cells[3].c, grid.nCols);
				edges_rem.push([n1, n2]);
				edges_rem.push([n2, n1]);
				n1 = coordsToIdx(cells[1].r, cells[1].c, grid.nCols);
				n2 = coordsToIdx(cells[2].r, cells[2].c, grid.nCols);
				edges_rem.push([n1, n2]);
				edges_rem.push([n2, n1]);
			}
			for (let i = 0; i < coords.length - 1; i++) {
				const edge_coord: GridCoordI = coordsScale(coordsAdd(coords[i], coords[i + 1]), 0.5);
				const cells_coords = cellEdgeToCellCoords(edge_coord);
				const cells = cells_coords
					.map((_c) => grid.getCell(_c.r, _c.c))
					.filter((cell) => cell !== undefined);

				if (cells.length !== 2) continue;
				const [cell1, cell2] = cells;

				if (cell1.r === cell2.r) {
					// vertical border
					let edges = edge_wall_vertical(cell1, cell2);
					edges_rem.push(...edges);
					edges = edge_wall_vertical(cell2, cell1);
					edges_rem.push(...edges);
				} else if (cell1.c === cell2.c) {
					// horizontal border
					let edges = edge_wall_horizontal(cell1, cell2);
					edges_rem.push(...edges);
					edges = edge_wall_horizontal(cell2, cell1);
					edges_rem.push(...edges);
				}
			}
		}
	}
	return edges_rem;
}

function findEdgesBlockedByOneWayDoors(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const edges_rem: [s: number, t: number][] = [];
	const lconstraints = puzzle.localConstraints;
	const one_way_door_constraints = lconstraints.get(TOOLS.ONE_WAY_DOOR);
	if (one_way_door_constraints) {
		for (const constraint of Object.values(one_way_door_constraints) as EdgeToolI[]) {
			const coords = constraint.cells;
			const cells = coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
			const [cell1, cell2] = cells;
			const value = constraint.value;

			const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
			const n2 = coordsToIdx(cell2.r, cell2.c, grid.nCols);
			if (value === '<') {
				edges_rem.push([n1, n2]);
			} else if (value === '>') {
				edges_rem.push([n2, n1]);
			}
		}
	}
	return edges_rem;
}

function constructEdgeList(grid: Grid) {
	const edge_list: [s: number, t: number][] = [];

	for (const cell of grid.getAllCells()) {
		const source = coordsToIdx(cell.r, cell.c, grid.nCols);
		const adj_cells = grid.getNeighboorCells(cell);
		for (const cell2 of adj_cells) {
			const target = coordsToIdx(cell2.r, cell2.c, grid.nCols);
			edge_list.push([source, target]);
		}
	}
	return edge_list;
}

interface TpRes {
	tp_idxs: number[];
	tp_edges: [s: number, t: number][];
	tp_arr: number[][];
	tp_count: number;
}

function teleportConstraints(puzzle: PuzzleI): TpRes {
	const grid = puzzle.grid;
	const tp_edges: [s: number, t: number][] = [];
	const tp_idxs: number[] = [];
	const lconstraints = puzzle.localConstraints;
	const teleport_record = lconstraints.get(TOOLS.TELEPORT);
	const tp_constraints = teleport_record ? (Object.values(teleport_record) as CellToolI[]) : [];
	let tp_count: number = 0;

	const tp_arr: number[][] = Array.from(Array(grid.nRows), () => new Array(grid.nRows).fill(0));

	if (teleport_record) {
		// group teleports by label
		const groups = groupConstraintsByValue(tp_constraints);

		let k = 1;
		for (const group of groups.values()) {
			if (group.length <= 1) continue;
			// for each combination of 2
			for (const [e1, e2] of group.flatMap((v, i) => group.slice(i + 1).map((w) => [v, w]))) {
				const n1 = coordsToIdx(e1.cell.r, e1.cell.c, grid.nCols);
				const n2 = coordsToIdx(e2.cell.r, e2.cell.c, grid.nCols);
				tp_edges.push([n1, n2]);
				tp_edges.push([n2, n1]);
				tp_arr[e1.cell.r][e1.cell.c] = k;
				tp_arr[e2.cell.r][e2.cell.c] = k;
			}
			for (const tp of group) {
				const n1 = coordsToIdx(tp.cell.r, tp.cell.c, grid.nCols);
				tp_idxs.push(n1);
			}

			k++;
		}

		tp_count = groups.size;
	}

	return { tp_idxs, tp_edges, tp_arr, tp_count };
}

function mazeDirectedPathConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = '';

	let edge_list = constructEdgeList(grid);
	// find edges blocked by walls
	const edges_rem = findWalledEdges(puzzle);

	// find edges blocked by one way doors
	const door_edges = findEdgesBlockedByOneWayDoors(puzzle);
	edges_rem.push(...door_edges);

	const lconstraints = puzzle.localConstraints;

	edge_list = edge_list.filter(
		(edge) => !edges_rem.some((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1])
	);

	// add teleport edges
	const tp_res = teleportConstraints(puzzle);
	if (tp_res.tp_edges.length) {
		edge_list.push(...tp_res.tp_edges);
		const array_str = format_2d_array(tp_res.tp_arr);
		const l = tp_res.tp_count;
		out_str += `\n% teleports grid\n`;
		out_str += `array[ROW_IDXS, COL_IDXS] of 0..${l}: teleports = array2d(ROW_IDXS, COL_IDXS, ${array_str});\n`;
	}

	model.edge_list = edge_list;
	console.log(edge_list);
	const n = grid.nRows * grid.nCols;
	const e = edge_list.length;
	const from_str = '[' + edge_list.map((edge) => edge[0]).join(',') + ']';
	const to_str = '[' + edge_list.map((edge) => edge[1]).join(',') + ']';

	out_str += `array[int] of int: dpath_from = ${from_str};\n`;
	out_str += `array[int] of int: dpath_to = ${to_str};\n`;
	out_str += `var 1..${n}: dpath_source;\n`;
	out_str += `var 1..${n}: dpath_target;\n`;
	out_str += `array[1..${n}] of var bool: dpath_ns;\n`;
	out_str += `array[1..${e}] of var bool: dpath_es;\n`;
	out_str += `constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);\n`;

	// TODO: neighboring teleport edges as exception
	out_str += `\n% Direct Path no crossings\n`;
	for (let i = 0; i < grid.nRows - 1; i++) {
		for (let j = 0; j < grid.nCols - 1; j++) {
			const cell1 = grid.getCell(i, j);
			const cell2 = grid.getCell(i, j + 1);
			const cell3 = grid.getCell(i + 1, j);
			const cell4 = grid.getCell(i + 1, j + 1);
			if (!cell1 || !cell2 || !cell3 || !cell4) continue;
			const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
			const n2 = coordsToIdx(cell2.r, cell2.c, grid.nCols);
			const n3 = coordsToIdx(cell3.r, cell3.c, grid.nCols);
			const n4 = coordsToIdx(cell4.r, cell4.c, grid.nCols);

			const edges: [s: number, t: number][] = [
				[n1, n4],
				[n4, n1],
				[n2, n3],
				[n3, n2]
			];
			const edge_idxs = edges
				.map((edge) => edge_list.findIndex((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1]))
				.filter((idx) => idx !== -1);
			if (edge_idxs.length) {
				const aux = edge_idxs.map((idx) => `dpath_es[${idx + 1}]`).join(',');
				out_str += `constraint sum([${aux}]) <= 1;\n`;
			}
		}
	}

	// at most one edge for each teleport
	const teleport_record = lconstraints.get(TOOLS.TELEPORT);
	const tp_constraints = teleport_record ? (Object.values(teleport_record) as CellToolI[]) : [];
	if (tp_res.tp_count > 0) {
		out_str += `\n% At most 1 edge per teleporter\n`;
		for (const constraint of tp_constraints) {
			const coord = constraint.cell;
			const cell1 = grid.getCell(coord.r, coord.c);
			if (!cell1) continue;
			const neighbours = grid.getNeighboorCells(cell1);
			const n1 = coordsToIdx(cell1.r, cell1.c, grid.nCols);
			const edges: [s: number, t: number][] = [];
			// if two endpoints of a teleport happen to be neighbours
			// then that edge connecting the two teleports does not count to
			// for this constraint
			for (const cell2 of neighbours) {
				const match = tp_constraints.some(
					(tp) => tp.cell.r === cell2.r && tp.cell.c == cell2.c && tp.value === constraint.value
				);
				if (match) continue;
				const n2 = coordsToIdx(cell2.r, cell2.c, grid.nCols);
				edges.push([n1, n2]);
				edges.push([n2, n1]);
			}
			const edge_idxs = edges
				.map((edge) => edge_list.findIndex((edge2) => edge[0] === edge2[0] && edge[1] === edge2[1]))
				.filter((idx) => idx !== -1);
			if (edge_idxs.length) {
				const aux = edge_idxs.map((idx) => `dpath_es[${idx + 1}]`).join(',');
				out_str += `constraint sum([${aux}]) <= 1;\n`;
			}
		}
	}

	return out_str;
}

function chaosConstructionSuguruConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'suguru_regions';
	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name};\n`;
	out_str += `constraint chaos_construction_suguru_p(board, ${grid_name});\n`;
	// out_str += `constraint max_grid_val_p(board, 4);\n`;

	return out_str;
}

function connectFourConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'connect_four';
	let out_str: string = '% 1 - Red, 2 - Yellow\n';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..2: ${grid_name};\n`;

	return out_str;
}

function connectFourDrawConstraint(model: PuzzleModel, tool: TOOLID) {
	let out_str: string = '';
	out_str += `constraint connect_four_draw_p(${VAR_2D_NAMES.CONNECT_FOUR});\n`;

	return out_str;
}

function connectFourAdjacentRedsDifferentParityConstraint(model: PuzzleModel, tool: TOOLID) {
	let out_str: string = '';
	out_str += `constraint connect_four_adjacent_reds_different_parity_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.CONNECT_FOUR});\n`;

	return out_str;
}

function connectFourAdjacentYellowsMinimumDifferenceAtLeast3Constraint(
	model: PuzzleModel,
	tool: TOOLID
) {
	let out_str: string = '';
	out_str += `constraint connect_four_adjacent_yellows_difference_at_least_x_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.CONNECT_FOUR}, 3);\n`;

	return out_str;
}

type ConstraintF = (model: PuzzleModel, tool: TOOLID) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.FILLOMINO, fillominoConstraint],
	[TOOLS.CAVE, caveConstraint],
	[TOOLS.GALAXIES, galaxiesConstraint],
	[TOOLS.YIN_YANG, yinYangConstraint],
	[TOOLS.SHIKAKU, shikakuConstraint],
	[TOOLS.SHIKAKU_NO_REPEATS_IN_REGION, shikakuNoRepeatsInRegionConstraint],
	[TOOLS.NORINORI, norinoriConstraint],
	[TOOLS.NURIMISAKI, nurimisakiConstraint],
	[TOOLS.NURIKABE, nurikabeConstraint],
	[TOOLS.NURIKABE_NO_REPEATS_IN_ISLANDS, nurikabeNoRepeatsInIslandsConstraint],
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
	[TOOLS.INDEXER_CELLS, indexerCellsConstraint],

	[TOOLS.PENTOMINO_TILLING, pentominoTillingConstraint],
	[TOOLS.LITS, litsConstraint],
	[TOOLS.CAVE_LITS, caveLitsConstraint],
	[TOOLS.LITS_BLACK_WHITE_STAR_BATTLE, litsBlackAndWhiteStarBattleConstraint],
	[TOOLS.NORINORI_STAR_BATTLE, norinoriStarBattleConstraint],

	[TOOLS.RENBAN_CAVES, renbanCavesConstraint],
	[TOOLS.MAZE_DIRECTED_PATH, mazeDirectedPathConstraint],

	[TOOLS.CHAOS_CONSTRUCTION_SUGURU, chaosConstructionSuguruConstraint],

	[TOOLS.CONNECT_FOUR, connectFourConstraint],
	[TOOLS.CONNECT_FOUR_DRAW, connectFourDrawConstraint],
	[
		TOOLS.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,
		connectFourAdjacentRedsDifferentParityConstraint
	],
	[
		TOOLS.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,
		connectFourAdjacentYellowsMinimumDifferenceAtLeast3Constraint
	]
]);

export function undeterminedRegionsConstraints(model: PuzzleModel): string {
	let out_str = '';

	const puzzle = model.puzzle;
	const gconstraints = puzzle.globalConstraints;
	for (const [toolId, value] of gconstraints.entries()) {
		if (!value) continue;
		const constraintF = tool_map.get(toolId);
		if (!constraintF) continue;

		let constraint_str = constraintF(model, toolId);
		constraint_str = addHeader(constraint_str, `${toolId}`);
		out_str += constraint_str;
	}

	return out_str;
}
