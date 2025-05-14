<script lang="ts">
	import { settingsStore, updateSettingsValue } from '$stores/SettingsStore';
	import SettingsToggle from './SettingsToggle.svelte';

	$: settings = $settingsStore;
</script>

<div class="settings-tab-layout">
	<SettingsToggle
		name="Check Conflicts"
		value={settings.checkConflicts}
		updateCb={(value) => updateSettingsValue('checkConflicts', value)}
	/>
	<SettingsToggle
		name="Highlight Pencilmark Conflicts"
		value={settings.highlightPencilmarkConflicts}
		updateCb={(value) => updateSettingsValue('highlightPencilmarkConflicts', value)}
	/>
	<SettingsToggle
		name="Highlight Cells Seen By Selection"
		value={settings.highlightCellsSeenBySelection}
		updateCb={(value) => updateSettingsValue('highlightCellsSeenBySelection', value)}
	/>
</div>
