<script lang="ts">
	import { darkModeStore } from '$stores/SettingsStore';
	import { onMount } from 'svelte';
	import * as MiniZinc from 'minizinc';
	import '../global.scss';
	import { GAME_MODE } from '$src/lib/Types/types';
	import SettingPanel from '$src/lib/SettingPanel/SettingPanel.svelte';
	import BoardContainer from '$src/lib/Board/BoardContainer.svelte';
	import EntryPanel from '$src/lib/EntryPanel/EntryPanel.svelte';
	import { gameModeStore } from '$stores/BoardStore';

	$: theme = $darkModeStore ? 'dark' : 'light';
	$: game_mode = $gameModeStore;

	onMount(async () => {
		const baseUrl = window.location.href;
		// If we're on the dev server, use origin, otherwise use origin + pathname
		// const base = import.meta.env.BASE_URL;
		// const baseUrl = base === '/' ? window.location.origin + '/' : `${window.location.origin}${base}`;

		try {
			await MiniZinc.init({
				workerURL: `${baseUrl}minizinc-worker.js`,
				wasmURL: `${baseUrl}minizinc.wasm`,
				dataURL: `${baseUrl}minizinc.data`
			});
		} catch (e) {
			const error = 'Failed to initialize MiniZinc: ' + e.message;
			console.log(error);
		}
	});
</script>

<div class="App" data-theme={theme}>
	<header></header>
	<main>
		<div class="game-wrapper">
			<div class="game">
				{#if game_mode === GAME_MODE.SETTING}
					<SettingPanel />
				{/if}
				<BoardContainer />
				<EntryPanel />
			</div>
		</div>
	</main>
	<footer>
		<div class="footer-text"></div>
	</footer>
</div>

<style lang="scss">
	.App {
		display: contents;
	}

	main {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		// width: 100%;
		// height: 100%;

		background-color: var(--background-color);
		color: var(--text-primary-color);
	}

	.game-wrapper {
		flex-grow: 1;
		// position: relative;
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
	}

	footer {
		flex: 0 0 auto;
		text-align: center;

		.footer-text {
			margin: 0 auto;
			width: 100%;

			display: flex;
			justify-content: space-evenly;
		}
	}
</style>
