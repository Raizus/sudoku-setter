import type { ConstraintType } from '../Puzzle/puzzle_schema';
import type { ConstraintsElement } from '../Puzzle/puzzle_schema';

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
		element_id: number;
		id: string;
		constraint: ConstraintType;
	};
};

type RemoveLocalConstraintAction = {
	type: ELEMENT_ACTIONS.REMOVE_LOCAL_CONSTRAINT;
	payload: {
		element_id: number;
		c_id: string;
	};
};

type RemoveElementAction = {
	type: ELEMENT_ACTIONS.REMOVE_ELEMENT;
	payload: {
		element_id: number;
	};
};

type RestoreElementAction = {
	type: ELEMENT_ACTIONS.RESTORE_ELEMENT;
	payload: {
		element_id: number;
		constraints: ConstraintsElement;
	};
};

type EnableDisableElementAction = {
	type: ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT;
	payload: {
		element_id: number;
		value: boolean;
	};
};

type UpdateLocalConstraintAction = {
	type: ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT;
	payload: {
		element_id: number;
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
	element_id: number,
	id: string,
	constraint: ConstraintType
): AddLocalConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.ADD_LOCAL_CONSTRAINT,
		payload: {
			element_id,
			id,
			constraint
		}
	};
};

export const removeLocalConstraintAction = (
	element_id: number,
	id: string
): RemoveLocalConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.REMOVE_LOCAL_CONSTRAINT,
		payload: {
			element_id,
			c_id: id
		}
	};
};

export const removeElementAction = (element_id: number): RemoveElementAction => {
	return {
		type: ELEMENT_ACTIONS.REMOVE_ELEMENT,
		payload: {
			element_id
		}
	};
};

export const restoreElementAction = (
	element_id: number,
	element: ConstraintsElement
): RestoreElementAction => {
	return {
		type: ELEMENT_ACTIONS.RESTORE_ELEMENT,
		payload: {
			element_id,
			constraints: element
		}
	};
};

export const enableDisableElementAction = (
	element_id: number,
	value: boolean
): EnableDisableElementAction => {
	return {
		type: ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT,
		payload: {
			element_id,
			value
		}
	};
};

export const updateLocalConstraintAction = (
	element_id: number,
	id: string,
	constraint: ConstraintType
): UpdateLocalConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT,
		payload: {
			constraintId: id,
			constraint,
			element_id
		}
	};
};
