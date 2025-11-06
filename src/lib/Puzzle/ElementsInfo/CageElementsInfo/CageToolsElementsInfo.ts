import { HANDLER_TOOL_TYPE, type CageToolInputOptions } from '$input/ToolInputHandlers/types';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { allDifferentConstraint, cellsFromCoords, cellsToGridVarsStr, groupConstraintsByValue, simpleElementFunction, VAR_2D_NAMES, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { SquareCellElementInfo } from '../../ElementInfo';
import type { Cell } from '../../Grid/Cell';
import type { Grid } from '../../Grid/Grid';
import { SHAPE_TYPES, type EditableShapeI } from '../../Shape/Shape';
import { cageUsage, typableCageUsage } from '../../ToolUsage';
import { TOOL_CATEGORIES, TOOLS } from '../../Tools';
import type { CageToolI, ConstraintsElement } from '../../puzzle_schema';
import { getAdjacentCages, getCageNeighbours, getCageVars, getParsingResult, simpleCageElement, valuedCageConstraint, valuedCageElement } from './cage_solver_utils';

const nonTypableCageDefaultCategories = [
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.CAGE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

const typableCageDefaultCategories = [
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.CAGE_TOOL,
	TOOL_CATEGORIES.LOCAL_ELEMENT
];

export function validateCageValue(value: string, maxLength = 5): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultCageValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

const DEFAULT_CAGE_SHAPE: EditableShapeI = {
	type: SHAPE_TYPES.CAGE,
	strokeWidth: { editable: true, value: 0.03, lb: 0, ub: 0.5, step: 0.01 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'none' },
	strokeDasharray: { editable: true, value: 0.08 },
	inset: { editable: true, value: 0.06, lb: 0, ub: 0.5, step: 0.01 }
};

const DEFAULT_UNVALUED_CAGE_OPTIONS: CageToolInputOptions = {
	type: HANDLER_TOOL_TYPE.CAGE,
	defaultValue: '',
	allowDiagonallyAdjacent: true
};

const DEFAULT_CAGE_OPTIONS: CageToolInputOptions = {
	...DEFAULT_UNVALUED_CAGE_OPTIONS,
	valueUpdater: (oldValue: string | undefined, key: string) =>
		defaultCageValueUpdater(oldValue, key, validateCageValue)
};

function killerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'killer_cage');
	let out_str = result[0];

	const var_names = result[1];
	if (!element.negative_constraints) return out_str;

	const cage_totals_different = !!element.negative_constraints[TOOLS.ALL_CAGE_TOTALS_ARE_DIFFERENT];
	const cage_totals_consecutive =
		!!element.negative_constraints[TOOLS.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE];
	const adj_cage_totals_different =
		!!element.negative_constraints[TOOLS.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT];

	if (cage_totals_different) {
		out_str += `\n% ${TOOLS.ALL_CAGE_TOTALS_ARE_DIFFERENT}\n`;
		out_str += `constraint all_different([${var_names.join(', ')}]);\n`;
	}
	if (cage_totals_consecutive) {
		const adj_list = getAdjacentCages(model.puzzle.grid, element);
		out_str += `\n% ${TOOLS.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE}\n`;
		for (const [c_id1, set1] of adj_list.entries()) {
			for (const c_id2 of set1) {
				const res1 = getParsingResult(model, '', c_id1);
				if (!res1) continue;
				const var1 = res1[1];
				out_str += res1[0];

				const res2 = getParsingResult(model, '', c_id2);
				if (!res2) continue;
				const var2 = res2[1];
				out_str += res2[0];
				out_str += `constraint abs(${var1} - ${var2}) == 1;\n`;
			}
		}
	}
	if (adj_cage_totals_different) {
		const adj_list = getAdjacentCages(model.puzzle.grid, element);
		out_str += `\n% ${TOOLS.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT}\n`;
		for (const [c_id1, set1] of adj_list.entries()) {
			for (const c_id2 of set1) {
				const res1 = getParsingResult(model, '', c_id1);
				if (!res1) continue;
				const var1 = res1[1];
				out_str += res1[0];

				const res2 = getParsingResult(model, '', c_id2);
				if (!res2) continue;
				const var2 = res2[1];
				out_str += res2[0];
				out_str += `constraint ${var1} != ${var2};\n`;
			}
		}
	}
	return out_str;
}

export const killerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.KILLER_CAGE,

	negative_constraints: [
		{
			toolId: TOOLS.ALL_CAGE_TOTALS_ARE_DIFFERENT,
			description: 'All Killer Cage totals are different.'
		},
		{
			toolId: TOOLS.ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE,
			description: 'Adjacent Killer Cages have consecutive sums.'
		},
		{
			toolId: TOOLS.ADJACENT_CAGE_TOTALS_ARE_DIFFERENT,
			description: 'Killer Cages that share an edge have different totals.'
		}
	],

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: killerCageElement
};

function uniqueDigitsCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;

	if (value) {
		const val = parseInt(value);
		const constraint_str: string = `constraint unique_values_cage_p(${vars_str}, ${val}, ALLOWED_DIGITS);\n`;
		return constraint_str;
	}
	return '';
}

function uniqueDigitsCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, uniqueDigitsCageConstraint);
	return out_str;
}

export const uniqueDigitsCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.UNIQUE_DIGITS_CAGE,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.1 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'none' },
		strokeDasharray: { editable: false, value: 0 },
		inset: { editable: false, value: 0 }
	},

	meta: {
		description:
			'A bold cage has exactly x unique digits, i.e. the set of elements of the cage has size x. Digits may repeat in a cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: uniqueDigitsCageElement
};

function invertedKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const value = constraint.value;

	if (!value) {
		const constraint_str = allDifferentConstraint(vars);
		return constraint_str;
	}

	const result = getParsingResult(model, value, c_id);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint inverted_killer_cage_p(${vars_str}, ${var_name});\n`;
	return out_str;
}

function invertedKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, invertedKillerCageConstraint);
	return out_str;
}

export const invertedKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.INVERTED_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). The highest digit in each cage is inverted (i.e. 9 counts as -9, 8 as -8, etc).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: invertedKillerCageElement
};

function sumCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'sum_cage_p');
	return result[0];
}

export const sumCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.SUM_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'The numbers in the cage must sum to the given total in the top left (if one exists). Numbers can repeat in a sum cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: sumCageElement
};

function sumCageLookAndSayElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCageElement(model, element, 'sum_cage_look_and_say_p');
	return out_str;
}

export const sumCageLookAndSayInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_UNVALUED_CAGE_OPTIONS,

	toolId: TOOLS.SUM_CAGE_LOOK_AND_SAY,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits MAY repeat in cages if allowed by other rules. The sum of digits in each cage must be a two-digit number that acts as a valid “look-and-say clue” for that cage. Eg if the sum is 21, there must be exactly two 1s in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 21). Eg2 if the sum is 17, there must be exactly one 7 in the cage along with any combination of other digits (such that, overall, the digits in the cage sum to 17).',
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	},

	solver_func: sumCageLookAndSayElement
};

function parityBalanceCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleCageElement(model, element, 'parity_balance_cage_p');
	return out_str;
}

export const parityBalanceCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_UNVALUED_CAGE_OPTIONS,

	toolId: TOOLS.PARITY_BALANCE_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'The sum of the even digits equals the sum of the odd digits. Digits cannot repeat within a cage.',
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	},

	solver_func: parityBalanceCageElement
};

function divisibleKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'divisible_killer_cage_p');
	return result[0];
}

export const divisibleKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.DIVISIBLE_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits within a cage must sum to a number divisible by the clue given in the top left of the cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},
	
	solver_func: divisibleKillerCageElement
};

function spotlightCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const result = valuedCageElement(model, element, 'spotlight_cage_p');
	return result[0];
}

export const spotlightCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.SPOTLIGHT_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			"Digits may not repeat in 'spotlight' cages, and each spotlight cage must contain the number in the clue.",
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: spotlightCageElement
};

export const putteriaCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_UNVALUED_CAGE_OPTIONS,

	toolId: TOOLS.PUTTERIA_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			"Each 'putteria' cage of size N has to have the number N contained in it. Putteria numbers cannot repeat in a cage, and cannot orthogonally neighbour other putteria numbers. Other numbers may repeat in putteria cages.",
		usage: cageUsage(),
		tags: [],
		categories: nonTypableCageDefaultCategories
	}
};

export const killerCageLookAndSayInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.KILLER_CAGE_LOOK_AND_SAY,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			"On a cage, given clues should be read as a 'look-and-say' numbers. Each number says which digits are in the respective cage. Eg if a cage clue is 1221, this means there is one 2 and two 1s in the cage.",
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

function multisetCageElement(model: PuzzleModel, element: ConstraintsElement) {
	let out_str = '';
	const constraints = element.constraints as Record<string, CageToolI>;
	if (!constraints) return out_str;

	// group cells by value
	const groups = groupConstraintsByValue(Object.values(constraints));
	const grid = model.puzzle.grid;
	for (const group of groups.values()) {
		if (group.length <= 1) continue;
		// for each combination of 2
		for (const [e1, e2] of group.flatMap((v, i) => group.slice(i + 1).map((w) => [v, w]))) {
			const vars1 = getCageVars(grid, e1);
			const vars1_str = `[${vars1.join(',')}]`;
			const vars2 = getCageVars(grid, e2);
			const vars2_str = `[${vars2.join(',')}]`;
			out_str += `constraint multisets_equal_p(${vars1_str}, ${vars2_str});\n`;
		}
	}

	return out_str;
}

export const multisetCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.MULTISET_CAGE,

	shape: {
		type: SHAPE_TYPES.CAGE,
		strokeWidth: { editable: false, value: 0.02 },
		stroke: { editable: false, value: 'var(--constraint-color-light-blue)' },
		fill: { editable: false, value: 'rgba(46, 203, 255, 0.1)' },
		strokeDasharray: { editable: false, value: 0.08 },
		inset: { editable: false, value: 0.07 }
	},

	meta: {
		description: 'Light blue cages with the same label have the same group of digits.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: multisetCageElement
};

function vaultedCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	const result = valuedCageConstraint(model, c_id, constraint, 'sum_cage_p');
	let out_str = result[0];

	const cells_coords = constraint.cells;
	const cage_cells = cellsFromCoords(grid, cells_coords);

	const cage_neighbours: Cell[] = getCageNeighbours(cage_cells, grid);
	const cage_neighbour_vars = cellsToGridVarsStr(cage_neighbours, VAR_2D_NAMES.BOARD);
	out_str += `constraint vaulted_cage_p(${vars_str}, ${cage_neighbour_vars});\n`;

	return out_str;
}

function vaultedCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, vaultedCageConstraint);
	return out_str;
}

export const vaultedCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.VAULTED_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: vaultedCageElement
};

function vaultedKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const vars = getCageVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;

	let out_str = `constraint all_different(${vars_str});\n`
	out_str += vaultedCageConstraint(model, grid, c_id, constraint);

	return out_str;
}

function vaultedKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, vaultedKillerCageConstraint);
	return out_str;
}

export const vaultedKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.VAULTED_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Numbers must not repeat in a killer cage. The numbers in the cage must sum to the given total in the top left (if one exists). Digits in a cage may not appear in any cell orthogonally adjacent to that cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: vaultedKillerCageElement
};

export const aquariumCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.AQUARIUM_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits cannot repeat within a cage. Cells within aquariums are either air cells or water cells, with cells outside of cages not being air or water. Water cells fill the bottoms of cages and must have digits greater than all the air cells in their cage. Rows in cages must be either all air cells or all water cells. Cages must have at least one row of air cells and one row of water cells. Additionally, the cages are “pressurized”: The air cells within any cage must have a higher average value than the number of rows above that cage in the grid. (Eg If a cage occupied only rows 7, 8 and 9 then any air cells in that cage must have an average value greater than 6.).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	}
};

function yinYangValuedCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI,
	predicate: string
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

	const yin_yang_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.YIN_YANG);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint ${predicate}(${vars_str}, ${yin_yang_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function yinYangValuedCageElement(
	model: PuzzleModel,
	grid: Grid,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = yinYangValuedCageConstraint(
			model,
			grid,
			c_id,
			constraint as CageToolI,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}

function yinYangAntithesisKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const grid = model.puzzle.grid;
	const out_str = yinYangValuedCageElement(
		model,
		grid,
		element,
		'yin_yang_antithesis_killer_cage_p'
	);
	return out_str;
}

export const yinYangAntithesisKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: yinYangAntithesisKillerCageElement
};

function yinYangBreakevenKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	// Digits in cages cannot repeat and must sum to the small clue in the top left corner of the cage. However, shaded cells are treated as negative. In other words, the cage total is the sum of unshaded cells minus the sum of shaded cells.
	const grid = model.puzzle.grid;
	const out_str = yinYangValuedCageElement(
		model,
		grid,
		element,
		'yin_yang_breakeven_killer_cage_p'
	);
	return out_str;
}

export const yinYangBreakevenKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.YIN_YANG_BREAKEVEN_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'Digits in a cage cannot repeat and must sum to the small clue in the top left corner of the cage. In cages, all shaded cells must contain even digits, and all unshaded cells must contain odd digits.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: yinYangBreakevenKillerCageElement
};

function doublersKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint doublers_killer_cage_p(${vars_str}, ${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function doublersKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, doublersKillerCageConstraint);
	return out_str;
}

export const doublersKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.DOUBLERS_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'A digit in a doubler cell counts for twice its value for the purposes of all cage sums. Digits may not repeat in cages, though values might. (eg a cage may not contain a doubled 2 and a regular 2 but may contain a doubled 2 and a regular 4). The values in the cage must sum to the given total in the top left (if one exists).',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: doublersKillerCageElement
};

function negatorsKillerCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);
	const values_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.VALUES_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint negators_killer_cage_p(${vars_str}, ${values_vars_str}, ${val});\n`;
		return constraint_str;
	}
	return '';
}

function negatorsKillerCageElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, negatorsKillerCageConstraint);
	return out_str;
}

export const negatorsKillerCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.NEGATORS_KILLER_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description:
			'A digit in a negator cell counts for -1*value for the purposes of all cage sums. Digits may not repeat in cages, though values might. Digits in cages do not include repeat digits, and must sum to the given total in the top left (if one exists). A digit in a negator cell must be subtracted rather than added to achieve the given cage total.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: negatorsKillerCageElement
};

function shadedRowCollumnBoxCountersShadedDigitSumCageConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: CageToolI
) {
	const cells = cellsFromCoords(grid, constraint.cells);
	const vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.BOARD);

	const shaded_vars_str = cellsToGridVarsStr(cells, VAR_2D_NAMES.SHADED_ROW_COLUMN_BOX_COUNTERS_SHADED_GRID);

	const value = constraint.value;
	if (value) {
		const val = parseInt(value);
		const constraint_str = `constraint conditional_sum_f(${vars_str}, ${shaded_vars_str}, true) == ${val};\n`;
		return constraint_str;
	}
	return '';
}

function shadedRowCollumnBoxCountersShadedDigitSumCageElement(
	model: PuzzleModel,
	element: ConstraintsElement
) {
	const out_str = simpleElementFunction(
		model,
		element,
		shadedRowCollumnBoxCountersShadedDigitSumCageConstraint
	);
	return out_str;
}

export const shadedRowCollumnBoxCountersShadedDigitSumCageInfo: SquareCellElementInfo = {
	inputOptions: DEFAULT_CAGE_OPTIONS,

	toolId: TOOLS.SHADED_ROW_COLUMN_BOX_COUNTERS_SHADED_DIGIT_SUM_CAGE,

	shape: DEFAULT_CAGE_SHAPE,

	meta: {
		description: 'Shaded digits within a cage sum to the value given in the top left of the cage.',
		usage: typableCageUsage(),
		tags: [],
		categories: typableCageDefaultCategories
	},

	solver_func: shadedRowCollumnBoxCountersShadedDigitSumCageElement
};
