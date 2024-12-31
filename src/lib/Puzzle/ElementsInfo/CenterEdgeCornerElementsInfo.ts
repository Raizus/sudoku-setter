import { CornerOrEdge } from '$input/PointerHandlers/CellEdgeCornerPointerHandler';
import { getCenterCornerOrEdgeToolInputHandler } from '$input/ToolInputHandlers/CenterCornerOrEdgeInputHandler';
import type { SquareCellElementInfo } from '../ElementInfo';
import { RENDER_ORDER } from '../RenderOrder';
import { SHAPE_TYPES } from '../Shape/Shape';
import { TOOL_CATEGORIES, TOOLS } from '../Tools';
import { centerCornerOrEdgeUsage } from '../ToolUsage';

export const rotationallySymmetricGalaxyCenterInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCenterCornerOrEdgeToolInputHandler(svgRef, grid, tool, {
			targets: CornerOrEdge.CLOSEST
		});
	},

	toolId: TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER,
	order: RENDER_ORDER.OUTSIDE_TOOLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: 0.15 },
		strokeWidth: { editable: false, value: 0.02, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			"The dots in the grid are centers of 180 degree rotationally symmetric 'galaxies' (non-overlapping set of orthogonally connected cells).",
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.CENTER_CORNER_EDGE_CONSTRAINT]
	}
};
