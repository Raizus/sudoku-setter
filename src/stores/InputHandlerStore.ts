import type { GetInputHandler, InputHandler } from '$src/lib/InputHandlers/InputHandler';
import { getToolInfo } from '$lib/Puzzle/ElementHandlersUtils';
import { derived, writable } from 'svelte/store';
import { gridStore, svgRefStore, toolStore } from './BoardStore';
import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
import { HANDLER_TOOL_TYPE, type ToolHandlerOptions, type ToolModeT } from '$input/ToolInputHandlers/types';
import { getArrowToolInputHandler } from '$input/ToolInputHandlers/ArrowToolInputHandler';
import type { Grid } from '$src/lib/Puzzle/Grid/Grid';
import type { TOOLID } from '$src/lib/Puzzle/Tools';
import { getLineToolInputHandler } from '$input/ToolInputHandlers/LineToolInputHandler';
import { getSingleCellToolInputHandler } from '$input/ToolInputHandlers/SingleCellToolInputHandler';
import { getCenterCornerOrEdgeToolInputHandler } from '$input/ToolInputHandlers/CenterCornerOrEdgeInputHandler';
import { getOutsideDirectionToolInputHandler } from '$input/ToolInputHandlers/OutsideDirectionInputHandler';
import { getCageToolInputHandler } from '$input/ToolInputHandlers/CageToolInputHandler';
import { getSelectionInputHandler } from '$input/ToolInputHandlers/SelectionInputHandler';
import { getSingleCellArrowToolInputHandler } from '$input/ToolInputHandlers/SingleCellArrowToolInputHandler';
import { getSingleCellMultiArrowToolInputHandler } from '$input/ToolInputHandlers/SingleCellMultiArrowToolInputHandler';
import { getEdgeToolInputHandler } from '$input/ToolInputHandlers/EdgeToolInputHandler';
import { getCornerToolInputHandler } from '$input/ToolInputHandlers/CornerToolInputHandler';
import { getPenToolInputHandler } from '$input/ToolInputHandlers/PenToolInputHandler';
import { getCloneToolInputHandler } from '$input/ToolInputHandlers/CloneToolInputHandler';
import { getDirectedAdjacentCellsToolInputHandler } from '$input/ToolInputHandlers/AdjacentCellArrowToolInputHandler';

export function getInputHandlerF(
	options: ToolHandlerOptions
): GetInputHandler | undefined {
	if (options.type === HANDLER_TOOL_TYPE.SELECTION) {
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getSelectionInputHandler(svgRef, grid, tool);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.SINGLE_CELL) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getSingleCellToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getSingleCellArrowToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getSingleCellMultiArrowToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.EDGE) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getEdgeToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.DIRECTED_ADJACENT_CELLS) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getDirectedAdjacentCellsToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.CORNER) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getCornerToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.LINE) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getLineToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.ARROW) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getArrowToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.CAGE) {
		const options2 = options;
		console.log("getInpuHandler, cage")
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getCageToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.CLONE) {
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getCloneToolInputHandler(svgRef, grid, tool);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getCenterCornerOrEdgeToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION) {
		const options2 = options;
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) {
			return getOutsideDirectionToolInputHandler(svgRef, grid, tool, options2);
		}
		return getInputHandler;
	} else if (options.type === HANDLER_TOOL_TYPE.PEN) {
		function getInputHandler(svgRef: SVGSVGElement, grid: Grid) {
			return getPenToolInputHandler(svgRef, grid);
		}
		return getInputHandler;
	}
	return undefined;
}

export const InputHandlerStore = derived<
	[typeof svgRefStore, typeof gridStore, typeof toolStore],
	InputHandler | undefined
>([svgRefStore, gridStore, toolStore], ([$svgRefStore, $gridStore, $toolStore]) => {
	const toolInfo = getToolInfo($toolStore, squareCellElementHandlers);
	if (toolInfo === undefined) {
		console.warn(`Element handler for ${$toolStore} is not defined`);
		return undefined;
	}
	if ($svgRefStore === null) return undefined;

	const inputOpts = toolInfo.inputOptions;	
	const getInputHandler = inputOpts ? getInputHandlerF(inputOpts) : undefined;
	if (!getInputHandler) return undefined;
	const inputHandler = getInputHandler($svgRefStore, $gridStore, $toolStore);

	// const inputHandler = toolInfo.getInputHandler
	// 	? toolInfo.getInputHandler($svgRefStore, $gridStore, $toolStore)
	// 	: undefined;
	return inputHandler;
});

export const toolModeStore = writable<ToolModeT>(undefined);