import { range } from 'lodash';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS, type TOOLID } from '../Puzzle/Tools';
import {
	adjCellPairGen,
	cellsToGridVarsStr,
	cellToGridVarName,
	cellToVarName,
	exactlyNPerColumn,
	exactlyNPerRegion,
	exactlyNPerRow,
	exactlyNPerRowColumnRegion,
	PuzzleModel,
	VAR_2D_NAMES
} from './solver_utils';
import type { ConstraintsElement } from '../Puzzle/Constraints/ElementsDict';
import { caveConstraint } from './cave_constraints';
import { connectFourConstraint } from './connect_four_constraints';
import { galaxiesConstraint } from './galaxy_constraints';
import { cellCenterLoopNoTouchingConstraint } from './loop_constraints';
import { mazeDirectedPathConstraint } from './directed_path_constraints';
import { yinYangConstraint } from './yin_yang_constraints';
import {
	doublersConstraint,
	indexerCellsConstraint,
	negatorsConstraint
} from './value_modifier_constraints';

function nurimisakiPathGermanWhispersConstraint(puzzle: PuzzleI, toolId: TOOLID): string {
	const grid = puzzle.grid;
	let out_str: string = `\n% ${toolId}\n`;
	for (const [cell1, cell2] of adjCellPairGen(grid)) {
		const var1 = cellToVarName(cell1);
		const var2 = cellToVarName(cell2);

		const nurimisaki1 = cellToGridVarName(cell1, VAR_2D_NAMES.NURIMISAKI);
		const nurimisaki2 = cellToGridVarName(cell2, VAR_2D_NAMES.NURIMISAKI);

		const constraint_str = `constraint (${nurimisaki1} == 0 /\\ ${nurimisaki2} == 0) -> abs(${var1} - ${var2}) >= 5;\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function nurimisakiConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;\n`;
	out_str += `constraint nurimisaki_p(nurimisaki);\n`;

	if (!element.negative_constraints) return out_str;
	const nurimisaki_path_german_whispers =
		!!element.negative_constraints[TOOLS.NURIMISAKI_PATH_GERMAN_WHISPERS];

	if (nurimisaki_path_german_whispers) {
		out_str += nurimisakiPathGermanWhispersConstraint(
			puzzle,
			TOOLS.NURIMISAKI_PATH_GERMAN_WHISPERS
		);
	}

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

function nurikabeConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: nurikabe_shading;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: nurikabe_regions;\n`;
	out_str += `constraint nurikabe_p(nurikabe_shading, nurikabe_regions);\n`;

	if (!element.negative_constraints) return out_str;
	const nurikabe_no_repeats_in_islands =
		!!element.negative_constraints[TOOLS.NURIKABE_NO_REPEATS_IN_ISLANDS];

	if (nurikabe_no_repeats_in_islands) {
		out_str += nurikabeNoRepeatsInIslandsConstraint(model, TOOLS.NURIKABE_NO_REPEATS_IN_ISLANDS);
	}

	return out_str;
}

function twoContiguousRegionsConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;\n`;
	out_str += `constraint two_contiguous_regions_p(two_contiguous_regions);\n`;

	return out_str;
}

function chaosConstructionConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	const n_regions = Math.max(grid.nCols, grid.nRows);
	const reg_idxs = range(1, n_regions + 1);
	const reg_idxs_str = '[' + reg_idxs.join(',') + ']';

	let out_str: string = ``;
	out_str += `array[ROW_IDXS, COL_IDXS] of var ${1}..${n_regions}: unknown_regions;\n`;
	out_str += `constraint chaos_construction_p(unknown_regions, ${reg_idxs_str}, ${n_regions});\n`;
	out_str += `constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS, ${reg_idxs_str});\n`;

	if (!element.negative_constraints) return out_str;
	const no_2x2 =
		!!element.negative_constraints[TOOLS.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION];
	if (no_2x2) {
		out_str += `constraint chaos_construction_no_2x2_belongs_to_one_region_p(unknown_regions);\n`;
	}

	return out_str;
}

function numberedChaosConstructionConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	const grid_name = VAR_2D_NAMES.UNKNOWN_REGIONS;

	const n_regions = Math.max(grid.nCols, grid.nRows);
	const reg_idxs = range(1, n_regions + 1);
	const reg_idxs_str = '[' + reg_idxs.join(',') + ']';
	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var ${1}..${n_regions}: ${grid_name};\n`;
	out_str += `constraint numbered_chaos_construction_p(${VAR_2D_NAMES.BOARD}, ${grid_name}, ${reg_idxs_str}, ${n_regions});\n`;
	out_str += `constraint no_repeats_in_unknown_regions_p(${VAR_2D_NAMES.BOARD}, ${grid_name}, ALLOWED_DIGITS, ${reg_idxs_str});\n`;

	return out_str;
}

function sashiganeConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: sashigane;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: sashigane_bends;\n`;
	out_str += `constraint sashigane_adjacency_p(sashigane);\n`;
	out_str += `constraint sashigane_bend_bools_p(sashigane, sashigane_bends);\n`;
	out_str += `constraint sashigane_no_repeats_in_each_region_p(board, sashigane, ALLOWED_DIGITS);\n`;
	out_str += `constraint sashigane_links_to_bends(sashigane, sashigane_bends);\n`;

	return out_str;
}

function fillominoConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = VAR_2D_NAMES.FILLOMINO_REGIONS;
	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name};\n`;
	out_str += `constraint fillomino_p(board, ${grid_name});\n`;

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

function shikakuConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.SHIKAKU_REGIONS;

	let out_str: string = `\n% ${tool}\n`;
	const n_rows = grid.nRows;
	const n_cols = grid.nCols;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name1};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${n_rows}: ${VAR_2D_NAMES.SHIKAKU_HEIGHT};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${n_cols}: ${VAR_2D_NAMES.SHIKAKU_WIDTH};\n`;
	out_str += `constraint shikaku_p(${grid_name1}, ${VAR_2D_NAMES.SHIKAKU_WIDTH}, ${VAR_2D_NAMES.SHIKAKU_HEIGHT});\n`;

	if (!element.negative_constraints) return out_str;
	const shikaku_no_repeats_in_islands =
		!!element.negative_constraints[TOOLS.SHIKAKU_NO_REPEATS_IN_REGION];

	if (shikaku_no_repeats_in_islands) {
		out_str += shikakuNoRepeatsInRegionConstraint(model, TOOLS.SHIKAKU_NO_REPEATS_IN_REGION);
	}

	return out_str;
}

function nexusConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;\n`;
	out_str += `\nconstraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);\n`;

	return out_str;
}

function goldilocksConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..2: goldilocks_regions;\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: values_grid;\n`;
	out_str += `constraint goldilocks_zone_p(goldilocks_regions);\n`;
	out_str += `constraint goldilocks_values_p(board, values_grid, goldilocks_regions);\n`;

	return out_str;
}

function pentominoTillingConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const num_pentominoes = 12;
	const grid_name = VAR_2D_NAMES.PENTOMINO_REGIONS;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${num_pentominoes}: ${grid_name};\n`;
	out_str += `constraint pentomino_tilling_p(${grid_name});\n`;

	return out_str;
}

function litsConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const lits_shading = VAR_2D_NAMES.LITS_SHADING;
	const lits_region = VAR_2D_NAMES.LITS_REGIONS;
	const lits_grid = VAR_2D_NAMES.LITS_GRID;
	const board_regions = VAR_2D_NAMES.BOARD_REGIONS;

	const regions = [...grid.getUsedRegions()];
	regions.sort();
	const min_region = Math.min(...regions);
	const max_region = Math.max(...regions);

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${lits_shading};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..4: ${lits_region};\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${regions.length}: ${lits_grid};\n`;
	out_str += `constraint lits_shading_p(${lits_shading});\n`;
	out_str += `constraint lits_shading_ids_p(${lits_shading}, ${lits_region});\n`;
	out_str += `constraint lits_region_and_ids_p(${board_regions}, ${lits_region});\n`;
	out_str += `constraint lits_tetromino_shapes_p(${lits_region});\n`;
	out_str += `constraint lits_grid_p(${lits_grid}, ${board_regions}, ${lits_shading}, ${min_region}..${max_region});\n`;

	if (regions.length) out_str += `\n% Exactly 4 shaded cells per region (known regions)\n`;
	for (const region of regions) {
		const region_cells = grid.getRegion(region);
		const shading_vars = cellsToGridVarsStr(region_cells, VAR_2D_NAMES.LITS_SHADING);
		const constraint = `constraint count_eq(${shading_vars}, 1, 4);\n`;
		out_str += constraint;
	}

	return out_str;
}

function norinoriConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.NORINORI_SHADING;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name1};\n`;
	out_str += `constraint norinori_p(${VAR_2D_NAMES.BOARD_REGIONS}, ${grid_name1});\n`;

	const regions = grid.getUsedRegions();
	if (regions.size) out_str += `\n% Exactly 2 shaded cells per region (known regions)\n`;
	out_str += exactlyNPerRegion(puzzle, 2, 1, VAR_2D_NAMES.NORINORI_SHADING);

	return out_str;
}

function norinoriStarBattleConstraint(model: PuzzleModel, element: ConstraintsElement) {
	// Place one star in each region such that there are exactly two in each row and column.
	// Stars cannot touch each other, even diagonally.
	// Stars cannot be placed on shaded Norinori cells.
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.NORINORI_SHADING;
	const grid_name2 = VAR_2D_NAMES.STAR_BATTLE;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name2};\n`;

	// 2 stars per column, row, 1 per region
	out_str += exactlyNPerColumn(2, 1, grid_name2);
	out_str += exactlyNPerRow(2, 1, grid_name2);
	out_str += exactlyNPerRegion(puzzle, 1, 1, grid_name2);

	// no touching diagonally or orthogonally
	out_str += `\n% Star battle stars can't touch orthogonally or diagonally\n`;
	out_str += `constraint star_battle_no_touching_p(${grid_name2});\n`;

	// Stars cannot be placed on shaded Norinori cells.
	out_str += `\n% Stars cannot be placed on shaded Norinori cells\n`;
	out_str += `constraint norinori_star_battle_not_on_shaded_p(${grid_name1}, ${grid_name2});\n`;

	return out_str;
}

function litsBlackAndWhiteStarBattleConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.LITS_SHADING;
	const grid_name2 = VAR_2D_NAMES.STAR_BATTLE;
	const grid_name3 = VAR_2D_NAMES.LITS_WHITE_BLACK_STAR_BATTLE;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name2};\n`;

	// 2 stars per column, row, region
	out_str += exactlyNPerRowColumnRegion(puzzle, 2, 1, VAR_2D_NAMES.STAR_BATTLE);

	// no touching diagonally or orthogonally
	out_str += `\n% Star battle stars can't touch orthogonally or diagonally\n`;
	out_str += `constraint star_battle_no_touching_p(${grid_name2});\n`;

	// white and black stars
	out_str += `\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..2: ${grid_name3};\n`;
	// 1 white star and 1 black star per column, row, region
	out_str += `\n% 1 white star per row, column, region\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 1, 1, VAR_2D_NAMES.LITS_WHITE_BLACK_STAR_BATTLE);
	out_str += `\n% 1 black star per row, column, region\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 1, 2, VAR_2D_NAMES.LITS_WHITE_BLACK_STAR_BATTLE);
	out_str += `constraint black_and_white_star_battle_p(${grid_name2}, ${grid_name3});\n`;
	out_str += `constraint lits_black_and_white_star_battle_p(${grid_name1}, ${grid_name3});\n`;

	return out_str;
}

function chaosConstructionSuguruConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = VAR_2D_NAMES.SUGURU_REGIONS;
	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name};\n`;
	out_str += `constraint chaos_construction_suguru_p(board, ${grid_name});\n`;
	// out_str += `constraint max_grid_val_p(board, 4);\n`;

	return out_str;
}

export function buildYourOwnKillerCagesConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.BYOKC_GRID;

	let out_str: string = ``;
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name1};\n`;
	out_str += `constraint byok_no_repeats_in_regions(${VAR_2D_NAMES.BOARD}, ${grid_name1});\n`;
	return out_str;
}

function shadedBoundariesConstraint(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	const grid_name = VAR_2D_NAMES.SHADED_BOUNDARIES_REGIONS;
	const grid_name2 = VAR_2D_NAMES.SHADED_BOUNDARIES_VERTICAL;
	const grid_name3 = VAR_2D_NAMES.SHADED_BOUNDARIES_HORIZONTAL;
	const nrows = grid.nRows;
	const ncols = grid.nCols;
	const vert_idxs = `0..${nrows - 2}`;
	const horiz_idxs = `0..${ncols - 2}`;

	// \n% ${tool}\n
	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name};\n`;
	out_str += `array[${vert_idxs}, COL_IDXS] of var bool: ${grid_name2};\n`;
	out_str += `array[ROW_IDXS, ${horiz_idxs}] of var bool: ${grid_name3};\n`;
	out_str += `constraint shaded_boundaries_two_regions_p(${grid_name}, ${grid_name3}, ${grid_name2});\n`;

	if (!element.negative_constraints) return out_str;
	const adjcent_cell_sum_is_even_boundary =
		!!element.negative_constraints[TOOLS.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN];

	if (adjcent_cell_sum_is_even_boundary) {
		out_str += `constraint shaded_boundaries_adjacent_sum_is_even_boundary_vertical_p(${VAR_2D_NAMES.BOARD}, ${grid_name2});\n`;
		out_str += `constraint shaded_boundaries_adjacent_sum_is_even_boundary_horizontal_p(${VAR_2D_NAMES.BOARD}, ${grid_name3});\n`;
		out_str += `constraint shaded_boundaries_adjacent_sum_is_even_boundary_region_p(${VAR_2D_NAMES.BOARD}, ${grid_name});\n`;
	}

	return out_str;
}

type ElementF2 = (model: PuzzleModel, element: ConstraintsElement) => string;

const tool_map = new Map<string, ElementF2>([
	[TOOLS.DOUBLERS, doublersConstraint],
	[TOOLS.NEGATORS, negatorsConstraint],
	[TOOLS.INDEXER_CELLS, indexerCellsConstraint],
	[TOOLS.CAVE, caveConstraint],
	[TOOLS.CONNECT_FOUR, connectFourConstraint],
	[TOOLS.GALAXIES, galaxiesConstraint],
	[TOOLS.CELL_CENTER_LOOP_NO_TOUCHING, cellCenterLoopNoTouchingConstraint],
	[TOOLS.MAZE_DIRECTED_PATH, mazeDirectedPathConstraint],
	[TOOLS.YIN_YANG, yinYangConstraint],
	[TOOLS.NURIMISAKI, nurimisakiConstraint],
	[TOOLS.NURIKABE, nurikabeConstraint],
	[TOOLS.SHIKAKU, shikakuConstraint],
	[TOOLS.PENTOMINO_TILLING, pentominoTillingConstraint],
	[TOOLS.CHAOS_CONSTRUCTION, chaosConstructionConstraint],
	[TOOLS.NUMBERED_CHAOS_CONSTRUCTION, numberedChaosConstructionConstraint],
	[TOOLS.CHAOS_CONSTRUCTION_SUGURU, chaosConstructionSuguruConstraint],
	[TOOLS.TWO_CONTIGUOUS_REGIONS, twoContiguousRegionsConstraint],
	[TOOLS.NORINORI, norinoriConstraint],
	[TOOLS.NORINORI_STAR_BATTLE, norinoriStarBattleConstraint],
	[TOOLS.SASHIGANE, sashiganeConstraint],
	[TOOLS.LITS, litsConstraint],
	[TOOLS.LITS_BLACK_WHITE_STAR_BATTLE, litsBlackAndWhiteStarBattleConstraint],
	[TOOLS.FILLOMINO, fillominoConstraint],
	[TOOLS.NEXUS, nexusConstraint],
	[TOOLS.GOLDILOCKS_ZONE, goldilocksConstraint],
	[TOOLS.BUILD_YOUR_OWN_KILLER_CAGES, buildYourOwnKillerCagesConstraint],
	[TOOLS.SHADED_BOUNDARIES, shadedBoundariesConstraint]
]);

export function undeterminedRegionsElements(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const tool_id = element.tool_id;
	const elementF = tool_map.get(tool_id);
	if (elementF) {
		const element_str = elementF(model, element);
		out_str += element_str;
	}

	return out_str;
}
