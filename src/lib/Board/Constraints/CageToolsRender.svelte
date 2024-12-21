<script lang="ts">
	import { cageToolsStore } from '$stores/ElementsStore';
	import CageToolRender from './CageToolRender.svelte';

	$: elements = $cageToolsStore;
</script>

<g class="cage-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<CageToolRender cageTool={entry[1]} />
			{/each}
		</g>
	{/each}
</g>
