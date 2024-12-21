<script lang="ts">
	import { cloneToolsStore } from '$stores/ElementsStore';
	import CloneToolRender from './CloneToolRender.svelte';

	$: elements = $cloneToolsStore;
</script>

<g class="clone-tools-layer" mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class={`element-group ${toolId}`}>
			{#each Object.entries(element) as entry (entry[0])}
				<CloneToolRender cloneTool={entry[1]} />
			{/each}
		</g>
	{/each}
</g>
