import type { ShapeI } from "../Shape/Shape";
import type { TOOLID } from "../Tools";

export interface ConstraintI {
	toolId: TOOLID;
	shape?: ShapeI;
}
