import type { InputHandler } from '../InputHandler';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellFeaturePointerHandler,
	type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import { BASIC_TOOL_MODE, CornerOrEdge } from './types';
import type { GridShape } from '$lib/Types/types';
import { findCenterCornerOrEdgeConstraint } from '$src/lib/Puzzle/Constraints/ElementsDict';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { centerCornerOrEdgeConstraint } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
import { type CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/puzzle_schema';
import type { CenterCornerOrEdgeToolInputOptions } from './types';
import {
	keyDownUpdateValue,
	pushAddLocalConstraintCommand,
	pushRemoveLocalConstraintCommand,
	setConstraintPreviewOnMove
} from './utils';
import { stateStore } from '$stores/StateStore';

export function getCenterCornerOrEdgeToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CenterCornerOrEdgeToolInputOptions
): InputHandler {
	// console.log('getCenterCornerOrEdgeToolInputHandler');

	const targets = options?.targets ?? CornerOrEdge.CLOSEST;
	const pointerHandler = new CellFeaturePointerHandler(targets);

	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	function handle(event: CellEdgeCornerEvent) {
		const cell = event.cell;
		const coords = event.closest;

		let mode = stateStore.getCurrentToolMode();

		const onGrid = isCellOnGrid(cell, gridShape);
		if (!onGrid) return;

		// determine if adding or removing
		const elements = stateStore.getElementsDict();
		const match = findCenterCornerOrEdgeConstraint(elements, tool, coords);
		if (mode === BASIC_TOOL_MODE.DYNAMIC) {
			mode = match ? BASIC_TOOL_MODE.DELETE : BASIC_TOOL_MODE.ADD_EDIT;
		}

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		// remove constraint
		if (match && mode === BASIC_TOOL_MODE.DELETE) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(element_id, id, match[1]);
		}
		// add constraint
		else if (!match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			const newConstraint = centerCornerOrEdgeConstraint(tool, coords, '');
			const id = uniqueId();
			pushAddLocalConstraintCommand(element_id, id, newConstraint, true);
		} else if (match && mode === BASIC_TOOL_MODE.ADD_EDIT) {
			stateStore.selectConstraint(element_id, match[0]);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		keyDownUpdateValue<CenterCornerOrEdgeToolI>(
			event,
			stateStore,
			options?.valueUpdater
		);
	}

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	pointerHandler.onMove = (event: CellEdgeCornerEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			stateStore.centerCornerOrEdgeToolPreviewStore.set(undefined);
			return;
		}

		const mode = stateStore.getCurrentToolMode();

		const constraint_preview = centerCornerOrEdgeConstraint(tool, event.closest, '');
		const currentShape = stateStore.getCurrentShape();
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const elements = stateStore.getElementsDict();

		const match = findCenterCornerOrEdgeConstraint(elements, tool, event.closest);
		const match_id = match ? match[0] : undefined;
		setConstraintPreviewOnMove<CenterCornerOrEdgeToolI>(
			constraint_preview,
			stateStore.centerCornerOrEdgeToolPreviewStore,
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
		},
		pointerUp: (): void => {},
		keyDown: (event: KeyboardEvent): void => {
			onKeyDown(event);
		},
		keyUp: (): void => {}
	};

	return inputHandler;
}
