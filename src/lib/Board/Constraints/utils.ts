import type { ConstraintAndId } from "$src/lib/Puzzle/puzzle_schema";
import { getContext } from "svelte";
import { readable, type Readable } from "svelte/store";

export function getOutlineFilterUrl(outline: boolean, is_selected: boolean) {
	const filter_url =
		outline && is_selected
			? 'url(#filter-both)'
			: outline
				? 'url(#filter-bg-only)'
				: is_selected
					? 'url(#filter-sel-only)'
					: null;

	return filter_url;
}

export function getCurrentConstraintStore(): Readable<ConstraintAndId | null> {
	const currentConstraintStore =
		getContext<Readable<ConstraintAndId | null>>('currentConstraint') ?? readable(null);
	return currentConstraintStore;
}