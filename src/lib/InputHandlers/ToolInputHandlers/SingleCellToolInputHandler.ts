import type { InputHandler } from '../InputHandler';
import type { SingleCellToolOptions } from './types';
import type { TOOLID } from '$lib/Puzzle/Tools';
import {
	currentConstraintStore,
	currentShapeStore,
	updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$input/PointerHandlers/CellPointerHandler';
import type { GridShape } from '$lib/Types/types';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import {
	findSingleCellConstraint,
	updateConstraintValue
} from '$lib/Puzzle/Constraints/LocalConstraints';
import {
	singleCellConstraint,
	type CellToolI
} from '$lib/Puzzle/Constraints/SingleCellConstraints';
import { pushAddLocalConstraintCommand, pushRemoveLocalConstraintCommand } from './utils';
import { simpleCellToolPreviewStore, type ToolPreview } from '$stores/ElementsStore';

export function getSingleCellToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: SingleCellToolOptions
): InputHandler {
	const pointerHandler = new CellPointerHandler();
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	enum MODE {
		DYNAMIC,
		ADDING,
		REMOVING
	}
	let mode = MODE.DYNAMIC;

	function handle(event: CellDragTapEvent) {
		const localConstraints = get(localConstraintsStore);
		const coords = event.cell;

		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) return;

		// determine if adding or removing
		const match = findSingleCellConstraint<CellToolI>(localConstraints, tool, coords);
		if (mode === MODE.DYNAMIC) {
			mode = match ? MODE.REMOVING : MODE.ADDING;
		}

		if (options?.oppositeConstraintId) {
			const oppositeConstraintMatch = findSingleCellConstraint<CellToolI>(
				localConstraints,
				options.oppositeConstraintId,
				coords
			);
			if (oppositeConstraintMatch) return;
		}

		if (match && mode === MODE.REMOVING) {
			const [id, constraint] = match;
			pushRemoveLocalConstraintCommand(id, constraint, tool);
		} else if (!match && mode === MODE.ADDING) {
			const newConstraint = singleCellConstraint(tool, coords, options?.defaultValue);
			const id = uniqueId();
			pushAddLocalConstraintCommand(id, newConstraint, tool, true);
		}
	}

	pointerHandler.onDragStart = (event: CellDragTapEvent): void => {
		mode = MODE.DYNAMIC;
		handle(event);
	};

	pointerHandler.onDrag = (event: CellDragTapEvent): void => {
		handle(event);
	};

	pointerHandler.onDragEnd = (): void => {
		mode = MODE.DYNAMIC;
	}

	pointerHandler.onMove = (event: CellDragTapEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		if (!onGrid) {
			simpleCellToolPreviewStore.set(undefined);
			return;
		}

		const constraint_preview = singleCellConstraint(tool, event.cell, options?.defaultValue);
		const currentShape = get(currentShapeStore);
		if (currentShape) {
			constraint_preview.shape = { ...currentShape };
		}

		const localConstraints = get(localConstraintsStore);
		const match = findSingleCellConstraint<CellToolI>(localConstraints, tool, event.cell);
		let preview_mode: 'add' | 'remove' = 'add';
		let match_id: string | undefined = undefined;
		if (match && (mode === MODE.REMOVING || mode === MODE.DYNAMIC)) {
			preview_mode = 'remove';
			match_id = match[0];
		}

		const aux: ToolPreview<CellToolI> = {
			tool: constraint_preview,
			match_id,
			mode: preview_mode
		};
		simpleCellToolPreviewStore.set(aux);
	};

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as CellToolI;
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
