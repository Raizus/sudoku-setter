import { TOOLS, type TOOLID, CELL_INPUT_TOOLS } from '$lib/Puzzle/Tools';

// darkmode toggle shortcut
export function eventIsAltShiftD(event: KeyboardEvent): boolean {
	return (
		event.altKey &&
		event.shiftKey &&
		!(event.ctrlKey || event.metaKey) &&
		event.type === 'keydown' &&
		!event.repeat &&
		event.code === 'KeyD'
	);
}

// undo shortcut
export function eventIsCtrlZ(event: KeyboardEvent): boolean {
	return (
		!event.altKey &&
		!event.shiftKey &&
		(event.ctrlKey || event.metaKey) &&
		event.type === 'keydown' &&
		!event.repeat &&
		event.code === 'KeyZ'
	);
}

// redo shortcut
export function eventIsCtrlY(event: KeyboardEvent): boolean {
	return (
		!event.altKey &&
		!event.shiftKey &&
		(event.ctrlKey || event.metaKey) &&
		event.type === 'keydown' &&
		!event.repeat &&
		event.code === 'KeyY'
	);
}

export function eventIsCtrlA(event: KeyboardEvent): boolean {
	return (
		(event.ctrlKey || event.metaKey) &&
		event.type === 'keydown' &&
		!event.repeat &&
		event.code === 'KeyA' &&
		!event.shiftKey
	);
}

export function eventIsCtrlR(event: KeyboardEvent): boolean {
	return (
		(event.ctrlKey || event.metaKey) &&
		event.type === 'keydown' &&
		event.code === 'KeyR' &&
		!event.shiftKey
	);
}

export function eventIsAltR(event: KeyboardEvent): boolean {
	return event.altKey && event.type === 'keydown' && event.code === 'KeyR';
}

// const DIGIT_REGEX = /^(?:Digit|Numpad)?(\d)$/;
const NULL_KEYCODES = {
	Delete: null,
	Backspace: null
} as const;

export function parseDigit(key: string, base = 10): undefined | null | number {
	if (key in NULL_KEYCODES) return null;

	const parsedDigit = parseInt(key, base);
	if (!isNaN(parsedDigit)) return parsedDigit;

	return undefined;
}

export function isEnterModeKey(event: KeyboardEvent): boolean {
	const codes = ['KeyZ', 'KeyX', 'KeyC', 'KeyV'];
	if (codes.includes(event.code) && !event.repeat) return true;
	if (event.code === 'Space') return true;
	return false;
}

export function isQuickShiftKey(event: KeyboardEvent): boolean {
	if (event.repeat) return false;
	if (['Control', 'Shift', 'Alt'].includes(event.key)) return true;
	return false;
}

export function letterKey2EnterMode(code: string): CELL_INPUT_TOOLS {
	const ENTER_MODE_KEYS = {
		KeyZ: TOOLS.DIGIT,
		KeyX: TOOLS.CORNER_PM,
		KeyC: TOOLS.CENTER_PM,
		KeyV: TOOLS.HIGHLIGHTS
	} as const;

	if (code in ENTER_MODE_KEYS) {
		return ENTER_MODE_KEYS[code as keyof typeof ENTER_MODE_KEYS];
	}
	return TOOLS.DIGIT;
}

export function quickShift2EnterMode(event: KeyboardEvent): TOOLID {
	let newEnterMode: TOOLID;

	if (event.altKey) newEnterMode = TOOLS.HIGHLIGHTS;
	else if (event.shiftKey && !event.ctrlKey) newEnterMode = TOOLS.CORNER_PM;
	else if (!event.shiftKey && event.ctrlKey) newEnterMode = TOOLS.CENTER_PM;
	// (event.shiftKey && event.ctrlKey)
	else newEnterMode = TOOLS.HIGHLIGHTS;

	return newEnterMode;
}

export function isLetter(key: string): boolean {
	return /^[a-zA-Z]+$/.test(key);
}

export function isDigit(key: string): boolean {
	return /^[0-9]+$/.test(key);
}

export function isAlphaNumeric(key: string): boolean {
	return /^[0-9a-zA-Z]+$/.test(key);
}

export function isBackspace(key: string): boolean {
	return key === 'Backspace';
}

export function keyboardInputDefaultValidator(key: string): boolean {
	// valid characters: 0-9,a-z,A-Z,<,>,-

	if (/^[0-9a-zA-Z<>\-,=]$/.test(key)) return true;
	if (isBackspace(key)) return true;

	return false;
}

export function eventIsArrow(event: KeyboardEvent): boolean {
	return ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.code);
}

export function eventIsDirectionalKey(event: KeyboardEvent): boolean {
	return eventIsArrow(event) || ['KeyA', 'KeyW', 'KeyS', 'KeyD'].includes(event.code);
}

export function getDirectionFromDirectionalKeys(event: KeyboardEvent): [x: number, y: number] {
	const DIRECTIONAL_KEYS = {
		ArrowLeft: [-1, 0],
		ArrowUp: [0, -1],
		ArrowRight: [1, 0],
		ArrowDown: [0, 1],
		KeyA: [-1, 0],
		KeyW: [0, -1],
		KeyD: [1, 0],
		KeyS: [0, 1]
	} as const;
	const [dx, dy] = DIRECTIONAL_KEYS[event.code as keyof typeof DIRECTIONAL_KEYS];
	return [dx, dy];
}
