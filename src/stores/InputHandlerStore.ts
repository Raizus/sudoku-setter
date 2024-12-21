import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import { getToolInfo } from '$lib/Puzzle/ElementHandlersUtils';
import { derived } from 'svelte/store';
import { gridStore, svgRefStore, toolStore } from './BoardStore';
import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';

export const InputHandlerStore = derived<
	[typeof svgRefStore, typeof gridStore, typeof toolStore],
	InputHandler | undefined
>([svgRefStore, gridStore, toolStore], ([$svgRefStore, $gridStore, $toolStore]) => {
	const toolInfo = getToolInfo($toolStore, squareCellElementHandlers);
	if (toolInfo === undefined) {
		console.warn(`Element hadler for ${$toolStore} is not defined`);
		return undefined;
	}

	const inputHandler = toolInfo.getInputHandler
		? toolInfo.getInputHandler($svgRefStore, $gridStore, $toolStore)
		: undefined;
	return inputHandler;
});
