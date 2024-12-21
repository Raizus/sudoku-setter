<script>
	import EntryPanel from '$lib/EntryPanel/EntryPanel.svelte';
	import BoardContainer from '$lib/Board/BoardContainer.svelte';
	import SettingPanel from '$lib/SettingPanel/SettingPanel.svelte';
	import { gameModeStore } from '$stores/BoardStore';
	import { GAME_MODE } from '$src/lib/Types/types';

	$: game_mode = $gameModeStore;
</script>

<div class="game-wrapper">
	<div class="game">
		{#if game_mode === GAME_MODE.SETTING}
			<SettingPanel />
		{/if}
		<BoardContainer />
		<EntryPanel />
	</div>
</div>

<style>
	.game-wrapper {
		flex-grow: 1;
		position: relative;
	}

	.game {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* align-items: center; */
		/* position: relative;
		max-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center; */
	}
</style>
