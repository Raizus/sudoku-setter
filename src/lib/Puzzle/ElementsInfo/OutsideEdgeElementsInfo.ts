import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type OutsideDirectionToolInputOptions
} from '$input/ToolInputHandlers/types';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { outsideEdgeUsage } from '../ToolUsage';
import type { EditableShapeI } from '../Shape/Shape';

const outsideEdgeDefaultCategories = [
	TOOL_CATEGORIES.OUTSIDE_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.OUTSIDE_EDGE_TOOL,
	TOOL_CATEGORIES.OUTSIDE_DIRECTION_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export function validateOutsideDirectionValue(value: string, maxLength = 5): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultOutsideDirectionValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

const OUTSIDE_DEFAULT_SHAPE: EditableShapeI = {
	fontColor: { editable: true, value: 'var(--text-primary-color)' },
	stroke: { editable: true, value: 'var(--text-primary-color)' }
};

const DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS: OutsideDirectionToolInputOptions = {
	type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
	defaultValue: '',
	cornerOrEdge: CornerOrEdge.EDGE
};

export const sandwichSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SANDWICH_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" (default a = 1, b = 9) in that direction.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const mysterySandwichSumInfo: SquareCellElementInfo = {
	inputOptions: {
		...DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.MYSTERY_SANDWICH_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A number outside the grid gives the sum of the digits sandwiched between the "a" and "b" in that direction. "a" and "b" must be determined by the solver.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const sandwichSumXorXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SANDWICH_SUM_XOR_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid is either an X-Sums clue or a Sandwich clue, but not both. I.e. exactly one of the following is true: the clue gives the sum of the digits between the 1 and 9 in the indicated row or column; or the clue gives the sum of the first X digits in that row or column, starting from the digit next to the clue, which is equal to X.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const xSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid gives the sum of the first X digits from that direction, where X is the first of those digits.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const shortsightedXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SHORTSIGHTED_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid gives the sum of the nearest X or (X-1) numbers, where X is the number in the first cell from that direction.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const shiftedXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SHIFTED_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicate the sum of the first X digits from the Nth cell from that side, where X is the value in the Nth cell and N is the value in the first cell from that side. Example: in a row with 514839762 the clue from the left would be 19 (3+9+7) and from the right would be 37 (6+7+9+3+8+4).',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const brokenXSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.BROKEN_X_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid indicates the sum of the first (X-1) or (X+1) digits from that side, where X is the digit in the first cell from that side.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const xSumSkyscrapersInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.X_SUM_SKYSCRAPERS,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid gives the sum of the first X cells, where X would be the skyscraper clue outside the grid in that position.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const battlefieldInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.BATTLEFIELD,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			"Consider the first X cells and the last Y cells of a row or column where X is the number in the first cell and Y is the number in the last cell. A clue outside the grid gives the sum of the digits where these groups overlap, or the sum of the digits in the gap between the groups if they don't overlap.",
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const skyscrapersInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.SKYSCRAPERS,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description: 'A clue outside the grid indicates the number of skyscrapers seen from that side.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const xIndexInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.X_INDEX,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicates the digit which has to be placed in the Xth cell in the corresponding direction, where X is the 1st digit in their row/column seen from the side of the clue.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const risingStreakInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.RISING_STREAK,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			"A number outside the grid indicates there is a streak of AT LEAST that many increasing, consecutive digits in the row or column in that direction (e.g. a number above the grid indicates a downward streak in that column). For instance, the row '214678935' has a maximal streak of 4 digits to the right (6789) and 2 digits to the left (21).",
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const rowOrColumnRankInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.ROW_OR_COLUMN_RANK,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Considering all rows and columns as numbers read from the direction of the clue and ranked from lowest (1) to highest (36), a clue represents where in the ranking that row/column lies.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const outsideEdgeYinYangSumOfShadedInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_EDGE_INPUT_OPTIONS,

	toolId: TOOLS.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Numbers outside the grid indicate the sum of the digits in shaded cells in the corresponding row/column.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const outsideConsecutiveSumInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.OUTSIDE_CONSECUTIVE_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue outside the grid indicates the total of any digits in its row or column that neighbour at least one consecutive digit within that row or column. For example, if a column, reading downwards, contains the digits 128396547, the clue at the top of the column would be 18; the sum of 1, 2, 4, 5, and 6, which are the only digits which neighbour a consecutive digit within that sequence.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const loopwhichesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.LOOPWICHES,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid are Loopwiches. Loopwiches indicate the sum of the digits between the first and last loop cell in their row or column. (Both loop and nonloop cells between the 2 crust cells are summed).',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const chaosConstructionSumOfFirstEachRegionInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Stepping Stones: Clues outside the grid give the sum of the first digit seen in each successive region in that row or column. **The summed digits always appear in increasing order.**',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};

export const pentominoBorderCountInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.EDGE
	},

	toolId: TOOLS.PENTOMINO_BORDER_COUNT,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid indicate the number of borders between pentominoes present in that row or column.',
		usage: outsideEdgeUsage(),
		tags: [],
		categories: outsideEdgeDefaultCategories
	}
};
