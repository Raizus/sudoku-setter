import { exactlyNPerRowColumnRegion, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { ConstraintsElement } from '../puzzle_schema';
import { TOOLS, TOOL_CATEGORIES } from '../Tools';

export const vampireAndPreyInfo: SquareCellElementInfo = {
	toolId: TOOLS.VAMPIRE_AND_PREY,

	meta: {
		description:
			'There are 9 Vampire cells contained within the grid which are a set of the digits from 1-to-9. Each row, column and box contains exactly one Vampire cell. 9 Prey cells in the grid follow the same rules as the Vampire cells. A cell may have only one of these roles.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const markedCellsInfo: SquareCellElementInfo = {
	toolId: TOOLS.MARKED_CELLS,

	meta: {
		description:
			'Mark 9 cells such that there is one marked cell in each row, column and region. Each digit appears in exactly one marked cell. The digit in the first cell of a row, column, or region gives the position of the marked cell in that row, column or region.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export function doublersElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${VAR_2D_NAMES.DOUBLERS};\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 1, true, VAR_2D_NAMES.DOUBLERS);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, ${VAR_2D_NAMES.DOUBLERS}, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = doublers_value_grid_f(board, ${VAR_2D_NAMES.DOUBLERS});\n`;

	return out_str;
}

export const doublersInfo: SquareCellElementInfo = {
	toolId: TOOLS.DOUBLERS,

	meta: {
		description:
			'The grid contains 9 doublers (numbers multiplied by 2), one in each row, column and box. Each digit appears as a doubler exactly once.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	},

	solver_func: doublersElement
};

export function negatorsElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const grid_name = 'negators_grid';

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${grid_name};\n`;

	out_str += exactlyNPerRowColumnRegion(puzzle, 1, true, VAR_2D_NAMES.NEGATORS);
	// only one of each digit
	out_str += `\nconstraint one_of_each_digit_p(board, ${grid_name}, ALLOWED_DIGITS);\n`;
	// values grid
	out_str += `array[int, int] of var int: values_grid = negators_value_grid_f(board, ${grid_name});\n`;

	return out_str;
}

export const negatorsInfo: SquareCellElementInfo = {
	toolId: TOOLS.NEGATORS,

	meta: {
		description:
			'The grid contains 9 negators (numbers multipled by -1), one in each row, column and box. Each digit appears as a negator exactly once.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	},

	solver_func: negatorsElement
};

export const hotCellsInfo: SquareCellElementInfo = {
	toolId: TOOLS.HOT_CELLS,

	meta: {
		description:
			'There are 9 Hot cells contained within the grid comprised of a set of the digits 1-to-9. Each row, column and box contains exactly one Hot cell. Hot cells increase the value of the contained digit by 1.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const coldCellsInfo: SquareCellElementInfo = {
	toolId: TOOLS.COLD_CELLS,

	meta: {
		description:
			'There are 9 Cold cells contained within the grid comprised of a set of the digits 1-to-9. Each row, column and box contains exactly one Cold cell. Cold cells decrease the value of the contained digit by 1.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

export const decrementFountainInfo: SquareCellElementInfo = {
	toolId: TOOLS.DECREMENT_FOUNTAIN,

	meta: {
		description:
			"A set of the digits 1 to 9, one in each row, column, and box, in the grid are Fountains of Youth. The fountain 'splashes' the cells orthogonally and diagonally adjacent. A fountain does not splash itself, but can be splashed by other fountains. A cell may be splashed by multiple fountains. Each time a cell is splashed, the value of the cell is reduced by one.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	}
};

function nexusElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: nexus_grid;\n`;
	out_str += `\nconstraint nexus_p(board, nexus_grid, ALLOWED_DIGITS);\n`;

	return out_str;
}

export const nexusInfo: SquareCellElementInfo = {
	toolId: TOOLS.NEXUS,

	meta: {
		description:
			'One cell within the grid, to be deduced, is a “multiplier nexus” cell. The value “n” within this “nexus” cell indicates that there are: exactly “n” 1s which have a taxicab distance of 1 away from the nexus; exactly “n” 2s which have a taxicab distance of 2 away from the nexus; exactly “n” 3s which have a taxicab distance of 3 away from the nexus; and so on... up to and including 9. A taxicab distance is the shortest distance between two cells, moving only horizontally and vertically.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	},

	solver_func: nexusElement
};

export function indexerCellsElement(model: PuzzleModel, element: ConstraintsElement) {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const all_cells = grid.getAllCells();
	if (all_cells.some((cell) => cell.outside)) {
		console.warn(`${tool} not implemented when there are cells outside the grid.`);
		return '';
	}

	const name1 = VAR_2D_NAMES.INDEXER_CELLS_GRID;

	let out_str: string = `\n% ${tool}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var bool: ${name1};\n`;
	out_str += exactlyNPerRowColumnRegion(puzzle, 2, true, name1);

	// values grid
	out_str += `array[ROW_IDXS, COL_IDXS] of var int: values_grid;\n`;
	out_str += `constraint indexer_cells_p(board, ${name1}, values_grid);\n`;

	return out_str;
}

export const indexerCellsInfo: SquareCellElementInfo = {
	toolId: TOOLS.INDEXER_CELLS,

	meta: {
		description:
			"Identify two 'indexer' cells in each row, column, and box, with one indexing in the row and the other indexing in the column. The digit in an indexer cell indicates the position of the other indexer cell in its row or column. Positions are counted left to right in rows and top to bottom in columns. The value of an indexer cell is the digit in the cell it indexes. For all other cells, their value is their own digit. Example: If () represents an indexer cell, then 12(6)34(7)598 would be a valid row of digits, because there are exactly two indexer cells, and one of the cells indexes the other: the (7) is in position 6, and the other indexer cell contains a 6. The value of the (6) cell would be 7, because that is the digit in the cell it indexes. Given that this is a row, we would also know that r7c6 must be an indexer cell, because the (7) cell indexes it.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT]
	},

	solver_func: indexerCellsElement
};
