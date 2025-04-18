<script lang="ts" generics="T extends ConstraintType">
	import type { ConstraintType } from '$src/lib/Puzzle/Constraints/LocalConstraints';
	import { type Elements } from '$stores/ElementsStore';

	export let elements: Elements<T>[];
    export let g_name: string;
    export let Component;
</script>

<g class={g_name} mask="url(#fog-mask-fog)">
	{#each elements as { toolId, element }}
		<g class="element-group" data-toolId={toolId}>
			{#each Object.entries(element) as entry (entry[0])}
				<Component tool={entry[1]} c_id={entry[0]}/>
			{/each}
		</g>
	{/each}
</g>
