<script lang="ts">
	import type { TOOLID } from '$src/lib/Puzzle/Tools';
	import { localConstraintsStore } from '$stores/BoardStore';
	import ToolModeButtons from './ToolModeButtons.svelte';

	export let tool_id: TOOLID;

	$: constraintRecord = $localConstraintsStore.get(tool_id);
</script>

<div class="editor-wrapper">
	<div class="editor">
		<div class="editor-layout">
			<ToolModeButtons />
		</div>
		<div class="constraint-list">
			
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
	}

	.constraint-list {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
		gap: 1px;
		border-left: 1px solid var(--panel-radio-border-color);
		padding-left: 1px;
	}
</style>
