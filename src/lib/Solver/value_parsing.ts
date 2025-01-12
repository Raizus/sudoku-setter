export interface ParseOptions {
	allow_var?: boolean;
	allow_int_list?: boolean;
	allow_interval?: boolean;
	allow_var_list?: boolean;
}

export const default_parse_opts: ParseOptions = {
	allow_var: true,
	allow_int_list: false,
	allow_interval: false,
	allow_var_list: false,
};

interface IntervalI {
	lower_bound?: [val: number, operator: '<' | '>' | '<=' | '>='];
	upper_bound?: [val: number, operator: '<' | '>' | '<=' | '>='];
}

interface ParsedInteger {
	type: 'number';
	parsed: number;
}

interface ParsedVariable {
	type: 'variable';
	parsed: string;
}

interface ParsedInterval {
	type: 'interval';
	parsed: IntervalI;
}

interface ParsedIntegerList {
	type: 'number_list';
	parsed: number[];
}

interface ParsedVarList {
	type: 'var_list';
	parsed: string[];
}

type ParsedValue = ParsedInteger | ParsedVariable | ParsedInterval | ParsedIntegerList | ParsedVarList;

function parseInterval(expression: string): IntervalI | null {
	// Remove whitespace for clean parsing
	expression = expression.trim();

	// Define regex patterns
	const lowerRegex = /^(>|>=|<|<=)\s*(-?\d+)$/;
	const bracketRegex = /^([[\]])(-?\d+),\s*(-?\d+)([[\]])$/;

	// Check for inequalities
	let match = lowerRegex.exec(expression);
	if (match) {
		const operator = match[1];
		const value = parseInt(match[2], 10);

		if (operator === '>' || operator === '>=') {
			return {
				lower_bound: [value, operator]
			};
		} else if (operator === '<' || operator === '<=') {
			return {
				upper_bound: [value, operator]
			};
		}
	}

	// Check for bracketed interval
	match = bracketRegex.exec(expression);
	if (match) {
		const leftBracket = match[1];
		const value1 = parseInt(match[2], 10);
		const value2 = parseInt(match[3], 10);
		const rightBracket = match[4];

		const op1 = leftBracket === '[' ? '>=' : '>';
		const op2 = rightBracket === ']' ? '<=' : '<';

		return {
			lower_bound: [value1, op1],
			upper_bound: [value2, op2]
		};
	}

	// No match found
	return null;
}

export function parseVariable(value: string): string | null {
	const regex = /^([a-zA-Z][a-zA-Z0-9]*)$/;
	const result = value.match(regex);
	if (!result) return null;
	return result[0];
}

export function parseIntegerList(input: string): null | number[] {
	// Define the regex for a comma-separated list of integers
	const regex = /^-?\d+(?:,-?\d+)*$/;

	// Test the input against the regex
	if (!regex.test(input)) {
		return null;
	}

	// Split the input by commas and convert each part to a number
	return input.split(',').map(Number);
}

export function parseVarList(input: string): null | string[] {
	// Define the regex for a comma-separated list of integers
	const var_regex = /[a-zA-Z][a-zA-Z0-9]*/;
	const num_regex = /-?\d+/;
	const var_or_num_regex = new RegExp(`(?:${num_regex.source}|${var_regex.source})`)
	const regex = new RegExp(`^${var_or_num_regex.source}(?:,${var_or_num_regex.source}\\s*)*$`);

	// Test the input against the regex
	if (!regex.test(input)) {
		return null;
	}

	// Split the input by commas and convert each part to a number
	return input.split(',');
}

export function parseValue(value: string, parse_opts: ParseOptions): ParsedValue | null {
	// match number
	const parsed_int = parseInt(value);
	if (typeof parsed_int === 'number' && !Number.isNaN(parsed_int)) {
		return { type: 'number', parsed: parsed_int };
	}

	// match variable
	const parsed_var = parseVariable(value);
	if (parse_opts.allow_var && parsed_var) {
		return { type: 'variable', parsed: parsed_var };
	}

	// match integers list
	const parsed_int_list = parseIntegerList(value);
	if (parse_opts.allow_int_list && parsed_int_list) {
		return { type: 'number_list', parsed: parsed_int_list };
	}

	// match interval
	const parsed_interval = parseInterval(value);
	if (parse_opts.allow_interval && parsed_interval) {
		return { type: 'interval', parsed: parsed_interval };
	}
	
	// match variable list
	const parsed_var_list = parseVarList(value);
	if (parse_opts.allow_var_list && parsed_var_list) {
		return { type: 'var_list', parsed: parsed_var_list };
	}

	return null;
}
