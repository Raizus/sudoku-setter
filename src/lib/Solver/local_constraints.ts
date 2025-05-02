import type { PuzzleI } from '../Puzzle/Puzzle';
import { arrowElements } from './arrow_constraints';
import { cageElements } from './cage_constraints';
import { centerCornerOrEdgeElements } from './center_corner_edge_constraints';
import { cloneElements } from './clone_constraints';
import { cornerElements } from './corner_constraints';
import { edgeElements } from './edge_constraints';
import { lineElement } from './line_constraints';
import { outsideDirectionElements } from './outside_direction_constraints';
import { singleCellArrowElements } from './single_cell_arrow_constraints';
import { singleCellElements } from './single_cell_constraints';
import { singleCellMultiArrowElements } from './single_cell_multi_arrow_constraints';
import { addHeader, PuzzleModel, type ElementF } from './solver_utils';
import { valuedGlobalConstraints as valuedGlobalElements } from './valued_global_constraints';

const functions_list: ElementF[] = [
	centerCornerOrEdgeElements,
	singleCellElements,
	singleCellArrowElements,
	singleCellMultiArrowElements,
	edgeElements,
	cornerElements,
	lineElement,
	arrowElements,
	cageElements,
	outsideDirectionElements,
	cloneElements,
	valuedGlobalElements
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
