import { DEFAULT_SETTINGS, type Settings } from '$lib/Types/Settings';
import { writable } from 'svelte/store';

export const settingsStore = writable<Settings>(DEFAULT_SETTINGS);

export function updateSettingsValue<K extends keyof Settings>(key: K, value: Settings[K]) {
	settingsStore.update((settings) => {
		settings[key] = value;
		return settings;
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

export function restoreSettings() {
	settingsStore.set(DEFAULT_SETTINGS);
}
