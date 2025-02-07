import { getArrowToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/ArrowToolInputHandler';
import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import { arrowUsage } from '../ToolUsage';

export const arrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.ARROW,
	order: RENDER_ORDER.ARROW_TOOLS,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description:
			'The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.',
		usage: arrowUsage(),
		tags: [],
		categories: [
			TOOL_CATEGORIES.ARROW_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.ARROW_TOOL
		]
	}
};

export const averageArrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.AVERAGE_ARROW,
	order: RENDER_ORDER.ARROW_TOOLS,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-green)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description: 'The digits along an arrow must average to the number in the connecting circle.',
		usage: arrowUsage(),
		tags: [],
		categories: [
			TOOL_CATEGORIES.ARROW_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.ARROW_TOOL
		]
	}
};

export const bulbousArrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getArrowToolInputHandler(svgRef, grid, tool, {allowSelfIntersection: true});
	},

	toolId: TOOLS.BULBOUS_ARROW,
	order: RENDER_ORDER.ARROW_TOOLS,

	shape: {
		type: SHAPE_TYPES.BULBOUS_ARROW,
		r: { editable: false, value: 0.3 },
		inset: {editable: false, value: 0.2},
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		strokeLinejoin: {editable: false, value: "round"},
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description:
			'The sum of the digits in white bulb equals the sum of the digits on each attached arrow.',
		usage: arrowUsage(),
		tags: [],
		categories: [
			TOOL_CATEGORIES.ARROW_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.ARROW_TOOL
		]
	}
};

export const squareRootArrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.SQUARE_ROOT_ARROW,
	order: RENDER_ORDER.ARROW_TOOLS,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description: 'The digits along an arrow must sum to the square of the number in the connecting diamond.',
		usage: arrowUsage(),
		tags: [],
		categories: [
			TOOL_CATEGORIES.ARROW_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.ARROW_TOOL
		]
	}
};