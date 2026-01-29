import { range } from 'lodash';
import { ElementsDict, type ElementData } from './Constraints/ElementsDict';
import type { CellRecord } from './Grid/Cell';
import { Grid } from './Grid/Grid';
import type { OutsideDirectionToolI, PuzzleMetaI } from './puzzle_schema';
import { areArraysEqual } from '../utils/functionUtils';
import type { Solution } from './puzzle_schema';
import type { GridShape, Rectangle } from '../Types/types';
import { isOutsideDirectionTool, TOOLS, type TOOLID } from './Tools';
import { isCellOnGrid } from '../utils/SquareCellGridCoords';
import { elementInfoRegistry } from './ElementsInfo/ElementInfoRegistry';

export interface PuzzleI {
	grid: Grid;
	solution?: Solution;
	valid_digits: number[];
	puzzleMeta: PuzzleMetaI;
	elementsDict: ElementsDict;
}

export function puzzleToJson(puzzle: PuzzleI) {
	const grid = puzzle.grid;
	const localConstraints = puzzle.elementsDict;
	const puzzleRecord: Record<string, unknown> = {};
	puzzleRecord['puzzleInfo'] = puzzle.puzzleMeta;
	puzzleRecord['nRows'] = grid.nRows;
	puzzleRecord['nCols'] = grid.nCols;

	const n = Math.min(grid.nRows, grid.nCols);
	const default_valid_digits = range(1, n + 1);
	if (puzzle.valid_digits && !areArraysEqual(default_valid_digits, puzzle.valid_digits)) {
		puzzleRecord['valid_digits'] = puzzle.valid_digits;
	}

	puzzleRecord['grid'] = grid.toJSON();

	if (puzzle.solution) {
		puzzleRecord['solution'] = puzzle.solution;
	}

	const localConstraintsRecord = localConstraints.toJSON();
	if (Object.keys(localConstraintsRecord).length) {
		puzzleRecord['elements'] = localConstraintsRecord;
	}

	return puzzleRecord;
}

export function puzzleFromJson(puzzleJson: Record<string, unknown>) {
	const nRows = puzzleJson['nRows'] as number;
	const nCols = puzzleJson['nCols'] as number;

	const puzzleMetaData = puzzleJson['puzzleInfo'] as PuzzleMetaI;
	let puzzleMeta: PuzzleMetaI = {};
	if (puzzleMetaData) {
		puzzleMeta = puzzleMetaData as PuzzleMetaI;
	}
	const parsed_valid_digits = puzzleJson['valid_digits'] as number[] | undefined;
	const grid_data = puzzleJson['grid'] as CellRecord[][];
	const grid = Grid.fromJSON(nRows, nCols, grid_data);
	const n = Math.min(grid.nRows, grid.nRows);
	let valid_digits = range(1, n + 1);
	if (parsed_valid_digits !== undefined) {
		valid_digits = parsed_valid_digits;
	}

	const solution = puzzleJson['solution'] as Solution;
	// const grid = new Grid(nRows, nCols);

	const local_constraints_data = puzzleJson['elements'] as ElementData[];
	const elements_dict = ElementsDict.fromJson(local_constraints_data);

	const puzzle: PuzzleI = {
		puzzleMeta: puzzleMeta,
		solution: solution,
		grid: grid,
		valid_digits: valid_digits,
		elementsDict: elements_dict
	};

	return puzzle;
}

export function blankPuzzle(): PuzzleI {
	const grid = new Grid(9, 9);
	const elements_dict = new ElementsDict();
	const puzzle: PuzzleI = {
		grid,
		valid_digits: range(1, 10),
		puzzleMeta: {},
		solution: undefined,
		elementsDict: elements_dict
	};
	return puzzle;
}

function hasOutsideCells(elements_dict: ElementsDict, gridShape: GridShape): boolean {
	for (const element of elements_dict.values()) {
		const tool_id = element.tool_id;
		if (!isOutsideDirectionTool(tool_id)) continue;

		const hasCellOffGrid = Object.values(
			element.constraints as Record<string, OutsideDirectionToolI>
		).some((constraint) => {
			return !isCellOnGrid(constraint.cell, gridShape);
		});
		if (hasCellOffGrid) return true;
	}
	return false;
}

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

export function generateDescription(elements: ElementsDict): string {
	let description: string = '';
	const elementHandlers = elementInfoRegistry;

	// is sudoku?
	const not_sudoku_ele = elements.values().find(
		(element) => element.tool_id === TOOLS.SUDOKU_RULES_DO_NOT_APPLY
	);
	if (!not_sudoku_ele || not_sudoku_ele.disabled) {
		description += 'Sudoku rules apply.\n\n';
	} else {
		description += 'Sudoku rules do not apply.\n\n';		
	}

	// local constraints descriptions
	for (const element of elements.values()) {
		const tool_id = element.tool_id;

		// elements to ignore
		if (tool_id === TOOLS.SUDOKU_RULES_DO_NOT_APPLY) continue;

		const elementInfo = elementHandlers[tool_id];
		const name = elementInfo.menu?.name ?? elementInfo.toolId;
		const constraint_desc = elementInfo.meta?.description;
		description += `**${name}**: ${constraint_desc}\n\n`;

		// add negative constraints descriptions
		if (!element.negative_constraints) continue;
		for (const [neg_tool_id, value] of Object.entries(element.negative_constraints)) {
			if (!value) continue;
			const neg_constraint = elementInfo.negative_constraints?.find(
				(neg_constraint) => neg_constraint.toolId === neg_tool_id
			);
			if (!neg_constraint) continue;

			const name = neg_tool_id;
			const constraint_desc = neg_constraint.description;
			description += ` - **${name}**: ${constraint_desc}\n\n`;
		}
	}

	return description.trim();
}