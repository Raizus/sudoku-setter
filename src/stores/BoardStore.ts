import { ElementsDict } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { type ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import type { Cell } from '$lib/Puzzle/Grid/Cell';
import { Grid } from '$lib/Puzzle/Grid/Grid';
import { type PuzzleI } from '$src/lib/Puzzle/Puzzle';
import { type Solution } from '$src/lib/Puzzle/puzzle_schema';

import type { PuzzleMetaI } from '$src/lib/Puzzle/puzzle_schema';
import type { ShapeI } from '$lib/Puzzle/Shape/Shape';
import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';

import { selectionClearAction } from '$lib/reducers/SelectionReducer';
import { resetAction } from '$src/lib/reducers/PenToolReducer';

import { derived, get, writable } from 'svelte/store';
import { clearHistory } from './HistoryStore';
import { updatePenTool } from './PenToolStore';
import { updateSelection } from './SelectionStore';
import { settingsStore } from './SettingsStore';
import { GAME_MODE } from '$src/lib/Types/types';
import { range } from 'lodash';

interface ConstraintAndId {
	id: string;
	constraint: ConstraintType;
}

export const svgRefStore = writable<SVGSVGElement | null>(null);

export const gameModeStore = writable<GAME_MODE>(GAME_MODE.SETTING);

// user state
export const selectOnStore = writable<boolean>(false);
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

export function updateToolAndCurrentConstraintStores(tool: TOOLID): void {
	const currTool = get(toolStore);
	if (currTool === tool) return;
	toolStore.update(() => tool);
	setCurrentConstraint(null);
}

export function restoreToolStoreOnQuickshift(): void {
	const prevTool = get(previousToolStore);
	if (!prevTool) return;
	updateToolAndCurrentConstraintStores(prevTool);
}

export function updatePreviousToolStore(tool: TOOLID): void {
	previousToolStore.update(() => tool);
}

export function updateToolOnRemoveGroup(toolId: TOOLID) {
	// if tool is the same as current tool, set current tool to digit
	const currTool = get(toolStore);
	if (currTool === toolId) {
		updateToolAndCurrentConstraintStores(TOOLS.DIGIT);
	}
}

/**
 * Removes a constraint group from the local constraints dictionary.
 * For example, it removes all Renban constraints
 * @param toolId
 */
export function removeGroupFromLocalConstraint(toolId: TOOLID) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.removeFromDict(toolId);
		return localConstraintsDict;
	});

	updateCurrentShape(undefined);
}

/**
 * Updates an existing local constraint (or cosmetic)
 * @param toolId
 * @param id
 * @param newConstraint
 */
export function updateLocalConstraint<T extends ConstraintType>(
	toolId: TOOLID,
	id: string,
	newConstraint: T
) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.updateConstraint(toolId, id, newConstraint);
		return localConstraintsDict;
	});
	setCurrentConstraint({ id, constraint: newConstraint });
}

export function updateCurrentConstraintShape(newShape: ShapeI | undefined) {
	const currentConstraint = get(currentConstraintStore);

	newShape = newShape ? { ...newShape } : undefined;

	updateCurrentShape(newShape);

	if (!currentConstraint) return;
	const newConstraint = { ...currentConstraint.constraint, shape: newShape };
	const toolId = currentConstraint.constraint.toolId;
	updateLocalConstraint(toolId, currentConstraint.id, newConstraint);
}

export function selectConstraint(id: string, toolId: TOOLID) {
	const localConstraintsDict = get(elementsDictStore);
	const element = localConstraintsDict.get(toolId);
	if (!element || !element.constraints) return;

	const constraint = element.constraints[id];
	if (!constraint) return;
	setCurrentConstraint({ id, constraint });
}

export function createNewPuzzle(nRows: number, nCols: number, valid_digits: number[]) {
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
	clearHistory();
	updatePenTool(resetAction());
	updateToolAndCurrentConstraintStores(TOOLS.DIGIT);

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
