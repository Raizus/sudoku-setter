import { redo, undo } from '$stores/HistoryStore';
import { toggleDarkmode } from '$stores/SettingsStore';
import { eventIsAltShiftD, eventIsCtrlY, eventIsCtrlZ } from './KeyboardEventUtils';

function onDarkmodeShortcut(event: KeyboardEvent): boolean {
	if (!eventIsAltShiftD(event)) return false;
	toggleDarkmode();
	return true;
}

function onCtrlZ(event: KeyboardEvent): boolean {
	if (!eventIsCtrlZ(event)) return false;
	undo();
	return true;
}

function onCtrlY(event: KeyboardEvent): boolean {
	if (!eventIsCtrlY(event)) return false;
	redo();
	return true;
}

export function onExtraInput(event: KeyboardEvent) {
	if (onDarkmodeShortcut(event) || onCtrlZ(event) || onCtrlY(event)) {
		event.stopImmediatePropagation();
		event.preventDefault();
	}
}
