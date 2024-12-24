import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';

export function yinYangConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.YIN_YANG);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Yin Yang not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${TOOLS.YIN_YANG}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: yin_yang;\n`;
	out_str += `constraint yin_yang_p(yin_yang);\n`;

	return out_str;
}

export function nurimisakiConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.NURIMISAKI);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Nurimisaki not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% ${TOOLS.NURIMISAKI}\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: nurimisaki;\n`;
	out_str += `constraint nurimisaki_p(nurimisaki);\n`;

	return out_str;
}

export function twoContiguousRegionsConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.TWO_CONTIGUOUS_REGIONS);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Two Contiguous Regions not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% Two Contiguous Regions\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..1: two_contiguous_regions;\n`;
	out_str += `constraint two_contiguous_regions_p(two_contiguous_regions);\n`;

	return out_str;
}

export function unknownRegionsConstraint(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const gconstraints = puzzle.globalConstraints;
	const constraint = gconstraints.get(TOOLS.UNKNOWN_REGIONS);

	if (!constraint) return '';
	const all_cells = grid.getAllCells();

	if (all_cells.some((cell) => cell.outside)) {
		console.warn('Unknown Regions not implemented when there are cells outisde the grid.');
		return '';
	}

	let out_str: string = '';
	out_str += `\n% Unknown Regions\n`;
	out_str += `array[ROW_IDXS, COL_IDXS] of var 0..8: unknown_regions;\n`;
	out_str += `constraint unknown_sudoku_regions_p(unknown_regions);\n`;
    out_str += `constraint no_repeats_in_unknown_regions_p(board, unknown_regions, ALLOWED_DIGITS);\n`;
    
	return out_str;
}