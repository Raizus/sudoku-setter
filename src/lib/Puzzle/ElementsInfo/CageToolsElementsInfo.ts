import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { getCageToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/CageToolInputHandler';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import { cageUsage, typableCageUsage } from '../ToolUsage';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

const nonTypableCageDefaultCategories = [
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CAGE_TOOL
];


const typableCageDefaultCategories = [
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.CAGE_TOOL
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

export const killerCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			'Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const sumCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.SUM_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			'The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const parityBalanceCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.PARITY_BALANCE_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			'The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.',
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	}
};

export const divisibleKillerCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.DIVISIBLE_KILLER_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			'Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const spotlightCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.SPOTLIGHT_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const putteriaCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.PUTTERIA_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	}
};

export const killerCageLookAndSayInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.KILLER_CAGE_LOOK_AND_SAY,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			"On a cage, given clues should be read as a 'look-and-say' numbers. Each number says which digits are in the respective cage. Eg if a cage clue is 1221, this means there is one 2 and two 1s in the cage.",
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

export const aquariumCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.AQUARIUM_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

	meta: {
		description:
			'Digits cannot repeat within a cage. Cells within aquariums are either air cells or water cells, with cells outside of cages not being air or water. Water cells fill the bottoms of cages and must have digits greater than all the air cells in their cage. Rows in cages must be either all air cells or all water cells. Cages must have at least one row of air cells and one row of water cells. Additionally, the cages are “pressurized”: The air cells within any cage must have a higher average value than the number of rows above that cage in the grid. (Eg If a cage occupied only rows 7, 8 and 9 then any air cells in that cage must have an average value greater than 6.).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};
