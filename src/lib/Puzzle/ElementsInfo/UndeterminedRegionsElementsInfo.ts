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

export const yinYangFillominoParityInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG_FILLOMINO_PARITY,
	order: 0,

	meta: {
		description: 'All odd polyominoes are shaded, while all even polyominoes are unshaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT]
	}
};