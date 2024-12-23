import { GLOBAL_CONSTRAINTS, isGlobalConstraint, isToolOfType, toolKeyFromString, type TOOLID } from '../Tools';

export class GlobalConstraintsDict extends Map<TOOLID, boolean> {
	constructor() {
		super();
	}

	setConstraint(key: TOOLID, value: boolean): GlobalConstraintsDict {
		if (isGlobalConstraint(key)) {
			this.set(key, value);
			// return this.copy();
		}
		return this;
	}

	removeConstraint(key: TOOLID): GlobalConstraintsDict {
		if (this.has(key)) {
			this.delete(key);
			// return this.copy();
		}
		return this;
	}

	toJSON(): Record<string, boolean> {
		const record: Record<string, boolean> = {};
		for (const [toolId, value] of this.entries()) {
			if (value) {
				record[toolId] = value;
			}
		}
		return record;
	}

	copy(): GlobalConstraintsDict {
		const newBoolConstraints = new GlobalConstraintsDict();
		for (const [key, value] of this.entries()) {
			newBoolConstraints.set(key, value);
		}
		return newBoolConstraints;
	}

	static fromJson(data: Record<string, unknown> | null) {
		const global_constraints = new GlobalConstraintsDict();
		if (!data) return global_constraints;

		for (const [key, value] of Object.entries(data)) {
			const tool = toolKeyFromString(key);
			if (tool === undefined) continue;
			if (!isToolOfType(tool, GLOBAL_CONSTRAINTS)) continue;

			if (typeof value === 'boolean' && value) {
				global_constraints.setConstraint(tool, value);
			}
		}

		return global_constraints;
	}
}
