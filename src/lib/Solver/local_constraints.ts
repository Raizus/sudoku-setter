import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import type { TOOLID } from '../Puzzle/Tools';
import { arrowConstraints } from './arrow_constraints';
import { cageConstraints } from './cage_constraints';
import { cloneConstraints } from './clone_constraints';
import { cornerConstraints } from './corner_constraints';
import { edgeConstraints } from './edge_constraints';
import { lineConstraints } from './line_constraints';
import { outsideDirectionConstraints } from './outside_direction_constraints';
import { singleCellConstraints } from './single_cell_constraints';
import { addHeader } from './solver_utils';
import { valuedGlobalConstraints } from './valued_global_constraints';

type ConstraintsF = (
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>
) => string;

const functions_list: ConstraintsF[] = [
	singleCellConstraints,
	edgeConstraints,
	cornerConstraints,
	lineConstraints,
	arrowConstraints,
	cageConstraints,
	outsideDirectionConstraints,
	cloneConstraints,
	valuedGlobalConstraints
];

export function localConstraints(puzzle: PuzzleI): string {
	let out_str = '';
	const lconstraints = puzzle.localConstraints;
	const grid = puzzle.grid;

	for (const [toolId, c_record] of lconstraints.entries()) {
		for (const constraintF of functions_list) {
			let constraint_str: string = constraintF(grid, toolId, c_record);
			constraint_str = addHeader(constraint_str, `${toolId}`);
			out_str += constraint_str;
		}
	}

	return out_str;
}
