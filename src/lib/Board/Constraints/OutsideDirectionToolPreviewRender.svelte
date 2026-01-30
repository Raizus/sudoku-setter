<script lang="ts">
	import type { OutsideDirectionToolI } from '$src/lib/Puzzle/puzzle_schema';
	import { Vector2D } from '$src/lib/utils/Vector2D';
	import type { ToolPreview } from '$stores/ElementsStore';
	import OutsideDirectionToolRenderAux from './OutsideDirectionToolRenderAux.svelte';
	import RemoveConstraintCrossPreview from './RemoveConstraintCrossPreview.svelte';

	export let tool_preview: ToolPreview<OutsideDirectionToolI>;

	$: tool = tool_preview.tool;
	$: mode = tool_preview.mode;
	$: c_id = tool_preview.match_id;

	$: coords = tool.cell;
	$: center = new Vector2D(coords.c + 0.5, coords.r + 0.5);
</script>

{#if mode === 'remove' && c_id}
	<g class="outside-direction-tool-remove-preview" opacity={0.5}>
		<RemoveConstraintCrossPreview cx={center.x} cy={center.y} {c_id} />
	</g>
{:else}
	<g class="outside-direction-tool-preview" opacity={0.5}>
        <OutsideDirectionToolRenderAux {tool} />
	</g>
{/if}
