import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { cornerUsage, quadrupleUsage } from '../ToolUsage';
import { HANDLER_TOOL_TYPE, type CornerToolOptions } from '$input/ToolInputHandlers/types';

const DEFAULT_UNTYPABLE_CORNER_CATEGORIES = [
	TOOL_CATEGORIES.CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CORNER_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_TYPABLE_CORNER_CATEGORIES = [
	TOOL_CATEGORIES.CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.CORNER_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export function validateCornerValue(value: string, maxLength = 3): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultCornerValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

function quadrupleValueUpdater(oldValue: string | undefined, key: string): string | undefined {
	function quadrupleValidator(): boolean {
		return true;
	}

	return defaultValueUpdater(oldValue, key, quadrupleValidator);
}

const DEFAULT_CORNER_OPTIONS: CornerToolOptions = {
	type: HANDLER_TOOL_TYPE.CORNER,
	defaultValue: '',
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultCornerValueUpdater(oldValue, key, validateCornerValue)
};

export const quadrupleInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			quadrupleValueUpdater(oldValue, key),
		defaultValue: ''
	},

	toolId: TOOLS.QUADRUPLE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.25 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description: 'Digits in a circle appear at least once in the four surrounding cells.',
		tags: [],
		usage: quadrupleUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	}
};

export const cornerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CORNER_SUM,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.25 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'Cells separated by a transparent blue dot marked with an X have a fixed sum of X.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	}
};

export const cornerSumOfThreeEqualsTheOtherInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: ''
	},

	toolId: TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.2 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'For each set of four cells that share a corner with a circle, the sum of three of the cells must equal the fourth cell.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	}
};

export const cornerEvenCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CORNER_EVEN_COUNT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.25 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'Numbers in circles show the amount of even numbers in the surrounding four cells.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	}
};

export const cornerCellsBelongToExacltyThreeRegionsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CORNER_OPTIONS,

	toolId: TOOLS.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.25 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'Cells separated by a transparent blue dot marked with an X have a fixed sum of X.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_TYPABLE_CORNER_CATEGORIES
	}
};

export const productSquareInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: 'X'
	},

	toolId: TOOLS.PRODUCT_SQUARE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'var(--grid-background-color)' },
		fontSize: { editable: false, value: 0.34 }
	},

	meta: {
		description:
			"An X in the center of a 2x2 region of cells, a “product square,” indicates that the two digits in the square's positive diagonal have the same product as the two digits in its negative diagonal. The product is not necessarily the same for different product squares. Not all product squares are necessarily indicated.",
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	}
};

export const equalDiagonalDifferencesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		defaultValue: ''
	},

	toolId: TOOLS.EQUAL_DIAGONAL_DIFFERENCES,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.15 },
		strokeWidth: { editable: false, value: 0.023 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'A dot in the centre of a 2x2 square indicates that the two digits in its positive diagonal have the same difference as the two digits in its negative diagonal. This difference is not necessarily the same for different 2x2 squares with dots.',
		tags: [],
		usage: cornerUsage(),
		categories: DEFAULT_UNTYPABLE_CORNER_CATEGORIES
	}
};
