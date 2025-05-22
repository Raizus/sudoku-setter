<script lang="ts">
	import type { ConstraintsElement } from '$src/lib/Puzzle/Constraints/ElementsDict';
	import type { CellToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import { enableFogMaskStore, toolStore } from '$stores/BoardStore';
	import SingleFogLightRender from './SingleFogLightRender.svelte';

	export let element: ConstraintsElement | undefined;

	$: tool_id = $toolStore;
	$: show_lights = !$enableFogMaskStore;

	$: constraints = element?.constraints as Record<string, CellToolI>;
</script>

{#if show_lights && !element?.disabled && constraints}
	<g class="fog-lights-layer" class:inactive={tool_id !== TOOLS.FOG_LIGHTS}>
		{#each Object.entries(constraints) as entry (entry[0])}
			<SingleFogLightRender tool={entry[1]} c_id={entry[0]} />
		{/each}
	</g>
{/if}

<style>
	g.inactive {
		opacity: 0.5;
	}
</style>
