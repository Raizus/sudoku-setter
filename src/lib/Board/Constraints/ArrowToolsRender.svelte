<script lang="ts">
	import type { Rectangle } from '$lib/Types/types';
	import { arrowToolsStore } from '$stores/ElementsStore';
	import ArrowToolRender from './ArrowToolRender.svelte';

	export let boundingBox: Rectangle;
	$: elements = $arrowToolsStore;
</script>

<g class="arrow-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<ArrowToolRender arrowId={entry[0]} tool={entry[1]} {boundingBox} />
			{/each}
		</g>
	{/each}
</g>
