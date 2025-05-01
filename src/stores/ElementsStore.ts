import {
	isCenterEdgeCornerTool,
	isCornerLineTool,
	isCornerTool,
	isEdgeTool,
	isSingleCellTool,
	isUnderlayTool,
	TOOLS,
	type TOOLID
} from '$lib/Puzzle/Tools';
import { derived, writable, type Readable } from 'svelte/store';
import { localConstraintsStore, toolStore } from './BoardStore';
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
} from '$src/lib/Puzzle/Constraints/LocalConstraints';
import type { CornerLineToolI } from '$src/lib/Puzzle/Constraints/CornerLineConstraints';

export type Element<T extends ConstraintType> = {
	toolId: TOOLID;
	constraints: Record<string, T>;
};

export const underlayElementsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	const elements: ConstraintsElement[] = [];
	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isUnderlayTool(toolId)) continue;

		elements.push(element);
	}
	return elements;
});

function getElementsStore<T extends ConstraintType>(
	filter_f: (tool: TOOLID) => boolean
): Readable<Element<T>[]> {
	const store = derived(localConstraintsStore, ($localConstraintsStore) => {
		const elements: Element<T>[] = [];
		for (const [toolId, element] of $localConstraintsStore.entries()) {
			if (!filter_f(toolId)) continue;
			elements.push({
				toolId,
				constraints: element.constraints as Record<string, T>
			});
		}
		return elements;
	});
	return store;
}

export function getToolStore<T extends ConstraintType>(
	tool_id: TOOLID
): Readable<Record<string, T>> {
	const store = derived(localConstraintsStore, ($localConstraintsStore) => {
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

export const singleCellToolsStore = getElementsStore<SingleCellTool>(isSingleCellTool);

export const fogLightsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find(
		(element) => element.toolId === TOOLS.FOG_LIGHTS
	);
	if (target_element) {
		const record = target_element.constraints as Record<string, CellToolI>;
		return record;
	}
	const record: Record<string, CellToolI> = {};
	return record;
});

export const minimumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find((element) => element.toolId === TOOLS.MINIMUM);
	if (target_element) {
		const record = target_element.constraints;
		return record;
	}
	const record: Record<string, SingleCellTool> = {};
	return record;
});

export const maximumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find((element) => element.toolId === TOOLS.MAXIMUM);
	if (target_element) {
		const record = target_element.constraints;
		return record;
	}
	const record: Record<string, SingleCellTool> = {};
	return record;
});

export const edgeToolsStore = getElementsStore<EdgeToolI>(isEdgeTool);
export const centerCornerOrEdgeToolsStore =
	getElementsStore<CenterCornerOrEdgeToolI>(isCenterEdgeCornerTool);
export const cornerToolsStore = getElementsStore<CornerToolI>(isCornerTool);
export const cornerLineToolsStore = getElementsStore<CornerLineToolI>(isCornerLineTool);

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
	[localConstraintsStore, toolStore],
	([$localConstraintsStore, $toolStore]) => {
		const tool_id = $toolStore;
		const element = $localConstraintsStore.get(tool_id);
		return element;
	}
);
