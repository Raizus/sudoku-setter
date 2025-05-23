import type { ConstraintType } from './Constraints/ElementsDict';
import type { TOOLID } from './Tools';


export interface ConstraintsElement {
	tool_id: TOOLID;
	name?: string;
	constraints?: Record<string, ConstraintType>;
	negative_constraints?: Record<string, boolean>;
	disabled?: boolean;
}
