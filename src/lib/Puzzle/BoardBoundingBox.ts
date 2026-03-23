import type { GridShape, Rectangle } from '../Types/types';
import type { ElementsDict } from './Constraints/ElementsDict';
import type { Grid } from './Grid/Grid';
import { hasOutsideCells } from './Puzzle';
import { type TOOLID, isOutsideDirectionTool } from './Tools';

/**
 * Calculates the default bounding box for a Sudoku puzzle grid with optional margins for outside cells or tools.
 *
 * @param grid - The grid containing row and column dimensions
 * @param elements - Dictionary of puzzle elements
 * @param tool - Optional tool ID to check if the current tool is an outside direction tool
 * @returns A Rectangle object representing the bounding box with x, y coordinates, width, and height
 *
 * @remarks
 * The function applies a margin of 1 unit if the grid has outside cells or an outside direction tool is selected,
 * otherwise applies a margin of 0.2 units for padding.
 **/

export function getDefaultBoundingBox(
	grid: Grid,
	elements: ElementsDict,
	tool: TOOLID | undefined = undefined
) {
	const gridShape = { nRows: grid.nRows, nCols: grid.nCols } as GridShape;
	const outsideCells = hasOutsideCells(elements, gridShape);
	const ousideTool = tool ? isOutsideDirectionTool(tool) : false;

	const margin = outsideCells || ousideTool ? 1 : 0.2;

	const x0 = -margin;
	const y0 = -margin;
	const width = gridShape.nCols + 2 * margin;
	const height = gridShape.nRows + 2 * margin;

	const bbox: Rectangle = { x: x0, y: y0, width, height };

	return bbox;
}
