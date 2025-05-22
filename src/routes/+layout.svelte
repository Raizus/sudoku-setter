<script lang="ts">
	import { settingsStore } from '$stores/SettingsStore';
	import '../global.scss';
	import { derived } from 'svelte/store';
	import Header from './Header.svelte';

	let { children } = $props();

	let theme = derived(settingsStore, ($settingsStore) => ($settingsStore.darkMode ? 'dark' : 'light'));
</script>

<div class="App" id="App" data-theme={$theme}>
	<Header></Header>
	<main>
		{@render children()}
	</main>
	<footer>
		<div class="footer-text"></div>
	</footer>
</div>

<style lang="scss">
	@use '$src/vars' as vars;

	.App {
		display: flex;
		flex-direction: column;
		background-color: var(--background-color);
		width: 100%;
		height: 100%;
		color: var(--text-primary-color);
		// overflow: hidden;
	}

	main {
		position: relative;
		width: 100%;
		height: 100%;

		color: var(--text-primary-color);
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
