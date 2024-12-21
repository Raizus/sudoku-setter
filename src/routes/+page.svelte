<script lang="ts">
	import { darkModeStore } from '$stores/SettingsStore';
	import { onMount } from 'svelte';
	import Game from './Game.svelte';
	import * as MiniZinc from 'minizinc';

	$: theme = $darkModeStore ? 'dark' : 'light';

	onMount(async () => {
		const baseUrl = window.location.origin;
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

<main class="App" data-theme={theme}>
	<Game />
</main>

<style lang="scss">
	.App {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		width: 100vw;
		height: 100vh;

		background-color: var(--background-color);
		color: var(--text-primary-color);
	}

	:global(.App) {
		--entry-panel-button-size: 2.5rem;
		--entry-panel-button-gap: 8px;

		--constraint-color-light-gray: lightgray;
		--constraint-color-gray: gray;
		--constraint-color-dark-gray: rgb(100, 100, 100);
		--constraint-color-purple: rgb(100, 0, 128);
		--constraint-color-green: green;
		--constraint-color-orange: orange;
		--constraint-color-light-blue: #2ecbff;
		--constraint-color-blue: rgb(105, 105, 255);
		--constraint-color-dark-blue: rgb(50, 50, 255);
		--constraint-color-yellow: yellow;
		--constraint-color-red: red;
		--constraint-color-gold: gold;
		--constraint-color-pink: pink;

		--cell-digit-outline: white;
		--cell-digit-color: rgb(29, 106, 229);
		--cell-region-value-color: rgb(142, 142, 142);
		--cell-given-color: black;
	}
</style>
