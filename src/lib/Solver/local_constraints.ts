import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';
import { arrowElements } from './arrow_constraints';
import { cageElements } from './cage_constraints';
import { centerCornerOrEdgeElements } from './center_corner_edge_constraints';
import { cloneElements } from './clone_constraints';
import { cornerElements } from './corner_constraints';
import { edgeElements } from './edge_constraints';
import { globalConstraints } from './global_constraints';
import { lineElement } from './line_constraints';
import { outsideDirectionElements } from './outside_direction_constraints';
import { singleCellArrowElements } from './single_cell_arrow_constraints';
import { singleCellElements } from './single_cell_constraints';
import { singleCellMultiArrowElements } from './single_cell_multi_arrow_constraints';
import { addHeader, constraintsBuilder, PuzzleModel, type ElementF } from './solver_utils';
import { undeterminedRegionsElements } from './undetermined_regions_constraints';
import {
	doublersConstraint,
	indexerCellsConstraint,
	negatorsConstraint
} from './value_modifier_constraints';
import { valuedGlobalConstraints as valuedGlobalElements } from './valued_global_constraints';

const other_tool_map = new Map<string, ElementF>([
	// value modifiers
	[TOOLS.DOUBLERS, doublersConstraint],
	[TOOLS.NEGATORS, negatorsConstraint],
	[TOOLS.INDEXER_CELLS, indexerCellsConstraint]
]);

const functions_list: ElementF[] = [
	undeterminedRegionsElements,
	otherElements,
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
	valuedGlobalElements,
	globalConstraints
];

export function otherElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, other_tool_map);
	return out_str;
}

export function localAndGlobalConstraints(puzzle: PuzzleI, model: PuzzleModel): string {
	let out_str = '';
	const elements = puzzle.elementsDict;

	for (const [tool_id, element] of elements.entries()) {
		for (const constraintF of functions_list) {
			let constraint_str: string = constraintF(model, element);
			constraint_str = addHeader(constraint_str, `${tool_id}`);
			out_str += constraint_str;
		}
	}

	return out_str;
}
