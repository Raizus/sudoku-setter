import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '$lib/Puzzle/ElementInfo';
import { RENDER_ORDER } from '$lib/Puzzle/RenderOrder';
import { lineUsage } from '../ToolUsage';
import { getLineToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/LineToolInputHandler';

const simpleLineDefaultCategories = [
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LINE_TOOL
];

const doubleEndedLineDefaultCategories = [
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.DOUBLE_ENDED_LINE_CONSTRAINT,
	TOOL_CATEGORIES.LINE_TOOL
];

export const thermometerInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: false });
	},

	toolId: TOOLS.THERMOMETER,
	order: RENDER_ORDER.LINE_TOOLS,

	shape: {
		type: SHAPE_TYPES.THERMO,
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
		description: 'Numbers along a thermometer must increase from the bulb end.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const rowCyclethermometerInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: false });
	},

	toolId: TOOLS.ROW_CYCLE_THERMOMETER,
	order: RENDER_ORDER.LINE_TOOLS,

	shape: {
		type: SHAPE_TYPES.THERMO,
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
		description:
			"Within a row, let a 'cycle' be the path taken starting from digit A in column X and then looking at digit B in Column A, then digit C in Column B etc until the cycle returns to digit A again. The 'order' of a cycle is the number of unique digits contained in the cycle. eg A 5 in r9c1, a 9 in r9c5 and a 1 in r9c9 would force a cycle of order 3. The Order of the cycle increases along light blue thermometers starting from the bulb end.",
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const palindromeInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.PALINDROME,
	order: RENDER_ORDER.LINE_TOOLS,

	shape: {
		type: SHAPE_TYPES.LINE,
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		strokeWidth: { editable: false, value: 0.2 }
	},

	meta: {
		description: 'Gray lines are palindromes, reading the same when reversed. eg 12321 or 4554.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const renbanLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.RENBAN_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
			'Number along a purple line form a set of non-repeating consecutive digits (which can be in any order).',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const doubleRenbanLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.DOUBLE_RENBAN_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.RENRENBANBAN_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '5'
		});
	},

	toolId: TOOLS.N_CONSECUTIVE_RENBAN_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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

export const knabnerLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.KNABNER_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '5'
		});
	},

	toolId: TOOLS.WHISPERS_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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

export const maximumAdjacentDifferenceLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '2'
		});
	},

	toolId: TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '5'
		});
	},

	toolId: TOOLS.RENBAN_OR_WHISPERS_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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

export const uniqueValuesLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.UNIQUE_VALUES_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.REGION_SUM_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
		description:
			'Numbers on a blue line have an equal sum N within each box the line passes through. If a line passes through the same box more than once, each individual segment of such a line within that box sums to N separately.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const sumLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: ''
		});
	},

	toolId: TOOLS.SUM_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: false });
	},

	toolId: TOOLS.ARITHMETIC_SEQUENCE_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true
		});
	},

	toolId: TOOLS.SAME_PARITY_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: false,
			defaultValue: '3'
		});
	},

	toolId: TOOLS.MODULAR_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '3'
		});
	},

	toolId: TOOLS.UNIMODULAR_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: false,
			defaultValue: '3'
		});
	},

	toolId: TOOLS.MODULAR_OR_UNIMODULAR_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.ODD_EVEN_OSCILLATOR_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
		description: 'Digits along a light blue line alternate between odd and even numbers.',
		usage: lineUsage(),
		tags: [],
		categories: simpleLineDefaultCategories
	}
};

export const highLowOscilatorLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '5'
		});
	},

	toolId: TOOLS.HIGH_LOW_OSCILLATOR_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.ENTROPIC_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.ENTROPIC_OR_MODULAR_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '5'
		});
	},

	toolId: TOOLS.INDEXING_COLUMN_IS_X_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '5'
		});
	},

	toolId: TOOLS.INDEXING_ROW_IS_X_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.REPEATED_DIGITS_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.SUPERFUZZY_ARROW,
	order: RENDER_ORDER.LINE_TOOLS,

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

export const xvLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.XV_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.ROW_SUM_LIME,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '10'
		});
	},

	toolId: TOOLS.AT_LEAST_X_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '3'
		});
	},

	toolId: TOOLS.N_CONSECUTIVE_FUZZY_SUM_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.ADJACENT_CELL_SUM_IS_PRIME_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: ''
		});
	},

	toolId: TOOLS.PRODUCT_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.ADJACENT_MULTIPLES_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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

/* ----------------------------------------------------------------------------- */

export const betweenLineInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.BETWEEN_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, {
			allowSelfIntersection: true,
			defaultValue: '4'
		});
	},

	toolId: TOOLS.LOCKOUT_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.TIGHTROPE_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.PARITY_COUNT_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.DOUBLE_ARROW_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE,
	order: RENDER_ORDER.LINE_TOOLS,

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
	getInputHandler(svgRef, grid, tool) {
		return getLineToolInputHandler(svgRef, grid, tool, { allowSelfIntersection: true });
	},

	toolId: TOOLS.SPLIT_PEAS,
	order: RENDER_ORDER.LINE_TOOLS,

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