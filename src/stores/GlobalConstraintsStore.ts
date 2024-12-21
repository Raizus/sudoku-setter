import type { TOOLID } from '$src/lib/Puzzle/Tools';
import {
	GLOBAL_CONSTRAINTS_ACTIONS,
	type GlobalConstraintAction
} from '$src/lib/reducers/GlobalConstraintsActions';
import type { CommandI } from '$src/lib/Types/types';
import { globalConstraintsStore } from './BoardStore';

export function setGlobalConstraint(toolId: TOOLID, value: boolean) {
	globalConstraintsStore.update((globalConstraints) => {
		return globalConstraints.setConstraint(toolId, value);
	});
}

export function removeGlobalConstraint(toolId: TOOLID) {
	globalConstraintsStore.update((globalConstraints) => {
		return globalConstraints.removeConstraint(toolId);
	});
}

export function updateGlobalConstraint(action: GlobalConstraintAction): void {
	if (action.type === GLOBAL_CONSTRAINTS_ACTIONS.REMOVE_GLOBAL_CONSTRAINT) {
		removeGlobalConstraint(action.payload);
	} else {
		setGlobalConstraint(action.payload.tool, action.payload.value);
	}
}

export function getGlobalConstraintCommand(
	action: GlobalConstraintAction,
	reverse_action: GlobalConstraintAction
): CommandI {
	const command: CommandI = {
		execute: () => {
            updateGlobalConstraint(action)
		},
		unExecute: () => {
            updateGlobalConstraint(reverse_action);
		}
	};

	return command;
}
