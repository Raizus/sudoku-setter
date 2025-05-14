import { getDefaultSettings, type Settings } from '$lib/Types/Settings';
import { writable, type Writable } from 'svelte/store';

function createPersistentStore<T>(key: string, initialValue: T): Writable<T> {
	// Check if running in browser environment
	const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

	// Try to get the stored value
	let storedValue: T;
	if (isBrowser) {
		const storedValueStr = localStorage.getItem(key);
		storedValue = storedValueStr ? JSON.parse(storedValueStr) : initialValue;
	} else {
		storedValue = initialValue;
	}

	// Create a writable store with the stored or initial value
	const store = writable<T>(storedValue);

	// Subscribe to changes and update localStorage when the store changes
	if (isBrowser) {
		store.subscribe((value) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	}

	return store;
}

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
