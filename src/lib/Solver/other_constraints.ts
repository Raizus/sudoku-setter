import type { PuzzleI } from "../Puzzle/Puzzle";
import { TOOLS } from "../Puzzle/Tools";

export function yinYangConstraint(puzzle: PuzzleI) {
    const grid = puzzle.grid;
    const gconstraints = puzzle.globalConstraints;
    const yinyang = gconstraints.get(TOOLS.YIN_YANG);
    
    if (!yinyang) return '';
    const all_cells = grid.getAllCells();
    
    if (all_cells.some(cell => cell.outside)) {
        console.warn('Yin Yang not implements when there are cells outisde the grid.')
        return '';
    }

    let out_str: string = '';
    const [nrows, ncols] = [grid.nRows, grid.nCols];
    out_str += `\n% Yin Yang;\n`;
    out_str += `set of int: NROWS = 0..${nrows - 1};\n`
    out_str += `set of int: NCOLS = 0..${ncols - 1};`;
    out_str += `array[NROWS, NCOLS] of var 0..1: yin_yang;\n`;
    out_str += `constraint yin_yang_p(yin_yang);\n`;

    // out_str += `constraint connected_regions(yin_yang);\n`;
    // out_str += `constraint yin_yang_four_by_four_p(yin_yang);\n`;
    // out_str += `constraint yin_yang_no_crossings(yin_yang);\n`;

    return out_str;
}