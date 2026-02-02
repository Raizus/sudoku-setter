<script lang="ts">
	import { settingsStore } from '$stores/SettingsStore';
	import SettingsToggle from './SettingsToggle.svelte';

	$: settings = $settingsStore;
</script>

<div class="settings-tab-layout">
	<SettingsToggle
		value={settings.darkMode}
		name="Darkmode (Alt+Shift+D)"
		updateCb={(value) => settingsStore.updateSettingsValue('darkMode', value)}
	/>
	<SettingsToggle
		value={settings.penToolActive}
		name="Pen Tool"
		updateCb={(value) => settingsStore.updateSettingsValue('penToolActive', value)}
	/>
	<SettingsToggle
		disabled={true}
		value={settings.letterToolActive}
		name="Letter Tool"
		updateCb={(value) => settingsStore.updateSettingsValue('letterToolActive', value)}
	/>
	<SettingsToggle
		name="Show Solution"
		value={settings.showSolution}
		updateCb={(value) => settingsStore.updateSettingsValue('showSolution', value)}
	/>
	<button class="form-button form-modal-button" on:click={settingsStore.restoreSettings}> Restore default settings </button>
</div>

<style lang="scss">
</style>
