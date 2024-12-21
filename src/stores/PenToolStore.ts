import { PenTool } from '$src/lib/Puzzle/PenTool';
import { type PenToolAction, reducerPenTool } from '$src/lib/reducers/PenToolReducer';
import type { CommandI } from '$src/lib/Types/types';
import { writable } from 'svelte/store';


export const penToolStore = writable<PenTool>(new PenTool());

export function updatePenTool(action: PenToolAction): void {
	penToolStore.update((penToolState) => {
		return reducerPenTool(penToolState, action);
	});
}

export const penColorStore = writable<number>(1);
export function updatePenColor(colorId: number) {
	penColorStore.update(() => {
		return colorId;
	});
}

export function getPenToolCommand(
	action: PenToolAction,
	reverse_action: PenToolAction
): CommandI {
	const command: CommandI = {
		execute: () => {
			updatePenTool(action);
		},
        unExecute: () => {
            updatePenTool(reverse_action);
        }
    };
    
    return command;
}