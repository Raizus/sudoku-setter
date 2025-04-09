import type { Grid } from "../Puzzle/Grid/Grid";
import type { TOOLID } from "../Puzzle/Tools";
import { isBackspace } from "./KeyboardEventUtils";

export interface InputHandler {
	blur?(event: FocusEvent): void;
	pointerDown(event: PointerEvent): void;
	pointerMove(event: PointerEvent): void;
	pointerUp(event: PointerEvent): void;
	keyDown(event: KeyboardEvent): void;
	keyUp(event: KeyboardEvent): void;
	padClick?(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }): void;
}

export type GetInputHandler = (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => InputHandler;

export interface ValueValidatorOptions {
	allowInequalities?: boolean;
	allowSymbolicVariables?: boolean;
	allowNegatives?: boolean;
	maxLength?: number;
}

export function defaultValidateValueOnInput(
	value: string,
	options?: ValueValidatorOptions
): boolean {
	const allowInequalities = options?.allowInequalities ?? true;
	const allowSymbolicVariables = options?.allowSymbolicVariables ?? true;
	const allowNegatives = options?.allowNegatives ?? true;
	const maxLength = options?.maxLength ?? 3;

	if (value.length > maxLength) return false;

	const ineqPattern = allowInequalities ? /(?:<|>|>=|<=)?/ : RegExp('');
	const negPattern = allowNegatives ? /-?/ : RegExp('');
	const varPattern = /[a-zA-Z][a-zA-Z0-9]*?/;
	const numberPattern = /[0-9]*/;

	if (allowSymbolicVariables) {
		const pattern = RegExp(`^${ineqPattern.source}${varPattern.source}$`, 'i');
		if (pattern.test(value)) return true;
	}

	const pattern = RegExp(`^${ineqPattern.source}${negPattern.source}${numberPattern.source}$`, 'i');
	if (pattern.test(value)) return true;

	return false;
}

export function defaultValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	if (oldValue === undefined) return oldValue;

	let newValue = oldValue;
	if (isBackspace(key)) {
		newValue = oldValue.slice(0, oldValue.length - 1);
	} else {
		newValue = oldValue + key;
	}

	if (!validatorFunc(newValue)) {
		return oldValue;
	}
	return newValue;
}