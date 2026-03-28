import { base } from '$app/paths';
import * as MiniZinc from 'minizinc';

// const CDN = 'https://cdn.jsdelivr.net/npm/minizinc@4.3.5/dist';
const CDN = 'https://cdn.jsdelivr.net/npm/minizinc/dist';
let initialized = false;

export async function initMiniZinc() {
	if (initialized) return;

	const origin = window.location.origin;
	const baseUrl = base === '' ? origin : `${origin}/${base}`;
	// const baseUrl = CDN;

	try {
		await MiniZinc.init({
			workerURL: `${baseUrl}/minizinc-worker.js`,
			wasmURL: `${baseUrl}/minizinc.wasm`,
			dataURL: `${baseUrl}/minizinc.data`
		});
		initialized = true;
	} catch (e) {
		const error = 'Failed to initialize MiniZinc: ' + (e instanceof Error ? e.message : String(e));
		console.log(error);
	}
}
