import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { arrowConstraints } from './arrow_constraints';
import { cageConstraints } from './cage_constraints';
import { centerCornerOrEdgeConstraints } from './center_corner_edge_constraints';
import { cloneConstraints } from './clone_constraints';
import { cornerConstraints } from './corner_constraints';
import { edgeElements } from './edge_constraints';
import { lineElement } from './line_constraints';
import { outsideDirectionConstraints } from './outside_direction_constraints';
import { singleCellArrowConstraints } from './single_cell_arrow_constraints';
import { singleCellConstraints } from './single_cell_constraints';
import { singleCellMultiArrowConstraints } from './single_cell_multi_arrow_constraints';
import { addHeader, PuzzleModel } from './solver_utils';
import { valuedGlobalConstraints } from './valued_global_constraints';

type ConstraintsF = (model: PuzzleModel, grid: Grid, element: ConstraintsElement) => string;

const functions_list: ConstraintsF[] = [
	centerCornerOrEdgeConstraints,
	singleCellConstraints,
	singleCellArrowConstraints,
	singleCellMultiArrowConstraints,
	edgeElements,
	cornerConstraints,
	lineElement,
	arrowConstraints,
	cageConstraints,
	outsideDirectionConstraints,
	cloneConstraints,
	valuedGlobalConstraints
];

export function localConstraints(puzzle: PuzzleI, model: PuzzleModel): string {
	let out_str = '';
	const elements = puzzle.elementsDict;
	const grid = puzzle.grid;

	for (const [tool_id, element] of elements.entries()) {
		for (const constraintF of functions_list) {
			let constraint_str: string = constraintF(model, grid, element);
			constraint_str = addHeader(constraint_str, `${tool_id}`);
			out_str += constraint_str;
		}
	}

	return out_str;
}
