<script lang="ts">
	import { searchElements, type ElementFilterFunc, type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import type { TOOLID, TOOL_CATEGORIES } from '$lib/Puzzle/Tools';
	import SearchResultsCategory from './SearchResultsCategory.svelte';

	export let searchPattern = '';
	export let addTool: (key: TOOLID) => void;
    export let categories: TOOL_CATEGORIES[];
    export let filterFunc: ElementFilterFunc;
	export let elementHandlers: AbstractElementHandlers;

	$: searchResults = searchElements(searchPattern, filterFunc, elementHandlers);
</script>

{#each categories as category}
	<SearchResultsCategory {category} {searchResults} {addTool}/>
{/each}

<style>
</style>
