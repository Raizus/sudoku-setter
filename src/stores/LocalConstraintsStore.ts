import {
	type ConstraintType
} from '$src/lib/Puzzle/Constraints/ElementsDict';
import { type ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';
import {
	ELEMENT_ACTIONS,
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

export function enableDisableElement(toolId: TOOLID, value: boolean) {
	elementsDictStore.update((localConstraintsDict) => {
		const element = localConstraintsDict.get(toolId);
		if (!element) return localConstraintsDict;
		element.disabled = value;
		localConstraintsDict.setElement(toolId, element);
		return localConstraintsDict;
	});
}

export function updateElementAction(action: LocalConstraintAction): void {
	if (action.type === ELEMENT_ACTIONS.ADD_LOCAL_CONSTRAINT) {
		addLocalConstraint(action.payload.id, action.payload.constraint);
	} else if (action.type === ELEMENT_ACTIONS.REMOVE_LOCAL_CONSTRAINT) {
		removeLocalConstraint(action.payload.tool, action.payload.id);
	} else if (action.type === ELEMENT_ACTIONS.REMOVE_ELEMENT) {
		removeGroupFromLocalConstraint(action.payload.tool);
	} else if (action.type === ELEMENT_ACTIONS.RESTORE_ELEMENT) {
		restoreElement(action.payload.tool, action.payload.constraints);
	} else if (action.type === ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT) {
		updateLocalConstraint(
			action.payload.tool,
			action.payload.constraintId,
			action.payload.constraint
		);
	} else if (action.type === ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT) {
		enableDisableElement(action.payload.tool, action.payload.value);
	}
}

export function getUpdateElementCommand(
	action: LocalConstraintAction,
	reverse_action: LocalConstraintAction
): CommandI {
	const command: CommandI = {
		execute: () => {
			updateElementAction(action);
		},
		unExecute: () => {
			updateElementAction(reverse_action);
		}
	};

	return command;
}
