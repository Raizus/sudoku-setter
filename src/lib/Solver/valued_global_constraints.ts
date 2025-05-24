import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
import type { ValuedGlobalToolI } from '../Puzzle/puzzle_schema';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	constraintsBuilder,
	PuzzleModel,
	simpleElementFunction,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';

function valuedGlobalConstraint(
	model: PuzzleModel,
	c_id: string,
	constraint: ValuedGlobalToolI,
	predicate: string
) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint ${predicate}(board, ${val});\n`;
	return constraint_str;
}

function valuedGlobalElement(model: PuzzleModel, element: ConstraintsElement, predicate: string) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = valuedGlobalConstraint(
			model,
			c_id,
			constraint as ValuedGlobalToolI,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

function forbiddenAdjacentSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedGlobalElement(model, element, 'forbidden_adjacent_sum_p');
	return out_str;
}

function minimumDiagonallyAdjacentDifferenceElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = valuedGlobalElement(model, element, 'minimum_diagonally_adjacent_difference');
	return out_str;
}

function forbiddenKnightSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedGlobalElement(model, element, 'forbidden_knight_sum_p');
	return out_str;
}

function litsMaxTetrominoSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ValuedGlobalToolI
) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const regions = [...grid.getUsedRegions()];
	regions.sort();
	const n_regions = regions.length;

	const constraint_str = `constraint lits_max_tetromino_sum_p(${VAR_2D_NAMES.BOARD}, ${VAR_2D_NAMES.LITS_GRID}, ${val}, 0..${n_regions});\n`;
	return constraint_str;
}

function litsMaxTetrominoSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, litsMaxTetrominoSumConstraint);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM, forbiddenAdjacentSumElement],
	[TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE, minimumDiagonallyAdjacentDifferenceElement],
	[TOOLS.FORBIDDEN_KNIGHT_SUM, forbiddenKnightSumElement],
	[TOOLS.LITS_MAX_TETROMINO_SUM, litsMaxTetrominoSumElement]
]);

export function valuedGlobalConstraints(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
