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

export const nexusInfo: AbstractElementInfo = {
	toolId: TOOLS.NEXUS,
	order: 0,

	meta: {
		description:
			'One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};