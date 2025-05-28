import type { SquareCellElementInfo } from '../Puzzle/ElementInfo';
import { squareCellElementHandlers } from '../Puzzle/ElementsInfo/SquareCellElementHandlers';
import { lineElement } from './line_constraints';
import { singleCellElements } from './single_cell_constraints';
import { addHeader, PuzzleModel, type ElementF } from './solver_utils';

export function elementConstraintsFromElementHandlers(
	model: PuzzleModel,
	element_handlers: Record<string, SquareCellElementInfo>
) {
	let out_str = '';
	const puzzle = model.puzzle;
	const elements_map = puzzle.elementsDict;

	for (const [tool_id, element] of elements_map.entries()) {
		if (element.disabled) continue;

		const element_info = element_handlers[tool_id];
		const solver_func = element_info.solver_func;
		if (!solver_func) continue;

		let element_solver_str: string = solver_func(model, element);
		element_solver_str = addHeader(element_solver_str, `${tool_id}`);
		out_str += element_solver_str;
	}

	return out_str;
}

const functions_list: ElementF[] = [
	// undeterminedRegionsElements,
	// centerCornerOrEdgeElements,
	singleCellElements,
	// singleCellArrowElements,
	// singleCellMultiArrowElements,
	// edgeElements,
	// cornerElements,
	lineElement,
	// arrowElements,
	// cageElements,
	// outsideDirectionElements,
	// cloneElements,
	// valuedGlobalElements,
	// otherElements,
	// globalConstraints
];

export function elementConstraints(model: PuzzleModel): string {
	let out_str = '';
	const puzzle = model.puzzle;
	const elements = puzzle.elementsDict;

	for (const [tool_id, element] of elements.entries()) {
		if (element.disabled) continue;

		for (const constraintF of functions_list) {
			let constraint_str: string = constraintF(model, element);
			constraint_str = addHeader(constraint_str, `${tool_id}`);
			out_str += constraint_str;
		}
	}

	out_str += elementConstraintsFromElementHandlers(model, squareCellElementHandlers);

	return out_str;
}
