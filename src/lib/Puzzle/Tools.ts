// export type ToolId<TTool extends string> = { [key in TTool]: string };


export enum CELL_INPUT_TOOLS {
	GIVEN = 'Given Digit',
	DIGIT = 'Digit',
	CORNER_PM = 'Corner Pencilmarks',
	CENTER_PM = 'Center Pencilmarks',
	HIGHLIGHTS = 'Highlights',
	REGIONS = 'Regions',
	OUTSIDE = 'Outside',
	FOG = 'Fog',
}

export enum SIMPLE_GLOBAL_CONSTRAINTS {
	SUDOKU_RULES_DO_NOT_APPLY = 'Sudoku rules do not apply',
	ANTIKNIGHT = 'Antiknight',
	ANTIKING = 'Antiking',
	DISJOINT_GROUPS = 'Disjoint Groups',
	NONCONSECUTIVE = 'Nonconsecutive',
	NONRATIO = 'Nonratio',
	POSITIVE_DIAGONAL = 'Positive Diagonal',
	NEGATIVE_DIAGONAL = 'Negative Diagonal',
	POSITIVE_ANTIDIAGONAL = 'Positive Antidiagonal',
	NEGATIVE_ANTIDIAGONAL = 'Negative Antidiagonal',
	ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL = 'Odd/Even Parity Mirror Along Positive Diagonal',
	ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL = 'Odd/Even Parity Mirror Along Negative Diagonal',

	GLOBAL_ENTROPY = 'Global Entropy',
	GLOBAL_INDEXING_COLUMN = 'Global Indexing Column',
	GLOBAL_INDEXING_ROW = 'Global Indexing Row'
}

export enum NEGATIVE_CONSTRAINTS {
	ALL_RATIOS_GIVEN = 'All Ratios Given',
	ALL_DIFFERENCES_GIVEN = 'All Differences Given',
	ALL_X_GIVEN = "All X's Given",
	ALL_V_GIVEN = "All V's Given",
	ALL_XV_GIVEN = "All XV's Given",
	ALL_RADARS_GIVEN = 'All Radars Given',
	ALL_XY_DIFFERENCES_GIVEN = 'All XY Differences Given',
	ALL_INDEXING_COLUMN_GIVEN = 'All Indexing Column Given',
	ALL_INDEXING_ROW_GIVEN = 'All Indexing Row Given'
}

export enum VALUE_MODIFIER_CONSTRAINTS {
	VAMPIRE_AND_PREY = 'Vampire And Prey',
	MARKED_CELLS = 'Marked Cells',
	DOUBLERS = 'Doublers',
	NEGATORS = 'Negators',
	HOT_CELLS = 'Hot Cells',
	COLD_CELLS = 'Cold Cells',
	DECREMENT_FOUNTAIN = 'Decrement Fountain'
}

export enum UNDETERMINED_REGIONS_CONSTRAINTS {
	YIN_YANG = 'Yin Yang',
}

export enum SIMPLE_SINGLE_CELL_CONSTRAINTS {
	ODD = 'Odd',
	EVEN = 'Even',
	MAXIMUM = 'Maximum',
	MINIMUM = 'Minimum',
	ODD_MINESWEEPER = 'Odd Minesweeper',
	EVEN_MINESWEEPER = 'Even Minesweeper',
	WATCHTOWER = 'Watchtower',
	NOT_WATCHTOWER = 'Not Watchtower',
	FARSIGHT = 'Farsight',
	RADAR = 'Radar',
	COUNT_SAME_PARITY_NEIGHBOUR_CELLS = 'Count Same Parity Neighbour Cells',
	ORTHOGONAL_SUM = 'Orthogonal Sum',
	INDEXING_COLUMN = 'Indexing Column',
	INDEXING_ROW = 'Indexing Row',
	LOW_DIGIT = 'Low Digit',
	HIGH_DIGIT = 'High Digit',
	FRIENDLY_CELL = 'Friendly Cell',
	DIAGONALLY_ADJACENT_SUM = 'Diagonally Adjacent Sum',
	PRIME_CELL = 'Prime Cell',
	ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY = 'Adjacent Cells In Different Directions Have Opposite Parity',
	SNOWBALL = 'Snowball',
	SANDWICH_ROW_COL_COUNT = 'Sandwich Row Column Count',
	COUNTING_CIRCLES = 'Counting Circles'
}

export enum EDGE_CONSTRAINTS {
	RATIO = 'Ratio',
	DIFFERENCE = 'Difference',
	XV = 'XV',
	EDGE_INEQUALITY = 'Edge Inequality',
	EDGE_SUM = 'Edge Sum',
	EDGE_PRODUCT = 'Edge Product',
	EDGE_MODULO = 'Edge Modulo',
	EDGE_FACTOR = 'Edge Factor',
	XY_DIFFERENCES = 'XY Differences'
}

export enum CORNER_CONSTRAINTS {
	CORNER_SUM = 'Corner Sum',
	CORNER_SUM_OF_THREE_EQUALS_THE_OTHER = 'Corner Sum of Three Equals The Other',
	CORNER_EVEN_COUNT = 'Corner Even Count'
}

export enum LINE_CONSTRAINTS {
	THERMOMETER = 'Thermometer',
	ROW_CYCLE_THERMOMETER = 'Row Cycle Thermometer',

	PALINDROME = 'Palindrome',
	WHISPERS_LINE = 'Whispers Line',
	MAXIMUM_ADJACENT_DIFFERENCE_LINE = 'Maximum Adjacent Difference Line',

	RENBAN_LINE = 'Renban Line',
	DOUBLE_RENBAN_LINE = 'Double Renban Line',
	RENRENBANBAN_LINE = 'Renrenbanban Line',
	N_CONSECUTIVE_RENBAN_LINE = 'N-Consecutive Renban Line',
	KNABNER_LINE = 'Knabner Line',
	RENBAN_OR_WHISPERS_LINE = 'Renban Or Whispers Line',

	UNIQUE_VALUES_LINE = 'Unique Values Line',
	REGION_SUM_LINE = 'Region Sum Line',
	ARITHMETIC_SEQUENCE_LINE = 'Arithmetic Sequence Line',
	SUM_LINE = 'Sum Line',
	XV_LINE = 'XV Line',
	ROW_SUM_LIME = 'Row Sum Line',
	AT_LEAST_X_LINE = 'At Least X Line',
	SUPERFUZZY_ARROW = 'Superfuzzy Arrow',
	N_CONSECUTIVE_FUZZY_SUM_LINE = 'N-Consecutive Sum Line',
	ADJACENT_CELL_SUM_IS_PRIME_LINE = 'Adjacent Cell Sum Is Prime Line',
	PRODUCT_LINE = 'Product Line',
	ADJACENT_MULTIPLES_LINE = 'Adjacent Multiples Line',

	SAME_PARITY_LINE = 'Same Parity Line',
	MODULAR_LINE = 'Modular Line',
	UNIMODULAR_LINE = 'Unimodular Line',
	MODULAR_OR_UNIMODULAR_LINE = 'Modular Or Unimodular Line',
	ODD_EVEN_OSCILLATOR_LINE = 'Odd Even Oscillator Line',
	HIGH_LOW_OSCILLATOR_LINE = 'High Low Oscillator Line',
	ENTROPIC_LINE = 'Entropic Line',
	ENTROPIC_OR_MODULAR_LINE = 'Entropic Or Modular Line',

	INDEXING_COLUMN_IS_X_LINE = 'Indexing Column Is X Line',
	INDEXING_ROW_IS_X_LINE = 'Indexing Row Is X Line',

	REPEATED_DIGITS_LINE = 'Repeated Digits Line',
	N_REPEATED_DIGITS_LINE = 'N-Repeated Digits Line',

	BETWEEN_LINE = 'Between Line',
	LOCKOUT_LINE = 'Lockout Line',
	TIGHTROPE_LINE = 'Tightrope Line',
	PARITY_COUNT_LINE = 'Parity Count Line',
	DOUBLE_ARROW_LINE = 'Double Arrow Line',
	PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE = 'Product Of Ends Equals Sum Of Line',
	SPLIT_PEAS = 'Split Peas'
}

export enum ARROW_CONSTRAINTS {
	ARROW = 'Arrow',
	AVERAGE_ARROW = 'Average Arrow'
}

export enum CAGE_CONSTRAINTS {
	KILLER_CAGE = 'Killer Cage',
	SUM_CAGE = 'Sum Cage',
	KILLER_CAGE_LOOK_AND_SAY = 'Killer Cage Look And Say',
	PARITY_BALANCE_CAGE = 'Parity Balance Cage',
	DIVISIBLE_KILLER_CAGE = 'Divisible Killer Cage',
	SPOTLIGHT_CAGE = 'Spotlight Cage',
	PUTTERIA_CAGE = 'Putteria Cage',
	AQUARIUM_CAGE = 'Aquarium Cage',
	YIN_YANG_ANTITHESIS_KILLER_CAGE = 'Yin Yang Antithesis Killer Cage'
}

export enum CLONE_CONSTRAINTS {
	CLONE_REGION = 'Clone Region'
}

export enum OUTSIDE_EDGE_CONSTRAINTS {
	SANDWICH_SUM = 'Sandwich Sum',
	X_SUM = 'X-Sum',
	SHORTSIGHTED_X_SUM = 'Shortsighted X-Sum',
	SHIFTED_X_SUM = 'Shifted X-Sum',
	X_SUM_SKYSCRAPERS = 'X-Sum Skyscrapers',
	BROKEN_X_SUM = 'Broken X-Sum',
	BATTLEFIELD = 'Battlefield',
	SKYSCRAPERS = 'Skyscrapers',
	X_INDEX = 'X-Index',
	RISING_STREAK = 'Rising Streak',
	ROW_OR_COLUMN_RANK = 'Row Or Column Rank'
}

export enum OUTSIDE_CORNER_CONSTRAINTS {
	LITTLE_KILLER_SUM = 'Little Killer Sum',
	LITTLE_KILLER_LOOK_AND_SAY = 'Little Killer Look And Say',
	LITTLE_KILLER_REGION_SUM_PRODUCT = 'Little Killer Region Sum Product',
	X_OMIT_LITTLE_KILLER_SUM = 'X-Omit Little Killer Sum'
}

export enum COSMETIC_TOOLS {
	COSMETIC_CELL_SHAPE = 'Cosmetic Cell Shape',
	COSMETIC_CELL_ARROW = 'Cosmetic Cell Arrow',
	COSMETIC_CELL_MULTI_ARROW = 'Cosmetic Cell Multi Arrow',

	COSMETIC_EDGE = 'Cosmetic Edge',
	COSMETIC_DIRECTED_ADJACENT_CELLS = 'Cosmetic Directed Adjacent Cells',

	COSMETIC_CORNER = 'Cosmetic Corner',

	COSMETIC_LINE = 'Cosmetic Line',
	COSMETIC_LINE_WITH_POLYGON_ENDS = 'Cosmetic Line With Polygon Ends',
	COSMETIC_LINE_WITH_CIRCLE_ENDS = 'Cosmetic Line With Circle Ends',
	COSMETIC_ARROW = 'Cosmetic Arrow',

	COSMETIC_CAGE = 'Cosmetic Cage',
	COSMETIC_OUTSIDE_DIRECTION = 'Cosmetic Outside Direction'
}

export enum OTHER_TOOLS {
	PEN_TOOL = 'Pen Tool'
}

export const GLOBAL_CONSTRAINTS = {
	...SIMPLE_GLOBAL_CONSTRAINTS,
	...NEGATIVE_CONSTRAINTS,
	...VALUE_MODIFIER_CONSTRAINTS,
	...UNDETERMINED_REGIONS_CONSTRAINTS
};

export const LOCAL_CONSTRAINTS = {
	...SIMPLE_SINGLE_CELL_CONSTRAINTS,
	...EDGE_CONSTRAINTS,
	...CORNER_CONSTRAINTS,

	...LINE_CONSTRAINTS,
	...ARROW_CONSTRAINTS,

	...CAGE_CONSTRAINTS,
	...CLONE_CONSTRAINTS,
	...OUTSIDE_EDGE_CONSTRAINTS,
	...OUTSIDE_CORNER_CONSTRAINTS
};

export const TOOLS = {
	...CELL_INPUT_TOOLS,

	...GLOBAL_CONSTRAINTS,

	...LOCAL_CONSTRAINTS,

	...COSMETIC_TOOLS,

	...OTHER_TOOLS
};

export type TOOLID =
	| CELL_INPUT_TOOLS
	| SIMPLE_GLOBAL_CONSTRAINTS
	| NEGATIVE_CONSTRAINTS
	| VALUE_MODIFIER_CONSTRAINTS
	| UNDETERMINED_REGIONS_CONSTRAINTS
	| SIMPLE_SINGLE_CELL_CONSTRAINTS
	| EDGE_CONSTRAINTS
	| CORNER_CONSTRAINTS
	| LINE_CONSTRAINTS
	| ARROW_CONSTRAINTS
	| CAGE_CONSTRAINTS
	| CLONE_CONSTRAINTS
	| OUTSIDE_EDGE_CONSTRAINTS
	| OUTSIDE_CORNER_CONSTRAINTS
	| COSMETIC_TOOLS
	| OTHER_TOOLS;


export enum TOOL_CATEGORIES {
	CELL_INPUT_TOOL = 'Cell Input Tool',

	GLOBAL_CONSTRAINT = 'Global Constraint',
	SIMPLE_GLOBAL_CONSTRAINT = 'Simple Global Constraint',
	NEGATIVE_CONSTRAINT = 'Negative Constraint',
	VALUE_MODIFIER_CONSTRAINT = 'Value Modifier Constraint',
	UNDETERMINED_REGIONS_CONSTRAINT = 'Undetermined Regions Constraint',
	DIAGONAL_CONSTRAINT = 'Diagonal Constraint',

	LOCAL_CONSTRAINT = 'Local Constraint',
	SINGLE_CELL_CONSTRAINT = 'Single Cell Constraint',
	SINGLE_CELL_COLOR_TOOL = 'Single Cell Color Tool',
	SINGLE_CELL_SHAPE_TOOL = 'Single Cell Shape Tool',

	EDGE_CONSTRAINT = 'Edge Constraint',
	CORNER_CONSTRAINT = 'Corner Constraint',

	LINE_CONSTRAINT = 'Line Constraint',
	DOUBLE_ENDED_LINE_CONSTRAINT = 'Double Ended Line Constraint',
	ARROW_CONSTRAINT = 'Arrow Constraint',

	OUTSIDE_EDGE_CONSTRAINT = 'Outside Edge Constraint',
	OUTSIDE_CORNER_CONSTRAINT = 'Outside Corner Constraint',

	CAGE_CONSTRAINT = 'Cage Constraint',
	CLONE_CONSTRAINT = 'Clone Constraint',

	COSMETIC_TOOL = 'Cosmetic Tool',
	TYPABLE_TOOL = 'Typable Tool',
	SINGLE_CELL_ARROW_TOOL = 'Single Cell Arrow Tool',
	SINGLE_CELL_MULTIARROW_TOOL = 'Single Cell Multiarrow Tool',
	EDGE_TOOL = 'Edge Tool',
	CORNER_TOOL = 'Corner Tool',
	LINE_TOOL = 'Line Tool',
	ARROW_TOOL = 'Arrow Tool',
	CAGE_TOOL = 'Cage Tool',
	OUTSIDE_EDGE_TOOL = 'Outside Edge Tool',
	OUTSIDE_CORNER_TOOL = 'Outside Corner Tool',
	OUTSIDE_DIRECTION_TOOL = 'Outside Direction Tool'
}

export function isGlobalConstraint(toolId: TOOLID): boolean {
	const enumValues = Object.values(GLOBAL_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isLocalConstraint(toolId: TOOLID): boolean {
	const enumValues = Object.values(LOCAL_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isSingleCellArrowTool(toolId: TOOLID): boolean {
	return toolId === TOOLS.COSMETIC_CELL_ARROW;
}

export function isSingleCellMultiArrowTool(toolId: TOOLID): boolean {
	return toolId === TOOLS.COSMETIC_CELL_MULTI_ARROW;
}

export function isSingleCellTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(SIMPLE_SINGLE_CELL_CONSTRAINTS) as string[];
	return (
		enumValues.includes(toolId) ||
		toolId === TOOLS.COSMETIC_CELL_SHAPE ||
		toolId === TOOLS.COSMETIC_CELL_ARROW ||
		toolId === TOOLS.COSMETIC_CELL_MULTI_ARROW
	);
}

export function isEdgeTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(EDGE_CONSTRAINTS) as string[];
	return enumValues.includes(toolId) || toolId === TOOLS.COSMETIC_EDGE;
}

export function isCornerTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CORNER_CONSTRAINTS) as string[];
	return enumValues.includes(toolId) || toolId === TOOLS.COSMETIC_CORNER;
}

export function isLineTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(LINE_CONSTRAINTS) as string[];
	return (
		enumValues.includes(toolId) ||
		toolId === TOOLS.COSMETIC_LINE ||
		toolId === TOOLS.COSMETIC_LINE_WITH_POLYGON_ENDS ||
		toolId === TOOLS.COSMETIC_LINE_WITH_CIRCLE_ENDS
	);
}

export function isArrowTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(ARROW_CONSTRAINTS) as string[];
	return enumValues.includes(toolId) || toolId === TOOLS.COSMETIC_ARROW;
}

export function isCageTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CAGE_CONSTRAINTS) as string[];
	return enumValues.includes(toolId) || toolId === TOOLS.COSMETIC_CAGE;
}

export function isCloneTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CLONE_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isOutsideDirectionTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(OUTSIDE_EDGE_CONSTRAINTS) as string[];
	const enumValues2 = Object.values(OUTSIDE_CORNER_CONSTRAINTS) as string[];
	return (
		enumValues.includes(toolId) ||
		enumValues2.includes(toolId) ||
		toolId === TOOLS.COSMETIC_OUTSIDE_DIRECTION
	);
}

export function isCosmeticTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(COSMETIC_TOOLS) as string[];
	return enumValues.includes(toolId);
}

export function isCellInputTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CELL_INPUT_TOOLS) as string[];
	return enumValues.includes(toolId);
}

export const LOCAL_CONSTRAINTS_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.ARROW_CONSTRAINT,
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.CLONE_CONSTRAINT,
	TOOL_CATEGORIES.OUTSIDE_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.OUTSIDE_CORNER_CONSTRAINT
];

export const GLOBAL_CONSTRAINT_CATEGORIES = [
	TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT,
	TOOL_CATEGORIES.NEGATIVE_CONSTRAINT,
	TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT,
	TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT
];


export function toolKeyFromString(str: string): TOOLID | undefined {
	for (const val of Object.values(TOOLS)) {
		if (val === str) return val;
	}
	// throw new Error(`No matching TOOLS for string: ${str}`);
	return undefined
}

// type Enum = { [s: string]: string };

export function isToolOfType<T extends object>(tool: TOOLID, type: T): boolean {
	return Object.values(type).includes(tool);
}