<script lang="ts">
	import type { TOOLID } from '$src/lib/Puzzle/Tools';
	import { localConstraintsStore } from '$stores/BoardStore';
	import { restoreElement } from '$stores/LocalConstraintsStore';

	export let tool_id: TOOLID;
	export let neg_tool_id: string;
	export let description: string;

	$: element = $localConstraintsStore.get(tool_id);
	$: value = element?.negative_constraints ? !!element.negative_constraints[neg_tool_id] : false;

	function clickCb() {
		if (!element) return;
		if (!element.negative_constraints) element.negative_constraints = {};
		element.negative_constraints[neg_tool_id] = !value;
		restoreElement(tool_id, element);

		// update current element negative constraint

		// update element (with history?)
		value = !value;
	}
</script>

<label class="checkbox-label">
	<span class="checkbox" class:checked={value}>
		<input type="checkbox" class:checked={value} on:click={clickCb} />
		<div class="check-container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
				<path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z" />
			</svg>
		</div>
	</span>
	<span>
		{neg_tool_id}
	</span>
</label>

<style lang="scss">
	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.5em;
		cursor: pointer;
		min-height: 1.75rem;

		&:hover {
			color: #666;
		}
	}

	.checkbox {
		display: inline-block;
		position: relative;
		height: 1.2em;
		width: 1.2em;
		cursor: pointer;
		border: 0.1em solid;
		background: #fff;
		flex-shrink: 0;
	}

	input {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0;
		z-index: 1;
		cursor: inherit;
	}

	.check-container {
		position: absolute;
		display: block;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		opacity: 0;
		color: black;
	}

	input.checked ~ .check-container {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
</style>
