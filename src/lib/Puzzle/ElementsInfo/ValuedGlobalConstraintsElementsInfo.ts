import type { AbstractElementInfo } from '../ElementInfo';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

export const forbiddenOrthogonallyAdjacentSumInfo: AbstractElementInfo = {
	toolId: TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,

	meta: {
		description: 'Orthogonally adjacent cells may not sum to X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const minimumDiagonallyAdjacentDifferenceInfo: AbstractElementInfo = {
	toolId: TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,

	meta: {
		description: 'Diagonal cell pairs (sharing a corner) must have a difference of at least X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const forbiddenKnightSumInfo: AbstractElementInfo = {
	toolId: TOOLS.FORBIDDEN_KNIGHT_SUM,

	meta: {
		description: "Digits a knight's move apart cannot sum to X.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const litsMaxTetrominoSumInfo: AbstractElementInfo = {
	toolId: TOOLS.LITS_MAX_TETROMINO_SUM,

	meta: {
		description: "Each tetromino must contain digits summing to less than 'X'.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};
