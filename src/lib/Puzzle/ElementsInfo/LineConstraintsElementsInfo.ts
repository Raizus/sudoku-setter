import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '$lib/Puzzle/ElementInfo';
import { lineUsage } from '../ToolUsage';
import { HANDLER_TOOL_TYPE, type LineToolInputOptions } from '$input/ToolInputHandlers/types';

const simpleLineDefaultCategories = [
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LINE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const doubleEndedLineDefaultCategories = [
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.DOUBLE_ENDED_LINE_CONSTRAINT,
	TOOL_CATEGORIES.LINE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_META_1 = {
	description: '',
	usage: lineUsage(),
	tags: [],
	categories: simpleLineDefaultCategories
};

const DEFAULT_LINE_OPTIONS_INTERSECT: LineToolInputOptions = {
	type: HANDLER_TOOL_TYPE.LINE,
	allowSelfIntersection: true
};

const DEFAULT_LINE_OPTIONS_NO_INTERSECT: LineToolInputOptions = {
	type: HANDLER_TOOL_TYPE.LINE,
	allowSelfIntersection: false
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

export const renbanLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.RENBAN_LINE,

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

export const regionSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.REGION_SUM_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
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
	}
};

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
	}
};

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
	}
};

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
	}
};

export const ZipperLineInfo: SquareCellElementInfo = {
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
	}
};

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
	}
};

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
	}
};

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
	}
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
	}
};

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
	}
};

/* ----------------------------------------------------------------------------- */

export const yinYangShadedWhispersLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '5'
	},

	toolId: TOOLS.YIN_YANG_SHADED_WHISPERS_LINE,

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
		description:
			'Within shaded yin yang areas, adjacent digits along a green line must differ by at least x (default x = 5).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const yinYangUnshadedEntropicLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.YIN_YANG_UNSHADED_ENTROPIC_LINE,

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
			'Within unshaded yin yang areas, any string or 3 or fewer digits along an orange line must be from a different set ({1,2,3}, {4,5,6}, {7,8,9}).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const yinYangUnshadedModularLineInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: true,
		defaultValue: '3'
	},

	toolId: TOOLS.YIN_YANG_UNSHADED_MODULAR_LINE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
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
			'Within unshaded yin yang areas, every set of N or less sequential digits contains one number from every possible remainder set, from 0 to N-1 (default N = 3). For example, on modular lines of mod 3, every set of 3 sequential cells contains one digit from {1,4,7} (remainder 1), one from {2,5,8} (remainder 2) and one from {3,6,9} (remainder 0).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const yinYangCalifornianMountainSnakeInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.LINE,
		allowSelfIntersection: false
	},

	toolId: TOOLS.YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.1 },
		stroke: { editable: true, value: 'var(--constraint-color-dark-red)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Along the red line, each run of cells with the same yin yang shading contains a non-repeating set of consecutive digits in any order. Along the red line, digits in each pair of adjacent cells with different yin yang shading must differ by at least 5.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const yinYangRegionSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_INTERSECT,

	toolId: TOOLS.YIN_YANG_REGION_SUM_LINE,

	negative_constraints: [
		{
			toolId: TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE,
			description: 'All lines must cross colours at least once.'
		}
	],

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
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
			'Blue lines must have an equal sum N within each colour they pass through. If a blue line passes through a colour multiple times, each individual pass sums to N.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const yinYangIndexingLineColoringInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.YIN_YANG_INDEXING_LINE_COLORING,

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
			'On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line with 3 as the diamond; the 1st digit, 3, indicates that the 3rd cell contains a 1, the 2nd cell a 2, and so on. All cells that reference their own position on a indexing line (the digit N is in position N) should be dark. Cells that are not self referencing should be light. For example for the line 3214 with 3 as the diamond, the 2 and 4 would be dark and the 1 and 3 would be light.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

/* ----------------------------------------------------------------------------- */

export const goldilocksZoneRegionSumLineInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_LINE_OPTIONS_NO_INTERSECT,

	toolId: TOOLS.GOLDILOCKS_ZONE_REGION_SUM,

	shape: {
		type: SHAPE_TYPES.LINE,
		strokeWidth: { editable: true, value: 0.15 },
		stroke: { editable: true, value: 'var(--constraint-color-light-blue)' },
		linePathOptions: {
			shortenHead: { editable: false, value: 0.15 },
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.15 },
			closeLoops: { editable: false, value: true }
		}
	},

	meta: {
		description:
			'Zone borders (NOT box borders) divide light blue lines into segments, each of which has the same total (ie; the sum of its VALUES.) The two ends of a blue line always lie in different zones.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

/* ----------------------------------------------------------------------------- */

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
	}
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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};

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
	}
};
