import { ElementsDict } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { type ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import type { Cell } from '$lib/Puzzle/Grid/Cell';
import { Grid } from '$lib/Puzzle/Grid/Grid';
import { type PuzzleI } from '$src/lib/Puzzle/Puzzle';
import { type Solution } from '$src/lib/Puzzle/puzzle_schema';

import type { ConstraintAndId, PuzzleMetaI } from '$src/lib/Puzzle/puzzle_schema';
import type { ShapeI } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';

import { selectionClearAction } from '$lib/reducers/SelectionReducer';
import { resetAction } from '$src/lib/reducers/PenToolReducer';

import { derived, get, writable } from 'svelte/store';
import { clearCommandHistory } from './CommandHistoryStore';
import { updatePenTool } from './PenToolStore';
import { updateSelection } from './SelectionStore';
import { settingsStore } from './SettingsStore';
import { GAME_MODE } from '$src/lib/Types/types';
import { debounce, range } from 'lodash';
import { puzzleToCompressedStr } from '$src/lib/SettingPanel/SavePuzzleModal/io_utils';

export const svgRefStore = writable<SVGSVGElement | null>(null);

export const gameModeStore = writable<GAME_MODE>(GAME_MODE.SETTING);

// user state
export const selectOnStore = writable<boolean>(false);
export const selectedElementIdStore = writable<number | null>(null);
export const toolStore = writable<TOOLID>(TOOLS.DIGIT);
export const previousToolStore = writable<TOOLID | null>(TOOLS.DIGIT);
export const validDigitsStore = writable<number[]>(range(1, 10));
export const gridStore = writable<Grid>(new Grid(9, 9));
export const cellsStore = writable<Cell[]>(
	(() => {
		const grid = get(gridStore);
		return grid.getAllCells();
	})()
);

export const puzzleMetaStore = writable<PuzzleMetaI>({});
export const elementsDictStore = writable<ElementsDict>(new ElementsDict());
export const currentConstraintStore = writable<ConstraintAndId | null>(null);
export const currentShapeStore = writable<ShapeI | undefined>(undefined);
export const solutionStore = writable<Solution>(undefined);

export const puzzleCreationTimestamp = writable<number>(Date.now());

export function updateCreationTimestamp() {
	puzzleCreationTimestamp.set(Date.now());
}

export function setCreationTimestamp(timestamp: number) {
	puzzleCreationTimestamp.set(timestamp);
}

export function updatePuzzleMeta(meta: PuzzleMetaI) {
	puzzleMetaStore.update(() => {
		return meta;
	});
}

export function setCurrentConstraint(constraintId: ConstraintAndId | null) {
	currentConstraintStore.update(() => constraintId);
}

export function updateCurrentShape(shape: ShapeI | undefined) {
	currentShapeStore.update(() => shape);
}

export function updateToolAndCurrentConstraintStores(
	tool: TOOLID,
	element_id: number | null
): void {
	const currTool = get(toolStore);
	const currElementId = get(selectedElementIdStore);
	if (currElementId === element_id && tool === currTool) return;

	toolStore.update(() => tool);
	setCurrentConstraint(null);
	selectedElementIdStore.update(() => element_id);
}

export function restoreToolStoreOnQuickshift(): void {
	const prevTool = get(previousToolStore);
	if (!prevTool) return;
	updateToolAndCurrentConstraintStores(prevTool, null);
}

export function updatePreviousToolStore(tool: TOOLID): void {
	previousToolStore.update(() => tool);
}

export function updateToolOnRemoveGroup(toolId: TOOLID) {
	// if tool is the same as current tool, set current tool to digit
	const currTool = get(toolStore);
	if (currTool === toolId) {
		updateToolAndCurrentConstraintStores(TOOLS.DIGIT, null);
	}
}

/**
 * Removes a constraint group from the local constraints dictionary.
 * For example, it removes all Renban constraints
 * @param element_id
 */
export function removeGroupFromLocalConstraint(element_id: number) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.removeFromDict(element_id);
		return localConstraintsDict;
	});

	updateCurrentShape(undefined);
}

/**
 * Updates an existing local constraint (or cosmetic)
 * @param element_id
 * @param id
 * @param newConstraint
 */
export function updateLocalConstraint<T extends ConstraintType>(
	element_id: number,
	id: string,
	newConstraint: T
) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.updateConstraint(element_id, id, newConstraint);
		return localConstraintsDict;
	});
	setCurrentConstraint({ id, constraint: newConstraint });
}

export function updateCurrentConstraintShape(newShape: ShapeI | undefined) {
	const currentConstraint = get(currentConstraintStore);

	newShape = newShape ? { ...newShape } : undefined;

	updateCurrentShape(newShape);

	if (!currentConstraint) return;
	const element_id = get(selectedElementIdStore);
	if (element_id === null) return;
	const newConstraint = { ...currentConstraint.constraint, shape: newShape };
	updateLocalConstraint(element_id, currentConstraint.id, newConstraint);
}

export function selectConstraint(element_id: number, c_id: string) {
	const localConstraintsDict = get(elementsDictStore);
	const element = localConstraintsDict.get(element_id);
	if (!element || !element.constraints) return;

	const constraint = element.constraints[c_id];
	if (!constraint) return;
	setCurrentConstraint({ id: c_id, constraint });
}

export function createNewPuzzle(nRows: number, nCols: number, valid_digits: number[]) {
	puzzleCreationTimestamp.set(Date.now());
	const grid = new Grid(nRows, nCols);
	gridStore.update(() => grid);
	validDigitsStore.update(() => valid_digits);
	elementsDictStore.update(() => new ElementsDict());
	puzzleMetaStore.update(() => {
		return {};
	});
	updateSolution(undefined);
	cellsStore.update(() => grid.getAllCells());
}

export function setPuzzle(puzzle: PuzzleI) {
	gridStore.update(() => puzzle.grid);
	puzzleMetaStore.update(() => puzzle.puzzleMeta);
	updateSolution(puzzle.solution);
	validDigitsStore.update(() => puzzle.valid_digits);
	elementsDictStore.update(() => puzzle.elementsDict);

	cellsStore.update(() => puzzle.grid.getAllCells());
}

export function resetPuzzle() {
	const grid = get(gridStore);
	grid.resetValues();
	gridStore.update(() => grid);
	cellsStore.update(() => {
		return grid.getAllCells();
	});
	updatePenTool(resetAction());
}

export function resetUserState() {
	clearCommandHistory();
	updatePenTool(resetAction());
	updateToolAndCurrentConstraintStores(TOOLS.DIGIT, null);

	const resetSelectionAction = selectionClearAction();
	updateSelection(resetSelectionAction);

	updateCurrentShape(undefined);
	setCurrentConstraint(null);
}

export const hasFogStore = derived(elementsDictStore, ($elementsDictStore) => {
	for (const element of $elementsDictStore.values()) {
		const tool_id = element.tool_id;
		if (tool_id === TOOLS.FOG_LIGHTS || tool_id === TOOLS.CUSTOM_FOG_CLEARING) return true;
	}
	return false;
});

export const enableFogMaskStore = derived(
	[settingsStore, hasFogStore, gameModeStore, toolStore],
	([$settingsStore, $hasFogStore, $gameModeStore, $toolStore]) => {
		const hide_fog = $settingsStore.hideFog;
		const has_fog = $hasFogStore;
		const tool = $toolStore;
		const fogged_tool =
			tool === TOOLS.DIGIT ||
			tool === TOOLS.CORNER_PM ||
			tool === TOOLS.CENTER_PM ||
			tool === TOOLS.HIGHLIGHTS ||
			tool === TOOLS.PEN_TOOL;
		const enable_fog_mask =
			!hide_fog && has_fog && (fogged_tool || $gameModeStore === GAME_MODE.SOLVING);
		return enable_fog_mask;
	}
);

export const showFogStore = derived(
	[settingsStore, gameModeStore],
	([$settingsStore, $gameModeStore]) => {
		const hide_fog = $settingsStore.hideFog;
		const show_fog = !hide_fog && $gameModeStore === GAME_MODE.SETTING;
		return show_fog;
	}
);

export const puzzleStore = derived(
	[gridStore, puzzleMetaStore, elementsDictStore, solutionStore, validDigitsStore],
	([$gridStore, $puzzleMetaStore, $localConstraintsStore, $solutionStore, $validDigitsStore]) => {
		const puzzle: PuzzleI = {
			grid: $gridStore,
			solution: $solutionStore,
			puzzleMeta: $puzzleMetaStore,
			valid_digits: $validDigitsStore,
			elementsDict: $localConstraintsStore
		};
		return puzzle;
	}
);

export function updateSolution(solution: Solution) {
	solutionStore.update(() => {
		return solution;
	});
}

function updateUrlParams(compressedStr: string) {
	if (typeof window === 'undefined') return;

	const url = new URL(window.location.href);
	url.searchParams.set('puzzle', compressedStr);

	const newUrl = url.toString();
	// window.history.replaceState({}, '', newUrl);
}

export const puzzleUrlStore = derived(
	puzzleStore,
	debounce(($puzzleStore) => {
		const compressedStr = puzzleToCompressedStr($puzzleStore);
		updateUrlParams(compressedStr);
		return compressedStr;
	}, 500)
);
