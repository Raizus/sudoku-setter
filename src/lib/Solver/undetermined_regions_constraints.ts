import type { EdgeToolI } from '../Puzzle/Constraints/EdgeConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	addHeader,
	cellsToGridVarsStr,
	format_2d_array,
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

function exactlyNPerRowColumnRegion(
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

	// one doubler per column
	out_str += `\n% Exactly ${n} per column \n`;
	const ncols = grid.nCols;
	for (let i = 0; i < ncols; i++) {
		const col_cells = grid.getCol(i);
		const vars_str = vars_func(col_cells);
		out_str += `constraint count_eq(${vars_str}, ${target}, ${n});\n`;
	}

	// one doubler per region
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

function mazeDirectedPathConstraint(model: PuzzleModel, tool: TOOLID) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	function constructEdgeList() {
		const edge_list: [s: number, t: number][] = [];

		for (const cell of grid.getAllCells()) {
			const source = cell.r * grid.nCols + cell.c + 1;
			const adj_cells = grid.getNeighboorCells(cell);
			for (const cell2 of adj_cells) {
				const target = cell2.r * grid.nCols + cell2.c + 1;
				edge_list.push([source, target]);
			}
		}
		return edge_list;
	}

	const edge_list = constructEdgeList();
	model.edge_list = edge_list;
	const n = grid.nRows * grid.nCols;
	const e = edge_list.length;
	const from_str = '[' + edge_list.map((edge) => edge[0]).join(',') + ']';
	const to_str = '[' + edge_list.map((edge) => edge[1]).join(',') + ']';

	let out_str: string = '';
	out_str += `array[int] of int: dpath_from = ${from_str};\n`;
	out_str += `array[int] of int: dpath_to = ${to_str};\n`;
	out_str += `var 1..${n}: dpath_source;\n`;
	out_str += `var 1..${n}: dpath_target;\n`;
	out_str += `array[1..${n}] of var bool: dpath_ns;\n`;
	out_str += `array[1..${e}] of var bool: dpath_es;\n`;
	out_str += `constraint dpath(dpath_from, dpath_to, dpath_source, dpath_target, dpath_ns, dpath_es);\n`;

	function remove_edge(n1: number, n2: number) {
		const edge_id = edge_list.findIndex((edge) => edge[0] === n1 && edge[1] === n2);
		if (edge_id != -1) out_str += `constraint dpath_es[${edge_id + 1}] = false;\n`;
	}

	function edge_constraints_1(_cell1: Cell, _cell2: Cell) {
		const n1 = _cell1.r * grid.nCols + _cell1.c + 1;
		for (let i = -1; i <= 1; i++) {
			const n2 = (_cell2.r + i) * grid.nCols + _cell2.c + 1;

			remove_edge(n1, n2);
			remove_edge(n2, n1);
		}
	}

	function edge_constraints_2(_cell1: Cell, _cell2: Cell) {
		const n1 = _cell1.r * grid.nCols + _cell1.c + 1;
		for (let j = -1; j <= 1; j++) {
			const n2 = _cell2.r * grid.nCols + (_cell2.c + j) + 1;

			remove_edge(n1, n2);
			remove_edge(n2, n1);
		}
	}

	const lconstraints = puzzle.localConstraints;
	const wall_constraints = lconstraints.get(TOOLS.MAZE_WALL);
	if (!wall_constraints) return out_str;
	for (const constraint of Object.values(wall_constraints) as EdgeToolI[]) {
		const cells_coords = constraint.cells;
		const cells = cells_coords
			.map((coord) => grid.getCell(coord.r, coord.c))
			.filter((cell) => !!cell);
		const [cell1, cell2] = cells;

		if (cell1.r === cell2.r) {
			// vertical border
			edge_constraints_1(cell1, cell2);
			edge_constraints_1(cell2, cell1);
		} else if (cell1.c === cell2.c) {
			// horizontal border
			edge_constraints_2(cell1, cell2);
			edge_constraints_2(cell2, cell1);
		}
	}

	return out_str;
}

type ConstraintF = (model: PuzzleModel, tool: TOOLID) => string;

const tool_map = new Map<string, ConstraintF>([
	[TOOLS.FILLOMINO, fillominoConstraint],
	[TOOLS.CAVE, caveConstraint],
	[TOOLS.GALAXIES, galaxiesConstraint],
	[TOOLS.YIN_YANG, yinYangConstraint],
	[TOOLS.NURIMISAKI, nurimisakiConstraint],
	[TOOLS.NURIKABE, nurikabeConstraint],
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
	[TOOLS.CAVE_LITS, caveLitsConstraint],
	[TOOLS.LITS_BLACK_WHITE_STAR_BATTLE, litsBlackAndWhiteStarBattleConstraint],

	[TOOLS.RENBAN_CAVES, renbanCavesConstraint],
	[TOOLS.MAZE_DIRECTED_PATH, mazeDirectedPathConstraint]
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
