import { TOOLS, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
import { SHAPE_TYPES, type EditableShapeI } from '$lib/Puzzle/Shape/Shape';
import {
	defaultValidateValueOnInput,
	defaultValueUpdater,
	type ValueValidatorOptions
} from '$src/lib/InputHandlers/InputHandler';
import { RENDER_ORDER } from '../RenderOrder';
import { getEdgeToolInputHandler } from '$src/lib/InputHandlers/ToolInputHandlers/EdgeToolInputHandler';
import type { SquareCellElementInfo } from '../ElementInfo';

const edgeDefaultCategories = [
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.EDGE_TOOL
];

const typableEdgeDefaultCategories = [
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.LOCAL_CONSTRAINT,
	TOOL_CATEGORIES.TYPABLE_TOOL,
	TOOL_CATEGORIES.EDGE_TOOL
];

const EDGE_R_1 = 0.15;
const EDGE_STROKE_WIDTH_1 = 0.02;

const DEFAULT_WHITE_CIRCLE: EditableShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: { editable: true, value: EDGE_R_1, lb: 0, ub: 1, step: 0.01 },
	strokeWidth: { editable: true, value: EDGE_STROKE_WIDTH_1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	fill: { editable: true, value: 'var(--grid-background-color)' }
};

const DEFAULT_BORDER_LINE: EditableShapeI = {
	type: SHAPE_TYPES.BORDER_LINE,
	strokeWidth: { editable: true, value: 0.1, lb: 0, ub: 1, step: 0.025 },
	stroke: { editable: true, value: 'black' },
	opacity: { editable: true, value: 0.9 }
};

export function validateRatioValue(value: string, maxLength = 1): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: false,
		allowNegatives: false
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function validateEdgeValue(value: string, maxLength = 3): boolean {
	const options: ValueValidatorOptions = {
		maxLength: maxLength,
		allowSymbolicVariables: true,
		allowInequalities: true,
		allowNegatives: true
	};
	const valid = defaultValidateValueOnInput(value, options);
	return valid;
}

export function validateXVValue(value: string): boolean {
	if (value.length > 1) return false;
	if (/^[vVxX]$/.test(value)) return true;

	return false;
}

export function defaultEdgeValueUpdater(
	oldValue: string | undefined,
	key: string,
	validatorFunc: (val: string) => boolean
): string | undefined {
	return defaultValueUpdater(oldValue, key, validatorFunc);
}

export function XVValueUpdater(oldValue: string | undefined, key: string): string | undefined {
	if (oldValue === undefined) return 'V';

	if (!validateXVValue(key)) {
		return oldValue;
	}
	return key.toUpperCase();
}

export function validateInequalityValue(value: string): boolean {
	if (value.length > 1) return false;
	if (/^[<>]$/.test(value)) return true;

	return false;
}

export function inequalityValueUpdater(
	oldValue: string | undefined,
	key: string
): string | undefined {
	if (oldValue === undefined) return '<';

	if (!validateInequalityValue(key)) {
		return oldValue;
	}
	return key;
}

export const ratioInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateRatioValue)
		});
	},

	toolId: TOOLS.RATIO,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'black' },
		fontColor: { editable: false, value: 'white' }
	},

	meta: {
		description:
			'Cells separated by a black dot have a 1:2 ratio or a 1:X ratio if the circle has value X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const differenceInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.DIFFERENCE,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'Numbers separated by a white circle are consecutive. Cells separated by a white circle with a number X must have a difference of X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const edgeSumInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.EDGE_SUM,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(96, 96, 255, 0.8)' }
	},

	meta: {
		description:
			'Cells separated by a transparent blue dot marked with an X have a fixed sum of X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const xvInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: XVValueUpdater,
			defaultValue: 'V'
		});
	},

	toolId: TOOLS.XV,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.TEXT_ONLY,
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fontSize: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description: 'Two cells joined by X must sum to 10. Two cells joined by a V must sum to 5.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const edgeInequalityInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: inequalityValueUpdater,
			defaultValue: '<'
		});
	},

	toolId: TOOLS.EDGE_INEQUALITY,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.TEXT_ONLY,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fontSize: { editable: false, value: 0.3 },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'An inequality sign that separates two cells points to the lower of the two digits.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const edgeProductInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.EDGE_PRODUCT,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(253, 79, 79, 0.5)' }
	},

	meta: {
		description:
			'Cells that share an edge separated by a transparent red dot marked with an X have a fixed product of X.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const edgeModuloInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.EDGE_MODULO,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(253, 175, 49, 0.5)' }
	},

	meta: {
		description:
			'Cells that share an edge separated by a transparent orange circle marked with an X shows the remainder when the bigger number is divided by the smaller number.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const edgeFactorInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.EDGE_FACTOR,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		...DEFAULT_WHITE_CIRCLE,
		fill: { editable: false, value: 'rgba(251, 251, 40, 0.5)' }
	},

	meta: {
		description:
			'For two cells that share an edge separated by a transparent yellow dot, one must be divisible by the other.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const xyDifferencesInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.XY_DIFFERENCES,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.POLYGON,
		n: { editable: false, value: 4 },
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: EDGE_STROKE_WIDTH_1, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'black' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'If two cells are separated by a diamond, the digits must exhibit a difference equal to the leftmost or topmost digit sharing a row or column with them. For example, the difference between R9C34 = R9C1, and the difference between R23C1 = R1C1.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const yinYangWhiteKropkiInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_WHITE_KROPKI,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'Cells separated by a dot indicate that the two connected cells have the same Yin Yang shading and their digits are consecutive.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const yinYangKropkiInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.YIN_YANG_KROPKI,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.CIRCLE,
		r: { editable: false, value: EDGE_R_1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fill: { editable: false, value: 'lightblue' },
		opacity: { editable: false, value: 0.2 },
		fontColor: { editable: false, value: 'white' }
	},

	meta: {
		description:
			'Cells separated by a a light blue transparent dot indicate that the two connected cells have the same Yin Yang shading. If a grey dot is between two unshaded cells their digits are in a 1:2 ratio; if a grey dot is between two shaded cells, their digits are consecutive.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const unknownRegionBorderInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.UNKNOWN_REGION_BORDER,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: DEFAULT_BORDER_LINE,

	meta: {
		description: 'A line in the border between cells indicates a region border.',
		tags: [],
		categories: edgeDefaultCategories
	}
};

export const chaosConstructionSuguruBorderInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.CHAOS_CONSTRUCTION_SUGURU_BORDER,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: DEFAULT_BORDER_LINE,

	meta: {
		description: 'A line in the border between cells indicates a region border.',
		tags: [],
		categories: edgeDefaultCategories
	}
};

export const edgeCaveOneOfEachInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool);
	},

	toolId: TOOLS.EDGE_CAVE_ONE_OF_EACH,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'For two cells separated by a white dot, one must be shaded and the other unshaded (one must belong to the cave and the other to the wall).',
		tags: [],
		categories: edgeDefaultCategories
	}
};

export const oneWayDoorInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: inequalityValueUpdater,
			defaultValue: '<'
		});
	},

	toolId: TOOLS.ONE_WAY_DOOR,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: {
		type: SHAPE_TYPES.TEXT_ONLY,
		r: { editable: false, value: 0.1 },
		strokeWidth: { editable: false, value: 0, lb: 0, ub: 1, step: 0.025 },
		stroke: { editable: false, value: 'none' },
		fontSize: { editable: false, value: 0.4 },
		fontColor: { editable: true, value: 'darkblue' },
		fill: { editable: false, value: 'var(--grid-background-color)' }
	},

	meta: {
		description:
			'The path may only pass directly through a purple arrow if moving in the direction the arrow is pointing. An arrow always points to the smaller of the two digits it sits between.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};

export const customEdgeConstraintInfo: SquareCellElementInfo = {
	getInputHandler(svgRef, grid, tool) {
		return getEdgeToolInputHandler(svgRef, grid, tool, {
			valueUpdater: (oldValue: string | undefined, key: string) =>
				defaultEdgeValueUpdater(oldValue, key, validateEdgeValue)
		});
	},

	toolId: TOOLS.CUSTOM_EDGE_CONSTRAINT,
	order: RENDER_ORDER.EDGE_TOOLS,

	shape: DEFAULT_WHITE_CIRCLE,

	meta: {
		description:
			'Custom Edge Constraint. Combines several edge constraints into one.',
		tags: [],
		categories: typableEdgeDefaultCategories
	}
};