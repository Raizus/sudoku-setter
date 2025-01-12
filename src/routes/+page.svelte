<script lang="ts">
	import { darkModeStore } from '$stores/SettingsStore';
	import { onMount } from 'svelte';
	import Game from './Game.svelte';
	import * as MiniZinc from 'minizinc';
	import '../global.scss';
	// import { base } from '$app/paths';

	$: theme = $darkModeStore ? 'dark' : 'light';

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
</style>
