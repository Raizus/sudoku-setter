import { defaultValidateValueOnInput, type ValueValidatorOptions } from "$input/InputHandler";
import { HANDLER_TOOL_TYPE, type ValueToolInputOptions } from "$input/ToolInputHandlers/types";
import type { SquareCellElementInfo } from "../ElementInfo";
import { TOOL_CATEGORIES, TOOLS } from "../Tools";

function valueUpdater(value: string | undefined, key: string): string | undefined {
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

export const variableConstraintInfo: SquareCellElementInfo = {
    inputOptions: DEFAULT_OPTIONS,

    toolId: TOOLS.VARIABLE_CONSTRAINT,

    meta: {
        description: 'Create global variables with given values.',
        tags: [],
        categories: [TOOL_CATEGORIES.LOCAL_ELEMENT, TOOL_CATEGORIES.OTHER_CONSTRAINTS]
    }
};