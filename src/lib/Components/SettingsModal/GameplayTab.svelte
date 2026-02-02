<script lang="ts">
	import { settingsStore } from '$stores/SettingsStore';
	import SettingsToggle from './SettingsToggle.svelte';

	$: settings = $settingsStore;
</script>

<div class="settings-tab-layout">
	<SettingsToggle
		name="Check Conflicts"
		value={settings.checkConflicts}
		updateCb={(value) => settingsStore.updateSettingsValue('checkConflicts', value)}
	/>
	<SettingsToggle
		name="Highlight Pencilmark Conflicts"
		value={settings.highlightPencilmarkConflicts}
		updateCb={(value) => settingsStore.updateSettingsValue('highlightPencilmarkConflicts', value)}
	/>
	<SettingsToggle
		name="Highlight Cells Seen By Selection"
		value={settings.highlightCellsSeenBySelection}
		updateCb={(value) => settingsStore.updateSettingsValue('highlightCellsSeenBySelection', value)}
	/>
</div>
