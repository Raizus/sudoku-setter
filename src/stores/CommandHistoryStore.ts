import type { CommandI } from '$src/lib/Types/types';
import { writable } from 'svelte/store';

interface CommandHistoryI {
	_undoStack: CommandI[][];
	_redoStack: CommandI[][];
}

function newHistory(): CommandHistoryI {
	const history: CommandHistoryI = {
		_undoStack: [],
		_redoStack: []
	};
	return history;
}

export const commandHistoryStore = writable<CommandHistoryI>(newHistory());

export function clearHistory() {
    commandHistoryStore.update(() => newHistory())
}

export function addCommand(command: CommandI, execute: boolean = true) {
	commandHistoryStore.update((history) => {
		if (execute) command.execute();
        history._undoStack.push([command]);
        history._redoStack = [];
		return history;
	});
}

export function addCommands(commands: CommandI[], execute: boolean = true) {
	commandHistoryStore.update((history) => {
		if (execute) {
			for (const command of commands) command.execute();
		}
		history._undoStack.push(commands);
		history._redoStack = [];
		return history;
	});
}

export function undo() {
	commandHistoryStore.update((history) => {
		const commands = history._undoStack.pop();
		if (commands) {
			for (let i = commands.length - 1; i >= 0; i--) commands[i].unExecute();
			history._redoStack.push(commands);
		}

        return history;
	});
}

export function redo() {
	commandHistoryStore.update((history) => {
		const commands = history._redoStack.pop();
		if (commands) { 
			for (const command of commands) command?.execute();
			history._undoStack.push(commands);
		}

		return history;
	});
}
