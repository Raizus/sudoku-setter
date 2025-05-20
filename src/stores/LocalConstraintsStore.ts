import {
	type ConstraintsElement,
	type ConstraintType
} from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	LOCAL_CONSTRAINTS_ACTIONS,
	type LocalConstraintAction
} from '$src/lib/reducers/LocalConstraintsActions';
import type { CommandI } from '$src/lib/Types/types';
import { get } from 'svelte/store';
import {
	currentShapeStore,
	elementsDictStore,
	removeGroupFromLocalConstraint,
	setCurrentConstraint,
	updateLocalConstraint
} from './BoardStore';
import type { TOOLID } from '$src/lib/Puzzle/Tools';

export function addGroupToLocalConstraint(toolId: TOOLID) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.addToDict(toolId);
		return localConstraintsDict;
	});
}

export function addLocalConstraint(id: string, constraint: ConstraintType) {
	const currentShape = get(currentShapeStore);
	if (currentShape) {
		constraint.shape = { ...currentShape };
	}

	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.addConstraint(constraint.toolId, id, constraint);
		return localConstraintsDict;
	});
	setCurrentConstraint({ id, constraint });
}

/**
 * Removes a single constraint from the constraint dictionary
 * @param toolId
 * @param id
 * @returns
 */
export function removeLocalConstraint(toolId: TOOLID, id: string | null) {
	if (!id) return;
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.removeConstraint(toolId, id);
		return localConstraintsDict;
	});
}

export function restoreElement(toolId: TOOLID, element: ConstraintsElement) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.setElement(toolId, element);
		return localConstraintsDict;
	});
}

export function updateLocalConstraints(action: LocalConstraintAction): void {
	if (action.type === LOCAL_CONSTRAINTS_ACTIONS.ADD_LOCAL_CONSTRAINT) {
		addLocalConstraint(action.payload.id, action.payload.constraint);
	} else if (action.type === LOCAL_CONSTRAINTS_ACTIONS.REMOVE_LOCAL_CONSTRAINT) {
		removeLocalConstraint(action.payload.tool, action.payload.id);
	} else if (action.type === LOCAL_CONSTRAINTS_ACTIONS.REMOVE_LOCAL_CONSTRAINT_GROUP) {
		removeGroupFromLocalConstraint(action.payload.tool);
	} else if (action.type === LOCAL_CONSTRAINTS_ACTIONS.RESTORE_ELEMENT) {
		restoreElement(action.payload.tool, action.payload.constraints);
	} else if (action.type === LOCAL_CONSTRAINTS_ACTIONS.UPDATE_LOCAL_CONSTRAINT) {
		updateLocalConstraint(
			action.payload.tool,
			action.payload.constraintId,
			action.payload.constraint
		);
	}
}

export function getLocalConstraintCommand(
	action: LocalConstraintAction,
	reverse_action: LocalConstraintAction
): CommandI {
	const command: CommandI = {
		execute: () => {
			updateLocalConstraints(action);
		},
		unExecute: () => {
			updateLocalConstraints(reverse_action);
		}
	};

	return command;
}
