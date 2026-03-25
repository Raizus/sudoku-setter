import type { InputHandler } from '../InputHandler';
import { uniqueId } from 'lodash';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { BASIC_TOOL_MODE, CornerOrEdge } from './types';
import type { GridShape } from '$lib/Types/types';
import { findOutsideDirectionConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	gridCoordsNextInDirection,
	idxToDirection,
	isCellOnGrid
} from '$lib/utils/SquareCellGridCoords';
import { outsideDirectionConstraint } from '$lib/Puzzle/Constraints/OutsideDirectionConstraints';
import { type OutsideDirectionToolI } from '$src/lib/Puzzle/puzzle_schema';
import type { OutsideDirectionToolInputOptions } from './types';
import {
	keyDownUpdateValue,
	pushAddLocalConstraintCommand,
	pushRemoveLocalConstraintCommand,
	setConstraintPreviewOnMove
} from './utils';
import { StateStore } from '$stores/StateStore';

export function getOutsideDirectionToolInputHandler(
	svgRef: SVGSVGElement,
	stateStore: StateStore,
	options?: OutsideDirectionToolInputOptions
): InputHandler {
	const cornerOrEdge = options?.cornerOrEdge ?? CornerOrEdge.CORNER_OR_EDGE;
	const pointerHandler = new CellFeaturePointerHandler(cornerOrEdge);

	const grid = stateStore.getGrid();
	const tool = stateStore.getCurrentTool();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellEdgeCornerEvent) {
		const cell = event.cell;
		const direction_idx = event.direction;
		const direction = idxToDirection(direction_idx);

		const onGrid = isCellOnGrid(cell, gridShape);
		if (onGrid) return;

		const neighbour = gridCoordsNextInDirection(cell, direction);
		const neighbourOnGrid = isCellOnGrid(neighbour, gridShape);
		if (!neighbourOnGrid) return;

		let mode = stateStore.getCurrentToolMode();

		// determine if adding or removing
		const elements = stateStore.getElementsDict();
		const match = findOutsideDirectionConstraint(elements, tool, cell, direction);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const [id, constraint] = match;
			pushRemoveLocalConstraintCommand(element_id, id, constraint);
		} else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const newConstraint = outsideDirectionConstraint(tool, cell, direction, '');
			const id = uniqueId();
			pushAddLocalConstraintCommand(element_id, id, newConstraint, true);
		} else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			stateStore.selectConstraint(element_id, match[0]);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		keyDownUpdateValue<OutsideDirectionToolI>(event, stateStore, options?.valueUpdater);
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (onGrid) {
			stateStore.outsideDirectionToolPreviewStore.set(undefined);
			return;
		}

		const direction = idxToDirection(event.direction);
		const neighbour = gridCoordsNextInDirection(event.cell, direction);
		const neighbourOnGrid = isCellOnGrid(neighbour, gridShape);
		if (!neighbourOnGrid) {
			stateStore.outsideDirectionToolPreviewStore.set(undefined);
			return;
		}

		const constraint_preview = outsideDirectionConstraint(tool, event.cell, direction, '');
		const currentShape = stateStore.getCurrentShape();
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const mode = stateStore.getCurrentToolMode();

		const elements = stateStore.getElementsDict();
		const match = findOutsideDirectionConstraint(elements, tool, event.cell, direction);

		const match_id = match ? match[0] : undefined;
		setConstraintPreviewOnMove<OutsideDirectionToolI>(
			constraint_preview,
			stateStore.outsideDirectionToolPreviewStore,
			match_id,
			mode
		);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (event: PointerEvent): void => {
			pointerHandler.pointerMove(event, svgRef);
			return;
		},
		pointerUp: (): void => {
			return;
		},
		keyDown: (event: KeyboardEvent): void => {
			onKeyDown(event);
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
