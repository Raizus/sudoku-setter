import { get } from 'svelte/store';
import { uniqueId } from 'lodash';

import type { InputHandler } from '../InputHandler';
import type { CornerToolOptions } from './types';
import {
	currentConstraintStore,
	updateLocalConstraint,
	localConstraintsStore
} from '$stores/BoardStore';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import type { GridShape } from '$lib/Types/types';
import {
	findCornerConstraint,
	updateConstraintValue,
	type ConstraintType
} from '$lib/Puzzle/Constraints/LocalConstraints';
import { cornerConstraint, type CornerToolI } from '$lib/Puzzle/Constraints/CornerConstraints';
import { cornerCoordToAdjCellCoords, isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	CellCornerPointerHandler,
	type CellCornerTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellCornerPointerHandler';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { cornerToolPreviewStore } from '$stores/ElementsStore';

export function getCornerToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CornerToolOptions
): InputHandler {
	// console.log('getCornerToolInputHandler');
	const pointerHandler = new CellCornerPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	enum MODE {
		DYNAMIC,
		ADDING,
		REMOVING
	}
	let mode = MODE.DYNAMIC;

	function handle(event: CellCornerTapEvent) {
		const localConstraints = get(localConstraintsStore);
		const corner = event.coord;

		const cellsCoords = cornerCoordToAdjCellCoords(corner);

		const onGrid = cellsCoords.every((coord) => isCellOnGrid(coord, gridShape));
		if (!onGrid) return;
		// determine if adding or removing
		let match: [string, ConstraintType] | null = null;
		if (mode === MODE.DYNAMIC) {
			match = findCornerConstraint(localConstraints, tool, corner);
			mode = match ? MODE.REMOVING : MODE.ADDING;
		}
		// remove constraint
		if (match && mode === MODE.REMOVING) {
			const id = match[0];
			pushRemoveLocalConstraintCommand(id, match[1], tool);
			return;
		}
		// add constraint
		else if (mode === MODE.ADDING) {
			const newConstraint = cornerConstraint(tool, cellsCoords, options?.defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(id, newConstraint, tool, true);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as CornerToolI;
		const id = currentConstraint.id;

		if (constraint.value === undefined) return;
		if (!keyboardInputDefaultValidator(event)) return;
		if (!options?.valueUpdater) return;

		const newValue = options.valueUpdater(constraint?.value, event.key);
		if (newValue !== undefined && newValue !== constraint.value) {
			constraint = updateConstraintValue(constraint, newValue);
			updateLocalConstraint(tool, id, constraint);
		}
	}

	pointerHandler.onDragStart = (event: CellCornerTapEvent): void => {
		mode = MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onMove = (event: CellCornerTapEvent): void => {
		const onGrid = isCellOnGrid(event.coord, gridShape);
		if (!onGrid) {
			cornerToolPreviewStore.set(undefined);
			return;
		}

		const cellsCoords = cornerCoordToAdjCellCoords(event.coord);
		const constraint_preview = cornerConstraint(tool, cellsCoords, options?.defaultValue);

		cornerToolPreviewStore.set(constraint_preview);
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
		keyDown: (event: KeyboardEvent): void => {
			onKeyDown(event);
		},
		keyUp: (): void => {
			return;
		}
	};

	return inputHandler;
}
