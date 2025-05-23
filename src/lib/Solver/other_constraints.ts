import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
import type { VariableConstraintI } from '../Puzzle/puzzle_schema';
import type { Grid } from '../Puzzle/Grid/Grid';
import { TOOLS } from '../Puzzle/Tools';
import {
	constraintsBuilder,
	simpleElementFunction,
	type ElementF,
	type PuzzleModel
} from './solver_utils';
import type { ParseOptions } from './value_parsing';

export function getParsingResult(model: PuzzleModel, value: string, default_name: string) {
	const parse_opts: ParseOptions = {
		allow_var: true,
		allow_interval: true,
		allow_int_list: true,
		allow_var_list: true
	};
	const result = model.getOrSetSharedVar(value, default_name, parse_opts);
	return result;
}

function variableConstraint(
	model: PuzzleModel,
	grid: Grid,
	c_id: string,
	constraint: VariableConstraintI
) {
	const value = constraint.value;
	const name = constraint.name;
	if (!value) return '';

	const default_name = name.length ? name : `var_${c_id}`;
	const result = getParsingResult(model, value, default_name);
	if (!result) return '';

	const out_str: string = result[0];
	return out_str;
}

function variableConstraintElement(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = simpleElementFunction(model, element, variableConstraint);
	return out_str;
}

const tool_map = new Map<string, ElementF>([
	[TOOLS.VARIABLE_CONSTRAINT, variableConstraintElement]
]);

export function otherElements(model: PuzzleModel, element: ConstraintsElement) {
	const out_str = constraintsBuilder(model, element, tool_map);
	return out_str;
}
