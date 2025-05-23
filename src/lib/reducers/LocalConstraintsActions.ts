import type { ConstraintType } from '../Puzzle/puzzle_schema';
import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
import type { TOOLID } from '../Puzzle/Tools';

export enum ELEMENT_ACTIONS {
	ADD_LOCAL_CONSTRAINT = 'ADD_LOCAL_CONSTRAINT',
	REMOVE_LOCAL_CONSTRAINT = 'REMOVE_LOCAL_CONSTRAINT',
	REMOVE_ELEMENT = 'REMOVE_ELEMENT',
	RESTORE_ELEMENT = 'RESTORE_ELEMENT',
	ENABLE_DISABLE_ELEMENT = 'ENABLE_DISABLE_ELEMENT',
	UPDATE_LOCAL_CONSTRAINT = 'UPDATE_LOCAL_CONSTRAINT'
}

type AddLocalConstraintAction = {
	type: ELEMENT_ACTIONS.ADD_LOCAL_CONSTRAINT;
	payload: {
		id: string;
		constraint: ConstraintType;
	};
};

type RemoveLocalConstraintAction = {
	type: ELEMENT_ACTIONS.REMOVE_LOCAL_CONSTRAINT;
	payload: {
		id: string;
		tool: TOOLID;
	};
};

type RemoveElementAction = {
	type: ELEMENT_ACTIONS.REMOVE_ELEMENT;
	payload: {
		tool: TOOLID;
	};
};

type RestoreElementAction = {
	type: ELEMENT_ACTIONS.RESTORE_ELEMENT;
	payload: {
		tool: TOOLID;
		constraints: ConstraintsElement;
	};
};

type EnableDisableElementAction = {
	type: ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT;
	payload: {
		tool: TOOLID;
		value: boolean;
	};
};

type UpdateLocalConstraintAction = {
	type: ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT;
	payload: {
		tool: TOOLID;
		constraintId: string;
		constraint: ConstraintType;
	};
};

export type LocalConstraintAction =
	| AddLocalConstraintAction
	| RemoveLocalConstraintAction
	| RemoveElementAction
	| RestoreElementAction
	| UpdateLocalConstraintAction
	| EnableDisableElementAction;

export const addLocalConstraintAction = (
	id: string,
	constraint: ConstraintType
): AddLocalConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.ADD_LOCAL_CONSTRAINT,
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
		type: ELEMENT_ACTIONS.REMOVE_LOCAL_CONSTRAINT,
		payload: {
			id,
			tool
		}
	};
};

export const removeElementAction = (
	tool: TOOLID
): RemoveElementAction => {
	return {
		type: ELEMENT_ACTIONS.REMOVE_ELEMENT,
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
		type: ELEMENT_ACTIONS.RESTORE_ELEMENT,
		payload: {
			tool,
			constraints: element
		}
	};
};

export const enableDisableElementAction = (tool: TOOLID, value: boolean): EnableDisableElementAction => {
	return {
		type: ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT,
		payload: {
			tool,
			value
		}
	};
};

export const updateLocalConstraintAction = (
	tool: TOOLID,
	id: string,
	constraint: ConstraintType
): UpdateLocalConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT,
		payload: {
			constraintId: id,
			constraint,
			tool
		}
	};
};