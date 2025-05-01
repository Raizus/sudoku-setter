<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import type { TOOLID } from '$src/lib/Puzzle/Tools';
	import ConstraintCheckbox from './ConstraintCheckbox.svelte';
	import ConstraintList from './ConstraintList.svelte';
	import ToolModeButtons from './ToolModeButtons.svelte';

	export let tool_id: TOOLID;
	const element_info = squareCellElementHandlers[tool_id];
	const negative_constraints = element_info.negative_constraints;
</script>

<div class="editor-wrapper">
	<div class="editor">
		<div class="editor-layout">
			{#if negative_constraints}
				{#each negative_constraints as neg_const}
					<ConstraintCheckbox
						{tool_id}
						neg_tool_id={neg_const.toolId}
						description={neg_const.description}
					/>
				{/each}
			{/if}
			<ToolModeButtons {tool_id} />
			<ConstraintList {tool_id} />
		</div>
	</div>
</div>

<style lang="scss">
	.editor-wrapper {
		height: auto;
		margin: 0 0.5rem;
	}

	.editor {
		border-top: 0.0625rem solid black;
		padding: 0.5rem 0;
	}

	.editor-layout {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
