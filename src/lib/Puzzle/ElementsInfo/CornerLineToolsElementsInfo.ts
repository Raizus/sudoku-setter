import { HANDLER_TOOL_TYPE } from "$input/ToolInputHandlers/types";
import type { SquareCellElementInfo } from "../ElementInfo";
import { RENDER_ORDER } from "../RenderOrder";
import { SHAPE_TYPES } from "../Shape/Shape";
import { TOOL_CATEGORIES, TOOLS } from "../Tools";

const cornerLineDefaultCategories = [
	TOOL_CATEGORIES.CORNER_LINE_CONSTRAINT,
	TOOL_CATEGORIES.CORNER_LINE_TOOL,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT
];

export const mazeWallInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.CORNER_LINE,
	},

	toolId: TOOLS.MAZE_WALL,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.MAZE_WALL,
		r: { editable: true, value: 0.13 },
		strokeWidth: { editable: true, value: 0.12 },
		opacity: { editable: true, value: 1.0 },
		stroke: { editable: true, value: 'darkblue' },
		fill: { editable: true, value: 'darkblue' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0 },
			shortenTail: { editable: false, value: 0 },
			bezierRounding: { editable: false, value: 0 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Maze wall for directed paths.',
		tags: [],
		categories: cornerLineDefaultCategories
	}
};