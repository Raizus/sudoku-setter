import { areCoordsNeighbours, type GridCoordI } from '$src/lib/utils/SquareCellGridCoords';
import type { TOOLID } from '../Tools';
import { parseCoords, parseValue } from '../utils';
import type { ConstraintI } from './ConstraintType';

export interface CornerLineToolI extends ConstraintI {
	toolId: TOOLID;
	value: string;
	coords: GridCoordI[];
}

export function cornerLineConstraint(toolId: TOOLID, coords: GridCoordI[], value = ''): CornerLineToolI {
	return {
		toolId,
		coords,
		value
	};
}

export function cornerLineConstraintFromJson(
	toolId: TOOLID,
	data: Record<string, unknown>
): CornerLineToolI {
	const coords = parseCoords(data, 'coords');
	const value = parseValue(data);

	const constraint = cornerLineConstraint(toolId, coords, value);
	return constraint;
}

export function updateCornerLineConstraintCoords(line: CornerLineToolI, coord: GridCoordI) {
	const line_coords = [...line.coords];
	const l = line_coords.length;

	const adjToLast = l === 0 ? true : areCoordsNeighbours(line_coords[l - 1], coord);
    if (!adjToLast) return line;
    
    line_coords.push(coord);

	return { ...line, coords: line_coords };
}
