import type { ConstraintsElement, ConstraintType } from '../Puzzle/Constraints/ElementsDict';
import type { TOOLID } from '../Puzzle/Tools';

export enum LOCAL_CONSTRAINTS_ACTIONS {
	ADD_LOCAL_CONSTRAINT = 'ADD_LOCAL_CONSTRAINT',
	REMOVE_LOCAL_CONSTRAINT = 'REMOVE_LOCAL_CONSTRAINT',
	REMOVE_LOCAL_CONSTRAINT_GROUP = 'REMOVE_LOCAL_CONSTRAINT_GROUP',
	RESTORE_ELEMENT = 'RESTORE_ELEMENT',
	UPDATE_LOCAL_CONSTRAINT = 'UPDATE_LOCAL_CONSTRAINT'
}

type AddLocalConstraintAction = {
	type: LOCAL_CONSTRAINTS_ACTIONS.ADD_LOCAL_CONSTRAINT;
	payload: {
		id: string;
		constraint: ConstraintType;
	};
};

type RemoveLocalConstraintAction = {
	type: LOCAL_CONSTRAINTS_ACTIONS.REMOVE_LOCAL_CONSTRAINT;
	payload: {
		id: string;
		tool: TOOLID;
	};
};

type RemoveLocalConstraintGroupAction = {
	type: LOCAL_CONSTRAINTS_ACTIONS.REMOVE_LOCAL_CONSTRAINT_GROUP;
	payload: {
		tool: TOOLID;
	};
};

type RestoreElementAction = {
	type: LOCAL_CONSTRAINTS_ACTIONS.RESTORE_ELEMENT;
	payload: {
		tool: TOOLID;
		constraints: ConstraintsElement;
	};
};

type UpdateLocalConstraintAction = {
	type: LOCAL_CONSTRAINTS_ACTIONS.UPDATE_LOCAL_CONSTRAINT;
	payload: {
		tool: TOOLID;
		constraintId: string;
		constraint: ConstraintType;
	};
};

export type LocalConstraintAction =
	| AddLocalConstraintAction
	| RemoveLocalConstraintAction
	| RemoveLocalConstraintGroupAction
	| RestoreElementAction
	| UpdateLocalConstraintAction;

export const addLocalConstraintAction = (
	id: string,
	constraint: ConstraintType
): AddLocalConstraintAction => {
	return {
		type: LOCAL_CONSTRAINTS_ACTIONS.ADD_LOCAL_CONSTRAINT,
		payload: {
			id,
			constraint
		}
	};
};

export const removeLocalConstraintAction = (
	id: string,
	tool: TOOLID
): RemoveLocalConstraintAction => {
	return {
		type: LOCAL_CONSTRAINTS_ACTIONS.REMOVE_LOCAL_CONSTRAINT,
		payload: {
			id,
			tool
		}
	};
};

export const removeLocalConstraintGroupAction = (
	tool: TOOLID
): RemoveLocalConstraintGroupAction => {
	return {
		type: LOCAL_CONSTRAINTS_ACTIONS.REMOVE_LOCAL_CONSTRAINT_GROUP,
		payload: {
			tool
		}
	};
};

export const restoreElementAction = (
	tool: TOOLID,
	element: ConstraintsElement
): RestoreElementAction => {
	return {
		type: LOCAL_CONSTRAINTS_ACTIONS.RESTORE_ELEMENT,
		payload: {
			tool,
			constraints: element
		}
	};
};

export const updateLocalConstraintAction = (
	tool: TOOLID,
	id: string,
	constraint: ConstraintType
): UpdateLocalConstraintAction => {
	return {
		type: LOCAL_CONSTRAINTS_ACTIONS.UPDATE_LOCAL_CONSTRAINT,
		payload: {
			constraintId: id,
			constraint,
			tool
		}
	};
};