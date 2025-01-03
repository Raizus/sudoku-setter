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
import { getSingleCellMultiArrowToolInputHandler } from '$input/ToolInputHandlers/SingleCellMultiArrowToolInputHandler';
import { getSingleCellArrowToolInputHandler } from '$input/ToolInputHandlers/SingleCellArrowToolInputHandler';

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

export const countingCirclesInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COUNTING_CIRCLES,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'lightsalmon' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const yinYangMinesweeperInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_MINESWEEPER,
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
			"Circles act as 'minesweeper' clues. Cells containing a circle are always unshaded, and their value is the number of shaded cells in the surrounding 3x3 area (i.e. the up to eight cells that touch the circle either orthogonally or diagonally).",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const yinYangSeenUnshadedCellsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_SEEN_UNSHADED_CELLS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Black circles represent unshaded cells. A digit on a circle is equal to the number of consecutive unshaded cells (including itself) the circle sees in its row and column.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const yinYangSeenShadedCellsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_SEEN_SHADED_CELLS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'yellow' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Yellow circles represent shaded cells. A digit on a circle is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const yinYangSeenSameShadeCellsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_SEEN_SAME_SHADE_CELLS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const yinYangAdjacentSameShadeCountInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		angle: { editable: false, value: 45 },
		stroke: { editable: false, value: 'yellow' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Numbers in cells with yellow diamonds indicate how many of that cell's (up to four) orthogonal neighbours share the same shading as the cell.",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const twoContiguousRegionsRowColumnOppositeSetCountInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const seenRegionBordersCountInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.SEEN_REGION_BORDERS_COUNT,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const nurimisakiUnshadedEndpointInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const countCellsNotInTheSameRegionArrowsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellMultiArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.04, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description:
			'A cell with an arrow (or arrows) indicates how many cells in the indicated directions combined that do not belong to the same region as that cell.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.SINGLE_CELL_MULTIARROW_TOOL,
			TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT
		]
	}
};

export const yinYangSumOfCellsOfOppositeColorInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellMultiArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description:
			'An arrow in a cell indicates that the digit in that cell equals the sum of the contents of all cells of the opposite colour in the direction of the arrow. If a cell contains multiple arrows, each arrow is summed separately.',
		tags: [],
		categories: [
			TOOL_CATEGORIES.SINGLE_CELL_MULTIARROW_TOOL,
			TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT
		]
	}
};

export const loopCellCountArrowsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellMultiArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.LOOP_CELL_COUNT_ARROWS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: true, value: 0.03, lb: 0.01, ub: 0.2, step: 0.01 },
		stroke: { editable: true, value: 'black' }
	},

	meta: {
		description:
			'Numbers on cells with arrows refer to the total amount of loop cells seen in the indicated direction(s).',
		tags: [],
		categories: [
			TOOL_CATEGORIES.SINGLE_CELL_MULTIARROW_TOOL,
			TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT
		]
	}
};

export const sashiganeBendRegionCountInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.SASHIGANE_BEND_REGION_COUNT,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'gray' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const sashiganeArrowPointsToBendInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellArrowToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.SASHIGANE_ARROW_POINTS_TO_BEND,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: false, value: 0.05 },
		stroke: { editable: true, value: 'gray' }
	},

	meta: {
		description: '',
		tags: [],
		categories: [
			TOOL_CATEGORIES.SINGLE_CELL_ARROW_TOOL,
			TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
			TOOL_CATEGORIES.LOCAL_CONSTRAINT
		]
	}
};

export const sashiganeRegionSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.SASHIGANE_REGION_SUM,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const cellOnTheLoopInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.CELL_ON_THE_LOOP,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'A black square indicates the cell is on the loop.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const cellNotOnTheLoopInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.CELL_NOT_ON_THE_LOOP,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'A black circle indicates the cell is not on the loop.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const countLoopNeighbourCellsInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.COUNT_LOOP_NEIGHBOUR_CELLS,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'orange' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};

export const twilightCaveFillominoClueInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getSingleCellToolInputHandler(svgRef, grid, tool, undefined, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
			defaultValue: ''
		});
	},

	toolId: TOOLS.TWILIGHT_CAVE_FILLOMINO_CLUE,
	order: RENDER_ORDER.CELL_SHAPE_TOOL,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).',
		tags: [],
		categories: singleCellShapeDefaultCategories
	}
};