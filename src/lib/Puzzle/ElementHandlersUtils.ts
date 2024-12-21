import type { AbstractElementInfo } from './ElementInfo';
import { editableShapeToShape } from './Shape/Shape';
import type { TOOLID, TOOL_CATEGORIES } from './Tools';
import Fuse from 'fuse.js';

export type AbstractElementHandlers = Record<string, AbstractElementInfo>;
export type ElementHandlers<T extends AbstractElementInfo> = Record<string, T>;

export function getToolInfo<T extends AbstractElementInfo>(
	toolId: TOOLID,
	elementHandlers: ElementHandlers<T>
): T {
	const elementInfo = elementHandlers[toolId];
	if (elementInfo === undefined) throw new Error(`ElementInfo for tool ${toolId} is not defined`);

	return elementInfo;
}

export type ElementFilterFunc = (key: TOOLID, elementInfo: AbstractElementInfo) => boolean;

export function filterElements(
	filterFun: ElementFilterFunc,
	elementHandlers: AbstractElementHandlers
): { key: TOOLID; info: AbstractElementInfo }[] {
	const res = Object.entries(elementHandlers)
		.filter((entry) => filterFun(entry[1].toolId, entry[1]))
		.map((entry) => ({ key: entry[1].toolId, info: entry[1] }));
	return res;
}

function buildElementsFuse(searchableElements: { key: TOOLID; info: AbstractElementInfo }[]) {
	return new Fuse(searchableElements, {
		keys: ['info.meta.tags', 'info.meta.description', 'info.meta.categories', 'info.toolId'],
		ignoreLocation: true,
		threshold: 0.2
	});
}

export function searchElements(
	searchPattern: string,
	filterFun: ElementFilterFunc,
	elementHandlers: AbstractElementHandlers
) {
	const searchableElements = filterElements(filterFun, elementHandlers);
	if (searchPattern.length === 0) {
		return searchableElements;
	}
	return buildElementsFuse(searchableElements)
		.search(searchPattern)
		.map((result) => result.item);
}

export function getEditableShape(toolId: TOOLID, elementHandlers: AbstractElementHandlers) {
	const elementInfo = getToolInfo(toolId, elementHandlers);
	const eShape = elementInfo.shape;
	return eShape;
}

export function getDefaultShape(toolId: TOOLID, elementHandlers: AbstractElementHandlers) {
	const eShape = getEditableShape(toolId, elementHandlers);
	const shape = eShape ? editableShapeToShape(eShape) : undefined;
	return shape;
}

export function isCategory(
	category: TOOL_CATEGORIES,
	toolId: TOOLID,
	elementHandlers: AbstractElementHandlers
): boolean {
	const res = Object.entries(elementHandlers).some(
		([_toolId, elementInfo]) =>
			_toolId === toolId && elementInfo.meta?.categories.includes(category)
	);
	return res;
}
