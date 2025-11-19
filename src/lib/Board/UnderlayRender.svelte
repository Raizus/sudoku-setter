<script lang="ts">
	import { underlayElementsStore } from '$stores/ElementsStore';
	import {
		isArrowTool,
		isCageTool,
		isCloneTool,
		isLineTool,
		isOutsideDirectionTool,
		isSingleCellTool,
		type TOOLID
	} from '../Puzzle/Tools';
	import SingleCellToolRender from './Constraints/SingleCellToolRender.svelte';
	import LineToolRender from './Constraints/LineToolRender.svelte';
	import ArrowToolRender from './Constraints/ArrowToolRender.svelte';
	import CageToolRender from './Constraints/CageToolRender.svelte';
	import CloneToolRender from './Constraints/CloneToolRender.svelte';
	import OutsideDirectionToolRender from './Constraints/OutsideDirectionToolRender.svelte';
	import { enableFogMaskStore } from '$stores/BoardStore';

	const toolRenderers = [
		{ check: isSingleCellTool, component: SingleCellToolRender },
		{ check: isLineTool, component: LineToolRender },
		{ check: isArrowTool, component: ArrowToolRender },
		{ check: isCageTool, component: CageToolRender },
		{ check: isCloneTool, component: CloneToolRender },
		{ check: isOutsideDirectionTool, component: OutsideDirectionToolRender }
	];

	function getToolRenderer(toolId: TOOLID) {
		return toolRenderers.find((renderer) => renderer.check(toolId))?.component;
	}

	$: underlay_elements = $underlayElementsStore;
	$: enable_fog_mask = $enableFogMaskStore;
</script>

<g class="underlay-layer" mask={enable_fog_mask ? 'url(#fog-mask-fog)' : null}>
	{#each underlay_elements as element}
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
