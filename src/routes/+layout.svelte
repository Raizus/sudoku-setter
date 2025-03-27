<script lang="ts">
	import { darkModeStore } from '$stores/SettingsStore';
	import '../global.scss';
	import { derived } from 'svelte/store';

    let { children } = $props();

    let theme = derived(darkModeStore, ($darkMode) => $darkMode ? 'dark' : 'light');

</script>

<div class="App" data-theme={$theme}>
	<header></header>
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
		display: contents;
	}

	main {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;

		background-color: var(--background-color);
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
