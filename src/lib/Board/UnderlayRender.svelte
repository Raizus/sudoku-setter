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
		import { type SingleCellTool } from "../Puzzle/puzzle_schema";
		import { type LineToolI } from "../Puzzle/puzzle_schema";
		import { type ArrowToolI } from '../Puzzle/puzzle_schema';
		import { type CageToolI } from "../Puzzle/puzzle_schema";
		import { type CloneToolI } from "../Puzzle/puzzle_schema";
		import { type OutsideDirectionToolI } from "../Puzzle/puzzle_schema";
	import SingleCellToolRender from './Constraints/SingleCellToolRender.svelte';
	import LineToolRender from './Constraints/LineToolRender.svelte';
	import ArrowToolRender from './Constraints/ArrowToolRender.svelte';
	import CageToolRender from './Constraints/CageToolRender.svelte';
	import CloneToolRender from './Constraints/CloneToolRender.svelte';
	import OutsideDirectionToolRender from './Constraints/OutsideDirectionToolRender.svelte';
	import { enableFogMaskStore } from '$stores/BoardStore';

	$: underlay_elements = $underlayElementsStore;
	$: enable_fog_mask = $enableFogMaskStore;
</script>

<g class="underlay-layer" mask={enable_fog_mask ? 'url(#fog-mask-fog)' : null}>
	{#each underlay_elements as element}
		{#if !element.disabled && element.constraints}
			<g class="element-group" data-toolId={element.tool_id}>
				{#if isSingleCellTool(element.tool_id)}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<SingleCellToolRender tool={entry[1] as SingleCellTool} c_id={entry[0]} />
					{/each}
				{:else if isLineTool(element.tool_id)}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<LineToolRender tool={entry[1] as LineToolI} c_id={entry[0]} />
					{/each}
				{:else if isArrowTool(element.tool_id)}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<ArrowToolRender tool={entry[1] as ArrowToolI} c_id={entry[0]} />
					{/each}
				{:else if isCageTool(element.tool_id)}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<CageToolRender tool={entry[1] as CageToolI} c_id={entry[0]} />
					{/each}
				{:else if isCloneTool(element.tool_id)}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<CloneToolRender tool={entry[1] as CloneToolI} c_id={entry[0]} />
					{/each}
				{:else if isOutsideDirectionTool(element.tool_id)}
					{#each Object.entries(element.constraints) as entry (entry[0])}
						<OutsideDirectionToolRender tool={entry[1] as OutsideDirectionToolI} c_id={entry[0]} />
					{/each}
				{/if}
			</g>
		{/if}
	{/each}
</g>
