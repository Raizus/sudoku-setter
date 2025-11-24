export interface PuzzleHistoryItem {
	creationTimestamp: string;
	lastUpdateTimestamp: string;
	url: string;
}

export function getTimestamp() {
	return Date.now();
}
