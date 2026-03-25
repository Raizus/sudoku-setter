import { ElementsDict } from '$src/lib/Puzzle/Constraints/ElementsDict';

import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';

import { derived, writable } from 'svelte/store';
import { settingsStore } from './SettingsStore';
import { GAME_MODE } from '$src/lib/Types/types';

export const gameModeStore = writable<GAME_MODE>(GAME_MODE.SETTING);

// user state
export const toolStore = writable<TOOLID>(TOOLS.DIGIT);

export const elementsDictStore = writable<ElementsDict>(new ElementsDict());

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
