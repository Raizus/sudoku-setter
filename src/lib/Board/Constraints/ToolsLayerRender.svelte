<script lang="ts">
	import type { ConstraintsElement } from '$src/lib/Puzzle/Constraints/LocalConstraints';

	export let elements: ConstraintsElement[];
	export let g_name: string;
	export let Component;
</script>

<g class={g_name} mask="url(#fog-mask-fog)">
	{#each elements as element}
		{#if element.constraints}
			<g class="element-group" data-toolId={element.tool_id}>
				{#each Object.entries(element.constraints) as entry (entry[0])}
					<Component tool={entry[1]} c_id={entry[0]} />
				{/each}
			</g>
		{/if}
	{/each}
</g>
