import type { InputHandler } from '$input/InputHandler';
import type { StateStore } from '$stores/StateStore';
import { getDirectedAdjacentCellsToolInputHandler } from './AdjacentCellArrowToolInputHandler';
import { getArrowToolInputHandler } from './ArrowToolInputHandler';
import { getCageToolInputHandler } from './CageToolInputHandler';
import { getCenterCornerOrEdgeToolInputHandler } from './CenterCornerOrEdgeInputHandler';
import { getCloneToolInputHandler } from './CloneToolInputHandler';
import { getCornerLineToolInputHandler } from './CornerLineToolInputHandler';
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
	type CornerLineToolInputOptions,
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
	stateStore: StateStore,
	options: T
) => ReturnType<GetInputHandler>;

const inputHandlerFactoryRegistry: {
	[K in keyof ToolOptionsRegistry]: InputHandlerFactory<ToolOptionsRegistry[K]>;
} = {
	[HANDLER_TOOL_TYPE.SELECTION]: (svgRef: SVGSVGElement, stateStore: StateStore) => {
		return getSelectionInputHandler(svgRef, stateStore);
	},
	[HANDLER_TOOL_TYPE.SINGLE_CELL]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: SingleCellToolOptions
	) => {
		return getSingleCellToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.SINGLE_CELL_ARROW]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: SingleCellArrowToolOptions
	) => {
		return getSingleCellArrowToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.SINGLE_CELL_MULTI_ARROW]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: SingleCellMultiArrowToolOptions
	) => {
		return getSingleCellMultiArrowToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.EDGE]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: EdgeToolOptions
	) => {
		return getEdgeToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.DIRECTED_ADJACENT_CELLS]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: DirectedAdjacentCellsToolOptions
	) => {
		return getDirectedAdjacentCellsToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.CORNER]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: CornerToolOptions
	) => {
		return getCornerToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.LINE]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: LineToolInputOptions
	) => {
		return getLineToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.ARROW]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: ArrowToolInputOptions
	) => {
		return getArrowToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.CAGE]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: CageToolInputOptions
	) => {
		return getCageToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.CLONE]: (svgRef: SVGSVGElement, stateStore: StateStore) => {
		return getCloneToolInputHandler(svgRef, stateStore);
	},
	[HANDLER_TOOL_TYPE.CENTER_CORNER_OR_EDGE]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: CenterCornerOrEdgeToolInputOptions
	) => {
		return getCenterCornerOrEdgeToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: OutsideDirectionToolInputOptions
	) => {
		return getOutsideDirectionToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.CORNER_LINE]: (
		svgRef: SVGSVGElement,
		stateStore: StateStore,
		options: CornerLineToolInputOptions
	) => {
		return getCornerLineToolInputHandler(svgRef, stateStore, options);
	},
	[HANDLER_TOOL_TYPE.PEN]: (svgRef: SVGSVGElement, stateStore: StateStore) => {
		return getPenToolInputHandler(svgRef, stateStore);
	},
	[HANDLER_TOOL_TYPE.VALUE_TOOL]: (svgRef: SVGSVGElement, stateStore: StateStore) => {
		return getSelectionInputHandler(svgRef, stateStore);
	}
};

export type GetInputHandler = (svgRef: SVGSVGElement, stateStore: StateStore) => InputHandler;

export function getInputHandlerF(options: ToolHandlerOptions): GetInputHandler | undefined {
	const factory = inputHandlerFactoryRegistry[options.type] as InputHandlerFactory<typeof options>;

	if (!factory) {
		return undefined;
	}

	return (svgRef: SVGSVGElement, stateStore: StateStore) => {
		return factory(svgRef, stateStore, options);
	};
}
