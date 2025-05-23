<script lang="ts">
		import type { ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';
	import { enableFogMaskStore } from '$stores/BoardStore';

	export let elements: ConstraintsElement[];
	export let g_name: string;
	export let Component;

	$: enable_fog_mask = $enableFogMaskStore;
</script>

<g class={g_name} mask={enable_fog_mask ? "url(#fog-mask-fog)" : null}>
	{#each elements as element}
		{#if !element.disabled && element.constraints}
			<g class="element-group" data-toolId={element.tool_id}>
				{#each Object.entries(element.constraints) as entry (entry[0])}
					<Component tool={entry[1]} c_id={entry[0]} />
				{/each}
			</g>
		{/if}
	{/each}
</g>
