<script lang="ts">
	import type { TOOLID } from '$lib/Puzzle/Tools';

	import Trash from '$icons/Trash.svelte';
	import { currentConstraintStore, selectConstraint, svgRefStore } from '$stores/BoardStore';
	import { elementsDictStore } from '$stores/BoardStore';
	import { getUpdateElementCommand } from '$stores/LocalConstraintsStore';
	import {
		addLocalConstraintAction,
		removeLocalConstraintAction
	} from '$src/lib/reducers/LocalConstraintsActions';
	import { addCommand } from '$stores/CommandHistoryStore';

	export let constraint_id: string;
	export let tool_id: TOOLID;

	function selectConstraintCb() {
		//update current constraint
		selectConstraint(constraint_id, tool_id);
		if ($svgRefStore) $svgRefStore.focus();
	}

	function removeConstraint() {
		// removeLocalConstraint(toolId, constraintId);
		const constraint = $elementsDictStore.getConstraint(tool_id, constraint_id);
		if (!constraint) return;
		const action = removeLocalConstraintAction(constraint_id, tool_id);
		const reverse_action = addLocalConstraintAction(constraint_id, constraint);
		const command = getUpdateElementCommand(action, reverse_action);
		addCommand(command);
	}

	$: currentConstraintId = $currentConstraintStore?.id;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="constraint-button"
	on:click={selectConstraintCb}
	class:active={constraint_id === currentConstraintId}
>
	<div class="left-side">
		ID: {constraint_id}
	</div>
	<div class="right-side">
		<button class="remove-constraint-button" on:click|stopPropagation={removeConstraint}>
			<Trash />
		</button>
	</div>
</div>

<style>
	.constraint-button {
		display: flex;
		background-color: transparent;
		text-align: start;
		border: 0.1em solid black;
		border-radius: 5px;
		cursor: pointer;
		padding-left: 0.4em;
	}

	.constraint-button:hover {
		background-color: var(--panel-radio-background-hover);
	}

	.constraint-button.active {
		background-color: var(--button-active-background-color);
	}

	.left-side {
		display: flex;
		align-items: center;
	}

	.right-side {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	.remove-constraint-button {
		color: var(--panel-icon-color);
		background-color: transparent;
		border-radius: 5px;
		padding: 2px;
		border: none;
		width: 1.5rem;
		height: 1.5rem;
		display: flex;
		cursor: pointer;
	}

	.remove-constraint-button:hover {
		color: var(--panel-icon-color-hover);
	}

	.remove-constraint-button:focus {
		outline: transparent;
		box-shadow: var(--focus-shadow);
	}
</style>
