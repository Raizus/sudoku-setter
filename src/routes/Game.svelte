<script lang="ts">
	import '../global.scss';
	import { GAME_MODE } from '$src/lib/Types/types';
	import SettingPanel from '$src/lib/SettingPanel/SettingPanel.svelte';
	import BoardContainer from '$src/lib/Board/BoardContainer.svelte';
	import EntryPanel from '$src/lib/EntryPanel/EntryPanel.svelte';
	import { onMount } from 'svelte';
	import { isPortraitStore } from '$stores/OrientationStore';
	import { stateStore } from '$stores/StateStore';
	import { initMiniZinc } from '$src/lib/Solver/minizinc_init';

	const gameModeStore = stateStore.gameModeStore;
	$: game_mode = $gameModeStore;

	onMount(async () => {
		initMiniZinc();
	});

	$: isPortrait = $isPortraitStore;
</script>

<div class="game" class:desktop-layout={!isPortrait} class:mobile-layout={isPortrait}>
	{#if game_mode === GAME_MODE.SETTING && !isPortrait}
		<div class="left-panel">
			<SettingPanel />
		</div>
	{/if}
	<div class="center-panel">
		<BoardContainer />
	</div>
	<div class="right-panel">
		<EntryPanel />
	</div>
</div>

<style lang="scss">
	@use '$src/vars' as vars;

	.desktop-layout {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: 100%;
	}

	.center-panel {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.desktop-layout .center-panel {
		flex-basis: 25rem;
	}

	.desktop-layout .left-panel,
	.desktop-layout .right-panel {
		position: relative;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 15rem;
		max-width: 30rem;
	}

	@media (orientation: portrait) {
		.mobile-layout {
			display: flex;
			flex-direction: column;
		}
		.center-panel {
			width: 100%;
			flex-basis: 30rem;
		}
	}

	// @include vars.breakpoint-mobile {
	// 	.game {
	// 		flex-direction: column;

	// 		& .center-panel {
	// 			align-self: center;

	// 			width: vars.$board-size-small;
	// 			height: vars.$board-size-small;
	// 		}

	// 		& .right-panel {
	// 			max-width: 100%;
	// 		}
	// 	}
	// }
</style>
