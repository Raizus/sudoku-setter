
export interface Settings {
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

export function getDefaultsSettings(): Settings {
	return {
		darkMode: true,
		penToolActive: true,
		letterToolActive: false,

		highlightCellsSeenBySelection: true,
		checkConflicts: true,
		highlightPencilmarkConflicts: true,

		hideFog: false,
		showSolution: false,
	};
}