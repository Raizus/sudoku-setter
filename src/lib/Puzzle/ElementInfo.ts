import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import type { Grid } from './Grid/Grid';
import type { EditableShapeI } from './Shape/Shape';
import type { TOOLID } from './Tools';

export interface AbstractMenuComponent {
	type: string;
	name?: string;
	icon?: string;
}
export interface SelectMenuComponent extends AbstractMenuComponent {
	type: 'select';
}

export interface AbstractElementInfo {
	toolId: TOOLID;
	/** Render order. */
	order: number;

	// getInputHandler?: (svgRef: SVGSVGElement, hexGrid: Grid<CustomHex>, tool: TOOLID) => InputHandler;

	// describes how to draw the the element
	shape?: EditableShapeI;

	/** If this element CANNOT be deleted. */
	permanent?: boolean;
	menu?: null | SelectMenuComponent;

	meta?: {
		description: string;
		usage?: string; // how to use the tool with the user inputs
		tags: string[];
		categories: string[];
	};
}

export interface SquareCellElementInfo extends AbstractElementInfo {
	getInputHandler?: (svgRef: SVGSVGElement, grid: Grid, tool: TOOLID) => InputHandler;
}