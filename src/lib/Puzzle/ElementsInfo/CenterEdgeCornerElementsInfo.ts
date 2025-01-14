import { defaultValueUpdater } from '$input/InputHandler';
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

export const rotationallySymmetricGalaxyCenterSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCenterCornerOrEdgeToolInputHandler(svgRef, grid, tool, {
			targets: CornerOrEdge.CLOSEST,
			valueUpdater: (oldValue: string | undefined, key: string) => {
				return defaultValueUpdater(oldValue, key, () => {
					return true;
				});
			},
			defaultValue: ''
		});
	},

	toolId: TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM,
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
			'Each circle is the center of a galaxy. The number in such a circle indicates the sum of the digits in that galaxy. (When a circle appears in the center of a cell, the corresponding number is given in the top left of the cell instead of in the circle so it can be seen after placing digits.)',
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.CENTER_CORNER_EDGE_CONSTRAINT]
	}
};

export const yinYangSumOfAdjacentShadedEdgeOrCornerInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getCenterCornerOrEdgeToolInputHandler(svgRef, grid, tool, {
			targets: CornerOrEdge.CORNER_OR_EDGE,
			valueUpdater: (oldValue: string | undefined, key: string) => {
				return defaultValueUpdater(oldValue, key, () => {
					return true;
				});
			},
			defaultValue: ''
		});
	},

	toolId: TOOLS.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER,
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
			'Numbers in circles are the sum of the digits within shaded cells that touch the circle. Only shaded cells count toward the total.',
		usage: centerCornerOrEdgeUsage(),
		tags: [],
		categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.CENTER_CORNER_EDGE_CONSTRAINT]
	}
};
