import type { PuzzleHistoryItem } from '$src/lib/SettingPanel/PuzzleHistoryModal/PuzzleHistory';
import { get } from 'svelte/store';
import { puzzleCreationTimestamp, puzzleUrlStore } from './BoardStore';
import { createPersistentStore } from './store_utils';
import { puzzleToCompressedStr } from '$src/lib/SettingPanel/SavePuzzleModal/io_utils';
import { blankPuzzle} from '$src/lib/Puzzle/Puzzle';

export const MAX_HISTORY_SIZE = 100;
const DEFAULT_COMPRESSED_STR = puzzleToCompressedStr(blankPuzzle());

export const puzzleHistoryStore = createPersistentStore<PuzzleHistoryItem[]>('puzzle-history', []);

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

/**
 * Updates the puzzle history store with a new or modified puzzle history item.
 * @param item - The puzzle history item to add or update in the store. If Item with the same creation timestamp exists, it will be updated; otherwise, it will be added.
**/
export function updateHistoryStore(item: PuzzleHistoryItem) {
	puzzleHistoryStore.update((history) => {
		return updateHistory(item, history);
	});
}

export function removePuzzleFromHistory(item_idx: number) {
	puzzleHistoryStore.update((history) => {
		history.splice(item_idx, 1);
		return history;
	});
}

export function clearPuzzleHistory() {
	puzzleHistoryStore.set([]);
}

puzzleUrlStore.subscribe((value) => {
	const creation_ts = get(puzzleCreationTimestamp);
	if (!value) return;
	if (value === DEFAULT_COMPRESSED_STR) return;

	const item = createHistoryItem(creation_ts, value);
	updateHistoryStore(item);
});
