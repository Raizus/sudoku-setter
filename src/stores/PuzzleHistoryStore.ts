import type { PuzzleHistoryItem } from '$src/lib/SettingPanel/PuzzleHistoryModal/PuzzleHistory';
import { get } from 'svelte/store';
import { puzzleCreationTimestamp, puzzleUrlStore } from './BoardStore';
import { createPersistentStore } from './store_utils';
import { puzzleToCompressedStr } from '$src/lib/SettingPanel/SavePuzzleModal/io_utils';
import type { PuzzleI } from '$src/lib/Puzzle/Puzzle';
import { Grid } from '$src/lib/Puzzle/Grid/Grid';
import { range } from 'lodash';
import { ElementsDict } from '$src/lib/Puzzle/Constraints/ElementsDict';

export const MAX_HISTORY_SIZE = 100;
const DEFAULT_PUZZLE: PuzzleI = {
	grid: new Grid(9, 9),
	valid_digits: range(1, 10),
	puzzleMeta: {},
	elementsDict: new ElementsDict()
};
const DEFAULT_COMPRESSED_STR = puzzleToCompressedStr(DEFAULT_PUZZLE);

export const puzzleHistoryStore = createPersistentStore<PuzzleHistoryItem[]>('puzzle-history', []);

export function createHistoryItem(creationTimestamp: number, url: string): PuzzleHistoryItem {
	const item: PuzzleHistoryItem = {
		creationTimestamp,
		encodedStr: url,
		lastUpdateTimestamp: Date.now()
	};

	return item;
}

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

export function updateHistoryStore(item: PuzzleHistoryItem) {
	puzzleHistoryStore.update((history) => {
		return updateHistory(item, history);
	});
}

export function removePuzzleFromHistory(item_id: number) {
	puzzleHistoryStore.update((history) => {
		history.splice(item_id, 1);
		return history;
	});
}

export function clearPuzzleHistory() {
	puzzleHistoryStore.set([]);
}

puzzleUrlStore.subscribe((value) => {
	const creation_ts = get(puzzleCreationTimestamp);
	if (value === DEFAULT_COMPRESSED_STR) return;

	const item = createHistoryItem(creation_ts, value);
	updateHistoryStore(item);
});
