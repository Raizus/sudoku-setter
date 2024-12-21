import {
	type SelectionAction,
	type SelectionState,
	initSelection,
	reducerSelection
} from '$src/lib/reducers/SelectionReducer';
import type { CommandI } from '$src/lib/Types/types';
import { writable } from 'svelte/store';

export const selectionStore = writable<SelectionState>(initSelection());

export function updateSelection(action: SelectionAction): void {
	if (!action) return;

	selectionStore.update((selectionState) => {
		return reducerSelection(selectionState, action);
	});
}

function executeUpdateSellectionAction(action: SelectionAction) {
	if (!action) return;
	selectionStore.update((selectionState) => {
		return reducerSelection(selectionState, action);
	});
}

export function getUpdateSelectionCommand(
	action: SelectionAction,
	reverse_action: SelectionAction
): CommandI {
	const command: CommandI = {
		execute: () => {
			executeUpdateSellectionAction(action);
		},
		unExecute: () => {
			executeUpdateSellectionAction(reverse_action);
		}
	};
	return command;
}