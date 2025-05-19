import { range } from 'lodash';
import { ElementsDict, type ElementData } from './Constraints/LocalConstraints';
import type { CellRecord } from './Grid/Cell';
import { Grid } from './Grid/Grid';
import type { PuzzleMetaI } from './PuzzleMeta';
import { areArraysEqual } from '../utils/functionUtils';

export type Solution = undefined | Array<Array<null | number>>;

export interface PuzzleI {
	grid: Grid;
	solution?: Solution;
	valid_digits: number[];
	puzzleMeta: PuzzleMetaI;
	elementsDict: ElementsDict;
}

export function puzzleToJson(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const localConstraints = puzzle.elementsDict;
	const puzzleRecord: Record<string, unknown> = {};
	puzzleRecord['puzzleInfo'] = puzzle.puzzleMeta;
	puzzleRecord['nRows'] = grid.nRows;
	puzzleRecord['nCols'] = grid.nCols;

	const n = Math.min(grid.nRows, grid.nCols);
	const default_valid_digits = range(1, n + 1);
	if (puzzle.valid_digits && !areArraysEqual(default_valid_digits, puzzle.valid_digits)) {
		puzzleRecord['valid_digits'] = puzzle.valid_digits;
	}

	puzzleRecord['grid'] = grid.toJSON();

	if (puzzle.solution) {
		puzzleRecord['solution'] = puzzle.solution;
	}

	const localConstraintsRecord = localConstraints.toJSON();
	if (Object.keys(localConstraintsRecord).length) {
		puzzleRecord['elements'] = localConstraintsRecord;
	}

	return puzzleRecord;
}

export function puzzleFromJson(puzzleJson: Record<string, unknown>) {
	const nRows = puzzleJson['nRows'] as number;
	const nCols = puzzleJson['nCols'] as number;

	const puzzleMetaData = puzzleJson['puzzleInfo'] as PuzzleMetaI;
	let puzzleMeta: PuzzleMetaI = {};
	if (puzzleMetaData) {
		puzzleMeta = puzzleMetaData as PuzzleMetaI;
	}
	const parsed_valid_digits = puzzleJson['valid_digits'] as number[] | undefined;
	const grid_data = puzzleJson['grid'] as CellRecord[][];
	const grid = Grid.fromJSON(nRows, nCols, grid_data);
	const n = Math.min(grid.nRows, grid.nRows);
	let valid_digits = range(1, n + 1);
	if (parsed_valid_digits !== undefined) {
		valid_digits = parsed_valid_digits;
	}

	const solution = puzzleJson['solution'] as Solution;
	// const grid = new Grid(nRows, nCols);

	const local_constraints_data = puzzleJson['elements'] as Record<string, ElementData>;
	const elements_dict = ElementsDict.fromJson(local_constraints_data);

	const puzzle: PuzzleI = {
		puzzleMeta: puzzleMeta,
		solution: solution,
		grid: grid,
		valid_digits: valid_digits,
		elementsDict: elements_dict
	};

	return puzzle;
}

export function blankPuzzle(): PuzzleI {
	const grid = new Grid(9, 9);
	const elements_dict = new ElementsDict();
	const puzzle: PuzzleI = {
		grid,
		solution: undefined,
		valid_digits: range(1, 10),
		puzzleMeta: {},
		elementsDict: elements_dict
	};
	return puzzle;
}
