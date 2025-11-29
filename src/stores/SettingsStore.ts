import { getDefaultSettings, type Settings } from '$lib/Types/Settings';
import { createPersistentStore } from './store_utils';

// Create a persistent settings store
export const settingsStore = createPersistentStore<Settings>('app-settings', getDefaultSettings());

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
	console.log("restore")
	const default_settings = getDefaultSettings();
	settingsStore.set(default_settings);
	// When restoring settings, also update localStorage
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('app-settings', JSON.stringify(default_settings));
	}
}
 