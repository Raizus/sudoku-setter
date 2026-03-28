<script lang="ts">
	import {
		isArrowTool,
		isCageTool,
		isCloneTool,
		isLineTool,
		isOutsideDirectionTool,
		isSingleCellTool,
		type TOOLID
	} from '../Puzzle/Tools';
	import SingleCellConstraintRender from './Constraints/SingleCellConstraintRender.svelte';
	import LineConstraintGroupRender from './Constraints/LineConstraintGroupRender.svelte';
	import ArrowConstraintGroupRender from './Constraints/ArrowConstraintGroupRender.svelte';
	import CageConstraintGroupRender from './Constraints/CageConstraintGroupRender.svelte';
	import CloneConstraintGroupRender from './Constraints/CloneConstraintGroupRender.svelte';
	import OutsideDirectionConstraintGroupRender from './Constraints/OutsideDirectionConstraintGroupRender.svelte';
	import type { ConstraintsElement } from '../Puzzle/puzzle_schema';

	export let underlay_elements: ConstraintsElement[];
	export let enable_fog_mask: boolean;

	const toolRenderers = [
		{ check: isSingleCellTool, component: SingleCellConstraintRender },
		{ check: isLineTool, component: LineConstraintGroupRender },
		{ check: isArrowTool, component: ArrowConstraintGroupRender },
		{ check: isCageTool, component: CageConstraintGroupRender },
		{ check: isCloneTool, component: CloneConstraintGroupRender },
		{ check: isOutsideDirectionTool, component: OutsideDirectionConstraintGroupRender }
	];

	function getToolRenderer(toolId: TOOLID) {
		return toolRenderers.find((renderer) => renderer.check(toolId))?.component;
	}
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
