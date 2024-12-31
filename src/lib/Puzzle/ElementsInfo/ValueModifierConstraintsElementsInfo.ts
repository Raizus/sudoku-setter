import type { AbstractElementInfo } from '../ElementInfo';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

export const vampireAndPreyInfo: AbstractElementInfo = {
	toolId: TOOLS.VAMPIRE_AND_PREY,
	order: 0,

	meta: {
		description:
			'There are 9 Vampire cells contained within the grid which are a set of the digits from 1-to-9. Each row, column and box contains exactly one Vampire cell. 9 Prey cells in the grid follow the same rules as the Vampire cells. A cell may have only one of these roles.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const markedCellsInfo: AbstractElementInfo = {
	toolId: TOOLS.MARKED_CELLS,
	order: 0,

	meta: {
		description:
			'Mark 9 cells such that there is one marked cell in each row, column and region. Each digit appears in exactly one marked cell. The digit in the first cell of a row, column, or region gives the position of the marked cell in that row, column or region.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const doublersInfo: AbstractElementInfo = {
	toolId: TOOLS.DOUBLERS,
	order: 0,

	meta: {
		description:
			'The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const negatorsInfo: AbstractElementInfo = {
	toolId: TOOLS.NEGATORS,
	order: 0,

	meta: {
		description:
			'The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const hotCellsInfo: AbstractElementInfo = {
	toolId: TOOLS.HOT_CELLS,
	order: 0,

	meta: {
		description:
			'There are 9 Hot cells contained within the grid comprised of a set of the digits 1-to-9. Each row, column and box contains exactly one Hot cell. Hot cells increase the value of the contained digit by 1.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const coldCellsInfo: AbstractElementInfo = {
	toolId: TOOLS.COLD_CELLS,
	order: 0,

	meta: {
		description:
			'There are 9 Cold cells contained within the grid comprised of a set of the digits 1-to-9. Each row, column and box contains exactly one Cold cell. Cold cells decrease the value of the contained digit by 1.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const decrementFountainInfo: AbstractElementInfo = {
	toolId: TOOLS.DECREMENT_FOUNTAIN,
	order: 0,

	meta: {
		description:
			"A set of the digits 1 to 9, one in each row, column, and box, in the grid are Fountains of Youth. The fountain 'splashes' the cells orthogonally and diagonally adjacent. A fountain does not splash itself, but can be splashed by other fountains. A cell may be splashed by multiple fountains. Each time a cell is splashed, the value of the cell is reduced by one.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

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