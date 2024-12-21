import type { TOOLID } from '../Puzzle/Tools';

export enum GLOBAL_CONSTRAINTS_ACTIONS {
	SET_GLOBAL_CONSTRAINT = 'SET_GLOBAL_CONSTRAINT',
	REMOVE_GLOBAL_CONSTRAINT = 'REMOVE_GLOBAL_CONSTRAINT'
}

type SetGlobalConstraintAction = {
	type: GLOBAL_CONSTRAINTS_ACTIONS.SET_GLOBAL_CONSTRAINT;
	payload: {
		tool: TOOLID;
		value: boolean;
	};
};

type RemoveGlobalConstraintAction = {
	type: GLOBAL_CONSTRAINTS_ACTIONS.REMOVE_GLOBAL_CONSTRAINT;
	payload: TOOLID;
};

export type GlobalConstraintAction = SetGlobalConstraintAction | RemoveGlobalConstraintAction;

export const setGlobalConstraintAction = (
	tool: TOOLID,
	value: boolean
): SetGlobalConstraintAction => {
	return {
		type: GLOBAL_CONSTRAINTS_ACTIONS.SET_GLOBAL_CONSTRAINT,
		payload: {
			tool: tool,
			value: value
		}
	};
};

export const removeGlobalConstraintAction = (tool: TOOLID): RemoveGlobalConstraintAction => {
	return {
		type: GLOBAL_CONSTRAINTS_ACTIONS.REMOVE_GLOBAL_CONSTRAINT,
		payload: tool
	};
};
