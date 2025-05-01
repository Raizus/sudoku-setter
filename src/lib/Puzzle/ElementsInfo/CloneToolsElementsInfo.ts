import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { SHAPE_TYPES } from '../Shape/Shape';
import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';

export const cloneRegionInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CLONE
	},

	toolId: TOOLS.CLONE_REGION,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: true, value: 0.03 },
		strokeDasharray: { editable: false, value: 0 },
		stroke: { editable: true, value: 'var(--constraint-color-light-gray)' },
		fill: { editable: false, value: 'none' },
		inset: { editable: false, value: 0.07 }
	},

	meta: {
		description: 'Clone regions contain the same digits in the same position.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.CLONE_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	}
};
