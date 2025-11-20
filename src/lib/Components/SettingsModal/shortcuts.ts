import { isAlphaNumeric } from '$input/KeyboardEventUtils';

interface EventKey {
	altKey?: boolean;
	shiftKey?: boolean;
	ctrlKey?: boolean;
	type: string;
	key: string;
}

export interface Shortcut {
	name: string;
	keys: EventKey[];
	unmodifiable?: boolean;
}

export const shortcutRegistry: Map<string, Shortcut> = new Map();
export const toolShortcutRegistry: Map<string, Shortcut> = new Map();

function addShortcut(shortcut: Shortcut) {
	shortcutRegistry.set(shortcut.name, shortcut);
}

function addShortcut2(shortcut: Shortcut) {
	toolShortcutRegistry.set(shortcut.name, shortcut);
}

export function matchKeyEvent(event: KeyboardEvent, key: EventKey): boolean {
	if (event.key.toLowerCase() !== key.key.toLowerCase()) return false;
	if (event.type !== key.type) return false;
	if (event.ctrlKey !== !!key.ctrlKey) return false;
	if (event.altKey !== !!key.altKey) return false;
	if (event.shiftKey !== !!key.shiftKey) return false;

	return true;
}

export function matchShortcut(event: KeyboardEvent, shortcut: Shortcut): boolean {
	for (const key of shortcut.keys) {
		if (matchKeyEvent(event, key)) return true;
	}

	return false;
}

export function shortcutKeyToString(key: EventKey): string {
	const keys: string[] = [];
	const multi_key = key.ctrlKey || key.altKey || key.shiftKey;

	if (key.ctrlKey) keys.push('Ctrl');
	if (key.altKey) keys.push('Alt');
	if (key.shiftKey) keys.push('Shift');

	if (multi_key && isAlphaNumeric(key.key) && key.key.length === 1) keys.push(`"${key.key}"`);
	else if (!['Ctrl', 'Shift', 'Alt'].includes(key.key)) keys.push(`${key.key}`);

	const out_str = keys.join(' + ');
	return out_str;
}

export const undoSc: Shortcut = {
	name: 'Undo',
	keys: [{ ctrlKey: true, key: 'Z', type: 'keydown' }]
};
addShortcut(undoSc);

export const redoSc: Shortcut = {
	name: 'Redo',
	keys: [{ ctrlKey: true, key: 'Y', type: 'keydown' }]
};
addShortcut(redoSc);

export const toggleDarkmodeSc: Shortcut = {
	name: 'Toggle Darkmode',
	keys: [{ ctrlKey: true, key: 'D', type: 'keydown' }]
};
addShortcut(toggleDarkmodeSc);

const cycleTool: Shortcut = {
	name: 'Cycle Tool',
	keys: [{ key: 'Space', type: 'keydown' }]
};
addShortcut2(cycleTool);

const setDigitTool: Shortcut = {
	name: 'Set Digit Tool',
	keys: [{ key: 'Z', type: 'keydown' }]
};
addShortcut2(setDigitTool);

const setCornerPencilmarkTool: Shortcut = {
	name: 'Set Corner Pencilmark Tool',
	keys: [{ key: 'X', type: 'keydown' }]
};
addShortcut2(setCornerPencilmarkTool);

const setCenterPencilmarkTool: Shortcut = {
	name: 'Set Center Pencilmark Tool',
	keys: [{ key: 'C', type: 'keydown' }]
};
addShortcut2(setCenterPencilmarkTool);

const setHighlightsTool: Shortcut = {
	name: 'Set Highlights Tool',
	keys: [{ key: 'V', type: 'keydown' }]
};
addShortcut2(setHighlightsTool);

const quickshiftToCornerPencilmarkTool: Shortcut = {
	name: 'Quickshift To Corner Pencilmark Tool',
	keys: [{ shiftKey: true, key: 'Shift', type: 'keydown' }]
};
addShortcut2(quickshiftToCornerPencilmarkTool);

const quickshiftToCenterPencilmarkTool: Shortcut = {
	name: 'Quickshift To Center Pencilmark Tool',
	keys: [{ ctrlKey: true, key: 'Ctrl', type: 'keydown' }]
};
addShortcut2(quickshiftToCenterPencilmarkTool);

const quickshiftToHighlightsTool: Shortcut = {
	name: 'Quickshift To Highlight Tool',
	keys: [
		{ shiftKey: true, ctrlKey: true, key: 'Shift', type: 'keydown' },
		{ shiftKey: true, ctrlKey: true, key: 'Ctrl', type: 'keydown' },
		{ altKey: true, key: 'Alt', type: 'keydown' }
	]
};
addShortcut2(quickshiftToHighlightsTool);

const selectAllCells: Shortcut = {
	name: 'Select All Cells',
	keys: [{ ctrlKey: true, key: 'A', type: 'keydown' }]
};
addShortcut2(selectAllCells);

const toggleFog: Shortcut = {
	name: 'Toggle Fog',
	keys: [{ ctrlKey: true, shiftKey: true, key: 'F', type: 'keydown' }]
};
