import type { TOOLID } from "../Tools";
import { parseValue } from "../utils";
import type { ValuedGlobalToolI } from "../puzzle_schema";

export function valuedGlobalConstraint(
	toolId: TOOLID,
	value = ''
): ValuedGlobalToolI {
	return {
		toolId,
		value
	};
}

export function valuedGlobalConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): ValuedGlobalToolI {
	const value = parseValue(data);

	const constraint = valuedGlobalConstraint(toolId, value);
	return constraint;
}