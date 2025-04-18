import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
import { TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
import {
	restoreCellsGivenAction,
	restoreCellsHighlightsAction,
	restoreCellsPencilmarksAction,
	restoreCellsRegionsAction,
	restoreCellsValueAction,
	setCellsGivenAction,
	setCellsHighlightAction,
	setCellsPencilmarksAction,
	setCellsRegionAction,
	setCellsValueAction,
	UPDATE_CELLS_ACTIONS,
	type UpdateCellsAction
} from '$src/lib/reducers/UpdateCellsActions';
import type { CommandI } from '$src/lib/Types/types';
import { cellsStore } from './BoardStore';

export function generateUpdateCellAction(
	cells: Cell[],
	tool: TOOLID,
	value: number | null
): [UpdateCellsAction, UpdateCellsAction] | undefined {
	if (tool === TOOLS.DIGIT) {
		const prev_vals = cells.map((cell) => cell.value);
		const action = setCellsValueAction(cells, value);
		const reverse_action = restoreCellsValueAction(cells, prev_vals);
		return [action, reverse_action];
	}
	if (tool === TOOLS.GIVEN) {
		const prev_vals = cells.map((cell) => cell.value);
		const givens = cells.map((cell) => cell.given);
		const action = setCellsGivenAction(cells, value);
		const reverse_action = restoreCellsGivenAction(cells, prev_vals, givens);
		return [action, reverse_action];
	}
	if (tool === TOOLS.REGIONS) {
		const prev_vals = cells.map((cell) => cell.region);
		const action = setCellsRegionAction(cells, value);
		const reverse_action = restoreCellsRegionsAction(cells, prev_vals);
		return [action, reverse_action];
	}
	if (tool === TOOLS.HIGHLIGHTS && value !== null) {
		const action = setCellsHighlightAction(cells, value);
		const reverse_action = setCellsHighlightAction(cells, value);
		return [action, reverse_action];
	}
	if (tool === TOOLS.HIGHLIGHTS && value === null) {
		const prev_vals = cells.map((cell) => cell.highlights);
		const action = setCellsHighlightAction(cells, value);
		const reverse_action = restoreCellsHighlightsAction(cells, prev_vals);
		return [action, reverse_action];
	}
	if ((tool === TOOLS.CORNER_PM || tool === TOOLS.CENTER_PM) && value !== null) {
		const action = setCellsPencilmarksAction(cells, value, tool);
		const reverse_action = setCellsPencilmarksAction(cells, value, tool);
		return [action, reverse_action];
	}
	if ((tool === TOOLS.CORNER_PM || tool === TOOLS.CENTER_PM) && value === null) {
		let prev_vals: number[][] = [];
		if (tool === TOOLS.CORNER_PM) prev_vals = cells.map((cell) => cell.cornerMarks);
		else prev_vals = cells.map((cell) => cell.centerMarks);

		const action = setCellsPencilmarksAction(cells, value, tool);
		const reverse_action = restoreCellsPencilmarksAction(cells, prev_vals, tool);
		return [action, reverse_action];
	}
}

export function updateCells(cells: Cell[], tool: TOOLID, value: number | null, clear: boolean) {
	cells.forEach((cell) => {
		cell.enterCell(value, tool, clear);
	});

	cellsStore.update((_cells) => {
		return _cells;
	});
}

export function executeUpdateCellsAction(action: UpdateCellsAction) {
	switch (action.type) {
		case UPDATE_CELLS_ACTIONS.SET_CELLS_VALUE: {
			const cells = action.payload.cells;
			const value = action.payload.value;
			updateCells(cells, TOOLS.DIGIT, value, true);
			break;
		}
		case UPDATE_CELLS_ACTIONS.SET_GIVENS: {
			const cells = action.payload.cells;
			const value = action.payload.value;
			updateCells(cells, TOOLS.GIVEN, value, true);
			break;
		}
		case UPDATE_CELLS_ACTIONS.SET_REGIONS: {
			const cells = action.payload.cells;
			const value = action.payload.value;
			updateCells(cells, TOOLS.REGIONS, value, true);
			break;
		}
		case UPDATE_CELLS_ACTIONS.SET_HIGHLIGHTS: {
			const cells = action.payload.cells;
			const value = action.payload.value;
			updateCells(cells, TOOLS.HIGHLIGHTS, value, true);
			break;
		}
		case UPDATE_CELLS_ACTIONS.SET_PENCILMARKS: {
			const cells = action.payload.cells;
			const value = action.payload.value;
			const tool = action.payload.tool;
			updateCells(cells, tool, value, true);
			break;
		}
		case UPDATE_CELLS_ACTIONS.RESTORE_CELLS_VALUES: {
			const cells = action.payload.cells;
			const values = action.payload.values;
			for (let i = 0; i < cells.length; i++) {
				cells[i].value = values[i];
			}
			cellsStore.update((_cells) => {
				return _cells;
			});
			break;
		}
		case UPDATE_CELLS_ACTIONS.RESTORE_GIVENS: {
			const cells = action.payload.cells;
			const values = action.payload.values;
			const givens = action.payload.givens;
			for (let i = 0; i < cells.length; i++) {
				cells[i].value = values[i];
				cells[i].given = givens[i];
			}
			cellsStore.update((_cells) => {
				return _cells;
			});
			break;
		}
		case UPDATE_CELLS_ACTIONS.RESTORE_REGIONS: {
			const cells = action.payload.cells;
			const values = action.payload.values;
			for (let i = 0; i < cells.length; i++) {
				cells[i].region = values[i];
			}
			cellsStore.update((_cells) => {
				return _cells;
			});
			break;
		}
		case UPDATE_CELLS_ACTIONS.RESTORE_HIGHLIGHTS: {
			const cells = action.payload.cells;
			const values = action.payload.values;
			for (let i = 0; i < cells.length; i++) {
				cells[i].highlights = values[i];
			}
			cellsStore.update((_cells) => {
				return _cells;
			});
			break;
		}
		case UPDATE_CELLS_ACTIONS.RESTORE_PENCILMARKS: {
			const cells = action.payload.cells;
			const tool = action.payload.tool;
			const values = action.payload.values;
			for (let i = 0; i < cells.length; i++) {
				if (tool === TOOLS.CENTER_PM) cells[i].centerMarks = values[i];
				else if (tool === TOOLS.CORNER_PM) cells[i].cornerMarks = values[i];
			}
			cellsStore.update((_cells) => {
				return _cells;
			});
			break;
		}
	}
}

export function getUpdateCellCommand(
	action: UpdateCellsAction,
	reverse_action: UpdateCellsAction
): CommandI {
	const command: CommandI = {
		execute: () => {
			executeUpdateCellsAction(action);
		},
		unExecute: () => {
			executeUpdateCellsAction(reverse_action);
		}
	};

	return command;
}
