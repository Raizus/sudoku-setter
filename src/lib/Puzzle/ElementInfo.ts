import type { ToolHandlerOptions } from '$input/ToolInputHandlers/types';
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
	inputOptions?: ToolHandlerOptions;
}