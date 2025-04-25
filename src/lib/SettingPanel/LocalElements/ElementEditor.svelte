<script lang="ts">
	import type { TOOLID } from '$src/lib/Puzzle/Tools';
	import ConstraintList from './ConstraintList.svelte';
	import ToolModeButtons from './ToolModeButtons.svelte';

	export let tool_id: TOOLID;
</script>

<div class="editor-wrapper">
	<div class="editor">
		<div class="editor-layout">
			<ToolModeButtons {tool_id}/>
			<ConstraintList {tool_id}/>
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
