import { allDifferentConstraint, cellsToVarsName, cellToVarName, PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { ConstraintsElement } from '../../puzzle_schema';
import { TOOLS } from '../../Tools';
import { diagonalConstraintsDefaultCategories } from './GlobalConstraintsElementsInfo';


function negativeDiagonalElement(
    model: PuzzleModel,
    element: ConstraintsElement
): string {
    const puzzle = model.puzzle;
    const grid = puzzle.grid;
    const tool = element.tool_id;

    const diag_cells = grid.getNegativeDiagonal();
    const diag_vars = cellsToVarsName(diag_cells);
    let out_str = `\n% ${tool}\n`;
    out_str += allDifferentConstraint(diag_vars);
    return out_str;
}

export const negativeDiagonalInfo: SquareCellElementInfo = {
	toolId: TOOLS.NEGATIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' }
	},

	meta: {
		description: 'Numbers must not repeat on the negative diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
    },
    
    solver_func: negativeDiagonalElement
};

function positiveDiagonalElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	let out_str = `\n% ${tool}\n`;
	out_str += allDifferentConstraint(diag_vars);
	return out_str;
}

export const positiveDiagonalInfo: SquareCellElementInfo = {
	toolId: TOOLS.POSITIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'black' }
	},

	meta: {
		description: 'Numbers must not repeat on the positive diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
    },
    
    solver_func: positiveDiagonalElement
};

function negativeAntidiagonalElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getNegativeDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	const vars_str = '[' + diag_vars.join(',') + ']';
	let out_str = `\n% ${tool}\n`;
	out_str += `constraint count_unique_values(${vars_str}) == 3;\n`;
	return out_str;
}

export const negativeAntidiagonalInfo: SquareCellElementInfo = {
	toolId: TOOLS.NEGATIVE_ANTIDIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'rgb(169, 0, 169)' }
	},

	meta: {
		description: 'The negative diagonal containts only 3 different numbers.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
    },
    
    solver_func: negativeAntidiagonalElement
};

function positiveAntidiagonalElement(model: PuzzleModel, element: ConstraintsElement): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const diag_cells = grid.getPositiveDiagonal();
	const diag_vars = cellsToVarsName(diag_cells);
	const vars_str = '[' + diag_vars.join(',') + ']';
	let out_str = `\n% ${tool}\n`;
	out_str += `constraint count_unique_values(${vars_str}) == 3;\n`;
	return out_str;
}

export const positiveAntidiagonalInfo: SquareCellElementInfo = {
	toolId: TOOLS.POSITIVE_ANTIDIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'rgb(169, 0, 169)' }
	},

	meta: {
		description: 'The positive diagonal containts only 3 different numbers.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
    },
    
    solver_func: positiveAntidiagonalElement
};

function parityMirrorNegativeDiagonalElement(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	if (n_rows !== n_cols) return '';

	let out_str = `\n% ${tool}\n`;
	const diag_cells = grid.getNegativeDiagonal();
	for (const dcell of diag_cells) {
		const [dr, dc] = [dcell.r, dcell.c];
		for (let i = 0; i < dr; i++) {
			const cell = grid.getCell(i, dc);
			const mirror_cell = grid.getCell(dr, dc - (dr - i));

			if (!cell || !mirror_cell) continue;
			const cell_var = cellToVarName(cell);
			const mirror_cell_var = cellToVarName(mirror_cell);
			const vars_str = `[${cell_var}, ${mirror_cell_var}]`;
			const constraint_str = `constraint is_unimodular_line(${vars_str}, 2);\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export const parityMirrorNegativeDiagonalInfo: SquareCellElementInfo = {
	toolId: TOOLS.PARITY_MIRROR_NEGATIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'orange' }
	},

	meta: {
		description: 'Odd/Even parity is reflected across the purple negative diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
    },
    
    solver_func: parityMirrorNegativeDiagonalElement
};

function parityMirrorPositiveDiagonalElement(
	model: PuzzleModel,
	element: ConstraintsElement
): string {
	const puzzle = model.puzzle;
	const grid = puzzle.grid;
	const tool = element.tool_id;

	const [n_rows, n_cols] = [grid.nRows, grid.nCols];

	if (n_rows !== n_cols) return '';

	let out_str = `\n% ${tool}\n`;
	const diag_cells = grid.getPositiveDiagonal();
	for (const dcell of diag_cells) {
		const [dr, dc] = [dcell.r, dcell.c];
		for (let i = 0; i < dr; i++) {
			const cell = grid.getCell(i, dc);
			const mirror_cell = grid.getCell(dr, dc + (dr - i));

			if (!cell || !mirror_cell) continue;
			const cell_var = cellToVarName(cell);
			const mirror_cell_var = cellToVarName(mirror_cell);
			const vars_str = `[${cell_var}, ${mirror_cell_var}]`;
			const constraint_str = `constraint is_unimodular_line(${vars_str}, 2);\n`;
			out_str += constraint_str;
		}
	}

	return out_str;
}

export const parityMirrorPositiveDiagonalInfo: SquareCellElementInfo = {
	toolId: TOOLS.PARITY_MIRROR_POSITIVE_DIAGONAL,

	shape: {
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'orange' }
	},

	meta: {
		description: 'Odd/Even parity is reflected across the purple positive diagonal.',
		tags: [],
		categories: diagonalConstraintsDefaultCategories
    },
    
    solver_func: parityMirrorPositiveDiagonalElement
};
