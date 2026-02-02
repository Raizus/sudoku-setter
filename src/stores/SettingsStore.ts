import { getDefaultSettings, type Settings } from '$lib/Types/Settings';
import { createPersistentStore } from './store_utils';

function createSettingsStore() {
	const { subscribe, set, update } = createPersistentStore<Settings>(
		'app-settings',
		getDefaultSettings()
	);

	function updateSettingsValue<K extends keyof Settings>(key: K, value: Settings[K]) {
		update((settings) => {
			settings[key] = value;
			return settings;
		});
	}

	function toggleDarkmode() {
		update((settings) => {
			return {
				...settings,
				darkMode: !settings.darkMode
			};
		});
	}

	function restoreSettings() {
		const default_settings = getDefaultSettings();
		update((settings) => {
			return {
				...settings,
				...default_settings
			};
		});
		// When restoring settings, also update localStorage
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('app-settings', JSON.stringify(default_settings));
		}
	}

	return {
		subscribe,
		set,
		update,
		updateSettingsValue,
		toggleDarkmode,
		restoreSettings
	};
}

export const settingsStore = createSettingsStore();

export function toggleDarkmode() {
	settingsStore.update((settings) => {
		return {
			...settings,
			darkMode: !settings.darkMode
		};
	});
}
