import type { AbstractElementInfo } from '../ElementInfo';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

export const forbiddenOrthogonallyAdjacentSumInfo: AbstractElementInfo = {
	toolId: TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,
	order: 0,

	meta: {
		description: 'Orthogonally adjacent cells may not sum to X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const minimumDiagonallyAdjacentDifferenceInfo: AbstractElementInfo = {
	toolId: TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,
	order: 0,

	meta: {
		description: 'Diagonal cell pairs (sharing a corner) must have a difference of at least X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const forbiddenKnightSumInfo: AbstractElementInfo = {
	toolId: TOOLS.FORBIDDEN_KNIGHT_SUM,
	order: 0,

	meta: {
		description: "Digits a knight's move apart cannot sum to X.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};