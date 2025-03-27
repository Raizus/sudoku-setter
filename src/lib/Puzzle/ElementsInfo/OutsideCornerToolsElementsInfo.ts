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
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import type { EditableShapeI } from '../Shape/Shape';
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

const OUTSIDE_DEFAULT_SHAPE: EditableShapeI = {
	fontColor: { editable: true, value: 'var(--text-primary-color)' },
	stroke: { editable: true, value: 'var(--text-primary-color)' }
};

const DEFAULT_OUTSIDE_CORNER_OPTIONS: OutsideDirectionToolInputOptions = {
	type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
	defaultValue: '',
	cornerOrEdge: CornerOrEdge.CORNER
};

export const littleKillerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_SUM,
	order: RENDER_ORDER.OUTSIDE_TOOLS,
	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const littleKillerProductInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_PRODUCT,
	order: RENDER_ORDER.OUTSIDE_TOOLS,
	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const littleKillerLookAndSayInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_LOOK_AND_SAY,
	order: RENDER_ORDER.OUTSIDE_TOOLS,
	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const xOmitLittleKillerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.X_OMIT_LITTLE_KILLER_SUM,
	order: RENDER_ORDER.OUTSIDE_TOOLS,
	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const littleKillerRegionSumProductInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_REGION_SUM_PRODUCT,
	order: RENDER_ORDER.OUTSIDE_TOOLS,
	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

export const negatorsLittleKillerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.NEGATORS_LITTLE_KILLER_SUM,
	order: RENDER_ORDER.OUTSIDE_TOOLS,
	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};
