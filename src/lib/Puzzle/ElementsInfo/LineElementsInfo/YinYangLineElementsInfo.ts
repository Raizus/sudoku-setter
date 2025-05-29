import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import { cellsFromCoords, cellsToGridVarsStr, VAR_2D_NAMES, type PuzzleAuxI, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Grid } from '../../Grid/Grid';
import type { ConstraintsElement, LineToolI } from '../../puzzle_schema';
import { SHAPE_TYPES } from '../../Shape/Shape';
import { TOOLS, type TOOLID } from '../../Tools';
import { lineUsage } from '../../ToolUsage';
import {
	DEFAULT_LINE_OPTIONS_INTERSECT,
	DEFAULT_LINE_OPTIONS_NO_INTERSECT,
	simpleLineDefaultCategories
} from './helpers';

function yinYangValuedLineConstraint(
    model: PuzzleModel,
    c_id: string,
    constraint: LineToolI,
    predicate: string,
    default_value: string = ''
) {
    const grid = model.puzzle.grid;
    const cells = cellsFromCoords(grid, constraint.cells);
    const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
    const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

    let value = constraint.value;
    if (!value) value = default_value;
    const val = parseInt(value);

    const constraint_str: string = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
    return constraint_str;
}

export function yinYangValuedLineElement(
    model: PuzzleModel,
    element: ConstraintsElement,
    predicate: string,
    default_value: string = ''
) {
    let out_str = '';
    const constraints = element.constraints;
    if (!constraints) return out_str;

    for (const [c_id, constraint] of Object.entries(constraints)) {
        const constraint_str = yinYangValuedLineConstraint(
            model,
            c_id,
            constraint as LineToolI,
            predicate,
            default_value
        );
        out_str += constraint_str;
    }
    return out_str;
}

function yinYangSimpleLineConstraint(grid: Grid, constraint: LineToolI, predicate: string) {
    const cells = cellsFromCoords(grid, constraint.cells);
    const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
    const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

    const constraint_str: string = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str});\n`;
    return constraint_str;
}

function yinYangSimpleLineElement(
    model: PuzzleModel,
    element: ConstraintsElement,
    predicate: string
) {
    let out_str = '';
    const constraints = element.constraints;
    if (!constraints) return out_str;

    const grid = model.puzzle.grid;
    for (const constraint of Object.values(constraints)) {
        const constraint_str = yinYangSimpleLineConstraint(grid, constraint as LineToolI, predicate);
        out_str += constraint_str;
    }
    return out_str;
}

/* ----------------------------------------------------------------------------- */

function yinYangShadedWhispersLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangValuedLineElement(model, element, 'yin_yang_shaded_whispers_line_p', '5');
	return out_str;
}

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
    },
    
    solver_func: yinYangShadedWhispersLineElement
};

function yinYangUnshadedEntropicLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangSimpleLineElement(model, element, 'yin_yang_unshaded_entropic_line_p');
	return out_str;
}

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
    },
    
    solver_func: yinYangUnshadedEntropicLineElement
};

function yinYangUnshadedModularLineElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangValuedLineElement(model, element, 'yin_yang_unshaded_modular_line_p', '3');
	return out_str;
}

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
	},

	solver_func: yinYangUnshadedModularLineElement
};

function yinYangCalifornianMountainSnakeElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangSimpleLineElement(
		model,
		element,
		'yin_yang_californian_mountaint_snake_p'
	);
	return out_str;
}

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
    },
    
    solver_func: yinYangCalifornianMountainSnakeElement
};

function yinYangRegionSumLinesMustCrossColorsAtLeastOnceConstraint(
	puzzle: PuzzleAuxI,
	toolId: TOOLID
): string {
	const grid = puzzle.grid;
	const local_constraints = puzzle.elementsDict;
	const element = local_constraints.get(TOOLS.YIN_YANG_REGION_SUM_LINE);
	if (!element || !element.constraints) return '';

	let out_str: string = `\n% ${toolId}\n`;
	for (const constraint of Object.values(element.constraints)) {
		const cells_coords = (constraint as LineToolI).cells;
		const cells = cells_coords
			.map((coord) => grid.getCell(coord.r, coord.c))
			.filter((cell) => !!cell);
		const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);
		out_str += `constraint count_unique_values(${yin_yang_vars_str}) >= 2;\n`;
	}
	return out_str;
}

function yinYangRegionSumLineElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = yinYangSimpleLineElement(model, element, 'yin_yang_region_sum_line_p');

	// negative constraints
	if (!element.negative_constraints) return out_str;
	const lines_must_cross_colors =
		!!element.negative_constraints[TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE];

	if (lines_must_cross_colors) {
		out_str += yinYangRegionSumLinesMustCrossColorsAtLeastOnceConstraint(
			model.puzzle,
			TOOLS.YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE
		);
	}

	return out_str;
}

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
    },
    
    solver_func: yinYangRegionSumLineElement
};

function yinYangIndexingLineColoringElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = yinYangSimpleLineElement(model, element, 'yin_yang_indexing_line_coloring_p');
	return out_str;
}

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
    },
    
    solver_func: yinYangIndexingLineColoringElement
};
