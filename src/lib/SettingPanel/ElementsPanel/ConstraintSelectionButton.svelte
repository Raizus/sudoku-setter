<script lang="ts">
	import Trash from '$icons/Trash.svelte';
	import Visibility from '$icons/Visibility.svelte';
	import VisibilityOff from '$icons/VisibilityOff.svelte';
	import type { ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
	import { addConstraintAction, removeConstraintAction } from '$src/lib/reducers/ElementsActions';
	import { stateStore } from '$stores/StateStore';

	export let constraint_id: string;
	export let constraint: ConstraintType;
	export let element_id: string;

	const svgRefStore = stateStore.svgRefStore;
	const elementsDictStore = stateStore.elementsDictStore;
	const currentConstraintStore = stateStore.currentConstraintStore;

	function selectConstraintCb() {
		//update current constraint
		stateStore.selectConstraint(element_id, constraint_id);
		if ($svgRefStore) $svgRefStore.focus();
	}

	function removeConstraint() {
		// removeLocalConstraint(toolId, constraintId);
		const constraint = $elementsDictStore.getConstraint(element_id, constraint_id);
		if (!constraint) return;
		const action = removeConstraintAction(element_id, constraint_id);
		const reverse_action = addConstraintAction(element_id, constraint_id, constraint);
		const command = stateStore.getUpdateElementCommand(action, reverse_action);
		stateStore.commandHistoryStore.addCommand(command);
	}

	function enableDisableConstraint() {
		stateStore.enableDisableConstraint(element_id, constraint_id);
	}

	$: currentConstraintId = $currentConstraintStore?.id;
	$: disabled = !!constraint.disabled;
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
		<button
			class="remove-constraint-button"
			on:click|stopPropagation={enableDisableConstraint}
			title={disabled ? "Enable constraint" : "Disable constraint"}
		>
			{#if disabled}
				<VisibilityOff />
			{:else}
				<Visibility />
			{/if}
		</button>
		<button
			class="remove-constraint-button"
			on:click|stopPropagation={removeConstraint}
			title="Delete constraint"
		>
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
