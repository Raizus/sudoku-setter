import type { SquareCellElementInfo } from '../ElementInfo';
import { TOOLS } from '../Tools';
import { arrowInfo, averageArrowInfo } from './ArrowToolsElementsInfo';
import {
	divisibleKillerCageInfo,
	killerCageInfo,
	parityBalanceCageInfo,
	putteriaCageInfo,
	spotlightCageInfo,
	sumCageInfo
} from './CageToolsElementsInfo';
import {
	centerPMInfo,
	cornerPMInfo,
	digitInfo,
	fogInfo,
	givenInfo,
	highlightsInfo,
	outsideInfo,
	penToolInfo,
	regionsInfo
} from './CellInputElementsInfo';
import { cloneRegionInfo } from './CloneToolsElementsInfo';
import {
	cornerEvenCountInfo,
	cornerSumInfo,
	cornerSumOfThreeEqualsTheOtherInfo
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
	differenceInfo,
	edgeFactorInfo,
	edgeInequalityInfo,
	edgeModuloInfo,
	edgeProductInfo,
	edgeSumInfo,
	ratioInfo,
	xvInfo,
	xyDifferencesInfo
} from './EdgeToolsElementsInfo';
import {
	allDifferencesGivenInfo,
	allIndexingColumnGivenInfo,
	allIndexingRowGivenInfo,
	allRadarsGivenInfo,
	allRatiosGivenInfo,
	allVGivenInfo,
	allXGivenInfo,
	allXVGivenInfo,
	allXYDifferencesGivenInfo,
	antikingInfo,
	antiknightInfo,
	disjointGroupsInfo,
	negativeAntidiagonalInfo,
	negativeDiagonalInfo,
	nonconsecutiveInfo,
	nonratioInfo,
	oddEvenParityMirrorAlongNegativeDiagonalInfo,
	oddEvenParityMirrorAlongPositiveDiagonalInfo,
	positiveAntidiagonalInfo,
	positiveDiagonalInfo,
	sudokuRulesDoNotApplyInfo
} from './GlobalConstraintsElementsInfo';
import {
	adjacentCellSumIsPrimeLineInfo,
	adjacentMultiplesLineInfo,
	arithmeticSequenceLineInfo,
	atLeastXLineInfo,
	betweenLineInfo,
	doubleArrowLineInfo,
	doubleRenbanLineInfo,
	entropicLineInfo,
	entropicOrModularLineInfo,
	highLowOscilatorLineInfo,
	indexingColumnIsXLineInfo,
	indexingRowIsXLineInfo,
	knabnerLineInfo,
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
	sumLineInfo,
	superfuzzyArrowInfo,
	thermometerInfo,
	tightropeLineInfo,
	unimodularLineInfo,
	uniqueValuesLineInfo,
	whispersLineInfo,
	xvLineInfo
} from './LineConstraintsElementsInfo';
import {
	littleKillerLookAndSayInfo,
	littleKillerRegionSumProductInfo,
	littleKillerSumInfo,
	xOmitLittleKillerSumInfo
} from './OutsideCornerToolsElementsInfo';
import {
	battlefieldInfo,
	brokenXSumInfo,
	risingStreakInfo,
	rowOrColumnRankInfo,
	sandwichSumInfo,
	shiftedXSumInfo,
	shortsightedXSumInfo,
	skyscrapersInfo,
	xIndexInfo,
	xSumInfo,
	xSumSkyscrapersInfo
} from './OutsideEdgeElementsInfo';
import {
	adjacentCellsInDifferentDirectionsHaveOpositeParityInfo,
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
	oddInfo,
	oddMinesweeperInfo,
	orthogonalSumInfo,
	primeCellInfo,
	radarInfo,
	sandwichRowColCountInfo,
	watchtowerInfo
} from './SingleCellElementsInfo';
import { coldCellsInfo, decrementFountainInfo, doublersInfo, hotCellsInfo, markedCellsInfo, negatorsInfo, vampireAndPreyInfo } from './ValueModifierConstraintsElementsInfo';

export const squareCellElementHandlers: Record<string, SquareCellElementInfo> = {
	// Cell input elements
	[TOOLS.GIVEN]: givenInfo,
	[TOOLS.DIGIT]: digitInfo,
	[TOOLS.REGIONS]: regionsInfo,
	[TOOLS.OUTSIDE]: outsideInfo,
	[TOOLS.CORNER_PM]: cornerPMInfo,
	[TOOLS.CENTER_PM]: centerPMInfo,
	[TOOLS.HIGHLIGHTS]: highlightsInfo,
	[TOOLS.FOG]: fogInfo,
	[TOOLS.PEN_TOOL]: penToolInfo,

	//Global Constraints
	[TOOLS.SUDOKU_RULES_DO_NOT_APPLY]: sudokuRulesDoNotApplyInfo,
	[TOOLS.ANTIKNIGHT]: antiknightInfo,
	[TOOLS.ANTIKING]: antikingInfo,
	[TOOLS.DISJOINT_GROUPS]: disjointGroupsInfo,
	[TOOLS.NONCONSECUTIVE]: nonconsecutiveInfo,
	[TOOLS.NONRATIO]: nonratioInfo,

	[TOOLS.NEGATIVE_DIAGONAL]: negativeDiagonalInfo,
	[TOOLS.POSITIVE_DIAGONAL]: positiveDiagonalInfo,
	[TOOLS.NEGATIVE_ANTIDIAGONAL]: negativeAntidiagonalInfo,
	[TOOLS.POSITIVE_ANTIDIAGONAL]: positiveAntidiagonalInfo,
	[TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_NEGATIVE_DIAGONAL]:
		oddEvenParityMirrorAlongNegativeDiagonalInfo,
	[TOOLS.ODD_EVEN_PARITY_MIRROR_ALONG_POSITIVE_DIAGONAL]:
		oddEvenParityMirrorAlongPositiveDiagonalInfo,

	[TOOLS.ALL_RATIOS_GIVEN]: allRatiosGivenInfo,
	[TOOLS.ALL_DIFFERENCES_GIVEN]: allDifferencesGivenInfo,
	[TOOLS.ALL_X_GIVEN]: allXGivenInfo,
	[TOOLS.ALL_V_GIVEN]: allVGivenInfo,
	[TOOLS.ALL_XV_GIVEN]: allXVGivenInfo,
	[TOOLS.ALL_RADARS_GIVEN]: allRadarsGivenInfo,
	[TOOLS.ALL_XY_DIFFERENCES_GIVEN]: allXYDifferencesGivenInfo,
	[TOOLS.ALL_INDEXING_COLUMN_GIVEN]: allIndexingColumnGivenInfo,
	[TOOLS.ALL_INDEXING_ROW_GIVEN]: allIndexingRowGivenInfo,

	[TOOLS.VAMPIRE_AND_PREY]: vampireAndPreyInfo,
	[TOOLS.MARKED_CELLS]: markedCellsInfo,
	[TOOLS.DOUBLERS]: doublersInfo,
	[TOOLS.NEGATORS]: negatorsInfo,
	[TOOLS.HOT_CELLS]: hotCellsInfo,
	[TOOLS.COLD_CELLS]: coldCellsInfo,
	[TOOLS.DECREMENT_FOUNTAIN]: decrementFountainInfo,

	// Single Cell Constraints
	[TOOLS.ODD]: oddInfo,
	[TOOLS.EVEN]: evenInfo,
	[TOOLS.MINIMUM]: minimumInfo,
	[TOOLS.MAXIMUM]: maximumInfo,
	[TOOLS.PRIME_CELL]: primeCellInfo,
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

	// Corner Constraints
	[TOOLS.CORNER_SUM]: cornerSumInfo,
	[TOOLS.CORNER_SUM_OF_THREE_EQUALS_THE_OTHER]: cornerSumOfThreeEqualsTheOtherInfo,
	[TOOLS.CORNER_EVEN_COUNT]: cornerEvenCountInfo,

	// Line Constraints
	[TOOLS.THERMOMETER]: thermometerInfo,
	[TOOLS.ROW_CYCLE_THERMOMETER]: rowCyclethermometerInfo,

	[TOOLS.PALINDROME]: palindromeInfo,

	[TOOLS.RENBAN_LINE]: renbanLineInfo,
	[TOOLS.DOUBLE_RENBAN_LINE]: doubleRenbanLineInfo,
	[TOOLS.RENRENBANBAN_LINE]: renrenbanbanLineInfo,
	[TOOLS.N_CONSECUTIVE_RENBAN_LINE]: nConsecutiveRenbanLineInfo,
	[TOOLS.KNABNER_LINE]: knabnerLineInfo,

	[TOOLS.WHISPERS_LINE]: whispersLineInfo,
	[TOOLS.MAXIMUM_ADJACENT_DIFFERENCE_LINE]: maximumAdjacentDifferenceLineInfo,
	[TOOLS.RENBAN_OR_WHISPERS_LINE]: renbanOrWhispersLineInfo,

	[TOOLS.UNIQUE_VALUES_LINE]: uniqueValuesLineInfo,
	[TOOLS.REPEATED_DIGITS_LINE]: repeatedDigitsLineInfo,

	[TOOLS.REGION_SUM_LINE]: regionSumLineInfo,
	[TOOLS.SUM_LINE]: sumLineInfo,
	[TOOLS.XV_LINE]: xvLineInfo,
	[TOOLS.ROW_SUM_LIME]: rowSumLineInfo,
	[TOOLS.AT_LEAST_X_LINE]: atLeastXLineInfo,
	[TOOLS.SUPERFUZZY_ARROW]: superfuzzyArrowInfo,
	[TOOLS.N_CONSECUTIVE_FUZZY_SUM_LINE]: nConsecutiveFuzzySumLineInfo,
	[TOOLS.ADJACENT_CELL_SUM_IS_PRIME_LINE]: adjacentCellSumIsPrimeLineInfo,
	[TOOLS.PRODUCT_LINE]: productLineInfo,
	[TOOLS.ADJACENT_MULTIPLES_LINE]: adjacentMultiplesLineInfo,

	[TOOLS.ARITHMETIC_SEQUENCE_LINE]: arithmeticSequenceLineInfo,

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

	// Line with Circle ends Constraints
	[TOOLS.BETWEEN_LINE]: betweenLineInfo,
	[TOOLS.LOCKOUT_LINE]: lockoutLineInfo,
	[TOOLS.PARITY_COUNT_LINE]: parityCountLineInfo,
	[TOOLS.TIGHTROPE_LINE]: tightropeLineInfo,
	[TOOLS.DOUBLE_ARROW_LINE]: doubleArrowLineInfo,
	[TOOLS.PRODUCT_OF_ENDS_EQUALS_SUM_OF_LINE]: productOfEndsEqualsSumOfLineInfo,

	// Arrow constraints
	[TOOLS.ARROW]: arrowInfo,
	[TOOLS.AVERAGE_ARROW]: averageArrowInfo,

	// Cage Constraints
	[TOOLS.KILLER_CAGE]: killerCageInfo,
	[TOOLS.SUM_CAGE]: sumCageInfo,
	[TOOLS.PARITY_BALANCE_CAGE]: parityBalanceCageInfo,
	[TOOLS.DIVISIBLE_KILLER_CAGE]: divisibleKillerCageInfo,
	[TOOLS.SPOTLIGHT_CAGE]: spotlightCageInfo,
	[TOOLS.PUTTERIA_CAGE]: putteriaCageInfo,

	// Clone Constraints
	[TOOLS.CLONE_REGION]: cloneRegionInfo,

	// Outside Edge Constraints
	[TOOLS.SANDWICH_SUM]: sandwichSumInfo,
	[TOOLS.X_SUM]: xSumInfo,
	[TOOLS.SHORTSIGHTED_X_SUM]: shortsightedXSumInfo,
	[TOOLS.SHIFTED_X_SUM]: shiftedXSumInfo,
	[TOOLS.BROKEN_X_SUM]: brokenXSumInfo,
	[TOOLS.X_SUM_SKYSCRAPERS]: xSumSkyscrapersInfo,
	[TOOLS.BATTLEFIELD]: battlefieldInfo,
	[TOOLS.SKYSCRAPERS]: skyscrapersInfo,
	[TOOLS.X_INDEX]: xIndexInfo,
	[TOOLS.RISING_STREAK]: risingStreakInfo,
	[TOOLS.ROW_OR_COLUMN_RANK]: rowOrColumnRankInfo,

	// Outside Corner Constraints
	[TOOLS.LITTLE_KILLER_SUM]: littleKillerSumInfo,
	[TOOLS.LITTLE_KILLER_LOOK_AND_SAY]: littleKillerLookAndSayInfo,
	[TOOLS.LITTLE_KILLER_REGION_SUM_PRODUCT]: littleKillerRegionSumProductInfo,
	[TOOLS.X_OMIT_LITTLE_KILLER_SUM]: xOmitLittleKillerSumInfo,

	// Cosmetic Tools
	[TOOLS.COSMETIC_CELL_SHAPE]: cosmeticCellShapeInfo,
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
