import { strToCellCoord, strToGridCoord, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { stringToDirection, type DIRECTION } from '$lib/utils/directions';
import { getDefaultShape } from './ElementHandlersUtils';
import { squareCellElementHandlers } from './ElementsInfo/SquareCellElementHandlers';
import type { ShapeI } from './Shape/Shape';
import type { TOOLID } from './Tools';
// import type { ShapeI } from './Shape/Shape';

export function parseCell(data: Record<string, unknown>): GridCoordI {
	const cell = data['cell'];
	if (typeof cell != 'string') {
		throw Error('cell entry must be a string.');
	}

	const coords = strToCellCoord(cell);
	return coords;
}

export function parseCell2(data: Record<string, unknown>): GridCoordI {
	const cell = data['cell'];
	if (typeof cell != 'string') {
		throw Error('cell entry must be a string.');
	}

	const coords = strToGridCoord(cell);
	return coords;
}

export function parseCoords(data: Record<string, unknown>, key: string): GridCoordI[] {
	const coords = data[key];
	if (!Array.isArray(coords)) {
		throw Error('coords entry must be an array.');
	}

	// TODO: add type checking

	return coords;
}

export function parseCells(data: Record<string, unknown>, key: string): GridCoordI[] {
	const cells = data[key];
	if (!Array.isArray(cells)) {
		throw Error('cells entry must be an array.');
	}
	const coords = cells.map((cell) => {
		if (typeof cell != 'string') {
			throw Error('cell must be string.');
		}
		return strToCellCoord(cell);
	});

	return coords;
}

export function parseLines(data: Record<string, unknown>): GridCoordI[][] {
	const lines_data = data['lines'];
	if (!Array.isArray(lines_data)) {
		throw Error('lines entry must be an array.');
	}

	const lines = lines_data.map((line_data) => {
		if (!Array.isArray(line_data)) {
			throw Error('line must be an array.');
		}
		const line = line_data.map((cell) => {
			if (typeof cell != 'string') {
				throw Error('cell must be string.');
			}
			return strToCellCoord(cell);
		});
		return line;
	});

	return lines;
}

export function parseValue(data: Record<string, unknown>): string | undefined {
	const value = data['value'];
	if (value !== undefined && typeof value !== 'string') {
		throw Error(`value entry must be a string, if present at all: ${value}`);
	}

	return value;
}

export function parseDirection(data: Record<string, unknown>): DIRECTION {
	const direction_str = data['direction'];
	if (typeof direction_str != 'string') {
		throw Error('direction entry must be a string.');
	}
	const direction = stringToDirection(direction_str);
	return direction;
}

export function parseDirections(data: Record<string, unknown>): DIRECTION[] {
	const directions_data = data['directions'];
	if (!Array.isArray(directions_data)) {
		throw Error('directions entry must be an array.');
	}

	const directions = directions_data.map((direction) => {
		if (typeof direction != 'string') {
			throw Error('direction must be string.');
		}
		return stringToDirection(direction);
	});

	return directions;
}

export function parseShape(
	data: Record<string, unknown>,
	toolId: TOOLID
): ShapeI | undefined {
	const shape_data = data['shape'];
	if (shape_data === undefined) return undefined;

	const default_shape = getDefaultShape(toolId, squareCellElementHandlers);
	const shape: ShapeI = {
		...default_shape,
		...shape_data as ShapeI
	};
	return shape;
}