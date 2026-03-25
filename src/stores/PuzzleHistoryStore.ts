import type { PuzzleHistoryItem } from '$src/lib/SettingPanel/PuzzleHistoryModal/PuzzleHistory';
import { derived, get } from 'svelte/store';
import { createPersistentStore } from './store_utils';
import { puzzleToCompressedStr } from '$src/lib/SettingPanel/SavePuzzleModal/io_utils';
import { blankPuzzle} from '$src/lib/Puzzle/Puzzle';
import { stateStore } from './StateStore';
import { debounce } from 'lodash';

export const MAX_HISTORY_SIZE = 100;
const DEFAULT_COMPRESSED_STR = puzzleToCompressedStr(blankPuzzle());

export function createHistoryItem(creationTimestamp: number, url: string): PuzzleHistoryItem {
	const item: PuzzleHistoryItem = {
		creationTimestamp,
		encodedStr: url,
		lastUpdateTimestamp: Date.now()
	};

	return item;
}

/**
 * Updates or adds a puzzle history item based on its creation timestamp.
 * 
 * If an item with a matching creation timestamp exists in the history, it is removed from its current position
 * and moved to the start of the list. If no match is found, the new item is added to the start of the list.
 * If the history exceeds the maximum size after insertion, the oldest item is removed.
 * 
 * @param item - The puzzle history item to update or add
 * @param history - The array of puzzle history items to modify
 * @returns The updated history array
 */
export function updateHistory(item: PuzzleHistoryItem, history: PuzzleHistoryItem[]) {
	// find item with the same creation time stamp

	// if creation time stamp matches, create update that item, otherwise
	// add it to the history
	const ts = item.creationTimestamp;
	for (let i = 0; i < history.length; i++) {
		const item2 = history[i];
		if (item2.creationTimestamp !== ts) continue;

		// item i is now the puzzle updated most recently, insert it at the start of the list
		history.splice(i, 1);
		history.unshift(item);

		return history;
	}

	// match not found, insert at start of the list
	history.unshift(item);
	if (history.length > MAX_HISTORY_SIZE) {
		history.pop();
	}
	return history;
}

class PuzzleHistoryStore {
	private _history_store = createPersistentStore<PuzzleHistoryItem[]>('puzzle-history', []);
	public history_store = { subscribe: this._history_store.subscribe };

	clear() {
		this._history_store.set([]);
	}

	/**
	 * Updates the puzzle history store with a new or modified puzzle history item.
	 * @param item - The puzzle history item to add or update in the store. If Item with the same creation timestamp exists, it will be updated; otherwise, it will be added.
	 **/
	addOrUpdateItem(item: PuzzleHistoryItem) {
		this._history_store.update((history) => {
			return updateHistory(item, history);
		});
	}

	removeItem(item_idx: number) {
		this._history_store.update((history) => {
			history.splice(item_idx, 1);
			return history;
		});
	}

	set(history: PuzzleHistoryItem[]) {
		this._history_store.set(history);
	}
}

export const puzzleHistoryStore = new PuzzleHistoryStore();

function updateUrlParams(compressedStr: string) {
	if (typeof window === 'undefined') return;

	const url = new URL(window.location.href);
	url.searchParams.set('puzzle', compressedStr);

	// We use replaceState instead of pushState to avoid adding a new entry to the browser history every time the puzzle changes
	const newUrl = url.toString();
	// window.history.replaceState({}, '', newUrl);
}

export const puzzleUrlStore = derived(
	stateStore.puzzleStore,
	debounce(($puzzleStore) => {
		const compressedStr = puzzleToCompressedStr($puzzleStore);
		updateUrlParams(compressedStr);
		return compressedStr;
	}, 1000)
);


puzzleUrlStore.subscribe((value) => {
	const creation_ts = get(stateStore.puzzleCreationTimestamp);
	if (!value) return;
	if (value === DEFAULT_COMPRESSED_STR) return;

	const item = createHistoryItem(creation_ts, value);
	puzzleHistoryStore.addOrUpdateItem(item);
});
