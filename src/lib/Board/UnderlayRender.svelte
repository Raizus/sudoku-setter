<script lang="ts">
	import { underlayElementsStore } from '$stores/ElementsStore';
	import {
		isArrowTool,
		isCageTool,
		isCloneTool,
		isLineTool,
		isOutsideDirectionTool,
		isSingleCellTool
	} from '../Puzzle/Tools';
	import { type SingleCellTool } from '../Puzzle/Constraints/SingleCellConstraints';
	import { type LineToolI } from '../Puzzle/Constraints/LineConstraints';
	import { type ArrowToolI } from '../Puzzle/Constraints/ArrowConstraints';
	import { type CageToolI } from '../Puzzle/Constraints/CageConstraints';
	import { type CloneToolI } from '../Puzzle/Constraints/CloneConstraints';
	import { type OutsideDirectionToolI } from '../Puzzle/Constraints/OutsideDirectionConstraints';
	import SingleCellToolRender from './Constraints/SingleCellToolRender.svelte';
	import LineToolRender from './Constraints/LineToolRender.svelte';
	import ArrowToolRender from './Constraints/ArrowToolRender.svelte';
	import CageToolRender from './Constraints/CageToolRender.svelte';
	import CloneToolRender from './Constraints/CloneToolRender.svelte';
	import OutsideDirectionToolRender from './Constraints/OutsideDirectionToolRender.svelte';

	$: underlay_elements = $underlayElementsStore;
</script>

<g class="underlay-layer" mask="url(#fog-mask-fog)">
	{#each underlay_elements as element}
		{#if element.constraints}
			{#if isSingleCellTool(element.tool_id)}
				<g class="element-group" data-toolId={element.tool_id}>
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<SingleCellToolRender tool={entry[1] as SingleCellTool} c_id={entry[0]} />
					{/each}
				</g>
			{:else if isLineTool(element.tool_id)}
				<g class="element-group" data-toolId={element.tool_id}>
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<LineToolRender tool={entry[1] as LineToolI} c_id={entry[0]} />
					{/each}
				</g>
			{:else if isArrowTool(element.tool_id)}
				<g class="element-group" data-toolId={element.tool_id}>
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<ArrowToolRender tool={entry[1] as ArrowToolI} c_id={entry[0]} />
					{/each}
				</g>
			{:else if isCageTool(element.tool_id)}
				<g class="element-group" data-toolId={element.tool_id}>
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<CageToolRender tool={entry[1] as CageToolI} c_id={entry[0]} />
					{/each}
				</g>
			{:else if isCloneTool(element.tool_id)}
				<g class="element-group" data-toolId={element.tool_id}>
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<CloneToolRender tool={entry[1] as CloneToolI} c_id={entry[0]} />
					{/each}
				</g>
			{:else if isOutsideDirectionTool(element.tool_id)}
				<g class="element-group" data-toolId={element.tool_id}>
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<OutsideDirectionToolRender tool={entry[1] as OutsideDirectionToolI} c_id={entry[0]} />
					{/each}
				</g>
			{/if}
		{/if}
	{/each}
</g>
