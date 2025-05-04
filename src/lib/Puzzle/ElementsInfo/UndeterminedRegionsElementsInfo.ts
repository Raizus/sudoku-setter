import type { AbstractElementInfo } from '../ElementInfo';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

export const chaosConstructionInfo: AbstractElementInfo = {
	toolId: TOOLS.CHAOS_CONSTRUCTION,

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const numberedChaosConstructionInfo: AbstractElementInfo = {
	toolId: TOOLS.NUMBERED_CHAOS_CONSTRUCTION,

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells. The digit in the top-left cell of a region (the leftmost cell in its highest row) is its region number. All region numbers are different.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const chaosConstructionSuguruInfo: AbstractElementInfo = {
	toolId: TOOLS.CHAOS_CONSTRUCTION_SUGURU,

	meta: {
		description:
			'In each region of the grid, insert the numbers 1 to N, where N is the size of that region. Orthogonally adjacent and diagonally adjacent cells cannot contain the same digit. For this puzzle, the regions must be determined by the solver.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const yinYangInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG,

	negative_constraints: [
		{
			toolId: TOOLS.YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED,
			description:
				'In the completed grid, cells containing numbers exactly one greater than an immediate neighbour (diagonal or orthogonal) within their box are shaded (and otherwise unshaded).'
		},
		{
			toolId: TOOLS.YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS,
			description:
				'The yin yang shaded cells act as a German Whispers line: if two orthogonally connected cells are both shaded, then the digits in those cells must have a difference of at least 5.'
		}
	],

	meta: {
		description:
			'Shade some cells in the grid such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const nurimisakiInfo: AbstractElementInfo = {
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
	}
};

export const nurikabeInfo: AbstractElementInfo = {
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
	}
};

export const twoContiguousRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.TWO_CONTIGUOUS_REGIONS,

	meta: {
		description: 'Divide the grid into two sets of contiguous cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const sashiganeRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.SASHIGANE,

	meta: {
		description:
			'Divide the grid into 1-cell wide L-shaped regions. Digits may not repeat in a region.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const norinoriInfo: AbstractElementInfo = {
	toolId: TOOLS.NORINORI,

	meta: {
		description:
			'Shade two cells in each region such that all shaded cells are part of dominoes and no two dominoes touch each other orthogonally (but may touch diagonally).',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const shikakuInfo: AbstractElementInfo = {
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
	}
};

export const norinoriStarBattleInfo: AbstractElementInfo = {
	toolId: TOOLS.NORINORI_STAR_BATTLE,

	meta: {
		description:
			'Place one star in each region such that there are exactly two in each row and column. Stars cannot touch each other, even diagonally. Stars cannot be placed on shaded Norinori cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const goldilocksZoneInfo: AbstractElementInfo = {
	toolId: TOOLS.GOLDILOCKS_ZONE,

	meta: {
		description:
			"Divide the grid into 3 zones. Each zone consists of a single group of orthogonally connected cells. No 2x2 area may be entirely within one zone. The first zone is 'too hot'. Any cell in the hot zone has a value one greater than its digit. The second zone is 'too cold'. Any cell in the cold zone has a value one less than its digit. The third zone is 'just right'; this is the Goldilocks Zone. In this zone, a cell's value equals its digit, like normal.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const cellCenterLoopNoTouchingInfo: AbstractElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP_NO_TOUCHING,

	negative_constraints: [
		{
			toolId: TOOLS.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,
			description:
				'Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.'
		},
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,
			description:
				'For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.'
		},
		{
			toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
			description: 'Adjacent cells along a loop differ by 5 or more.'
		},
		{
			toolId: TOOLS.NOT_LOOP_SIZED_REGIONS,
			description:
				'Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.'
		},
		{
			toolId: TOOLS.MODULAR_LOOP,
			description:
				'Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.'
		}
	],

	meta: {
		description:
			'Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const mazeDirectedPathInfo: AbstractElementInfo = {
	toolId: TOOLS.MAZE_DIRECTED_PATH,

	negative_constraints: [
		{
			toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME,
			description: 'Any two adjacent cells along the correct path must sum to a prime number.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS,
			description:
				'The correct path will be a valid Dutch Whisper line - adjacent digits along the path must have a difference of at least 4.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_IS_PARITY_LINE,
			description:
				'The correct path will be a valid alternating parity line - ie: any pair of adjacent cells along the path must contain one even digit and one odd digit.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_IS_REGION_SUM_LINE,
			description:
				'The correct path will be a valid Region Sum line - box borders (dotted lines) will divide the path into segments which each have the same sum.'
		},
		{
			toolId: TOOLS.DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME,
			description:
				'All digits within a marked sudoku box that lie anywhere on the correct path must sum to a prime number.'
		}
	],

	meta: {
		description:
			"Draw a directect path in the grid. The path will be a snaking line that passes through the centres of cells, without visiting any cell more than once, crossing itself or passing through any thick maze walls. As well as moving orthogonally, the path may move diagonally if there's a 2x2 space in which to do so, but may never pass diagonally through the rounded end / corner of a wall.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const directedPathTeleportSegmentsSumInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM,

	meta: {
		description:
			'The sum of the digits on the path before teleporting must equal the sum of the digits on the path after teleporting.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.GLOBAL_CONSTRAINT,
			TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS
		]
	}
};

export const directedPathTeleportRenbanSegmentsInfo: AbstractElementInfo = {
	toolId: TOOLS.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS,

	meta: {
		description:
			'The directed path is formed of one or more segments. Any uses of teleports will divide the path up into physically separate segments, ie; if a teleport is used, the current path segment ends at the entry teleport, and a new separate path segment begins at the matching exit teleport. Any path segment must function as a renban; it must consist entirely of a set of non-repeating, consecutive digits, which can be arranged in any order along the path segment.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.GLOBAL_CONSTRAINT,
			TOOL_CATEGORIES.GLOBAL_DIRECTED_PATH_CONSTRAINTS
		]
	}
};

export const caveInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE,

	negative_constraints: [
		{
			toolId: TOOLS.CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED,
			description:
				'No 2x2 cave region may be completely filled with cave cells or completely filled with wall cells.'
		},
		{
			toolId: TOOLS.CAVE_WALLS_ARE_EVEN,
			description: 'Cave walls must contain even digits.'
		},
		{
			toolId: TOOLS.CAVE_CELLS_ARE_ODD,
			description: 'Cave cells must contain odd digits.'
		},
		{
			toolId: TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,
			description: 'There is exactly one digit that does not appear anywhere in the cave.'
		},
		{
			toolId: TOOLS.RENBAN_CAVES,
			description:
				'Every set of orthogonally connected unshaded cells within a 3x3 Sudoku region acts as a Renban line: that is, those cells must contain a nonrepeating set of consecutive digits in any order. Note that a 3x3 region may have more than one such set of cells. Also note that such a set may consist of just one cell.'
		},
		{
			toolId: TOOLS.CAVE_LITS,
			description:
				"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes."
		}
	],

	meta: {
		description:
			'Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const twilightCaveFillominoRegionShadingInfo: AbstractElementInfo = {
	toolId: TOOLS.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING,

	meta: {
		description:
			'Each fillomino region must either be entirely shaded or entirely unshaded, according to cave shading.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const yinYangFillominoParityInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG_FILLOMINO_PARITY,

	meta: {
		description: 'All odd polyominoes are shaded, while all even polyominoes are unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const galaxiesInfo: AbstractElementInfo = {
	toolId: TOOLS.GALAXIES,

	negative_constraints: [
		{
			toolId: TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY,
			description: 'Every cell in the grid belongs to a galaxy.'
		},
		{
			toolId: TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,
			description: 'No 2x2 area may belong entirely to one galaxy.'
		},
		{
			toolId: TOOLS.TWO_SYMMETRIC_GALAXIES,
			description:
				"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)"
		},
		{
			toolId: TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS,
			description:
				'One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.'
		}
	],

	meta: {
		description:
			'Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const pentominoTillingInfo: AbstractElementInfo = {
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
	}
};

export const litsBlackAndWhiteStarBattleInfo: AbstractElementInfo = {
	toolId: TOOLS.LITS_BLACK_WHITE_STAR_BATTLE,

	meta: {
		description:
			'Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const connectFourInfo: AbstractElementInfo = {
	toolId: TOOLS.CONNECT_FOUR,

	negative_constraints: [
		{
			toolId: TOOLS.CONNECT_FOUR_DRAW,
			description:
				'The board represents a game of Connect 4 ended in a draw. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow.'
		},
		{
			toolId: TOOLS.CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY,
			description:
				'Two orthogonally adjacent red discs must be of different parity (one odd digit and one even digit).'
		},
		{
			toolId: TOOLS.CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3,
			description: 'Two orthogonally adjacent yellow discs must have a difference of at least 3.'
		}
	],

	meta: {
		description:
			'The board represents a game of Connect 4. And so it resulted in a draw; the board became full of an equal number of red and yellow discs without either of them managing to get any horizontal, vertical or diagonal connected line of 4 discs of their colour. Recreate the end board state by colouring the holes red and yellow. The first two moves have been shown.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const fillominoInfo: AbstractElementInfo = {
	toolId: TOOLS.FILLOMINO,

	meta: {
		description:
			'Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const LITSInfo: AbstractElementInfo = {
	toolId: TOOLS.LITS,

	meta: {
		description:
			'Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};
