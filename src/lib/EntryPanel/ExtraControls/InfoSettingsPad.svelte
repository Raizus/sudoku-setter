<script lang="ts">
	import RestartButton from './RestartButton.svelte';
	import FullscreenButton from './FullscreenButton.svelte';
	import RulesButton from './RulesButton.svelte';
	import SettingsButton from './SettingsButton.svelte';

</script>

<div class="info-settings-pad">
	<SettingsButton />
	<RulesButton />
	<FullscreenButton />
	<RestartButton />
</div>

<style lang="scss">
	$button-size: var(--entry-panel-button-size);
	$button-gap: var(--entry-panel-button-gap);

	.info-settings-pad {
		display: grid;
		grid-auto-rows: $button-size;
		grid-template-columns: repeat(5, $button-size);
		grid-auto-flow: row;
		gap: $button-gap;
	}
</style>
