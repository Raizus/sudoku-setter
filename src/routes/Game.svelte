<script lang="ts">
	import '../global.scss';
	import { GAME_MODE } from '$src/lib/Types/types';
	import SettingPanel from '$src/lib/SettingPanel/SettingPanel.svelte';
	import BoardContainer from '$src/lib/Board/BoardContainer.svelte';
	import EntryPanel from '$src/lib/EntryPanel/EntryPanel.svelte';
	import { gameModeStore } from '$stores/BoardStore';
	import { onMount } from 'svelte';
	import * as MiniZinc from 'minizinc';
	import { base } from '$app/paths';

	$: game_mode = $gameModeStore;

	onMount(async () => {
		const origin = window.location.origin;
		const baseUrl = base === '' ? origin : `${origin}/${base}`;

		try {
			await MiniZinc.init({
				workerURL: `${baseUrl}/minizinc-worker.js`,
				wasmURL: `${baseUrl}/minizinc.wasm`,
				dataURL: `${baseUrl}/minizinc.data`
			});
		} catch (e) {
			const error = 'Failed to initialize MiniZinc: ' + e.message;
			console.log(error);
		}
	});
</script>

<div class="game">
	{#if game_mode === GAME_MODE.SETTING}
		<SettingPanel />
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

	.game {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
	}

	.center-panel {
		display: flex;
		align-items: center;
		flex: 1;
		flex-basis: 25rem;
	}

	.left-panel,
	.right-panel {
		position: relative;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 15rem;
		max-width: 30rem;
	}

	// .game {
	// 	& .center-panel {
	// 		flex: 0 0 auto;

	// 		width: vars.$board-size-big;
	// 		height: vars.$board-size-big;

	// 		position: relative;
	// 	}

	// 	& .right-panel {
	// 		flex: 1 1 100%;
	// 		max-width: 30%;
	// 	}
	// }

	@include vars.breakpoint-mobile {
		.game {
			flex-direction: column;

			& .center-panel {
				align-self: center;

				width: vars.$board-size-small;
				height: vars.$board-size-small;
			}

			& .right-panel {
				max-width: 100%;
			}
		}
	}
</style>
