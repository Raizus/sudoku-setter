import { matchShortcut, redoSc, toggleDarkmodeSc, undoSc } from '$components/SettingsModal/shortcuts';
import { redo, undo } from '$stores/HistoryStore';
import { toggleDarkmode } from '$stores/SettingsStore';

function onDarkmodeShortcut(event: KeyboardEvent): boolean {
	console.log(event);
	if (!matchShortcut(event, toggleDarkmodeSc)) return false;
	toggleDarkmode();
	return true;
}

function onUndo(event: KeyboardEvent): boolean {
	if (!matchShortcut(event, undoSc)) return false;
	undo();
	return true;
}

function onRedo(event: KeyboardEvent): boolean {
	if (!matchShortcut(event, redoSc)) return false;
	redo();
	return true;
}

export function onExtraInput(event: KeyboardEvent) {
	if (onDarkmodeShortcut(event) || onUndo(event) || onRedo(event)) {
		event.stopImmediatePropagation();
		event.preventDefault();
	}
}
