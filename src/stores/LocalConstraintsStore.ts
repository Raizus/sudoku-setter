import {
	type ElementAction
} from '$src/lib/reducers/LocalConstraintsActions';
import type { CommandI } from '$src/lib/Types/types';
import { stateStore } from './StateStore';

export function getUpdateElementCommand(
	action: ElementAction,
	reverse_action: ElementAction
): CommandI {
	const command: CommandI = {
		execute: () => {
			stateStore.updateElementAction(action);
		},
		unExecute: () => {
			stateStore.updateElementAction(reverse_action);
		}
	};

	return command;
}
