import { areCoordsEqual, gridCoordToStr, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { DIRECTION } from '$lib/utils/directions';
import { uniqueId } from 'lodash';
import {
	SIMPLE_SINGLE_CELL_CONSTRAINTS,
	isArrowTool,
	isCageTool,
	isCornerTool,
	isEdgeTool,
	isLineTool,
	isOutsideDirectionTool,
	isSingleCellArrowTool,
	isSingleCellMultiArrowTool,
	isToolOfType,
	isValuedGlobalConstraint,
	toolKeyFromString,
	type TOOLID
} from '../Tools';
import { arrowConstraintFromJson, type ArrowToolI } from './ArrowConstraints';
import { cageConstraintFromJson, type CageToolI } from './CageConstraints';
import type { CloneToolI } from './CloneConstraints';
import { cornerConstraintFromJson, type CornerToolI } from './CornerConstraints';
import { edgeConstraintFromJson, type EdgeToolI } from './EdgeConstraints';
import { lineConstraintFromJson, type LineToolI } from './LineConstraints';
import {
	outsideDirectionConstraintFromJson,
	type OutsideDirectionToolI
} from './OutsideDirectionConstraints';

import {
	singleCellArrowConstraintFromJson,
	singleCellConstraintFromJson,
	singleCellMultiArrowConstraintFromJson,
	type CellArrowToolI,
	type CellMultiArrowToolI,
	type CellToolI,
	type SingleCellTool
} from './SingleCellConstraints';
import { getShapeDiff } from '../Shape/Shape';
import { getDefaultShape } from '../ElementHandlersUtils';
import { squareCellElementHandlers } from '../ElementsInfo/SquareCellElementHandlers';
import { parseShape } from '../utils';
import type { CenterCornerOrEdgeToolI } from './CenterCornerOrEdgeConstraints';
import { valuedGlobalConstraintFromJson, type ValuedGlobalToolI } from './ValuedGlobalConstraints';

export type ConstraintType =
	| CellToolI
	| CellArrowToolI
	| CellMultiArrowToolI
	| CornerToolI
	| LineToolI
	| ArrowToolI
	| CageToolI
	| CloneToolI
	| OutsideDirectionToolI
	| CenterCornerOrEdgeToolI
	| ValuedGlobalToolI;


export function updateConstraintValue<T extends ConstraintType>(constraint: T, value: string): T {
	return { ...constraint, value } as T;
}

export class LocalConstraintsDict extends Map<TOOLID, Record<string, ConstraintType>> {
	addToDict(toolId: TOOLID) {
		if (this.has(toolId)) {
			return;
		}
		this.set(toolId, {});
	}

	removeFromDict(toolId: TOOLID) {
		const elementToRemove = this.get(toolId);
		if (elementToRemove === undefined) return;
		this.delete(toolId);
	}

	getConstraint<T extends ConstraintType>(toolId: TOOLID, constraintId: string) {
		const element = this.get(toolId);
		if (!element) return null;
		const constraint = element[constraintId];
		if (!constraint) return null;
		return constraint as T;
	}

	getConstraint2<T extends ConstraintType>(constraintId: string) {
		for (const constraintRecord of this.values()) {
			const constraint = constraintRecord[constraintId];
			if (constraint) return constraint as T;
		}
		return null;
	}

	addConstraint<T extends ConstraintType>(toolId: TOOLID, constraintId: string, constraint: T) {
		const element = this.get(toolId);
		if (!element) return;

		element[constraintId] = constraint;
	}

	setConstraints<T extends ConstraintType>(toolId: TOOLID, constraints: Record<string, T>) {
		this.set(toolId, constraints);
	}

	removeConstraint(toolId: TOOLID, constraintId: string) {
		const element = this.get(toolId);
		if (!element) return;

		if (element[constraintId]) {
			delete element[constraintId];
		}
	}

	updateConstraint<T extends ConstraintType>(toolId: TOOLID, constraintId: string, constraint: T) {
		const element = this.get(toolId);
		if (!element) return;

		if (element[constraintId]) {
			element[constraintId] = constraint;
		}
	}

	toJSON() {
		const localConstraintsRecord: Record<string, unknown> = {};

		for (const [toolId, constraints] of this.entries()) {
			const toolList: unknown[] = [];
			for (const constraint of Object.values(constraints)) {
				toolList.push(constraintToJson(constraint));
			}
			if (toolList.length) {
				localConstraintsRecord[toolId] = toolList;
			}
		}
		return localConstraintsRecord;
	}

	static fromJson(data: Record<string, unknown> | undefined) {
		const local_constraints = new LocalConstraintsDict();
		if (!data) return local_constraints;
		for (const [key, constraint_list_data] of Object.entries(data)) {
			const tool = toolKeyFromString(key);
			if (tool === undefined) continue;
			if (!Object.keys(squareCellElementHandlers).includes(tool)) continue;

			const constraint_list_data2 = constraint_list_data as Record<string, unknown>[];
			for (const constraint_data of constraint_list_data2) {
				let constraint: ConstraintType | null = null;
				if (isToolOfType(tool, SIMPLE_SINGLE_CELL_CONSTRAINTS)) {
					constraint = singleCellConstraintFromJson(tool, constraint_data);
				} else if (isSingleCellArrowTool(tool)) {
					constraint = singleCellArrowConstraintFromJson(tool, constraint_data);
				} else if (isSingleCellMultiArrowTool(tool)) {
					constraint = singleCellMultiArrowConstraintFromJson(tool, constraint_data);
				} else if (isEdgeTool(tool)) {
					constraint = edgeConstraintFromJson(tool, constraint_data);
				} else if (isCornerTool(tool)) {
					constraint = cornerConstraintFromJson(tool, constraint_data);
				} else if (isLineTool(tool)) {
					constraint = lineConstraintFromJson(tool, constraint_data);
				} else if (isArrowTool(tool)) {
					constraint = arrowConstraintFromJson(tool, constraint_data);
				} else if (isCageTool(tool)) {
					constraint = cageConstraintFromJson(tool, constraint_data);
				} else if (isOutsideDirectionTool(tool)) {
					constraint = outsideDirectionConstraintFromJson(tool, constraint_data);
				} else if (isValuedGlobalConstraint(tool)) {
					constraint = valuedGlobalConstraintFromJson(tool, constraint_data);
				}

				if (constraint !== null) {
					local_constraints.addToDict(tool);
					const id = uniqueId();
					const shape = parseShape(constraint_data, tool);
					constraint.shape = shape;
					local_constraints.addConstraint(tool, id, constraint);
				}
			}
		}

		return local_constraints;
	}
}

export function findSingleCellConstraint<T extends SingleCellTool>(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	coords: GridCoordI
): [id: string, cellTool: T] | null {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as T;
		const id = entry[0];
		if (areCoordsEqual(constraint.cell, coords)) return [id, constraint];
	}
	return null;
}

export function findEdgeConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cells: GridCoordI[]
) {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as EdgeToolI;
		const match = cells.every((cell) =>
			constraint.cells.some((cell2) => areCoordsEqual(cell, cell2))
		);

		if (match) return entry;
	}
	return null;
}

export function findCornerConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	corner: GridCoordI
) {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CornerToolI;
		const _corner = constraint.cells[constraint.cells.length - 1];

		if (areCoordsEqual(corner, _corner)) return entry;
	}
	return null;
}

export function findCageConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, cageTool: CageToolI] | null {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CageToolI;
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return [entry[0], constraint];
	}
	return null;
}

export function findLineConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI
) {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as LineToolI;
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return entry;
	}
	return null;
}

export function findArrowBulbConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, arrowTool: ArrowToolI] | null {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as ArrowToolI;
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return [entry[0], constraint];
	}
	return null;
}

export function findArrowLineConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI
): { id: string; arrow: ArrowToolI; matchLineIdx: number } | null {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const [id, constraint] of Object.entries(elements)) {
		const arrow = constraint as ArrowToolI;
		const matchLineIdx = arrow.lines.findIndex((line) =>
			line.some((_cell, idx) => areCoordsEqual(_cell, cell) && idx > 0)
		);

		if (matchLineIdx >= 0)
			return {
				id,
				arrow,
				matchLineIdx
			};
	}
	return null;
}

export function findOutsideDirectionConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI,
	direction: DIRECTION
) {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as OutsideDirectionToolI;

		const id = entry[0];
		if (areCoordsEqual(cell, constraint.cell) && direction === constraint.direction) return id;
	}
	return null;
}

export function findCenterCornerOrEdgeConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI
) {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CenterCornerOrEdgeToolI;

		const id = entry[0];
		if (areCoordsEqual(cell, constraint.cell)) return id;
	}
	return null;
}

export function findCloneConstraint(
	localConstraints: LocalConstraintsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, cloneTool: CloneToolI] | null {
	const elements = localConstraints.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CloneToolI;
		const match =
			constraint.cells.some((_cell) => areCoordsEqual(_cell, cell)) ||
			constraint.cells2.some((_cell) => areCoordsEqual(_cell, cell));
		if (match) return [entry[0], constraint];
	}
	return null;
}

export function findUsedCloneLabels(localConstraints: LocalConstraintsDict, toolId: TOOLID) {
	const elements = localConstraints.get(toolId);
	const usedLabels: Set<string> = new Set();

	if (!elements) return usedLabels;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CloneToolI;
		usedLabels.add(constraint.value);
	}
	return usedLabels;
}

export function constraintToJson(constraint: ConstraintType) {
	const jsonObj: Record<string, unknown> = {};

	if ('cells' in constraint) {
		const cells = constraint['cells'].map((coords) => gridCoordToStr(coords));
		jsonObj['cells'] = cells;
	}

	if ('cells2' in constraint) {
		const cells2 = constraint['cells2'].map((coords) => gridCoordToStr(coords));
		jsonObj['cells2'] = cells2;
	}

	if ('lines' in constraint) {
		const lines = constraint['lines'].map((line) => line.map((coords) => gridCoordToStr(coords)));
		jsonObj['lines'] = lines;
	}

	if ('cell' in constraint) {
		const cell = gridCoordToStr(constraint['cell']);
		jsonObj['cell'] = cell;
	}

	if ('direction' in constraint) {
		const direction = constraint['direction'];
		jsonObj['direction'] = direction;
	}

	if ('directions' in constraint) {
		const directions = constraint['directions'];
		jsonObj['directions'] = directions;
	}

	if ('value' in constraint && constraint['value']) {
		jsonObj['value'] = constraint['value'];
	}

	if ('shape' in constraint && constraint['shape']) {
		const default_shape = getDefaultShape(constraint.toolId, squareCellElementHandlers);
		const shapeDiff = getShapeDiff(constraint.shape, default_shape);
		// console.log(shapeDiff);
		if (shapeDiff) {
			jsonObj['shape'] = shapeDiff;
		}
	}

	return jsonObj;
}
