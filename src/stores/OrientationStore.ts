// orientation.store.js
import { writable } from 'svelte/store';

export const isPortraitStore = writable(false);

if (typeof window !== 'undefined') {
	const update = () => isPortraitStore.set(window.matchMedia('(orientation: portrait)').matches);
	update();
	window.addEventListener('resize', update);
}
