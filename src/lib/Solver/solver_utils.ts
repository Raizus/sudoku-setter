import type { Cell } from '../Puzzle/Grid/Cell';

export function cellToVarName(cell: Cell): string {
	const [r, c] = [cell.r, cell.c];
	const var_name = `R${r}C${c}`;
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

interface IntervalI {
	lower_bound?: [val: number, closed: boolean];
	upper_bound?: [val: number, closed: boolean];
}

interface ParseOptions {
	allow_var: boolean,
	allow_int_list: boolean,
	allow_interval: boolean,
}

export function parseVariable(value: string): string | null {
	const regex = /^([a-zA-Z][a-zA-Z0-9]*)$/;
	const result = value.match(regex);
	if (!result) return null;
	return result[0];
}

export function parseValue(value: string, parse_opts: ParseOptions) {
	const parsedInt = parseInt(value);
	if (typeof parsedInt === 'number') {
		return parsedInt;
	}

	// match variable
	const parsedVar = parseVariable(value);
	if (parse_opts.allow_var && parsedVar) return parsedVar;

	return null;
}

export function set_shared_var(name: string) {
	const declaration = `var int: ${name};\n`;
	// TODO: if var is interval set the corresponding constraints
	// TODO: if vars is a list of possible values set the corresponding constraints
	return declaration;
}