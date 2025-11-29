<script lang="ts">
	import EditPuzzleMetaIconButton from './EditPuzzleMetaIconButton.svelte';
	import HistoryButton from './HistoryButton.svelte';
	import LoadPuzzleIconButton from './LoadPuzzleIconButton.svelte';
	import NewPuzzleIconButton from './NewPuzzleIconButton.svelte';
	import SavePuzzleconButton from './SavePuzzleconButton.svelte';
	import SettingsIconButton from './SettingsIconButton.svelte';
</script>

<div class="panel-container">
	<NewPuzzleIconButton />
	<SavePuzzleconButton />
	<LoadPuzzleIconButton />
	<EditPuzzleMetaIconButton />
	<HistoryButton />
	<SettingsIconButton />
</div>

<style>
	.panel-container {
		/* border: 1px solid var(--button-hover-background-color); */
		box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 0px;
		border-radius: 0.25em;
		padding: 0.5em;
		background-color: var(--panel-background-color);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 5px;
	}
</style>
