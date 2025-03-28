import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../$types';

interface PuzzleParams extends Record<string, string> {
	puzzleId: string;
}

// export const ssr = false;
// export const csr = true;

export const load: PageLoad = async ({ params, fetch }) => {
	const { puzzleId } = params as PuzzleParams;

	try {
		const response = await fetch(`/puzzles/${puzzleId}.json`);

		if (!response.ok) {
			throw error(404, `Puzzle "${puzzleId}" not found`);
		}

		const jsonStr = await response.text();
		const puzzleData = JSON.parse(jsonStr);

		return {
			puzzle: {
				id: puzzleId,
				data: puzzleData
			}
		};
	} catch (err) {
		if (err instanceof SyntaxError) {
			throw error(500, `Invalid puzzle format for ${puzzleId}`);
		}
		throw error(500, err instanceof Error ? err.message : 'Unknown error');
	}
};
