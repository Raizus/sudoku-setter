import { GlobalConstraintsDict } from './Constraints/GlobalConstraints';
import { LocalConstraintsDict } from './Constraints/LocalConstraints';
import type { CellRecord } from './Grid/Cell';
import { Grid } from './Grid/Grid';
import type { PuzzleMetaI } from './PuzzleMeta';

export type Solution = undefined | Array<Array<null | number>>;

export interface PuzzleI {
	grid: Grid;
	solution: Solution;
	valid_digits: number[] | undefined;
	puzzleMeta: PuzzleMetaI;
	localConstraints: LocalConstraintsDict;
	globalConstraints: GlobalConstraintsDict;
}

export function puzzleToJson(
	puzzle: PuzzleI
) {
	const grid = puzzle.grid;
	const localConstraints = puzzle.localConstraints;
	const globalConstraints = puzzle.globalConstraints;
	const puzzleRecord: Record<string, unknown> = {};
	puzzleRecord['puzzleInfo'] = puzzle.puzzleMeta;
	puzzleRecord['nRows'] = grid.nRows;
	puzzleRecord['nCols'] = grid.nCols;
	puzzleRecord['grid'] = grid.toJSON();

	if (puzzle.solution) {
		puzzleRecord['solution'] = puzzle.solution;
	}

	const globalConstraintsRecord = globalConstraints.toJSON();
	if (Object.keys(globalConstraintsRecord).length) {
		puzzleRecord['bool_constraints'] = globalConstraintsRecord;
	}

	const localConstraintsRecord = localConstraints.toJSON();
	if (Object.keys(localConstraintsRecord).length) {
		puzzleRecord['local_constraints'] = localConstraintsRecord;
	}

	return puzzleRecord;
}

export function puzzleFromJson(puzzleJson: Record<string, unknown>) {
	const nRows = puzzleJson['nRows'] as number;
	const nCols = puzzleJson['nRows'] as number;

	const puzzleMeta = puzzleJson['puzzleInfo'] as PuzzleMetaI;
	const valid_digits = puzzleJson['valid_digits'] as number[] | undefined;
	const grid_data = puzzleJson['grid'] as CellRecord[][];
	const grid = Grid.fromJSON(nRows, nCols, grid_data);
	const solution = puzzleJson['solution'] as Solution;
	// const grid = new Grid(nRows, nCols);

	const local_constraints_data = puzzleJson['local_constraints'] as Record<string, unknown>;
	const local_constraints = LocalConstraintsDict.fromJson(local_constraints_data);

	const global_constraints_data = puzzleJson['bool_constraints'] as Record<string, unknown>;
	const global_constraints = GlobalConstraintsDict.fromJson(global_constraints_data);

	const puzzle: PuzzleI = {
		puzzleMeta: puzzleMeta,
		solution: solution,
		grid: grid,
		valid_digits: valid_digits,
		localConstraints: local_constraints,
		globalConstraints: global_constraints
	};

	return puzzle;
}
