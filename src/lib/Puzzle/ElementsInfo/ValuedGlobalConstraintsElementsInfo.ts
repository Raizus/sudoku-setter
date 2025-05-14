import { defaultValidateValueOnInput, type ValueValidatorOptions } from '$input/InputHandler';
import { HANDLER_TOOL_TYPE, type ValueToolInputOptions } from '$input/ToolInputHandlers/types';
import type { SquareCellElementInfo } from '../ElementInfo';
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

export const forbiddenOrthogonallyAdjacentSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OPTIONS,

	toolId: TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,

	meta: {
		description: 'Orthogonally adjacent cells may not sum to X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const minimumDiagonallyAdjacentDifferenceInfo: SquareCellElementInfo = {
	toolId: TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE,

	meta: {
		description: 'Diagonal cell pairs (sharing a corner) must have a difference of at least X.',
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const forbiddenKnightSumInfo: SquareCellElementInfo = {
	toolId: TOOLS.FORBIDDEN_KNIGHT_SUM,

	meta: {
		description: "Digits a knight's move apart cannot sum to X.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};

export const litsMaxTetrominoSumInfo: SquareCellElementInfo = {
	toolId: TOOLS.LITS_MAX_TETROMINO_SUM,

	meta: {
		description: "Each tetromino must contain digits summing to less than 'X'.",
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
	}
};
