import type { Grid } from './Grid/Grid';
import type { PuzzleI } from './Puzzle';
import { TOOLS } from './Tools';

export function allCellsFilled(grid: Grid): boolean {
	for (const cell of grid.getAllCells()) {
		if (cell.outside === false) continue;
		else if (cell.value === null) return false;
	}
	return true;
}

function matchesSolution(puzzle: PuzzleI): boolean {
	const solution = puzzle.solution;
	const grid = puzzle.grid;
	if (solution) {
		for (const cell of grid.getAllCells()) {
			if (cell.value !== null && cell.value !== solution[cell.r][cell.c]) return false;
		}
	}
	return true;
}

function checkSudokuConstraints(grid: Grid): boolean {
	// no repeats in row
	for (let r = 0; r < grid.nRows; r++) {
		const cells = grid.getRow(r);
		const values = cells.map((cell) => cell.value).filter((value) => value !== null);
		const repeats = new Set(values).size !== values.length;
		if (repeats) {
			return false;
		}
	}
	// no repeats in column
	for (let c = 0; c < grid.nCols; c++) {
		const cells = grid.getCol(c);
		const values = cells.map((cell) => cell.value).filter((value) => value !== null);
		const repeats = new Set(values).size !== values.length;
		if (repeats) {
			return false;
		}
	}
	// no repeats in region
	const used_regions = grid.getUsedRegions();
	for (const region of used_regions) {
		const cells = grid.getRegion(region);
		const values = cells.map((cell) => cell.value).filter((value) => value !== null);
		const repeats = new Set(values).size !== values.length;
		if (repeats) {
			return false;
		}
	}
	return true;
}

export function verifyIncompleteCorrectnessPuzzle(puzzle: PuzzleI): boolean {
	const solution = puzzle.solution;
	const grid = puzzle.grid;
	if (solution) {
		for (const cell of grid.getAllCells()) {
			if (cell.value !== null && cell.value !== solution[cell.r][cell.c]) return false;
		}
	}
	const elements_dict = puzzle.elementsDict;

	// verify sudoku constraints
	const sudoku = !elements_dict.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY);
	if (sudoku && !checkSudokuConstraints(grid)) {
		return false;
	}

	// verify global constraints

	// verify local constraints


	return true;
}

export function verifyCompletePuzzle(puzzle: PuzzleI): boolean {
	// if solution exists compare with solution
	const grid = puzzle.grid;
	const solution = puzzle.solution;
	if (solution) {
		for (const cell of grid.getAllCells()) {
			if (cell.value !== solution[cell.r][cell.c]) return false;
		}
		return true;
	}

	// verify all cells are filled.
	// const all_filled = allCellsFilled(grid);
	// if (!all_filled) return false;

	const elements_dict = puzzle.elementsDict;

	// verify sudoku constraints
	const sudoku = !elements_dict.get(TOOLS.SUDOKU_RULES_DO_NOT_APPLY);
	if (sudoku && !checkSudokuConstraints(grid)) {
		return false;
	}

	// check other boolean constraints

	// check local constraints

	return false;
}
