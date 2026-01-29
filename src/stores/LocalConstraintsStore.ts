import { type ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
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
	let element_id: number | null = null;
	elementsDictStore.update((localConstraintsDict) => {
		const element: ConstraintsElement = { tool_id: toolId, constraints: {} };
		element_id = localConstraintsDict.addElementToDict(element);
		return localConstraintsDict;
	});

	return element_id;
}

export function addLocalConstraint(element_id: number, id: string, constraint: ConstraintType) {
	const currentShape = get(currentShapeStore);
	if (currentShape) {
		constraint.shape = { ...currentShape };
	}

	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.addConstraint(element_id, id, constraint);
		return localConstraintsDict;
	});
	setCurrentConstraint({ id, constraint });
}

/**
 * Removes a single constraint from the constraint dictionary
 * @param element_id
 * @param id
 * @returns
 */
export function removeLocalConstraint(element_id: number, id: string | null) {
	if (!id) return;
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.removeConstraint(element_id, id);
		return localConstraintsDict;
	});
}

export function restoreElement(element_id: number, element: ConstraintsElement) {
	elementsDictStore.update((localConstraintsDict) => {
		localConstraintsDict.setElement(element_id, element);
		return localConstraintsDict;
	});
}

export function enableDisableElement(element_id: number, value: boolean) {
	elementsDictStore.update((elementsDict) => {
		const element = elementsDict.get(element_id);
		if (!element) return elementsDict;
		element.disabled = value;
		elementsDict.setElement(element_id, element);
		return elementsDict;
	});
}

export function updateElementAction(action: LocalConstraintAction): void {
	if (action.type === ELEMENT_ACTIONS.ADD_LOCAL_CONSTRAINT) {
		addLocalConstraint(action.payload.element_id, action.payload.id, action.payload.constraint);
	} else if (action.type === ELEMENT_ACTIONS.REMOVE_LOCAL_CONSTRAINT) {
		removeLocalConstraint(action.payload.element_id, action.payload.c_id);
	} else if (action.type === ELEMENT_ACTIONS.REMOVE_ELEMENT) {
		removeGroupFromLocalConstraint(action.payload.element_id);
	} else if (action.type === ELEMENT_ACTIONS.RESTORE_ELEMENT) {
		restoreElement(action.payload.element_id, action.payload.constraints);
	} else if (action.type === ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT) {
		updateLocalConstraint(
			action.payload.element_id,
			action.payload.constraintId,
			action.payload.constraint
		);
	} else if (action.type === ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT) {
		enableDisableElement(action.payload.element_id, action.payload.value);
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
