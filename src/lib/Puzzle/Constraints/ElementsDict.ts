import { areCoordsEqual, gridCoordToStr, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import type { DIRECTION } from '$lib/utils/directions';
import { uniqueId } from 'lodash';
import {
	SIMPLE_SINGLE_CELL_CONSTRAINTS,
	TOOLS,
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
import { arrowConstraintFromJson } from './ArrowConstraints';
import { type ArrowToolI } from '../puzzle_schema';
import { cageConstraintFromJson } from './CageConstraints';
import { type CageToolI } from '../puzzle_schema';
import type { CloneToolI, ConstraintType } from '../puzzle_schema';
import { cornerConstraintFromJson } from './CornerConstraints';
import { type CornerToolI } from '../puzzle_schema';
import { edgeConstraintFromJson } from './EdgeConstraints';
import { type EdgeToolI } from '../puzzle_schema';
import { lineConstraintFromJson } from './LineConstraints';
import { type LineToolI } from '../puzzle_schema';
import { outsideDirectionConstraintFromJson } from './OutsideDirectionConstraints';
import { type OutsideDirectionToolI } from '../puzzle_schema';

import {
	singleCellArrowConstraintFromJson,
	singleCellConstraintFromJson,
	singleCellMultiArrowConstraintFromJson
} from './SingleCellConstraints';
import { type SingleCellTool } from '../puzzle_schema';
import { getShapeDiff } from '../Shape/Shape';
import { getDefaultShape } from '../ElementHandlersUtils';
import { elementInfoRegistry } from '../ElementsInfo/ElementInfoRegistry';
import { parseShape } from '../utils';
import { centerCornerOrEdgeConstraintFromJson } from './CenterCornerOrEdgeConstraints';
import { type CenterCornerOrEdgeToolI } from '../puzzle_schema';
import { valuedGlobalConstraintFromJson } from './ValuedGlobalConstraints';
import { cornerLineConstraintFromJson } from './CornerLineConstraints';
import { type CornerLineToolI } from '../puzzle_schema';
import { variableConstraintFromJson } from './VariableConstraints';
import { type VariableConstraintI } from '../puzzle_schema';
import type { ConstraintsElement } from '../puzzle_schema';

export function updateConstraintValue<T extends ConstraintType>(constraint: T, value: string): T {
	return { ...constraint, value } as T;
}

export function updateConstraintName(
	constraint: VariableConstraintI,
	name: string
): VariableConstraintI {
	return { ...constraint, name };
}

function constraintFromJson(
	tool: TOOLID,
	constraint_data: Record<string, unknown>
): ConstraintType | null {
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
	} else if (tool === TOOLS.VARIABLE_CONSTRAINT) {
		constraint = variableConstraintFromJson(constraint_data);
	} else if (isCenterEdgeCornerTool(tool)) {
		constraint = centerCornerOrEdgeConstraintFromJson(tool, constraint_data);
	}
	return constraint;
}

export interface ElementData {
	tool_id: TOOLID;
	name?: string;
	constraints: Record<string, unknown>[];
	negative_constraints?: Record<string, boolean>;
	disabled?: boolean;
}

export class ElementsDict extends Map<number, ConstraintsElement> {
	id_count: number = 0;
	order: number[] = [];

	addElementToDict(element: ConstraintsElement) {
		const element_id = this.id_count;
		this.set(this.id_count, element);
		this.order.push(this.id_count);
		this.id_count += 1;

		return element_id;
	}

	*orderedEntries(): Generator<[number, ConstraintsElement], void, unknown> { 
		for (const element_id of this.order) {
			const element = this.get(element_id);
			if (element) {
				yield [element_id, element];
			}
		}
	}

	findElementsByTool(toolId: TOOLID): ConstraintsElement[] {
		const elements: ConstraintsElement[] = [];
		for (const element of this.values()) {
			if (element.tool_id === toolId) {
				elements.push(element);
			}
		}
		return elements;
	}

	hasTool(toolId: TOOLID): boolean {
		for (const element of this.values()) {
			if (element.tool_id === toolId) return true;
		}
		return false;
	}

	removeFromDict(element_id: number) {
		const elementToRemove = this.get(element_id);
		if (elementToRemove === undefined) return;
		this.delete(element_id);
		const idx = this.order.indexOf(element_id);
		this.order.splice(idx, 1);
		return [element_id, elementToRemove];
	}

	getConstraint<T extends ConstraintType>(element_id: number, constraintId: string) {
		const element = this.get(element_id);
		if (!element || !element.constraints) return null;
		const constraint = element.constraints[constraintId];
		if (!constraint) return null;
		return constraint as T;
	}

	getConstraint2<T extends ConstraintType>(constraintId: string) {
		for (const element of this.values()) {
			if (!element.constraints) continue;
			const constraint = element.constraints[constraintId];
			if (constraint) return constraint as T;
		}
		return null;
	}

	addConstraint<T extends ConstraintType>(element_id: number, constraintId: string, constraint: T) {
		if (!this.get(element_id)) {
			const element: ConstraintsElement = { tool_id: constraint.toolId, constraints: {} };
			this.addElementToDict(element);
		}

		const element = this.get(element_id);
		if (!element || !element.constraints) return;

		element.constraints[constraintId] = constraint;
	}

	setElement(element_id: number, element: ConstraintsElement) {
		this.set(element_id, element);
		this.order.push(element_id);
	}

	moveElementUp(element_id: number) { 
		const idx = this.order.indexOf(element_id);
		if (idx <= 0) return;
		[this.order[idx - 1], this.order[idx]] = [this.order[idx], this.order[idx - 1]];
	}

	moveElementDown(element_id: number) { 
		const idx = this.order.indexOf(element_id);
		if (idx === -1 || idx >= this.order.length - 1) return;
		[this.order[idx + 1], this.order[idx]] = [this.order[idx], this.order[idx + 1]];
	}

	enableDisableElement(element_id: number, value: boolean) { 
		const element = this.get(element_id);
		if (!element) return;
		element.disabled = value;
	}

	removeConstraint(element_id: number, constraintId: string) {
		const element = this.get(element_id);
		if (!element || !element.constraints) return;

		if (element.constraints[constraintId]) {
			delete element.constraints[constraintId];
		}
	}

	updateConstraint<T extends ConstraintType>(
		element_id: number,
		constraintId: string,
		constraint: T
	) {
		const element = this.get(element_id);
		if (!element || !element.constraints) return;

		if (element.constraints[constraintId]) {
			element.constraints[constraintId] = constraint;
		}
	}

	toJSON() {
		const elements_data: ElementData[] = [];

		for (const [, element] of this.entries()) {
			const constraints: Record<string, unknown>[] = [];
			if (element.constraints) {
				for (const constraint of Object.values(element.constraints)) {
					constraints.push(constraintToJson(constraint));
				}
			}
			const element_data: ElementData = {
				tool_id: element.tool_id,
				constraints
			};
			if (element.negative_constraints) {
				for (const [neg_tool_id, value] of Object.entries(element.negative_constraints)) {
					if (!value) continue;
					if (!element_data.negative_constraints) element_data.negative_constraints = {};
					element_data.negative_constraints[neg_tool_id] = value;
				}
			}
			elements_data.push(element_data);
		}
		return elements_data;
	}

	static fromJson(data: ElementData[] | undefined) {
		const local_constraints = new ElementsDict();
		if (!data) return local_constraints;
		for (const element_data of data) {
			// read tool_id and verify tool is valid and defined in the element handlers
			const tool_id_str = element_data['tool_id'];
			if (typeof tool_id_str !== 'string') throw TypeError('tool_id_str must be of type string.');
			const tool = toolKeyFromString(tool_id_str);
			if (tool === undefined) continue;
			if (!Object.keys(elementInfoRegistry).includes(tool)) {
				console.log(`tool ${tool} not defined in squareCellElementHandlers`);
				continue;
			}

			// add element
			const element: ConstraintsElement = { tool_id: tool, constraints: {} };
			const element_id = local_constraints.addElementToDict(element);
			if (!element) continue;

			// parse negative constraints
			const neg_constraints_data = element_data['negative_constraints'];
			if (neg_constraints_data) {
				element.negative_constraints = {};
				for (const [neg_const_id, value] of Object.entries(neg_constraints_data)) {
					element.negative_constraints[neg_const_id] = value;
				}
			}

			// parse constraints
			const constraints_data = element_data['constraints'];
			for (const constraint_data of constraints_data) {
				const constraint = constraintFromJson(tool, constraint_data);

				if (constraint !== null) {
					const c_id = uniqueId();
					const shape = parseShape(constraint_data, tool);
					constraint.shape = shape;
					local_constraints.addConstraint(element_id, c_id, constraint);
				}
			}
		}

		return local_constraints;
	}
}

function* constraintGenerator<T extends ConstraintType>(
	elementsDict: ElementsDict,
	tool_id: TOOLID
): Generator<[string, T], void, unknown> {
	for (const element of elementsDict.values()) {
		if (element.tool_id !== tool_id) continue;
		if (!element.constraints) continue;
		for (const [c_id, constraint] of Object.entries(element.constraints)) {
			yield [c_id, constraint as T];
		}
	}
}

export function findSingleCellConstraint<T extends SingleCellTool>(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	coords: GridCoordI
): [id: string, cellTool: T] | null {
	for (const [id, constraint] of constraintGenerator<T>(elementsDict, toolId)) {
		if (areCoordsEqual(constraint.cell, coords)) return [id, constraint];
	}
	return null;
}

export function findEdgeConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cells: GridCoordI[]
): [id: string, edgeTool: EdgeToolI] | null {
	for (const [id, constraint] of constraintGenerator<EdgeToolI>(elementsDict, toolId)) {
		const match = cells.every((cell) =>
			constraint.cells.some((cell2) => areCoordsEqual(cell, cell2))
		);

		if (match) return [id, constraint];
	}
	return null;
}

export function findCornerConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	corner: GridCoordI
): [id: string, cornerTool: CornerToolI] | null {
	for (const [id, constraint] of constraintGenerator<CornerToolI>(elementsDict, toolId)) {
		if (areCoordsEqual(constraint.cells[constraint.cells.length - 1], corner))
			return [id, constraint];
	}
	return null;
}

export function findCageConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, cageTool: CageToolI] | null {
	for (const [id, constraint] of constraintGenerator<CageToolI>(elementsDict, toolId)) {
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));
		if (match) return [id, constraint];
	}
	return null;
}

export function findLineConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, lineTool: LineToolI] | null {
	for (const [id, constraint] of constraintGenerator<LineToolI>(elementsDict, toolId)) {
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));
		if (match) return [id, constraint];
	}
	return null;
}

export function findCornerLineConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	coord: GridCoordI
): [id: string, cornerLineTool: CornerLineToolI] | null {
	for (const [id, constraint] of constraintGenerator<CornerLineToolI>(elementsDict, toolId)) {
		const match = constraint.coords.some((_coord) => areCoordsEqual(_coord, coord));

		if (match) return [id, constraint];
	}
	return null;
}

export function findArrowBulbConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, arrowTool: ArrowToolI] | null {
	for (const [id, constraint] of constraintGenerator<ArrowToolI>(elementsDict, toolId)) {
		const match = constraint.cells.some((_cell) => areCoordsEqual(_cell, cell));

		if (match) return [id, constraint];
	}
	return null;
}

export function findArrowLineConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): { id: string; arrow: ArrowToolI; matchLineIdx: number } | null {
	for (const [id, constraint] of constraintGenerator<ArrowToolI>(elementsDict, toolId)) {
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
): [id: string, outsideDirectionTool: OutsideDirectionToolI] | null {
	for (const [id, constraint] of constraintGenerator<OutsideDirectionToolI>(elementsDict, toolId)) {
		if (areCoordsEqual(cell, constraint.cell) && direction === constraint.direction)
			return [id, constraint];
	}
	return null;
}

export function findCenterCornerOrEdgeConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, centerCornerOrEdgeTool: CenterCornerOrEdgeToolI] | null {
	for (const [id, constraint] of constraintGenerator<CenterCornerOrEdgeToolI>(
		elementsDict,
		toolId
	)) {
		if (areCoordsEqual(cell, constraint.cell)) return [id, constraint];
	}
	return null;
}

export function findCloneConstraint(
	elementsDict: ElementsDict,
	toolId: TOOLID,
	cell: GridCoordI
): [id: string, cloneTool: CloneToolI] | null {
	for (const [id, constraint] of constraintGenerator<CloneToolI>(elementsDict, toolId)) {
		const match =
			constraint.cells.some((_cell) => areCoordsEqual(_cell, cell)) ||
			constraint.cells2.some((_cell) => areCoordsEqual(_cell, cell));
		if (match) return [id, constraint];
	}
	return null;
}

export function findUsedCloneLabels(elementsDict: ElementsDict, toolId: TOOLID) {
	const usedLabels: Set<string> = new Set();

	for (const [, constraint] of constraintGenerator<CloneToolI>(elementsDict, toolId)) {
		usedLabels.add(constraint.value);
	}
	return usedLabels;
}

export function constraintToJson(constraint: ConstraintType): Record<string, unknown> {
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

	if ('name' in constraint && constraint['name']) {
		jsonObj['name'] = constraint['name'];
	}

	if ('shape' in constraint && constraint['shape']) {
		const default_shape = getDefaultShape(constraint.toolId, elementInfoRegistry);
		const shapeDiff = getShapeDiff(constraint.shape, default_shape);
		// console.log(shapeDiff);
		if (shapeDiff) {
			jsonObj['shape'] = shapeDiff;
		}
	}

	return jsonObj;
}

/**
 * Filters elements from an ElementsDict based on a predicate function.
 * @param elements_dict - The dictionary of constraint elements to filter
 * @param filter_f - A predicate function that determines whether to include an element based on its tool ID
 * @returns An array of constraint elements that pass the filter predicate
 */
export function filterElements(
	elements_dict: ElementsDict,
	filter_f: (tool: TOOLID) => boolean
): ConstraintsElement[] {
	const elements: ConstraintsElement[] = [];
	for (const element of elements_dict.values()) {
		if (!filter_f(element.tool_id)) continue;
		elements.push(element);
	}
	return elements;
}
