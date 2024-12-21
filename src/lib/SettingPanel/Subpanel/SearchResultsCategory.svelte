<script lang="ts">
	import CollapsibleDiv from '$lib/Components/CollapsibleDiv.svelte';
	import ModalSectionHeader from '$lib/Components/Modal/ModalSectionHeader.svelte';
	import type { AbstractElementInfo } from '$lib/Puzzle/ElementInfo';
	import type { TOOL_CATEGORIES, TOOLID } from '$lib/Puzzle/Tools';

	export let category: TOOL_CATEGORIES;
	export let addTool: (key: TOOLID) => void;
	export let searchResults: {
		key: TOOLID;
		info: AbstractElementInfo;
	}[];

	let isOpen = true;
	$: filtered = searchResults.filter((result) => result.info.meta?.categories?.includes(category));
</script>

{#if filtered.length}
	<ModalSectionHeader title={category} bind:isOpen isCollapsible={true}/>
	<CollapsibleDiv {isOpen}>
		<ol>
			{#each filtered as { key, info }}
				<li>
					<button
						class="constraint-select"
						title={info.meta?.description}
						on:click={() => {
							addTool(key);
						}}>{key}</button
					>
				</li>
			{/each}
		</ol>
	</CollapsibleDiv>
{/if}

<style lang="scss">
	ol {
		padding: 0;
		margin: 0;
		list-style-type: none;
		width: 100%;
	}

	li {
		list-style-type: none;
		margin: 0.25em 0;
	}

	.constraint-select {
		background-color: var(--modal-background-color);
		border-radius: 0.25rem;
		border: 1px solid var(--button-background-color);
		text-align: start;
		width: 100%;
		padding: 0.25em;
		cursor: pointer;

		&:hover {
			background-color: var(--button2-hover-background-color);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}
</style>
