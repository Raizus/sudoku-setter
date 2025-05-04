import type { ConstraintsElement } from '../Puzzle/Constraints/LocalConstraints';
import type { ValuedGlobalToolI } from '../Puzzle/Constraints/ValuedGlobalConstraints';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	constraintsBuilder,
	PuzzleModel,
	simpleElementFunction,
	VAR_2D_NAMES,
	type ElementF
} from './solver_utils';

function forbiddenAdjacentSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ValuedGlobalToolI
) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint forbidden_adjacent_sum_p(board, ${val});\n`;
	return constraint_str;
}

function forbiddenAdjacentSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, forbiddenAdjacentSumConstraint);
	return out_str;
}

function minimumDiagonallyAdjacentDifferenceConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ValuedGlobalToolI
) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint minimum_diagonally_adjacent_difference(board, ${val});\n`;
	return constraint_str;
}

function minimumDiagonallyAdjacentDifferenceElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		minimumDiagonallyAdjacentDifferenceConstraint
	);
	return out_str;
}

function forbiddenKnightSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: ValuedGlobalToolI
) {
	const value = constraint.value;
	if (!value) return '';

	const val = parseInt(value);
	const constraint_str = `constraint forbidden_knight_sum_p(board, ${val});\n`;
	return constraint_str;
}

function forbiddenKnightSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, forbiddenKnightSumConstraint);
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
