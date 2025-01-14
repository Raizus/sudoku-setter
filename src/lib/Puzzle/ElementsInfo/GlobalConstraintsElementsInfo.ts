import type { AbstractElementInfo } from '../ElementInfo';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

const diagonalConstraintsDefaultCategories = [
	TOOL_CATEGORIES.GLOBAL_CONSTRAINT,
	TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT,
	TOOL_CATEGORIES.DIAGONAL_CONSTRAINT
];

export const sudokuRulesDoNotApplyInfo: AbstractElementInfo = {
	toolId: TOOLS.SUDOKU_RULES_DO_NOT_APPLY,
	order: 0,

	meta: {
		description: 'Sudoku rules do not apply.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const leaveEmptyCellsEmptyInfo: AbstractElementInfo = {
	toolId: TOOLS.LEAVE_EMPTY_CELLS_EMPTY,
	order: 0,

	meta: {
		description: 'This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const hexedSudokuInfo: AbstractElementInfo = {
	toolId: TOOLS.HEXED_SUDOKU,
	order: 0,

	meta: {
		description:
			'Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const fillominoInfo: AbstractElementInfo = {
	toolId: TOOLS.FILLOMINO,
	order: 0,

	meta: {
		description:
			'Fillomino rules apply. Divide the grid into orthogonally connected regions such that no two regions of the same size share an edge, and enter a number into each cell equal to the size of its region.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const LITSInfo: AbstractElementInfo = {
	toolId: TOOLS.LITS,
	order: 0,

	meta: {
		description:
			'Shade one tetromino in each region. (A tetromino is a shape of four orthogonally-connected cells.) No two tetrominoes of the same shape may share an edge - reflections/rotations count as the same shape. All tetrominoes must form a single orthogonally connected area. No 2x2 area of the grid can be completely shaded.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antiknightInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTIKNIGHT,
	order: 0,

	meta: {
		description: "Cells that are a chess knight's move apart must not contain the same number.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antiGiraffeInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTI_GIRAFFE,
	order: 0,

	meta: {
		description:
			'Cells (1,4) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antikingInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTIKING,
	order: 0,

	meta: {
		description: "Cells that are a chess king's move apart must not contain the same number.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const disjointGroupsInfo: AbstractElementInfo = {
	toolId: TOOLS.DISJOINT_GROUPS,
	order: 0,

	meta: {
		description:
			'Cells that appear in the same position relative to their default regions must not contain the same number.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const tangoInfo: AbstractElementInfo = {
	toolId: TOOLS.TANGO,
	order: 0,

	meta: {
		description:
			'No adjacent run of three cells may be all odd or all even, horizontally or vertically.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const nonconsecutiveInfo: AbstractElementInfo = {
	toolId: TOOLS.NONCONSECUTIVE,
	order: 0,

	meta: {
		description: 'Orthogonally adjacent cells must not contain consecutive numbers.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const nonratioInfo: AbstractElementInfo = {
	toolId: TOOLS.NONRATIO,
	order: 0,

	meta: {
		description: 'Orthogonally adjacent cells cannot be in 1:2 ratio.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const negativeDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.NEGATIVE_DIAGONAL,
	order: 0,

	meta: {
		description: 'Numbers must not repeat on the negative diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const positiveDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.POSITIVE_DIAGONAL,
	order: 0,

	meta: {
		description: 'Numbers must not repeat on the positive diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const negativeAntidiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.NEGATIVE_ANTIDIAGONAL,
	order: 0,

	meta: {
		description: 'The negative diagonal containts only 3 different numbers.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const positiveAntidiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.POSITIVE_ANTIDIAGONAL,
	order: 0,

	meta: {
		description: 'The positive diagonal containts only 3 different numbers.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const oddEvenParityMirrorAlongNegativeDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL,
	order: 0,

	meta: {
		description: 'Odd/Even parity is reflected across the purple negative diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const oddEvenParityMirrorAlongPositiveDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL,
	order: 0,

	meta: {
		description: 'Odd/Even parity is reflected across the purple positive diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const globalIndexingColumnInfo: AbstractElementInfo = {
	toolId: TOOLS.GLOBAL_INDEXING_COLUMN,
	order: 0,

	meta: {
		description:
			'Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const allOddDigitsAreOrthogonallyConnectedInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,
	order: 0,

	meta: {
		description: 'All odd numbers must form an othogonally connected region at the end.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

/* --------------------------------------------------------------------------------------------------- */

export const allRatiosGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_RATIOS_GIVEN,
	order: 0,

	meta: {
		description: 'All Ratios are given.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allDifferencesGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_DIFFERENCES_GIVEN,
	order: 0,

	meta: {
		description: 'All Differences are given.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allXGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_X_GIVEN,
	order: 0,

	meta: {
		description: "All X's are given.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allVGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_V_GIVEN,
	order: 0,

	meta: {
		description: "All V's are given.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allXVGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_XV_GIVEN,
	order: 0,

	meta: {
		description: "All XV's are given.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allRadarsGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_RADARS_GIVEN,
	order: 0,

	meta: {
		description:
			"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given.",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allXYDifferencesGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_XY_DIFFERENCES_GIVEN,
	order: 0,

	meta: {
		description:
			'If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1. Not all possible diamonds are necessarily given. All XY differences are given.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allIndexingColumnGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_INDEXING_COLUMN_GIVEN,
	order: 0,

	meta: {
		description:
			'Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allIndexingRowGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_INDEXING_ROW_GIVEN,
	order: 0,

	meta: {
		description:
			'Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allYinYangKropkiGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_YIN_YANG_KROPKI_GIVEN,
	order: 0,

	meta: {
		description:
			'Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive. All such dots are given.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allYinYangCountShadedCellsGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_YIN_YANG_COUNT_SHADED_CELLS_GIVEN,
	order: 0,

	meta: {
		description:
			'Values in cells with arrows give the number of shaded cells in the indicated direction. All possible arrows are given',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const nurimisakiPathGermanWhispersInfo: AbstractElementInfo = {
	toolId: TOOLS.NURIMISAKI_PATH_GERMAN_WHISPERS,
	order: 0,

	meta: {
		description: 'Cells Along Nurimisaki Path Have A Difference Of At Least 5.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const allNurimisakiUnshadedEndpointsGivenInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,
	order: 0,

	meta: {
		description:
			"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area).",
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

export const yinYangRegionSumLinesMustCrossColorsAtLeastOnceInfo: AbstractElementInfo = {
	toolId: TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,
	order: 0,

	meta: {
		description:
			'Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N. All lines must cross colours at least once.',
		tags: [],
		categories: [TOOL_CATEGORIES.GLOBAL_CONSTRAINT, TOOL_CATEGORIES.NEGATIVE_CONSTRAINT]
	}
};

