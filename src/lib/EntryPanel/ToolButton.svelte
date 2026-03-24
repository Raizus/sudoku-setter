<script lang="ts">
	import type { TOOLID } from '$lib/Puzzle/Tools';
	import { stateStore } from '$stores/StateStore';

	export let selectedTool: TOOLID;
	export let value: TOOLID;
	export let title: string | undefined = undefined;

	function handleOptionChange() {
		// updateToolStore(value);
		stateStore.setPreviousToolStore(value);
	}
</script>

<label class="entry-panel-switch tool-pad-button" class:active={value === selectedTool} {title}>
	<input type="radio" bind:group={selectedTool} {value} on:change={handleOptionChange} />
	<slot />
</label>

<style>
	.tool-pad-button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input[type='radio'] {
		appearance: none;
		position: absolute;
		border-radius: 4px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		cursor: pointer;
	}

	input[type='radio']:focus {
		outline: transparent;
		box-shadow: var(--focus-shadow);
	}
</style>
