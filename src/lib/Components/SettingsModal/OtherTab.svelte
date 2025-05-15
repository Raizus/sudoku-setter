<script lang="ts">
	import { restoreSettings, settingsStore, updateSettingsValue } from '$stores/SettingsStore';
	import SettingsToggle from './SettingsToggle.svelte';

	$: settings = $settingsStore;
</script>

<div class="settings-tab-layout">
	<SettingsToggle
		value={settings.darkMode}
		name="Darkmode (Alt+Shift+D)"
		updateCb={(value) => updateSettingsValue('darkMode', value)}
	/>
	<SettingsToggle
		value={settings.penToolActive}
		name="Pen Tool"
		updateCb={(value) => updateSettingsValue('penToolActive', value)}
	/>
	<SettingsToggle
		disabled={true}
		value={settings.letterToolActive}
		name="Letter Tool"
		updateCb={(value) => updateSettingsValue('letterToolActive', value)}
	/>
	<SettingsToggle
		name="Show Solution"
		value={settings.showSolution}
		updateCb={(value) => updateSettingsValue('showSolution', value)}
	/>
	<button class="form-button" on:click={restoreSettings}> Restore default settings </button>
</div>

<style lang="scss">
	button {
		background-color: var(--button-background-color);
		border-radius: 0.3rem;
		border: 0.125rem solid black;
		min-height: 2em;
		min-width: 2em;

		&:hover {
			background: var(--button-hover-background-color);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}
</style>
