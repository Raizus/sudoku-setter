<script lang="ts">
	import type { CellToolI } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';
	import { TOOLS } from '$src/lib/Puzzle/Tools';
	import { enableFogMaskStore, toolStore } from '$stores/BoardStore';
	import SingleFogLightRender from './SingleFogLightRender.svelte';

	export let element: Record<string, CellToolI>;

	$: tool_id = $toolStore;
	$: show_lights = !$enableFogMaskStore;
</script>

{#if show_lights}
	<g class="fog-lights-layer" class:inactive={tool_id !== TOOLS.FOG_LIGHTS}>
		{#each Object.entries(element) as entry (entry[0])}
			<SingleFogLightRender tool={entry[1]} c_id={entry[0]} />
		{/each}
	</g>
{/if}

<style>
	g.inactive {
		opacity: 0.5;
	}
</style>
