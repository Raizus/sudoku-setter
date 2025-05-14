<script lang="ts">
	import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
	import { updateConstraintValue } from '$src/lib/Puzzle/Constraints/LocalConstraints';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { isLocalConstraint, type TOOLID } from '$src/lib/Puzzle/Tools';
	import { currentConstraintStore, updateLocalConstraint } from '$stores/BoardStore';
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

	$: current_constraint = $currentConstraintStore;
	$: value_str = current_constraint?.constraint.value ?? '';

	function updateValue(event: Event) {
		if (!current_constraint) return;
		const target = event.target as HTMLInputElement;
		const value = target.value;
		const input_options = element_info.inputOptions;
		if (!input_options) return;

		if (
			input_options.type !== HANDLER_TOOL_TYPE.VALUE_TOOL &&
			input_options.type !== HANDLER_TOOL_TYPE.CAGE &&
			input_options.type !== HANDLER_TOOL_TYPE.LINE &&
			input_options.type !== HANDLER_TOOL_TYPE.EDGE &&
			input_options.type !== HANDLER_TOOL_TYPE.CORNER &&
			input_options.type !== HANDLER_TOOL_TYPE.OUTSIDE_DIRECTION
		)
			return;
		const updater = input_options.valueUpdater;
		if (!updater) return;
		const new_value = updater(value, '');
		if (new_value === undefined) return;

		const constraint = updateConstraintValue(current_constraint.constraint, new_value);
		updateLocalConstraint(tool_id, current_constraint.id, constraint);
	}
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
			{#if current_constraint && current_constraint.constraint.value !== undefined}
				<div class="value-editor">
					Value:
					<input
						class="value-input"
						type="text"
						spellcheck={false}
						value={current_constraint.constraint.value}
						on:input={(event) => updateValue(event)}
					/>
				</div>
			{/if}
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

	.value-editor {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		min-height: 2em;
	}

	.value-input {
		background-color: var(--input-background-color);
		display: flex;
		color: var(--text-primary-color);
		border: 1px solid var(--input-border-color);
		border-radius: 0.15rem;

		&:focus {
			outline: 2px solid var(--input-outline-color);
		}
	}
</style>
