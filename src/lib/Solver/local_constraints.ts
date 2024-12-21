import type { PuzzleI } from '../Puzzle/Puzzle';
import { arrowConstraints } from './arrow_constraints';
import { cageConstraints } from './cage_constraints';
import { cornerConstraints } from './corner_constraints';
import { edgeConstraints } from './edge_constraints';
import { lineConstraints } from './line_constraints';
import { outsideDirectionConstraints } from './outside_direction_constraints';
import { singleCellConstraints } from './single_cell_constraints';

export function localConstraints(puzzle: PuzzleI): string {
	let out_str = '';
	const lconstraints = puzzle.localConstraints;

	for (const [toolId, clist] of lconstraints.entries()) {
		const constraints_str_1 = singleCellConstraints(puzzle.grid, toolId, clist);
		const constraints_str_2 = edgeConstraints(puzzle.grid, toolId, clist);
		const constraints_str_3 = cornerConstraints(puzzle.grid, toolId, clist);
		const constraints_str_4 = lineConstraints(puzzle.grid, toolId, clist);
		const constraints_str_5 = arrowConstraints(puzzle.grid, toolId, clist);
		const constraints_str_6 = cageConstraints(puzzle.grid, toolId, clist);
		const constraints_str_7 = outsideDirectionConstraints(puzzle.grid, toolId, clist);
		out_str +=
			constraints_str_1 +
			constraints_str_2 +
			constraints_str_3 +
			constraints_str_4 +
			constraints_str_5 +
			constraints_str_6 +
			constraints_str_7;
	}

	return out_str;
}
