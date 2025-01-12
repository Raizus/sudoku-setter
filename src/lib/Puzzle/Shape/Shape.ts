export enum SHAPE_TYPES {
	CELL_ARROW = 'Cell Arrow',
	CELL_MULTI_ARROW = 'Cell Multi Arrow',
	ADJACENT_CELLS_ARROW = 'Adjacent Cells Arrow',
	CIRCLE = 'Circle',
	SQUARE = 'Square',
	ELLIPSE = 'Ellipse',
	RECTANGLE = 'Rectangle',
	POLYGON = 'Polygon',
	CAGE = 'Cage',
	BORDER_LINE = 'Border Line',
	LINE = 'Line',
	THERMO_WITH_CIRCLE = 'Thermo With Circle',
	THERMO_WITH_POLYGON = 'Thermo With Polygon',
	LINE_WITH_CIRCLE_ENDS = 'Line With Circle Ends',
	LINE_WITH_POLYGON_ENDS = 'Line With Polygon Ends',
	TEXT_ONLY = 'Text Only'
}

interface EditableNumber {
	editable: boolean;
	value: number;
	lb?: number;
	ub?: number;
	step?: number;
}

interface EditableString {
	editable: boolean;
	value: string;
}

interface EditableBoolean {
	editable: boolean;
	value: boolean;
}

export interface PathOptions {
	shortenHead?: number;
	shortenTail?: number;
	bezierRounding?: number;
	closeLoops?: boolean;
}

interface EditablePathOptions {
	shortenHead?: EditableNumber;
	shortenTail?: EditableNumber;
	bezierRounding?: EditableNumber;
	closeLoops?: EditableBoolean;
}

export interface ShapeI {
	type?: SHAPE_TYPES;
	n?: number; // number of sides for polygon
	r?: number; // radius
	height?: number;
	width?: number;
	inset?: number; // cage inset
	connectDiag?: boolean; // cage connect diagonal
	angle?: number;
	fill?: string;
	stroke?: string;
	strokeWidth?: number;
	strokeDasharray?: number;
	strokeDashoffset?: number;
	fontSize?: number;
	fontColor?: string;
	opacity?: number;
	linePathOptions?: PathOptions;
}

export interface EditableShapeI {
	type?: SHAPE_TYPES;
	allowedTypes?: SHAPE_TYPES[];
	n?: EditableNumber; // number of sides for polygon
	r?: EditableNumber; // radius
	height?: EditableNumber;
	width?: EditableNumber;
	inset?: EditableNumber; // cage inset
	angle?: EditableNumber;

	fill?: EditableString;
	stroke?: EditableString;
	strokeWidth?: EditableNumber;
	strokeDasharray?: EditableNumber;
	strokeDashoffset?: EditableNumber;
	fontSize?: EditableNumber;
	fontColor?: EditableString;
	opacity?: EditableNumber;
	linePathOptions?: EditablePathOptions;
}

function updateShape<K extends keyof ShapeI>(shape: ShapeI, key: K, value: ShapeI[K]) {
	if (value !== undefined) shape[key] = value;
}

export function shapeHasEditableProps(eShape: EditableShapeI): boolean {
	if (
		eShape.n?.editable ||
		eShape.r?.editable ||
		eShape.height?.editable ||
		eShape.width?.editable ||
		eShape.inset?.editable ||
		eShape.angle?.editable ||
		eShape.fill?.editable ||
		eShape.stroke?.editable ||
		eShape.strokeWidth?.editable ||
		eShape.strokeDasharray?.editable ||
		eShape.strokeDashoffset?.editable ||
		eShape.fontSize?.editable ||
		eShape.fontColor?.editable ||
		eShape.opacity?.editable
	) {
		return true;
	}
	return false;
}

export function editableShapeToShape(eShape: EditableShapeI): ShapeI {
	const shape: ShapeI = {
		type: eShape.type
	};

	updateShape(shape, 'n', eShape.n?.value);
	updateShape(shape, 'r', eShape.r?.value);
	updateShape(shape, 'height', eShape.height?.value);
	updateShape(shape, 'width', eShape.width?.value);
	updateShape(shape, 'inset', eShape.inset?.value);
	updateShape(shape, 'angle', eShape.angle?.value);
	updateShape(shape, 'fill', eShape.fill?.value);
	updateShape(shape, 'stroke', eShape.stroke?.value);
	updateShape(shape, 'strokeWidth', eShape.strokeWidth?.value);
	updateShape(shape, 'strokeDasharray', eShape.strokeDasharray?.value);
	updateShape(shape, 'strokeDashoffset', eShape.strokeDashoffset?.value);
	updateShape(shape, 'fontSize', eShape.fontSize?.value);
	updateShape(shape, 'fontColor', eShape.fontColor?.value);
	updateShape(shape, 'opacity', eShape.opacity?.value);

	if (eShape.linePathOptions) {
		shape.linePathOptions = {
			shortenHead: eShape.linePathOptions?.shortenHead?.value,
			shortenTail: eShape.linePathOptions?.shortenTail?.value,
			bezierRounding: eShape.linePathOptions?.bezierRounding?.value,
			closeLoops: eShape.linePathOptions?.closeLoops?.value
		};
	}

	return shape;
}

export function getShapeDiff(
	shape1: ShapeI,
	shape2: ShapeI | undefined
): Partial<ShapeI> | undefined {
	const diff = {} as Partial<Record<keyof ShapeI, unknown>>;

	if (shape2 === undefined) {
		const result = shape1;
		return result;
	}

	for (const key in shape1) {
		// Special handling for nested linePathOptions
		if (key === 'linePathOptions') continue; // ignore for now
		if (shape1[key as keyof ShapeI] !== shape2[key as keyof ShapeI]) {
			diff[key as keyof ShapeI] = shape1[key as keyof ShapeI];
		}
	}

	const result = Object.keys(diff).length > 0 ? (diff as Partial<ShapeI>) : undefined;
	return result;
}

export const defaultSingleCellCircleShape: ShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: 0.35,
	strokeWidth: 0.02,
	stroke: 'black'
} as const;

export const defaultSingleCellArrowShape: ShapeI = {
	type: SHAPE_TYPES.CELL_ARROW,
	strokeWidth: 0.1,
	stroke: 'black'
} as const;

export const defaultSingleCellMultiArrowShape: ShapeI = {
	type: SHAPE_TYPES.CELL_MULTI_ARROW,
	strokeWidth: 0.08,
	stroke: 'black'
} as const;

export const defaultEdgeCircleShape: ShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: 0.15,
	strokeWidth: 0.023,
	stroke: 'black',
	fill: 'var(--grid-background-color)'
} as const;

export const defaultCornerCircleShape: ShapeI = {
	type: SHAPE_TYPES.CIRCLE,
	r: 0.25,
	strokeWidth: 0.023,
	stroke: 'black',
	fill: 'var(--grid-background-color)'
} as const;

export const defaultLineShape: ShapeI = {
	type: SHAPE_TYPES.LINE,
	strokeWidth: 0.125,
	stroke: 'gray'
} as const;

export const defaultCageShape: ShapeI = {
	type: SHAPE_TYPES.CAGE,
	strokeWidth: 0.03,
	stroke: 'black',
	fill: 'none',
	strokeDasharray: 0.08,
	inset: 0.06,
	connectDiag: true
} as const;

export const defaultArrowShape: ShapeI = {
	type: SHAPE_TYPES.LINE,
	r: 0.3,
	strokeWidth: 0.03,
	stroke: 'var(--constraint-color-gray)',
	fill: 'none',
	linePathOptions: {
		shortenTail: 0.1,
		bezierRounding: 0.1
	}
} as const;

export const defaultCloneShape: ShapeI = {
	strokeWidth: 0.05,
	strokeDasharray: 0,
	stroke: 'var(--constraint-color-light-gray)',
	fill: 'none',
	inset: 0.07
} as const;

export const defaultOutsideShape: ShapeI = {
	fontColor: 'var(--text-primary-color)',
	stroke: 'var(--text-primary-color)'
} as const;