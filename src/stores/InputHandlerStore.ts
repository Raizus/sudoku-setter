import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import { getToolInfo } from '$lib/Puzzle/ElementHandlersUtils';
import { derived } from 'svelte/store';
import { elementInfoRegistry } from '$src/lib/Puzzle/ElementsInfo/ElementInfoRegistry';
import { getInputHandlerF } from '$input/ToolInputHandlers/InputHandlerRegistry';
import { stateStore, type StateStore } from './StateStore';

export function createInputHandlerStore(stateStore: StateStore) {
	const svgRefStore = stateStore.svgRefStore;
	const gridStore = stateStore.gridStore;
	const toolStore = stateStore.toolStore;

	const inputHandlerStore = derived<
		[typeof svgRefStore, typeof gridStore, typeof toolStore],
		InputHandler | undefined
	>(
		[svgRefStore, gridStore, toolStore],
		([$svgRefStore, , $toolStore]) => {
			if ($svgRefStore === null) return undefined;

			const toolInfo = getToolInfo($toolStore, elementInfoRegistry);
			if (toolInfo === undefined) {
				console.warn(`Element handler for ${$toolStore} is not defined`);
				return undefined;
			}

			const inputOpts = toolInfo.inputOptions;
			const getInputHandler = inputOpts ? getInputHandlerF(inputOpts) : undefined;
			if (!getInputHandler) return undefined;
			const inputHandler = getInputHandler($svgRefStore, stateStore);

			return inputHandler;
		}
	);

	return inputHandlerStore;
}

export const inputHandlerStore = createInputHandlerStore(stateStore);
