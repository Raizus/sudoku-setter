<script lang="ts">
	import { getDefaultToolMode, getToolModes, type ToolModeT } from '$input/ToolInputHandlers/types';
	import type { TOOLID } from '$src/lib/Puzzle/Tools';
	import { toolModeStore } from '$stores/InputHandlerStore';

	export let tool_id: TOOLID;

	$: modes = getToolModes(tool_id);

	$: currentMode = $toolModeStore;

	function clickCb(mode: ToolModeT) {
		$toolModeStore = mode;
	}

	$toolModeStore = getDefaultToolMode(tool_id);
</script>

{#if modes}
	<div class="tool-buttons">
		{#each Object.values(modes) as mode}
			<button
				class = "form-button"
				class:selected={mode === currentMode}
				role="switch"
				aria-checked={mode === currentMode}
				on:click={() => clickCb(mode)}
			>
				{mode}
			</button>
		{/each}
	</div>
{/if}

<style lang="scss">
	.tool-buttons {
		display: flex;
	}

	button {
		color: #666;
		background-color: var(--button-background-color);
		border-radius: 0.3rem;
		border: 0.125rem solid black;
		min-height: 2em;
		min-width: 2em;

		&:hover {
			background: var(--button-hover-background-color);
		}

		&.selected {
			color: var(--text-primary-color);
			background: radial-gradient(
				var(--button-background-color) 30%,
				var(--button-active-background-color)
			);
			box-shadow: 0 .1em .2em -.1em #333;
		}
	}
</style>
