import type { ConstraintType } from '../Puzzle/puzzle_schema';
import type { ConstraintsElement } from '../Puzzle/puzzle_schema';

export enum ELEMENT_ACTIONS {
	ADD_CONSTRAINT = 'ADD_CONSTRAINT',
	REMOVE_CONSTRAINT = 'REMOVE_CONSTRAINT',
	ADD_ELEMENT = 'ADD_ELEMENT',
	REMOVE_ELEMENT = 'REMOVE_ELEMENT',
	RESTORE_ELEMENT = 'RESTORE_ELEMENT',
	DUPLICATE_ELEMENT = 'DUPLICATE_ELEMENT',
	ENABLE_DISABLE_ELEMENT = 'ENABLE_DISABLE_ELEMENT',
	UPDATE_LOCAL_CONSTRAINT = 'UPDATE_LOCAL_CONSTRAINT',
	MOVE_ELEMENT_UP = 'MOVE_ELEMENT_UP',
	MOVE_ELEMENT_DOWN = 'MOVE_ELEMENT_DOWN'
}

type AddConstraintAction = {
	type: ELEMENT_ACTIONS.ADD_CONSTRAINT;
	payload: {
		element_id: number;
		id: string;
		constraint: ConstraintType;
	};
};

type RemoveConstraintAction = {
	type: ELEMENT_ACTIONS.REMOVE_CONSTRAINT;
	payload: {
		element_id: number;
		c_id: string;
	};
};

type AddElementAction = {
	type: ELEMENT_ACTIONS.ADD_ELEMENT;
	payload: {
		element: ConstraintsElement;
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
		element: ConstraintsElement;
	};
};

type DuplicateElementAction = {
	type: ELEMENT_ACTIONS.DUPLICATE_ELEMENT;
	payload: {
		element_id: number;
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

type MoveElementUpAction = {
	type: ELEMENT_ACTIONS.MOVE_ELEMENT_UP;
	payload: {
		element_id: number;
	};
};

type MoveElementDownAction = {
	type: ELEMENT_ACTIONS.MOVE_ELEMENT_DOWN;
	payload: {
		element_id: number;
	};
};

export type ElementAction =
	| AddConstraintAction
	| RemoveConstraintAction
	| AddElementAction
	| RemoveElementAction
	| RestoreElementAction
	| DuplicateElementAction
	| UpdateLocalConstraintAction
	| EnableDisableElementAction
	| MoveElementUpAction
	| MoveElementDownAction;

export const addConstraintAction = (
	element_id: number,
	id: string,
	constraint: ConstraintType
): AddConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.ADD_CONSTRAINT,
		payload: {
			element_id,
			id,
			constraint
		}
	};
};

export const removeConstraintAction = (element_id: number, id: string): RemoveConstraintAction => {
	return {
		type: ELEMENT_ACTIONS.REMOVE_CONSTRAINT,
		payload: {
			element_id,
			c_id: id
		}
	};
};

export const addElementAction = (element: ConstraintsElement): AddElementAction => {
	return {
		type: ELEMENT_ACTIONS.ADD_ELEMENT,
		payload: {
			element
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
			element: element
		}
	};
};

export const duplicateElementAction = (
	element_id: number
): DuplicateElementAction => {
	return {
		type: ELEMENT_ACTIONS.DUPLICATE_ELEMENT,
		payload: {
			element_id
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

export const moveElementUpAction = (element_id: number): MoveElementUpAction => {
	return {
		type: ELEMENT_ACTIONS.MOVE_ELEMENT_UP,
		payload: {
			element_id
		}
	};
};

export const moveElementDownAction = (element_id: number): MoveElementDownAction => {
	return {
		type: ELEMENT_ACTIONS.MOVE_ELEMENT_DOWN,
		payload: {
			element_id
		}
	};
};
