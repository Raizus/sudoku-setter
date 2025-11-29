<script lang="ts">
	import {
		isCenterEdgeCornerTool,
		isCornerLineTool,
		isCornerTool,
		isEdgeTool,
		type TOOLID
	} from '../Puzzle/Tools';
	import { enableFogMaskStore } from '$stores/BoardStore';
	import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
	import CenterCornerOrEdgeToolRender from './Constraints/CenterCornerOrEdgeToolRender.svelte';
	import CornerToolRender from './Constraints/CornerToolRender.svelte';
	import EdgeToolRender from './Constraints/EdgeToolRender.svelte';
	import CornerLineToolRender from './Constraints/CornerLineToolRender.svelte';

	export let overlay_elements: ConstraintsElement[];
	export let enable_fog_mask: boolean;

	const toolRenderers = [
		{ check: isCenterEdgeCornerTool, component: CenterCornerOrEdgeToolRender },
		{ check: isCornerTool, component: CornerToolRender },
		{ check: isEdgeTool, component: EdgeToolRender },
		{ check: isCornerLineTool, component: CornerLineToolRender }
	];

	function getToolRenderer(toolId: TOOLID) {
		return toolRenderers.find((renderer) => renderer.check(toolId))?.component;
	}
</script>

<g class="overlay-layer" mask={enable_fog_mask ? 'url(#fog-mask-fog)' : null}>
	{#each overlay_elements as element}
		{#if !element.disabled && element.constraints}
			{@const ToolComponent = getToolRenderer(element.tool_id)}
			<g class="element-group" data-toolId={element.tool_id}>
				{#if ToolComponent}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<svelte:component this={ToolComponent} tool={entry[1] as any} c_id={entry[0]} />
					{/each}
				{/if}
			</g>
		{/if}
	{/each}
</g>
