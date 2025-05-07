import { puzzleFromJson } from '$src/lib/Puzzle/Puzzle';
import { decodeFromBase64UrlSafe } from '$src/lib/utils/functionUtils';
import type { PageLoad } from '../../$types';

interface Params extends Record<string, string> {
	encoded_puzzle: string;
}

export const load: PageLoad = async ({ params }) => {
	const { encoded_puzzle } = params as Params;
	const decoded_string = decodeFromBase64UrlSafe(encoded_puzzle);
    const jsonData = JSON.parse(decoded_string);
	const newPuzzle = puzzleFromJson(jsonData);
	return {
		puzzle: newPuzzle
	};
};
