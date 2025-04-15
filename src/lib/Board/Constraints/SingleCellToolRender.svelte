<script lang="ts">
	import SingleCellArrowRender from './SingleCellArrowRender.svelte';
	import SingleCellMultiArrowRender from './SingleCellMultiArrowRender.svelte';
	import SimpleSingleCellToolRender from './SimpleSingleCellToolRender.svelte';
	import type { SingleCellTool } from '$src/lib/Puzzle/Constraints/SingleCellConstraints';

	export let tool: SingleCellTool;
	export let c_id: string;
</script>


{#if tool.type === 'ARROW'}
    <SingleCellArrowRender {tool} {c_id}/>
{:else if tool.type === 'MULTIARROW'}
    <SingleCellMultiArrowRender {tool} {c_id}/>
{:else if tool.type === 'SIMPLE'}
    <SimpleSingleCellToolRender {tool} {c_id} />
{/if}
