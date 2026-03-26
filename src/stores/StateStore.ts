import { ElementsDict, filterElements } from '$src/lib/Puzzle/Constraints/ElementsDict';
import type { Cell } from '$src/lib/Puzzle/Grid/Cell';
import { Grid } from '$src/lib/Puzzle/Grid/Grid';
import { PenTool } from '$src/lib/Puzzle/PenTool';
import { blankPuzzle, type PuzzleI } from '$src/lib/Puzzle/Puzzle';
import { getDefaultBoundingBox } from '$src/lib/Puzzle/BoardBoundingBox';
import type {
	CellArrowToolI,
	CellMultiArrowToolI,
	CellToolI,
	CenterCornerOrEdgeToolI,
	ConstraintAndId,
	ConstraintsElement,
	ConstraintType,
	CornerToolI,
	EdgeToolI,
	OutsideDirectionToolI,
	PuzzleMetaI,
	SingleCellTool,
	Solution,
	ToolPreview
} from '$src/lib/Puzzle/puzzle_schema';
import type { ShapeI } from '$src/lib/Puzzle/Shape/Shape';
import {
	isCenterEdgeCornerTool,
	isCornerLineTool,
	isCornerTool,
	isDiagonalConstraint,
	isEdgeTool,
	isSingleCellTool,
	isUnderlayTool,
	TOOLS,
	type TOOLID
} from '$src/lib/Puzzle/Tools';

import type { ToolModeT } from '$input/ToolInputHandlers/types';
import { ELEMENT_ACTIONS, type ElementAction } from '$src/lib/reducers/ElementsActions';
import {
	reducerPenTool,
	resetPenAction,
	type PenToolAction
} from '$src/lib/reducers/PenToolReducer';
import { UPDATE_CELLS_ACTIONS, type UpdateCellsAction } from '$src/lib/reducers/UpdateCellsActions';
import { type CommandI, GAME_MODE, type Rectangle } from '$src/lib/Types/types';
import {
	initSelection,
	reducerSelection,
	selectionClearAction,
	type SelectionAction,
	type SelectionState
} from '$src/lib/reducers/SelectionReducer';

import { debounce, range } from 'lodash';
import { derived, get, writable } from 'svelte/store';
import type { Readable } from 'svelte/store';
import { CommandHistoryStore, createCommand } from './CommandHistoryStore';
import { puzzleToCompressedStr } from '$src/lib/SettingPanel/SavePuzzleModal/io_utils';

function updateUrlParams(compressedStr: string) {
	if (typeof window === 'undefined') return;

	const url = new URL(window.location.href);
	url.searchParams.set('puzzle', compressedStr);

	// const newUrl = url.toString();
	// window.history.replaceState({}, '', newUrl);
}

export class StateStore {
	public svgRefStore = writable<SVGSVGElement | null>(null);
	public gameModeStore = writable<GAME_MODE>(GAME_MODE.SETTING);

	public toolStore = writable<TOOLID>(TOOLS.DIGIT);
	public selectOnStore = writable<boolean>(false);
	public toolModeStore = writable<ToolModeT>(undefined);

	private _selectedElementIdStore = writable<number | null>(null);
	private _previousToolStore = writable<TOOLID | null>(TOOLS.DIGIT);
	private _selectionStore = writable<SelectionState>(initSelection());

	private _gridStore = writable<Grid>(new Grid(9, 9));
	private _cellsStore = writable<Cell[]>(get(this._gridStore).getAllCells());
	private _validDigitsStore = writable<number[]>(range(1, 10));
	private _puzzleMetaStore = writable<PuzzleMetaI>({});
	private _elementsDictStore = writable<ElementsDict>(new ElementsDict());

	private _penToolStore = writable<PenTool>(new PenTool());
	private _penColorStore = writable<number>(1);

	private _currentConstraintStore = writable<ConstraintAndId | null>(null);
	private _currentShapeStore = writable<ShapeI | undefined>(undefined);
	private _solutionStore = writable<Solution>(undefined);

	private _currentScaleStore = writable<number>(1);

	private _puzzleCreationTimestamp = writable<number>(Date.now());

	public commandHistoryStore = new CommandHistoryStore();

	/* -------------------------------------------------------------------------- */
	/* ----- Expose the subscribes of private stores ---------------------------- */

	public selectedElementIdStore = { subscribe: this._selectedElementIdStore.subscribe };
	public previousToolStore = { subscribe: this._previousToolStore.subscribe };
	public selectionStore = { subscribe: this._selectionStore.subscribe };

	public gridStore = { subscribe: this._gridStore.subscribe };
	public cellsStore = { subscribe: this._cellsStore.subscribe };
	public validDigitsStore = { subscribe: this._validDigitsStore.subscribe };
	public puzzleMetaStore = { subscribe: this._puzzleMetaStore.subscribe };
	public elementsDictStore = { subscribe: this._elementsDictStore.subscribe };

	public penToolStore = { subscribe: this._penToolStore.subscribe };
	public penColorStore = { subscribe: this._penColorStore.subscribe };

	public currentConstraintStore = { subscribe: this._currentConstraintStore.subscribe };
	public currentShapeStore = { subscribe: this._currentShapeStore.subscribe };
	public solutionStore = { subscribe: this._solutionStore.subscribe };

	public currentScaleStore = { subscribe: this._currentScaleStore.subscribe };

	public puzzleCreationTimestamp = { subscribe: this._puzzleCreationTimestamp.subscribe };

	/* -------------------------------------------------------------------------- */
	/* ----- Derived Stores ----------------------------------------------------- */

	public hasFogStore = derived(this._elementsDictStore, ($elementsDictStore) => {
		for (const element of $elementsDictStore.values()) {
			const tool_id = element.tool_id;
			if (tool_id === TOOLS.FOG_LIGHTS || tool_id === TOOLS.CUSTOM_FOG_CLEARING) return true;
		}
		return false;
	});

	public defaultBoundingBoxStore = derived(
		[this.elementsDictStore, this.toolStore, this.gridStore],
		([$elementsDictStore, $toolStore, $gridStore]) => {
			return getDefaultBoundingBox($gridStore, $elementsDictStore, $toolStore);
		}
	);

	public boundingBoxStore = writable<Rectangle>(get(this.defaultBoundingBoxStore));

	public puzzleStore = derived(
		[
			this._gridStore,
			this._puzzleMetaStore,
			this._elementsDictStore,
			this._solutionStore,
			this._validDigitsStore
		],
		([$gridStore, $puzzleMetaStore, $localConstraintsStore, $solutionStore, $validDigitsStore]) => {
			const puzzle: PuzzleI = {
				grid: $gridStore,
				solution: $solutionStore,
				puzzleMeta: $puzzleMetaStore,
				valid_digits: $validDigitsStore,
				elementsDict: $localConstraintsStore
			};
			return puzzle;
		}
	);

	/**
	 * Get a derived store for the constraints of a specific tool.
	 * @param tool_id
	 * @returns
	 */
	private getToolStore<T extends ConstraintType>(tool_id: TOOLID): Readable<Record<string, T>> {
		const store = derived(stateStore.elementsDictStore, ($elementsDictStore) => {
			for (const element of $elementsDictStore.values()) {
				if (tool_id !== element.tool_id) continue;
				const record = element.constraints as Record<string, T>;
				return record;
			}
			const record: Record<string, T> = {};
			return record;
		});
		return store;
	}

	/**
	 * Returns a store of elements filtered by the provided function and derived from the elementsDictStore.
	 * Used to create stores for different types of tools.
	 * @param filter_f
	 * @returns
	 */
	private getDerivedElementsStore(
		filter_f: (tool: TOOLID) => boolean
	): Readable<ConstraintsElement[]> {
		const store = derived(this._elementsDictStore, ($elementsDictStore) => {
			const elements = filterElements($elementsDictStore, filter_f);
			return elements;
		});
		return store;
	}

	public underlayElementsStore = this.getDerivedElementsStore(isUnderlayTool);

	public edgeToolsStore = this.getDerivedElementsStore(isEdgeTool);
	public centerCornerOrEdgeToolsStore = this.getDerivedElementsStore(isCenterEdgeCornerTool);
	public cornerToolsStore = this.getDerivedElementsStore(isCornerTool);
	public cornerLineToolsStore = this.getDerivedElementsStore(isCornerLineTool);
	public diagonalElementsStore = this.getDerivedElementsStore(isDiagonalConstraint);
	public singleCellToolsStore = this.getDerivedElementsStore(isSingleCellTool);

	public fogLightsStore = derived(this.singleCellToolsStore, ($singleCellToolsStore) => {
		const target_element = $singleCellToolsStore.find(
			(element) => element.tool_id === TOOLS.FOG_LIGHTS
		);
		return target_element;
	});

	public customFogClearingStore = derived(this.elementsDictStore, ($elementsDictStore) => {
		for (const element of $elementsDictStore.values()) {
			if (element.tool_id === TOOLS.CUSTOM_FOG_CLEARING) return element;
		}
		return undefined;
	});

	public minimumConstraintsStore = derived(this.singleCellToolsStore, ($singleCellToolsStore) => {
		const target_element = $singleCellToolsStore.find(
			(element) => element.tool_id === TOOLS.MINIMUM
		);
		if (target_element?.constraints) {
			const record = target_element.constraints as Record<string, SingleCellTool>;
			return record;
		}
		const record: Record<string, SingleCellTool> = {};
		return record;
	});

	public maximumConstraintsStore = derived(this.singleCellToolsStore, ($singleCellToolsStore) => {
		const target_element = $singleCellToolsStore.find(
			(element) => element.tool_id === TOOLS.MAXIMUM
		);
		if (target_element?.constraints) {
			const record = target_element.constraints as Record<string, SingleCellTool>;
			return record;
		}
		const record: Record<string, SingleCellTool> = {};
		return record;
	});

	private currentElementStore: Readable<ConstraintsElement | undefined> = derived(
		[this._elementsDictStore, this._selectedElementIdStore],
		([$elementsDictStore, $selectedElementIdStore]) => {
			const selected_id = $selectedElementIdStore;
			if (selected_id === null) return undefined;
			const element = $elementsDictStore.get(selected_id);
			return element;
		}
	);

	/* -------------------------------------------------------------------------- */
	/* ----- Store getters ------------------------------------------------------ */

	getCurrentTool() {
		return get(this.toolStore);
	}

	getSelectOn() {
		return get(this.selectOnStore);
	}

	getGrid() {
		return get(this._gridStore);
	}

	getCurrentElementsDict() {
		return get(this._elementsDictStore);
	}

	getCurrentSolution() {
		return get(this._solutionStore);
	}

	getCurrentPuzzleMeta() {
		return get(this._puzzleMetaStore);
	}

	getCurrentValidDigits() {
		return get(this._validDigitsStore);
	}

	getPenTool() {
		return get(this._penToolStore);
	}

	getCurrentPenColor() {
		return get(this._penColorStore);
	}

	getCurrentConstraint() {
		return get(this._currentConstraintStore);
	}

	getCurrentShape() {
		return get(this._currentShapeStore);
	}

	getCurrentToolMode() {
		return get(this.toolModeStore);
	}

	getCurrentScale() {
		return get(this._currentScaleStore);
	}

	getSelectedElementId() {
		return get(this._selectedElementIdStore);
	}

	getElementsDict() {
		return get(this._elementsDictStore);
	}

	getSelection() {
		return get(this._selectionStore);
	}

	getDefaultBoundingBox() {
		return get(this.defaultBoundingBoxStore);
	}

	getBoundingBox() {
		return get(this.boundingBoxStore);
	}

	getPuzzle() {
		return get(this.puzzleStore);
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Timestamp methods -------------------------------------------------- */

	setSvgRefStore(ref: SVGSVGElement | null) {
		this.svgRefStore.set(ref);
	}

	updateCreationTimestamp() {
		this._puzzleCreationTimestamp.set(Date.now());
	}

	setCreationTimestamp(timestamp: number) {
		this._puzzleCreationTimestamp.set(timestamp);
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Puzzle methods ----------------------------------------------------- */

	setGrid(grid: Grid) {
		this._gridStore.set(grid);
	}

	setValidDigits(values: number[]) {
		this._validDigitsStore.set(values);
	}

	setElementsDictStore(elements: ElementsDict) {
		this._elementsDictStore.set(elements);
	}

	setSolution(solution: Solution) {
		this._solutionStore.set(solution);
	}

	setSolutionFromGridValues() {
		const grid = get(this._gridStore);
		const solution: Solution = [];
		for (let i = 0; i < grid.nRows; i++) {
			const line: Array<number | null> = [];
			for (let j = 0; j < grid.nCols; j++) {
				const cell = grid.getCell(i, j);
				if (!cell) continue;
				const val = cell.value;
				line.push(val);
			}
			solution.push(line);
		}
		this.setSolution(solution);
	}

	setPuzzleMeta(meta: PuzzleMetaI) {
		this._puzzleMetaStore.set(meta);
	}

	setPuzzle(puzzle: PuzzleI) {
		this.setGrid(puzzle.grid);
		this.setPuzzleMeta(puzzle.puzzleMeta);
		this.setSolution(puzzle.solution);
		this.setValidDigits(puzzle.valid_digits);
		this.setElementsDictStore(puzzle.elementsDict);

		this._cellsStore.set(puzzle.grid.getAllCells());
	}

	newBlankPuzzle(nRows: number, nCols: number, valid_digits: number[]) {
		this.updateCreationTimestamp();

		const blank_puzzle = blankPuzzle(nRows, nCols, valid_digits);
		this.setPuzzle(blank_puzzle);
	}

	resetPuzzle() {
		this._gridStore.update((grid) => {
			grid.resetValues();
			this._cellsStore.set(grid.getAllCells());
			return grid;
		});
		this.updatePenTool(resetPenAction());
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Constraints methods ------------------------------------------------ */

	setTool(tool: TOOLID) {
		this.toolStore.set(tool);
	}

	setPreviousToolStore(tool: TOOLID): void {
		this._previousToolStore.set(tool);
	}

	setCurrentConstraint(constraintId: ConstraintAndId | null) {
		this._currentConstraintStore.set(constraintId);
	}

	setSelectedElementIdStore(element_id: number | null) {
		this._selectedElementIdStore.set(element_id);
	}

	setCurrentShape(shape: ShapeI | undefined) {
		this._currentShapeStore.set(shape);
	}

	selectConstraint(element_id: number, c_id: string) {
		const elementsDict = get(this._elementsDictStore);
		const element = elementsDict.get(element_id);
		if (!element || !element.constraints) return;

		const constraint = element.constraints[c_id];
		if (!constraint) return;
		this.setCurrentConstraint({ id: c_id, constraint });
	}

	updateToolAndCurrentConstraintStores(tool: TOOLID, element_id: number | null): void {
		const currTool = get(this.toolStore);
		const currElementId = get(this._selectedElementIdStore);
		if (currElementId === element_id && tool === currTool) return;

		this.setTool(tool);
		this.setCurrentConstraint(null);

		if (element_id === currElementId) return;
		this.setSelectedElementIdStore(element_id);
	}

	restoreToolStoreOnQuickshift(): void {
		const prevTool = get(this._previousToolStore);
		if (!prevTool) return;
		this.updateToolAndCurrentConstraintStores(prevTool, null);
	}

	updateToolOnRemoveGroup(toolId: TOOLID) {
		// if tool is the same as current tool, set current tool to digit
		const currTool = get(this.toolStore);

		if (currTool === toolId) {
			this.updateToolAndCurrentConstraintStores(TOOLS.DIGIT, null);
		}
	}

	addGroupToElementsDict(element: ConstraintsElement): number {
		const elements_dict = this.getElementsDict();
		const element_id = elements_dict.addElementToDict(element);

		this._elementsDictStore.update(() => {
			return elements_dict;
		});

		return element_id;
	}

	/**
	 * Removes a constraint group from the local constraints dictionary.
	 * For example, it removes all Renban constraints
	 * @param element_id
	 */
	removeGroupFromElementsDict(element_id: number) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.removeFromDict(element_id);
			return elementsDict;
		});

		this.setCurrentShape(undefined);
	}

	restoreElement(element_id: number, element: ConstraintsElement) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.setElement(element_id, element);
			return elementsDict;
		});
	}

	enableDisableElement(element_id: number, value: boolean) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.enableDisableElement(element_id, value);
			return elementsDict;
		});
	}

	moveElementUp(element_id: number) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.moveElementUp(element_id);
			return elementsDict;
		});
	}

	moveElementDown(element_id: number) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.moveElementDown(element_id);
			return elementsDict;
		});
	}

	/**
	 * Updates an existing local constraint (or cosmetic)
	 * @param element_id
	 * @param id
	 * @param newConstraint
	 */
	updateConstraint<T extends ConstraintType>(element_id: number, id: string, newConstraint: T) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.updateConstraint(element_id, id, newConstraint);
			return elementsDict;
		});
		this.setCurrentConstraint({ id, constraint: newConstraint });
	}

	addConstraint(element_id: number, id: string, constraint: ConstraintType) {
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.addConstraint(element_id, id, constraint);
			return elementsDict;
		});
		this.setCurrentConstraint({ id, constraint });
	}

	setShapeAndAddConstraint(element_id: number, id: string, constraint: ConstraintType) {
		const currentShape = get(this._currentShapeStore);
		if (currentShape) {
			constraint.shape = { ...currentShape };
		}

		this.addConstraint(element_id, id, constraint);
	}

	/**
	 * Removes a single constraint from the constraint dictionary
	 * @param element_id
	 * @param id
	 * @returns
	 */
	removeConstraint(element_id: number, id: string | null) {
		if (!id) return;
		this._elementsDictStore.update((elementsDict) => {
			elementsDict.removeConstraint(element_id, id);
			return elementsDict;
		});
	}

	updateElementAction(action: ElementAction): void {
		if (action.type === ELEMENT_ACTIONS.ADD_CONSTRAINT) {
			this.addConstraint(
				action.payload.element_id,
				action.payload.id,
				action.payload.constraint
			);
		} else if (action.type === ELEMENT_ACTIONS.REMOVE_CONSTRAINT) {
			this.removeConstraint(action.payload.element_id, action.payload.c_id);
		} else if (action.type === ELEMENT_ACTIONS.ADD_ELEMENT) {
			this.addGroupToElementsDict(action.payload.element);
		} else if (action.type === ELEMENT_ACTIONS.REMOVE_ELEMENT) {
			this.removeGroupFromElementsDict(action.payload.element_id);
		} else if (action.type === ELEMENT_ACTIONS.RESTORE_ELEMENT) {
			this.restoreElement(action.payload.element_id, action.payload.element);
		} else if (action.type === ELEMENT_ACTIONS.UPDATE_LOCAL_CONSTRAINT) {
			this.updateConstraint(
				action.payload.element_id,
				action.payload.constraintId,
				action.payload.constraint
			);
		} else if (action.type === ELEMENT_ACTIONS.ENABLE_DISABLE_ELEMENT) {
			this.enableDisableElement(action.payload.element_id, action.payload.value);
		} else if (action.type === ELEMENT_ACTIONS.MOVE_ELEMENT_UP) {
			this.moveElementUp(action.payload.element_id);
		} else if (action.type === ELEMENT_ACTIONS.MOVE_ELEMENT_DOWN) {
			this.moveElementDown(action.payload.element_id);
		}
	}

	getUpdateElementCommand(action: ElementAction, reverse_action: ElementAction): CommandI {
		const command = createCommand(
			() => this.updateElementAction(action),
			() => this.updateElementAction(reverse_action)
		);

		return command;
	}

	updateCurrentConstraintShape(newShape: ShapeI | undefined) {
		const currentConstraint = get(this._currentConstraintStore);
		newShape = newShape ? { ...newShape } : undefined;

		this.setCurrentShape(newShape);
		if (!currentConstraint) return;

		const element_id = get(this._selectedElementIdStore);
		if (element_id === null) return;
		const newConstraint = { ...currentConstraint.constraint, shape: newShape };
		this.updateConstraint(element_id, currentConstraint.id, newConstraint);
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Pen Tool methods --------------------------------------------------- */

	setPenColor(colorId: number) {
		this._penColorStore.set(colorId);
	}

	updatePenTool(action: PenToolAction): void {
		this._penToolStore.update((penToolState) => {
			return reducerPenTool(penToolState, action);
		});
	}

	getPenToolCommand(action: PenToolAction, reverse_action: PenToolAction): CommandI {
		const command = createCommand(
			() => this.updatePenTool(action),
			() => this.updatePenTool(reverse_action)
		);

		return command;
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Cells store methods ------------------------------------------------ */

	private updateCells(cells: Cell[], tool: TOOLID, value: number | null, clear: boolean) {
		cells.forEach((cell) => {
			cell.enterCell(value, tool, clear);
		});

		this._cellsStore.update((_cells) => {
			return _cells;
		});
	}

	executeUpdateCellsAction(action: UpdateCellsAction) {
		switch (action.type) {
			case UPDATE_CELLS_ACTIONS.SET_CELLS_VALUE: {
				const cells = action.payload.cells;
				const value = action.payload.value;
				this.updateCells(cells, TOOLS.DIGIT, value, true);
				break;
			}
			case UPDATE_CELLS_ACTIONS.SET_GIVENS: {
				const cells = action.payload.cells;
				const value = action.payload.value;
				this.updateCells(cells, TOOLS.GIVEN, value, true);
				break;
			}
			case UPDATE_CELLS_ACTIONS.SET_REGIONS: {
				const cells = action.payload.cells;
				const value = action.payload.value;
				this.updateCells(cells, TOOLS.REGIONS, value, true);
				break;
			}
			case UPDATE_CELLS_ACTIONS.SET_HIGHLIGHTS: {
				const cells = action.payload.cells;
				const value = action.payload.value;
				this.updateCells(cells, TOOLS.HIGHLIGHTS, value, true);
				break;
			}
			case UPDATE_CELLS_ACTIONS.SET_PENCILMARKS: {
				const cells = action.payload.cells;
				const value = action.payload.value;
				const tool = action.payload.tool;
				this.updateCells(cells, tool, value, true);
				break;
			}
			case UPDATE_CELLS_ACTIONS.RESTORE_CELLS_VALUES: {
				const cells = action.payload.cells;
				const values = action.payload.values;
				for (let i = 0; i < cells.length; i++) {
					cells[i].value = values[i];
				}
				this._cellsStore.update((_cells) => {
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
				this._cellsStore.update((_cells) => {
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
				this._cellsStore.update((_cells) => {
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
				this._cellsStore.update((_cells) => {
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
				this._cellsStore.update((_cells) => {
					return _cells;
				});
				break;
			}
		}
	}

	getUpdateCellsCommand(action: UpdateCellsAction, reverse_action: UpdateCellsAction): CommandI {
		const command = createCommand(
			() => this.executeUpdateCellsAction(action),
			() => this.executeUpdateCellsAction(reverse_action)
		);

		return command;
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Tool Preview Stores ------------------------------------------------ */

	simpleCellToolPreviewStore = writable<undefined | ToolPreview<CellToolI>>(undefined);
	singleCellArrowPreviewStore = writable<undefined | ToolPreview<CellArrowToolI>>(undefined);
	singleCellMultiArrowPreviewStore = writable<undefined | CellMultiArrowToolI>(undefined);
	edgeToolPreviewStore = writable<undefined | ToolPreview<EdgeToolI>>(undefined);
	cornerToolPreviewStore = writable<undefined | ToolPreview<CornerToolI>>(undefined);
	outsideDirectionToolPreviewStore = writable<undefined | ToolPreview<OutsideDirectionToolI>>(
		undefined
	);
	centerCornerOrEdgeToolPreviewStore = writable<undefined | ToolPreview<CenterCornerOrEdgeToolI>>(
		undefined
	);

	/* -------------------------------------------------------------------------- */
	/* ----- Zoom methods ------------------------------------------------------- */

	setScale(val: number) {
		this._currentScaleStore.set(val);
	}

	setBbox(bbox: Rectangle) {
		this.boundingBoxStore.set(bbox);
	}

	restoreBboxToDefault() {
		this.setBbox(get(this.defaultBoundingBoxStore));
	}

	resetZoom() {
		this.setScale(1);
		this.restoreBboxToDefault();
	}

	/* -------------------------------------------------------------------------- */
	/* ----- Selection methods -------------------------------------------------- */

	updateSelection(action: SelectionAction): void {
		if (!action) return;

		this._selectionStore.update((selectionState) => {
			return reducerSelection(selectionState, action);
		});
	}

	getUpdateSelectionCommand(action: SelectionAction, reverse_action: SelectionAction): CommandI {
		const command: CommandI = {
			execute: () => {
				this.updateSelection(action);
			},
			unExecute: () => {
				this.updateSelection(reverse_action);
			}
		};
		return command;
	}

	resetUserState() {
		// commandHistoryStore.clear();
		this.resetZoom();
		this.updatePenTool(resetPenAction());
		this.updateToolAndCurrentConstraintStores(TOOLS.DIGIT, null);

		const resetSelectionAction = selectionClearAction();
		this.updateSelection(resetSelectionAction);

		this.setCurrentShape(undefined);
		this.setCurrentConstraint(null);
	}

	puzzleUrlStore = derived(
		this.puzzleStore,
		debounce(($puzzleStore) => {
			const compressedStr = puzzleToCompressedStr($puzzleStore);
			updateUrlParams(compressedStr);
			return compressedStr;
		}, 500)
	);
}

export const stateStore = new StateStore();
