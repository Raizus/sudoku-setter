import type { ConstraintType } from '../Puzzle/Constraints/LocalConstraints';
import type { TOOLID } from '../Puzzle/Tools';

export enum LOCAL_CONSTRAINTS_ACTIONS {
	ADD_LOCAL_CONSTRAINT = 'ADD_LOCAL_CONSTRAINT',
	REMOVE_LOCAL_CONSTRAINT = 'REMOVE_LOCAL_CONSTRAINT',
	REMOVE_LOCAL_CONSTRAINT_GROUP = 'REMOVE_LOCAL_CONSTRAINT_GROUP',
	RESTORE_LOCAL_CONSTRAINT_GROUP = 'RESTORE_LOCAL_CONSTRAINT_GROUP',
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

type RestoreLocalConstraintGroupAction = {
	type: LOCAL_CONSTRAINTS_ACTIONS.RESTORE_LOCAL_CONSTRAINT_GROUP;
	payload: {
		tool: TOOLID;
		constraints: Record<string, ConstraintType>;
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
	| RestoreLocalConstraintGroupAction
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

export const restoreLocalConstraintGroupAction = (
	tool: TOOLID,
	constraints: Record<string, ConstraintType>
): RestoreLocalConstraintGroupAction => {
	return {
		type: LOCAL_CONSTRAINTS_ACTIONS.RESTORE_LOCAL_CONSTRAINT_GROUP,
		payload: {
			tool,
			constraints
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