import { isArrowTool, isCageTool, isCloneTool, isCornerTool, isEdgeTool, isLineTool, isOutsideDirectionTool, isSingleCellTool, TOOLS, type TOOLID } from "$lib/Puzzle/Tools";
import { derived } from "svelte/store";
import { localConstraintsStore } from './BoardStore';
import type { LineToolI } from "$lib/Puzzle/Constraints/LineConstraints";
import type { CageToolI } from "$lib/Puzzle/Constraints/CageConstraints";
import type { CornerToolI } from "$lib/Puzzle/Constraints/CornerConstraints";
import type { CloneToolI } from "$lib/Puzzle/Constraints/CloneConstraints";
import type { ArrowToolI } from "$lib/Puzzle/Constraints/ArrowConstraints";
import type { SingleCellTool } from "$lib/Puzzle/Constraints/SingleCellConstraints";
import type { EdgeToolI } from "$lib/Puzzle/Constraints/EdgeConstraints";
import type { OutsideDirectionToolI } from "$lib/Puzzle/Constraints/OutsideDirectionConstraints";

type SingleCellElement = {
	toolId: TOOLID;
	element: Record<string, SingleCellTool>;
};

export const singleCellToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	const singleCellElements: SingleCellElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isSingleCellTool(toolId)) continue;
		singleCellElements.push({
			toolId,
			element: element as Record<string, SingleCellTool>
		});
	}
	return singleCellElements;
});

export const minimumConstraintsStore = derived(singleCellToolsStore, ($singleCellToolsStore) => {
	const target_element = $singleCellToolsStore.find(element => element.toolId === TOOLS.MINIMUM);
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

export const edgeToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	type EdgeElement = {
		toolId: TOOLID;
		element: Record<string, EdgeToolI>;
	};
	const edgeElements: EdgeElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isEdgeTool(toolId)) continue;
		edgeElements.push({
			toolId,
			element: element as Record<string, EdgeToolI>
		});
	}
	return edgeElements;
});

export const cornerToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	type EdgeElement = {
		toolId: TOOLID;
		element: Record<string, CornerToolI>;
	};
	const cornerElements: EdgeElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isCornerTool(toolId)) continue;
		cornerElements.push({
			toolId,
			element: element as Record<string, CornerToolI>
		});
	}
	return cornerElements;
});

export const lineToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	type LineElement = {
		toolId: TOOLID;
		element: Record<string, LineToolI>;
	};
	const LineElements: LineElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isLineTool(toolId)) continue;
		LineElements.push({
			toolId,
			element: element as Record<string, LineToolI>
		});
	}
	// console.log(LineElements);
	return LineElements;
});

export const arrowToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	type ArrowElement = {
		toolId: TOOLID;
		element: Record<string, ArrowToolI>;
	};
	const arrowElements: ArrowElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isArrowTool(toolId)) continue;
		arrowElements.push({
			toolId,
			element: element as Record<string, ArrowToolI>
		});
	}
	return arrowElements;
});

export const cageToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	type CageElement = {
		toolId: TOOLID;
		element: Record<string, CageToolI>;
	};
	const cageElements: CageElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isCageTool(toolId)) continue;
		cageElements.push({
			toolId,
			element: element as Record<string, CageToolI>
		});
	}
	return cageElements;
});

export const cloneToolsStore = derived(localConstraintsStore, ($localConstraintsStore) => {
	type CloneElement = {
		toolId: TOOLID;
		element: Record<string, CloneToolI>;
	};
	const cloneElements: CloneElement[] = [];

	for (const [toolId, element] of $localConstraintsStore.entries()) {
		if (!isCloneTool(toolId)) continue;
		cloneElements.push({
			toolId,
			element: element as Record<string, CloneToolI>
		});
	}
	return cloneElements;
});

export const outsideDirectionToolsStore = derived(
	localConstraintsStore,
	($localConstraintsStore) => {
		type OutsideDirectionElement = {
			toolId: TOOLID;
			element: Record<string, OutsideDirectionToolI>;
		};
		const outsideDirectionElements: OutsideDirectionElement[] = [];

		for (const [toolId, element] of $localConstraintsStore.entries()) {
			if (!isOutsideDirectionTool(toolId)) continue;
			outsideDirectionElements.push({
				toolId,
				element: element as Record<string, OutsideDirectionToolI>
			});
		}
		return outsideDirectionElements;
	}
);

