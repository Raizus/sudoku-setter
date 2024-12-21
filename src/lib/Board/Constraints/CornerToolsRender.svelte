<script lang="ts">
	import { cornerToolsStore } from '$stores/ElementsStore';
	import CornerToolRender from './CornerToolRender.svelte';

	$: elements = $cornerToolsStore;
</script>

<g class="corner-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<CornerToolRender cornerTool={entry[1]} />
			{/each}
		</g>
	{/each}
</g>
