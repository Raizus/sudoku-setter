import {
	matchShortcut,
	shortcutRegistry,
	toolShortcutRegistry,
	type Shortcut
} from '$input/shortcuts';

function onShortcut(shortcut: Shortcut, event: KeyboardEvent): boolean {
	if (!matchShortcut(event, shortcut)) return false;
	if (!shortcut.func) return false;

	shortcut.func();
	event.stopImmediatePropagation();
	event.preventDefault();
	return true;
}

export function onExtraInput(event: KeyboardEvent) {
	for (const shortcut of shortcutRegistry.values()) {
		if (onShortcut(shortcut, event)) return;
	}

	for (const shortcut of toolShortcutRegistry.values()) {
		if (onShortcut(shortcut, event)) return;
	}
}
