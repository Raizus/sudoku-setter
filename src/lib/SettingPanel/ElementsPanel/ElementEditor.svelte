<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { isLocalConstraint, type TOOLID } from '$src/lib/Puzzle/Tools';
	import ConstraintCheckbox from './ConstraintCheckbox.svelte';
	import ConstraintList from './ConstraintList.svelte';
	import ToolModeButtons from './ToolModeButtons.svelte';

	export let tool_id: TOOLID;
	const element_info = squareCellElementHandlers[tool_id];
	const negative_constraints = element_info.negative_constraints;
	const has_negatives =
		negative_constraints && Object.keys(negative_constraints).length > 0 ? true : false;
	const is_local = isLocalConstraint(tool_id);
	// don't render editor if there's nothing to render
	// i.e global constraints without negative_constraints
	const render = is_local || has_negatives;
</script>

{#if render}
	<div class="editor-wrapper">
		<div class="editor">
			<div class="bool-constraints-container">
				{#if negative_constraints}
					{#each negative_constraints as neg_const}
						<ConstraintCheckbox
							{tool_id}
							neg_tool_id={neg_const.toolId}
							description={neg_const.description}
						/>
					{/each}
				{/if}
			</div>
			<ToolModeButtons {tool_id} />
			<ConstraintList {tool_id} />
		</div>
	</div>
{/if}

<style lang="scss">
	.editor-wrapper {
		height: auto;
		margin: 0 0.5rem;
	}

	.editor {
		border-top: 0.0625rem solid black;
		padding: 0.5rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.bool-constraints-container {
		display: flex;
		flex-direction: column;
	}
</style>
