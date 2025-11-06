import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { SHAPE_TYPES, type EditableShapeI } from '../../Shape/Shape';
import type { SquareCellElementInfo } from '../../ElementInfo';
import { HANDLER_TOOL_TYPE, type SingleCellToolOptions } from '$input/ToolInputHandlers/types';
import {
	cellsToGridVarsName,
	cellsToGridVarsStr,
	cellsToVarsName,
	cellToGridVarName,
	cellToVarName,
	findSingleCellConstraintMatch,
	getDirectionCells,
	getDirectionsVars,
	groupConstraintsByValue,
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import {
	getParsingResult,
	orthogonalRegionSeenCountConstraint,
	simpleSingleCellElement,
	valuedSingleCellElement
} from './helpers';
import type { CellToolI, ConstraintsElement } from '../../puzzle_schema';
import type { Grid } from '../../Grid/Grid';
import { DIRECTION } from '$src/lib/utils/directions';
import type { Cell } from '../../Grid/Cell';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';

export const DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_SHAPE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_SINGLE_CELL_COLOR_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.SINGLE_CELL_COLOR_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export const DEFAULT_SQUARE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.SQUARE,
	strokeWidth: { editable: true, value: 0.03 },
	stroke: { editable: true, value: 'black' },
	r: { editable: true, value: 0.35 },
	fill: { editable: true, value: 'none' }
};

const DEFAULT_CIRCLE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: true, value: 0.35 },
	strokeWidth: { editable: true, value: 0.02 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'none' }
};

export function validateSingleCellValue(value: string, maxLength = 3): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function validateColoredCountingCirclesValue(value: string): boolean {
	const valid = value === '' || value === '1' || value === '2' || value === '3';
	return valid;
}

export function defaultSingleCellValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

export const DEFAULT_SINGLE_CELL_OPTIONS: SingleCellToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL
};

export const DEFAULT_VALUED_SINGLE_CELL_OPTIONS: SingleCellToolOptions = {
	type: HANDLER_TOOL_TYPE.SINGLE_CELL,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
	defaultValue: ''
};

function cellsFromElement(grid: Grid, element: ConstraintsElement) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	const all_coords = constl.map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);

	return cells
}

function oddElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleSingleCellElement(model, element, 'odd_p');
	return out_str;
}

export const oddInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ODD,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'rgb(160, 160, 160)' }
	},

	meta: {
		description: 'Cell value is odd.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: oddElement
};

function evenElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleSingleCellElement(model, element, 'even_p');
	return out_str;
}

export const evenInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.EVEN,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'rgb(160, 160, 160)' }
	},

	meta: {
		description: 'Cell value is even.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: evenElement
};

function minMaxConstraint(grid: Grid, element: ConstraintsElement, predicate: string) {
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	const max_cells = cellsFromElement(grid, element)
	
	let out_str = '';
	for (const constraint of constl) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);

		const adj_cells = grid
			.getOrthogonallyAdjacentCells(cell)
			.filter((cell2) => !max_cells.has(cell2));
		const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${cell_var});\n`;
		out_str += constraint_str;
	}
	return out_str;
}

function minimumElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = minMaxConstraint(grid, element, 'minimum_p');
	return out_str;
}

export const minimumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.MINIMUM,

	meta: {
		description: 'Cell value is greater than orthogonally adjacent cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: minimumElement
};

function maximumElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = minMaxConstraint(grid, element, 'maximum_p');
	return out_str;
}

export const maximumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.MAXIMUM,

	meta: {
		description: 'Cell value is lesser than orthogonally adjacent cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: maximumElement
};

export const primeCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.PRIME_CELL,

	meta: {
		description: 'Cell value is prime.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	}
};

function minesweeperConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	// A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers.
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	const vars_str = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint ${predicate}(${vars_str}) == ${var1};\n`;
	return constraint_str;
}

function minesweeperElement(model: PuzzleModel, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = minesweeperConstraint(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function oddMinesweeperElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = minesweeperElement(model, element, 'odd_count');
	return out_str;
}

export const oddMinesweeperInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ODD_MINESWEEPER,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a cell with a red circle is the same as the number of the surrounding cells (not counting the cell itself) with odd numbers. (So a total of 8 possible surrounding cells).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: oddMinesweeperElement
};

function evenMinesweeperElement(model: PuzzleModel, element: ConstraintsElement) {
	// A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).
	const out_str = minesweeperElement(model, element, 'even_count');
	return out_str;
}

export const evenMinesweeperInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.EVEN_MINESWEEPER,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a cell with a red square is the same as the number of the surrounding cells (not counting the cell itself) with even numbers. (So a total of 8 possible surrounding cells).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: evenMinesweeperElement
};

function countSameParityNeighbourConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const neighbours = grid.getNeighboorCells(cell);
	neighbours.push(cell);
	const vars_str = cellsToGridVarsStr(neighbours, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint count_same_parity_p(${var1}, ${vars_str});\n`;
	return constraint_str;
}

function countSameParityNeighbourElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, countSameParityNeighbourConstraint);
	return out_str;
}

export const countSameParityNeighborCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'blue' },
		r: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Cells marked with a blue circle show the number of digits with the same parity as that circled digit in that cell's neighborhood (including the digit in the cell itself, 9 total cells).",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: countSameParityNeighbourElement
};

function watchtowerFarsightHelper(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint ${predicate}(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars});\n`;
	return constraint_str;
}

function watchtowerFarsightElementHelper(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = watchtowerFarsightHelper(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function watchtowerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = watchtowerFarsightElementHelper(model, element, 'is_watchtower_p');
	return out_str;
}

export const watchtowerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.WATCHTOWER,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Cells with blue circles are watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: watchtowerElement
};

function notWatchtowerElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = watchtowerFarsightElementHelper(model, element, 'is_not_watchtower_p');
	return out_str;
}

export const notWatchtowerInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NOT_WATCHTOWER,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		r: { editable: false, value: 0.25 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Cells with blue squares are NOT watchtowers. The value in a watchtower cell is equal to the number of cells it "sees" in each direction. Watchtowers cannot see values larger than their own height, nor past them.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: notWatchtowerElement
};

function farsightElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = watchtowerFarsightElementHelper(model, element, 'farsight_p');
	return out_str;
}

export const farsightInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.FARSIGHT,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a blue cage sees one or more consecutive digits exactly N cells away from itself in the same row or column, where N = the digit in the caged cell. For example, a caged 4 must see a 3 or 5 exactly 4 cells away from itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: farsightElement
};

function radarConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';

	const var0 = cellToVarName(cell0);
	const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell0);
	const constraint_str = `constraint radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
	return constraint_str;
}

function radarElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, element, radarConstraint);

	// negative constraint
	if (!element.negative_constraints) return out_str;
	const all_given = !!element.negative_constraints[TOOLS.ALL_RADARS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;
	const grid = model.puzzle.grid;

	out_str += `\n% ${TOOLS.ALL_RADARS_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const var0 = cellToVarName(cell);
		const [up_vars, down_vars, left_vars, right_vars] = getDirectionsVars(grid, cell);
		const constraint_str = `constraint not radar_p(${var0}, ${up_vars}, ${down_vars}, ${left_vars}, ${right_vars}, 9);\n`;
		out_str += constraint_str;
	}

	return out_str;
}

export const radarInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
		defaultValue: '9'
	},

	toolId: TOOLS.RADAR,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_RADARS_GIVEN,
			description:
				"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9). All radars are given."
		}
	],

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Cells with grey cages are radars. Radars are cells that have a value indicating the distance to the closest 'X' on their row or column (default X = 9).",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: radarElement
};

function orthogonalSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function orthogonalSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, orthogonalSumConstraint);
	return out_str;
}

export const orthogonalSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ORTHOGONAL_SUM,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'var(--constraint-color-blue)' },
		fill: { editable: false, value: 'rgb(160, 160, 160)' }
	},

	meta: {
		description:
			'Grey opaque circles with blue outline (without arrows) contain the sum of all their orthogonally adjacent cells.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: orthogonalSumElement
};

function indexingColumnConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = grid.getRow(cell.r);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const col = cell.c + 1;

	const constraint_str = `constraint indexing_column_p(${vars_str}, ${col});\n`;
	return constraint_str;
}

function indexingColumnElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, element, indexingColumnConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_INDEXING_COLUMN_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;
	const grid = model.puzzle.grid;

	out_str += `\n% ${TOOLS.ALL_INDEXING_COLUMN_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const row_cells = grid.getRow(cell.r);
		const row_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.BOARD);
		const col = cell.c + 1;
		const constraint_str = `constraint not indexing_column_p(${row_vars}, ${col});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

export const indexingColumnInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.INDEXING_COLUMN,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_INDEXING_COLUMN_GIVEN,
			description:
				'Any number X in a red cell appearing in column Y index (ie give) the column X in which the number Y appears in their respective row. All possible indexing column cells in the given columns are given.'
		}
	],

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(155, 40, 40, 0.3)' }
	},

	meta: {
		description:
			'Numbers in red cells are indexing columns: Any number X appearing in the Yth column of a row indicates the column X where the number Y appears in that row. Example: if R5C1 is a 6, then R5C6 is a 1 as the 1 must appear in the 6th position.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: indexingColumnElement
};

function indexingRowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cells = grid.getCol(cell.c);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const row = cell.r + 1;

	const constraint_str = `constraint indexing_column_p(${vars_str}, ${row});\n`;
	return constraint_str;
}

function indexingRowElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, element, indexingRowConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_INDEXING_ROW_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;
	const grid = model.puzzle.grid;

	out_str += `\n% ${TOOLS.ALL_INDEXING_ROW_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const col_cells = grid.getCol(cell.c);
		const col_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.BOARD);
		const row = cell.r + 1;
		const constraint_str = `constraint not indexing_column_p(${col_vars}, ${row});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

export const indexingRowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.INDEXING_ROW,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_INDEXING_ROW_GIVEN,
			description:
				'Any number X in a blue cell appearing in the Yth row of a column indicates the row X where the number Y appears in that column. All possible indexing column cells in the given columns are given.'
		}
	],

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(40, 40, 155, 0.3)' }
	},

	meta: {
		description:
			'Numbers in blue cells are indexing rows: Any number X appearing in the Yth row of a column indicates the row X where the number Y appears in that column. Example: if R1C5 is a 6, then R6C5 is a 1 as the 1 must appear in the 6th position.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: indexingRowElement
};

function lowDigitElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedSingleCellElement(model, element, 'low_digit_p', '5');
	return out_str;
}

export const lowDigitInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.LOW_DIGIT,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(40, 40, 155, 0.3)' }
	},

	meta: {
		description: 'Cells colored blue are a low digit (<5).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: lowDigitElement
};

function highDigitElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedSingleCellElement(model, element, 'high_digit_p', '5');
	return out_str;
}

export const highDigitInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.HIGH_DIGIT,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(155, 40, 40, 0.3)' }
	},

	meta: {
		description: 'Cells colored red are a high digit (>5).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: highDigitElement
};

function friendlyCellConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const row = cell.r + 1;
	const col = cell.c + 1;
	if (cell.region !== null) {
		const region = cell.region + 1;
		const constraint_str = `constraint ${var1} == ${row} \\/ ${var1} == ${col} \\/ ${var1} == ${region};\n`;
		return constraint_str;
	}
	const constraint_str = `constraint ${var1} == ${row} \\/ ${var1} == ${col};\n`;
	return constraint_str;
}

function friendlyCellElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, friendlyCellConstraint);
	return out_str;
}

export const friendlyCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.FRIENDLY_CELL,

	shape: {
		type: SHAPE_TYPES.SQUARE,
		strokeWidth: { editable: false, value: 0 },
		fill: { editable: false, value: 'rgba(64, 166, 64, 0.7)' }
	},

	meta: {
		description:
			'Cells marked green are friendly cells, i.e., they contain their row, column or box number.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_COLOR_CATEGORIES
	},

	solver_func: friendlyCellElement
};

function diagonallyAdjacentSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const var1 = cellToVarName(cell);
	const adj_cells = grid.getDiagonallyAdjacentCells(cell);
	const vars_str = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.BOARD);

	const constraint_str = `constraint sum_p(${vars_str}, ${var1});\n`;
	return constraint_str;
}

function diagonallyAdjacentSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, diagonallyAdjacentSumConstraint);
	return out_str;
}

export const diagonallyAdjacentSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.DIAGONALLY_ADJACENT_SUM,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'var(--constraint-color-gray)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Cells with circles contain the sum of all diagonally adjacent digits.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: diagonallyAdjacentSumElement
};

function adjCellsOppositeDirOppositeParityConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell0 = grid.getCell(coords.r, coords.c);
	if (!cell0) return '';
	const cell1 = grid.getCell(coords.r - 1, coords.c);
	const cell2 = grid.getCell(coords.r + 1, coords.c);
	const cell3 = grid.getCell(coords.r, coords.c - 1);
	const cell4 = grid.getCell(coords.r, coords.c + 1);
	if (!cell1 || !cell2 || !cell3 || !cell4) return '';

	const var1 = cellToVarName(cell1);
	const var2 = cellToVarName(cell2);
	const var3 = cellToVarName(cell3);
	const var4 = cellToVarName(cell4);
	const constraint_str = `constraint groups_opposite_parity_p([${var1},${var2}], [${var3},${var4}]);\n`;
	return constraint_str;
}

function adjCellsOppositeDirOppositeParityElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(
		model,
		element,
		adjCellsOppositeDirOppositeParityConstraint
	);
	return out_str;
}

export const adjacentCellsInDifferentDirectionsHaveOpositeParityInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.35 },
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'var(--constraint-color-green)' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'For each cell marked with a green circle, the following is true: Either its two horizontally adjacent cells are both even and its two vertically adjacent cells both odd; or its two horizontally adjacent cells are both odd and its two vertically adjacent cells are both even.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: adjCellsOppositeDirOppositeParityElement
};

function sandwichRowColCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.BOARD);
	const col_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.BOARD);
	const [r, c] = [cell.r + 1, cell.c + 1];
	const constraint_str = `constraint sandwich_row_col_count_p(${row_vars}, ${col_vars}, ${r}, ${c}, ${cell_var});\n`;
	return constraint_str;
}

function sandwichRowColCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, sandwichRowColCountConstraint);
	return out_str;
}

export const sandwichRowColCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SANDWICH_ROW_COL_COUNT,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			"A number in a circled cell indicates the total number of cells sandwiched between the 1's and the 9's in the row and column containing the circle. If a cell is simultaneously in a row sandwich and column sandwich, it is only counted once.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: sandwichRowColCountElement
};

function countingCirclesElement(model: PuzzleModel, element: ConstraintsElement) {
	const cells = cellsFromElement(model.puzzle.grid, element);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;

	
	let out_str = '';
	out_str += `array[int] of var int: counting_circles = [\n\t${vars_str}\n];\n`;
	out_str += `constraint counting_circles_p(counting_circles, ALLOWED_DIGITS);\n`;

	return out_str;
}

export const countingCirclesInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.COUNTING_CIRCLES,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'lightsalmon' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A circled digit indicates exactly how many circles contain that digit. Note: This also includes all circles which are bounding the split pea lines. If, for example, a 3 appears in a circle, then there must be exactly 3 circles that contain a 3.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: countingCirclesElement
};

function reverseCountingCirclesElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;

	const circle_cells = cellsFromElement(grid, element);
	const not_circle_cells = grid.getAllCells().filter((cell) => !circle_cells.has(cell));
	
	const circle_vars = cellsToVarsName([...circle_cells]);
	const circle_vars_str = `${circle_vars.join(',\n\t')}`;
	
	const not_circle_vars = cellsToVarsName([...not_circle_cells]);
	const not_circle_vars_str = `${not_circle_vars.join(',\n\t')}`;
	
	let out_str = '';
	out_str += `array[int] of var int: reverse_counting_circles = [\n\t${circle_vars_str}\n];\n`;
	out_str += `array[int] of var int: not_reverse_counting_circles = [\n\t${not_circle_vars_str}\n];\n`;
	out_str += `constraint reverse_counting_circles_p(reverse_counting_circles, not_reverse_counting_circles);\n`;

	return out_str;
}

export const reverseCountingCirclesInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.REVERSE_COUNTING_CIRCLES,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A number appearing in a circle indicates how many times that number appears *outside* of circles.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: reverseCountingCirclesElement
};

function coloredCountingCirclesElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	const cells = cellsFromElement(grid, element);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;
	
	const circle_colors_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);
	const circle_colors_vars_str = `${circle_colors_vars.join(',\n\t')}`;
	
	let out_str = '';
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..3: ${VAR_2D_NAMES.COUNTING_CIRCLES_COLORS};\n`;
	out_str += `array[int] of var int: colored_counting_circles = [\n\t${vars_str}\n];\n`;
	out_str += `array[int] of var int: counting_circles_colors = [\n\t${circle_colors_vars_str}\n];\n`;
	out_str += `constraint colored_counting_circles_adjacent_p(${VAR_2D_NAMES.COUNTING_CIRCLES_COLORS});\n`;

	out_str += `\n% cells without circles\n`;
	for (const cell of grid.getAllCells()) {
		if (cells.has(cell)) continue;
		const color_var = cellToGridVarName(cell, VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);
		out_str += `constraint ${color_var} == 0;\n`;
	}

	// colored circles 
	for (const constraint of constl) {
		const coord = constraint.cell;
		const cell = grid.getCell(coord.r, coord.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);
		const color_var = cellToGridVarName(cell, VAR_2D_NAMES.COUNTING_CIRCLES_COLORS);

		const value = constraint.value;
		if (value) {
			out_str += `constraint ${color_var} == ${value};\n`;
		} else {
			out_str += `constraint ${color_var} != 0;\n`;
		}

		out_str += `constraint conditional_count_f(colored_counting_circles, counting_circles_colors, ${cell_var}, ${color_var}) == ${cell_var};\n`;
	}
	out_str += '\n';
	return out_str;
}

export const coloredCountingCirclesInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateColoredCountingCirclesValue),
		defaultValue: ''
	},

	toolId: TOOLS.COLORED_COUNTING_CIRCLES,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `Using red (1), green (2), and blue (3), color in all circles such that:
 - Orthogonally adjacent circles are different colors.
 - The digit inside a circle appears that many times in circles of that color.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: coloredCountingCirclesElement
};

function uniqueCellsElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;

	const cells = cellsFromElement(grid, element);
	const vars = cellsToVarsName([...cells]);
	const vars_str = `${vars.join(',\n\t')}`;
	
	let out_str = '';
	out_str += `array[int] of var int: unique_cells = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(unique_cells);\n`;
	return out_str;
}

export const uniqueCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.UNIQUE_CELLS,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 6 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'lightsalmon' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: 'Digits do not repeat on cells with hexagons on them.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: uniqueCellsElement
};

function seenOddEvenCountConstraint(grid: Grid, constraint: CellToolI, predicate: string) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const dirCells = getDirectionCells(grid, cell);
	const cells_vars = dirCells.map((cells) => cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD));

	const constraint_str = `constraint ${predicate}(${cells_vars.join(', ')}, ${cell_var});\n`;
	return constraint_str;
}

function seenOddEvenCountElement(grid: Grid, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const constraint of Object.values(constraints)) {
		const constraint_str = seenOddEvenCountConstraint(grid, constraint as CellToolI, predicate);
		out_str += constraint_str;
	}
	return out_str;
}

function seenEvenCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = seenOddEvenCountElement(grid, element, 'seen_even_count_p');
	return out_str;
}

export const seenEvenCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SEEN_EVEN_COUNT,

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description:
			'Black squares count the number of even digits that can be seen in all orthogonal directions combined, including itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: seenEvenCountElement
};

function cellKnightWhispersConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const knights_move_cells = grid.getCellsByKnightMove(cell);
	const cells_vars = cellsToGridVarsStr(knights_move_cells, VAR_2D_NAMES.BOARD);

	const value = constraint.value ?? '5';
	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	let out_str = '';
	const var_name = result[1];
	out_str += result[0];

	out_str += `constraint cell_knights_whisper_p(${cell_var}, ${cells_vars}, ${var_name});\n`;
	return out_str;
}

function cellKnightWhispersElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, cellKnightWhispersConstraint);
	return out_str;
}

export const cellKnightWhispersInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
		defaultValue: '5'
	},

	toolId: TOOLS.CELL_KNIGHT_WHISPERS,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			'Digits in a circle must differ in value by at least X (default X = 5) with every cell a (chess) knights move away.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: cellKnightWhispersElement
};

function seenOddCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const out_str = seenOddEvenCountElement(grid, element, 'seen_odd_count_p');
	return out_str;
}

export const seenOddCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SEEN_ODD_COUNT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Black circles count the number of odd digits that can be seen in all orthogonal directions combined, including itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: seenOddCountElement
};

function twoConstiguousRegionsRowColumnOppositeSetCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);
	const region_var = `two_contiguous_regions[${cell.r},${cell.c}]`;

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_region_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.TWO_CONTIGUOUS_REGIONS);
	const col_region_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.TWO_CONTIGUOUS_REGIONS);

	const constraint_str = `constraint two_contiguous_regions_row_col_opposite_set_count_p(${row_region_vars}, ${col_region_vars}, ${cell_var}, ${region_var});\n`;
	return constraint_str;
}

function twoConstiguousRegionsRowColumnOppositeSetCountElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		twoConstiguousRegionsRowColumnOppositeSetCountConstraint
	);
	return out_str;
}

export const twoContiguousRegionsRowColumnOppositeSetCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Digits in a circled cell indicate the number of cells in the corresponding row and column combined that are in the other set.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: twoConstiguousRegionsRowColumnOppositeSetCountElement
};

function seenRegionBordersCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const row_cells = grid.getRow(cell.r);
	const col_cells = grid.getCol(cell.c);
	const row_region_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const col_region_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const constraint_str = `constraint unknown_regions_seen_region_border_count_p(${row_region_vars}, ${col_region_vars}, ${cell_var});\n`;
	return constraint_str;
}

function seenRegionBordersCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, seenRegionBordersCountConstraint);
	return out_str;
}

export const seenRegionBordersCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SEEN_REGION_BORDERS_COUNT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A digit in a circle indicates the number of borders between regions it sees in its row and column. Note that the edge of the grid does not count toward this total.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: seenRegionBordersCountElement
};

function nurimisakiUnshadedEndpointsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const nurimisaki_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIMISAKI);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_nurimisaki_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.NURIMISAKI);

	let out_str = `constraint nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${nurimisaki_var});\n`;

	out_str += orthogonalRegionSeenCountConstraint(
		grid,
		constraint,
		VAR_2D_NAMES.NURIMISAKI,
		'nurimisaki_count_uninterrupted_unshaded_p'
	);

	return out_str;
}

function nurimisakiUnshadedEndpointsElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, element, nurimisakiUnshadedEndpointsConstraint);

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_given = !!element.negative_constraints[TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN];
	if (!all_given) return out_str;
	const constraints = element.constraints as Record<string, CellToolI>;
	const grid = model.puzzle.grid;

	out_str += `\n% ${TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN}\n`;
	for (const cell of grid.getAllCells()) {
		const match = findSingleCellConstraintMatch(constraints, cell);
		if (match) continue;

		const nurimisaki_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIMISAKI);

		const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
		const adj_nurimisaki_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.NURIMISAKI);

		const constraint_str = `constraint not nurimisaki_unshaded_endpoint_p(${adj_nurimisaki_vars}, ${nurimisaki_var});\n`;
		out_str += constraint_str;
	}

	return out_str;
}

export const nurimisakiUnshadedEndpointInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_NURIMISAKI_UNSHADED_ENDPOINTS_GIVEN,
			description:
				"Circles mark every instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles are the only 'endpoints' of the unshaded area)."
		}
	],

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"Circles mark an instance of a cell which is unshaded and orthogonally adjacent to exactly one other unshaded cell (i.e. the circles mark 'endpoints' of the unshaded area). The digit in a circle indicates how many cells are in the straight line of unshaded cells coming out of the cell with the circle, including itself.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: nurimisakiUnshadedEndpointsElement
};

function sashiganeBendRegionCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);
	const sashigane_bend_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE_BENDS);

	let out_str = `constraint sashigane_bend_region_count_p(${cell_var}, ${sashigane_var}, sashigane);\n`;
	out_str += `constraint ${sashigane_bend_var} = true;\n`;
	return out_str;
}

function sashiganeBendRegionCountElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, sashiganeBendRegionCountConstraint);
	return out_str;
}

export const sashiganeBendRegionCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SASHIGANE_BEND_REGION_COUNT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'gray' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'A circle in a cell means that cell is the bend in a region, and also the number in that cell is how many cells are in that region (this rule does not apply to regions without a circle).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: sashiganeBendRegionCountElement
};

function sashiganeRegionSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const sashigane_var = cellToGridVarName(cell, VAR_2D_NAMES.SASHIGANE);
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	const constraint_str = `constraint conditional_sum_f(array1d(board), array1d(sashigane), ${sashigane_var}) == ${val};\n`;
	return constraint_str;
}

function sashiganeRegionSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, sashiganeRegionSumConstraint);
	return out_str;
}

export const sashiganeRegionSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SASHIGANE_REGION_SUM,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			"A small clue in the top left corner of a cell gives the sum of the cells in that cell's region. Corner clues do not need to be in the top left cell of a region.",
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: sashiganeRegionSumElement
};

function cellOnLoopConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_center_loop_var = cellToGridVarName(cell, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint ${cell_center_loop_var} == 1;\n`;
	return constraint_str;
}

function cellOnLoopElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, cellOnLoopConstraint);
	return out_str;
}

export const cellOnTheLoopInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CELL_ON_THE_LOOP,

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description: 'A black square indicates the cell is on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: cellOnLoopElement
};

function cellNotOnLoopConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_center_loop_var = cellToGridVarName(cell, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint ${cell_center_loop_var} == 0;\n`;
	return constraint_str;
}

function cellNotOnLoopElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, cellNotOnLoopConstraint);
	return out_str;
}

export const cellNotOnTheLoopInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CELL_NOT_ON_THE_LOOP,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: 'A black circle indicates the cell is not on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: cellNotOnLoopElement
};

function countLoopNeighbourCellsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const cells = [cell, ...neighbour_cells];

	const loop_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.CELL_CENTER_LOOP);

	const constraint_str = `constraint sum(${loop_vars_str}) == ${cell_var};\n`;
	return constraint_str;
}

function countLoopNeighbourCellsElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, countLoopNeighbourCellsConstraint);
	return out_str;
}

export const countLoopNeighbourCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.COUNT_LOOP_NEIGHBOUR_CELLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'orange' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'An orange circle indicates how many cells up to 8 surrounding cells plus itself (9 maximum) are on the loop.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: countLoopNeighbourCellsElement
};

export const twilightCaveFillominoClueInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.TWILIGHT_CAVE_FILLOMINO_CLUE,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'If a clued cell is unshaded, the clue indicates the sum of numbers seen orthogonally from that cell; region borders block vision. If a clued cell is shaded, the clue indicates the total sum of numbers in its group of orthogonally connected shaded cells (which could include more than one region).',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	}
};

function caveCluesConstraint(model: PuzzleModel, grid: Grid, c_id: string, constraint: CellToolI) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const cave_var = cellToGridVarName(cell, VAR_2D_NAMES.CAVE_SHADING);
	const dirCells = getDirectionCells(grid, cell);
	const cave_vars: string[] = [];
	for (const cells of dirCells) {
		const _cave_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.CAVE_SHADING);
		cave_vars.push(_cave_vars);
	}

	const constraint_str = `constraint cave_clue_p(${cell_var}, ${cave_var}, ${cave_vars[0]}, ${cave_vars[1]}, ${cave_vars[2]}, ${cave_vars[3]});\n`;
	return constraint_str;
}

function caveCluesElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, caveCluesConstraint);
	return out_str;
}

export const caveClueInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CAVE_CLUE,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		r: { editable: false, value: 0.35 },
		stroke: { editable: false, value: 'var(--constraint-color-light-blue' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Light blue circled cells are cave clues. Cave clues must be a part of the cave, with each number indicating the total count of cells connected vertically and horizontally to the numbered cell including the cell itself.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: caveCluesElement
};

function caveShadedRegionSizeUnshadedSeenOrthogonallyClueConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const cave_shading_var = cellToGridVarName(cell, VAR_2D_NAMES.CAVE_SHADING);
	const cave_region_var = cellToGridVarName(cell, VAR_2D_NAMES.CAVE_REGIONS);
	const dirCells = getDirectionCells(grid, cell);
	const cave_vars: string[] = [];
	for (const cells of dirCells) {
		const _cave_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.CAVE_SHADING);
		cave_vars.push(_cave_vars);
	}

	const constraint_str = `constraint cave_shaded_region_size_unshaded_seen_orthogonally_clue_p(${cell_var}, ${cave_shading_var}, ${cave_region_var}, ${VAR_2D_NAMES.CAVE_REGIONS}, ${cave_vars[0]}, ${cave_vars[1]}, ${cave_vars[2]}, ${cave_vars[3]});\n`;
	return constraint_str;
}

function caveShadedRegionSizeUnshadedSeenOrthogonallyClueElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		caveShadedRegionSizeUnshadedSeenOrthogonallyClueConstraint
	);
	return out_str;
}

export const caveShadedRegionSizeUnshadedSeenOrthogonallyClueInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			'An unshaded circled clue (cave) indicates the total number of unshaded cells seen in the four orthogonal directions, including the clue cell. A shaded circle clue (wall) indicates the size of the shaded region.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: caveShadedRegionSizeUnshadedSeenOrthogonallyClueElement
};

function chaosConstructionChessSumsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	let out_str = '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);

	// king sum
	out_str += `\n% chess sum ${c_id}\n`;
	const king_cells = grid.getNeighboorCells(cell);
	const king_vars = cellsToGridVarsStr(king_cells, VAR_2D_NAMES.BOARD);
	const king_region_vars = cellsToGridVarsStr(king_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: king_sum_${c_id};\n`;
	out_str += `constraint king_sum_${c_id} = conditional_sum_f(${king_vars}, ${king_region_vars}, ${region_var});\n`;
	out_str += `var bool: king_${c_id};\n`;
	out_str += `constraint king_${c_id} = (king_sum_${c_id} == ${cell_var});\n`;

	// knight sum
	const knight_cells = grid.getCellsByKnightMove(cell);
	const knight_vars = cellsToGridVarsStr(knight_cells, VAR_2D_NAMES.BOARD);
	const knight_region_vars = cellsToGridVarsStr(knight_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: knight_sum_${c_id};\n`;
	out_str += `constraint knight_sum_${c_id} = conditional_sum_f(${knight_vars}, ${knight_region_vars}, ${region_var});\n`;
	out_str += `var bool: knight_${c_id};\n`;
	out_str += `constraint knight_${c_id} = (knight_sum_${c_id} == ${cell_var});\n`;

	// bishop sum
	const directions: DIRECTION[] = [DIRECTION.NE, DIRECTION.NW, DIRECTION.SE, DIRECTION.SW];
	const bishop_cells: Cell[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		cells.forEach((_cell) => bishop_cells.push(_cell));
	}
	const bishop_vars = cellsToGridVarsStr(bishop_cells, VAR_2D_NAMES.BOARD);
	const bishop_region_vars = cellsToGridVarsStr(bishop_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `var int: bishop_sum_${c_id};\n`;
	out_str += `constraint bishop_sum_${c_id} = conditional_sum_f(${bishop_vars}, ${bishop_region_vars}, ${region_var});\n`;
	out_str += `var bool: bishop_${c_id};\n`;
	out_str += `constraint bishop_${c_id} = (bishop_sum_${c_id} == ${cell_var});\n`;

	// chess sums
	out_str += `constraint sum([king_${c_id}, knight_${c_id}, bishop_${c_id}]) == ${val};\n`;

	return out_str;
}

function chaosConstructionChessSumsElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, chaosConstructionChessSumsConstraint);
	return out_str;
}

export const chaosConstructionChessSumsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_CHESS_SUMS,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `A cell with a number in its top-left corner is a Chess Sums cell. The number in the top-left corner indicates the amount of Chess Sums satisfied by the digit in that cell. A digit in a Chess Sums cell gives one or more of the following:
 - The sum of all digits that share its region and are a king's move away
 - The sum of all digits that share its region and are a knight's move away
 - The sum of all digits that share its region and are a bishop's move away
Clarifications:
 - Bishops can “see” past cells from other regions—cells from other regions do not block a bishop's vision.
 - Each Chess Sum is calculated separately. For example, a cell with a “2” clue that contains a 7 can see 4 and 3 by king's move, and can see 5 and 2 by knight's move—the king's move digits and the knight's move digits each sum to 7 separately.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: chaosConstructionChessSumsElement
};

function chaosConstructionArrowKnotsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const value = constraint.value;
	if (!value) return '';
	const val = parseInt(value);

	let out_str = '';
	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const adj_cells = grid.getOrthogonallyAdjacentCells(cell);
	const adj_region_vars = cellsToGridVarsStr(adj_cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
	out_str += `\n% arrow knot ${c_id}\n`;
	out_str += `constraint count_eq(${adj_region_vars}, ${region_var}) >= ${val};\n`;

	const directions: DIRECTION[] = [DIRECTION.N, DIRECTION.S, DIRECTION.E, DIRECTION.W];
	const arrow_vars: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		if (!cells.length) continue;

		const cells_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
		const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);
		const in_arrow_var = `in_arrow_${c_id}_${direction}`;
		const first_arrow_var = `in_arrow_${c_id}_${direction}[1]`;
		arrow_vars.push(first_arrow_var);
		out_str += `array[index_set(${cells_vars})] of var bool: ${in_arrow_var};\n`;
		out_str += `constraint chaos_construction_arrow_knots_p(${cells_vars}, ${region_vars}, ${in_arrow_var}, ${cell_var}, ${region_var});\n`;
	}
	out_str += `constraint sum([${arrow_vars.join(',')}]) == ${val};\n`;

	return out_str;
}

function chaosConstructionArrowKnotsElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, chaosConstructionArrowKnotsConstraint);
	return out_str;
}

export const chaosConstructionArrowKnotsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_ARROW_KNOTS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.02 },
		r: { editable: false, value: 0.4 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `From each circle, draw some arrows that travel in a straight line either horizontally only or vertically only. The number in the bottom right corner of a circle cell indicates the number of arrows that must be drawn from that circle. Digits along an arrow must sum to the digit in the attached circle.
		Additionally, all cells along arrows must be part of the same region as the circle they originate from. If an arrow doesn't reach the edge of the grid, the cell directly after the tip must be in a different region than the arrow.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: chaosConstructionArrowKnotsElement
};

function chaosConstructionSeenSameRegionCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = orthogonalRegionSeenCountConstraint(
		grid,
		constraint,
		VAR_2D_NAMES.UNKNOWN_REGIONS,
		'chaos_costruction_seen_same_region_count_p'
	);
	return constraint_str;
}

function chaosConstructionSeenSameRegionCountElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		chaosConstructionSeenSameRegionCountConstraint
	);
	return out_str;
}

export const chaosConstructionSeenSameRegionCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `The number in the circle shows how many region cells it sees in its row and column (including the cell with the circle itself) until it reaches the borders of the region.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: chaosConstructionSeenSameRegionCountElement
};

function chaosConstructionNeighbourCellsSameRegionCountConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const cell_var = cellToVarName(cell);
	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.UNKNOWN_REGIONS);
	const neighbour_cells = grid.getNeighboorCells(cell);
	const cells = [...neighbour_cells];

	const region_vars = cellsToGridVarsStr(cells, VAR_2D_NAMES.UNKNOWN_REGIONS);

	const constraint_str = `constraint chaos_construction_neighbour_cells_same_region_count_p(${cell_var}, ${region_var}, ${region_vars});\n`;
	return constraint_str;
}

function chaosConstructionNeighbourCellsSameRegionCountElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		chaosConstructionNeighbourCellsSameRegionCountConstraint
	);
	return out_str;
}

export const chaosConstructionNeighbourCellsSameRegionCountInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `A digit in a circle shows the amount of cells touching it, orthogonally and diagonally, not including itself, which are part of the same region.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: chaosConstructionNeighbourCellsSameRegionCountElement
};

function directedPathStartConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const node_id = cell.r * grid.nCols + cell.c + 1;

	const constraint_str = `constraint dpath_source == ${node_id};\n`;
	return constraint_str;
}

function directedPathStartElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, directedPathStartConstraint);
	return out_str;
}

export const directedPathStartInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.DIRECTED_PATH_START,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 3 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'green' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `A green triangle marks the start of a directed path.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: directedPathStartElement
};

function directedPathEndConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';

	const node_id = cell.r * grid.nCols + cell.c + 1;

	const constraint_str = `constraint dpath_target == ${node_id};\n`;
	return constraint_str;
}

function directedPathEndElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, directedPathEndConstraint);
	return out_str;
}

export const directedPathEndInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.DIRECTED_PATH_END,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 6 },
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'red' },
		r: { editable: false, value: 0.4 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `A red hexagon marks the end of a directed path.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: directedPathEndElement
};

function teleportElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';

	const constraints = element.constraints as Record<string, CellToolI>;
	const groups = groupConstraintsByValue(Object.values(constraints));
	const grid = model.puzzle.grid;

	for (const group of groups.values()) {
		if (group.length <= 1) continue;
		// for each combination of 2
		for (const [e1, e2] of group.flatMap((v, i) => group.slice(i + 1).map((w) => [v, w]))) {
			const coord1 = e1.cell;
			const coord2 = e2.cell;
			const cell1 = grid.getCell(coord1.r, coord1.c);
			const cell2 = grid.getCell(coord2.r, coord2.c);
			if (!cell1 || !cell2) continue;

			const cell1_var = cellToGridVarName(cell1, VAR_2D_NAMES.BOARD);
			const cell2_var = cellToGridVarName(cell2, VAR_2D_NAMES.BOARD);

			out_str += `constraint ${cell1_var} == ${cell2_var};\n`;
		}
	}
	const first_coords = [...groups.values()].map((group) => group[0].cell);
	const cells = first_coords
		.map((coord) => grid.getCell(coord.r, coord.c))
		.filter((cell) => cell !== undefined);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	out_str += `constraint alldifferent(${vars_str});\n`;

	return out_str;
}

export const teleportInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.TELEPORT,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0.04 },
		stroke: { editable: false, value: 'yellow' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `Entering a yellow teleport will cause Finkz to be instantly transported to the other teleport. From there she can continue her journey. The teleports contain the same digit.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: teleportElement
};

function nurikabeIslandProductOfSumAndSizeElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str: string = '';
	const constraints = element.constraints as Record<string, CellToolI>;
	const grid = model.puzzle.grid;

	const all_coords = Object.values(constraints).map((constraint) => constraint.cell);
	const cells = new Set(
		all_coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell)
	);
	const nurikabe_vars = cellsToGridVarsStr([...cells], VAR_2D_NAMES.NURIKABE_REGIONS);
	out_str += `constraint all_different(${nurikabe_vars});\n`;

	let count = 0;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const value = constraint.value;

		if (!value) continue;
		const result = getParsingResult(model, value, c_id);
		if (!result) continue;

		const product_var = result[1];
		out_str += result[0];
		const region_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIKABE_REGIONS);

		out_str += `constraint nurikabe_island_product_of_sum_and_size_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.NURIKABE_REGIONS}, ${region_var}, ${product_var});\n`;
		count += 1;
	}

	out_str += `constraint count_unique_values(array1d(${VAR_2D_NAMES.NURIKABE_REGIONS})) == ${count + 1};\n`;

	return out_str;
}

export const nurikabeIslandProductOfSumAndSizeInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_VALUED_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description: `Each island contains exactly one numbered clue, which gives the product of the sum of the digits on the island and the size (number of cells) of the island, e.g. an island filled with 346 is would have a "39" clue (13x3). A "?" may represent any single, double, or triple-digit number.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: nurikabeIslandProductOfSumAndSizeElement
};

function nurikabeSeenWaterwayCellsConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const constraint_str = orthogonalRegionSeenCountConstraint(
		grid,
		constraint,
		VAR_2D_NAMES.NURIKABE_SHADING,
		'nurikabe_seen_waterway_cells_p'
	);
	return constraint_str;
}

function nurikabeSeenWaterwayCellsElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, nurikabeSeenWaterwayCellsConstraint);
	return out_str;
}

export const nurikabeSeenWaterwayCellsInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIKABE_SEEN_WATERWAY_CELLS,

	shape: {
		...DEFAULT_SQUARE_SHAPE,
		strokeDasharray: { editable: false, value: 0.08 }
	},

	meta: {
		description: `Caged cells are waterway cells. The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision).`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: nurikabeSeenWaterwayCellsElement
};

function nurikabeIslandSizeCellConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToVarName(cell);

	const cell_nurikabe_var = cellToGridVarName(cell, VAR_2D_NAMES.NURIKABE_REGIONS);

	const constraint_str = `constraint nurikabe_island_size_cell_p(${VAR_2D_NAMES.NURIKABE_REGIONS}, ${cell_nurikabe_var}, ${cell_var});\n`;
	return constraint_str;
}

function nurikabeIslandSizeCellElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = simpleElementFunction(model, element, nurikabeIslandSizeCellConstraint);

	if (!element.negative_constraints) return out_str;
	const all_given = !!element.negative_constraints[TOOLS.ALL_GIVEN];
	if (!all_given) return out_str;

	const cells = [...cellsFromElement(model.puzzle.grid, element)];
	// all different and max island count equal to number of cells
	const nurikabe_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.NURIKABE_REGIONS);
	out_str += `constraint alldifferent(${nurikabe_vars_str});\n`
	out_str += `constraint count_unique_values(array1d(${VAR_2D_NAMES.NURIKABE_REGIONS})) - 1 == ${cells.length};\n`;
	return out_str;
}

export const nurikabeIslandSizeCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.NURIKABE_ISLAND_SIZE_CELL,

	negative_constraints: [
		{toolId: TOOLS.ALL_GIVEN, description: 'All islands contain exactly one circle.'}
	],

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `Circled cells belong to an island; the digit in the circle indicates the number of cells making up the island.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: nurikabeIslandSizeCellElement
};

function connectFourYellowConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.CONNECT_FOUR);

	const constraint_str = `constraint connect_four_yellow_p(${cell_var});\n`;
	return constraint_str;
}

function connectFourYellowElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, connectFourYellowConstraint);
	return out_str;
}

export const connectFourYellowInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CONNECT_FOUR_YELLOW,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'yellow' }
	},

	meta: {
		description: `A yellow circle represents a yellow disc in connect four.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: connectFourYellowElement
};

function connectFourRedConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CellToolI
) {
	const coords = constraint.cell;
	const cell = grid.getCell(coords.r, coords.c);
	if (!cell) return '';
	const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.CONNECT_FOUR);

	const constraint_str = `constraint connect_four_red_p(${cell_var});\n`;
	return constraint_str;
}

function connectFourRedElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, connectFourRedConstraint);
	return out_str;
}

export const connectFourRedInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CONNECT_FOUR_RED,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		r: { editable: false, value: 0.35 },
		fill: { editable: false, value: 'red' }
	},

	meta: {
		description: `A red circle represents a red disc in connect four.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: connectFourRedElement
};

function shikakuRegionSizeElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const constraints = element.constraints as Record<string, CellToolI>;

	const cells = cellsFromElement(grid, element);
	const shikaku_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.SHIKAKU_REGIONS);
	const vars_str = `${shikaku_vars.join(',\n\t')}`;
	
	let out_str = '';
	out_str += `array[int] of var int: shikaku_region_size_clues = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(shikaku_region_size_clues);\n`;

	for (const constraint of Object.values(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);
		const shikaku_var = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_REGIONS);
		const shikaku_width = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_WIDTH);
		const shikaku_height = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_HEIGHT);
		out_str += `constraint shikaku_region_size_p(${VAR_2D_NAMES.SHIKAKU_REGIONS}, ${shikaku_var}, ${cell_var}, ${shikaku_width}, ${shikaku_height});\n`;
	}

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const each_region_has_a_circle =
		!!element.negative_constraints[TOOLS.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE];
	if (each_region_has_a_circle) {
		out_str += `\n% ${TOOLS.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE}\n`;
		out_str += `constraint shikaku_each_region_contains_one_circle_p(${VAR_2D_NAMES.SHIKAKU_REGIONS}, shikaku_region_size_clues);\n`;
	}

	return out_str;
}

export const shikakuRegionSizeInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.SHIKAKU_REGION_SIZE,

	negative_constraints: [
		{
			toolId: TOOLS.SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE,
			description:
				'Each shikaku region contains exactly one circle where a digit in a circle indicates the number of cells in its region.'
		}
	],

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description:
			'Each shikaku region contains exactly one circle, and a digit in a circle indicates the number of cells in its region.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: shikakuRegionSizeElement
};

function shikakuRegionSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const constraints = element.constraints as Record<string, CellToolI>;

	const cells = cellsFromElement(grid, element);
	const shikaku_vars = cellsToGridVarsName([...cells], VAR_2D_NAMES.SHIKAKU_REGIONS);
	const vars_str = `${shikaku_vars.join(',\n\t')}`;
	
	let out_str = '';
	out_str += `array[int] of var int: shikaku_region_sum_clues = [\n\t${vars_str}\n];\n`;
	out_str += `constraint alldifferent(shikaku_region_sum_clues);\n`;

	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: true,
		allow_var_list: true
	};

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const shikaku_var = cellToGridVarName(cell, VAR_2D_NAMES.SHIKAKU_REGIONS);

		const value = constraint.value ?? '';
		const result = getParsingResult(model, value, c_id, parse_opts);
		if (!result) continue;

		const var_name = result[1];
		out_str += result[0];

		out_str += `constraint shikaku_region_sum_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.SHIKAKU_REGIONS}, ${shikaku_var}, ${var_name});\n`;
	}

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const each_region_has_a_clue =
		!!element.negative_constraints[TOOLS.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE];
	if (each_region_has_a_clue) {
		out_str += `\n% ${TOOLS.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE}\n`;
		out_str += `constraint shikaku_each_region_contains_one_circle_p(${VAR_2D_NAMES.SHIKAKU_REGIONS}, shikaku_region_sum_clues);\n`;
	}

	return out_str;
}

export const shikakuRegionSumInfo: SquareCellElementInfo = {
	inputOptions: {
		type: HANDLER_TOOL_TYPE.SINGLE_CELL,
		valueUpdater: (oldValue: string | undefined, key: string) =>
			defaultSingleCellValueUpdater(oldValue, key, validateSingleCellValue),
		defaultValue: '?'
	},

	toolId: TOOLS.SHIKAKU_REGION_SUM,

	negative_constraints: [
		{
			toolId: TOOLS.SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE,
			description:
				'Each shikaku region contains exactly one shikaku region sum clue, and each clue indicates the sum of the digits in its shikaku region.'
		}
	],

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'none' }
	},

	meta: {
		description:
			'Each shikaku region contains exactly one clue, and each clue indicates the sum of the digits in its shikaku region.',
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: shikakuRegionSumElement
};

function BYOKCageSizeElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const constraints = element.constraints as Record<string, CellToolI>;
	const constl = Object.values(constraints);

	let out_str = '';

	for (const [idx, constraint] of constl.entries()) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const cell_var = cellToVarName(cell);
		const byok_var = cellToGridVarName(cell, VAR_2D_NAMES.BYOKC_GRID);

		out_str += `constraint ${byok_var} == ${idx + 1};\n`;
		out_str += `constraint byok_cage_cell_size_p(${VAR_2D_NAMES.BYOKC_GRID}, ${cell_var}, ${byok_var});\n`;
	}

	return out_str;
}

export const BYOKCageSizeInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.BYOK_CAGE_SIZE,

	shape: DEFAULT_CIRCLE_SHAPE,

	meta: {
		description: `Circles appear in cages and count the total number of cells in that cage. All circles are given.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: BYOKCageSizeElement
};

function BYOKNotCageCellElement(model: PuzzleModel, element: ConstraintsElement) {
	const grid = model.puzzle.grid;
	const constraints = element.constraints as Record<string, CellToolI>;

	let out_str = '';

	for (const constraint of Object.values(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const byok_var = cellToGridVarName(cell, VAR_2D_NAMES.BYOKC_GRID);
		out_str += `constraint byok_not_cage_cell_p(${byok_var});\n`;
	}

	if (!element.negative_constraints) return out_str;

	// negative constraint
	const all_squares_given = !!element.negative_constraints[TOOLS.ALL_SQUARES_GIVEN];
	if (all_squares_given) {
		out_str += `\n% ${TOOLS.ALL_SQUARES_GIVEN}\n`;
		for (const cell of grid.getAllCells()) {
			const match = findSingleCellConstraintMatch(constraints, cell);
			if (match) continue;

			const byok_var = cellToGridVarName(cell, VAR_2D_NAMES.BYOKC_GRID);
			const constraint_str = `constraint ${byok_var} > 0;\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export const BYOKNotCageCellInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.BYOK_NOT_CAGE_CELL,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_SQUARES_GIVEN,
			description: 'All such squares are given.'
		}
	],

	shape: DEFAULT_SQUARE_SHAPE,

	meta: {
		description: `Squares indicate that a cell is not in any cage.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: BYOKNotCageCellElement
};

function cellShadedRowColumnBoxNotCounterElement(model: PuzzleModel, element: ConstraintsElement) {
	// A digit in a diamond is not circled, and equals the sum of the circled digits in its row and column.
	const grid = model.puzzle.grid;
	const constraints = element.constraints as Record<string, CellToolI>;

	let out_str = '';

	for (const constraint of Object.values(constraints)) {
		const coords = constraint.cell;
		const cell = grid.getCell(coords.r, coords.c);
		if (!cell) continue;
		const counter_var = cellToGridVarName(cell, VAR_2D_NAMES.SHADED_ROW_COLUMN_BOX_COUNTERS);
		const cell_var = cellToGridVarName(cell, VAR_2D_NAMES.BOARD);
		// A digit in a diamond is not circled
		out_str += `constraint ${counter_var} == false;\n`;

		// A digit in a diamond equals the sum of the circled digits in its row and column.
		const row_cells = grid.getRow(cell.r);
		const col_cells = grid.getCol(cell.c);
		const row_vars = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.BOARD);
		const col_vars = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.BOARD);
		const row_counters = cellsToGridVarsStr(row_cells, VAR_2D_NAMES.SHADED_ROW_COLUMN_BOX_COUNTERS);
		const col_counters = cellsToGridVarsStr(col_cells, VAR_2D_NAMES.SHADED_ROW_COLUMN_BOX_COUNTERS);

		out_str += `constraint cell_shaded_row_col_box_not_counter_p(${row_vars}, ${col_vars}, ${row_counters}, ${col_counters}, ${cell_var});\n`;
	}

	return out_str;
}

export const cellShadedRowColumnBoxNotCounterInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_SINGLE_CELL_OPTIONS,

	toolId: TOOLS.CELL_SHADED_ROW_COLUMN_BOX_NOT_COUNTER,

	shape: {
		...DEFAULT_SQUARE_SHAPE,
		r: { editable: true, value: 0.25 },
		angle: { editable: false, value: 45 }
	},

	meta: {
		description: `A digit in a diamond is not circled, and equals the sum of the circled digits in its row and column.`,
		tags: [],
		categories: DEFAULT_SINGLE_CELL_SHAPE_CATEGORIES
	},

	solver_func: cellShadedRowColumnBoxNotCounterElement
};
