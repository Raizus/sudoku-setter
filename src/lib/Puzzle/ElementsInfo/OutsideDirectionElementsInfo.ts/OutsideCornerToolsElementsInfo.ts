import {
	CornerOrEdge,
	HANDLER_TOOL_TYPE,
	type OutsideDirectionToolInputOptions
} from '$input/ToolInputHandlers/types';
import { cellsToGridVarsStr, simpleElementFunction, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Grid } from '../../Grid/Grid';
import { outsideCornerUsage } from '../../ToolUsage';
import { TOOL_CATEGORIES, TOOLS } from '../../Tools';
import type { ConstraintsElement, OutsideDirectionToolI } from '../../puzzle_schema';
import { defaultOutsideDirectionValueUpdater, OUTSIDE_DEFAULT_SHAPE, simpleOutsideDirectionElement, validateOutsideDirectionValue } from './helpers';

const outsideCornerDefaultCategories = [
	TOOL_CATEGORIES.OUTSIDE_CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.OUTSIDE_CORNER_TOOL,
	TOOL_CATEGORIES.OUTSIDE_DIRECTION_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const DEFAULT_OUTSIDE_CORNER_OPTIONS: OutsideDirectionToolInputOptions = {
	type: HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultOutsideDirectionValueUpdater(oldValue, key, validateOutsideDirectionValue),
	defaultValue: '',
	cornerOrEdge: CornerOrEdge.CORNER
};

function littleKillerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'little_killer_sum_p');
	return out_str;
}

export const littleKillerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue with an arrow outside the grid shows the sum of the numbers along the indicated diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	},

	solver_func: littleKillerSumElement
};

function littleKillerProductElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'little_killer_product_p');
	return out_str;
}

export const littleKillerProductInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_PRODUCT,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'A clue with an arrow outside the grid shows the product of the numbers along the indicated diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	},

	solver_func: littleKillerProductElement
};

export const littleKillerLookAndSayInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_LOOK_AND_SAY,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			"A clue outside the grid should be read as a 'look-and-say' number. Each number says which digits are in the respective diagonal. Eg if a diagonal clue is 1221, this means there is one 2 and two 1s in the indicated diagonal.",
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

function xOmitlittleKillerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleOutsideDirectionElement(model, element, 'x_omit_little_killer_sum_p');
	return out_str;
}

export const xOmitLittleKillerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.X_OMIT_LITTLE_KILLER_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Numbers outside the grid indicate the sum of the digits along the indicated diagonal while omitting the Xth digit from the sum, where X is the digit in the first cell along the indicated diagonal. Note: X cannot be larger than the length of the diagonal.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	},

	solver_func: xOmitlittleKillerSumElement
};

export const littleKillerRegionSumProductInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.LITTLE_KILLER_REGION_SUM_PRODUCT,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Clues outside the grid give the multiplication of the box sums that the diagonal passes through. Eg a 1000 clue on the SW-NE diagonal at R0C10 means that (R1C9 + R2C8 + R3C7) * (R4C6 + R5C5 + R6C4) * (R7C3 + R8C2 + R9C1) = 1000.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	}
};

function negatorsLittleKillerSumConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: OutsideDirectionToolI
) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint little_killer_sum_p(${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function negatorsLittleKillerSumElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, negatorsLittleKillerSumConstraint);
	return out_str;
}

export const negatorsLittleKillerSumInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_OUTSIDE_CORNER_OPTIONS,

	toolId: TOOLS.NEGATORS_LITTLE_KILLER_SUM,

	shape: OUTSIDE_DEFAULT_SHAPE,

	meta: {
		description:
			'Digits along indicated diagonals must add to the indicated total. Repeats are permitted along such diagonals. A digit in a negator cell must be subtracted rather than added to achieve the given diagonal total.',
		usage: outsideCornerUsage(),
		tags: [],
		categories: outsideCornerDefaultCategories
	},

	solver_func: negatorsLittleKillerSumElement
};
