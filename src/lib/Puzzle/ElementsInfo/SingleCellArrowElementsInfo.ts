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
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { Cell } from '../Grid/Cell';
import type { Grid } from '../Grid/Grid';
import type { CellArrowToolI, ConstraintsElement } from '../puzzle_schema';
import { SHAPE_TYPES, type EditableShapeI } from '../Shape/Shape';
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

const DEFAULT_GRAY_ARROW: EditableShapeI = {
	type: SHAPE_TYPES.CELL_ARROW,
	strokeWidth: { editable: false, value: 0.05 },
	stroke: { editable: true, value: 'gray' }
};

const DEFAULT_BLACK_ARROW: EditableShapeI = {
	type: SHAPE_TYPES.CELL_ARROW,
	strokeWidth: { editable: false, value: 0.05 },
	stroke: { editable: true, value: 'black' }
};

function getCellsInDirection(
	grid: Grid,
	constraint: CellArrowToolI,
	include_start: boolean = false
): Cell[] {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return [];

	const direction = constraint.direction;
	const cells: Cell[] = grid.getCellsInDirection(cell.r, cell.c, direction);

	if (!include_start) return cells;

	cells.unshift(cell);
	return cells;
}

function simpleCellArrowConstraint(grid: Grid, constraint: CellArrowToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = getCellsInDirection(grid, constraint);

	const cell_var = cellToVarName(cell);
	const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

	const out_str = `constraint ${predicate}(${cells_vars}, ${cell_var});\n`;
	return out_str;
}

function simpleCellArrowElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		if (constraint.disabled) continue;
		const constraint_str = simpleCellArrowConstraint(grid, constraint as CellArrowToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function sashiganeArrowPointsToBendConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellArrowToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = getCellsInDirection(grid, constraint, true);

	const sashigane_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE);
	const sashigane_bend_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SASHIGANE_BENDS);

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);

	let out_str = `constraint sashigane_arrow_points_to_bend_p(${cell_var}, ${sashigane_var}, ${sashigane_vars_str}, ${sashigane_bend_vars_str});\n`;
	out_str += `constraint count_same_adjacent(sashigane, ${cell.r}, ${cell.c}) == 1;\n`;
	return out_str;
}

export const sashiganeArrowPointsToBendInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.SASHIGANE_ARROW_POINTS_TO_BEND,

	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			'An arrow in a cell means that cell is an end of a region, the arrow points to the bend, and also the value in the cell counts the number of cells in that leg of the region, including the bend cell (this rule does not apply to end-cells without arrows).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, sashiganeArrowPointsToBendConstraint);
	}
};

function thermoSightlineLoopArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellArrowToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = getCellsInDirection(grid, constraint);

	const cells_vars = cellsToVarsName(cells);
	const cells_vars_str = '[' + cells_vars.join(',') + ']';
	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const cell_var = cellToVarName(cell);

	const constraint_str = `constraint thermo_sightline_loop_arrow_p(${cells_vars_str}, ${loop_vars_str}, ${cell_var});\n`;
	return constraint_str;
}

export const thermoSightlineLoopArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.THERMO_SIGHTLINE_LOOP_ARROW,

	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			"Each cell with an arrow (called an 'arrow cell') lies on the loop. The digit in an arrow cell is the number of visible loop cells in the indicated direction, where non-loop cells obstruct vision. (The arrow cell is not included in this count). Additionally, digits increase along loop cells seen by an arrow, starting with the digit in the arrow cell.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, thermoSightlineLoopArrowConstraint);
	}
};

function internalLoopSkyscrapersConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellArrowToolI
) {
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

export const internalLoopSkyscrapersInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.INTERNAL_LOOP_SKYSCRAPERS,

	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			'Each cell on the loop represents a skyscraper with a height equal to its value (non-loop cells are not skyscrapers). A digit in a clued cell gives the number of skyscrapers visible in the indicated direction (not including the cell itself), where skyscrapers block the view of skyscrapers with the same or lower height behind them. The clued cell may or may not be on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, internalLoopSkyscrapersConstraint);
	}
};

export const skyscrapersArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.SKYSCRAPERS_ARROW,

	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			'A digit on an arrow indicates the number of visible digits in that direction. A digit is visible only if it is greater than all digits between it and the arrow.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleCellArrowElement(model, element, 'skyscrapers_p');
	}
};

function modularCountCellArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellArrowToolI
) {
	const cells = getCellsInDirection(grid, constraint, true);
	const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

	const out_str = `constraint modular_count_cell_arrow_p(${cells_vars});\n`;
	return out_str;
}

export const modularCountCellArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.MODULAR_COUNT_CELL_ARROW,
	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			'A digit on an arrow counts how many cells in the indicated direction have the same remainder mod-3 as itself, including itself. (Eg a 4 on an arrow would indicate that exactly four digits (including the 4 itself) in that direction were selected from the digits 1, 4 & 7 (because each of 1,4 & 7 have the same remainder (ie 1) when divided by 3).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, modularCountCellArrowConstraint);
	}
};

function entropicCountCellArrowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellArrowToolI
) {
	const cells = getCellsInDirection(grid, constraint, true);
	const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

	const out_str = `constraint entropic_count_cell_arrow_p(${cells_vars});\n`;
	return out_str;
}

export const entropicCountCellArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.ENTROPIC_COUNT_CELL_ARROW,
	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			'A digit on an arrow counts how many cells in the indicated direction are in same entropic group (123, 456, 789) as itself, including itself. (Eg a 4 on an arrow would indicate that exactly four digits (including the 4 itself) in that direction were selected from the digits 4, 5, 6.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleElementFunction(model, element, entropicCountCellArrowConstraint);
	}
};

export const magnetsCellArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.MAGNETS_CELL_ARROW,
	shape: DEFAULT_GRAY_ARROW,

	meta: {
		description:
			'A digit in a magnet cell (M) is the sum of all digits seen in the indicated direction up to the first cell seen that contains a digit larger than M.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleCellArrowElement(model, element, 'magnets_cell_arrow_p');
	}
};

export const blackKropkiCellArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,

	toolId: TOOLS.BLACK_KROPKI_CELL_ARROW,
	shape: DEFAULT_BLACK_ARROW,

	meta: {
		description:
			'A black arrow indicates how many digits in the indicated direction are double or half its value.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleCellArrowElement(model, element, 'black_kropki_cell_arrow_p');
	}
};

export const whiteKropkiCellArrowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_ARROW_OPTIONS,
	toolId: TOOLS.WHITE_KROPKI_CELL_ARROW,
	
	shape: {
		...DEFAULT_BLACK_ARROW,
		stroke: { editable: true, value: '#dddddd' }
	},

	meta: {
		description:
			'A white arrow indicates how many digits in the indicated direction are double or half its value.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_ARROW_CATEGORIES
	},

	solver_func: (model: PuzzleModel, element: ConstraintsElement) => {
		return simpleCellArrowElement(model, element, 'white_kropki_cell_arrow_p');
	}
};
