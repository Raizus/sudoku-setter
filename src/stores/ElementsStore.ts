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
import { derived, writable, type Readable } from 'svelte/store';
import { elementsDictStore, toolStore } from './BoardStore';
import type { CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
import type {
	CellArrowToolI,
	CellMultiArrowToolI,
	CellToolI,
	SingleCellTool
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import type { EdgeToolI } from '$lib/Puzzle/Constraints/EdgeConstraints';
import type { OutsideDirectionToolI } from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
import type {
	ConstraintsElement,
	ConstraintType
} from '$src/lib/Puzzle/Constraints/ElementsDict';

export type Element<T extends ConstraintType> = {
	toolId: TOOLID;
	constraints: Record<string, T>;
};

export const underlayElementsStore = derived(elementsDictStore, ($localConstraintsStore) => {
	const elements: ConstraintsElement[] = [];
	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isUnderlayTool(toolId)) continue;

		elements.push(element);
	}
	return elements;
});

function getElementsStore(filter_f: (tool: TOOLID) => boolean): Readable<ConstraintsElement[]> {
	const store = derived(elementsDictStore, ($localConstraintsStore) => {
		const elements: ConstraintsElement[] = [];
		for (const [toolId, element] of $localConstraintsStore.entries()) {
			if (!filter_f(toolId)) continue;
			elements.push(element);
		}
		return elements;
	});
	return store;
}

export function getToolStore<T extends ConstraintType>(
	tool_id: TOOLID
): Readable<Record<string, T>> {
	const store = derived(elementsDictStore, ($localConstraintsStore) => {
		for (const [toolId, element] of $localConstraintsStore.entries()) {
			if (toolId !== tool_id) continue;
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
	if (target_element) {
		const record = target_element.constraints as Record<string, CellToolI>;
		return record;
	}
	const record: Record<string, CellToolI> = {};
	return record;
});

export const customFogClearingStore = derived(elementsDictStore, ($elementsDictStore) => {
	for (const element of $elementsDictStore.values()) {
		if (element.tool_id === TOOLS.CUSTOM_FOG_CLEARING) return element;
	}
	return undefined;
});

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

// export const lineToolsStore = getToolsStore<LineToolI>(isLineTool);

export interface ToolPreview<T extends ConstraintType> {
	tool: T;
	match_id?: string;
	mode: 'add' | 'remove';
}

export const simpleCellToolPreviewStore = writable<undefined | ToolPreview<CellToolI>>(undefined);

export const singleCellArrowPreviewStore = writable<undefined | ToolPreview<CellArrowToolI>>(
	undefined
);

export const singleCellMultiArrowPreviewStore = writable<undefined | CellMultiArrowToolI>(
	undefined
);

export const edgeToolPreviewStore = writable<undefined | ToolPreview<EdgeToolI>>(undefined);

export const cornerToolPreviewStore = writable<undefined | ToolPreview<CornerToolI>>(undefined);

export const outsideDirectionToolPreviewStore = writable<undefined | OutsideDirectionToolI>(
	undefined
);

export const centerCornerOrEdgeToolPreviewStore = writable<
	undefined | ToolPreview<CenterCornerOrEdgeToolI>
>(undefined);

export const currentElementStore: Readable<ConstraintsElement | undefined> = derived(
	[elementsDictStore, toolStore],
	([$localConstraintsStore, $toolStore]) => {
		const tool_id = $toolStore;
		const element = $localConstraintsStore.get(tool_id);
		return element;
	}
);
