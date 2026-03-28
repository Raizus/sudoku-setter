<script lang="ts">
	import type { ConstraintsElement } from '$src/lib/Puzzle/puzzle_schema';
	import type { CellToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
	import { enableFogMaskStore } from '$stores/BoardStore';
	import SingleFogLightConstraintRender from './SingleFogLightConstraintRender.svelte';

	export let element: ConstraintsElement | undefined;
	export let tool: TOOLID;

	$: show_lights = !$enableFogMaskStore;
	$: constraints = element?.constraints as Record<string, CellToolI>;
</script>

{#if show_lights && !element?.disabled && constraints}
	<g class="fog-lights-layer" class:inactive={tool !== TOOLS.FOG_LIGHTS}>
		{#each Object.entries(constraints) as entry (entry[0])}
			<SingleFogLightConstraintRender tool={entry[1]} c_id={entry[0]} />
		{/each}
	</g>
{/if}

<style>
	g.inactive {
		opacity: 0.5;
	}
</style>
