import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import {
	eventIsCtrlA,
	eventIsDirectionalKey,
	getDirectionFromDirectionalKeys,
	isEnterModeKey,
	isQuickShiftKey,
	letterKey2EnterMode,
	parseDigit,
	quickShift2EnterMode
} from '$src/lib/InputHandlers/KeyboardEventUtils';
import {
	CellPointerHandler,
	type CellDragTapEvent
} from '$src/lib/InputHandlers/PointerHandlers/SquareCellPointerInput';
import type { Cell } from '$lib/Puzzle/Grid/Cell';
import type { Grid } from '$lib/Puzzle/Grid/Grid';
import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';
import type { GridShape } from '$lib/Types/types';
import {
	SELECTION_MODE,
	selectionArrowKeyAction,
	selectionClickAction,
	selectionDragAction,
	selectionSetCellsAction
} from '$lib/reducers/SelectionReducer';
import { isCellOnGrid, type GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { threshold } from '$lib/utils/functionUtils';
import {
	restoreToolStoreOnQuickshift,
	selectOnStore,
	updatePreviousToolStore,
	updateToolAndCurrentConstraintStores
} from '$stores/BoardStore';
import { generateUpdateCellAction, getUpdateCellCommand } from '$stores/CellsStore';
import { getUpdateSelectionCommand, updateSelection } from '$stores/SelectionStore';
import { selectionStore } from '$stores/SelectionStore';
import { throttle } from 'lodash';
import { get } from 'svelte/store';
import { getSimilarCells } from './utils';
import { addCommands } from '$stores/HistoryStore';

const cellInputHandler = new CellPointerHandler();

function getSelectionMode(
	pointerEvent: PointerEvent | KeyboardEvent,
	select_on: boolean
): SELECTION_MODE {
	if (pointerEvent.shiftKey) return SELECTION_MODE.SELECTING;
	else if (pointerEvent.ctrlKey || pointerEvent.metaKey || select_on) return SELECTION_MODE.DYNAMIC;
	else if (pointerEvent.altKey) return SELECTION_MODE.DESELECTING;
	return SELECTION_MODE.RESETTING;
}

function filterCellsByValue(
	cells: Cell[],
	toolId: TOOLID,
	matchType: 'any' | 'empty' | 'equal' | 'different',
	value: number,
	blockedByGivens = false
): Cell[] {
	// match types: any value, empty (null), equal to value, different to value
	switch (toolId) {
		case TOOLS.GIVEN: {
			const filtered = cells.filter((cell) => {
				return (
					(matchType === 'any' && cell.value !== null) ||
					(matchType === 'empty' && cell.value === null) ||
					(matchType === 'equal' && cell.value === value) ||
					(matchType === 'different' && (cell.value !== value || !cell.given))
				);
			});
			return filtered;
		}
		case TOOLS.DIGIT: {
			const filtered = cells.filter((cell) => {
				return (
					!(blockedByGivens && cell.given) &&
					((matchType === 'any' && cell.value !== null) ||
						(matchType === 'empty' && cell.value === null) ||
						(matchType === 'equal' && cell.value === value) ||
						(matchType === 'different' && cell.value !== value))
				);
			});
			return filtered;
		}
		case TOOLS.CORNER_PM: {
			const filtered = cells.filter((cell) => {
				return (
					!(blockedByGivens && cell.given) &&
					cell.value === null &&
					((matchType === 'any' && cell.cornerMarks.length) ||
						(matchType === 'empty' && !cell.cornerMarks.length) ||
						(matchType === 'equal' && cell.cornerMarks.includes(value)) ||
						(matchType === 'different' && !cell.cornerMarks.includes(value)))
				);
			});
			return filtered;
		}
		case TOOLS.CENTER_PM: {
			const filtered = cells.filter((cell) => {
				return (
					!(blockedByGivens && cell.given) &&
					cell.value === null &&
					((matchType === 'any' && cell.centerMarks.length) ||
						(matchType === 'empty' && !cell.centerMarks.length) ||
						(matchType === 'equal' && cell.centerMarks.includes(value)) ||
						(matchType === 'different' && !cell.centerMarks.includes(value)))
				);
			});
			return filtered;
		}
		case TOOLS.HIGHLIGHTS: {
			const filtered = cells.filter((cell) => {
				return (
					(matchType === 'any' && cell.highlights.length) ||
					(matchType === 'empty' && !cell.highlights.length) ||
					(matchType === 'equal' && cell.highlights.includes(value)) ||
					(matchType === 'different' && !cell.highlights.includes(value))
				);
			});
			return filtered;
		}
		case TOOLS.FOG: {
			const aux_val = value === 1 ? true : false;
			const filtered = cells.filter((cell) => {
				return (
					(matchType === 'any' && cell.fog) ||
					(matchType === 'empty' && !cell.fog) ||
					(matchType === 'equal' && cell.fog === aux_val) ||
					(matchType === 'different' && cell.fog !== aux_val)
				);
			});
			return filtered;
		}
	}
	return cells;
}

function enterModeOnDelete(cells: Cell[], toolId: TOOLID) {
	const tools: TOOLID[] = [toolId, TOOLS.DIGIT, TOOLS.CORNER_PM, TOOLS.CENTER_PM, TOOLS.HIGHLIGHTS];
	// match toolId -> digit -> corner -> center -> highlight

	const isBlockedByGivens = (tool: TOOLID) => {
		return tool === TOOLS.CORNER_PM || tool === TOOLS.CENTER_PM || tool === TOOLS.DIGIT;
	};

	for (const tool of tools) {
		const filtered = filterCellsByValue(cells, tool, 'any', -1, isBlockedByGivens(tool));
		if (filtered.length) return { tool: tool, cells: filtered };
	}

	return { tool: toolId, cells: [] };
}

function addUpdateCellsCommand(
	selection: GridCoordI[],
	cells: Cell[],
	toolId: TOOLID,
	value: number | null
) {
	const act_rev_act = generateUpdateCellAction(cells, toolId, value);
	if (act_rev_act) {
		const action = act_rev_act[0];
		const reverse_action = act_rev_act[1];
		const command = getUpdateCellCommand(action, reverse_action);
		const sel_action = selectionSetCellsAction(selection);
		// const sel_rev_action = selectionNoneAction();
		const sel_command = getUpdateSelectionCommand(sel_action, sel_action);
		const commands = [sel_command, command];
		addCommands(commands);
	}
}

function onKeyInputFog(value: number | null, cells: Cell[], selection: GridCoordI[]) {
	const tool = TOOLS.FOG;
	if (value !== null && ![0, 1].includes(value)) return false;

	if (value === null) {
		const affected = filterCellsByValue(cells, tool, 'any', -1, false);
		if (affected.length) {
			addUpdateCellsCommand(selection, affected, tool, value);
			return true;
		}
	} else {
		// if match different => change these cells fog value
		const affected = filterCellsByValue(cells, tool, 'different', value, true);
		if (affected.length) {
			addUpdateCellsCommand(selection, affected, tool, value);
			return true;
		}
	}
	return false;
}

export function getSelectionInputHandler(
	svgRef: SVGSVGElement,
	grid: Grid,
	tool: TOOLID
): InputHandler {
	console.log('getSelectionInputHandler');

	const tools: TOOLID[] = [TOOLS.DIGIT, TOOLS.CORNER_PM, TOOLS.CENTER_PM, TOOLS.HIGHLIGHTS];
	const gridShape: GridShape = { nRows: grid.nRows, nCols: grid.nCols };

	cellInputHandler.onTap = (event: CellDragTapEvent): void => {
		// handle double click
		if (event.tapCount !== 2) return;
		const onGrid = isCellOnGrid(event.cell, gridShape);
		// const mode = getSelectionMode(event.event);
		const coords = onGrid ? event.cell : null;
		if (!coords) return;

		const similar_coords = getSimilarCells(coords, grid, tool);

		// on double tap action select similar cells to the tapped one,
		// depending on the current mode

		const action = selectionSetCellsAction(similar_coords);
		updateSelection(action);
	};

	cellInputHandler.onDragStart = (event: CellDragTapEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		const select_on = get(selectOnStore);
		const mode = getSelectionMode(event.event, select_on);
		const cell = onGrid ? event.cell : null;

		const action = selectionClickAction(cell, mode);
		updateSelection(action);
	};

	cellInputHandler.onDrag = (event: CellDragTapEvent): void => {
		const onGrid = isCellOnGrid(event.cell, gridShape);
		0;

		const cell = onGrid ? event.cell : null;

		const action = selectionDragAction(cell);
		updateSelection(action);
	};

	function onSelectionShortcut(event: KeyboardEvent): boolean {
		if (!eventIsCtrlA(event)) return false;
		const cells: GridCoordI[] = grid.getAllCells().map((cell) => ({ r: cell.r, c: cell.c }));

		const action = selectionSetCellsAction(cells);
		updateSelection(action);
		return true;
	}

	function onQuickShift(event: KeyboardEvent): boolean {
		if (!isQuickShiftKey(event)) return false;
		// quick shift only enabled when the current tool is one of digit, center,
		// corner or highlight
		if (!tools.includes(tool)) return false;

		if (event.type === 'keydown') {
			const newTool = quickShift2EnterMode(event);
			updateToolAndCurrentConstraintStores(newTool);
			return true;
		}
		if (event.type === 'keyup') {
			restoreToolStoreOnQuickshift();
			return true;
		}
		return false;
	}

	function onEnterModeKey(event: KeyboardEvent): boolean {
		if (!isEnterModeKey(event)) return false;

		if (event.code === 'Space') {
			const idx = tools.indexOf(tool);
			const nextTool = tools[(idx + 1) % tools.length];
			updateToolAndCurrentConstraintStores(nextTool);
			updatePreviousToolStore(nextTool);
			return true;
		} else {
			const newTool = letterKey2EnterMode(event.code);
			updateToolAndCurrentConstraintStores(newTool);
			updatePreviousToolStore(newTool);
			return true;
		}

		return false;
	}

	function onArrowKey(event: KeyboardEvent): boolean {
		if (!eventIsDirectionalKey(event)) return false;
		const lastCell = get(selectionStore).lastCell;

		let newCoords: GridCoordI | null = null;
		if (lastCell !== null) {
			const [dx, dy] = getDirectionFromDirectionalKeys(event);
			const [r, c] = [
				threshold(lastCell.r + dy, 0, gridShape.nRows - 1),
				threshold(lastCell.c + dx, 0, gridShape.nCols - 1)
			];
			newCoords = { r, c };
		} else {
			newCoords = { r: 0, c: 0 };
		}

		const mode = getSelectionMode(event, false);
		const action = selectionArrowKeyAction(newCoords, mode);
		updateSelection(action);
		return true;
	}

	function onDigitInput(key: string): boolean {
		const value = parseDigit(key);
		if (value === undefined) return false;

		const selection = get(selectionStore).cells;
		const cells: Cell[] = [];
		selection.forEach((coord) => {
			const cell = grid.getCell(coord.r, coord.c);
			if (cell) cells.push(cell);
		});

		// handle input on fog
		if (tool === TOOLS.FOG) {
			const res = onKeyInputFog(value, cells, selection);
			return res;
		} else if (value === null) {
			// handle deletion action
			const { tool: targetTool, cells: affected } = enterModeOnDelete(cells, tool);
			if (affected.length) {
				addUpdateCellsCommand(selection, affected, targetTool, value);
				return true;
				// updateCells(affected, targetTool, value, true);
			}
		} else {
			// if match different => change these cells by adding the value to the cells
			let affected = filterCellsByValue(cells, tool, 'different', value, true);

			if (affected.length) {
				// updateCells(affected, tool, value, true);
				addUpdateCellsCommand(selection, affected, tool, value);
				return true;
			} else {
				// otherwise match equal => change these hexes by removing the value from the cells
				affected = filterCellsByValue(cells, tool, 'equal', value, true);
				if (affected.length) {
					// updateCells(affected, tool, value, true);
					addUpdateCellsCommand(selection, affected, tool, value);
					return true;
				}
			}
		}

		return false;
	}

	// functions that deal with the input number / delete input
	function onDigitInputKeyboard(event: KeyboardEvent): boolean {
		if (event.repeat) return false;
		return onDigitInput(event.key);
	}

	const throttledMove = throttle((event: PointerEvent) => {
		cellInputHandler.pointerMove(event, svgRef);
	}, 20);

	const inputHandler: InputHandler = {
		pointerDown(event: PointerEvent): void {
			if (event.button !== 0) return;
			cellInputHandler.pointerDown(event, svgRef);
		},
		pointerMove(event: PointerEvent): void {
			throttledMove(event);
		},
		pointerUp(event: PointerEvent): void {
			cellInputHandler.pointerUp(event, svgRef);
		},
		keyUp(event: KeyboardEvent) {
			if (onQuickShift(event)) {
				event.stopImmediatePropagation();
				event.preventDefault();
			}
		},
		keyDown(event: KeyboardEvent) {
			if (
				onSelectionShortcut(event) ||
				onArrowKey(event) ||
				onDigitInputKeyboard(event) ||
				onQuickShift(event) ||
				onEnterModeKey(event)
			) {
				event.stopImmediatePropagation();
				event.preventDefault();
			}
		},
		padClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
			onDigitInput(event.currentTarget.value);
		}
	};

	return inputHandler;
}
