<script lang="ts">
	import { HANDLER_TOOL_TYPE } from '$input/ToolInputHandlers/types';
	import {
		updateConstraintName,
		updateConstraintValue
	} from '$src/lib/Puzzle/Constraints/ElementsDict';
		import { type VariableConstraintI } from '$src/lib/Puzzle/puzzle_schema';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import { isLocalConstraint, TOOLS, type TOOLID } from '$src/lib/Puzzle/Tools';
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

	$: constraint_and_id = $currentConstraintStore;
	$: constraint = constraint_and_id?.constraint;

	function updateValue(event: Event) {
		if (!constraint_and_id) return;
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

		const constraint = updateConstraintValue(constraint_and_id.constraint, new_value);
		updateLocalConstraint(tool_id, constraint_and_id.id, constraint);
	}

	function updateName(event: Event) {
		if (!constraint_and_id) return;
		const target = event.target as HTMLInputElement;
		const value = target.value;
		const input_options = element_info.inputOptions;
		if (!input_options) return;

		const constraint = updateConstraintName(
			constraint_and_id.constraint as VariableConstraintI,
			value
		);
		updateLocalConstraint(tool_id, constraint_and_id.id, constraint);
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
			<div class="value-editor-container">
				{#if constraint && Object.hasOwn(constraint, 'name')}
					<div class="value-editor">
						Name:
						<input
							class="text-input"
							type="text"
							spellcheck={false}
							value={(constraint as VariableConstraintI)['name']}
							on:change={(event) => updateName(event)}
						/>
					</div>
				{/if}
				{#if constraint?.value !== undefined}
					<div class="value-editor">
						Value:
						<input
							class="text-input"
							type="text"
							spellcheck={false}
							value={constraint.value}
							on:input={(event) => updateValue(event)}
						/>
					</div>
				{/if}
			</div>
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

	.value-editor-container {
		display: flex;
		flex-direction: column;
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
</style>
