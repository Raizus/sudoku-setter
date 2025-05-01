import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { SHAPE_TYPES, type EditableShapeI } from '../Shape/Shape';
import type { SquareCellElementInfo } from '../ElementInfo';
import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type SingleCellArrowToolOptions,
	type SingleCellToolOptions
} from '$input/ToolInputHandlers/types';

const DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_SHAPE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_SINGLE_CELL_COLOR_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_COLOR_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_SINGLE_CELL_ARROW_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_ARROW_TOOL,
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_SQUARE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.SQUARE,
	strokeWidth: { editable: true, value: 0.03 },
	stroke: { editable: true, value: 'black' },
	r: { editable: true, value: 0.35 },
	fill: { editable: true, value: 'none' }
};

const DEFAULT_CIRCLE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: true, value: 0.35 },
	strokeWidth: { editable: true, value: 0.02 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'none' }
};

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

export function validateColoredCountingCirclesValue(value: string): boolean {
	const valid = value === '' || value === '1' || value === '2' || value === '3';
	return valid;
}

export function defaultSingleCellValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

const DEFAULT_SINGLE_CELL_OPTIONS: SingleCellToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL
};

const DEFAULT_VALUED_SINGLE_CELL_OPTIONS: SingleCellToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
	defaultValue: ''
};

const DEFAULT_SINGLE_CELL_ARROW_OPTIONS: SingleCellArrowToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW,
	cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
};

export const oddInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ODD,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'rgb(160, 160, 160)' }
	},

	meta: {
		description: 'Cell value is odd.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const evenInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.EVEN,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'rgb(160, 160, 160)' }
	},

	meta: {
		description: 'Cell value is even.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const minimumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.MINIMUM,

	meta: {
		description: 'Cell value is greater than orthogonally adjacent cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const maximumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.MAXIMUM,

	meta: {
		description: 'Cell value is lesser than orthogonally adjacent cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const primeCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.PRIME_CELL,

	meta: {
		description: 'Cell value is prime.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const oddMinesweeperInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ODD_MINESWEEPER,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const evenMinesweeperInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.EVEN_MINESWEEPER,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const countSameParityNeighborCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'blue' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const watchtowerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.WATCHTOWER,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const notWatchtowerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NOT_WATCHTOWER,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const farsightInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.FARSIGHT,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const radarInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
		defaultValue: '9'
	},

	toolId: TOOLS.RADAR,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const orthogonalSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ORTHOGONAL_SUM,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		fill: { editable: false, value: 'rgb(160, 160, 160)' }
	},

	meta: {
		description:
			'Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const indexingColumnInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.INDEXING_COLUMN,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(155, 40, 40, 0.3)' }
	},

	meta: {
		description:
			'Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const indexingRowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.INDEXING_ROW,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(40, 40, 155, 0.3)' }
	},

	meta: {
		description:
			'Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const lowDigitInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.LOW_DIGIT,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(40, 40, 155, 0.3)' }
	},

	meta: {
		description: 'Cells colored blue are a low digit (<5).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const highDigitInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.HIGH_DIGIT,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(155, 40, 40, 0.3)' }
	},

	meta: {
		description: 'Cells colored red are a high digit (>5).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const friendlyCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.FRIENDLY_CELL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(64, 166, 64, 0.7)' }
	},

	meta: {
		description:
			'Cells marked green are friendly cells, i.e., they contain their row, column or box number.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

export const diagonallyAdjacentSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.DIAGONALLY_ADJACENT_SUM,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const adjacentCellsInDifferentDirectionsHaveOpositeParityInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const sandwichRowColCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SANDWICH_ROW_COL_COUNT,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const countingCirclesInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.COUNTING_CIRCLES,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const reverseCountingCirclesInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.REVERSE_COUNTING_CIRCLES,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A number appearing in a circle indicates how many times that number appears *outside* of circles.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const coloredCountingCirclesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateColoredCountingCirclesValue),
		defaultValue: ''
	},

	toolId: TOOLS.COLORED_COUNTING_CIRCLES,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const uniqueCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.UNIQUE_CELLS,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 6 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'lightsalmon' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Digits do not repeat on cells with hexagons on them.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const seenEvenCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SEEN_EVEN_COUNT,

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description:
			'Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const cellKnightWhispersInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
		defaultValue: '5'
	},

	toolId: TOOLS.CELL_KNIGHT_WHISPERS,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			'Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const seenOddCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SEEN_ODD_COUNT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const yinYangMinesweeperInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_MINESWEEPER,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const yinYangSeenUnshadedCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SEEN_UNSHADED_CELLS,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const yinYangSeenShadedCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SEEN_SHADED_CELLS,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const yinYangSeenSameShadeCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SEEN_SAME_SHADE_CELLS,

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description:
			'A digit on a black square is equal to the number of consecutive shaded cells (including itself) the circle sees in its row and column, where cells of the other color block vision.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const yinYangAdjacentSameShadeCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const yinYangShadedNeighboursCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.YIN_YANG_SHADED_NEIGHBOURS_COUNT,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 8 },
		strokeWidth: { editable: false, value: 0.03 },
		angle: { editable: false, value: 22.5 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Values in cells with ocatgons give the number of shaded cells in the (up to 8) surrounding cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const twoContiguousRegionsRowColumnOppositeSetCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const seenRegionBordersCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SEEN_REGION_BORDERS_COUNT,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const nurimisakiUnshadedEndpointInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const sashiganeBendRegionCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SASHIGANE_BEND_REGION_COUNT,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const sashiganeArrowPointsToBendInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.SASHIGANE_ARROW_POINTS_TO_BEND,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: false, value: 0.05 },
		stroke: { editable: true, value: 'gray' }
	},

	meta: {
		description:
			'An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	}
};

export const thermoSightlineLoopArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.THERMO_SIGHTLINE_LOOP_ARROW,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: false, value: 0.05 },
		stroke: { editable: true, value: 'gray' }
	},

	meta: {
		description:
			"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	}
};

export const sashiganeRegionSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SASHIGANE_REGION_SUM,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const cellOnTheLoopInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CELL_ON_THE_LOOP,

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description: 'A black square indicates the cell is on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const cellNotOnTheLoopInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CELL_NOT_ON_THE_LOOP,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: 'A black circle indicates the cell is not on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const countLoopNeighbourCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.COUNT_LOOP_NEIGHBOUR_CELLS,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const twilightCaveFillominoClueInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.TWILIGHT_CAVE_FILLOMINO_CLUE,

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
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const caveClueInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CAVE_CLUE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		r: { editable: false, value: 0.35 },
		stroke: { editable: false, value: 'var(--constraint-color-light-blue' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const chaosConstructionChessSumsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_CHESS_SUMS,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const chaosConstructionArrowKnotsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_ARROW_KNOTS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.02 },
		r: { editable: false, value: 0.4 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const chaosConstructionSeenSameRegionCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const directedPathStartInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.DIRECTED_PATH_START,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 3 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'green' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `A green triangle marks the start of a directed path.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const directedPathEndInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.DIRECTED_PATH_END,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 6 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `A red hexagon marks the end of a directed path.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const teleportInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.TELEPORT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'yellow' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const nurikabeIslandProductOfSumAndSizeInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const nurikabeSeenWaterwayCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIKABE_SEEN_WATERWAY_CELLS,

	shape: {
		...DEFAULT_SQUARE_SHAPE,
		strokeDasharray: { editable: false, value: 0.08 }
	},

	meta: {
		description: `Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const nurikabeIslandSizeCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIKABE_ISLAND_SIZE_CELL,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const connectFourYellowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CONNECT_FOUR_YELLOW,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'yellow' }
	},

	meta: {
		description: `A yellow circle represents a yellow disc in connect four.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const connectFourRedInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CONENCT_FOUR_RED,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'red' }
	},

	meta: {
		description: `A red circle represents a red disc in connect four.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const shikakuRegionSizeInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SHIKAKU_REGION_SIZE,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			'Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const shikakuRegionSumInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
		defaultValue: '?'
	},

	toolId: TOOLS.SHIKAKU_REGION_SUM,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

export const fogLighsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.FOG_LIGHTS,

	meta: {
		description:
			'Place fog lights which clear the fog at the start. Fog: cover cells with fog that only clears when a correct digit is placed.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};
