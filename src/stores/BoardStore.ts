import { ElementsDict } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { type ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
import { Grid } from '$lib/Puzzle/Grid/Grid';

import type { ConstraintAndId } from '$src/lib/Puzzle/puzzle_schema';
import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';

import { derived, writable } from 'svelte/store';
import { settingsStore } from './SettingsStore';
import { GAME_MODE } from '$src/lib/Types/types';
import { debounce } from 'lodash';
import { puzzleToCompressedStr } from '$src/lib/SettingPanel/SavePuzzleModal/io_utils';
import { stateStore } from './StateStore';

export const gameModeStore = writable<GAME_MODE>(GAME_MODE.SETTING);

// user state
export const toolStore = writable<TOOLID>(TOOLS.DIGIT);
export const gridStore = writable<Grid>(new Grid(9, 9));

export const elementsDictStore = writable<ElementsDict>(new ElementsDict());
export const currentConstraintStore = writable<ConstraintAndId | null>(null);

export function setCurrentConstraint(constraintId: ConstraintAndId | null) {
	currentConstraintStore.update(() => constraintId);
}

/**
 * Updates an existing local constraint (or cosmetic)
 * @param element_id
 * @param id
 * @param newConstraint
 */
export function updateConstraint<T extends ConstraintType>(
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

function updateUrlParams(compressedStr: string) {
	if (typeof window === 'undefined') return;

	const url = new URL(window.location.href);
	url.searchParams.set('puzzle', compressedStr);

	const newUrl = url.toString();
	// window.history.replaceState({}, '', newUrl);
}

export const puzzleUrlStore = derived(
	stateStore.puzzleStore,
	debounce(($puzzleStore) => {
		const compressedStr = puzzleToCompressedStr($puzzleStore);
		updateUrlParams(compressedStr);
		return compressedStr;
	}, 500)
);
