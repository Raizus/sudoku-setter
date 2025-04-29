import { areCoordsEqual, gridCoordToStr, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { DIRECTION } from '$lib/utils/directions';
import { uniqueId } from 'lodash';
import {
	SIMPLE_SINGLE_CELL_CONSTRAINTS,
	isArrowTool,
	isCageTool,
	isCenterEdgeCornerTool,
	isCornerLineTool,
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
import {
	centerCornerOrEdgeConstraintFromJson,
	type CenterCornerOrEdgeToolI
} from './CenterCornerOrEdgeConstraints';
import { valuedGlobalConstraintFromJson, type ValuedGlobalToolI } from './ValuedGlobalConstraints';
import { cornerLineConstraintFromJson, type CornerLineToolI } from './CornerLineConstraints';

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

export interface ConstraintsElement {
	toolId: TOOLID;
	constraints?: Record<string, ConstraintType>;
	enabled?: boolean;
}

export class ElementsDict extends Map<TOOLID, Record<string, ConstraintType>> {
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
		if (!this.get(toolId)) {
			this.addToDict(toolId);
		}

		const element = this.get(toolId);
		if (element) element[constraintId] = constraint;
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
		const local_constraints = new ElementsDict();
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
				} else if (isCornerLineTool(tool)) {
					constraint = cornerLineConstraintFromJson(tool, constraint_data);
				} else if (isArrowTool(tool)) {
					constraint = arrowConstraintFromJson(tool, constraint_data);
				} else if (isCageTool(tool)) {
					constraint = cageConstraintFromJson(tool, constraint_data);
				} else if (isOutsideDirectionTool(tool)) {
					constraint = outsideDirectionConstraintFromJson(tool, constraint_data);
				} else if (isValuedGlobalConstraint(tool)) {
					constraint = valuedGlobalConstraintFromJson(tool, constraint_data);
				} else if (isCenterEdgeCornerTool(tool)) {
					constraint = centerCornerOrEdgeConstraintFromJson(tool, constraint_data);
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
	elementsDict: ElementsDict,
	toolId: TOOLID,
	coords: GridCoordI
): [id: string, cellTool: T] | null {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as T;
		const id = entry[0];
		if (areCoordsEqual(constraint.cell, coords)) return [id, constraint];
	}
	return null;
}

export function findEdgeConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cells: GridCoordI[]
) {
	const elements = elementsDict.get(toolId);
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
	elementsDict: ElementsDict,
	toolId: TOOLID,
	corner: GridCoordI
) {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CornerToolI;
		const _corner = constraint.cells[constraint.cells.length - 1];

		if (areCoordsEqual(corner, _corner)) return entry;
	}
	return null;
}

export function findCageConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, cageTool: CageToolI] | null {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CageToolI;
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return [entry[0], constraint];
	}
	return null;
}

export function findLineConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
) {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as LineToolI;
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return entry;
	}
	return null;
}

export function findCornerLineConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	coord: GridCoordI
) {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CornerLineToolI;
		const match = constraint.coords.some((_coord) => areCoordsEqual(_coord, coord));

		if (match) return entry;
	}
	return null;
}

export function findArrowBulbConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, arrowTool: ArrowToolI] | null {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as ArrowToolI;
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return [entry[0], constraint];
	}
	return null;
}

export function findArrowLineConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): { id: string; arrow: ArrowToolI; matchLineIdx: number } | null {
	const elements = elementsDict.get(toolId);
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
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI,
	direction: DIRECTION
): [string, OutsideDirectionToolI] | null {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as OutsideDirectionToolI;

		const id = entry[0];
		if (areCoordsEqual(cell, constraint.cell) && direction === constraint.direction) return [id, constraint];
	}
	return null;
}

export function findCenterCornerOrEdgeConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [string, CenterCornerOrEdgeToolI] | null {
	const elements = elementsDict.get(toolId);
	if (!elements) return null;

	for (const entry of Object.entries(elements)) {
		const constraint = entry[1] as CenterCornerOrEdgeToolI;

		const id = entry[0];
		if (areCoordsEqual(cell, constraint.cell)) return [id, constraint];
	}
	return null;
}

export function findCloneConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, cloneTool: CloneToolI] | null {
	const elements = elementsDict.get(toolId);
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

export function findUsedCloneLabels(elementsDict: ElementsDict, toolId: TOOLID) {
	const elements = elementsDict.get(toolId);
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

	if ('coords' in constraint) {
		const coords = constraint['coords'];
		jsonObj['coords'] = coords;
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
