<script lang="ts">
	import {
		getDefaultToolMode,
		getToolModes,
		VALUE_TOOL_MODE,
		type ToolModeT
	} from '$input/ToolInputHandlers/types';
	import { pushAddLocalConstraintCommand } from '$input/ToolInputHandlers/utils.js';
	import { valuedGlobalConstraint } from '$src/lib/Puzzle/Constraints/ValuedGlobalConstraints.js';
	import { variableConstraint } from '$src/lib/Puzzle/Constraints/VariableConstraints';
	import { isValuedGlobalConstraint, TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
	import { toolModeStore } from '$stores/InputHandlerStore';
	import { uniqueId } from 'lodash';

	export let tool_id: TOOLID;

	$: modes = getToolModes(tool_id);

	$: currentMode = $toolModeStore;

	function select_mode(mode: ToolModeT) {
		$toolModeStore = mode;
	}

	function createCb() {
		if (isValuedGlobalConstraint(tool_id)) {
			const id = uniqueId();
			const constraint = valuedGlobalConstraint(tool_id, '');
			pushAddLocalConstraintCommand(id, constraint, tool_id, true);
		} else if (tool_id === TOOLS.VARIABLE_CONSTRAINT) {
			const id = uniqueId();
			const constraint = variableConstraint('', '');
			pushAddLocalConstraintCommand(id, constraint, tool_id, true);
		}
	}

	$toolModeStore = getDefaultToolMode(tool_id);
</script>

{#if modes}
	<div class="tool-buttons">
		{#each Object.values(modes) as mode}
			{#if mode === VALUE_TOOL_MODE.CREATE}
				<button class="form-button" on:click={createCb}>
					{mode}
				</button>
			{:else}
				<button
					class="form-button radio-button"
					class:selected={mode === currentMode}
					role="switch"
					aria-checked={mode === currentMode}
					on:click={() => select_mode(mode)}
				>
					{mode}
				</button>
			{/if}
		{/each}
	</div>
{/if}

<style lang="scss">
	.tool-buttons {
		display: flex;
		gap: 0.2em;
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

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}

		&.selected {
			color: var(--text-primary-color);
			background: radial-gradient(
				var(--button-background-color) 30%,
				var(--button-active-background-color)
			);
			box-shadow: 0 0.1em 0.2em -0.1em #333;
		}
	}
</style>
