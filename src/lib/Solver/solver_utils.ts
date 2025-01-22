import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { Cell } from '../Puzzle/Grid/Cell';
import type { Grid } from '../Puzzle/Grid/Grid';
import type { PuzzleI } from '../Puzzle/Puzzle';
import type { TOOLID } from '../Puzzle/Tools';
import { DIRECTION } from '../utils/directions';
import { type ParseOptions, default_parse_opts, parseValue } from './value_parsing';

export enum VAR_2D_NAMES {
	BOARD = 'board',
	BOARD_REGIONS = 'board_regions',
	YIN_YANG = 'yin_yang',
	NURIKABE_SHADING = 'nurikabe_shading',
	NURIKABE_REGIONS = 'nurikabe_regions',
	UNKNOWN_REGIONS = 'unknown_regions',
	DOUBLERS = 'doublers_grid',
	NEGATORS = 'negators_grid',
	VALUES_GRID = 'values_grid',
	SASHIGANE = 'sashigane',
	SASHIGANE_BENDS = 'sashigane_bends',
	CELL_CENTER_LOOP = 'cell_center_loop',
	CAVE_SHADING = 'cave_shading',
	CAVE_REGIONS = 'cave_regions',
	FILLOMINO_REGIONS = 'fillomino_area',
	GALAXY_REGIONS = 'galaxy_regions',
	GALAXY_SIZES = 'galaxy_sizes',
	GOLDILOCKS_REGIONS = 'goldilocks_regions',
	LITS_SHADING = 'lits_shading',
	LITS_REGIONS = 'lits_regions',
	STAR_BATTLE = 'star_battle',
	LITS_WHITE_BLACK_STAR_BATTLE = 'lits_white_black_star_battle',
	COUNTING_CIRCLES_COLORS = 'counting_circles_colors_board',
	MAZE_DIRECTED_PATH = 'maze_directed_path'
}

export function cellToGridVarName(cell: Cell, name: VAR_2D_NAMES): string {
	return `${name}[${cell.r},${cell.c}]`;
}

export function cellsToGridVarsName(cells: Cell[], name: VAR_2D_NAMES): string[] {
	const vars = cells.map((cell) => cellToGridVarName(cell, name));
	return vars;
}

export function cellsToGridVarsStr(cells: Cell[], name: VAR_2D_NAMES): string {
	const out = '[' + cellsToGridVarsName(cells, name).join(',') + ']';
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

export function cellToValueVarName(cell: Cell): string {
	return `values_grid[${cell.r},${cell.c}]`;
}

export function cellsToValueVarsName(cells: Cell[]): string[] {
	return cells.map((cell) => cellToValueVarName(cell));
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

type ConstraintF<T extends ConstraintType> = (grid: Grid, constraint: T) => string;

export function constraintsBuilder<T extends ConstraintType>(
	grid: Grid,
	toolId: TOOLID,
	constraints: Record<string, ConstraintType>,
	constraints_func_map: Map<string, ConstraintF<T>>
) {
	let out_str = '';
	const constraintF = constraints_func_map.get(toolId);
	if (constraintF) {
		for (const constraint of Object.values(constraints)) {
			const constraint_str = constraintF(grid, constraint as T);
			out_str += constraint_str;
		}
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
		const parsed_value = parseValue(value, parse_opts);
		if (!parsed_value) return null;

		// parse number
		if (parsed_value.type === 'number') {
			const value = parsed_value.parsed;
			return ['', String(value)];
		}

		// parse variable
		let model_str = '';
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

		if (parsed_value.type === 'var_list') return null;
		// parse number / variable list
		// if (parsed_value.type === 'var_list') {
		// 	const values = parsed_value.parsed;
		// 	const values_str = '[' + values.join(',') + ']';
		// 	for (const value in values) {
		// 		const val = parseInt(value);
		// 		if (Number.isNaN(val) && !this.hasVariable(value)) {
		// 			model_str += `var int: ${value};\n`;
		// 			this.addVariable(value);
		// 		}
		// 		model_str += `constraint member(${values_str}, ${default_name});\n`;
		// 	}
		// }

		return [model_str, default_name];
	}
}

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
		};
	} = {};

	// Regular expressions for matching
	const functionStartRegex = /^function(?:\s+[\w[\].$(),]+)+\s*:\s*(\w+)\s*\(/;
	const predicateStartRegex = /^predicate\s+(\w+)\s*\(/;
	const testStartRegex = /^test\s+(\w+)\s*\(/;

	// First pass: identify all function and predicate definitions
	let currentDef: { name: string; startLine: number; content: string[] } | null = null;
	let bracketCount = 0;
	let curlyBracketCount = 0;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		// Check for function/predicate start
		const funcMatch = line.match(functionStartRegex);
		const predMatch = line.match(predicateStartRegex);
		const testMatch = line.match(testStartRegex);

		if (funcMatch || predMatch || testMatch) {
			const name = (funcMatch || predMatch || testMatch)![1];
			currentDef = {
				name,
				startLine: i,
				content: [lines[i]]
			};

			// Count opening brackets/parentheses in the first line
			bracketCount = (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
			curlyBracketCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
			continue;
		}

		// Add content to current definition if we're inside one
		if (currentDef) {
			currentDef.content.push(lines[i]);

			// Update bracket count
			bracketCount += (line.match(/\(/g) || []).length - (line.match(/\)/g) || []).length;
			curlyBracketCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
			// Check if this is the end of the definition
			// A function/predicate ends when:
			// 1. All brackets are closed (bracketCount === 0)
			// 2. The line ends with a semicolon
			// 3. We're not inside a local variable declaration (no 'let' or 'var' on this line)
			if (bracketCount === 0 && curlyBracketCount === 0 && line.endsWith(';')) {
				definitions[currentDef.name] = {
					startLine: currentDef.startLine,
					endLine: i,
					name: currentDef.name,
					content: currentDef.content
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

	// Second pass: find all function/predicate usage in the model
	const usedDefinitions = new Set<string>();

	// Helper function to find all function/predicate calls in a line
	function findCalls(line: string): string[] {
		const calls: string[] = [];
		for (const defName of Object.keys(definitions)) {
			// Look for the function/predicate name followed by an opening parenthesis
			// Make sure we're not inside a function/predicate declaration
			if (!line.includes('function') && !line.includes('predicate') && !line.includes('test')) {
				const regex = new RegExp(`\\b${defName}\\s*\\(`, 'g');
				if (regex.test(line)) {
					calls.push(defName);
				}
			}
		}
		return calls;
	}

	// Process all lines to find function/predicate usage
	for (const line of lines) {
		const calls = findCalls(line);
		calls.forEach((call) => usedDefinitions.add(call));
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

export const PENTOMINOES = new Map<number, number[][]>([
	[1, [[1], [1], [1], [1], [1]]], // I
	[
		2, // X
		[
			[0, 1, 0],
			[1, 1, 1],
			[0, 1, 0]
		]
	],
	[
		3, // T
		[
			[1, 1, 1],
			[0, 1, 0],
			[0, 1, 0]
		]
	],
	[
		4, // U
		[
			[1, 0, 1],
			[1, 1, 1]
		]
	],
	[
		5, // V
		[
			[1, 0, 0],
			[1, 0, 0],
			[1, 1, 1]
		]
	],
	[
		6, // W
		[
			[1, 0, 0],
			[1, 1, 0],
			[0, 1, 1]
		]
	],
	[
		7, // Z
		[
			[1, 1, 0],
			[0, 1, 0],
			[0, 1, 1]
		]
	],
	[
		8, // F
		[
			[0, 1, 1],
			[1, 1, 0],
			[0, 1, 0]
		]
	],
	[
		9, // L
		[
			[1, 0, 0, 0],
			[1, 1, 1, 1]
		]
	],
	[
		10, // N
		[
			[1, 1, 0, 0],
			[0, 1, 1, 1]
		]
	],
	[
		11, // P
		[
			[1, 1],
			[1, 1],
			[1, 0]
		]
	],
	[
		12, // Y
		[
			[1, 1, 1, 1],
			[0, 1, 0, 0]
		]
	]
]);

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
			const row: number[] = []
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
