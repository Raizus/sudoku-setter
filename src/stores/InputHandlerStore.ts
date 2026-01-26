import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import { getToolInfo } from '$lib/Puzzle/ElementHandlersUtils';
import { derived, writable } from 'svelte/store';
import { gridStore, svgRefStore, toolStore } from './BoardStore';
import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
import { type ToolModeT } from '$input/ToolInputHandlers/types';
import { getInputHandlerF } from '$input/ToolInputHandlers/InputHandlerRegistry';

export const InputHandlerStore = derived<
	[typeof svgRefStore, typeof gridStore, typeof toolStore],
	InputHandler | undefined
>([svgRefStore, gridStore, toolStore], ([$svgRefStore, $gridStore, $toolStore]) => {
	const toolInfo = getToolInfo($toolStore, elementInfoRegistry);
	if (toolInfo === undefined) {
		console.warn(`Element handler for ${$toolStore} is not defined`);
		return undefined;
	}
	if ($svgRefStore === null) return undefined;

	const inputOpts = toolInfo.inputOptions;
	const getInputHandler = inputOpts ? getInputHandlerF(inputOpts) : undefined;
	if (!getInputHandler) return undefined;
	const inputHandler = getInputHandler($svgRefStore, $gridStore, $toolStore);

	return inputHandler;
});

export const toolModeStore = writable<ToolModeT>(undefined);
