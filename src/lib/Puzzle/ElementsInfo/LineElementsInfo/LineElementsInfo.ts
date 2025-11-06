import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '$lib/Puzzle/ElementInfo';
import { lineUsage } from '../../ToolUsage';
import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import {
	circularValuedLineElement,
	DEFAULT_LINE_OPTIONS_INTERSECT,
	DEFAULT_LINE_OPTIONS_NO_INTERSECT,
	DEFAULT_META_1,
	getLineVars,
	REGION_SUM_LINE_SHAPE,
	shadedLineElement,
	simpleLineDefaultCategories,
	simpleLineElement,
	simpleMultipliersLineElement,
	valuedLineElement
} from './helpers';
import type { ConstraintsElement, LineToolI } from '../../puzzle_schema';
import {
	cellsFromCoords,
	cellsToGridVarsStr,
	cellsToVarsName,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { Cell } from '../../Grid/Cell';
import type { Grid } from '../../Grid/Grid';
import { combinations } from '$src/lib/utils/functionUtils';

function splitLineByRegion(line: Cell[]) {
	const regions: Cell[][] = [];
	if (!line.length) return regions;

	let prev_region: number | null = null;
	let cells: Cell[] = [];
	for (const cell of line) {
		const region = cell.region;
		if (prev_region !== region) {
			if (cells.length) regions.push(cells);
			cells = [];
		}
		cells.push(cell);
		prev_region = region;
	}
	if (cells.length) regions.push(cells);

	return regions;
}

function thermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'strictly_increasing');
	return out_str;
}

export const thermometerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.THERMOMETER,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		strokeWidth: { editable: false, value: 0.15 },
		r: { editable: false, value: 0.25 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		...DEFAULT_META_1,
		description: 'Numbers along a thermometer must increase from the bulb end.'
	},

	solver_func: thermoElement
};

function customThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'custom_thermo_p');
	return out_str;
}

export const customThermometerInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: false,
		defaultValue: '2'
	},

	toolId: TOOLS.CUSTOM_THERMOMETER,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		strokeWidth: { editable: false, value: 0.15 },
		r: { editable: false, value: 0.25 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		...DEFAULT_META_1,
		description:
			'Numbers along a thermometer must increase by at least X (default = 2) at a time. Negative values are allowed.'
	},

	solver_func: customThermoElement
};

function fuzzyThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'fuzzy_thermo_p');
	return out_str;
}

export const fuzzyThermometerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.FUZZY_THERMOMETER,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: false, value: 0.2 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			shortenHead: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.1 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		...DEFAULT_META_1,
		description:
			'Grey lines are thermometers. Digits along thermometers must increase from the bulb to the tip, which can be on either end and are to be deduced.'
	},

	solver_func: fuzzyThermoElement
};

function slowThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'increasing');
	return out_str;
}

export const slowThermometerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.SLOW_THERMOMETER,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		strokeWidth: { editable: false, value: 0.15 },
		r: { editable: false, value: 0.25 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		...DEFAULT_META_1,
		description: 'Numbers along a slow thermometer must not decrease from the bulb to the tip(s).'
	},

	solver_func: slowThermoElement
};

function rowCycleThermoConstraint(grid: Grid, c_id: string, constraint: LineToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);

	let out_str = '';
	const cycle_vars: string[] = [];
	for (let i = 0; i < cells.length; i++) {
		const cell = cells[i];
		const row = grid.getRow(cell.r);
		const row_vars = cellsToGridVarsStr(row, VAR_2D_NAMES.BOARD);
		const var_name = `cycle_${c_id}_${i}`;
		cycle_vars.push(var_name);
		const start = cell.c + 1;
		out_str += `var int: ${var_name} = cycle_order_f(${row_vars}, ${start});\n`;
	}
	const cycle_vars_str = '[' + cycle_vars.join(',') + ']';
	out_str += `constraint strictly_increasing(${cycle_vars_str});\n`;

	return out_str;
}

function rowCycleThermoElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = rowCycleThermoConstraint(grid, c_id, constraint as LineToolI);
		out_str += constraint_str;
	}
	return out_str;
}

export const rowCyclethermometerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.ROW_CYCLE_THERMOMETER,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		strokeWidth: { editable: false, value: 0.15 },
		r: { editable: false, value: 0.25 },
		opacity: { editable: false, value: 1 },
		stroke: { editable: false, value: 'var(--constraint-color-light-blue)' },
		fill: { editable: false, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		...DEFAULT_META_1,
		description:
			"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end."
	},

	solver_func: rowCycleThermoElement
};

function palindromeElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'palindrome');
	return out_str;
}

export const palindromeInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.PALINDROME,

	shape: {
		type: SHAPE_TYPES.LINE,
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		strokeWidth: { editable: true, value: 0.2 }
	},

	meta: {
		description: 'Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: palindromeElement
};

function renbanElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = simpleLineElement(model, element, 'renban', true);

	if (!element.negative_constraints) return out_str;
	const distinct_renbans = !!element.negative_constraints[TOOLS.DISTINCT_RENBANS];
	if (!distinct_renbans) return out_str;

	const constraints = element.constraints;
	if (!constraints) return out_str;
	const clist = [...Object.entries(constraints)];
	const grid = model.puzzle.grid;

	for (const [line1, line2] of combinations(clist, 2)) {
		const cells1 = cellsFromCoords(grid, (line1[1] as LineToolI).cells);
		const cells2 = cellsFromCoords(grid, (line2[1] as LineToolI).cells);

		const vars1 = cellsToGridVarsStr(cells1, VAR_2D_NAMES.BOARD);
		const vars2 = cellsToGridVarsStr(cells2, VAR_2D_NAMES.BOARD);

		out_str += `constraint distinct_renbans_p(${vars1}, ${vars2});\n`;
	}

	return out_str;
}

export const renbanLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.RENBAN_LINE,

	negative_constraints: [
		{
			toolId: TOOLS.DISTINCT_RENBANS,
			description:
				'No two renban lines can contain exactly the same set of digits. (Eg if one length three line contains the digits 345, no other length three line can contain those exact digits. However a length four line containing 2345 or a length three line containing 456 would both be acceptable.)'
		}
	],

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-purple)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.1 },
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.1 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: renbanElement
};

function doubleRenbanElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'double_renban_p', true);
	return out_str;
}

export const doubleRenbanLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.DOUBLE_RENBAN_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-purple)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'The purple lines are Double Renban lines. Each such line contains two equal-sized sets of consecutive digits. The sets might overlap partially or completely, and the digits can be in any order along the line. For example, 123123, 172839, and 142332 are each valid ways to fill a six-cell Double Renban line.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: doubleRenbanElement
};

function renrenbanbanElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'renrenbanban_p', true);
	return out_str;
}

export const renrenbanbanLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.RENRENBANBAN_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-purple)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'A purple line contains a set of consecutive digits. Any digit appearing on a line MUST appear on that line at least twice.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: renrenbanbanElement
};

function nConsecutiveRenbanLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = circularValuedLineElement(model, element, 'n_consecutive_renban_line_p');
	return out_str;
}

export const nConsecutiveRenbanLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.N_CONSECUTIVE_RENBAN_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.25 },
		stroke: { editable: true, value: 'var(--constraint-color-purple)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Every string of N consecutive cells along the large purple loop must contain a set of N consecutive digits in any order without repeats (default N = 5).',
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: nConsecutiveRenbanLineElement
};

function nabnerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'knabner_p', true);
	return out_str;
}

export const nabnerLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.NABNER_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Orange lines contain no repeated digits and no two digits on the same line can be consecutive.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: nabnerElement
};

function whispersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'whispers', '5');
	return out_str;
}

export const whispersLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.WHISPERS_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-green)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Adjacent numbers along a green line must have a difference of at least 5 (or X).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: whispersElement
};

function dutchWhispersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'whispers', '4');
	return out_str;
}

export const dutchWhispersInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '4'
	},

	toolId: TOOLS.DUTCH_WHISPERS,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Adjacent numbers along an orange line must have a difference of at least 4.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: dutchWhispersElement
};

function maximumAdjacentDifferenceLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'maximum_adjacent_difference_line_p', '2');
	return out_str;
}

export const maximumAdjacentDifferenceLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '2'
	},

	toolId: TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Adjacent numbers along an orange line must have a difference of at most X (default is X = 2).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: maximumAdjacentDifferenceLineElement
};

function renbanOrWhispersLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'renban_or_whispers_p', '5');
	return out_str;
}

export const renbanOrWhispersLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.RENBAN_OR_WHISPERS_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'An orange line is either a renban line or a whispers line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On a whispers line, adjacent numbers along the line must have a difference of at least X (default X = 5).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: renbanOrWhispersLineElement
};

function renbanOrNabnerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'renban_or_nabner_line_p', true);
	return out_str;
}

export const renbanOrNabnerLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.RENBAN_OR_NABNER_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.1 },
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.05 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'A gray line is either a renban line or a nabner line. On renban lines, cells form a set of non-repeating consecutive digits (which can be in any order). On nabner lines, digits do not repeat and no two digits on the same line can be consecutive.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: renbanOrNabnerElement
};

function outOfOrderConsecutiveLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'out_of_order_consecutive_line_p');
	return out_str;
}

export const outOfOrderConsecutiveLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.OUT_OF_ORDER_CONSECUTIVE_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-purple)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Number along a purple line form a set of non-repeating consecutive digits, which must appear out of order (i.e. 4321 is not valid while 4312 is).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: outOfOrderConsecutiveLineElement
};

function indexLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'index_line_p');
	return out_str;
}

export const indexLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.INDEX_LINE,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_POLYGON,
		strokeWidth: { editable: false, value: 0.1 },
		n: { editable: false, value: 4 },
		r: { editable: false, value: 0.3 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.1 },
			closeLoops: { editable: false, value: false }
		}
	},

	meta: {
		description:
			'On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: indexLineElement
};

function uniqueValuesLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'alldifferent', true);
	return out_str;
}

export const uniqueValuesLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.UNIQUE_VALUES_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		strokeWidth: { editable: false, value: 0.1 }
	},

	meta: {
		description: 'Along a grey line there are no repeated values.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: uniqueValuesLineElement
};

function regionSumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	let out_str = '';
	const cells = cellsFromCoords(grid, constraint.cells);

	const cell_regions = splitLineByRegion(cells);
	if (!cell_regions.length) return '';
	const sum_var: string = `sum_line_${c_id}`;
	out_str += `var int: ${sum_var};\n`;
	for (const cell_region of cell_regions) {
		const vars_str = cellsToGridVarsStr(cell_region, VAR_2D_NAMES.BOARD);
		const constraint_str = `constraint sum(${vars_str}) == ${sum_var};\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function regionSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, regionSumLineConstraint);
	return out_str;
}

export const regionSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.REGION_SUM_LINE,

	shape: REGION_SUM_LINE_SHAPE,

	meta: {
		description:
			'Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: regionSumLineElement
};

function sumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'sum_line_p');
	return out_str;
}

export const sumLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: ''
	},

	toolId: TOOLS.SUM_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Digits on a blue line sum to X.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: sumLineElement
};

function arithmeticSequenceLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'arithmetic_sequence_line_p');
	return out_str;
}

export const arithmeticSequenceLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.ARITHMETIC_SEQUENCE_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-light-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Digits along a grey line must increase by the same amount, in the same direction.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: arithmeticSequenceLineElement
};

function sameParityLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'same_parity_line_p');
	return out_str;
}

export const sameParityLineLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.SAME_PARITY_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-pink)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'On same parity pink lines, numbers are all odd or all even.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: sameParityLineElement
};

function modularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'modular_line_p', '3');
	return out_str;
}

export const modularLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '3'
	},

	toolId: TOOLS.MODULAR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-dark-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: modularLineElement
};

function unimodularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'unimodular_line_p', '3');
	return out_str;
}

export const unimodularLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '3'
	},

	toolId: TOOLS.UNIMODULAR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-dark-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N (default N = 3).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: unimodularLineElement
};

function modularOrUnimodularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'modular_or_unimodular_line_p', '3');
	return out_str;
}

export const modularOrUnimodularLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '3'
	},

	toolId: TOOLS.MODULAR_OR_UNIMODULAR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-dark-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Dark blue lines are either modular or unimodular of mod N (default N = 3). On modular lines, every set of N sequential digits contains one number from every possible remainder set, from 0 to N-1. On unimodular lines, every cell value is congruent modulo N, i.e., they have the same remainder when divided by N.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: modularOrUnimodularLineElement
};

function oddEvenOscillatorLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'odd_even_oscillator_line_p');
	return out_str;
}

export const oddEvenOscilatorLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.ODD_EVEN_OSCILLATOR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-red)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Digits along a red blue line alternate between odd and even numbers.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: oddEvenOscillatorLineElement
};

function highLowOscillatorLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'high_low_oscillator_line_p', '5');
	return out_str;
}

export const highLowOscilatorLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.HIGH_LOW_OSCILLATOR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-red)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Along a red oscillator line digits alternate being high (more than X) and low (less than X). Default X = 5.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: highLowOscillatorLineElement
};

function entropicLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint entropic_line_p(${vars_str}, {1,2,3}, {4,5,6}, {7,8,9});\n`;
	return constraint_str;
}

function entropicLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, entropicLineConstraint);
	return out_str;
}

export const entropicLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.ENTROPIC_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Along orange lines, each segment of three cells must contain one low digit (1,2,3), one medium digit (4,5,6) and one high digit (7,8,9). Digits may repeat along these lines if allowed by other rules.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: entropicLineElement
};

function entropicOrModularLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const vars = getLineVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const constraint_str: string = `constraint entropic_or_modular_line_p(${vars_str}, {1,2,3}, {4,5,6}, {7,8,9}, 3);\n`;
	return constraint_str;
}

function entropicOrModularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, entropicOrModularLineConstraint);
	return out_str;
}

export const entropicOrModularLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.ENTROPIC_OR_MODULAR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'A blue line is either an Entropic Line or a Modular Line. Along an entropic line any run of three cells contains exactly one low {1,2,3}, one medium {4,5,6}, and one high {7,8,9} digit. Along a modular line, the digits in any run of three cells must all have different remainders under division by 3. (ie So one digit must be from the set {1,4,7}, one from {2,5,8} and one from {3,6,9}).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: entropicOrModularLineElement
};

export const indexingColumnIsXLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.INDEXING_COLUMN_IS_X_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Digits along an orange line indicate the COLUMN in which the digit X (default X = 5) appears in that ROW (from left to right).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const indexingRowIsXLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.INDEXING_ROW_IS_X_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Digits along a blue line indicate the ROW in which the digit X (default X = 5) appears in that COLUMN (from top to bottom).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

function repeatedDigitsLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'repeated_digits_line_p');
	return out_str;
}

export const repeatedDigitsLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.REPEATED_DIGITS_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-orange)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'All digits appearing on an orange line are repeated on this line. The number of time each digit appears on a line is the same for all digits on the line (for example, if 2 appears three times on a line, every other digit on the line must also appear three times on it).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: repeatedDigitsLineElement
};

function superfuzzyArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'superfuzzy_arrow_p');
	return out_str;
}

export const superfuzzyArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.SUPERFUZZY_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Draw a circle in one of the cells of each gray line. The digit in the circle gives the sum of the digits towards (each of) the remaining end(s) of the line.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: superfuzzyArrowElement
};

function ambiguousArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'ambiguous_arrow_p', true);
	return out_str;
}

export const ambiguousArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.AMBIGUOUS_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Each line must contain a digit equal to half the sum of its digits. Digits may repeat on a line if allowed by other rules.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: ambiguousArrowElement
};

function headlessArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'headless_arrow_p');
	return out_str;
}

export const headlessArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.HEADLESS_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'lime' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.1 },
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.05 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'The digit on one end of each line is the sum of the other digits on that line.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: headlessArrowElement
};

function xvLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'xv_line_p');
	return out_str;
}

export const xvLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.XV_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-yellow)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Neighboring digits along a yellow line must sum either to 5 or 10.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: xvLineElement
};

function rowSumLineConstraint(grid: Grid, constraint: LineToolI) {
	const cells = cellsFromCoords(grid, constraint.cells);

	function split_by_row(_cells: Cell[]) {
		const groups: Cell[][] = [];
		let prev_row: number | null = null;
		for (const cell of _cells) {
			if (cell.r != prev_row) {
				groups.push([cell]);
				prev_row = cell.r;
			} else {
				groups[groups.length - 1].push(cell);
			}
		}
		return groups;
	}

	const groups = split_by_row(cells);
	if (groups.length < 2) return '';
	const first_group = groups[0];
	const vars1 = cellsToVarsName(first_group);
	const vars1_str = `[${vars1.join(',')}]`;

	let out_str = '';
	for (let i = 1; i < groups.length; i++) {
		const group = groups[i];
		const vars = cellsToVarsName(group);
		const vars_str = `[${vars.join(',')}]`;
		out_str += `constraint sum(${vars_str}) == sum(${vars1_str});\n`;
	}
	return out_str;
}

function rowSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = rowSumLineConstraint(grid, constraint as LineToolI);
		out_str += constraint_str;
	}
	return out_str;
}

export const rowSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.ROW_SUM_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'teal' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.1 },
			shortenTail: { editable: false, value: 0.1 },
			bezierRounding: { editable: false, value: 0.05 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Digits along a line sum to the same value for each row the line passes through.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: rowSumLineElement
};

function atLeastXLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'at_least_x_line_p', '10');
	return out_str;
}

export const atLeastXLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '10'
	},

	toolId: TOOLS.AT_LEAST_X_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Adjacent digits along a gray line must sum to X or more (default X = 10).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: atLeastXLineElement
};

function nConsecutiveFuzzySumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = circularValuedLineElement(model, element, 'n_consecutive_fuzzy_sum_line_p');
	return out_str;
}

export const nConsecutiveFuzzySumLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '3'
	},

	toolId: TOOLS.N_CONSECUTIVE_FUZZY_SUM_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'For every N (default N = 3) consecutive digits on a gray line, one of the digits has to be the sum of the others. For example, for N=3, 2-5-7, 6-9-3, and 8-4-4 are valid adjacent digits along a line.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: nConsecutiveFuzzySumLineElement
};

export const adjacentCellSumIsPrimeLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.ADJACENT_CELL_SUM_IS_PRIME_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'Pairs of adjacent numbers on a light blue line must sum to a prime number.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

function productLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedLineElement(model, element, 'product_line_p');
	return out_str;
}

export const productLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: ''
	},

	toolId: TOOLS.PRODUCT_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-light-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description: 'The product of all the digits on a line is X.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: productLineElement
};

function adjacentMultiplesLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'adjacent_multiples_line_p');
	return out_str;
}

export const adjacentMultiplesLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.ADJACENT_MULTIPLES_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gold)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'For any two adjacent digits along a gold line, one must be divisible by the other.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: adjacentMultiplesLineElement
};

function adjacentDifferencesCountLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'adjacent_differences_count_line_p');
	return out_str;
}

export const adjacentDifferencesCountLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.ADJACENT_DIFFERENCES_COUNT_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gold)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.05 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'The differences between two adjacent digits on a colored line indicates exactly how many pairs of adjacent digits along that line have that exact difference.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: adjacentDifferencesCountLineElement
};

function lookAndSayLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'look_and_say_line_p', true);
	return out_str;
}

export const lookandSayLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.LOOK_AND_SAY_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.05 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Both digits (which can be equal) on the endpoints of a line form a look-and-say clue. For example, if the digits on the endpoints are 5 and 3, then there have to be exactly five 3s AND three 5s on this line.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: lookAndSayLineElement
};

function zipperLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'zipper_line_p');
	return out_str;
}

export const zipperLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.ZIPPER_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.06 },
		stroke: { editable: true, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.05 },
			shortenTail: { editable: false, value: 0.05 },
			bezierRounding: { editable: false, value: 0 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Digits an equal distance from the center of the light blue line must sum to the digit in the center of that light blue line.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: zipperLineElement
};

function segmentedSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = circularValuedLineElement(model, element, 'segmented_sum_line_p');
	return out_str;
}

export const segmentedSumLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '10'
	},

	toolId: TOOLS.SEGMENTED_SUM_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.06 },
		stroke: { editable: true, value: 'var(--constraint-color-light-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.05 },
			shortenTail: { editable: false, value: 0.05 },
			bezierRounding: { editable: false, value: 0 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Each thick grey line can be divided into one or more non-overlapping segments. Each segment contains digits that sum to X (default=10). Eg 513173 is a valid fill for a length 6 line, because it can be broken into 5131 and 73, each of which sum to 10.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: segmentedSumLineElement
};

function segmentedSumAndRenbanLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'segmented_sum_and_renban_line_p');
	return out_str;
}

export const segmentedSumAndRenbanLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: false,
		defaultValue: ''
	},

	toolId: TOOLS.SEGMENTED_SUM_AND_RENBAN_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.06 },
		stroke: { editable: true, value: 'var(--constraint-color-light-gray)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.05 },
			shortenTail: { editable: false, value: 0.05 },
			bezierRounding: { editable: false, value: 0 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Divide each grey line into at least two non-overlapping segments. The digits on each segment of a line sum to the same total. (Different lines may have different totals.) Additionally each segment individually forms a set of non-repeating consecutive digits in any order.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: segmentedSumAndRenbanLineElement
};

function adjacentCellsAreMultiplesOfDifferenceLineElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleLineElement(
		model,
		element,
		'adjacent_cells_are_multiples_of_difference_line_p',
		false
	);
	return out_str;
}

export const adjacentCellsAreMultiplesOfDifferenceLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: false,
		defaultValue: ''
	},

	toolId: TOOLS.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.06 },
		stroke: { editable: true, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.05 },
			shortenTail: { editable: false, value: 0.05 },
			bezierRounding: { editable: false, value: 0 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'If two digits (called x and y) are (orthogonally or diagonally) adjacent along a blue line, then x as well as y has to be an integer multiple of the difference between x and y. For example, 6 and 4 are allowed to be adjacent on a blue line since both 6 and 4 are a multiple of 2 (the difference between 4 and 6).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: adjacentCellsAreMultiplesOfDifferenceLineElement
};

export const thermoOrAverageArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.THERMO_OR_AVERAGE_ARROW,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		strokeWidth: { editable: false, value: 0.15 },
		r: { editable: false, value: 0.25 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Numbers along a thermometer must increase from the bulb end. The digits along an arrow must average to the number in the connecting circle.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

function indexerCellsRegionSubsetLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);

	const cell_regions = splitLineByRegion(cells);
	cell_regions.sort((group1, group2) => group2.length - group1.length);
	if (cell_regions.length <= 1) return '';
	let out_str: string = '';

	const group1 = cell_regions[0];
	const group1_vars = cellsToGridVarsStr(group1, VAR_2D_NAMES.VALUES_GRID);
	for (const group2 of cell_regions.slice(1)) {
		const group2_vars = cellsToGridVarsStr(group2, VAR_2D_NAMES.VALUES_GRID);

		const constraint_str = `constraint subset_p(${group1_vars}, ${group2_vars});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

function indexerCellsRegionSubsetLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, indexerCellsRegionSubsetLineConstraint);
	return out_str;
}

export const indexerCellsRegionSubsetLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.INDEXER_CELLS_REGION_SUBSET_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		stroke: { editable: true, value: 'darkseagreen' },
		strokeWidth: { editable: true, value: 0.15 }
	},

	meta: {
		description:
			'All lines are region-subset lines: ie 3x3 box boundaries divide each line into segments. For any pair of segments on the same line, the values on one of those segments must all appear on the other segment. The value of an indexer cell is the digit in the cell it indexes. Example: A region-subset line could contain the values 189-8-98-918, where a dash represents a box boundary. This is valid because (8) is a subset of (89) and (189), (89) is a subset of (189), and (189) is a subset of itself.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: indexerCellsRegionSubsetLineElement
};

function peapodsLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleLineElement(model, element, 'peapods_p');
	return out_str;
}

export const peapodsLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.PEAPODS,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		stroke: { editable: true, value: 'darkseagreen' },
		strokeWidth: { editable: true, value: 0.05 },
		r: { editable: false, value: 0.4 },
		opacity: { editable: false, value: 0.9 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Digits on a line sum up to a two digit number made out of the digit in the line's circle repeated twice. For example, 245 on a line would have a 1 in its circle.",
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: peapodsLineElement
};

/* ----------------------------------------------------------------------------- */

function goldilocksZoneRegionSumLineConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: LineToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);

	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);
	const region_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.GOLDILOCKS_REGIONS);

	const constraint_str: string = `constraint goldilocks_zone_region_sum_p(${values_vars_str}, ${region_vars_str});\n`;
	return constraint_str;
}

function goldilocksZoneRegionSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, goldilocksZoneRegionSumLineConstraint);
	return out_str;
}

export const goldilocksZoneRegionSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.GOLDILOCKS_ZONE_REGION_SUM,

	shape: REGION_SUM_LINE_SHAPE,

	meta: {
		description:
			'Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: goldilocksZoneRegionSumLineElement
};

function doublersThermometerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleMultipliersLineElement(model, element, 'strictly_increasing');
	return out_str;
}

export const doublersThermometerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.DOUBLERS_THERMOMETER,

	shape: {
		type: SHAPE_TYPES.THERMO_WITH_CIRCLE,
		strokeWidth: { editable: false, value: 0.15 },
		r: { editable: false, value: 0.25 },
		opacity: { editable: false, value: 0.9 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Values along a thermometer must increase from the bulb end. If a thermometer cell is a doubler it counts as twice its value for purposes of the thermometer.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: doublersThermometerElement
};

function nurikabeRegionSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = shadedLineElement(
		model,
		element,
		VAR_2D_NAMES.NURIKABE_SHADING,
		'nurikabe_region_sum_line_p'
	);

	return out_str;
}

export const nurikabeRegionSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.NURIKABE_REGION_SUM_LINE,

	shape: REGION_SUM_LINE_SHAPE,

	meta: {
		description:
			'A blue line must contain at least one shaded and at least one unshaded cell. Switching between shaded and unshaded cells divides each line into segments with the same sum. Different lines may have different sums. Digits may repeat on a line if allowed by other rules.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	},

	solver_func: nurikabeRegionSumLineElement
};