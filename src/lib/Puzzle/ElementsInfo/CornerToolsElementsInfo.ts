import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { getCornerToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/CornerToolInputHandler';
import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';

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
	function quadrupleValidator(value: string): boolean {
		return true;
	}

	return defaultValueUpdater(oldValue, key, quadrupleValidator);
}

export const quadrupleInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCornerToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				quadrupleValueUpdater(oldValue, key),
			defaultValue: ''
		});
	},

	toolId: TOOLS.QUADRUPLE,
	order: RENDER_ORDER.CORNER_TOOLS,

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
		categories: [
			TOOL_CATEGORIES.CORNER_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.CORNER_TOOL
		]
	}
};

export const cornerSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCornerToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCornerValueUpdater(oldValue, key, validateCornerValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.CORNER_SUM,
	order: RENDER_ORDER.CORNER_TOOLS,

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
		categories: [
			TOOL_CATEGORIES.CORNER_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.CORNER_TOOL
		]
	}
};

export const cornerSumOfThreeEqualsTheOtherInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCornerToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER,
	order: RENDER_ORDER.CORNER_TOOLS,

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
		categories: [
			TOOL_CATEGORIES.CORNER_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.CORNER_TOOL
		]
	}
};

export const cornerEvenCountInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCornerToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCornerValueUpdater(oldValue, key, validateCornerValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.CORNER_EVEN_COUNT,
	order: RENDER_ORDER.CORNER_TOOLS,

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
		categories: [
			TOOL_CATEGORIES.CORNER_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.CORNER_TOOL
		]
	}
};

export const cornerCellsBelongToExacltyThreeRegionsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCornerToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCornerValueUpdater(oldValue, key, validateCornerValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS,
	order: RENDER_ORDER.CORNER_TOOLS,

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
		categories: [
			TOOL_CATEGORIES.CORNER_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.CORNER_TOOL
		]
	}
};
