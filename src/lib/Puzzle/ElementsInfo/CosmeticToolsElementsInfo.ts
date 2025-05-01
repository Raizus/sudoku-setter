import { SHAPE_TYPES } from '../Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { defaultCageValueUpdater, validateCageValue } from './CageToolsElementsInfo';
import { defaultEdgeValueUpdater, validateEdgeValue } from './EdgeToolsElementsInfo';
import { defaultCornerValueUpdater, validateCornerValue } from './CornerToolsElementsInfo';
import { defaultOutsideDirectionValueUpdater } from './OutsideCornerToolsElementsInfo';
import { CornerOrEdge, HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import { validateOutsideDirectionValue } from './OutsideEdgeElementsInfo';

export const cosmeticCellShapeInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL
	},

	toolId: TOOLS.COSMETIC_CELL_CENTER_SHAPE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		allowedTypes: [
			SHAPE_TYPES.CIRCLE,
			SHAPE_TYPES.ELLIPSE,
			SHAPE_TYPES.SQUARE,
			SHAPE_TYPES.RECTANGLE,
			SHAPE_TYPES.POLYGON
		],
		r: { editable: true, value: 0.3, lb: 0.01, ub: 0.5, step: 0.01 },
		n: { editable: true, value: 3, lb: 3, ub: 10, step: 1 },
		width: { editable: true, value: 0.6, lb: 0.01, ub: 1, step: 0.01 },
		height: { editable: true, value: 0.6, lb: 0.01, ub: 1, step: 0.01 },
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_ELEMENT]
	}
};

export const cosmeticCellArrowInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW,
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.COSMETIC_CELL_ARROW,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.05, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_ELEMENT]
	}
};

export const cosmeticCellMultiArrowInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW,
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.COSMETIC_CELL_MULTI_ARROW,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.04, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_ELEMENT]
	}
};

export const cosmeticEdgeInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.EDGE,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultEdgeValueUpdater(oldValue, key, validateEdgeValue),
		defaultValue: ''
	},

	toolId: TOOLS.COSMETIC_EDGE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		allowedTypes: [
			SHAPE_TYPES.CIRCLE,
			SHAPE_TYPES.ELLIPSE,
			SHAPE_TYPES.SQUARE,
			SHAPE_TYPES.RECTANGLE,
			SHAPE_TYPES.POLYGON
		],
		r: { editable: true, value: 0.15, lb: 0.01, ub: 1, step: 0.01 },
		n: { editable: true, value: 3, lb: 3, ub: 10, step: 1 },
		width: { editable: true, value: 0.2, lb: 0.01, ub: 2, step: 0.01 },
		height: { editable: true, value: 0.2, lb: 0.01, ub: 2, step: 0.01 },
		angle: { editable: true, value: 0 },
		strokeWidth: { editable: true, value: 0.02, lb: 0, ub: 0.5, step: 0.01 },
		stroke: { editable: true, value: 'black' },
		fill: { editable: true, value: 'var(--grid-background-color)' }
	},

	menu: {
		type: 'select',
		name: 'Cosmetic Edge'
	},

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.COSMETIC_TOOL,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	}
};

export const cosmeticCornerInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultCornerValueUpdater(oldValue, key, validateCornerValue),
		defaultValue: ''
	},

	toolId: TOOLS.COSMETIC_CORNER,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		allowedTypes: [
			SHAPE_TYPES.CIRCLE,
			SHAPE_TYPES.ELLIPSE,
			SHAPE_TYPES.SQUARE,
			SHAPE_TYPES.RECTANGLE,
			SHAPE_TYPES.POLYGON
		],
		r: { editable: true, value: 0.2, lb: 0.01, ub: 1, step: 0.01 },
		n: { editable: true, value: 3, lb: 3, ub: 10, step: 1 },
		width: { editable: true, value: 0.4, lb: 0.01, ub: 2, step: 0.01 },
		height: { editable: true, value: 0.4, lb: 0.01, ub: 2, step: 0.01 },
		angle: { editable: true, value: 0 },
		strokeWidth: { editable: true, value: 0.015, lb: 0, ub: 0.5, step: 0.005 },
		stroke: { editable: true, value: 'black' },
		fill: { editable: true, value: 'var(--grid-background-color)' }
	},

	menu: {
		type: 'select',
		name: 'Cosmetic Corner'
	},

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.COSMETIC_TOOL,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	}
};

export const cosmeticLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true
	},

	toolId: TOOLS.COSMETIC_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		strokeWidth: { editable: true, value: 0.15 },
		strokeDasharray: { editable: true, value: 0 },
		strokeDashoffset: { editable: true, value: 0 },
		linePathOptions: {
			shortenHead: { editable: true, value: 0.15 },
			shortenTail: { editable: true, value: 0.15 },
			bezierRounding: { editable: true, value: 0.1 },
			closeLoops: { editable: true, value: true }
		}
	},

	menu: {
		type: 'select',
		name: 'Cosmetic Line'
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_ELEMENT]
	}
};

export const cosmeticLineWithCircleEndsInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true
	},

	toolId: TOOLS.COSMETIC_LINE_WITH_CIRCLE_ENDS,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		n: { editable: true, value: 4 },
		r: { editable: true, value: 0.35 },
		stroke: { editable: true, value: 'black' },
		strokeWidth: { editable: true, value: 0.03 },
		strokeDasharray: { editable: true, value: 0 },
		strokeDashoffset: { editable: true, value: 0 },
		linePathOptions: {
			shortenHead: { editable: true, value: 0.15 },
			shortenTail: { editable: true, value: 0.15 },
			bezierRounding: { editable: true, value: 0.15 },
			closeLoops: { editable: true, value: true }
		}
	},

	menu: {
		type: 'select',
		name: 'Cosmetic Line With Circle Ends'
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_ELEMENT]
	}
};

export const cosmeticLineWithPolygonEndsInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true
	},

	toolId: TOOLS.COSMETIC_LINE_WITH_POLYGON_ENDS,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_POLYGON_ENDS,
		n: { editable: true, value: 4 },
		r: { editable: true, value: 0.35 },
		angle: { editable: true, value: 0 },
		stroke: { editable: true, value: 'black' },
		strokeWidth: { editable: true, value: 0.03 },
		strokeDasharray: { editable: true, value: 0 },
		strokeDashoffset: { editable: true, value: 0 },
		linePathOptions: {
			shortenHead: { editable: true, value: 0.15 },
			shortenTail: { editable: true, value: 0.15 },
			bezierRounding: { editable: true, value: 0.15 },
			closeLoops: { editable: true, value: true }
		}
	},

	menu: {
		type: 'select',
		name: 'Cosmetic Line With Polygon Ends'
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_ELEMENT]
	}
};

export const cosmeticCageInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CAGE,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultCageValueUpdater(oldValue, key, validateCageValue),
		defaultValue: '',
		allowDiagonallyAdjacent: true
	},

	toolId: TOOLS.COSMETIC_CAGE,

	shape: {
		strokeWidth: { editable: true, value: 0.03, lb: 0, ub: 0.5, step: 0.01 },
		strokeDasharray: { editable: true, value: 0.08 },
		stroke: { editable: true, value: 'black' },
		fill: { editable: true, value: 'none' },
		inset: { editable: true, value: 0.06 }
	},

	menu: {
		type: 'select',
		name: 'Cosmetic Cage'
	},

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.COSMETIC_TOOL,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	}
};

export const cosmeticArrowInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.ARROW
	},

	toolId: TOOLS.COSMETIC_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: true, value: 0.35, lb: 0, ub: 1, step: 0.01 },
		strokeWidth: { editable: true, value: 0.05, lb: 0, ub: 0.5, step: 0.01 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.2 }
		}
	},

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.COSMETIC_TOOL,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	}
};

export const cosmeticOutsideDirectionInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
		defaultValue: '',
		cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
	},

	toolId: TOOLS.COSMETIC_OUTSIDE_DIRECTION,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: true, value: 0.3, lb: 0, ub: 1, step: 0.01 },
		strokeWidth: { editable: true, value: 0.04, lb: 0, ub: 0.5, step: 0.01 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.2 }
		}
	},

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.COSMETIC_TOOL,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.OUTSIDE_DIRECTION_TOOL,
			TOOL_CATEGORIES.LOCAL_ELEMENT
		]
	}
};
