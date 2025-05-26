import {
	type SingleCellArrowToolOptions,
	HANDLER_TOOL_TYPE,
	CornerOrEdge
} from '$input/ToolInputHandlers/types';
import {
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { Cell } from '../Grid/Cell';
import type { Grid } from '../Grid/Grid';
import type { CellArrowToolI, ConstraintsElement } from '../puzzle_schema';
import { SHAPE_TYPES } from '../Shape/Shape';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

export const DEFAULT_SINGLE_CELL_ARROW_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_ARROW_TOOL,
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const DEFAULT_SINGLE_CELL_ARROW_OPTIONS: SingleCellArrowToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW,
	cornerOrEdge: CornerOrEdge.CORNER_OR_EDGE
};

function simpleCellArrowElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	func: (grid: Grid, constraint: CellArrowToolI) => string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = func(grid, constraint as CellArrowToolI);
		out_str += constraint_str;
	}
	return out_str;
}

function sashiganeArrowPointsToBendConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	let cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);
	cells = [cell, ...cells];

	const sashigane_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE);
	const sashigane_bend_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE_BENDS);

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);

	let out_str = `constraint sashigane_arrow_points_to_bend_p(${cell_var}, ${sashigane_var}, ${sashigane_vars_str}, ${sashigane_bend_vars_str});\n`;
	out_str += `constraint count_same_adjacent(sashigane, ${cell.r}, ${cell.c}) == 1;\n`;
	return out_str;
}

function sashiganeArrowPointsToBendElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCellArrowElement(model, element, sashiganeArrowPointsToBendConstraint);
	return out_str;
}

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
	},

	solver_func: sashiganeArrowPointsToBendElement
};

function thermoSightlineLoopArrowConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	const cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);

	const cells_vars = cellsToVarsName(cells);
	const cells_vars_str = '[' + cells_vars.join(',') + ']';
	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const cell_var = cellToVarName(cell);

	const constraint_str = `constraint thermo_sightline_loop_arrow_p(${cells_vars_str}, ${loop_vars_str}, ${cell_var});\n`;
	return constraint_str;
}

function thermoSightlineLoopArrowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCellArrowElement(model, element, thermoSightlineLoopArrowConstraint);
	return out_str;
}

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
	},

	solver_func: thermoSightlineLoopArrowElement
};

function internalLoopSkyscrapersConstraint(grid: Grid, constraint: CellArrowToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const direction = constraint.direction;
	const cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);

	const cells_vars = cellsToVarsName(cells);
	const cells_vars_str = '[' + cells_vars.join(',') + ']';
	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const cell_var = cellToVarName(cell);

	const constraint_str = `constraint internal_loop_skyscrapers_p(${cells_vars_str}, ${loop_vars_str}, ${cell_var});\n`;
	return constraint_str;
}

function internalLoopSkyscrapersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCellArrowElement(model, element, internalLoopSkyscrapersConstraint);
	return out_str;
}

export const internalLoopSkyscrapersInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.INTERNAL_LOOP_SKYSCRAPERS,

	shape: {
		type: SHAPE_TYPES.CELL_ARROW,
		strokeWidth: { editable: false, value: 0.05 },
		stroke: { editable: true, value: 'gray' }
	},

	meta: {
		description:
			'Each cell on the loop represents a skyscraper with a height equal to its value (non-loop cells are not skyscrapers). A digit in a clued cell gives the number of skyscrapers visible in the indicated direction (not including the cell itself), where skyscrapers block the view of skyscrapers with the same or lower height behind them. The clued cell may or may not be on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: internalLoopSkyscrapersElement
};
