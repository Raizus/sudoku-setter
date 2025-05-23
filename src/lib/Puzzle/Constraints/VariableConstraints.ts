import { TOOLS } from '../Tools';
import { parseStringParameter, parseValue } from '../utils';
import type { VariableConstraintI } from "../puzzle_schema";

export function variableConstraint(name: string = '', value: string = ''): VariableConstraintI {
	return {
		toolId: TOOLS.VARIABLE_CONSTRAINT,
		name,
		value
	};
}

export function variableConstraintFromJson(
	data: Record<string, unknown>
): VariableConstraintI {
	const name = parseStringParameter(data, 'name');
	const value = parseValue(data);
	const constraint = variableConstraint(name, value);
	return constraint;
}
