import { type Writable, writable } from 'svelte/store';

export function createPersistentStore<T>(
	key: string,
	initialValue: T,
	debounceMs: number = 500
): Writable<T> {
	// Check if running in browser environment
	const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

	// Try to get the stored value
	let storedValue: T;
	if (isBrowser) {
		const storedValueStr = localStorage.getItem(key);
		storedValue = storedValueStr ? JSON.parse(storedValueStr) : initialValue;
	} else {
		storedValue = initialValue;
	}

	// Create a writable store with the stored or initial value
	const store = writable<T>(storedValue);

	// Subscribe to changes and update localStorage when the store changes
	if (!isBrowser) return store;

	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	store.subscribe((value) => {
		// Clear any pending timeout
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}

		// Set a new timeout to save after the debounce period
		timeoutId = setTimeout(() => {
			localStorage.setItem(key, JSON.stringify(value));
			timeoutId = null;
		}, debounceMs);
	});

	return store;
}
