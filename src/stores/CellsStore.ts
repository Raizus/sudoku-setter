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
	type UpdateCellsAction
} from '$src/lib/reducers/UpdateCellsActions';

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
