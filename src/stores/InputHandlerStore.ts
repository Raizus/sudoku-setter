import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import { getToolInfo } from '$lib/Puzzle/ElementHandlersUtils';
import { derived, writable } from 'svelte/store';
import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
import { type ToolModeT } from '$input/ToolInputHandlers/types';
import { getInputHandlerF } from '$input/ToolInputHandlers/InputHandlerRegistry';
import { stateStore, type StateStore } from './StateStore';

export function createInputHandlerStore(stateStore: StateStore) {
	return derived<
		[typeof stateStore.svgRefStore, typeof stateStore.gridStore, typeof stateStore.toolStore],
		InputHandler | undefined
	>(
		[stateStore.svgRefStore, stateStore.gridStore, stateStore.toolStore],
		([$svgRefStore, $gridStore, $toolStore]) => {
			if ($svgRefStore === null) return undefined;

			const toolInfo = getToolInfo($toolStore, elementInfoRegistry);
			if (toolInfo === undefined) {
				console.warn(`Element handler for ${$toolStore} is not defined`);
				return undefined;
			}

			const inputOpts = toolInfo.inputOptions;
			const getInputHandler = inputOpts ? getInputHandlerF(inputOpts) : undefined;
			if (!getInputHandler) return undefined;
			const inputHandler = getInputHandler($svgRefStore, $gridStore, $toolStore);

			return inputHandler;
		}
	);
}

export const InputHandlerStore = derived<
	[typeof stateStore.svgRefStore, typeof stateStore.gridStore, typeof stateStore.toolStore],
	InputHandler | undefined
>(
	[stateStore.svgRefStore, stateStore.gridStore, stateStore.toolStore],
	([$svgRefStore, $gridStore, $toolStore]) => {
		if ($svgRefStore === null) return undefined;

		const toolInfo = getToolInfo($toolStore, elementInfoRegistry);
		if (toolInfo === undefined) {
			console.warn(`Element handler for ${$toolStore} is not defined`);
			return undefined;
		}

		const inputOpts = toolInfo.inputOptions;
		const getInputHandler = inputOpts ? getInputHandlerF(inputOpts) : undefined;
		if (!getInputHandler) return undefined;
		const inputHandler = getInputHandler($svgRefStore, $gridStore, $toolStore);

		return inputHandler;
	}
);

export const toolModeStore = writable<ToolModeT>(undefined);
