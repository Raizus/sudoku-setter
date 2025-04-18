import { HANDLER_TOOL_TYPE, type CageToolInputOptions } from '$input/ToolInputHandlers/types';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import { SHAPE_TYPES, type EditableShapeI } from '../Shape/Shape';
import { cageUsage, typableCageUsage } from '../ToolUsage';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

const nonTypableCageDefaultCategories = [
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CAGE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const typableCageDefaultCategories = [
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.CAGE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export function validateCageValue(value: string, maxLength = 5): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultCageValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

const DEFAULT_CAGE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.CAGE,
	strokeWidth: { editable: true, value: 0.03, lb: 0, ub: 0.5, step: 0.01 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'none' },
	strokeDasharray: { editable: true, value: 0.08 },
	inset: { editable: true, value: 0.06, lb: 0, ub: 0.5, step: 0.01 }
};

const DEFAULT_UNVALUED_CAGE_OPTIONS: CageToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CAGE,
	defaultValue: '',
	allowDiagonallyAdjacent: true,
};

const DEFAULT_CAGE_OPTIONS: CageToolInputOptions = {
	...DEFAULT_UNVALUED_CAGE_OPTIONS,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultCageValueUpdater(oldValue, key, validateCageValue)
};

export const killerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const uniqueDigitsCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.UNIQUE_DIGITS_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.1 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' },
		strokeDasharray: { editable: false, value: 0 },
		inset: { editable: false, value: 0 }
	},

	meta: {
		description:
			'A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const invertedKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.INVERTED_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const sumCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.SUM_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const sumCageLookAndSayInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_UNVALUED_CAGE_OPTIONS,

	toolId: TOOLS.SUM_CAGE_LOOK_AND_SAY,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).',
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	}
};

export const parityBalanceCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_UNVALUED_CAGE_OPTIONS,

	toolId: TOOLS.PARITY_BALANCE_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.',
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	}
};

export const divisibleKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.DIVISIBLE_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const spotlightCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.SPOTLIGHT_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const putteriaCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_UNVALUED_CAGE_OPTIONS,

	toolId: TOOLS.PUTTERIA_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	}
};

export const killerCageLookAndSayInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.KILLER_CAGE_LOOK_AND_SAY,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			"On a cage, given clues should be read as a 'look-and-say' numbers. Each number says which digits are in the respective cage. Eg if a cage clue is 1221, this means there is one 2 and two 1s in the cage.",
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const multisetCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.MULTISET_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'var(--constraint-color-light-blue)' },
		fill: { editable: false, value: 'rgba(46, 203, 255, 0.1)' },
		strokeDasharray: { editable: false, value: 0.08 },
		inset: { editable: false, value: 0.07 }
	},

	meta: {
		description: 'Light blue cages with the same label have the same group of digits.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const vaultedCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.VAULTED_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const aquariumCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.AQUARIUM_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits cannot repeat within a cage. Cells within aquariums are either air cells or water cells, with cells outside of cages not being air or water. Water cells fill the bottoms of cages and must have digits greater than all the air cells in their cage. Rows in cages must be either all air cells or all water cells. Cages must have at least one row of air cells and one row of water cells. Additionally, the cages are “pressurized”: The air cells within any cage must have a higher average value than the number of rows above that cage in the grid. (Eg If a cage occupied only rows 7, 8 and 9 then any air cells in that cage must have an average value greater than 6.).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const yinYangAntithesisKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const yinYangBreakevenKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.YIN_YANG_BREAKEVEN_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const doublersKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.DOUBLERS_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const negatorsKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.NEGATORS_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,
	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};
