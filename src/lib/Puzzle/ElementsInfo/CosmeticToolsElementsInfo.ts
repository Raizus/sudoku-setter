import { SHAPE_TYPES } from '../Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import { getCornerToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/CornerToolInputHandler';
import { getLineToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/LineToolInputHandler';
import { getCageToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/CageToolInputHandler';
import { getArrowToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/ArrowToolInputHandler';
import { getSingleCellToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/SingleCellToolInputHandler';
import { getEdgeToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/EdgeToolInputHandler';
import { getSingleCellArrowToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/SingleCellArrowToolInputHandler';
import { getSingleCellMultiArrowToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/SingleCellMultiArrowToolInputHandler';
import { defaultCageValueUpdater, validateCageValue } from './CageToolsElementsInfo';
import { defaultEdgeValueUpdater, validateEdgeValue } from './EdgeToolsElementsInfo';
import { defaultCornerValueUpdater, validateCornerValue } from './CornerToolsElementsInfo';
import { getOutsideDirectionToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/OutsideDirectionInputHandler';
import { defaultOutsideDirectionValueUpdater } from './OutsideCornerToolsElementsInfo';
import { CornerOrEdge } from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { validateOutsideDirectionValue } from './OutsideEdgeElementsInfo';

export const cosmeticCellShapeInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COSMETIC_CELL_SHAPE,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL]
	}
};

export const cosmeticCellArrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COSMETIC_CELL_ARROW,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.05, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL]
	}
};

export const cosmeticCellMultiArrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellMultiArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COSMETIC_CELL_MULTI_ARROW,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.04, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL]
	}
};

export const cosmeticEdgeInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.COSMETIC_EDGE,
	order: RENDER_ORDER.EDGE_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.TYPABLE_TOOL]
	}
};

export const cosmeticCornerInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCornerToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCornerValueUpdater(oldValue, key, validateCornerValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.COSMETIC_CORNER,
	order: RENDER_ORDER.CORNER_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.TYPABLE_TOOL]
	}
};

export const cosmeticLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.COSMETIC_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL]
	}
};

export const cosmeticLineWithCircleEndsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.COSMETIC_LINE_WITH_CIRCLE_ENDS,
	order: RENDER_ORDER.LINE_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL]
	}
};

export const cosmeticLineWithPolygonEndsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.COSMETIC_LINE_WITH_POLYGON_ENDS,
	order: RENDER_ORDER.LINE_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL]
	}
};

export const cosmeticCageInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCageToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultCageValueUpdater(oldValue, key, validateCageValue),
			defaultValue: '',
			allowDiagonallyAdjacent: true
		});
	},

	toolId: TOOLS.COSMETIC_CAGE,
	order: RENDER_ORDER.CAGE_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.TYPABLE_TOOL]
	}
};

export const cosmeticArrowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COSMETIC_ARROW,
	order: RENDER_ORDER.ARROW_TOOLS,

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
		categories: [TOOL_CATEGORIES.COSMETIC_TOOL, TOOL_CATEGORIES.LOCAL_CONSTRAINT]
	}
};

export const cosmeticOutsideDirectionInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
			defaultValue: '',
			cornerOrEdge: CornerOrEdge.BOTH
		});
	},

	toolId: TOOLS.COSMETIC_OUTSIDE_DIRECTION,
	order: RENDER_ORDER.ARROW_TOOLS,

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
			TOOL_CATEGORIES.LOCAL_CONSTRAINT,
			TOOL_CATEGORIES.TYPABLE_TOOL,
			TOOL_CATEGORIES.OUTSIDE_DIRECTION_TOOL
		]
	}
};
