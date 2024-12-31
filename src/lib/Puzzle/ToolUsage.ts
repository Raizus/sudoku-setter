import {
	isArrowTool,
	isCageTool,
	isCloneTool,
	isEdgeTool,
	isLineTool,
	isOutsideDirectionTool,
	isSingleCellArrowTool,
	isSingleCellMultiArrowTool,
	TOOLS,
	type TOOLID
} from './Tools';

export const cageUsage = () =>
	`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.`;

export const typableCageUsage = () => 
`    Click and drag to draw a cage.
    Click on a cage to remove it.
    Shift+Click on an existing cage to select it.
    Shift+Click and drag to extend an existing cage.
    Type to enter a value into the selected cage (or the most recently edited).`;

export const arrowUsage = () =>
	`    Click and drag to draw the arrow bulb.
    Shift+Click and drag on an existing bulb to draw an arrow from it.
    Click on an arrow to remove it.
    Click on an arrow bulb to remove it and attached arrows.`;

export const outsideDirectionUsage = () =>
	`    Click outside the grid or on an outside cell near a cell edge or corner to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`;

export const outsideEdgeUsage = () =>
	`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`;

export const outsideCornerUsage = () =>
	`    Click outside the grid or on an outside cell near a cell edge to add or remove an outside direction constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`;

export const centerCornerOrEdgeUsage = () =>
	`    Click in the center, corner or edge of a cell to add or remove a center, corner or edge constraint.
    Type to enter a total into the selected constraint (or the most recently edited).`;

export const lineUsage = () =>
	`    Click and drag to draw a line.
    Click on an existing line to remove it.
    Shift+Click and drag to force-draw a line.`;

export const cellArrowUsage = () =>
	`    Click on a cell to draw a cell arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on an existing cell arrow element to remove it.
    Alt+R to rotate the arrow of the selected element.`;

export const cellMultiArrowUsage = () =>
	`    Click on a cell to draw a cell multi-arrow element. Click near the edge or corner to draw the arrow in that direction.
    Alt+Click on a cell with arrows to remove all arrows.`;

export const edgeUsage = () =>
	`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`;

export const cornerUsage = () =>
	`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).`;

export const quadrupleUsage = () =>
	`    Click on a cell corner to draw a cell corner constraint.
    Click on an existing cell corner constraint to remove it.
    Type to enter a total into the selected constraint (the most recently edited).
    Separate different values using commas (,).`;

export const xvUsage = () =>
	`    Click on a cell edge to draw a cell edge constraint.
    Click on an existing cell edge constraint to remove it.
    Type to X or V to enter a sum into the selected XV constraint (the most recently edited).`;

export const cloneUsage = () =>
	`    Click and drag to draw a clone constraint.
    Click and drag an existing clone constraint to move it.
    Click on an existing clone constraint to remove it.`;

export function getUsageDescription(toolId: TOOLID): string {
	if (isSingleCellArrowTool(toolId)) return cellArrowUsage();
	if (isSingleCellMultiArrowTool(toolId)) return cellMultiArrowUsage();
	if (toolId === TOOLS.XV) return xvUsage();
	if (isEdgeTool(toolId)) return edgeUsage();
	if (isCageTool(toolId)) return cageUsage();
	if (isArrowTool(toolId)) return arrowUsage();
	if (isOutsideDirectionTool(toolId)) return outsideDirectionUsage();
	if (isLineTool(toolId)) return lineUsage();
	if (isCloneTool(toolId)) return cloneUsage();
	return '';
}
