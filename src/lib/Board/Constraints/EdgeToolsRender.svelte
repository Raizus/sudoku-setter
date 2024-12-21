<script lang="ts">
	import { edgeToolsStore } from '$stores/ElementsStore';
	import EdgeToolRender from './EdgeToolRender.svelte';

	$: elements = $edgeToolsStore;
</script>

<g class="edge-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<EdgeToolRender edgeTool={entry[1]} />
			{/each}
		</g>
	{/each}
</g>
