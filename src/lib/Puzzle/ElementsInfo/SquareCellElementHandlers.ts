import type { SquareCellElementInfo } from '../ElementInfo';
import { TOOLS } from '../Tools';
import {
	arrowInfo,
	averageArrowInfo,
	bulbousArrowInfo,
	chaosConstructionArrowInfo
} from './ArrowToolsElementsInfo';
import {
	divisibleKillerCageInfo,
	doublersKillerCageInfo,
	invertedKillerCageInfo,
	killerCageInfo,
	negatorsKillerCageInfo,
	parityBalanceCageInfo,
	putteriaCageInfo,
	multisetCageInfo,
	spotlightCageInfo,
	sumCageInfo,
	sumCageLookAndSayInfo,
	uniqueDigitsCageInfo,
	yinYangAntithesisKillerCageInfo,
	yinYangBreakevenKillerCageInfo,
	vaultedCageInfo
} from './CageToolsElementsInfo';
import {
	centerPMInfo,
	cornerPMInfo,
	digitInfo,
	givenInfo,
	highlightsInfo,
	outsideInfo,
	penToolInfo,
	regionsInfo
} from './CellInputElementsInfo';
import {
	rotationallySymmetricGalaxyCenterSumInfo,
	yinYangSumOfAdjacentShadedEdgeOrCornerInfo
} from './CenterEdgeCornerElementsInfo';
import { cloneRegionInfo } from './CloneToolsElementsInfo';
import {
	cornerEvenCountInfo,
	cornerSumInfo,
	cornerSumOfThreeEqualsTheOtherInfo,
	equalDiagonalDifferencesInfo,
	productSquareInfo,
	quadrupleInfo
} from './CornerToolsElementsInfo';
import {
	cosmeticArrowInfo,
	cosmeticCageInfo,
	cosmeticCellArrowInfo,
	cosmeticCellMultiArrowInfo,
	cosmeticCellShapeInfo,
	cosmeticCornerInfo,
	cosmeticEdgeInfo,
	cosmeticLineInfo,
	cosmeticLineWithCircleEndsInfo,
	cosmeticLineWithPolygonEndsInfo,
	cosmeticOutsideDirectionInfo
} from './CosmeticToolsElementsInfo';
import {
	chaosConstructionSuguruBorderInfo,
	differenceInfo,
	edgeCaveOneOfEachInfo,
	edgeFactorInfo,
	edgeInequalityInfo,
	edgeModuloInfo,
	edgeProductInfo,
	edgeSumInfo,
	fillominoRegionBorderInfo,
	oneWayDoorInfo,
	ratioInfo,
	unknownRegionBorderInfo,
	xvInfo,
	xyDifferencesInfo,
	yinYangKropkiInfo,
	yinYangWhiteKropkiInfo
} from './EdgeToolsElementsInfo';
import {
	allOddDigitsAreOrthogonallyConnectedInfo,
	antiEntropyInfo,
	antiGiraffeInfo,
	antikingInfo,
	antiknightInfo,
	antiLongKnightInfo,
	boxRowsAndColumnsFormModularityAndEntropySetInfo,
	disjointGroupsInfo,
	globalIndexingColumnInfo,
	hexedSudokuInfo,
	leaveEmptyCellsEmptyInfo,
	negativeAntidiagonalInfo,
	negativeDiagonalInfo,
	nonconsecutiveInfo,
	nonratioInfo,
	parityMirrorNegativeDiagonalInfo,
	parityMirrorPositiveDiagonalInfo,
	positiveAntidiagonalInfo,
	positiveDiagonalInfo,
	sudokuRulesDoNotApplyInfo,
	tangoInfo
} from './GlobalConstraintsElementsInfo';
import {
	chaosConstructionSuguruInfo,
	connectFourInfo,
	directedPathTeleportRenbanSegmentsInfo,
	directedPathTeleportSegmentsSumInfo,
	galaxiesInfo,
	goldilocksZoneInfo,
	litsBlackAndWhiteStarBattleInfo,
	mazeDirectedPathInfo,
	norinoriInfo,
	norinoriStarBattleInfo,
	numberedChaosConstructionInfo,
	nurikabeInfo,
	pentominoTillingInfo,
	shikakuInfo,
	LITSInfo,
	fillominoInfo
} from './UndeterminedRegionsElementsInfo';
import {
	yinYangFillominoParityInfo,
	twilightCaveFillominoRegionShadingInfo,
	caveInfo,
	cellCenterLoopNoTouchingInfo,
	sashiganeRegionsInfo,
	twoContiguousRegionsInfo,
	nurimisakiInfo,
	yinYangInfo,
	chaosConstructionInfo
} from './UndeterminedRegionsElementsInfo';
import {
	adjacentMultiplesLineInfo,
	arithmeticSequenceLineInfo,
	atLeastXLineInfo,
	betweenLineInfo,
	adjacentDifferencesCountLineInfo,
	doubleArrowLineInfo,
	doubleRenbanLineInfo,
	doublersBetweenLineInfo,
	doublersDoubleArrowLineInfo,
	doublersThermometerInfo,
	entropicLineInfo,
	entropicOrModularLineInfo,
	highLowOscilatorLineInfo,
	indexingColumnIsXLineInfo,
	indexingRowIsXLineInfo,
	nabnerLineInfo,
	lockoutLineInfo,
	maximumAdjacentDifferenceLineInfo,
	modularLineInfo,
	modularOrUnimodularLineInfo,
	nConsecutiveFuzzySumLineInfo,
	nConsecutiveRenbanLineInfo,
	oddEvenOscilatorLineInfo,
	palindromeInfo,
	parityCountLineInfo,
	productLineInfo,
	productOfEndsEqualsSumOfLineInfo,
	regionSumLineInfo,
	renbanLineInfo,
	renbanOrWhispersLineInfo,
	renrenbanbanLineInfo,
	repeatedDigitsLineInfo,
	rowCyclethermometerInfo,
	rowSumLineInfo,
	sameParityLineLineInfo,
	splitPeasLineInfo,
	sumLineInfo,
	superfuzzyArrowInfo,
	thermometerInfo,
	tightropeLineInfo,
	unimodularLineInfo,
	uniqueValuesLineInfo,
	whispersLineInfo,
	xvLineInfo,
	yinYangRegionSumLineInfo,
	yinYangShadedWhispersLineInfo,
	yinYangUnshadedEntropicLineInfo,
	yinYangUnshadedModularLineInfo,
	lookandSayLineInfo,
	slowThermometerInfo,
	indexLineInfo,
	yinYangIndexingLineColoringInfo,
	renbanOrNabnerLineInfo,
	headlessArrowInfo,
	outOfOrderConsecutiveLineInfo,
	ZipperLineInfo,
	segmentedSumLineInfo,
	dutchWhispersInfo,
	goldilocksZoneRegionSumLineInfo,
	fuzzyThermometerInfo,
	customThermometerInfo,
	segmentedSumAndRenbanLineInfo,
	ambiguousArrowInfo,
	adjacentCellsAreMultiplesOfDifferenceLineInfo,
	indexerCellsRegionSubsetLineInfo,
	peapodsLineInfo
} from './LineConstraintsElementsInfo';
import {
	littleKillerLookAndSayInfo,
	littleKillerProductInfo,
	littleKillerRegionSumProductInfo,
	littleKillerSumInfo,
	negatorsLittleKillerSumInfo,
	xOmitLittleKillerSumInfo
} from './OutsideCornerToolsElementsInfo';
import {
	battlefieldInfo,
	brokenXSumInfo,
	chaosConstructionSumOfFirstEachRegionInfo,
	chaosConstructionXIndexRegionInfo,
	loopwhichesInfo,
	mysterySandwichSumInfo,
	outsideConsecutiveSumInfo,
	outsideEdgeYinYangSumOfShadedInfo,
	pentominoBorderCountInfo,
	risingStreakInfo,
	sandwichSumInfo,
	sandwichSumXorXSumInfo,
	shiftedXSumInfo,
	shortsightedXSumInfo,
	skyscrapersInfo,
	xIndexInfo,
	xSumInfo,
	xSumSkyscrapersInfo
} from './OutsideEdgeElementsInfo';
import {
	adjacentCellsInDifferentDirectionsHaveOpositeParityInfo,
	caveClueInfo,
	cellNotOnTheLoopInfo,
	cellOnTheLoopInfo,
	chaosConstructionArrowKnotsInfo,
	countingCirclesInfo,
	countLoopNeighbourCellsInfo,
	countSameParityNeighborCellsInfo,
	diagonallyAdjacentSumInfo,
	evenInfo,
	evenMinesweeperInfo,
	farsightInfo,
	friendlyCellInfo,
	highDigitInfo,
	indexingColumnInfo,
	indexingRowInfo,
	lowDigitInfo,
	maximumInfo,
	minimumInfo,
	notWatchtowerInfo,
	nurimisakiUnshadedEndpointInfo,
	oddInfo,
	oddMinesweeperInfo,
	orthogonalSumInfo,
	radarInfo,
	sandwichRowColCountInfo,
	sashiganeArrowPointsToBendInfo,
	sashiganeBendRegionCountInfo,
	sashiganeRegionSumInfo,
	seenRegionBordersCountInfo,
	thermoSightlineLoopArrowInfo,
	twilightCaveFillominoClueInfo,
	twoContiguousRegionsRowColumnOppositeSetCountInfo,
	chaosConstructionChessSumsInfo,
	watchtowerInfo,
	yinYangAdjacentSameShadeCountInfo,
	yinYangMinesweeperInfo,
	yinYangSeenSameShadeCellsInfo,
	yinYangSeenShadedCellsInfo,
	yinYangSeenUnshadedCellsInfo,
	uniqueCellsInfo,
	yinYangShadedNeighboursCountInfo,
	coloredCountingCirclesInfo,
	directedPathStartInfo,
	directedPathEndInfo,
	nurikabeIslandProductOfSumAndSizeInfo,
	teleportInfo,
	connectFourYellowInfo,
	connectFourRedInfo,
	seenEvenCountInfo,
	seenOddCountInfo,
	chaosConstructionSeenSameRegionCountInfo,
	nurikabeSeenWaterwayCellsInfo,
	nurikabeIslandSizeCellInfo,
	reverseCountingCirclesInfo,
	cellKnightWhispersInfo,
	shikakuRegionSizeInfo,
	shikakuRegionSumInfo,
	yinYangLabeledShadeCellInfo} from './SingleCellElementsInfo';
import { customFogClearingInfo, fogLighsInfo } from './FogElementsInfo';
import {
	chaosCountSeenCellsInTheSameRegionArrowsInfo,
	coldArrowsInfo,
	connectFourCountCellsOfSameColorInfo,
	countCellsNotInTheSameRegionArrowsInfo,
	hotArrowsInfo,
	nextNumberedRegionDistanceArrowsInfo,
	nurikabeCountIslandCellsArrowsInfo,
	yinYangCountShadedCellsInfo
} from './SingleCellMultiArrowElementsInfo';
import { yinYangSumOfCellsOfOppositeColorInfo } from './SingleCellMultiArrowElementsInfo';
import {
	loopCellCountArrowsInfo,
	yinYangCountUniqueFillominoSameShadingInfo,
	sameGalaxyUnobstructedCountArrowsInfo
} from './SingleCellMultiArrowElementsInfo';
import {
	forbiddenKnightSumInfo,
	forbiddenOrthogonallyAdjacentSumInfo,
	litsMaxTetrominoSumInfo,
	minimumDiagonallyAdjacentDifferenceInfo
} from './ValuedGlobalConstraintsElementsInfo';
import {
	doublersInfo,
	indexerCellsInfo,
	negatorsInfo,
	nexusInfo
} from './ValueModifierConstraintsElementsInfo';
import { mazeWallInfo } from './CornerLineToolsElementsInfo';

export const squareCellElementHandlers: Record<string, SquareCellElementInfo> = {
	// Cell input elements
	[TOOLS.GIVEN]: givenInfo,
	[TOOLS.DIGIT]: digitInfo,
	[TOOLS.REGIONS]: regionsInfo,
	[TOOLS.OUTSIDE]: outsideInfo,
	[TOOLS.CORNER_PM]: cornerPMInfo,
	[TOOLS.CENTER_PM]: centerPMInfo,
	[TOOLS.HIGHLIGHTS]: highlightsInfo,
	[TOOLS.PEN_TOOL]: penToolInfo,

	//Global Constraints
	[TOOLS.SUDOKU_RULES_DO_NOT_APPLY]: sudokuRulesDoNotApplyInfo,
	[TOOLS.LEAVE_EMPTY_CELLS_EMPTY]: leaveEmptyCellsEmptyInfo,
	[TOOLS.LITS]: LITSInfo,
	[TOOLS.HEXED_SUDOKU]: hexedSudokuInfo,
	[TOOLS.FILLOMINO]: fillominoInfo,
	[TOOLS.ANTIKNIGHT]: antiknightInfo,
	[TOOLS.ANTI_LONG_KNIGHT]: antiLongKnightInfo,
	[TOOLS.ANTIKING]: antikingInfo,
	[TOOLS.ANTI_GIRAFFE]: antiGiraffeInfo,
	[TOOLS.DISJOINT_GROUPS]: disjointGroupsInfo,
	[TOOLS.TANGO]: tangoInfo,
	[TOOLS.NONCONSECUTIVE]: nonconsecutiveInfo,
	[TOOLS.NONRATIO]: nonratioInfo,
	[TOOLS.ANTI_ENTROPY]: antiEntropyInfo,
	[TOOLS.GLOBAL_INDEXING_COLUMN]: globalIndexingColumnInfo,
	[TOOLS.ALL_ODD_DIGITS_ARE_ORTHOGONALLY_CONNECTED]: allOddDigitsAreOrthogonallyConnectedInfo,
	[TOOLS.BOX_ROWS_AND_COLUMNS_FORM_MODULARITY_AND_ENTROPY_SETS]:
		boxRowsAndColumnsFormModularityAndEntropySetInfo,

	[TOOLS.NEGATIVE_DIAGONAL]: negativeDiagonalInfo,
	[TOOLS.POSITIVE_DIAGONAL]: positiveDiagonalInfo,
	[TOOLS.NEGATIVE_ANTIDIAGONAL]: negativeAntidiagonalInfo,
	[TOOLS.POSITIVE_ANTIDIAGONAL]: positiveAntidiagonalInfo,
	[TOOLS.PARITY_MIRROR_NEGATIVE_DIAGONAL]: parityMirrorNegativeDiagonalInfo,
	[TOOLS.PARITY_MIRROR_POSITIVE_DIAGONAL]: parityMirrorPositiveDiagonalInfo,

	[TOOLS.DOUBLERS]: doublersInfo,
	[TOOLS.NEGATORS]: negatorsInfo,
	[TOOLS.NEXUS]: nexusInfo,
	[TOOLS.INDEXER_CELLS]: indexerCellsInfo,
	// [TOOLS.VAMPIRE_AND_PREY]: vampireAndPreyInfo,
	// [TOOLS.MARKED_CELLS]: markedCellsInfo,
	// [TOOLS.HOT_CELLS]: hotCellsInfo,
	// [TOOLS.COLD_CELLS]: coldCellsInfo,
	// [TOOLS.DECREMENT_FOUNTAIN]: decrementFountainInfo,

	// Undetermined Regions Constraints
	[TOOLS.CHAOS_CONSTRUCTION]: chaosConstructionInfo,
	[TOOLS.NUMBERED_CHAOS_CONSTRUCTION]: numberedChaosConstructionInfo,
	[TOOLS.CHAOS_CONSTRUCTION_SUGURU]: chaosConstructionSuguruInfo,
	[TOOLS.YIN_YANG]: yinYangInfo,
	[TOOLS.NURIMISAKI]: nurimisakiInfo,
	[TOOLS.NURIKABE]: nurikabeInfo,

	[TOOLS.TWO_CONTIGUOUS_REGIONS]: twoContiguousRegionsInfo,
	[TOOLS.SASHIGANE]: sashiganeRegionsInfo,
	[TOOLS.NORINORI]: norinoriInfo,
	[TOOLS.SHIKAKU]: shikakuInfo,
	[TOOLS.GOLDILOCKS_ZONE]: goldilocksZoneInfo,
	[TOOLS.CELL_CENTER_LOOP_NO_TOUCHING]: cellCenterLoopNoTouchingInfo,
	[TOOLS.CAVE]: caveInfo,
	[TOOLS.TWILIGHT_CAVE_FILLOMINO_REGION_SHADING]: twilightCaveFillominoRegionShadingInfo,

	[TOOLS.GALAXIES]: galaxiesInfo,
	[TOOLS.PENTOMINO_TILLING]: pentominoTillingInfo,

	[TOOLS.LITS_BLACK_WHITE_STAR_BATTLE]: litsBlackAndWhiteStarBattleInfo,
	[TOOLS.NORINORI_STAR_BATTLE]: norinoriStarBattleInfo,

	[TOOLS.MAZE_DIRECTED_PATH]: mazeDirectedPathInfo,
	[TOOLS.DIRECTED_PATH_TELEPORT_SEGMENTS_SUM]: directedPathTeleportSegmentsSumInfo,
	[TOOLS.DIRECTED_PATH_TELEPORT_RENBAN_SEGMENTS]: directedPathTeleportRenbanSegmentsInfo,

	[TOOLS.CONNECT_FOUR]: connectFourInfo,

	// Single Cell Constraints
	[TOOLS.ODD]: oddInfo,
	[TOOLS.EVEN]: evenInfo,
	[TOOLS.MINIMUM]: minimumInfo,
	[TOOLS.MAXIMUM]: maximumInfo,
	// [TOOLS.PRIME_CELL]: primeCellInfo,
	[TOOLS.ODD_MINESWEEPER]: oddMinesweeperInfo,
	[TOOLS.EVEN_MINESWEEPER]: evenMinesweeperInfo,
	[TOOLS.WATCHTOWER]: watchtowerInfo,
	[TOOLS.NOT_WATCHTOWER]: notWatchtowerInfo,
	[TOOLS.FARSIGHT]: farsightInfo,
	[TOOLS.RADAR]: radarInfo,
	[TOOLS.COUNT_SAME_PARITY_NEIGHBOUR_CELLS]: countSameParityNeighborCellsInfo,
	[TOOLS.ORTHOGONAL_SUM]: orthogonalSumInfo,
	[TOOLS.DIAGONALLY_ADJACENT_SUM]: diagonallyAdjacentSumInfo,
	[TOOLS.INDEXING_COLUMN]: indexingColumnInfo,
	[TOOLS.INDEXING_ROW]: indexingRowInfo,
	[TOOLS.LOW_DIGIT]: lowDigitInfo,
	[TOOLS.HIGH_DIGIT]: highDigitInfo,
	[TOOLS.FRIENDLY_CELL]: friendlyCellInfo,
	[TOOLS.ADJACENT_CELLS_IN_DIFFERENT_DIRECTIONS_HAVE_OPPOSITE_PARITY]:
		adjacentCellsInDifferentDirectionsHaveOpositeParityInfo,
	[TOOLS.SANDWICH_ROW_COL_COUNT]: sandwichRowColCountInfo,
	[TOOLS.COUNTING_CIRCLES]: countingCirclesInfo,
	[TOOLS.REVERSE_COUNTING_CIRCLES]: reverseCountingCirclesInfo,
	[TOOLS.COLORED_COUNTING_CIRCLES]: coloredCountingCirclesInfo,
	[TOOLS.UNIQUE_CELLS]: uniqueCellsInfo,
	[TOOLS.SEEN_EVEN_COUNT]: seenEvenCountInfo,
	[TOOLS.SEEN_ODD_COUNT]: seenOddCountInfo,
	[TOOLS.CELL_KNIGHT_WHISPERS]: cellKnightWhispersInfo,

	[TOOLS.YIN_YANG_MINESWEEPER]: yinYangMinesweeperInfo,
	[TOOLS.YIN_YANG_SEEN_UNSHADED_CELLS]: yinYangSeenUnshadedCellsInfo,
	[TOOLS.YIN_YANG_SEEN_SHADED_CELLS]: yinYangSeenShadedCellsInfo,
	[TOOLS.YIN_YANG_SEEN_SAME_SHADE_CELLS]: yinYangSeenSameShadeCellsInfo,
	[TOOLS.YIN_YANG_ADJACENT_SAME_SHADE_COUNT]: yinYangAdjacentSameShadeCountInfo,
	[TOOLS.YIN_YANG_SHADED_NEIGHBOURS_COUNT]: yinYangShadedNeighboursCountInfo,
	[TOOLS.YIN_YANG_LABELED_SHADE_CELL]: yinYangLabeledShadeCellInfo,

	[TOOLS.TWO_CONTIGUOUS_REGIONS_ROW_COLUMN_OPPOSITE_SET_COUNT]:
		twoContiguousRegionsRowColumnOppositeSetCountInfo,
	[TOOLS.SEEN_REGION_BORDERS_COUNT]: seenRegionBordersCountInfo,
	[TOOLS.NURIMISAKI_UNSHADED_ENDPOINTS]: nurimisakiUnshadedEndpointInfo,
	[TOOLS.SASHIGANE_BEND_REGION_COUNT]: sashiganeBendRegionCountInfo,
	[TOOLS.SASHIGANE_REGION_SUM]: sashiganeRegionSumInfo,

	[TOOLS.CELL_ON_THE_LOOP]: cellOnTheLoopInfo,
	[TOOLS.CELL_NOT_ON_THE_LOOP]: cellNotOnTheLoopInfo,
	[TOOLS.COUNT_LOOP_NEIGHBOUR_CELLS]: countLoopNeighbourCellsInfo,

	[TOOLS.CAVE_CLUE]: caveClueInfo,
	[TOOLS.TWILIGHT_CAVE_FILLOMINO_CLUE]: twilightCaveFillominoClueInfo,
	[TOOLS.YIN_YANG_FILLOMINO_PARITY]: yinYangFillominoParityInfo,

	[TOOLS.SHIKAKU_REGION_SIZE]: shikakuRegionSizeInfo,
	[TOOLS.SHIKAKU_REGION_SUM]: shikakuRegionSumInfo,

	[TOOLS.CHAOS_CONSTRUCTION_CHESS_SUMS]: chaosConstructionChessSumsInfo,
	[TOOLS.CHAOS_CONSTRUCTION_ARROW_KNOTS]: chaosConstructionArrowKnotsInfo,
	[TOOLS.CHAOS_CONSTRUCTION_SEEN_SAME_REGION_COUNT]: chaosConstructionSeenSameRegionCountInfo,

	[TOOLS.NURIKABE_ISLAND_PRODUCT_OF_SUM_AND_SIZE_CLUE]: nurikabeIslandProductOfSumAndSizeInfo,

	[TOOLS.DIRECTED_PATH_START]: directedPathStartInfo,
	[TOOLS.DIRECTED_PATH_END]: directedPathEndInfo,
	[TOOLS.TELEPORT]: teleportInfo,

	[TOOLS.CONNECT_FOUR_YELLOW]: connectFourYellowInfo,
	[TOOLS.CONENCT_FOUR_RED]: connectFourRedInfo,

	// Single Cell Arrow Constraint
	[TOOLS.SASHIGANE_ARROW_POINTS_TO_BEND]: sashiganeArrowPointsToBendInfo,
	[TOOLS.THERMO_SIGHTLINE_LOOP_ARROW]: thermoSightlineLoopArrowInfo,

	// Single Cell Multi Arrow Constraint
	[TOOLS.HOT_ARROWS]: hotArrowsInfo,
	[TOOLS.COLD_ARROWS]: coldArrowsInfo,
	[TOOLS.CHAOS_CONSTRUCTION_COUNT_CELLS_NOT_IN_THE_SAME_REGION_ARROWS]:
		countCellsNotInTheSameRegionArrowsInfo,
	[TOOLS.CHAOS_CONSTRUCTION_COUNT_SEEN_CELLS_IN_THE_SAME_REGION_ARROWS]:
		chaosCountSeenCellsInTheSameRegionArrowsInfo,
	[TOOLS.YIN_YANG_SUM_OF_CELLS_OF_OPPOSITE_COLOR]: yinYangSumOfCellsOfOppositeColorInfo,
	[TOOLS.YIN_YANG_COUNT_SHADED_CELLS]: yinYangCountShadedCellsInfo,
	[TOOLS.LOOP_CELL_COUNT_ARROWS]: loopCellCountArrowsInfo,
	[TOOLS.YIN_YANG_COUNT_UNIQUE_FILLOMINO_SAME_SHADING_ARROWS]:
		yinYangCountUniqueFillominoSameShadingInfo,
	[TOOLS.SAME_GALAXY_UNOBSTRUCTED_COUNT_ARROWS]: sameGalaxyUnobstructedCountArrowsInfo,
	[TOOLS.NURIKABE_COUNT_ISLAND_CELLS_ARROWS]: nurikabeCountIslandCellsArrowsInfo,
	[TOOLS.NURIKABE_SEEN_WATERWAY_CELLS]: nurikabeSeenWaterwayCellsInfo,
	[TOOLS.NURIKABE_ISLAND_SIZE_CELL]: nurikabeIslandSizeCellInfo,

	[TOOLS.CONNECT_FOUR_COUNT_CELLS_OF_SAME_COLOR]: connectFourCountCellsOfSameColorInfo,

	[TOOLS.NEXT_NUMBERED_REGION_DISTANCE_ARROWS]: nextNumberedRegionDistanceArrowsInfo,

	// Edge Constraints
	[TOOLS.DIFFERENCE]: differenceInfo,
	[TOOLS.RATIO]: ratioInfo,
	[TOOLS.XV]: xvInfo,
	[TOOLS.EDGE_INEQUALITY]: edgeInequalityInfo,
	[TOOLS.EDGE_SUM]: edgeSumInfo,
	[TOOLS.EDGE_PRODUCT]: edgeProductInfo,
	[TOOLS.EDGE_MODULO]: edgeModuloInfo,
	[TOOLS.EDGE_FACTOR]: edgeFactorInfo,
	[TOOLS.XY_DIFFERENCES]: xyDifferencesInfo,
	[TOOLS.YIN_YANG_WHITE_KROPKI]: yinYangWhiteKropkiInfo,
	[TOOLS.YIN_YANG_KROPKI]: yinYangKropkiInfo,

	[TOOLS.FILLOMINO_REGION_BORDER]: fillominoRegionBorderInfo,
	[TOOLS.UNKNOWN_REGION_BORDER]: unknownRegionBorderInfo,
	[TOOLS.CHAOS_CONSTRUCTION_SUGURU_BORDER]: chaosConstructionSuguruBorderInfo,
	[TOOLS.EDGE_CAVE_ONE_OF_EACH]: edgeCaveOneOfEachInfo,

	[TOOLS.ONE_WAY_DOOR]: oneWayDoorInfo,

	// Corner Constraints
	[TOOLS.QUADRUPLE]: quadrupleInfo,
	[TOOLS.CORNER_SUM]: cornerSumInfo,
	[TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]: cornerSumOfThreeEqualsTheOtherInfo,
	[TOOLS.CORNER_EVEN_COUNT]: cornerEvenCountInfo,
	[TOOLS.PRODUCT_SQUARE]: productSquareInfo,
	[TOOLS.EQUAL_DIAGONAL_DIFFERENCES]: equalDiagonalDifferencesInfo,

	// Line Constraints
	[TOOLS.THERMOMETER]: thermometerInfo,
	[TOOLS.FUZZY_THERMOMETER]: fuzzyThermometerInfo,
	[TOOLS.SLOW_THERMOMETER]: slowThermometerInfo,
	[TOOLS.CUSTOM_THERMOMETER]: customThermometerInfo,
	[TOOLS.ROW_CYCLE_THERMOMETER]: rowCyclethermometerInfo,

	[TOOLS.PALINDROME]: palindromeInfo,

	[TOOLS.RENBAN_LINE]: renbanLineInfo,
	[TOOLS.DOUBLE_RENBAN_LINE]: doubleRenbanLineInfo,
	[TOOLS.RENRENBANBAN_LINE]: renrenbanbanLineInfo,
	[TOOLS.N_CONSECUTIVE_RENBAN_LINE]: nConsecutiveRenbanLineInfo,
	[TOOLS.NABNER_LINE]: nabnerLineInfo,

	[TOOLS.WHISPERS_LINE]: whispersLineInfo,
	[TOOLS.DUTCH_WHISPERS]: dutchWhispersInfo,
	[TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE]: maximumAdjacentDifferenceLineInfo,
	[TOOLS.RENBAN_OR_WHISPERS_LINE]: renbanOrWhispersLineInfo,
	[TOOLS.RENBAN_OR_NABNER_LINE]: renbanOrNabnerLineInfo,
	[TOOLS.OUT_OF_ORDER_CONSECUTIVE_LINE]: outOfOrderConsecutiveLineInfo,

	[TOOLS.INDEX_LINE]: indexLineInfo,
	[TOOLS.UNIQUE_VALUES_LINE]: uniqueValuesLineInfo,
	[TOOLS.REPEATED_DIGITS_LINE]: repeatedDigitsLineInfo,

	[TOOLS.REGION_SUM_LINE]: regionSumLineInfo,
	[TOOLS.SUM_LINE]: sumLineInfo,
	[TOOLS.XV_LINE]: xvLineInfo,
	[TOOLS.ROW_SUM_LINE]: rowSumLineInfo,
	[TOOLS.AT_LEAST_X_LINE]: atLeastXLineInfo,
	[TOOLS.SUPERFUZZY_ARROW]: superfuzzyArrowInfo,
	[TOOLS.AMBIGUOUS_ARROW]: ambiguousArrowInfo,
	[TOOLS.HEADLESS_ARROW]: headlessArrowInfo,
	[TOOLS.N_CONSECUTIVE_FUZZY_SUM_LINE]: nConsecutiveFuzzySumLineInfo,
	// [TOOLS.ADJACENT_CELL_SUM_IS_PRIME_LINE]: adjacentCellSumIsPrimeLineInfo,
	[TOOLS.PRODUCT_LINE]: productLineInfo,
	[TOOLS.ADJACENT_MULTIPLES_LINE]: adjacentMultiplesLineInfo,
	[TOOLS.ADJACENT_DIFFERENCES_COUNT_LINE]: adjacentDifferencesCountLineInfo,
	[TOOLS.LOOK_AND_SAY_LINE]: lookandSayLineInfo,
	[TOOLS.ARITHMETIC_SEQUENCE_LINE]: arithmeticSequenceLineInfo,
	[TOOLS.ZIPPER_LINE]: ZipperLineInfo,
	[TOOLS.SEGMENTED_SUM_LINE]: segmentedSumLineInfo,
	[TOOLS.SEGMENTED_SUM_AND_RENBAN_LINE]: segmentedSumAndRenbanLineInfo,
	[TOOLS.ADJACENT_CELLS_ARE_MULTIPLES_OF_DIFFERENCE_LINE]:
		adjacentCellsAreMultiplesOfDifferenceLineInfo,

	[TOOLS.SAME_PARITY_LINE]: sameParityLineLineInfo,
	[TOOLS.MODULAR_LINE]: modularLineInfo,
	[TOOLS.UNIMODULAR_LINE]: unimodularLineInfo,
	[TOOLS.MODULAR_OR_UNIMODULAR_LINE]: modularOrUnimodularLineInfo,
	[TOOLS.ODD_EVEN_OSCILLATOR_LINE]: oddEvenOscilatorLineInfo,
	[TOOLS.HIGH_LOW_OSCILLATOR_LINE]: highLowOscilatorLineInfo,
	[TOOLS.ENTROPIC_LINE]: entropicLineInfo,
	[TOOLS.ENTROPIC_OR_MODULAR_LINE]: entropicOrModularLineInfo,

	[TOOLS.INDEXING_COLUMN_IS_X_LINE]: indexingColumnIsXLineInfo,
	[TOOLS.INDEXING_ROW_IS_X_LINE]: indexingRowIsXLineInfo,

	[TOOLS.INDEXER_CELLS_REGION_SUBSET_LINE]: indexerCellsRegionSubsetLineInfo,
	[TOOLS.PEAPODS]: peapodsLineInfo,

	// Yin Yang Lines
	[TOOLS.YIN_YANG_INDEXING_LINE_COLORING]: yinYangIndexingLineColoringInfo,
	[TOOLS.YIN_YANG_SHADED_WHISPERS_LINE]: yinYangShadedWhispersLineInfo,
	[TOOLS.YIN_YANG_UNSHADED_ENTROPIC_LINE]: yinYangUnshadedEntropicLineInfo,
	[TOOLS.YIN_YANG_UNSHADED_MODULAR_LINE]: yinYangUnshadedModularLineInfo,
	[TOOLS.YIN_YANG_REGION_SUM_LINE]: yinYangRegionSumLineInfo,

	[TOOLS.GOLDILOCKS_ZONE_REGION_SUM]: goldilocksZoneRegionSumLineInfo,

	// Line with Circle ends Constraints
	[TOOLS.BETWEEN_LINE]: betweenLineInfo,
	[TOOLS.LOCKOUT_LINE]: lockoutLineInfo,
	[TOOLS.PARITY_COUNT_LINE]: parityCountLineInfo,
	[TOOLS.TIGHTROPE_LINE]: tightropeLineInfo,
	[TOOLS.DOUBLE_ARROW_LINE]: doubleArrowLineInfo,
	[TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]: productOfEndsEqualsSumOfLineInfo,
	[TOOLS.SPLIT_PEAS]: splitPeasLineInfo,

	[TOOLS.DOUBLERS_THERMOMETER]: doublersThermometerInfo,
	[TOOLS.DOUBLERS_BETWEEN_LINE]: doublersBetweenLineInfo,
	[TOOLS.DOUBLERS_DOUBLE_ARROW_LINE]: doublersDoubleArrowLineInfo,

	// Arrow constraints
	[TOOLS.ARROW]: arrowInfo,
	[TOOLS.CHAOS_CONSTRUCTION_ARROW]: chaosConstructionArrowInfo,
	[TOOLS.AVERAGE_ARROW]: averageArrowInfo,
	[TOOLS.BULBOUS_ARROW]: bulbousArrowInfo,

	// Corner Line Constraints
	[TOOLS.MAZE_WALL]: mazeWallInfo,

	// Cage Constraints
	[TOOLS.KILLER_CAGE]: killerCageInfo,
	[TOOLS.UNIQUE_DIGITS_CAGE]: uniqueDigitsCageInfo,
	[TOOLS.INVERTED_KILLER_CAGE]: invertedKillerCageInfo,
	[TOOLS.SUM_CAGE]: sumCageInfo,
	[TOOLS.SUM_CAGE_LOOK_AND_SAY]: sumCageLookAndSayInfo,
	[TOOLS.PARITY_BALANCE_CAGE]: parityBalanceCageInfo,
	[TOOLS.DIVISIBLE_KILLER_CAGE]: divisibleKillerCageInfo,
	[TOOLS.SPOTLIGHT_CAGE]: spotlightCageInfo,
	[TOOLS.PUTTERIA_CAGE]: putteriaCageInfo,
	[TOOLS.MULTISET_CAGE]: multisetCageInfo,
	[TOOLS.VAULTED_CAGE]: vaultedCageInfo,
	[TOOLS.YIN_YANG_ANTITHESIS_KILLER_CAGE]: yinYangAntithesisKillerCageInfo,
	[TOOLS.YIN_YANG_BREAKEVEN_KILLER_CAGE]: yinYangBreakevenKillerCageInfo,

	[TOOLS.DOUBLERS_KILLER_CAGE]: doublersKillerCageInfo,
	[TOOLS.NEGATORS_KILLER_CAGE]: negatorsKillerCageInfo,

	// Clone Constraints
	[TOOLS.CLONE_REGION]: cloneRegionInfo,

	// Outside Edge Constraints
	[TOOLS.SANDWICH_SUM]: sandwichSumInfo,
	[TOOLS.MYSTERY_SANDWICH_SUM]: mysterySandwichSumInfo,
	[TOOLS.X_SUM]: xSumInfo,
	[TOOLS.SHORTSIGHTED_X_SUM]: shortsightedXSumInfo,
	[TOOLS.SHIFTED_X_SUM]: shiftedXSumInfo,
	[TOOLS.BROKEN_X_SUM]: brokenXSumInfo,
	[TOOLS.X_SUM_SKYSCRAPERS]: xSumSkyscrapersInfo,
	[TOOLS.BATTLEFIELD]: battlefieldInfo,
	[TOOLS.SKYSCRAPERS]: skyscrapersInfo,
	[TOOLS.X_INDEX]: xIndexInfo,
	[TOOLS.SANDWICH_SUM_XOR_X_SUM]: sandwichSumXorXSumInfo,
	[TOOLS.RISING_STREAK]: risingStreakInfo,
	// [TOOLS.ROW_OR_COLUMN_RANK]: rowOrColumnRankInfo,
	[TOOLS.OUTSIDE_EDGE_YIN_YANG_SUM_OF_SHADED]: outsideEdgeYinYangSumOfShadedInfo,
	[TOOLS.OUTSIDE_CONSECUTIVE_SUM]: outsideConsecutiveSumInfo,
	[TOOLS.LOOPWICHES]: loopwhichesInfo,
	[TOOLS.CHAOS_CONSTRUCTION_SUM_OF_FIRST_EACH_REGION]: chaosConstructionSumOfFirstEachRegionInfo,
	[TOOLS.CHAOS_CONSTRUCTION_X_INDEX_REGION]: chaosConstructionXIndexRegionInfo,
	[TOOLS.PENTOMINO_BORDER_COUNT]: pentominoBorderCountInfo,

	// Outside Corner Constraints
	[TOOLS.LITTLE_KILLER_SUM]: littleKillerSumInfo,
	[TOOLS.LITTLE_KILLER_PRODUCT]: littleKillerProductInfo,
	[TOOLS.LITTLE_KILLER_LOOK_AND_SAY]: littleKillerLookAndSayInfo,
	[TOOLS.LITTLE_KILLER_REGION_SUM_PRODUCT]: littleKillerRegionSumProductInfo,
	[TOOLS.X_OMIT_LITTLE_KILLER_SUM]: xOmitLittleKillerSumInfo,

	[TOOLS.NEGATORS_LITTLE_KILLER_SUM]: negatorsLittleKillerSumInfo,

	// Center, Corner or Edge Constraints
	// [TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER]: rotationallySymmetricGalaxyCenterInfo,
	[TOOLS.ROTATIONALLY_SYMMETRIC_GALAXY_CENTER_SUM]: rotationallySymmetricGalaxyCenterSumInfo,
	[TOOLS.YIN_YANG_SUM_OF_ADJACENT_SHADED_EDGE_CORNER]: yinYangSumOfAdjacentShadedEdgeOrCornerInfo,

	// Valued Global Constraints
	[TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM]: forbiddenOrthogonallyAdjacentSumInfo,
	[TOOLS.MINIMUM_DIAGONALLY_ADJACENT_DIFFERENCE]: minimumDiagonallyAdjacentDifferenceInfo,
	[TOOLS.FORBIDDEN_KNIGHT_SUM]: forbiddenKnightSumInfo,
	[TOOLS.LITS_MAX_TETROMINO_SUM]: litsMaxTetrominoSumInfo,

	// Fog Tools
	[TOOLS.FOG_LIGHTS]: fogLighsInfo,
	[TOOLS.CUSTOM_FOG_CLEARING]: customFogClearingInfo,

	// Cosmetic Tools
	[TOOLS.COSMETIC_CELL_CENTER_SHAPE]: cosmeticCellShapeInfo,
	[TOOLS.COSMETIC_CELL_ARROW]: cosmeticCellArrowInfo,
	[TOOLS.COSMETIC_CELL_MULTI_ARROW]: cosmeticCellMultiArrowInfo,
	[TOOLS.COSMETIC_EDGE]: cosmeticEdgeInfo,
	[TOOLS.COSMETIC_CORNER]: cosmeticCornerInfo,
	[TOOLS.COSMETIC_LINE]: cosmeticLineInfo,
	[TOOLS.COSMETIC_LINE_WITH_CIRCLE_ENDS]: cosmeticLineWithCircleEndsInfo,
	[TOOLS.COSMETIC_LINE_WITH_POLYGON_ENDS]: cosmeticLineWithPolygonEndsInfo,
	[TOOLS.COSMETIC_ARROW]: cosmeticArrowInfo,
	[TOOLS.COSMETIC_CAGE]: cosmeticCageInfo,
	[TOOLS.COSMETIC_OUTSIDE_DIRECTION]: cosmeticOutsideDirectionInfo
};
