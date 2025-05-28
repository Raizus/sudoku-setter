import { type ValueValidatorOptions, defaultValidateValueOnInput, defaultValueUpdater } from '$input/InputHandler';
import { cellsToVarsName, type PuzzleModel } from '$src/lib/Solver/solver_utils';
import type { ParseOptions } from '$src/lib/Solver/value_parsing';
import type { GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
import type { Cell } from '../../Grid/Cell';
import type { Grid } from '../../Grid/Grid';
import type { ConstraintsElement, OutsideDirectionToolI } from '../../puzzle_schema';
import type { EditableShapeI } from '../../Shape/Shape';

export function validateOutsideDirectionValue(value: string, maxLength = 5): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function defaultOutsideDirectionValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

export const OUTSIDE_DEFAULT_SHAPE: EditableShapeI = {
	fontColor: { editable: true, value: 'var(--text-primary-color)' },
	stroke: { editable: true, value: 'var(--text-primary-color)' }
};

export function getOutsideDirectionConstraintVars(grid: Grid, constraint: OutsideDirectionToolI) {
	const cell_coord = constraint.cell;
	const direction = constraint.direction;

	const cells = grid.getCellsInDirection(cell_coord.r, cell_coord.c, direction);
	const vars = cellsToVarsName(cells);
	return vars;
}

export function getParsingResult(
	model: PuzzleModel,
	value: string,
	cell_coord: GridCoordI,
	cell: Cell | undefined
) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: false
	};

	let default_name = '';
	if (!cell || cell.outside) {
		default_name = `R${cell_coord.r}C${cell_coord.c}`;
		default_name = default_name.replace('-', 'm');
	}
	if (!value) value = default_name;

	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function simpleOutsideDirectionPredicate(
	model: PuzzleModel,
	grid: Grid,
	constraint: OutsideDirectionToolI,
	predicate: string
) {
	const cell_coord = constraint.cell;
	const cell = grid.getCell(cell_coord.r, cell_coord.c);

	const vars = getOutsideDirectionConstraintVars(grid, constraint);
	const vars_str = `[${vars.join(',')}]`;
	const value = constraint.value;

	const result = getParsingResult(model, value, cell_coord, cell);
	if (!result) return '';

	const var_name = result[1];
	let out_str: string = result[0];
	out_str += `constraint ${predicate}(${vars_str}, ${var_name});\n`;
	return out_str;
}

export function simpleOutsideDirectionElement(
	model: PuzzleModel,
	element: ConstraintsElement,
	predicate: string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const constraint of Object.values(constraints)) {
		const constraint_str = simpleOutsideDirectionPredicate(
			model,
			grid,
			constraint as OutsideDirectionToolI,
			predicate
		);
		out_str += constraint_str;
	}
	return out_str;
}