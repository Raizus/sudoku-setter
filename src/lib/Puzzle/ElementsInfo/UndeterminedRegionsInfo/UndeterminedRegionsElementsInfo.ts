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
	VAR_2D_NAMES,
	type PuzzleAuxI
} from '$src/lib/Solver/solver_utils';
import { range } from 'lodash';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES, type TOOLID } from '../../Tools';

function chaosConstructionElement(model: PuzzleModel, element: ConstraintsElement) {
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

export const chaosConstructionInfo: SquareCellElementInfo = {
	toolId: TOOLS.CHAOS_CONSTRUCTION,

	negative_constraints: [
		{
			toolId: TOOLS.CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION,
			description: 'Regions cannot cover any 2x2 section of the grid.'
		}
	],

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: chaosConstructionElement
};

function numberedChaosConstructionElement(model: PuzzleModel, element: ConstraintsElement) {
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
	let out_str: string = ``;
	out_str += `array[ROW_IDXS, COL_IDXS] of var ${1}..${n_regions}: ${grid_name};\n`;
	out_str += `constraint numbered_chaos_construction_p(${VAR_2D_NAMES.BOARD}, ${grid_name}, ${reg_idxs_str}, ${n_regions});\n`;
	out_str += `constraint no_repeats_in_unknown_regions_p(${VAR_2D_NAMES.BOARD}, ${grid_name}, ALLOWED_DIGITS, ${reg_idxs_str});\n`;

	return out_str;
}

export const numberedChaosConstructionInfo: SquareCellElementInfo = {
	toolId: TOOLS.NUMBERED_CHAOS_CONSTRUCTION,

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: numberedChaosConstructionElement
};

function chaosConstructionSuguruElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = VAR_2D_NAMES.SUGURU_REGIONS;
	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name};\n`;
	out_str += `constraint chaos_construction_suguru_p(board, ${grid_name});\n`;
	// out_str += `constraint max_grid_val_p(board, 4);\n`;

	return out_str;
}

export const chaosConstructionSuguruInfo: SquareCellElementInfo = {
	toolId: TOOLS.CHAOS_CONSTRUCTION_SUGURU,

	meta: {
		description:
			'In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: chaosConstructionSuguruElement
};

function nurimisakiPathGermanWhispersConstraint(puzzle: PuzzleAuxI, toolId: TOOLID): string {
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

function nurimisakiElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
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

export const nurimisakiInfo: SquareCellElementInfo = {
	toolId: TOOLS.NURIMISAKI,

	negative_constraints: [
		{
			toolId: TOOLS.NURIMISAKI_PATH_GERMAN_WHISPERS,
			description: 'Cells Along Nurimisaki Path Have A Difference Of At Least 5.'
		}
	],

	meta: {
		description:
			'Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: nurimisakiElement
};

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

function nurikabeElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
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

export const nurikabeInfo: SquareCellElementInfo = {
	toolId: TOOLS.NURIKABE,

	negative_constraints: [
		{
			toolId: TOOLS.NURIKABE_NO_REPEATS_IN_ISLANDS,
			description: 'Digits may not repeat within a nurikabe island.'
		}
	],

	meta: {
		description:
			'Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: nurikabeElement
};

function twoContiguousRegionsElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outisde the grid.`);
		return '';
	}

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;\n`;
	out_str += `constraint two_contiguous_regions_p(two_contiguous_regions);\n`;

	return out_str;
}

export const twoContiguousRegionsInfo: SquareCellElementInfo = {
	toolId: TOOLS.TWO_CONTIGUOUS_REGIONS,

	meta: {
		description: 'Divide the grid into two sets of contiguous cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: twoContiguousRegionsElement
};

function sashiganeElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

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

export const sashiganeRegionsInfo: SquareCellElementInfo = {
	toolId: TOOLS.SASHIGANE,

	meta: {
		description:
			'Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: sashiganeElement
};

function norinoriElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

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
	out_str += exactlyNPerRegion(puzzle, 2, 1, VAR_2D_NAMES.NORINORI_SHADING);

	return out_str;
}

export const norinoriInfo: SquareCellElementInfo = {
	toolId: TOOLS.NORINORI,

	meta: {
		description:
			'Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: norinoriElement
};

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

function shikakuElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name1 = VAR_2D_NAMES.SHIKAKU_REGIONS;

	let out_str: string = '';
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

export const shikakuInfo: SquareCellElementInfo = {
	toolId: TOOLS.SHIKAKU,

	negative_constraints: [
		{
			toolId: TOOLS.SHIKAKU_NO_REPEATS_IN_REGION,
			description: 'Digits cannot repeat within a shikaku region.'
		}
	],

	meta: {
		description:
			'Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: shikakuElement
};

function norinoriStarBattleElement(model: PuzzleModel, element: ConstraintsElement) {
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

export const norinoriStarBattleInfo: SquareCellElementInfo = {
	toolId: TOOLS.NORINORI_STAR_BATTLE,

	meta: {
		description:
			'Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: norinoriStarBattleElement
};

function goldilocksElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

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

export const goldilocksZoneInfo: SquareCellElementInfo = {
	toolId: TOOLS.GOLDILOCKS_ZONE,

	meta: {
		description:
			"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: goldilocksElement
};

function twilightCaveFillominoRegionsShadingElement(): string {
	let out_str: string = '';
	out_str += `constraint twilight_cave_fillomino_region_shading(cave_shading, fillomino_area);\n`;
	return out_str;
}

export const twilightCaveFillominoRegionShadingInfo: SquareCellElementInfo = {
	toolId: TOOLS.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,

	meta: {
		description:
			'Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: twilightCaveFillominoRegionsShadingElement
};

function yinYangFillominoParityElement(): string {
	let out_str: string = '';
	out_str += `constraint yin_yang_fillomino_parity_p(board, yin_yang);\n`;
	return out_str;
}

export const yinYangFillominoParityInfo: SquareCellElementInfo = {
	toolId: TOOLS.YIN_YANG_FILLOMINO_PARITY,

	meta: {
		description: 'All odd polyominoes are shaded, while all even polyominoes are unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: yinYangFillominoParityElement
};

function pentominoTillingElement(model: PuzzleModel, element: ConstraintsElement) {
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

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..${num_pentominoes}: ${grid_name};\n`;
	out_str += `constraint pentomino_tilling_p(${grid_name});\n`;

	return out_str;
}

export const pentominoTillingInfo: SquareCellElementInfo = {
	toolId: TOOLS.PENTOMINO_TILLING,

	// negative_constraints: [
	// 	{
	// 		toolId: TOOLS.PENTOMINO_TILLING_NO_EMPTY_CELLS,
	// 		description: 'Every cell in the grid belongs to a pentomino.'
	// 	}
	// ],

	meta: {
		description:
			'Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: pentominoTillingElement
};

function litsBlackAndWhiteStarBattleElement(model: PuzzleModel, element: ConstraintsElement) {
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

export const litsBlackAndWhiteStarBattleInfo: SquareCellElementInfo = {
	toolId: TOOLS.LITS_BLACK_WHITE_STAR_BATTLE,

	meta: {
		description:
			'Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: litsBlackAndWhiteStarBattleElement
};

function fillominoElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = VAR_2D_NAMES.FILLOMINO_REGIONS;
	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: ${grid_name};\n`;
	out_str += `constraint fillomino_p(board, ${grid_name});\n`;

	return out_str;
}

export const fillominoInfo: SquareCellElementInfo = {
	toolId: TOOLS.FILLOMINO,

	meta: {
		description:
			'Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: fillominoElement
};

function litsElement(model: PuzzleModel, element: ConstraintsElement) {
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

	let out_str: string = ``;
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

export const LITSInfo: SquareCellElementInfo = {
	toolId: TOOLS.LITS,

	meta: {
		description:
			'Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: litsElement
};

export function buildYourOwnKillerCagesElement(model: PuzzleModel, element: ConstraintsElement) {
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

export const buildYourOwnKillerCagesInfo: SquareCellElementInfo = {
	toolId: TOOLS.BUILD_YOUR_OWN_KILLER_CAGES,

	meta: {
		description:
			'A cage is a set of orthogonally connected cells which do not contain repeated digits. Cages may not overlap each other.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: buildYourOwnKillerCagesElement
};

function shadedBoundariesElement(model: PuzzleModel, element: ConstraintsElement) {
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

export const shadedBoundariesInfo: SquareCellElementInfo = {
	toolId: TOOLS.SHADED_BOUNDARIES,

	negative_constraints: [
		{
			toolId: TOOLS.SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN,
			description:
				'Shade the boundary between adjacent digits if and only if they sum to an even number.'
		}
	],

	meta: {
		description:
			'Shade the boundary between adjacent. Shaded boundaries must divide the grid into exactly 2 regions. There may be shaded boundaries that lie within a region without fully dividing it, as allowed by other rules.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: shadedBoundariesElement
};

function starBattleElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name2 = VAR_2D_NAMES.STAR_BATTLE;

	let out_str: string = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: ${grid_name2};\n`;

	// 2 stars per column, row, 1 per region
	out_str += exactlyNPerColumn(2, 1, grid_name2);
	out_str += exactlyNPerRow(2, 1, grid_name2);
	out_str += exactlyNPerRegion(puzzle, 2, 1, grid_name2);

	// no touching diagonally or orthogonally
	out_str += `\n% Star battle stars can't touch orthogonally or diagonally\n`;
	out_str += `constraint star_battle_no_touching_p(${grid_name2});\n`;

	return out_str;
}

export const starBattleInfo: SquareCellElementInfo = {
	toolId: TOOLS.STAR_BATTLE,

	meta: {
		description:
			"Each row, column, and 3x3 box contains exactly 2 stars. Stars can't be within a kings move (in chess) from each other.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: starBattleElement
};

function oneStarPerGalaxyElement() {
	const grid_name2 = VAR_2D_NAMES.STAR_BATTLE;
	const out_str = `constraint one_star_per_galaxy_p(${VAR_2D_NAMES.GALAXY_REGIONS}, ${grid_name2});\n`;

	return out_str;
}

export const oneStarPerGalaxyInfo: SquareCellElementInfo = {
	toolId: TOOLS.ONE_STAR_PER_GALAXY,

	meta: {
		description: 'Every galaxy contains exactly 1 star.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	},

	solver_func: oneStarPerGalaxyElement
};
