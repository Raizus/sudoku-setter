import { TOOLS } from '$lib/Puzzle/Tools';

import { derived } from 'svelte/store';
import { settingsStore } from './SettingsStore';
import { GAME_MODE } from '$src/lib/Types/types';
import { stateStore } from './StateStore';

export const enableFogMaskStore = derived(
	[settingsStore, stateStore.hasFogStore, stateStore.gameModeStore, stateStore.toolStore],
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
	[settingsStore, stateStore.gameModeStore],
	([$settingsStore, $gameModeStore]) => {
		const hide_fog = $settingsStore.hideFog;
		const show_fog = !hide_fog && $gameModeStore === GAME_MODE.SETTING;
		return show_fog;
	}
);
