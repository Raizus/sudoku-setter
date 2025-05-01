import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type SingleCellMultiArrowToolOptions
} from '$input/ToolInputHandlers/types';
import type { SquareCellElementInfo } from '../ElementInfo';
import { SHAPE_TYPES, type EditableShapeI } from '../Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

const defaultCategories = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_MULTIARROW_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const defaultShape: EditableShapeI = {
	type: SHAPE_TYPES.CELL_ARROW,
	strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
	stroke: { editable: true, value: 'black' }
};

const DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS: SingleCellMultiArrowToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW,
	cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
};

export const sameGalaxyUnobstructedCountArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			"An arrow cell counts how many cells in its own galaxy are being pointed at altogether by its arrow(s), and this combined total is displayed on the arrow cell (the arrow cell itself is not included in the count.) Vision is not obscured by the other galaxy's cells.",
		tags: [],
		categories: defaultCategories
	}
};

export const yinYangCountUniqueFillominoSameShadingInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'Numbers on cells with an arrow indicate the number of polyominoes of the SAME shading/parity seen in the direction of the arrow. Arrows do not count their own cell, but may count their polyomino if a cell within its polyomino is visible in the direction of the arrow.',
		tags: [],
		categories: defaultCategories
	}
};

export const loopCellCountArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.LOOP_CELL_COUNT_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).',
		tags: [],
		categories: defaultCategories
	}
};

export const yinYangSumOfCellsOfOppositeColorInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,

	shape: defaultShape,

	meta: {
		description:
			'An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.',
		tags: [],
		categories: defaultCategories
	}
};

export const yinYangCountShadedCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.YIN_YANG_COUNT_SHADED_CELLS,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,
			description:
				'Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given.'
		}
	],

	shape: defaultShape,

	meta: {
		description:
			'Values in cells with arrows give the number of shaded cells in the indicated direction.',
		tags: [],
		categories: defaultCategories
	}
};

export const countCellsNotInTheSameRegionArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.',
		tags: [],
		categories: defaultCategories
	}
};

export const coldArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.COLD_ARROWS,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'var(--constraint-color-blue)' }
	},

	meta: {
		description:
			"A blue arrow points toward a cell N distance away that has a value less than N, where N is the digit in the arrow's cell. (For example, if r9c8 is 5, then r4c8 is less than 5.)",
		tags: [],
		categories: defaultCategories
	}
};

export const hotArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.HOT_ARROWS,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' }
	},

	meta: {
		description:
			"An orange arrow points toward a cell N distance away that has a value greater than N, where N is the digit in the arrow's cell. (For example, if r1c2 is 5, then r6c2 is greater than 5.)",
		tags: [],
		categories: defaultCategories
	}
};

export const nurikabeCountIslandCellsArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.NURIKABE_COUNT_ISLAND_CELLS_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'A cell with arrow(s) may be land or water, and the digit gives the total number of island cells in the indicated directions combined, not including itself.',
		tags: [],
		categories: defaultCategories
	}
};

export const connectFourCountCellsOfSameColorInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR,

	shape: defaultShape,

	meta: {
		description:
			"A digit on an arrow disc indicates the total number of discs in the indicated directions (combined) that match its own colour. (The arrow disc itself isn't included in the count.)",
		tags: [],
		categories: defaultCategories
	}
};

export const nextNumberedRegionDistanceArrowsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_MULTI_ARROW_OPTIONS,

	toolId: TOOLS.NEXT_NUMBERED_REGION_DISTANCE_ARROWS,

	shape: defaultShape,

	meta: {
		description:
			'If a cell with the digit X in a region with the number N contains an arrow, then the cell X steps away in the indicated direction belongs to the region numbered N+1.',
		tags: [],
		categories: defaultCategories
	}
};
