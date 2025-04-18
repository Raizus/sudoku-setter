import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		appDir: 'app', // Required as the default is _app
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sudoku-setter' : '' // Replace with your repo name
		},
		alias: {
			$stores: 'src/stores',
			$icons: 'src/lib/Components/Icons',
			$components: 'src/lib/Components',
			$input: 'src/lib/InputHandlers',
			$src: 'src'
		}
	},

	extensions: ['.svelte', '.svx']
};

export default config;
