import { areCoordsNeighbours, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { TOOLID } from '../Tools';
import { parseCells, parseValue } from '../utils';
import type { EdgeToolI } from '../puzzle_schema';

export function edgeConstraint(toolId: TOOLID, coords: GridCoordI[], value?: string): EdgeToolI {
	return {
		toolId,
		cells: coords,
		value
	};
}

export function edgeConstraintFromJson(toolId: TOOLID, data: Record<string, unknown>): EdgeToolI {
	const cells = parseCells(data, 'cells');
	const value = parseValue(data);

	const constraint = edgeConstraint(toolId, cells, value);
	return constraint;
}

export function updateDirectedAdjacentCellsConstraint(
	edge_tool: EdgeToolI,
	cell: GridCoordI
): EdgeToolI {
	const cells = [...edge_tool.cells];
	const l = cells.length;

	if (l !== 1) return edge_tool;
	const adjToLast = areCoordsNeighbours(cells[l - 1], cell);
	if (!adjToLast) return edge_tool;

	cells.push(cell);
	return { ...edge_tool, cells: cells };
}
