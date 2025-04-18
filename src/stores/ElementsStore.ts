import {
	isArrowTool,
	isCageTool,
	isCenterEdgeCornerTool,
	isCloneTool,
	isCornerLineTool,
	isCornerTool,
	isEdgeTool,
	isLineTool,
	isOutsideDirectionTool,
	isSingleCellTool,
	TOOLS,
	type TOOLID
} from '$lib/Puzzle/Tools';
import { derived, writable, type Readable } from 'svelte/store';
import { localConstraintsStore } from './BoardStore';
import type { LineToolI } from '$lib/Puzzle/Constraints/LineConstraints';
import type { CageToolI } from '$lib/Puzzle/Constraints/CageConstraints';
import type { CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
import type { CloneToolI } from '$lib/Puzzle/Constraints/CloneConstraints';
import type { ArrowToolI } from '$lib/Puzzle/Constraints/ArrowConstraints';
import type {
	CellArrowToolI,
	CellMultiArrowToolI,
	CellToolI,
	SingleCellTool
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import type { EdgeToolI } from '$lib/Puzzle/Constraints/EdgeConstraints';
import type { OutsideDirectionToolI } from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
import type { ConstraintType } from '$src/lib/Puzzle/Constraints/LocalConstraints';
import type { CornerLineToolI } from '$src/lib/Puzzle/Constraints/CornerLineConstraints';

export type Elements<T extends ConstraintType> = {
	toolId: TOOLID;
	element: Record<string, T>;
};

function getToolsStore<T extends ConstraintType>(
	filter_f: (tool: TOOLID) => boolean
): Readable<Elements<T>[]> {
	const store = derived(localConstraintsStore, ($localConstraintsStore) => {
		const elements: Elements<T>[] = [];
		for (const [toolId, element] of $localConstraintsStore.entries()) {
			if (!filter_f(toolId)) continue;
			elements.push({
				toolId,
				element: element as Record<string, T>
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
			const record = element as Record<string, T>;
			return record;
		}
		const record: Record<string, T> = {};
		return record;
	});
	return store;
}

export const singleCellToolsStore = getToolsStore<SingleCellTool>(isSingleCellTool);

export const fogLightsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find(
		(element) => element.toolId === TOOLS.FOG_LIGHTS
	);
	if (target_element) {
		const record = target_element.element as Record<string, CellToolI>;
		return record;
	}
	const record: Record<string, CellToolI> = {};
	return record;
});

export const minimumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find((element) => element.toolId === TOOLS.MINIMUM);
	if (target_element) {
		const record = target_element.element;
		return record;
	}
	const record: Record<string, SingleCellTool> = {};
	return record;
});

export const maximumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find((element) => element.toolId === TOOLS.MAXIMUM);
	if (target_element) {
		const record = target_element.element;
		return record;
	}
	const record: Record<string, SingleCellTool> = {};
	return record;
});

export const edgeToolsStore = getToolsStore<EdgeToolI>(isEdgeTool);
export const centerCornerOrEdgeToolsStore =
	getToolsStore<CenterCornerOrEdgeToolI>(isCenterEdgeCornerTool);
export const cornerToolsStore = getToolsStore<CornerToolI>(isCornerTool);
export const lineToolsStore = getToolsStore<LineToolI>(isLineTool);
export const cornerLineToolsStore = getToolsStore<CornerLineToolI>(isCornerLineTool);
export const arrowToolsStore = getToolsStore<ArrowToolI>(isArrowTool);
export const cageToolsStore = getToolsStore<CageToolI>(isCageTool);
export const cloneToolsStore = getToolsStore<CloneToolI>(isCloneTool);
export const outsideDirectionToolsStore =
	getToolsStore<OutsideDirectionToolI>(isOutsideDirectionTool);

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
