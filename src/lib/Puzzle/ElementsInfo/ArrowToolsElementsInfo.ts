import { SHAPE_TYPES } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { arrowUsage } from '../ToolUsage';
import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
import {
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { ArrowToolI, ConstraintsElement } from '../puzzle_schema';
import type { Grid } from '../Grid/Grid';
import { coordsToDirection, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';

const DEFAULT_ARROW_CATEGORIES = [
	TOOL_CATEGORIES.ARROW_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.ARROW_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

function getArrowPillVars(grid: Grid, constraint: ArrowToolI) {
	const cells_coords = constraint.cells;
	const cells = cells_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const vars = cellsToVarsName(cells);
	return vars;
}

function lineToVarsStr(grid: Grid, line: GridCoordI[]) {
	const line_cells = line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	const line_vars = cellsToVarsName(line_cells.slice(1));
	const line_vars_str = `[${line_vars.join(',')}]`;
	return line_vars_str;
}

function simpleArrowConstraint(grid: Grid, constraint: ArrowToolI, predicate: string) {
	let out_str = '';
	const bulb_vars = getArrowPillVars(grid, constraint);
	const bulb_str = '[' + bulb_vars.join(',') + ']';

	for (const line of constraint.lines) {
		const line_vars_str = lineToVarsStr(grid, line);
		out_str += `constraint ${predicate}(${bulb_str}, ${line_vars_str});\n`;
	}

	return out_str;
}

function simpleArrowElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleArrowConstraint(grid, constraint as ArrowToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

export const arrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description:
			'The digits along an arrow must sum to the number in the connecting pill (read left-to right or downwards) or circle. Digits may repeat on a arrow if allowed by other rules.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleArrowElement(model.puzzle.grid, element, 'arrow_p');
	}
};

function averageArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';
	const vars = getArrowPillVars(grid, constraint);

	if (vars.length === 1) {
		const circ_var = vars[0];
		const lines = constraint.lines;
		for (const line of lines) {
			const line_vars_str = lineToVarsStr(grid, line);
			const constraint_str = `constraint average_arrow_p(${line_vars_str}, ${circ_var});\n`;
			out_str += constraint_str;
		}
	}
	return out_str;
}

export const averageArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.AVERAGE_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-green)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description: 'The digits along an arrow must average to the number in the connecting circle.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, averageArrowConstraint);
	}
};

export const bulbousArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW, allowSelfIntersection: true },

	toolId: TOOLS.BULBOUS_ARROW,

	shape: {
		type: SHAPE_TYPES.BULBOUS_ARROW,
		r: { editable: false, value: 0.3 },
		inset: { editable: false, value: 0.2 },
		strokeWidth: { editable: true, value: 0.04 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		strokeLinejoin: { editable: false, value: 'round' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description:
			'The sum of the digits in white bulb equals the sum of the digits on each attached arrow.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleArrowElement(model.puzzle.grid, element, 'bulbous_arrow_p');
	}
};

export const squareRootArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.SQUARE_ROOT_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description:
			'The digits along an arrow must sum to the square of the number in the connecting diamond.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	}
};

function chaosConstructionArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';

	const circle_cells = constraint.cells
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);
	const circle_region_vars = cellsToGridVarsStr(circle_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const lines_cells = constraint.lines.map((line) =>
		line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	for (const line of lines_cells) {
		if (line.length <= 1) continue;
		const arrow_vars = cellsToGridVarsStr(line.slice(1), VAR_2D_NAMES.UNKNOWN_REGIONS);
		out_str += `constraint chaos_construction_arrow_p(${circle_region_vars}, ${arrow_vars});\n`;
	}

	out_str += simpleArrowConstraint(grid, constraint, 'arrow_p');

	return out_str;
}

export const chaosConstructionArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.CHAOS_CONSTRUCTION_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description:
			'Digits along an arrow must sum to the number in the attached circle. Additionally, each arrow must be contained within one region, and the circle cannot belong to the same region as its arrow.',
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, chaosConstructionArrowConstraint);
	}
};

function loopPointerArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ArrowToolI
) {
	let out_str = '';

	const circle_cells = constraint.cells
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => !!cell);

	if (circle_cells.length != 1) return out_str;

	const circle_cell_var = cellToGridVarName(circle_cells[0], VAR_2D_NAMES.BOARD);
	const circle_cell_loop_var = cellToGridVarName(circle_cells[0], VAR_2D_NAMES.CELL_CENTER_LOOP);

	const lines_cells = constraint.lines.map((line) =>
		line.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	// circle cell is on the loop
	out_str += `constraint ${circle_cell_loop_var} == 1;\n`;
	out_str += simpleArrowConstraint(grid, constraint, 'arrow_p');

	for (const line of lines_cells) {
		if (line.length <= 1) continue;

		const arrow_tip_cell = line[line.length - 1];
		const arrow_tip_var = cellToGridVarName(arrow_tip_cell, VAR_2D_NAMES.BOARD);
		const arrow_before_tip_cell = line[line.length - 2];

		const delta: GridCoordI = {
			r: arrow_tip_cell.r - arrow_before_tip_cell.r,
			c: arrow_tip_cell.c - arrow_before_tip_cell.c
		};
		const direction = coordsToDirection(delta);
		const cells_in_direction = grid.getCellsInDirection(
			arrow_tip_cell.r,
			arrow_tip_cell.c,
			direction
		);
		const dir_cells_vars = cellsToGridVarsStr(cells_in_direction, VAR_2D_NAMES.BOARD);
		const dir_cells_loop_vars = cellsToGridVarsStr(
			cells_in_direction,
			VAR_2D_NAMES.CELL_CENTER_LOOP
		);

		out_str += `constraint loop_pointer_arrow_p(${circle_cell_var}, ${arrow_tip_var}, ${dir_cells_vars}, ${dir_cells_loop_vars});\n`;
	}

	out_str += simpleArrowConstraint(grid, constraint, 'arrow_p');

	return out_str;
}

export const loopPointerArrowInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.ARROW },

	toolId: TOOLS.LOOP_POINTER_ARROW,

	shape: {
		type: SHAPE_TYPES.LINE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: true, value: 0.05 },
		stroke: { editable: true, value: 'var(--constraint-color-gray)' },
		linePathOptions: {
			shortenTail: { editable: false, value: 0.15 },
			bezierRounding: { editable: false, value: 0.25 }
		}
	},

	meta: {
		description: ` - Digits along an arrow must sum to the digit in that arrow's bulb, and all bulbs are on the loop.
 - Additionally, arrow tips point towards a cell containing the digit within the arrow's bulb, and this cell with the pointed-to digit is also on the loop.
 - The digit in the arrow tip indicates the distance from the arrow tip to the pointed-to cell. There may be other instances of the same digit between this cell and the arrow tip.`,
		usage: arrowUsage(),
		tags: [],
		categories: DEFAULT_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, loopPointerArrowConstraint);
	}
};
