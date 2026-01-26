import type { InputHandler } from '$input/InputHandler';
import type { Grid } from '$src/lib/Puzzle/Grid/Grid';
import type { TOOLID } from '$src/lib/Puzzle/Tools';
import { getDirectedAdjacentCellsToolInputHandler } from './AdjacentCellArrowToolInputHandler';
import { getArrowToolInputHandler } from './ArrowToolInputHandler';
import { getCageToolInputHandler } from './CageToolInputHandler';
import { getCenterCornerOrEdgeToolInputHandler } from './CenterCornerOrEdgeInputHandler';
import { getCloneToolInputHandler } from './CloneToolInputHandler';
import { getCornerToolInputHandler } from './CornerToolInputHandler';
import { getEdgeToolInputHandler } from './EdgeToolInputHandler';
import { getLineToolInputHandler } from './LineToolInputHandler';
import { getOutsideDirectionToolInputHandler } from './OutsideDirectionInputHandler';
import { getPenToolInputHandler } from './PenToolInputHandler';
import { getSelectionInputHandler } from './SelectionInputHandler';
import { getSingleCellArrowToolInputHandler } from './SingleCellArrowToolInputHandler';
import { getSingleCellMultiArrowToolInputHandler } from './SingleCellMultiArrowToolInputHandler';
import { getSingleCellToolInputHandler } from './SingleCellToolInputHandler';
import {
	HANDLER_TOOL_TYPE,
	type ArrowToolInputOptions,
	type CageToolInputOptions,
	type CenterCornerOrEdgeToolInputOptions,
	type CornerToolOptions,
	type DirectedAdjacentCellsToolOptions,
	type EdgeToolOptions,
	type LineToolInputOptions,
	type OutsideDirectionToolInputOptions,
	type SingleCellArrowToolOptions,
	type SingleCellMultiArrowToolOptions,
	type SingleCellToolOptions,
	type ToolHandlerOptions,
	type ToolOptionsI,
	type ToolOptionsRegistry
} from './types';

export type InputHandlerFactory<T extends ToolOptionsI> = (
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options: T
) => ReturnType<GetInputHandler>;

const inputHandlerFactoryRegistry: {
	[K in keyof ToolOptionsRegistry]: InputHandlerFactory<ToolOptionsRegistry[K]>;
} = {
	[HANDLER_TOOL_TYPE.SELECTION]: (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => {
		return getSelectionInputHandler(svgRef, grid, tool);
	},
	[HANDLER_TOOL_TYPE.SINGLE_CELL]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: SingleCellToolOptions
	) => {
		return getSingleCellToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: SingleCellArrowToolOptions
	) => {
		return getSingleCellArrowToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: SingleCellMultiArrowToolOptions
	) => {
		return getSingleCellMultiArrowToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.EDGE]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: EdgeToolOptions
	) => {
		return getEdgeToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.DIRECTED_ADJACENT_CELLS]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: DirectedAdjacentCellsToolOptions
	) => {
		return getDirectedAdjacentCellsToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.CORNER]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: CornerToolOptions
	) => {
		return getCornerToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.LINE]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: LineToolInputOptions
	) => {
		return getLineToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.ARROW]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: ArrowToolInputOptions
	) => {
		return getArrowToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.CAGE]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: CageToolInputOptions
	) => {
		return getCageToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.CLONE]: (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => {
		return getCloneToolInputHandler(svgRef, grid, tool);
	},
	[HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: CenterCornerOrEdgeToolInputOptions
	) => {
		return getCenterCornerOrEdgeToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION]: (
		svgRef: SVGSVGElement,
		grid: Grid,
		tool: TOOLID,
		options: OutsideDirectionToolInputOptions
	) => {
		return getOutsideDirectionToolInputHandler(svgRef, grid, tool, options);
	},
	[HANDLER_TOOL_TYPE.PEN]: (svgRef: SVGSVGElement, grid: Grid) => {
		return getPenToolInputHandler(svgRef, grid);
	},
	[HANDLER_TOOL_TYPE.VALUE_TOOL]: (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => {
		return getSelectionInputHandler(svgRef, grid, tool);
	}
};

export type GetInputHandler = (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => InputHandler;

export function getInputHandlerF(options: ToolHandlerOptions): GetInputHandler | undefined {
	const factory = inputHandlerFactoryRegistry[options.type] as InputHandlerFactory<typeof options>;

	if (!factory) {
		return undefined;
	}

	return (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => {
		return factory(svgRef, grid, tool, options);
	};
}