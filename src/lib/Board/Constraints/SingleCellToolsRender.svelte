<script lang="ts">
	import { singleCellToolsStore } from '$stores/ElementsStore';
	import SingleCellArrowRender from './SingleCellArrowRender.svelte';
	import SingleCellMultiArrowRender from './SingleCellMultiArrowRender.svelte';
	import SingleCellToolRender from './SingleCellToolRender.svelte';

	$: elements = $singleCellToolsStore;
</script>

<g class="single-cell-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				{#if entry[1].type === 'ARROW'}
					<SingleCellArrowRender tool={entry[1]} id={entry[0]} />
				{:else if entry[1].type === 'MULTIARROW'}
					<SingleCellMultiArrowRender tool={entry[1]} id={entry[0]} />
				{:else if entry[1].type === 'SIMPLE'}
					<SingleCellToolRender tool={entry[1]} id={entry[0]} />
				{/if}
			{/each}
		</g>
	{/each}
</g>
