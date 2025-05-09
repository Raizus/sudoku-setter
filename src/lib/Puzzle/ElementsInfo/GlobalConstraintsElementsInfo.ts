import type { AbstractElementInfo } from '../ElementInfo';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

const diagonalConstraintsDefaultCategories = [
	TOOL_CATEGORIES.LOCAL_ELEMENT,
	TOOL_CATEGORIES.DIAGONAL_CONSTRAINTS
];

export const sudokuRulesDoNotApplyInfo: AbstractElementInfo = {
	toolId: TOOLS.SUDOKU_RULES_DO_NOT_APPLY,

	meta: {
		description: 'Sudoku rules do not apply.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const leaveEmptyCellsEmptyInfo: AbstractElementInfo = {
	toolId: TOOLS.LEAVE_EMPTY_CELLS_EMPTY,

	meta: {
		description:
			'This is for the solver and solution display purposes only. It will fill empty cells with all zeros when solving a puzzle, and leave those cells empty on the display.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const hexedSudokuInfo: AbstractElementInfo = {
	toolId: TOOLS.HEXED_SUDOKU,

	meta: {
		description:
			'Fill every row, column, and box with an identical set of 9 unique numbers, selected from the numbers 1-15 (Alternatively, in hexadecimal, 1-F).',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antiknightInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTIKNIGHT,

	meta: {
		description: "Cells that are a chess knight's move apart must not contain the same number.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antiGiraffeInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTI_GIRAFFE,

	meta: {
		description:
			'Cells (1,4) or (4,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c1/r2c9/r5c4/r5c6.)',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antiLongKnightInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTI_LONG_KNIGHT,

	meta: {
		description:
			'Cells (1,3) or (3,1) apart cannot contain the same digit. (eg the digit in r1c5 cannot appear in r2c2/r2c8/r4c4/r4c6.)',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antikingInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTIKING,

	meta: {
		description: "Cells that are a chess king's move apart must not contain the same number.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const disjointGroupsInfo: AbstractElementInfo = {
	toolId: TOOLS.DISJOINT_GROUPS,

	meta: {
		description:
			'Cells that appear in the same position relative to their default regions must not contain the same number.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const tangoInfo: AbstractElementInfo = {
	toolId: TOOLS.TANGO,

	meta: {
		description:
			'No adjacent run of three cells may be all odd or all even, horizontally or vertically.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const nonconsecutiveInfo: AbstractElementInfo = {
	toolId: TOOLS.NONCONSECUTIVE,

	meta: {
		description: 'Orthogonally adjacent cells must not contain consecutive numbers.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const nonratioInfo: AbstractElementInfo = {
	toolId: TOOLS.NONRATIO,

	meta: {
		description: 'Orthogonally adjacent cells cannot be in 1:2 ratio.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const negativeDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.NEGATIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' }
	},

	meta: {
		description: 'Numbers must not repeat on the negative diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const positiveDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.POSITIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' }
	},

	meta: {
		description: 'Numbers must not repeat on the positive diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const negativeAntidiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.NEGATIVE_ANTIDIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'rgb(169, 0, 169)' }
	},

	meta: {
		description: 'The negative diagonal containts only 3 different numbers.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const positiveAntidiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.POSITIVE_ANTIDIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'rgb(169, 0, 169)' }
	},

	meta: {
		description: 'The positive diagonal containts only 3 different numbers.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const parityMirrorNegativeDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.PARITY_MIRROR_NEGATIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'orange' }
	},

	meta: {
		description: 'Odd/Even parity is reflected across the purple negative diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const parityMirrorPositiveDiagonalInfo: AbstractElementInfo = {
	toolId: TOOLS.PARITY_MIRROR_POSITIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'orange' }
	},

	meta: {
		description: 'Odd/Even parity is reflected across the purple positive diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
	}
};

export const boxRowsAndColumnsFormModularityAndEntropySetInfo: AbstractElementInfo = {
	toolId: TOOLS.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS,

	meta: {
		description:
			"Let a digit's entropy describe if it is low (123), medium (456), or high (789). Let its modularity be its remainder when divided by 3. Let a SET be a set of three digits such that their entropy and modularity are either all the same or all different. Some examples of SETs are: 789 (same entropy, different modularity), 258 (different entropy, same modularity), 168 and 348 (different entropy and different modularity). In this puzzle, the three rows and three columns of each box all form SETs.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const antiEntropyInfo: AbstractElementInfo = {
	toolId: TOOLS.ANTI_ENTROPY,

	meta: {
		description:
			'Anti-Entropy: No pair of orthogonally adjacent cells can contain digits from the same entropic set. The entropic sets are low (1, 2, 3), middle (4, 5, 6) and high (7, 8, 9).',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const globalIndexingColumnInfo: AbstractElementInfo = {
	toolId: TOOLS.GLOBAL_INDEXING_COLUMN,

	meta: {
		description:
			'Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

export const allOddDigitsAreOrthogonallyConnectedInfo: AbstractElementInfo = {
	toolId: TOOLS.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED,

	meta: {
		description: 'All odd numbers must form an othogonally connected region at the end.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT]
	}
};

