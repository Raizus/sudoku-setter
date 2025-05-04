import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import type { SquareCellElementInfo } from '../ElementInfo';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

export const fogLighsInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL
	},

	toolId: TOOLS.FOG_LIGHTS,

	meta: {
		description:
			'Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_ELEMENT,
			TOOL_CATEGORIES.FOG_TOOL
		]
	}
};

export const customFogClearingInfo: SquareCellElementInfo = {
	// inputOptions: {
	// 	type: HANDLER_TOOL_TYPE.SINGLE_CELL
	// },

	toolId: TOOLS.CUSTOM_FOG_CLEARING,

	negative_constraints: [
		{
			toolId: TOOLS.FOG_CLEARING_ITSELF,
			description: 'On cell input, clear itself.'
		},
		{
			toolId: TOOLS.FOG_CLEARING_ORTHOGONAL_NEIGHBOURS,
			description: 'On cell input, clear orthogonal neighbours.'
		},
		{
			toolId: TOOLS.FOG_CLEARING_DIAGONAL_NEIGHBOURS,
			description: 'On cell input, clear diagonal neighbours.'
		},
		{
			toolId: TOOLS.FOG_CLEARING_CONTAINING_ROW,
			description: 'On cell input, clear containing row.'
		},
		{
			toolId: TOOLS.FOG_CLEARING_CONTAINING_COLUMN,
			description: 'On cell input, clear containing column.'
		},
		{
			toolId: TOOLS.FOG_CLEARING_KNIGHTS_MOVE,
			description: "On cell input, clear cells a knight's move away."
		}
	],

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_ELEMENT,
			TOOL_CATEGORIES.FOG_TOOL
		]
	}
};
