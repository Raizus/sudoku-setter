import type { PuzzleMetaI } from "../Puzzle/PuzzleMeta";

export function threshold(val: number, min?: number, max?: number): number {
	if (min !== undefined) val = Math.max(val, min);
	if (max !== undefined) val = Math.min(val, max);
	return val;
}

export function isTransparent(color: string): boolean {
	const isRGBTransparent = /^#?[0-9a-fA-f]{3}0$/.test(color);
	const isRRGGBBTransparent = /^#?[0-9a-fA-f]{6}00$/.test(color);
	return isRGBTransparent || isRRGGBBTransparent || color === 'none' || color === 'transparent';
}

export function isValidColor(color: string): boolean {
	const style = new Option().style;
	style.color = color;
	return style.color !== '';
}

export function getColor(color: string): string | undefined {
	if (isTransparent(color)) {
		return color;
	}
	return isValidColor(color) ? color : isValidColor(`#${color}`) ? `#${color}` : undefined;
}

export function joinStrList<T>(list: T[], finalSep?: string, sep = ', '): string {
	if (!list.length) return '';
	const listStr = list.map((x) => String(x));

	if (listStr.length === 1) return listStr[0];

	if (finalSep) {
		return listStr.slice(0, -1).join(sep) + `${finalSep}${listStr.slice(-1)}`;
	}
	return listStr.join(sep);
}

export const encodeToBase64UrlSafe = (jsonData: string): string => {
	// https://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript
	const base64 = btoa(jsonData);
	const base64UrlSafe = base64
		.replace(/\+/g, '-') // Replace '+' with '-'
		.replace(/\//g, '_') // Replace '/' with '_'
		.replace(/=+$/, ''); // Remove '=' padding
	return base64UrlSafe;
};

export function decodeFromBase64UrlSafe(input: string) {
	// Replace URL-safe characters with Base64 characters
	let base64 = input
		.replace(/-/g, '+') // Replace '-' with '+'
		.replace(/_/g, '/'); // Replace '_' with '/'
	// Add padding back if necessary
	while (base64.length % 4 !== 0) {
		base64 += '=';
	}
	return atob(base64);
}

export function counter<T>(iterable: Array<T>) {
	const counts: Map<T, number> = new Map();

	for (const item of iterable) {
		const prev = counts.get(item) || 0;
		counts.set(item, prev + 1);
	}
	return counts;
}

export function getPuzzleFilename(puzzleMeta: PuzzleMetaI): string {
	const title = puzzleMeta.title ? puzzleMeta.title : 'sudoku';
	const authors = puzzleMeta.authors ? puzzleMeta.authors : ['Anonymous'];
	const authorsStr = authors.join('_');
	let fileName = `${title}_by_${authorsStr}`;
	fileName = fileName.replaceAll(/[\W]/g, '');
	return fileName;
};
