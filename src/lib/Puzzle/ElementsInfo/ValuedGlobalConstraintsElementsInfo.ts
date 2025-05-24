import { defaultValidateValueOnInput, type ValueValidatorOptions } from '$input/InputHandler';
import { HANDLER_TOOL_TYPE, type ValueToolInputOptions } from '$input/ToolInputHandlers/types';
import {
	simpleElementFunction,
	VAR_2D_NAMES,
	type PuzzleModel
} from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../ElementInfo';
import type { Grid } from '../Grid/Grid';
import type { ConstraintsElement, ValuedGlobalToolI } from '../puzzle_schema';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';

function valueUpdater(value: string | undefined, key: string): string | undefined {
	if (value === undefined) return value;
	const options: ValueValidatorOptions = {
		maxLength: 10,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	if (valid) return value;
	return undefined;
}

const DEFAULT_OPTIONS: ValueToolInputOptions = {
	type: HANDLER_TOOL_TYPE.VALUE_TOOL,
	defaultValue: '',
	valueUpdater: valueUpdater
};

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

export const forbiddenOrthogonallyAdjacentSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OPTIONS,

	toolId: TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,

	meta: {
		description: 'Orthogonally adjacent cells may not sum to X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	},

	solver_func: forbiddenAdjacentSumElement
};

function minimumDiagonallyAdjacentDifferenceElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = valuedGlobalElement(model, element, 'minimum_diagonally_adjacent_difference');
	return out_str;
}

export const minimumDiagonallyAdjacentDifferenceInfo: SquareCellElementInfo = {
	toolId: TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,

	meta: {
		description: 'Diagonal cell pairs (sharing a corner) must have a difference of at least X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	},

	solver_func: minimumDiagonallyAdjacentDifferenceElement
};

function forbiddenKnightSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = valuedGlobalElement(model, element, 'forbidden_knight_sum_p');
	return out_str;
}

export const forbiddenKnightSumInfo: SquareCellElementInfo = {
	toolId: TOOLS.FORBIDDEN_KNIGHT_SUM,

	meta: {
		description: "Digits a knight's move apart cannot sum to X.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	},

	solver_func: forbiddenKnightSumElement
};

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

export const litsMaxTetrominoSumInfo: SquareCellElementInfo = {
	toolId: TOOLS.LITS_MAX_TETROMINO_SUM,

	meta: {
		description: "Each tetromino must contain digits summing to less than 'X'.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	},

	solver_func: litsMaxTetrominoSumElement
};
