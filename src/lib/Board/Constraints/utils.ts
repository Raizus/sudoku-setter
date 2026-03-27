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
