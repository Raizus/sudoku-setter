// export type ToolId<TTool extends string> = { [key in TTool]: string };

export enum CELL_INPUT_TOOLS {
	GIVEN = 'Given Digit',
	DIGIT = 'Digit',
	CORNER_PM = 'Corner Pencilmarks',
	CENTER_PM = 'Center Pencilmarks',
	HIGHLIGHTS = 'Highlights',
	REGIONS = 'Regions',
	OUTSIDE = 'Outside'
}

export enum SIMPLE_GLOBAL_CONSTRAINTS {
	SUDOKU_RULES_DO_NOT_APPLY = 'Sudoku rules do not apply',
	LEAVE_EMPTY_CELLS_EMPTY = 'Leave Empty Cells Empty',
	HEXED_SUDOKU = 'Hexed Sudoku',
	ANTIKNIGHT = 'Antiknight',
	ANTI_LONG_KNIGHT = 'Anti-Long-Knight',
	ANTIKING = 'Antiking',
	ANTI_GIRAFFE = 'Anti-Giraffe',
	DISJOINT_GROUPS = 'Disjoint Groups',
	TANGO = 'Tango',
	NONCONSECUTIVE = 'Nonconsecutive',
	NONRATIO = 'Nonratio',
	ANTI_ENTROPY = 'Anti-Entropy',

	BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS = 'Box Rows And Columns Form Modularity and Entropy Sets',

	GLOBAL_ENTROPY = 'Global Entropy',
	GLOBAL_INDEXING_COLUMN = 'Global Indexing Column',
	GLOBAL_INDEXING_ROW = 'Global Indexing Row',
	CONSECUTIVE_CLOSE_NEIGHBORS = 'Consecutive Close Neighbors',

	ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED = 'All Odd Digits Are Orthogonally Connected',
	NOT_ALL_ODD_IN_A_2X2_SQUARE = 'Not All Odd In A 2x2 Square'
}

export enum DIAGONAL_CONSTRAINTS {
	POSITIVE_DIAGONAL = 'Positive Diagonal',
	NEGATIVE_DIAGONAL = 'Negative Diagonal',
	POSITIVE_ANTIDIAGONAL = 'Positive Antidiagonal',
	NEGATIVE_ANTIDIAGONAL = 'Negative Antidiagonal',
	PARITY_MIRROR_POSITIVE_DIAGONAL = 'Parity Mirror Positive Diagonal',
	PARITY_MIRROR_NEGATIVE_DIAGONAL = 'Parity Mirror Negative Diagonal'
}

export enum NEGATIVE_AND_MODIFIER_CONSTRAINTS {
	ALL_GIVEN = 'All Given',
	NEGATIVE_V_CONSTRAINT = 'Negative V Constraint',
	NEGATIVE_X_CONSTRAINT = 'Negative X Constraint',
	NEGATIVE_XV_CONSTRAINT = 'Negative XV Constraint',

	USE_CELL_VALUES = 'Use Cell Values',

	ALL_CAGE_TOTALS_ARE_DIFFERENT = 'All Cage Totals Are Different',
	ADJACENT_CAGE_TOTALS_ARE_CONSECUTIVE = 'Adjacent Cage Totals Are Consecutive',
	ADJACENT_CAGE_TOTALS_ARE_DIFFERENT = 'Adjacent Cage Totals Are Different',

	DISTINCT_RENBANS = 'Distinct Renbans',
	YIN_YANG_REGION_SUM_LINES_MUST_CROSS_COLORS_AT_LEAST_ONCE = 'Yin Yang Region Sum Lines Must Cross Colors At Least Once',

	SHIKAKU_EACH_REGION_CONTAINS_ONE_SIZE_CIRCLE = 'Shikaku Each Regions Contains One Size Circle',
	SHIKAKU_EACH_REGION_CONTAINS_ONE_REGION_SUM_CLUE = 'Shikaku Each Regions Contains One Region Sum Clue'
}

export enum VALUE_MODIFIER_CONSTRAINTS {
	VAMPIRE_AND_PREY = 'Vampire And Prey',
	MARKED_CELLS = 'Marked Cells',
	DOUBLERS = 'Doublers',
	NEGATORS = 'Negators',
	HOT_CELLS = 'Hot Cells',
	COLD_CELLS = 'Cold Cells',
	DECREMENT_FOUNTAIN = 'Decrement Fountain',
	INDEXER_CELLS = 'Indexer Cells'
}

export enum OTHER_UNDETERMINED_REGIONS_CONSTRAINTS {
	CHAOS_CONSTRUCTION = 'Chaos Construction',
	CHAOS_CONSTRUCTION_2X2_DOES_NOT_BELONG_TO_THE_SAME_REGION = 'Chaos Construction 2x2 Does Not Belong To The Same Region',
	NUMBERED_CHAOS_CONSTRUCTION = 'Numbered Chaos Construction',
	CHAOS_CONSTRUCTION_SUGURU = 'Chaos Construction Suguru',
	TWO_CONTIGUOUS_REGIONS = 'Two Contiguous Regions',
	SHADED_BOUNDARIES = 'Shaded Boundaries',
	SHADED_BOUNDARIES_ADJACENT_CELL_SUM_IS_EVEN = 'Shaded Boundaries Adjacent Cell Sum Is Even',
	SASHIGANE = 'Sashigane',
	NORINORI = 'Norinori',
	NORINORI_STAR_BATTLE = 'Norinori Star Battle',
	GOLDILOCKS_ZONE = 'Goldilocks Zone',
	NEXUS = 'Nexus',

	STAR_BATTLE = 'Star Battle',
	ONE_STAR_PER_GALAXY = 'One Star Per Galaxy',
	TWILIGHT_CAVE_FILLOMINO_REGION_SHADING = 'Twilight Cave Fillomino Region Shading',
	YIN_YANG_FILLOMINO_PARITY = 'Yin Yang Fillomino Parity',

	FILLOMINO = 'Fillomino',

	LITS = 'LITS',
	LITS_BLACK_WHITE_STAR_BATTLE = 'LITS Black And White Star Battle',
	BUILD_YOUR_OWN_KILLER_CAGES = 'Build Your Own Killer Cages',

	SHADED_ROW_COLUMN_BOX_COUNTERS = 'Shaded Row Column and Box Counters'
}

export enum GLOBAL_PENTOMINO_TILLING_CONSTRAINTS {
	PENTOMINO_TILLING = 'Pentomino Tilling',
	PENTOMINO_TILLING_NO_EMPTY_CELLS = 'Pentomino Tilling No Empty Cells'
}

export enum GLOBAL_SHIKAKU_CONSTRAINTS {
	SHIKAKU = 'Shikaku',
	SHIKAKU_NO_REPEATS_IN_REGION = 'Shikaku No Repeats In Region'
}

export enum GLOBAL_NURIKABE_CONSTRAINTS {
	NURIKABE = 'Nurikabe',
	NURIKABE_NO_REPEATS_IN_ISLANDS = 'Nurikabe No Repeats In Islands'
}

export enum GLOBAL_NURIMISAKI_CONSTRAINTS {
	NURIMISAKI = 'Nurimisaki',
	NURIMISAKI_PATH_GERMAN_WHISPERS = 'Nurimisaki Path German Whispers'
}

export enum GLOBAL_YIN_YANG_CONSTRAINTS {
	YIN_YANG = 'Yin Yang',
	YIN_YANG_NEIGHBOUR_GREATER_THAN_ONE_WITHIN_REGION_SHADED = 'Yin Yang Neighbour Greater Than One Within Region Shaded',
	YIN_YANG_SHADED_CELLS_ARE_GERMAN_WHISPERS = 'Yin Yang Shaded Cells Are German Whispers',
	YIN_YANG_IDENTICAL_DIGITS_DIAGONALLY_BELONG_TO_THE_SAME_REGION = 'Ying Yang Identical Digits Diagonally Belong To Same The Region',
	YIN_YANG_CHAOS_CONSTRUCTION_FULLY_SHADED_OR_FULLY_UNSHADED = 'Yin Yang Chaos Construction Fully Shaded Or Fully Unshaded'
}

export enum GLOBAL_DIRECTED_PATH_CONSTRAINTS {
	MAZE_DIRECTED_PATH = 'Directed Path',
	DIRECTED_PATH_ADJACENT_CELLS_SUM_IS_PRIME = 'Directed Path Adjacent Cells Sum Is Prime',
	DIRECTED_PATH_SUM_OF_CELLS_PER_REGION_IS_PRIME = 'Directed Path Sum Of Cells Per Region Is Prime',
	DIRECTED_PATH_ADJACENT_CELLS_DUTCH_WHISPERS = 'Directed Path Adjacent Cells Dutch Whispers',
	DIRECTED_PATH_IS_REGION_SUM_LINE = 'Directed Path Is Region Sum Line',
	DIRECTED_PATH_TELEPORT_SEGMENTS_SUM = 'Directed Path Teleport Segments Sum',
	DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS = 'Directed Path Teleport Renban Segments',
	DIRECTED_PATH_IS_PARITY_LINE = 'Directed Path Is Parity Line'
}

export enum GLOBAL_GALAXY_CONSTRAINTS {
	GALAXIES = 'Galaxies',
	TWO_SYMMETRIC_GALAXIES = 'Two Symmetric Galaxies',
	EVERY_CELL_BELONGS_TO_A_GALAXY = 'Every Cell Belongs To A Galaxy',
	GALAXY_2X2_DOES_NOT_BELONG_TO_ONE_GALAXY = 'Galaxy 2x2 Does Not Belong To One Galaxy',
	ONE_GALAXY_IS_A_GERMAN_WHISPERS = 'One Galaxy Is A German Whispers',
	DIGITS_DO_NOT_REPEAT_IN_A_GALAXY = 'Digits Do Not Repeat In A Galaxy'
}

export enum GLOBAL_CAVE_CONSTRAINTS {
	CAVE = 'Cave',
	CAVE_CELLS_ARE_ODD = 'Cave Cells Are Odd',
	CAVE_WALLS_ARE_EVEN = 'Cave Walls Are Even',
	CAVE_2X2_NOT_FULLY_SHADED_OR_UNSHADED = 'Cave 2x2 Not Fully Shaded or Unshaded',
	ONE_DIGIT_DOES_NOT_APPEAR_IN_THE_CAVE = 'One Digit Does Not Appear In The Cave',
	CAVE_LITS = 'Cave LITS',
	RENBAN_CAVES = 'Renban Caves',
	CAVE_WALL_SUGURU = 'Cave Wall Suguru',
	CAVE_CELLS_FILLOMINO = 'Cave Cells Fillomino'
}

export enum GLOBAL_CONNECT_FOUR_CONSTRAINTS {
	CONNECT_FOUR = 'Connect Four',
	CONNECT_FOUR_ALL_FILLED = 'Connect Four All Filled',
	CONNECT_FOUR_DRAW = 'Connect Four Draw',
	CONNECT_FOUR_ADJACENT_YELLOWS_MINIMUM_DIFFERENCE_AT_LEAST_3 = 'Connect Four Adjacent Yellows Minimum Difference At Least 3',
	CONNECT_FOUR_ADJACENT_REDS_DIFFERENT_PARITY = 'Connect Four Adjacent Reds Different Parity'
}

export enum GLOBAL_LOOP_CONSTRAINTS {
	CELL_CENTER_LOOP_NO_TOUCHING = 'Cell Center Loop No Touching',
	CELL_CENTER_LOOP_CAN_TOUCH_DIAGONALLY = 'Cell Center Loop Can Touch Diagonally',
	NOT_LOOP_SIZED_REGIONS = 'Not Loop Sized Regions',
	MODULAR_LOOP = 'Modular Loop',
	ADJACENT_CELLS_ALONG_LOOP_ARE_MULTIPLES = 'Adjacent Cells Along Loop Are Multiples',
	ADJACENT_CELLS_ALONG_LOOP_ARE_GERMAN_WHISPERS = 'Adjacent Cells Along Loop Are German Whispers',
	LOOP_PARITY = 'Loop Parity'
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
	COUNTING_CIRCLES = 'Counting Circles',
	REVERSE_COUNTING_CIRCLES = 'Reverse Counting Circles',
	COLORED_COUNTING_CIRCLES = 'Colored Counting Circles',
	UNIQUE_CELLS = 'Unique Cells',
	SEEN_ODD_COUNT = 'Seen Odd Count',
	SEEN_EVEN_COUNT = 'Seen Even Count',
	CELL_KNIGHT_WHISPERS = 'Cell Knight Whispers',

	CELL_ON_THE_LOOP = 'Cell On The Loop',
	CELL_NOT_ON_THE_LOOP = 'Cell Not On The Loop',
	COUNT_LOOP_NEIGHBOUR_CELLS = 'Count Loop Neighbour Cells',

	YIN_YANG_SHADED_CELL = 'Yin Yang Shaded Cell',
	YIN_YANG_MINESWEEPER = 'Yin Yang Minesweeper',
	YIN_YANG_SEEN_UNSHADED_CELLS = 'Yin Yang Seen Unshaded Cells',
	YIN_YANG_SEEN_SHADED_CELLS = 'Yin Yang Seen Shaded Cells',
	YIN_YANG_SEEN_SAME_SHADE_CELLS = 'Yin Yang Seen Same Shade Cells',
	YIN_YANG_ADJACENT_SAME_SHADE_COUNT = 'Yin Yang Adjacent Same Shade Count',
	YIN_YANG_SHADED_NEIGHBOURS_COUNT = 'Yin Yang Shaded Neighbours Count',
	YIN_YANG_LABELED_SHADE_CELL = 'Yin Yang Labeled Shade Cell',

	TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT = 'Two Contiguous Regions Row Column Opposite Set Count',
	SEEN_REGION_BORDERS_COUNT = 'Seen Region Borders Count',

	NURIMISAKI_UNSHADED_ENDPOINTS = 'Nurimisaki Unshaded Endpoints',
	SASHIGANE_BEND_REGION_COUNT = 'Sashigane Bend Region Count',
	SASHIGANE_REGION_SUM = 'Sashigane Region Sum',

	CAVE_CLUE = 'Cave Clue',
	CAVE_UNSHADED_SEEN_COUNT_INCLUDING_ITSELF = 'Cave Unshaded Seen Count Including Itself',
	CAVE_UNSHADED_CELL = 'Cave Unshaded Cell',
	CAVE_SHADED_REGION_SIZE_UNSHADED_SEEN_ORTHOGONALLY_CLUE = 'Cave Shaded Region Size Unshaded Seen Orthogonally Clue',

	SHIKAKU_REGION_SIZE = 'Shikaku Region Size',
	SHIKAKU_REGION_SUM = 'Shikaku Region Sum',

	TWILIGHT_CAVE_FILLOMINO_CLUE = 'Twilight Cave Fillomino Clue',
	CHAOS_CONSTRUCTION_CHESS_SUMS = 'Chaos Construction Chess Sums',
	CHAOS_CONSTRUCTION_ARROW_KNOTS = 'Chaos Construction Arrow Knots',
	CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT = 'Chaos Construction Seen Same Region Count',
	CHAOS_CONSTRUCTION_NEIGHBOUR_CELLS_SAME_REGION_COUNT = 'Chaos Construction Neighbour Cells Same Region Count',

	NURIKABE_SEEN_WATERWAY_CELLS = 'Nurikabe Seen Waterway Cells',
	NURIKABE_ISLAND_SIZE_CELL = 'Nurikabe Island Size Cell',
	NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE = 'Nurikabe Island Product Of Sum And Size Clue',

	BYOK_CAGE_SIZE = 'BYOK Cage Size',
	BYOK_NOT_CAGE_CELL = 'BYOK Not Cage Cell',

	DIRECTED_PATH_START = 'Directed Path Start',
	DIRECTED_PATH_END = 'Directed Path End',
	TELEPORT = 'Teleport',

	CONNECT_FOUR_YELLOW = 'Connect Four Yellow',
	CONNECT_FOUR_RED = 'Connect Four Red',

	CELL_SHADED_ROW_COLUMN_BOX_NOT_COUNTER = 'Cell Shaded Row Column Box Not Counter'
}

export enum SINGLE_CELL_ARROW_CONSTRAINTS {
	SASHIGANE_ARROW_POINTS_TO_BEND = 'Sashigane Arrow Points To Bend',
	THERMO_SIGHTLINE_LOOP_ARROW = 'Thermo Sightline Loop Arrow',
	INTERNAL_LOOP_SKYSCRAPERS = 'Internal Loop Skyscrapers',
	SKYSCRAPERS_ARROW = 'Skyscrapers Arrow'
}

export enum SINGLE_CELL_MULTIARROW_CONSTRAINTS {
	COLD_ARROWS = 'Cold Arrows',
	HOT_ARROWS = 'Hot Arrows',
	CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS = 'Chaos Construction Count Cells Not In The Same Region Arrows',
	CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS = 'Chaos Construction Count Seen Cells In The Same Region Arrows',
	YIN_YANG_COUNT_SHADED_CELLS = 'Yin Yang Count Shaded Cells',
	YIN_YANG_COMBINED_SHADED_CELLS_COUNT_EXCEPT_ITSELF = 'Yin Yang Combined Shaded Cells Count Except Itself',
	YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR = 'Yin Yang Sum Of Cells Of Opposite Color',
	LOOP_CELL_COUNT_ARROWS = 'Loop Cell Count Arrows',
	YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS = 'Yin Yang Count Unique Fillomino Same Shading Arrows',
	SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS = 'Same Galaxy Unobstructed Count Arrows',
	NURIKABE_COUNT_ISLAND_CELLS_ARROWS = 'Nurikabe Count Island Cells Arrows',
	CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR = 'Connect Four Count Cells Of Same Color',

	NEXT_NUMBERED_REGION_DISTANCE_ARROWS = 'Next Numbered Region Distance Arrows',

	SHADED_BOUNDARIES_COMBINED_COUNT_ARROWS = 'Shaded Boundaries Combined Count Arrows'
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
	XY_DIFFERENCES = 'XY Differences',
	YIN_YANG_KROPKI = 'Yin Yang Kropki',
	YIN_YANG_WHITE_KROPKI = 'Yin Yang White Kropki',

	FILLOMINO_REGION_BORDER = 'Fillomino Region Border',

	UNKNOWN_REGION_BORDER = 'Unknown Region Border',
	CHAOS_CONSTRUCTION_SUGURU_BORDER = 'Chaos Construction Suguru Border',
	EDGE_CAVE_ONE_OF_EACH = 'Edge Cave One Of Each',

	ONE_WAY_DOOR = 'One Way Door',

	COMBINED_EDGE_CONSTRAINT = 'Combined Edge Constraint',

	DIFFERENCE_INDEXING_ARROW = 'Difference Indexing Arrow'
}

export enum CORNER_CONSTRAINTS {
	QUADRUPLE = 'Quadruple',
	CORNER_SUM = 'Corner Sum',
	CORNER_SUM_OF_THREE_EQUALS_THE_OTHER = 'Corner Sum of Three Equals The Other',
	CORNER_EVEN_COUNT = 'Corner Even Count',
	CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_EXACTLY_THREE_REGIONS = 'Chaos Construction Corner Cells Belong To Exactly Three Regions',
	CHAOS_CONSTRUCTION_CORNER_CELLS_BELONG_TO_SAME_REGION = 'Chaos Construction Corner Cells Belong To Same Region',
	PRODUCT_SQUARE = 'Product Square',
	EQUAL_DIAGONAL_DIFFERENCES = 'Equal Diagonal Differences',
	DIFFERENT_CORNER_DIAGONAL_SUMS = 'Different Corner Diagonal Sums'
}

export enum LINE_CONSTRAINTS {
	THERMOMETER = 'Thermometer',
	SLOW_THERMOMETER = 'Slow Thermometer',
	CUSTOM_THERMOMETER = 'Custom Thermometer',
	FUZZY_THERMOMETER = 'Fuzzy Thermometer',
	ROW_CYCLE_THERMOMETER = 'Row Cycle Thermometer',

	PALINDROME = 'Palindrome',
	WHISPERS_LINE = 'Whispers Line',
	DUTCH_WHISPERS = 'Dutch Whispers',
	MAXIMUM_ADJACENT_DIFFERENCE_LINE = 'Maximum Adjacent Difference Line',

	RENBAN_LINE = 'Renban Line',
	DOUBLE_RENBAN_LINE = 'Double Renban Line',
	RENRENBANBAN_LINE = 'Renrenbanban Line',
	N_CONSECUTIVE_RENBAN_LINE = 'N-Consecutive Renban Line',
	NABNER_LINE = 'Nabner Line',
	RENBAN_OR_WHISPERS_LINE = 'Renban Or Whispers Line',
	RENBAN_OR_NABNER_LINE = 'Renban Or Nabner Line',
	OUT_OF_ORDER_CONSECUTIVE_LINE = 'Out Of Order Consecutive Line',

	INDEX_LINE = 'Index Line',
	UNIQUE_VALUES_LINE = 'Unique Values Line',
	REGION_SUM_LINE = 'Region Sum Line',
	ARITHMETIC_SEQUENCE_LINE = 'Arithmetic Sequence Line',
	SUM_LINE = 'Sum Line',
	XV_LINE = 'XV Line',
	ROW_SUM_LINE = 'Row Sum Line',
	AT_LEAST_X_LINE = 'At Least X Line',
	HEADLESS_ARROW = 'Headless Arrow',
	SUPERFUZZY_ARROW = 'Superfuzzy Arrow',
	AMBIGUOUS_ARROW = 'Ambiguous Arrow',
	N_CONSECUTIVE_FUZZY_SUM_LINE = 'N-Consecutive Fuzzy Sum Line',
	ADJACENT_CELL_SUM_IS_PRIME_LINE = 'Adjacent Cell Sum Is Prime Line',
	PRODUCT_LINE = 'Product Line',
	ADJACENT_MULTIPLES_LINE = 'Adjacent Multiples Line',
	ADJACENT_DIFFERENCES_COUNT_LINE = 'Adjacent Differences Count Line',
	ZIPPER_LINE = 'Zipper Line',
	SEGMENTED_SUM_LINE = 'Segmented Sum Line',
	SEGMENTED_SUM_AND_RENBAN_LINE = 'Segmented Sum And Renban Line',
	ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE = 'Adjacent Cells Are Multiples of Difference Line',

	LOOK_AND_SAY_LINE = 'Look And Say Line',

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

	THERMO_OR_AVERAGE_ARROW = 'Thermo Or Average Arrow',
	INDEXER_CELLS_REGION_SUBSET_LINE = 'Indexer Cells Region Subset Line',

	PEAPODS = 'Peapods',

	// yin yang lines
	YIN_YANG_INDEXING_LINE_COLORING = 'Yin Yang Indexing Line Coloring',
	YIN_YANG_REGION_SUM_LINE = 'Yin Yang Region Sum Line',
	YIN_YANG_SHADED_WHISPERS_LINE = 'Yin Yang Shaded Whispers Line',
	YIN_YANG_UNSHADED_ENTROPIC_LINE = 'Yin Yang Unshaded Entropic Line',
	YIN_YANG_UNSHADED_MODULAR_LINE = 'Yin Yang Unshaded Modular Line',
	YIN_YANG_CALIFORNIAN_MOUNTAIN_SNAKE = 'Yin Yang Californian Mountain Snake',

	NURIKABE_REGION_SUM_LINE = 'Nurikabe Region Sum Line',

	// goldilocks
	GOLDILOCKS_ZONE_REGION_SUM = 'Goldilocks Zone Region Sum',

	// double ended lines
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
	AVERAGE_ARROW = 'Average Arrow',
	BULBOUS_ARROW = 'Bulbous Arrow',
	SQUARE_ROOT_ARROW = 'Square Root Arrow',

	CHAOS_CONSTRUCTION_ARROW = 'Chaos Construction Arrow',
	LOOP_POINTER_ARROW = 'Loop Pointer Arrow'
}

export enum CAGE_CONSTRAINTS {
	KILLER_CAGE = 'Killer Cage',
	UNIQUE_DIGITS_CAGE = 'Unique Digits Cage',
	INVERTED_KILLER_CAGE = 'Inverted Killer Cage',
	SUM_CAGE = 'Sum Cage',
	KILLER_CAGE_LOOK_AND_SAY = 'Killer Cage Look And Say',
	SUM_CAGE_LOOK_AND_SAY = 'Sum Cage Look And Say',
	PARITY_BALANCE_CAGE = 'Parity Balance Cage',
	DIVISIBLE_KILLER_CAGE = 'Divisible Killer Cage',
	SPOTLIGHT_CAGE = 'Spotlight Cage',
	PUTTERIA_CAGE = 'Putteria Cage',
	AQUARIUM_CAGE = 'Aquarium Cage',
	MULTISET_CAGE = 'Multiset Cage',
	VAULTED_CAGE = 'Vaulted Cage',
	VAULTED_KILLER_CAGE = 'Vaulted Killer Cage',
	YIN_YANG_ANTITHESIS_KILLER_CAGE = 'Yin Yang Antithesis Killer Cage',
	YIN_YANG_BREAKEVEN_KILLER_CAGE = 'Yin Yang Breakeven Killer Cage',
	YIN_YANG_EQUAL_SUM_CAGE = 'Yin Yang Equal Sum Cage',

	NEGATORS_KILLER_CAGE = 'Negators Killer Cage',

	SHADED_ROW_COLUMN_BOX_COUNTERS_SHADED_DIGIT_SUM_CAGE = 'Shaded Row Column Box Counters Shaded Digit Sum Cage'
}

export enum CLONE_CONSTRAINTS {
	CLONE_REGION = 'Clone Region'
}

export enum OUTSIDE_EDGE_CONSTRAINTS {
	SANDWICH_SUM = 'Sandwich Sum',
	MYSTERY_SANDWICH_SUM = 'Mystery Sandwich Sum',
	X_SUM = 'X-Sum',
	SHORTSIGHTED_X_SUM = 'Shortsighted X-Sum',
	SHIFTED_X_SUM = 'Shifted X-Sum',
	X_SUM_SKYSCRAPERS = 'X-Sum Skyscrapers',
	BROKEN_X_SUM = 'Broken X-Sum',
	BATTLEFIELD = 'Battlefield',
	SKYSCRAPERS = 'Skyscrapers',
	X_INDEX = 'X-Index',
	SANDWICH_SUM_XOR_X_SUM = 'Sandwich Sum Xor X-Sum',
	RISING_STREAK = 'Rising Streak',
	ROW_OR_COLUMN_RANK = 'Row Or Column Rank',
	OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED = 'Outside Edge Yin Yang Sum Of Shaded',
	CHAOS_CONSTRUCTION_X_SUM_REGION_BORDERS = 'Chaos Construction X-Sum Region Borders',
	OUTSIDE_CONSECUTIVE_SUM = 'Outside Consecutive Sum',
	LOOPWICHES = 'Loopwhiches',
	CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION = 'Chaos Construction Sum Of First Each Region',
	CHAOS_CONSTRUCTION_X_INDEX_REGION = 'Chaos Construction X-Index Region',
	PENTOMINO_BORDER_COUNT = 'Pentomino Border Count'
}

export enum OUTSIDE_CORNER_CONSTRAINTS {
	LITTLE_KILLER_SUM = 'Little Killer Sum',
	LITTLE_KILLER_PRODUCT = 'Little Killer Product',
	LITTLE_KILLER_LOOK_AND_SAY = 'Little Killer Look And Say',
	LITTLE_KILLER_REGION_SUM_PRODUCT = 'Little Killer Region Sum Product',
	X_OMIT_LITTLE_KILLER_SUM = 'X-Omit Little Killer Sum',

	NEGATORS_LITTLE_KILLER_SUM = 'Negators Little Killer Sum'
}

export enum CENTER_EDGE_CORNER_CONSTRAINTS {
	ROTATIONALLY_SYMMETRIC_GALAXY_CENTER = 'Rotationally Symmetric Galaxy Center',
	ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM = 'Rotationally Symmetric Galaxy Center Sum',
	YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER = 'Yin Yang Sum Of Adjacent Shaded Edge Or Corner'
}

export enum CORNER_LINE_CONSTRAINTS {
	MAZE_WALL = 'Maze Wall'
}

export enum VALUED_GLOBAL_CONSTRAINTS {
	FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM = 'Forbidden Orthogonally Adjacent Sum',
	FORBIDDEN_KNIGHT_SUM = 'Forbidden Knight Sum',
	MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE = 'Minimum Diagonally Adjacent Difference',
	LITS_MAX_TETROMINO_SUM = 'LITS Max Tetromino Sum'
}

export enum OTHER_CONSTRAINTS {
	VARIABLE_CONSTRAINT = 'Variable Constraint'
}

export enum COSMETIC_TOOLS {
	COSMETIC_CELL_CENTER_SHAPE = 'Cosmetic Cell Center Shape',
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

export enum FOG_TOOLS {
	FOG_LIGHTS = 'Fog Lights',
	CUSTOM_FOG_CLEARING = 'Custom Fog Clearing',
	FOG_CLEARING_ITSELF = 'Fog Clearing Itself',
	FOG_CLEARING_ORTHOGONAL_NEIGHBOURS = 'Fog Clearing Orthogonal Neighbours',
	FOG_CLEARING_DIAGONAL_NEIGHBOURS = 'Fog Clearing Diagonal Neighbours',
	FOG_CLEARING_CONTAINING_ROW = 'Fog Clearing Containing Row',
	FOG_CLEARING_CONTAINING_COLUMN = 'Fog Clearing Containing Column',
	FOG_CLEARING_KNIGHTS_MOVE = 'Fog Clearing Knights Move'
}

export enum OTHER_TOOLS {
	PEN_TOOL = 'Pen Tool'
}

export const UNDETERMINED_REGIONS_CONSTRAINTS = {
	...OTHER_UNDETERMINED_REGIONS_CONSTRAINTS,
	...GLOBAL_CAVE_CONSTRAINTS,
	...GLOBAL_CONNECT_FOUR_CONSTRAINTS,
	...GLOBAL_GALAXY_CONSTRAINTS,
	...GLOBAL_LOOP_CONSTRAINTS,
	...GLOBAL_DIRECTED_PATH_CONSTRAINTS,
	...GLOBAL_YIN_YANG_CONSTRAINTS,
	...GLOBAL_NURIMISAKI_CONSTRAINTS,
	...GLOBAL_NURIKABE_CONSTRAINTS,
	...GLOBAL_SHIKAKU_CONSTRAINTS,
	...GLOBAL_PENTOMINO_TILLING_CONSTRAINTS
};

export const GLOBAL_CONSTRAINTS = {
	...NEGATIVE_AND_MODIFIER_CONSTRAINTS,
	...DIAGONAL_CONSTRAINTS,
	...SIMPLE_GLOBAL_CONSTRAINTS,
	...UNDETERMINED_REGIONS_CONSTRAINTS,
	...VALUE_MODIFIER_CONSTRAINTS
};

export const LOCAL_CONSTRAINTS = {
	...SIMPLE_SINGLE_CELL_CONSTRAINTS,
	...SINGLE_CELL_ARROW_CONSTRAINTS,
	...SINGLE_CELL_MULTIARROW_CONSTRAINTS,
	...EDGE_CONSTRAINTS,
	...CORNER_CONSTRAINTS,

	...LINE_CONSTRAINTS,
	...ARROW_CONSTRAINTS,

	...CAGE_CONSTRAINTS,
	...CLONE_CONSTRAINTS,
	...OUTSIDE_EDGE_CONSTRAINTS,
	...OUTSIDE_CORNER_CONSTRAINTS,
	...CENTER_EDGE_CORNER_CONSTRAINTS,
	...CORNER_LINE_CONSTRAINTS,
	...VALUED_GLOBAL_CONSTRAINTS,
	...OTHER_CONSTRAINTS,
	...FOG_TOOLS
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
	| NEGATIVE_AND_MODIFIER_CONSTRAINTS
	| VALUE_MODIFIER_CONSTRAINTS
	| OTHER_UNDETERMINED_REGIONS_CONSTRAINTS
	| DIAGONAL_CONSTRAINTS
	| GLOBAL_GALAXY_CONSTRAINTS
	| GLOBAL_CAVE_CONSTRAINTS
	| GLOBAL_DIRECTED_PATH_CONSTRAINTS
	| GLOBAL_CONNECT_FOUR_CONSTRAINTS
	| GLOBAL_LOOP_CONSTRAINTS
	| GLOBAL_YIN_YANG_CONSTRAINTS
	| GLOBAL_NURIMISAKI_CONSTRAINTS
	| GLOBAL_NURIKABE_CONSTRAINTS
	| GLOBAL_SHIKAKU_CONSTRAINTS
	| GLOBAL_PENTOMINO_TILLING_CONSTRAINTS
	| SIMPLE_SINGLE_CELL_CONSTRAINTS
	| SINGLE_CELL_ARROW_CONSTRAINTS
	| SINGLE_CELL_MULTIARROW_CONSTRAINTS
	| EDGE_CONSTRAINTS
	| CORNER_CONSTRAINTS
	| LINE_CONSTRAINTS
	| ARROW_CONSTRAINTS
	| CAGE_CONSTRAINTS
	| CLONE_CONSTRAINTS
	| OUTSIDE_EDGE_CONSTRAINTS
	| OUTSIDE_CORNER_CONSTRAINTS
	| CENTER_EDGE_CORNER_CONSTRAINTS
	| CORNER_LINE_CONSTRAINTS
	| VALUED_GLOBAL_CONSTRAINTS
	| OTHER_CONSTRAINTS
	| COSMETIC_TOOLS
	| FOG_TOOLS
	| OTHER_TOOLS;

export enum TOOL_CATEGORIES {
	CELL_INPUT_TOOL = 'Cell Input Tool',

	GLOBAL_CONSTRAINT = 'Global Constraint',
	SIMPLE_GLOBAL_CONSTRAINT = 'Simple Global Constraint',
	NEGATIVE_CONSTRAINT = 'Negative Constraint',
	VALUE_MODIFIER_CONSTRAINT = 'Value Modifier Constraint',
	UNDETERMINED_REGIONS_CONSTRAINT = 'Undetermined Regions Constraint',

	GLOBAL_GALAXY_CONSTRAINTS = 'Global Galaxy Constraints',
	GLOBAL_CAVE_CONSTRAINTS = 'Global Cave Constraints',
	GLOBAL_DIRECTED_PATH_CONSTRAINTS = 'Global Directed Path Constraints',
	GLOBAL_CONNECT_FOUR_CONSTRAINTS = 'Global Connect Four Constraints',
	GLOBAL_LOOP_CONSTRAINTS = 'Global Loop Constraints',
	GLOBAL_NURIMISAKI_CONSTRAINTS = 'Global Nurimisaki Constraints',
	GLOBAL_NURIKABE_CONSTRAINTS = 'Global Nurikabe Constraints',
	GLOBAL_YIN_YANG_CONSTRAINTS = 'Global Yin Yang Constraints',
	GLOBAL_SHIKAKU_CONSTRAINTS = 'Global Shikaku Constraints',

	DIAGONAL_CONSTRAINTS = 'Diagonal Constraints',

	LOCAL_ELEMENT = 'Local Element',
	LOCAL_CONSTRAINT = 'Local Constraint',
	SINGLE_CELL_CONSTRAINT = 'Single Cell Constraint',
	SINGLE_CELL_COLOR_TOOL = 'Single Cell Color Tool',
	SINGLE_CELL_SHAPE_TOOL = 'Single Cell Shape Tool',

	EDGE_CONSTRAINT = 'Edge Constraint',
	CORNER_CONSTRAINT = 'Corner Constraint',

	LINE_CONSTRAINT = 'Line Constraint',
	CORNER_LINE_CONSTRAINT = 'Corner Line Constraint',
	DOUBLE_ENDED_LINE_CONSTRAINT = 'Double Ended Line Constraint',
	ARROW_CONSTRAINT = 'Arrow Constraint',

	OUTSIDE_EDGE_CONSTRAINT = 'Outside Edge Constraint',
	OUTSIDE_CORNER_CONSTRAINT = 'Outside Corner Constraint',

	CAGE_CONSTRAINT = 'Cage Constraint',
	CLONE_CONSTRAINT = 'Clone Constraint',

	CENTER_CORNER_EDGE_CONSTRAINT = 'Center, Corner or Edge Constraint',
	VALUED_GLOBAL_CONSTRAINT = 'Valued Global Constraint',
	OTHER_CONSTRAINTS = 'Other Constraints',

	FOG_TOOL = 'Fog Tool',
	COSMETIC_TOOL = 'Cosmetic Tool',
	TYPABLE_TOOL = 'Typable Tool',
	SINGLE_CELL_ARROW_TOOL = 'Single Cell Arrow Tool',
	SINGLE_CELL_MULTIARROW_TOOL = 'Single Cell Multiarrow Tool',
	EDGE_TOOL = 'Edge Tool',
	CORNER_TOOL = 'Corner Tool',
	LINE_TOOL = 'Line Tool',
	CORNER_LINE_TOOL = 'Corner Line Tool',
	ARROW_TOOL = 'Arrow Tool',
	CAGE_TOOL = 'Cage Tool',
	OUTSIDE_EDGE_TOOL = 'Outside Edge Tool',
	OUTSIDE_CORNER_TOOL = 'Outside Corner Tool',
	OUTSIDE_DIRECTION_TOOL = 'Outside Direction Tool'
}

export function isDiagonalConstraint(toolId: TOOLID): boolean {
	const enumValues = Object.values(DIAGONAL_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isGlobalConstraint(toolId: TOOLID): boolean {
	const enumValues = Object.values(GLOBAL_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isLocalConstraint(toolId: TOOLID): boolean {
	const enumValues = Object.values(LOCAL_CONSTRAINTS) as string[];
	const enumValues2 = Object.values(COSMETIC_TOOLS) as string[];
	return enumValues.includes(toolId) || enumValues2.includes(toolId);
}

export function isCosmeticTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(COSMETIC_TOOLS) as string[];
	return enumValues.includes(toolId);
}

export function isElement(toolId: TOOLID): boolean {
	return isLocalConstraint(toolId) || isCosmeticTool(toolId) || isGlobalConstraint(toolId);
}

export function isSimpleSingleCellTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(SIMPLE_SINGLE_CELL_CONSTRAINTS) as string[];
	return (
		enumValues.includes(toolId) ||
		toolId === TOOLS.COSMETIC_CELL_CENTER_SHAPE ||
		toolId === TOOLS.FOG_LIGHTS
	);
}

export function isSingleCellArrowTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(SINGLE_CELL_ARROW_CONSTRAINTS) as string[];
	return enumValues.includes(toolId) || toolId === TOOLS.COSMETIC_CELL_ARROW;
}

export function isSingleCellMultiArrowTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(SINGLE_CELL_MULTIARROW_CONSTRAINTS) as string[];
	return enumValues.includes(toolId) || toolId === TOOLS.COSMETIC_CELL_MULTI_ARROW;
}

export function isSingleCellTool(toolId: TOOLID): boolean {
	return (
		isSimpleSingleCellTool(toolId) ||
		isSingleCellArrowTool(toolId) ||
		isSingleCellMultiArrowTool(toolId)
	);
}

export function isEdgeTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(EDGE_CONSTRAINTS) as string[];
	return (
		enumValues.includes(toolId) ||
		toolId === TOOLS.COSMETIC_EDGE ||
		toolId === TOOLS.COSMETIC_DIRECTED_ADJACENT_CELLS
	);
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

export function isCenterEdgeCornerTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CENTER_EDGE_CORNER_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isCornerLineTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CORNER_LINE_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
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

export function isValuedGlobalConstraint(toolId: TOOLID): boolean {
	const enumValues = Object.values(VALUED_GLOBAL_CONSTRAINTS) as string[];
	return enumValues.includes(toolId);
}

export function isCellInputTool(toolId: TOOLID): boolean {
	const enumValues = Object.values(CELL_INPUT_TOOLS) as string[];
	return enumValues.includes(toolId);
}

export function isUnderlayTool(toolId: TOOLID): boolean {
	return (
		isOutsideDirectionTool(toolId) ||
		isSingleCellTool(toolId) ||
		isLineTool(toolId) ||
		isArrowTool(toolId) ||
		isCageTool(toolId) ||
		isCloneTool(toolId)
	);
}

export function isOverlayTool(toolId: TOOLID): boolean {
	return (
		isEdgeTool(toolId) ||
		isCornerTool(toolId) ||
		isCenterEdgeCornerTool(toolId) ||
		isCornerLineTool(toolId)
	);
}

export const LOCAL_CONSTRAINTS_CATEGORIES = [
	TOOL_CATEGORIES.SINGLE_CELL_CONSTRAINT,
	TOOL_CATEGORIES.EDGE_CONSTRAINT,
	TOOL_CATEGORIES.CORNER_CONSTRAINT,
	TOOL_CATEGORIES.LINE_CONSTRAINT,
	TOOL_CATEGORIES.CORNER_LINE_CONSTRAINT,
	TOOL_CATEGORIES.ARROW_CONSTRAINT,
	TOOL_CATEGORIES.CAGE_CONSTRAINT,
	TOOL_CATEGORIES.CLONE_CONSTRAINT,
	TOOL_CATEGORIES.OUTSIDE_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.OUTSIDE_CORNER_CONSTRAINT,
	TOOL_CATEGORIES.CENTER_CORNER_EDGE_CONSTRAINT,
	TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT,
	TOOL_CATEGORIES.OTHER_CONSTRAINTS
];

export const ELEMENTS_CATEGORIES = [
	TOOL_CATEGORIES.SIMPLE_GLOBAL_CONSTRAINT,
	TOOL_CATEGORIES.DIAGONAL_CONSTRAINTS,

	TOOL_CATEGORIES.VALUE_MODIFIER_CONSTRAINT,
	TOOL_CATEGORIES.UNDETERMINED_REGIONS_CONSTRAINT,
	...LOCAL_CONSTRAINTS_CATEGORIES,
	TOOL_CATEGORIES.FOG_TOOL,
	TOOL_CATEGORIES.COSMETIC_TOOL
];

export const GLOBAL_CONSTRAINT_CATEGORIES = [TOOL_CATEGORIES.NEGATIVE_CONSTRAINT];

export function toolKeyFromString(str: string): TOOLID | undefined {
	for (const val of Object.values(TOOLS)) {
		if (val === str) return val;
	}
	// throw new Error(`No matching TOOLS for string: ${str}`);
	return undefined;
}

export function isToolOfType<T extends object>(tool: TOOLID, type: T): boolean {
	return Object.values(type).includes(tool);
}
