import { getDefaultsSettings, type Settings } from '$lib/Types/Settings';
import { derived, writable } from 'svelte/store';

export const settingsStore = writable<Settings>(getDefaultsSettings());

export const darkModeStore = derived<typeof settingsStore, boolean>(
	settingsStore,
	($settingsStore) => {
		return $settingsStore.darkMode;
	}
);

export function updateDarkmode(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			darkMode: value
		};
	});
}

export function toggleDarkmode() {
	settingsStore.update((settings) => {
		return {
			...settings,
			darkMode: !settings.darkMode
		};
	});
}

export function updatePenToolActive(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			penToolActive: value
		};
	});
}

export function updateLetterToolActive(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			letterToolActive: value
		};
	});
}

export function updateHighlightCellsSeen(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			highlightCellsSeenBySelection: value
		};
	});
}

export function updateCheckConflicts(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			checkConflicts: value
		};
	});
}

export function updatePencilmarkConflicts(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			highlightPencilmarkConflicts: value
		};
	});
}

export function updateHideFog(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			hideFog: value
		};
	});
}

export function updateShowSolution(value: boolean) {
	settingsStore.update((settings) => {
		return {
			...settings,
			showSolution: value
		};
	});
}
