import { TOOLS, TOOL_CATEGORIES } from '../Tools';
import type { SquareCellElementInfo } from '../ElementInfo';
import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';

export const givenInfo: SquareCellElementInfo = {
	inputOptions: {type: HANDLER_TOOL_TYPE.SELECTION},
	toolId: TOOLS.GIVEN,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Given'
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const digitInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.SELECTION },
	toolId: TOOLS.DIGIT,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Digit'
	},

	meta: {
		description: '',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const regionsInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.SELECTION },
	toolId: TOOLS.REGIONS,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Regions'
	},

	meta: {
		description: 'Digits cannot repeat in each region.',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const cornerPMInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.SELECTION },
	toolId: TOOLS.CORNER_PM,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Corner Pencilmarks'
	},

	meta: {
		description: 'Corner Pencilmarks',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const centerPMInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.SELECTION },
	toolId: TOOLS.CENTER_PM,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Center Pencilmarks'
	},

	meta: {
		description: 'Center Pencilmarks',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const highlightsInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.SELECTION },
	toolId: TOOLS.HIGHLIGHTS,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Highlights'
	},

	meta: {
		description: 'Highlights',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const outsideInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.SELECTION },
	toolId: TOOLS.OUTSIDE,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Outside'
	},

	meta: {
		description: 'Global constraints do not apply to outside cells (but local constraints might).',
		tags: [],
		categories: [TOOL_CATEGORIES.CELL_INPUT_TOOL]
	}
};

export const penToolInfo: SquareCellElementInfo = {
	inputOptions: { type: HANDLER_TOOL_TYPE.PEN },
	toolId: TOOLS.PEN_TOOL,
	order: 0,

	permanent: true,
	menu: {
		type: 'select',
		name: 'Pen Tool'
	},

	meta: {
		description: 'Pen Tool',
		usage: `Click and drag between cell centers or cell corners to draw lines.\n\tClick on a cell edge of center to draw marks.`,
		tags: [],
		categories: []
	}
};
