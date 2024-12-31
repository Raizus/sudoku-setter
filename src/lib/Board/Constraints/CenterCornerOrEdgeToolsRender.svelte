<script lang="ts">
	import { centerCornerOrEdgeToolsStore } from '$stores/ElementsStore';
	import CenterCornerOrEdgeToolRender from './CenterCornerOrEdgeToolRender.svelte';

	$: elements = $centerCornerOrEdgeToolsStore;
</script>

<g class="edge-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<CenterCornerOrEdgeToolRender centerCornerOrEdgeTool={entry[1]} />
			{/each}
		</g>
	{/each}
</g>
