import { defaultValidateValueOnInput, type ValueValidatorOptions } from "$input/InputHandler";
import { HANDLER_TOOL_TYPE, type ValueToolInputOptions } from "$input/ToolInputHandlers/types";
import { simpleElementFunction, type PuzzleModel } from "$src/lib/Solver/solver_utils";
import type { ParseOptions } from "$src/lib/Solver/value_parsing";
import type { SquareCellElementInfo } from "../ElementInfo";
import type { Grid } from "../Grid/Grid";
import type { ConstraintsElement, VariableConstraintI } from "../puzzle_schema";
import { TOOL_CATEGORIES, TOOLS } from "../Tools";

function valueUpdater(value: string | undefined): string | undefined {
    if (value === undefined) return value;
    const options: ValueValidatorOptions = {
        maxLength: 30,
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

export const variableConstraintInfo: SquareCellElementInfo = {
    inputOptions: DEFAULT_OPTIONS,

    toolId: TOOLS.VARIABLE_CONSTRAINT,

    meta: {
        description: 'Create global variables with given values.',
        tags: [],
        categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.OTHER_CONSTRAINTS]
    },

    solver_func: variableConstraintElement
};