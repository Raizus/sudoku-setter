export interface Settings {
	// display options
	non_given_color: string;
	selection_color: string;
	seen_cells_color: string;
	conflict_marks_color: string;
	conflict_cells_color: string;

	darkMode: boolean;

	//tools
	penToolActive: boolean;
	letterToolActive: boolean;

	// gameplay options
	highlightCellsSeenBySelection: boolean;
	checkConflicts: boolean;
	highlightPencilmarkConflicts: boolean;

	//setting mode display options
	hideFog: boolean;
	showSolution: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
	non_given_color: 'var(--cell-digit-color)',
	selection_color: 'var(--selection-color)',
	seen_cells_color: 'var(--seen-cells-color)',
	conflict_marks_color: 'var(--cell-digit-conflict-color)',
	conflict_cells_color: 'var(--conflict-cells-color)',

	darkMode: true,
	penToolActive: true,
	letterToolActive: false,

	highlightCellsSeenBySelection: true,
	checkConflicts: true,
	highlightPencilmarkConflicts: true,

	hideFog: false,
	showSolution: false
};

export function getDefaultSettings(): Settings {
	return {...DEFAULT_SETTINGS};
}
