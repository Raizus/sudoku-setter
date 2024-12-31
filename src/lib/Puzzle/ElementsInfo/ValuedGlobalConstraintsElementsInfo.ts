import type { AbstractElementInfo } from "../ElementInfo";
import { TOOL_CATEGORIES, TOOLS } from "../Tools";

export const forbiddenOrthogonallyAdjacentSumInfo: AbstractElementInfo = {
    toolId: TOOLS.FORBIDDEN_ORTHOGONALLY_ADJACENT_SUM,
    order: 0,

    meta: {
        description: 'Orthogonally adjacent cells may not sum to X.',
        tags: [],
        categories: [TOOL_CATEGORIES.LOCAL_CONSTRAINT, TOOL_CATEGORIES.VALUED_GLOBAL_CONSTRAINT]
    }
};