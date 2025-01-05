import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { CornerOrEdge } from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { getOutsideDirectionToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/OutsideDirectionInputHandler';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import { outsideCornerUsage } from '../ToolUsage';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

const outsideCornerDefaultCategories = [
	TOOL_CATEGORIES.OUTSIDE_CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.OUTSIDE_CORNER_TOOL,
	TOOL_CATEGORIES.OUTSIDE_DIRECTION_TOOL
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

export const littleKillerSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.CORNER
		});
	},

	toolId: TOOLS.LITTLE_KILLER_SUM,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	meta: {
		description:
			'A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const littleKillerProductInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.CORNER
		});
	},

	toolId: TOOLS.LITTLE_KILLER_PRODUCT,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	meta: {
		description:
			'A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const littleKillerLookAndSayInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.CORNER
		});
	},

	toolId: TOOLS.LITTLE_KILLER_LOOK_AND_SAY,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	meta: {
		description:
			"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const xOmitLittleKillerSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.CORNER
		});
	},

	toolId: TOOLS.X_OMIT_LITTLE_KILLER_SUM,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	meta: {
		description:
			'Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const littleKillerRegionSumProductInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.CORNER
		});
	},

	toolId: TOOLS.LITTLE_KILLER_REGION_SUM_PRODUCT,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	meta: {
		description:
			'Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const negatorsLittleKillerSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.CORNER
		});
	},

	toolId: TOOLS.NEGATORS_LITTLE_KILLER_SUM,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	meta: {
		description:
			'Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};