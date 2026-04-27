import { type EditableShapeI, SHAPE_TYPES } from '../../Shape/Shape';
import { TOOL_CATEGORIES } from '../../Tools';

export const edgeDefaultCategories = [
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.EDGE_TOOL,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const typableEdgeDefaultCategories = [
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.EDGE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const EDGE_R_1 = 0.15;
export const EDGE_STROKE_WIDTH_1 = 0.02;

export const DEFAULT_WHITE_CIRCLE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: true, value: EDGE_R_1, lb: 0, ub: 1, step: 0.01 },
	strokeWidth: { editable: true, value: EDGE_STROKE_WIDTH_1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'var(--grid-background-color)' }
};

export const DEFAULT_GRAY_CIRCLE: EditableShapeI = {
	...DEFAULT_WHITE_CIRCLE,
	fill: { editable: true, value: 'gray' }
};

export const DEFAULT_BORDER_LINE: EditableShapeI = {
	type: SHAPE_TYPES.BORDER_LINE,
	strokeWidth: { editable: true, value: 0.1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	opacity: { editable: true, value: 0.9 }
};

export const DEFAULT_BLACK_ARROW: EditableShapeI = {
	type: SHAPE_TYPES.ARROW,
	strokeWidth: { editable: true, value: 0.1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	fontSize: { editable: false, value: 0.3 }
};
