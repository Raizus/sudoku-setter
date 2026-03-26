import type { InputHandler } from '../InputHandler';
import { uniqueId } from 'lodash';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import {
	arrowAddToBulb,
	arrowAddToLast,
	arrowAddToLines,
	arrowConstraint,
	arrowRemoveLastLine,
	arrowShouldRemoveLastLine,
	removeLineFromArrow
} from '$lib/Puzzle/Constraints/ArrowConstraints';
import { type ArrowToolI } from '$src/lib/Puzzle/puzzle_schema';
import type { GridShape } from '$lib/Types/types';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	findArrowBulbConstraint,
	findArrowLineConstraint
} from '$src/lib/Puzzle/Constraints/ElementsDict';
import {
	pushAddLocalConstraintCommand,
	pushRemoveLocalConstraintCommand,
	pushUpdateLocalConstraintCommand
} from './utils';
import { ARROW_TOOL_MODE, type ArrowToolInputOptions } from './types';
import { StateStore } from '$stores/StateStore';

export function getArrowToolInputHandler(
	svgRef: SVGSVGElement,
	stateStore: StateStore,
	options?: ArrowToolInputOptions
): InputHandler {
	// console.log('getArrowToolInputHandler');
	const pointerHandler = new CellPointerHandler();

	const grid = stateStore.getGrid();
	const tool = stateStore.getCurrentTool();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: ArrowToolI | null = null;
	let oldConstraint: ArrowToolI | null = null;
	let id: string | null = null;

	let bypassTap = false;
	let bypassDragEnd = false;

	let mode = ARROW_TOOL_MODE.DYNAMIC;

	// pointer down and no match => new arrow (mode BULB)
	// pointer down and match arrow and not shift => remove arrow
	// pointer down and match arrow and shift => new arrow (mode BULB)

	function handle(event: CellDragTapEvent) {
		// if (!id || !newConstraint) throw "UNREACHABLE";
		bypassTap = false;

		const coords = event.cell;
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		if (mode === ARROW_TOOL_MODE.DYNAMIC) {
			const elements = stateStore.getElementsDict();

			const matchLine = findArrowLineConstraint(elements, tool, coords);
			if (matchLine) {
				const arrow = removeLineFromArrow(matchLine.arrow, matchLine.matchLineIdx);
				pushUpdateLocalConstraintCommand(element_id, matchLine.id, matchLine.arrow, arrow, true);
				bypassDragEnd = true;
				return;
			}

			const bulbMatch = findArrowBulbConstraint(elements, tool, coords);
			if (!bulbMatch) {
				bypassTap = true;
				mode = ARROW_TOOL_MODE.EDIT_BULB;
				id = null;
				currentConstraint = null;
			} else {
				mode = ARROW_TOOL_MODE.EDIT_ARROWS;
				id = bulbMatch[0];
				currentConstraint = bulbMatch[1];
				currentConstraint = arrowAddToLines(currentConstraint, coords);
				stateStore.updateConstraint(element_id, id, currentConstraint);
				return;
			}
		}

		if (mode === ARROW_TOOL_MODE.EDIT_BULB && !id) {
			id = uniqueId();
			currentConstraint = arrowConstraint(tool, [coords]);
			stateStore.setShapeAndAddConstraint(element_id, id, currentConstraint);
			return;
		} else if (mode === ARROW_TOOL_MODE.EDIT_BULB && id && currentConstraint) {
			currentConstraint = arrowAddToBulb(currentConstraint, coords);
			stateStore.updateConstraint(element_id, id, currentConstraint);
		} else if (mode === ARROW_TOOL_MODE.EDIT_ARROWS && id && currentConstraint) {
			// add to arrow line
			currentConstraint = arrowAddToLast(currentConstraint, coords, options?.allowSelfIntersection);
			stateStore.updateConstraint(element_id, id, currentConstraint);
		}
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		mode = ARROW_TOOL_MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = () => {
		if (bypassDragEnd) {
			bypassDragEnd = false;
			return;
		}

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		if (mode === ARROW_TOOL_MODE.EDIT_ARROWS && id && currentConstraint) {
			// remove last line if last line length <= 1;
			if (arrowShouldRemoveLastLine(currentConstraint)) {
				currentConstraint = arrowRemoveLastLine(currentConstraint);
				stateStore.updateConstraint(element_id, id, currentConstraint);
			} else {
				pushUpdateLocalConstraintCommand(element_id, id, oldConstraint, currentConstraint);
				oldConstraint = currentConstraint;
			}
		}
		// push command to history
		else if (mode === ARROW_TOOL_MODE.EDIT_BULB) {
			pushAddLocalConstraintCommand(element_id, id, currentConstraint);
			oldConstraint = currentConstraint;
		}
		mode = ARROW_TOOL_MODE.DYNAMIC;
	};

	pointerHandler.onTap = (event: CellDragTapEvent) => {
		if (bypassTap) return;

		const element_id = stateStore.getSelectedElementId();
		if (element_id === null) return;

		const coords = event.cell;
		const elements = stateStore.getElementsDict();

		// on bulb tap remove Arrow
		const matchBulb = findArrowBulbConstraint(elements, tool, coords);
		if (matchBulb) {
			// push command to history
			pushRemoveLocalConstraintCommand(element_id, id, currentConstraint);
			return;
		}
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (event: PointerEvent): void => {
			pointerHandler.pointerMove(event, svgRef);
		},
		pointerUp: (event: PointerEvent): void => {
			pointerHandler.pointerUp(event, svgRef);
		},
		keyDown: (): void => {
			return;
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
