import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { arrowUsage } from '../ToolUsage';
import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';

const DEFAULT_ARROW_CATEGORIES = [
	TOOL_CATEGORIES.ARROW_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.ARROW_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const arrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.ARROW,

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
		categories: DEFAULT_ARROW_CATEGORIES
	}
};

export const averageArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.AVERAGE_ARROW,

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
		categories: DEFAULT_ARROW_CATEGORIES
	}
};

export const bulbousArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW, allowSelfIntersection: true },

	toolId: TOOLS.BULBOUS_ARROW,

	shape: {
		type: SHAPE_TYPES.BULBOUS_ARROW,
		r: { editable: false, value: 0.3 },
		inset: { editable: false, value: 0.2 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		strokeLinejoin: { editable: false, value: 'round' },
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
		categories: DEFAULT_ARROW_CATEGORIES
	}
};

export const squareRootArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.SQUARE_ROOT_ARROW,

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
			'The digits along an arrow must sum to the square of the number in the connecting diamond.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	}
};

export const chaosConstructionArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.CHAOS_CONSTRUCTION_ARROW,

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
			'Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	}
};
