import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
// import { copyFileSync } from 'fs';
// import { resolve } from 'path';

// function copyMiniZincFiles() {
// 	return {
// 		name: 'copy-minizinc-files',
// 		buildStart() {
// 			const files = ['minizinc-worker.js', 'minizinc.wasm', 'minizinc.data'];
// 			files.forEach((file) => {
// 				copyFileSync(resolve(`node_modules/minizinc/dist/${file}`), resolve(`public/${file}`));
// 			});
// 		}
// 	};
// }


export default defineConfig({
	plugins: [
		sveltekit(),
		// copyMiniZincFiles()
	],
	ssr: {
		optimizeDeps: {
			include: ['lodash']
		},
		noExternal: ['lodash']
	},
	css: {
		preprocessorOptions: {
			sass: {
				api: 'modern'
			},
			scss: {
				api: 'modern'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
