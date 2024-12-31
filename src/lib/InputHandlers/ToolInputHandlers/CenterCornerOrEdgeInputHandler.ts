import type { InputHandler, ValueToolInputOptions } from '../InputHandler';
import {
    currentConstraintStore,
    updateLocalConstraint
} from '$stores/BoardStore';
import { localConstraintsStore } from '$stores/BoardStore';
import { removeLocalConstraint } from '$stores/LocalConstraintsStore';
import { addLocalConstraint } from '$stores/LocalConstraintsStore';
import { get } from 'svelte/store';
import { uniqueId } from 'lodash';
import type { TOOLID } from '$lib/Puzzle/Tools';
import { keyboardInputDefaultValidator } from '$src/lib/InputHandlers/KeyboardEventUtils';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import {
    CellEdgeCornerPointerHandler,
    CornerOrEdge,
    type CellEdgeCornerEvent
} from '$src/lib/InputHandlers/PointerHandlers/CellEdgeCornerPointerHandler';
import type { GridShape } from '$lib/Types/types';
import {
    updateConstraintValue,
    findCenterCornerOrEdgeConstraint
} from '$lib/Puzzle/Constraints/LocalConstraints';
import { isCellOnGrid } from '$lib/utils/SquareCellGridCoords';
import { centerCornerOrEdgeConstraint, type CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';

export interface CenterCornerOrEdgeToolInputOptions extends ValueToolInputOptions {
    targets: CornerOrEdge;
}

export function getCenterCornerOrEdgeToolInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID,
	options?: CenterCornerOrEdgeToolInputOptions
): InputHandler {
	console.log('getCenterCornerOrEdgeToolInputHandler');

	const targets = options?.targets ?? CornerOrEdge.CLOSEST;
    const pointerHandler = new CellEdgeCornerPointerHandler(targets);
    
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	let currentConstraint: CenterCornerOrEdgeToolI | null = null;
	let id: string | null = null;

	function handle(event: CellEdgeCornerEvent) {
		const localConstraints = get(localConstraintsStore);
        const cell = event.cell;
        const coords = event.closest;
        
        console.log(event);

		const onGrid = isCellOnGrid(cell, gridShape);
		if (!onGrid) return;

		const match = findCenterCornerOrEdgeConstraint(localConstraints, tool, coords);
		if (match) {
			removeLocalConstraint(tool, match);
			return;
		}

		currentConstraint = centerCornerOrEdgeConstraint(tool, coords, '');
		id = uniqueId();
		addLocalConstraint(id, currentConstraint);
	}

	function onKeyDown(event: KeyboardEvent) {
		const currentConstraint = get(currentConstraintStore);
		if (!currentConstraint) return;

		let constraint = currentConstraint.constraint as CenterCornerOrEdgeToolI;
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

	pointerHandler.onDragStart = (event: CellEdgeCornerEvent): void => {
		handle(event);
	};

	const inputHandler: InputHandler = {
		pointerDown: (event: PointerEvent): void => {
			if (event.button !== 0) return;
			pointerHandler.pointerDown(event, svgRef);
		},
		pointerMove: (): void => {
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
