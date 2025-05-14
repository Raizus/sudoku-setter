<script lang="ts">
	import { settingsStore, updateSettingsValue } from '$stores/SettingsStore';
	import SettingsColorSelector from './SettingsColorSelector.svelte';

	$: settings = $settingsStore;
</script>

<div class="settings-tab-layout">
	<div class="grid">
		<SettingsColorSelector
			name="Non-given value color"
			value={settings.non_given_color}
			onChangeCb={(value) => {
				updateSettingsValue('non_given_color', value);
			}}
		/>
		<SettingsColorSelector
			name="Seen cells color"
			value={settings.seen_cells_color}
			onChangeCb={(value) => {
				updateSettingsValue('seen_cells_color', value);
			}}
		/>
		<SettingsColorSelector
			name="Selection color"
			value={settings.selection_color}
			onChangeCb={(value) => {
				updateSettingsValue('selection_color', value);
			}}
		/>
	</div>
</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 12rem auto;
        row-gap: 0.2rem;
    }
</style>