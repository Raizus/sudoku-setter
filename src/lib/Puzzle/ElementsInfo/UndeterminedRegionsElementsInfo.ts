import type { AbstractElementInfo } from '../ElementInfo';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

export const chaosConstructionInfo: AbstractElementInfo = {
	toolId: TOOLS.CHAOS_CONSTRUCTION,
	order: 0,

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const numberedChaosConstructionInfo: AbstractElementInfo = {
	toolId: TOOLS.NUMBERED_CHAOS_CONSTRUCTION,
	order: 0,

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const chaosConstructionSuguruInfo: AbstractElementInfo = {
	toolId: TOOLS.CHAOS_CONSTRUCTION_SUGURU,
	order: 0,

	meta: {
		description:
			'In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const yinYangInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG,
	order: 0,

	meta: {
		description:
			'Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const yinYangNeighbourGreaterThanOneWithinRegionShadedInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,
	order: 0,

	meta: {
		description:
			'In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const yinYangShadedCellsAreGermanWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,
	order: 0,

	meta: {
		description:
			'The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const nurimisakiInfo: AbstractElementInfo = {
	toolId: TOOLS.NURIMISAKI,
	order: 0,

	meta: {
		description:
			'Shade some cells so that the remaining unshaded cells form one orthogonally connected area. No 2x2 region may be entirely shaded or unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const nurikabeInfo: AbstractElementInfo = {
	toolId: TOOLS.NURIKABE,
	order: 0,

	meta: {
		description:
			'Shade some cells blue (representing water), such that all water cells are orthogonally connected, but water may not fully cover a 2x2 area. Shade the remaining cells green, which represent islands.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const nurikabeNoRepeatsInIslandsInfo: AbstractElementInfo = {
	toolId: TOOLS.NURIKABE_NO_REPEATS_IN_ISLANDS,
	order: 0,

	meta: {
		description:
			'Digits may not repeat within a nurikabe island.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const twoContiguousRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.TWO_CONTIGUOUS_REGIONS,
	order: 0,

	meta: {
		description: 'Divide the grid into two sets of contiguous cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const sashiganeRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.SASHIGANE,
	order: 0,

	meta: {
		description:
			'Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const norinoriInfo: AbstractElementInfo = {
	toolId: TOOLS.NORINORI,
	order: 0,

	meta: {
		description:
			'Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const shikakuInfo: AbstractElementInfo = {
	toolId: TOOLS.SHIKAKU,
	order: 0,

	meta: {
		description:
			'Divide the grid into rectangular regions of orthogonally connected cells, so that every cell is in a region and regions do not overlap.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const shikakuNoRepeatsInRegionInfo: AbstractElementInfo = {
	toolId: TOOLS.SHIKAKU_NO_REPEATS_IN_REGION,
	order: 0,

	meta: {
		description: 'Digits cannot repeat within a shikaku region.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const norinoriStarBattleInfo: AbstractElementInfo = {
	toolId: TOOLS.NORINORI_STAR_BATTLE,
	order: 0,

	meta: {
		description:
			'Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const goldilocksZoneInfo: AbstractElementInfo = {
	toolId: TOOLS.GOLDILOCKS_ZONE,
	order: 0,

	meta: {
		description:
			"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const cellCenterLoopNoTouchingInfo: AbstractElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP_NO_TOUCHING,
	order: 0,

	meta: {
		description:
			'Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself, even diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_LOOP_CONSTRAINTS]
	}
};

export const cellCenterCanTouchDiagonallyInfo: AbstractElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,
	order: 0,

	meta: {
		description:
			'Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_LOOP_CONSTRAINTS]
	}
};

export const adjacentCellsAlongLoopAreMultiplesInfo: AbstractElementInfo = {
	toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,
	order: 0,

	meta: {
		description:
			'For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_LOOP_CONSTRAINTS]
	}
};

export const adjacentCellsAlongLoopAreGermanWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
	order: 0,

	meta: {
		description: 'Adjacent cells along a loop differ by 5 or more.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_LOOP_CONSTRAINTS]
	}
};

export const notLoopSizedRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.NOT_LOOP_SIZED_REGIONS,
	order: 0,

	meta: {
		description:
			'Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_LOOP_CONSTRAINTS]
	}
};

export const modularLoopInfo: AbstractElementInfo = {
	toolId: TOOLS.MODULAR_LOOP,
	order: 0,

	meta: {
		description:
			'Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_LOOP_CONSTRAINTS]
	}
};

export const mazeDirectedPathInfo: AbstractElementInfo = {
	toolId: TOOLS.MAZE_DIRECTED_PATH,
	order: 0,

	meta: {
		description:
			"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathAdjacentCellsSumIsPrimeInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,
	order: 0,

	meta: {
		description: 'Any two adjacent cells along the correct path must sum to a prime number.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathAdjacentCellsDutchWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,
	order: 0,

	meta: {
		description:
			'The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathIsParityLineInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_IS_PARITY_LINE,
	order: 0,

	meta: {
		description:
			'the correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathIsRegionSumLineInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE,
	order: 0,

	meta: {
		description:
			'The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathSumOfCellsPerRegionIsPrimeInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,
	order: 0,

	meta: {
		description:
			'All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathTeleportSegmentsSumInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,
	order: 0,

	meta: {
		description:
			'The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const directedPathTeleportRenbanSegmentsInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,
	order: 0,

	meta: {
		description:
			'The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS]
	}
};

export const caveInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE,
	order: 0,

	meta: {
		description:
			'Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const twilightCaveFillominoRegionShadingInfo: AbstractElementInfo = {
	toolId: TOOLS.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,
	order: 0,

	meta: {
		description:
			'Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const cave2x2NotFullyShadedOrUnshadedInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,
	order: 0,

	meta: {
		description:
			'No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const oneDigitDoesNotAppearInTheCaveInfo: AbstractElementInfo = {
	toolId: TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,
	order: 0,

	meta: {
		description: 'There is exactly one digit that does not appear anywhere in the cave.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const caveWallsAreEvenInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_WALLS_ARE_EVEN,
	order: 0,

	meta: {
		description: 'Cave walls must contain even digits.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const caveCellsAreOddInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_CELLS_ARE_ODD,
	order: 0,

	meta: {
		description: 'Cave cells must contain odd digits.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const caveLITSInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_LITS,
	order: 0,

	meta: {
		description:
			"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const renbanCavesInfo: AbstractElementInfo = {
	toolId: TOOLS.RENBAN_CAVES,
	order: 0,

	meta: {
		description:
			'Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CAVE_CONSTRAINTS]
	}
};

export const yinYangFillominoParityInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG_FILLOMINO_PARITY,
	order: 0,

	meta: {
		description: 'All odd polyominoes are shaded, while all even polyominoes are unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const galaxiesInfo: AbstractElementInfo = {
	toolId: TOOLS.GALAXIES,
	order: 0,

	meta: {
		description:
			'Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_GALAXY_CONSTRAINTS]
	}
};

export const everyCellBelongsToAGalaxyInfo: AbstractElementInfo = {
	toolId: TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY,
	order: 0,

	meta: {
		description: 'Every cell in the grid belongs to a galaxy.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_GALAXY_CONSTRAINTS]
	}
};

export const galaxy2x2DoesNotBelongToOneGalaxyInfo: AbstractElementInfo = {
	toolId: TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,
	order: 0,

	meta: {
		description: 'No 2x2 area may belong entirely to one galaxy.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_GALAXY_CONSTRAINTS]
	}
};

export const twoSymmetricGalaxiesInfo: AbstractElementInfo = {
	toolId: TOOLS.TWO_SYMMETRIC_GALAXIES,
	order: 0,

	meta: {
		description:
			"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_GALAXY_CONSTRAINTS]
	}
};

export const oneGalaxyIsAGermanWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS,
	order: 0,

	meta: {
		description:
			'One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_GALAXY_CONSTRAINTS]
	}
};

export const pentominoTillingInfo: AbstractElementInfo = {
	toolId: TOOLS.PENTOMINO_TILLING,
	order: 0,

	meta: {
		description:
			'Divide the grid into pentominoes, such that no two pentominoes of the same shape (including rotations and reflections) touch orthogonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const tillingNoEmptyCellsInfo: AbstractElementInfo = {
	toolId: TOOLS.TILLING_NO_EMPTY_CELLS,
	order: 0,

	meta: {
		description: 'Every cell in the grid belongs to a tile.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const litsBlackAndWhiteStarBattleInfo: AbstractElementInfo = {
	toolId: TOOLS.LITS_BLACK_WHITE_STAR_BATTLE,
	order: 0,

	meta: {
		description:
			'Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const connectFourInfo: AbstractElementInfo = {
	toolId: TOOLS.CONNECT_FOUR,
	order: 0,

	meta: {
		description:
			'The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CONNECT_FOUR_CONSTRAINTS]
	}
};

export const connectFourDrawInfo: AbstractElementInfo = {
	toolId: TOOLS.CONNECT_FOUR_DRAW,
	order: 0,

	meta: {
		description:
			'The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CONNECT_FOUR_CONSTRAINTS]
	}
};

export const connectFourAdjacentRedsDifferentParityInfo: AbstractElementInfo = {
	toolId: TOOLS.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,
	order: 0,

	meta: {
		description:
			'Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit.)',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CONNECT_FOUR_CONSTRAINTS]
	}
};

export const connectFourAdjacentYellowsMinimumDifferenceAtLeast3Info: AbstractElementInfo = {
	toolId: TOOLS.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,
	order: 0,

	meta: {
		description: 'Two orthogonally adjacent yellow discs must have a difference of at least 3.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.GLOBAL_CONNECT_FOUR_CONSTRAINTS]
	}
};