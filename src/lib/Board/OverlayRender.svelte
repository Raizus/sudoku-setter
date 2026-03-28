<script lang="ts">
	import {
		isCenterEdgeCornerTool,
		isCornerLineTool,
		isCornerTool,
		isEdgeTool,
		type TOOLID
	} from '../Puzzle/Tools';
	import type { ConstraintsElement } from '../Puzzle/puzzle_schema';
	import CenterCornerOrEdgeToolRender from './Constraints/CenterCornerOrEdgeToolGroupRender.svelte';
	import CornerConstraintGroupRender from './Constraints/CornerConstraintGroupRender.svelte';
	import EdgeConstraintGroupRender from './Constraints/EdgeConstraintGroupRender.svelte';
	import CornerLineConstraintGroupRender from './Constraints/CornerLineConstraintGroupRender.svelte';

	export let overlay_elements: ConstraintsElement[];
	export let enable_fog_mask: boolean;

	const toolRenderers = [
		{ check: isCenterEdgeCornerTool, component: CenterCornerOrEdgeToolRender },
		{ check: isCornerTool, component: CornerConstraintGroupRender },
		{ check: isEdgeTool, component: EdgeConstraintGroupRender },
		{ check: isCornerLineTool, component: CornerLineConstraintGroupRender }
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
