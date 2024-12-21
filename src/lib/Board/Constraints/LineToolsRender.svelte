<script lang="ts">
	import { lineToolsStore } from '$stores/ElementsStore';
	import LineToolRender from './LineToolRender.svelte';

	$: elements = $lineToolsStore;
</script>

<g class="line-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<LineToolRender lineTool={entry[1]} />
			{/each}
		</g>
	{/each}
</g>
