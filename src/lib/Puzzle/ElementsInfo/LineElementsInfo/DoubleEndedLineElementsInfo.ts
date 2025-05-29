import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import type { PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { SHAPE_TYPES } from '../../Shape/Shape';
import { TOOLS } from '../../Tools';
import { lineUsage } from '../../ToolUsage';
import { DEFAULT_LINE_OPTIONS_INTERSECT, doubleEndedLineDefaultCategories, simpleLineElement, simpleMultipliersLineElement } from './helpers';

/* ----------------------------------------------------------------------------- */

function betweenLineElement(model: PuzzleModel, element: ConstraintsElement) {
    const out_str = simpleLineElement(model, element, 'between_line_p');
    return out_str;
}

export const betweenLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.BETWEEN_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-green)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			"Numbers on a green line must be numerically in between the two circled cells at the line's ends.",
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: betweenLineElement
};


export const lockoutLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '4'
	},

	toolId: TOOLS.LOCKOUT_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_POLYGON_ENDS,
		n: { editable: false, value: 4 },
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-purple)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'Numbers on the diamond endpoints of a purple line must have a difference of at least N (default N = 4) and the remaining digits on the line cannot be between or equal to the digits on the endpoints.',
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
	}
};

function tightropeLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'tightrope_line_p');
	return out_str;
}

export const tightropeLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.TIGHTROPE_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'black' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'Circled cells at the ends of a black line have the same value and that value does not repeat along the line connecting them.',
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: tightropeLineElement
};

function parityCountLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'parity_count_line_p');
	return out_str;
}

export const parityCountLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.PARITY_COUNT_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-dark-gray)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'Circled cells at the ends of a line count the number of even values cells and the number of odd values cells on the line. Which circle is counts odds or evens must be determined by the solver.',
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: parityCountLineElement
};

function doubleArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'double_arrow_p');
	return out_str;
}

export const doubleArrowLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.DOUBLE_ARROW_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-dark-gray)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules.',
		tags: [],
		usage: lineUsage(),
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: doubleArrowElement
};

function productOfEndsEqualsSumOfLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'product_of_ends_equals_sum_of_line_p');
	return out_str;
}

export const productOfEndsEqualsSumOfLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_POLYGON_ENDS,
		n: { editable: false, value: 4 },
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'The sum of the values on the orange line must equal the product of the values in its end diamonds. Values may repeat if allowed by other rules.',
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: productOfEndsEqualsSumOfLineElement
};

function splitPeasElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'split_peas_p');
	return out_str;
}

export const splitPeasLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.SPLIT_PEAS,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'lightgreen' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.',
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: splitPeasElement
};

function doublersBetweenLineElement(model: PuzzleModel, element: ConstraintsElement) {
    const out_str = simpleMultipliersLineElement(model, element, 'between_line_p');
    return out_str;
}

export const doublersBetweenLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.DOUBLERS_BETWEEN_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-green)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			"Digits on a 'between line', which may include repeats, must be strictly between the values in the circles on the ends of that line. For the purposes of the between lines, digits on doublers count as double their value.",
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: doublersBetweenLineElement
};

function doublersDoubleArrowLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleMultipliersLineElement(model, element, 'double_arrow_p');
	return out_str;
}

export const doublersDoubleArrowLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.DOUBLERS_DOUBLE_ARROW_LINE,

	shape: {
		type: SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-green)' },
		linePathOptions: {
			bezierRounding: { editable: false, value: 0.15 }
		}
	},

	meta: {
		description:
			'The sum of the values on the line must equal the sum of the values in its end circles. Values may repeat if allowed by other rules. For the purposes of the double arrow lines, digits on doublers count as double their value.',
		usage: lineUsage(),
		tags: [],
		categories: doubleEndedLineDefaultCategories
    },
    
    solver_func: doublersDoubleArrowLineElement
};
