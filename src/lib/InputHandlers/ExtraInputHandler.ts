import { matchShortcut, shortcutRegistry, type Shortcut } from '$input/shortcuts';

function onShortcut(event: KeyboardEvent, shortcut: Shortcut) {
	if (!matchShortcut(event, shortcut)) return false;
	if (shortcut.func) shortcut.func();
	return true;
}

export function onExtraInput(event: KeyboardEvent) {
	for (const shortcut of shortcutRegistry.values()) {
		if (onShortcut(event, shortcut)) {
			event.stopImmediatePropagation();
			event.preventDefault();
			return;
		}
	}
}
