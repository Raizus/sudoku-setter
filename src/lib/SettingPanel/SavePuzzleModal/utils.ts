import { puzzleFromJson, puzzleToJson, type PuzzleI } from '$src/lib/Puzzle/Puzzle';
import { decodeFromBase64UrlSafe, encodeToBase64UrlSafe } from '$src/lib/utils/functionUtils';

export function puzzleToJsonStr(puzzle: PuzzleI, space?: string | number): string {
	const data = puzzleToJson(puzzle);
	const jsonData = JSON.stringify(data, null, space);
	return jsonData;
}

export function puzzleToCompressedStr(puzzle: PuzzleI): string {
	const jsonData = puzzleToJsonStr(puzzle, 0);
	const compressedStr = encodeToBase64UrlSafe(jsonData);
	return compressedStr;
}

export function compressedStrToPuzzle(str: string): PuzzleI {
	const decompressedStr = decodeFromBase64UrlSafe(str);
	const jsonData = JSON.parse(decompressedStr);
	const puzzle = puzzleFromJson(jsonData);
	return puzzle;
}

export function download(content: Blob | string, fileName: string, contentType: string) {
	const a = document.createElement('a');
	const file = content instanceof Blob ? content : new Blob([content], { type: contentType });
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.style.display = 'none';

	document.body.appendChild(a);

	// Click after the current event loop completes
	setTimeout(() => {
		console.log("clicking a")
		a.click();
	}, 0);

	setTimeout(() => {
		document.body.removeChild(a);
		URL.revokeObjectURL(a.href);
	}, 100);
}
