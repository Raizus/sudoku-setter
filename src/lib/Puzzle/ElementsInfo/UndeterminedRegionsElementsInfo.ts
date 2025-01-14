import type { AbstractElementInfo } from '../ElementInfo';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

export const unknownRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.UNKNOWN_REGIONS,
	order: 0,

	meta: {
		description:
			'The grid must be divided into 9 regions. Each region must be determined and each is a set of nine orthogonally connected cells.',
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
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const cellCenterCanTouchDiagonallyInfo: AbstractElementInfo = {
	toolId: TOOLS.CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY,
	order: 0,

	meta: {
		description:
			'Draw a 1-cell wide loop or orthogonally connected cells, which does not branch or touch itself orthogonally, but can touch itself diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const adjacentCellsAlongLoopAreMultiplesInfo: AbstractElementInfo = {
	toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES,
	order: 0,

	meta: {
		description:
			'For each pair of adjacent cells along the loop, the larger digit is an integer multiple of the smaller digit.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const adjacentCellsAlongLoopAreGermanWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS,
	order: 0,

	meta: {
		description: 'Adjacent cells along a loop differ by 5 or more.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const notLoopSizedRegionsInfo: AbstractElementInfo = {
	toolId: TOOLS.NOT_LOOP_SIZED_REGIONS,
	order: 0,

	meta: {
		description:
			'Non-loop cells form several orthogonally connected groups. Such a group of size N contains exactly the digits from 1 to N.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const modularLoopInfo: AbstractElementInfo = {
	toolId: TOOLS.MODULAR_LOOP,
	order: 0,

	meta: {
		description:
			'Draw an orthogonal loop through the grid. The loop must not touch itself orthogonally; however, it can touch diagonally. Along the loop, any three consecutive cells must contain numbers congruent to 0 mod 3, 1 mod 3, and 2 mod 3. (In other words, one of the numbers is from the set {3, 6, 9, 12, …}, one is from {1, 4, 7, 10, …}, and one from {2, 5, 8, 11, …}.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const caveInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE,
	order: 0,

	meta: {
		description:
			'Shade some cells in the grid such that all unshaded cells are orthogonally connected, and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
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
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const oneDigitDoesNotAppearInTheCaveInfo: AbstractElementInfo = {
	toolId: TOOLS.ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE,
	order: 0,

	meta: {
		description: 'There is exactly one digit that does not appear anywhere in the cave.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const caveWallsAreEvenInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_WALLS_ARE_EVEN,
	order: 0,

	meta: {
		description: 'Cave walls must contain even digits.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const caveCellsAreOddInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_CELLS_ARE_ODD,
	order: 0,

	meta: {
		description: 'Cave cells must contain odd digits.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const caveLITSInfo: AbstractElementInfo = {
	toolId: TOOLS.CAVE_LITS,
	order: 0,

	meta: {
		description:
			"The cave and each wall section is a separate region for the purposes of a 'LITS puzzle'. In a LITS puzzle, solvers must place one tetromino into each region. No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely covered in tetrominoes.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
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
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const everyCellBelongsToAGalaxyInfo: AbstractElementInfo = {
	toolId: TOOLS.EVERY_CELL_BELONGS_TO_A_GALAXY,
	order: 0,

	meta: {
		description: 'Every cell in the grid belongs to a galaxy.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const galaxy2x2DoesNotBelongToOneGalaxyInfo: AbstractElementInfo = {
	toolId: TOOLS.GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY,
	order: 0,

	meta: {
		description: 'No 2x2 area may belong entirely to one galaxy.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const twoSymmetricGalaxiesInfo: AbstractElementInfo = {
	toolId: TOOLS.TWO_SYMMETRIC_GALAXIES,
	order: 0,

	meta: {
		description:
			"Divide the grid into two galaxies. Each galaxy must consist of a region of orthogonally connected cells, and must have 180 degree rotational symmetry. (The central point around which a galaxy is symmetrical doesn't need to actually belong to that galaxy.)",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};

export const oneGalaxyIsAGermanWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.ONE_GALAXY_IS_A_GERMAN_WHISPERS,
	order: 0,

	meta: {
		description:
			'One of the two galaxies behaves like a German whisper; orthogonally adjacent cells in this galaxy must have a difference of at least 5.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
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
		description: 'Each row, column and region must contain exactly one white star and one black star. Black stars must be located on tetrominoes, and white stars must not. Regardless of colour, stars may not touch each other - not even diagonally.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};