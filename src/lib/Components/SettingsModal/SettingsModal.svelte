<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import SettingsGroup from './SettingsGroup.svelte';
	import {
		settingsStore,
		updateCheckConflicts,
		updateDarkmode,
		updateHideFog,
		updateHighlightCellsSeen,
		updateLetterToolActive,
		updatePencilmarkConflicts,
		updatePenToolActive,
		updateShowSolution
	} from '$stores/SettingsStore';
	import SettingsToggle from './SettingsToggle.svelte';
	import { gameModeStore } from '$stores/BoardStore';
	import { GAME_MODE } from '$src/lib/Types/types';

	export let showModal = false;

	$: settings = $settingsStore;
</script>

<Modal bind:showModal title="Settings">
	<div class="settings-content">
		<SettingsGroup title="General">
			<SettingsToggle
				value={settings.darkMode}
				name="Darkmode (Alt+Shift+D)"
				updateCb={updateDarkmode}
			/>
		</SettingsGroup>
		<SettingsGroup title="Tools">
			<SettingsToggle
				value={settings.penToolActive}
				name="Pen Tool"
				updateCb={updatePenToolActive}
			/>
			<SettingsToggle
				disabled={true}
				value={settings.letterToolActive}
				name="Letter Tool"
				updateCb={updateLetterToolActive}
			/>
		</SettingsGroup>
		<SettingsGroup title="Gameplay">
			<SettingsToggle
				name="Check Conflicts"
				value={settings.checkConflicts}
				updateCb={updateCheckConflicts}
			/>
			<SettingsToggle
				name="Highlight Pencilmark Conflicts"
				value={settings.highlightPencilmarkConflicts}
				updateCb={updatePencilmarkConflicts}
			/>
			<SettingsToggle
				name="Highlight Cells Seen By Selection"
				value={settings.highlightCellsSeenBySelection}
				updateCb={updateHighlightCellsSeen}
			/>
		</SettingsGroup>
		{#if $gameModeStore === GAME_MODE.SETTING}
			<SettingsGroup title="Setting Mode Display">
				<SettingsToggle
					name="Hide Fog"
					value={settings.hideFog}
					updateCb={updateHideFog}
				/>
				<SettingsToggle
					name="Show Solution"
					value={settings.showSolution}
					updateCb={updateShowSolution}
				/>
			</SettingsGroup>
		{/if}
	</div>
</Modal>

<style>
	.settings-content {
		position: relative;
		margin-top: 0.5em;
		padding: 0.4em;
		max-height: 100%;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		align-items: start;
		font-size: 1rem;
	}
</style>
