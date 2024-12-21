import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { RENDER_ORDER } from '../RenderOrder';
import { SHAPE_TYPES } from '../Shape/Shape';
import type { SquareCellElementInfo } from '../ElementInfo';
import { getSingleCellToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/SingleCellToolInputHandler';

const singleCellShapeDefaultCategories = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_SHAPE_TOOL
];

const singleCellColorDefaultCategories = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_COLOR_TOOL
];

export function validateSingleCellValue(value: string, maxLength = 3): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultSingleCellValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

export const oddInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.ODD,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'rgba(170, 170, 170, 0.6)' }
	},

	meta: {
		description: 'Cell value is odd.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const evenInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.EVEN,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'rgba(170, 170, 170, 0.6)' }
	},

	meta: {
		description: 'Cell value is even.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const minimumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.MINIMUM,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	meta: {
		description: 'Cell value is greater than orthogonally adjacent cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT, TOOL_CATEGORIES.LOCAL_CONSTRAINT]
	}
};

export const maximumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.MAXIMUM,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	meta: {
		description: 'Cell value is lesser than orthogonally adjacent cells.',
		tags: [],
		categories: [TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT, TOOL_CATEGORIES.LOCAL_CONSTRAINT]
	}
};

export const primeCellInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.PRIME_CELL,
	order: RENDER_ORDER.CELL_COLOR_TOOL,

	meta: {
		description: 'Cell value is prime.',
		tags: [],
		categories: singleCellColorDefaultCategories
	}
};

export const oddMinesweeperInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.ODD_MINESWEEPER,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const evenMinesweeperInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.EVEN_MINESWEEPER,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const countSameParityNeighborCellsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'blue' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const watchtowerInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.WATCHTOWER,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const notWatchtowerInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.NOT_WATCHTOWER,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const farsightInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.FARSIGHT,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const radarInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
			defaultValue: '9'
		});
	},

	toolId: TOOLS.RADAR,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const orthogonalSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.ORTHOGONAL_SUM,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		fill: { editable: false, value: 'rgba(170, 170, 170, 0.6)' }
	},

	meta: {
		description:
			'Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const indexingColumnInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.INDEXING_COLUMN,
	order: RENDER_ORDER.CELL_COLOR_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(155, 40, 40, 0.7)' }
	},

	meta: {
		description:
			'Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.',
		tags: [],
		categories: singleCellColorDefaultCategories
	}
};

export const indexingRowInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.INDEXING_ROW,
	order: RENDER_ORDER.CELL_COLOR_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(40, 40, 155, 0.7)' }
	},

	meta: {
		description:
			'Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column.',
		tags: [],
		categories: singleCellColorDefaultCategories
	}
};

export const lowDigitInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.LOW_DIGIT,
	order: RENDER_ORDER.CELL_COLOR_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(40, 40, 155, 0.7)' }
	},

	meta: {
		description: 'Cells colored blue are a low digit (<5).',
		tags: [],
		categories: singleCellColorDefaultCategories
	}
};

export const highDigitInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.HIGH_DIGIT,
	order: RENDER_ORDER.CELL_COLOR_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(155, 40, 40, 0.7)' }
	},

	meta: {
		description: 'Cells colored red are a high digit (>5).',
		tags: [],
		categories: singleCellColorDefaultCategories
	}
};

export const friendlyCellInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.FRIENDLY_CELL,
	order: RENDER_ORDER.CELL_COLOR_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(64, 166, 64, 0.7)' }
	},

	meta: {
		description:
			'Cells marked green are friendly cells, i.e., they contain their row, column or box number.',
		tags: [],
		categories: singleCellColorDefaultCategories
	}
};

export const diagonallyAdjacentSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.DIAGONALLY_ADJACENT_SUM,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Cells with circles contain the sum of all diagonally adjacent digits.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const adjacentCellsInDifferentDirectionsHaveOpositeParityInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'var(--constraint-color-green)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const sandwichRowColCountInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined);
	},

	toolId: TOOLS.SANDWICH_ROW_COL_COUNT,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};
