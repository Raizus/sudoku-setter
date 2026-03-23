import {
	isCenterEdgeCornerTool,
	isCornerLineTool,
	isCornerTool,
	isDiagonalConstraint,
	isEdgeTool,
	isSingleCellTool,
	isUnderlayTool,
	TOOLS,
	type TOOLID
} from '$lib/Puzzle/Tools';
import { derived, type Readable } from 'svelte/store';
import type { SingleCellTool } from '$src/lib/Puzzle/puzzle_schema';
import type { ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import type { ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';
import { filterElements } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { stateStore } from './StateStore';

export const underlayElementsStore = derived(stateStore.elementsDictStore, ($elementsDictStore) => {
	const elements: ConstraintsElement[] = [];
	for (const [, element] of $elementsDictStore.orderedEntries()) {
		const toolId = element.tool_id;
		if (!isUnderlayTool(toolId)) continue;

		elements.push(element);
	}
	return elements;
});

/**
 * Returns a store of elements filtered by the provided function and derived from the elementsDictStore.
 * Used to create stores for different types of tools.
 * @param filter_f
 * @returns
 */
function getElementsStore(filter_f: (tool: TOOLID) => boolean): Readable<ConstraintsElement[]> {
	const store = derived(stateStore.elementsDictStore, ($elementsDictStore) => {
		const elements = filterElements($elementsDictStore, filter_f);
		return elements;
	});
	return store;
}

export function getToolStore<T extends ConstraintType>(
	tool_id: TOOLID
): Readable<Record<string, T>> {
	const store = derived(stateStore.elementsDictStore, ($elementsDictStore) => {
		for (const element of $elementsDictStore.values()) {
			if (tool_id !== element.tool_id) continue;
			const record = element.constraints as Record<string, T>;
			return record;
		}
		const record: Record<string, T> = {};
		return record;
	});
	return store;
}

export const singleCellToolsStore = getElementsStore(isSingleCellTool);

export const fogLightsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find(
		(element) => element.tool_id === TOOLS.FOG_LIGHTS
	);
	return target_element;
});

export const customFogClearingStore = derived(
	stateStore.elementsDictStore,
	($elementsDictStore) => {
		for (const element of $elementsDictStore.values()) {
			if (element.tool_id === TOOLS.CUSTOM_FOG_CLEARING) return element;
		}
		return undefined;
	}
);

export const minimumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find((element) => element.tool_id === TOOLS.MINIMUM);
	if (target_element) {
		const record = target_element.constraints;
		return record;
	}
	const record: Record<string, SingleCellTool> = {};
	return record;
});

export const maximumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find((element) => element.tool_id === TOOLS.MAXIMUM);
	if (target_element) {
		const record = target_element.constraints;
		return record;
	}
	const record: Record<string, SingleCellTool> = {};
	return record;
});

export const edgeToolsStore = getElementsStore(isEdgeTool);
export const centerCornerOrEdgeToolsStore = getElementsStore(isCenterEdgeCornerTool);
export const cornerToolsStore = getElementsStore(isCornerTool);
export const cornerLineToolsStore = getElementsStore(isCornerLineTool);
export const diagonalElementsStore = getElementsStore(isDiagonalConstraint);

export const currentElementStore: Readable<ConstraintsElement | undefined> = derived(
	[stateStore.elementsDictStore, stateStore.selectedElementIdStore],
	([$elementsDictStore, $selectedElementIdStore]) => {
		const selected_id = $selectedElementIdStore;
		if (selected_id === null) return undefined;
		const element = $elementsDictStore.get(selected_id);
		return element;
	}
);
