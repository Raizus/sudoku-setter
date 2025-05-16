import type { ConstraintsElement, ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { SingleCellTool } from '../Puzzle/Constraints/SingleCellConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import { TOOLS } from '../Puzzle/Tools';
import { DIRECTION } from '../utils/directions';
import type { GridCoordI } from '../utils/SquareCellGridCoords';
import { type ParseOptions, default_parse_opts, parseValue } from './value_parsing';

export enum VAR_2D_NAMES {
	BOARD = 'board',
	BOARD_REGIONS = 'board_regions',
	YIN_YANG = 'yin_yang',
	NURIMISAKI = 'nurimisaki',
	NURIKABE_SHADING = 'nurikabe_shading',
	NURIKABE_REGIONS = 'nurikabe_regions',
	NORINORI_SHADING = 'norinori_shading',
	SHIKAKU_REGIONS = 'shikaku_regions',
	SHIKAKU_WIDTH = 'shikaku_width',
	SHIKAKU_HEIGHT = 'shikaku_height',
	UNKNOWN_REGIONS = 'unknown_regions',
	TWO_CONTIGUOUS_REGIONS = 'two_contiguous_regions',
	SUGURU_REGIONS = 'suguru_regions',
	DOUBLERS = 'doublers_grid',
	INDEXER_CELLS_GRID = 'indexer_cells_grid',
	NEGATORS = 'negators_grid',
	VALUES_GRID = 'values_grid',
	SASHIGANE = 'sashigane',
	SASHIGANE_BENDS = 'sashigane_bends',
	CELL_CENTER_LOOP = 'cell_center_loop',
	CAVE_SHADING = 'cave_shading',
	CAVE_REGIONS = 'cave_regions',
	CAVE_CELLS_FILLOMINO_REGIONS = 'cave_cells_fillomino_regions',
	FILLOMINO_REGIONS = 'fillomino_area',
	GALAXY_REGIONS = 'galaxy_regions',
	GALAXY_SIZES = 'galaxy_sizes',
	GOLDILOCKS_REGIONS = 'goldilocks_regions',
	LITS_SHADING = 'lits_shading',
	LITS_REGIONS = 'lits_regions',
	LITS_GRID = 'lits_grid',
	PENTOMINO_REGIONS = 'pentomino_regions',
	STAR_BATTLE = 'star_battle',
	LITS_WHITE_BLACK_STAR_BATTLE = 'lits_white_black_star_battle',
	COUNTING_CIRCLES_COLORS = 'counting_circles_colors_board',
	MAZE_DIRECTED_PATH = 'maze_directed_path',
	CONNECT_FOUR = 'connect_four',
	BYOKC_GRID = 'byokc_grid',
	SHADED_BOUNDARIES_REGIONS = 'shaded_boundaries_regions',
	SHADED_BOUNDARIES_VERTICAL = 'shaded_boundaries_vertical',
	SHADED_BOUNDARIES_HORIZONTAL = 'shaded_boundaries_horizontal'
}

export function cellToGridVarName(cell: Cell, name: string): string {
	return `${name}[${cell.r},${cell.c}]`;
}

export function cellsToGridVarsName(cells: Cell[], name: string): string[] {
	const vars = cells.map((cell) => cellToGridVarName(cell, name));
	return vars;
}

export function cellsToGridVarsStr(cells: Cell[], name: string): string {
	const out = '[' + cellsToGridVarsName(cells, name).join(',') + ']';
	return out;
}

export function coordToGridVarName(coord: GridCoordI, name: VAR_2D_NAMES): string {
	return `${name}[${coord.r},${coord.c}]`;
}

export function coordsToGridVarsName(coords: GridCoordI[], name: VAR_2D_NAMES): string[] {
	const vars = coords.map((coord) => coordToGridVarName(coord, name));
	return vars;
}

export function coordsToGridVarsStr(coords: GridCoordI[], name: VAR_2D_NAMES): string {
	const out = '[' + coordsToGridVarsName(coords, name).join(',') + ']';
	return out;
}

export function cellToVarName(cell: Cell): string {
	const [r, c] = [cell.r, cell.c];
	// const var_name = `R${r}C${c}`;
	const var_name = `board[${r},${c}]`;
	return var_name;
}

export function cellsToVarsName(cells: Cell[]): string[] {
	const vars = cells.map((cell) => cellToVarName(cell));
	return vars;
}

export function allDifferentConstraint(vars: string[]): string {
	const vars_str = vars.join(',');
	const constraint = `constraint alldifferent([${vars_str}]);\n`;
	return constraint;
}

export function addHeader(block: string, header: string) {
	if (block) {
		block = `\n% ${header}\n` + block;
	}
	return block;
}

export function getDirectionCells(grid: Grid, cell: Cell) {
	const directions = [DIRECTION.N, DIRECTION.S, DIRECTION.W, DIRECTION.E];
	const cells2: Cell[][] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		cells2.push(cells);
	}
	return cells2;
}

export function getDirectionsVars(
	grid: Grid,
	cell: Cell,
	directions: DIRECTION[] | undefined = undefined
) {
	if (!directions) directions = [DIRECTION.N, DIRECTION.S, DIRECTION.W, DIRECTION.E];
	const vars_arr: string[] = [];
	for (const direction of directions) {
		const cells = grid.getCellsInDirection(cell.r, cell.c, direction);
		const vars = '[' + cellsToVarsName(cells).join(',') + ']';
		vars_arr.push(vars);
	}
	return vars_arr;
}

export type ElementF = (model: PuzzleModel, element: ConstraintsElement) => string;

export function simpleElementFunction<T extends ConstraintType>(
	model: PuzzleModel,
	element: ConstraintsElement,
	func: (model: PuzzleModel, grid: Grid, c_id: string, constraint: T) => string
) {
	let out_str = '';
	const constraints = element.constraints;
	if (!constraints) return out_str;

	const grid = model.puzzle.grid;
	for (const [c_id, constraint] of Object.entries(constraints)) {
		const constraint_str = func(model, grid, c_id, constraint as T);
		out_str += constraint_str;
	}
	return out_str;
}

export function constraintsBuilder(
	model: PuzzleModel,
	element: ConstraintsElement,
	tool_map: Map<string, ElementF>
) {
	let out_str = '';
	const tool_id = element.tool_id;
	const elementF = tool_map.get(tool_id);
	if (elementF) {
		const element_str = elementF(model, element);
		out_str += element_str;
	}

	return out_str;
}

export interface ModelI {
	model_str: string; // string with minizinc model
	used_vars: Set<string>; // keep track of shared vars
	puzzle: PuzzleI;
}

export class PuzzleModel implements ModelI {
	model_str: string = '';
	used_vars: Set<string>;
	puzzle: PuzzleI;
	edge_list: [s: number, t: number][];

	constructor(puzzle: PuzzleI) {
		this.puzzle = puzzle;
		this.edge_list = [];
		this.used_vars = new Set();
	}

	add(str: string) {
		this.model_str += str;
	}

	hasVariable(name: string): boolean {
		return this.used_vars.has(name);
	}

	addVariable(name: string) {
		this.used_vars.add(name);
	}

	getOrSetSharedVar(
		value: string,
		default_name: string,
		parse_opts: ParseOptions = default_parse_opts
	): [model_str: string, var_name: string] | null {
		let model_str = '';
		if (value.length === 0 && default_name.length > 0) {
			const var_name = default_name;
			const exists = this.hasVariable(var_name);
			if (!exists) {
				model_str += `var int: ${var_name};\n`;
				this.addVariable(var_name);
			}

			return [model_str, var_name];
		}

		const parsed_value = parseValue(value, parse_opts);
		if (!parsed_value) return null;
		// parse number
		if (parsed_value.type === 'number') {
			const value = parsed_value.parsed;
			return ['', String(value)];
		}

		// parse variable
		if (parsed_value.type === 'variable') {
			const var_name = parsed_value.parsed;

			const exists = this.hasVariable(var_name);
			if (!exists) {
				model_str += `var int: ${var_name};\n`;
				this.addVariable(var_name);
			}

			return [model_str, var_name];
		}
		if (!default_name) return null;

		const exists = this.hasVariable(default_name);
		if (!exists) {
			model_str += `var int: ${default_name};\n`;
			this.addVariable(default_name);
		}

		// parse interval
		if (parsed_value.type === 'interval') {
			const interval = parsed_value.parsed;
			// if variable does not exist we need to declare it
			if (interval.lower_bound) {
				const val = interval.lower_bound[0];
				const op = interval.lower_bound[1];
				model_str += `constraint ${default_name} ${op} ${val};\n`;
			}
			if (interval.upper_bound) {
				const val = interval.upper_bound[0];
				const op = interval.upper_bound[1];
				model_str += `constraint ${default_name} ${op} ${val};\n`;
			}
		}

		// parse number list
		if (parsed_value.type === 'number_list') {
			const values = parsed_value.parsed;
			// if variable does not exist we need to declare it
			const values_str = '{' + values.join(',') + '}';
			model_str += `constraint member(${values_str}, ${default_name});\n`;
		}

		// parse number / variable list
		// if (parsed_value.type === 'var_list') return null;
		if (parsed_value.type === 'var_list') {
			const values = parsed_value.parsed;
			const values_str = '[' + values.join(',') + ']';
			for (const value of values) {
				const val = parseInt(value);
				if (Number.isNaN(val) && !this.hasVariable(value)) {
					model_str += `var int: ${value};\n`;
					this.addVariable(value);
				}
			}
			model_str += `constraint member(${values_str}, ${default_name});\n`;
		}

		return [model_str, default_name];
	}
}

/**
 * Prunes the minizinc model by removind unused predicate, function and test clauses
 * @param model
 * @returns
 */
function _pruneMinizincModel(model: string): string {
	// Split the model into lines for processing
	const lines = model.split('\n');

	// Store function and predicate definitions with their content
	const definitions: {
		[key: string]: {
			startLine: number;
			endLine: number;
			name: string;
			content: string[];
			type: 'function' | 'predicate' | 'test' | 'variable';
		};
	} = {};

	// Regular expressions for matching
	const functionStartRegex = /^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/;
	const predicateStartRegex = /^predicate\s+(\w+)\s*\(/;
	const testStartRegex = /^test\s+(\w+)\s*\(/;
	const variableStartRegex = /^(?:array|set|int|var)\b.*?:\s*(\w+)(?:\s*=)/;

	// First pass: identify all function and predicate definitions
	let currentDef: {
		name: string;
		startLine: number;
		content: string[];
		type: 'function' | 'predicate' | 'test' | 'variable';
	} | null = null;
	let bracketCount = 0;
	let curlyBracketCount = 0;
	let squareBracketCount = 0;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		// Check for function/predicate start
		const funcMatch = line.match(functionStartRegex);
		const predMatch = line.match(predicateStartRegex);
		const testMatch = line.match(testStartRegex);
		const varMatch = line.match(variableStartRegex);

		if (!currentDef && (funcMatch || predMatch || testMatch || varMatch)) {
			const name = (funcMatch || predMatch || testMatch || varMatch)![1];
			currentDef = {
				name,
				startLine: i,
				content: [lines[i]],
				type: funcMatch ? 'function' : predMatch ? 'predicate' : testMatch ? 'test' : 'variable'
			};

			// Count opening brackets/parentheses in the first line
			bracketCount = (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
			curlyBracketCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
			squareBracketCount = (line.match(/\[/g) || []).length - (line.match(/\]/g) || []).length;
			continue;
		}

		// Add content to current definition if we're inside one
		if (currentDef) {
			currentDef.content.push(lines[i]);

			// Update bracket count
			bracketCount += (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
			curlyBracketCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
			squareBracketCount += (line.match(/\[/g) || []).length - (line.match(/\]/g) || []).length;
			// Check if this is the end of the definition
			// A function/predicate ends when:
			// 1. All brackets are closed (bracketCount === 0)
			// 2. The line ends with a semicolon
			// 3. We're not inside a local variable declaration (no 'let' or 'var' on this line)
			if (
				bracketCount === 0 &&
				curlyBracketCount === 0 &&
				squareBracketCount === 0 &&
				line.endsWith(';')
			) {
				definitions[currentDef.name] = {
					...currentDef,
					endLine: i
				};

				// check previous line(s) for comments and add them to the range
				let start_line = currentDef.startLine;
				while (start_line > 0 && lines[start_line - 1].trim().startsWith('%')) {
					start_line -= 1;
				}
				definitions[currentDef.name].startLine = start_line;

				currentDef = null;
			}
		}
	}

	// Helper function to find all function/predicate/test calls in a line
	function findReferences(line: string): string[] {
		const references: string[] = [];
		const funcMatch = line.match(functionStartRegex);
		const predMatch = line.match(predicateStartRegex);
		const testMatch = line.match(testStartRegex);

		for (const defName of Object.keys(definitions)) {
			const deftype = definitions[defName].type;

			// Look for the function/predicate name followed by an opening parenthesis
			// Make sure we're not inside a function/predicate declaration
			if (deftype === 'function' || deftype === 'test' || deftype === 'predicate') {
				if (funcMatch || predMatch || testMatch) continue;
				const regex = new RegExp(`\\b${defName}\\s*\\(`, 'g');
				if (regex.test(line)) {
					references.push(defName);
				}
			} else if (deftype === 'variable') {
				const regex = new RegExp(
					`^(?:array|set|int|var)\\b.*?:\\s*${defName}(?:\\s*=|\\s*:|\\s*\\[|\\s*\\(|\\s*;)`
				);
				const is_definition = line.match(regex);
				if (is_definition) continue;
				const regex2 = new RegExp(`\\b${defName}\\b`, 'g');
				if (regex2.test(line)) {
					references.push(defName);
				}
			}
		}
		return references;
	}

	// Second pass: find all function/predicate usage in the model
	const usedDefinitions = new Set<string>();

	// Process all lines to find function/predicate usage
	for (const line of lines) {
		const references = findReferences(line);
		references.forEach((call) => usedDefinitions.add(call));
	}

	// Create the pruned model by removing unused definitions
	const unusedRanges = Object.values(definitions)
		.filter((def) => !usedDefinitions.has(def.name))
		.map((def) => ({ start: def.startLine, end: def.endLine }));

	// Sort ranges in reverse order to remove from bottom to top
	unusedRanges.sort((a, b) => b.start - a.start);

	// Create new array of lines with unused definitions removed
	const prunedLines = [...lines];
	for (const range of unusedRanges) {
		prunedLines.splice(range.start, range.end - range.start + 1);
	}

	// Remove any resulting double blank lines
	const finalLines: string[] = [];
	let lastLineWasBlank = false;

	for (const line of prunedLines) {
		if (line.trim() === '') {
			if (!lastLineWasBlank) {
				finalLines.push(line);
				lastLineWasBlank = true;
			}
		} else {
			finalLines.push(line);
			lastLineWasBlank = false;
		}
	}

	return finalLines.join('\n');
}

export function pruneMinizincModel(model: string): string {
	let current = model;
	let size = current.length;

	while (true) {
		current = _pruneMinizincModel(current);
		if (current.length == size) break;
		size = current.length;
	}
	return current;
}

export function format_2d_array(arr: number[][]): string {
	if (arr.length === 0) return '[| |]';

	const formattedRows = arr.map((row) => row.map((value) => value.toString()).join(', '));

	const formattedString = formattedRows.map((row) => `${row}`).join('\n |');

	return `[| ${formattedString} |]`;
}

export function set_board_regions(model: PuzzleModel, grid: Grid) {
	// add regions array if applicable
	const regions = [...grid.getUsedRegions()];
	if (regions.length) {
		const min_r = Math.min(...regions);
		const max_r = Math.max(...regions);
		const regions_arr: number[][] = [];
		for (let i = 0; i < grid.nRows; i++) {
			const row: number[] = [];
			for (let j = 0; j < grid.nCols; j++) {
				const cell = grid.getCell(i, j);
				if (!cell || cell.region === null) row.push(min_r - 1);
				else row.push(cell.region);
			}
			regions_arr.push(row);
		}

		const array_str = format_2d_array(regions_arr);
		model.add(
			`array[ROW_IDXS, COL_IDXS] of var ${min_r - 1}..${max_r}: ${VAR_2D_NAMES.BOARD_REGIONS} = array2d(ROW_IDXS, COL_IDXS, ${array_str});\n`
		);

		// for (const cell of grid.getAllCells()) {
		// 	const region_var = cellToGridVarName(cell, VAR_2D_NAMES.BOARD_REGIONS);
		// 	if (cell.region !== null) model.add(`constraint ${region_var} = ${cell.region};\n`);
		// 	else model.add(`constraint ${region_var} = ${min_r - 1};\n`);
		// }
	}
}

export function groupConstraintsByValue<T extends ConstraintType>(constraints: T[]) {
	const groups = new Map<string, T[]>();
	for (const constraint of constraints) {
		const value = constraint.value ?? '';
		const list = groups.get(value);
		if (!list) {
			groups.set(value, [constraint]);
			continue;
		}
		list.push(constraint);
	}
	return groups;
}

export function cellsFromCoords(grid: Grid, coords: GridCoordI[]): Cell[] {
	const cells = coords.map((coord) => grid.getCell(coord.r, coord.c)).filter((cell) => !!cell);
	return cells;
}
export function* adjCellPairGen(grid: Grid) {
	for (const cell of grid.getAllCells()) {
		const adj_cells = grid
			.getOrthogonallyAdjacentCells(cell)
			.filter((cell2) => cell2.r >= cell.r || cell2.c >= cell.c);
		for (const cell2 of adj_cells) {
			yield [cell, cell2];
		}
	}
}
export function findSingleCellConstraintMatch<T extends SingleCellTool>(
	constraints: Record<string, T>,
	cell: Cell
) {
	const clist = [...Object.values(constraints)];
	const match = clist.find((constraint) => {
		const coord = constraint.cell;
		if (cell.c === coord.c && cell.r === coord.r) return constraint;
	});
	return match;
}

export function exactlyNPerRow(n: number, target: boolean | number, grid_name: string) {
	let out_str: string = '';
	out_str += `% Exactly ${n} per row \n`;
	out_str += `constraint exactly_n_per_row_p(${grid_name}, ${target}, ${n});\n`;

	return out_str;
}

export function exactlyNPerColumn(n: number, target: boolean | number, grid_name: string) {
	let out_str: string = '';
	out_str += `\n% Exactly ${n} per column \n`;
	out_str += `constraint exactly_n_per_column_p(${grid_name}, ${target}, ${n});\n`;

	return out_str;
}

export function exactlyNPerRegion(
	puzzle: PuzzleI,
	n: number,
	target: boolean | number,
	grid_name: string
) {
	const grid = puzzle.grid;

	let out_str: string = '';
	const elements = puzzle.elementsDict;
	const chaos_construction = !!elements.get(TOOLS.CHAOS_CONSTRUCTION);
	if (!chaos_construction) {
		out_str += `\n% Exactly ${n} per region \n`;
		const regions = grid.getUsedRegions();
		for (const region of regions) {
			const region_cells = grid.getRegion(region);
			const vars_str = cellsToGridVarsStr(region_cells, grid_name);
			out_str += `constraint count_eq(${vars_str}, ${target}, ${n});\n`;
		}
	}

	return out_str;
}

export function exactlyNPerRowColumnRegion(
	puzzle: PuzzleI,
	n: number,
	target: boolean | number,
	grid_name: string
) {
	let out_str: string = exactlyNPerRow(n, target, grid_name);
	out_str += exactlyNPerColumn(n, target, grid_name);
	out_str += exactlyNPerRegion(puzzle, n, target, grid_name);

	return out_str;
}
