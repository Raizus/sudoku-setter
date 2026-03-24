import type { CommandI } from '$src/lib/Types/types';
import { derived, writable } from 'svelte/store';

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

export class CommandHistoryStore {
	private _command_history_store = writable<CommandHistoryI>(newHistory());

	public undo_stack_length = derived(this._command_history_store, ($command_history_store) => {
		return $command_history_store._undoStack.length;
	});

	public redo_stack_length = derived(this._command_history_store, ($command_history_store) => {
		return $command_history_store._redoStack.length;
	});

	clear() {
		this._command_history_store.set(newHistory());
	}

	public command_history_store = { subscribe: this._command_history_store.subscribe };

	/**
	 * Adds a new command to the history's undo stack. Resets the redo stack. If execute is true executes the command before adding it to the stack
	 * @param command
	 * @param execute
	 */
	addCommand(command: CommandI, execute: boolean = true) {
		if (execute) command.execute();

		this._command_history_store.update((history) => {
			history._undoStack.push([command]);
			history._redoStack = [];
			return history;
		});
	}

	/**
	 * Adds a new commands to the history's undo stack has a command group. Resets the redo stack. If execute is true executes each command in the group before adding the group to the stack.
	 * @param commands
	 * @param execute
	 */
	addCommands(commands: CommandI[], execute: boolean = true) {
		if (execute) {
			for (const command of commands) command.execute();
		}

		this._command_history_store.update((history) => {
			history._undoStack.push(commands);
			history._redoStack = [];
			return history;
		});
	}

	undo() {
		this._command_history_store.update((history) => {
			const commands = history._undoStack.pop();
			if (!commands) return history;

			for (let i = commands.length - 1; i >= 0; i--) commands[i].unExecute();
			history._redoStack.push(commands);

			return history;
		});
	}

	redo() {
		this._command_history_store.update((history) => {
			const commands = history._redoStack.pop();
			if (!commands) return history;

			for (const command of commands) command?.execute();
			history._undoStack.push(commands);

			return history;
		});
	}
}
