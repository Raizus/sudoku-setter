<script lang="ts">
	import CollapsibleDiv from '$lib/Components/CollapsibleDiv.svelte';
	import type { TOOLID } from '$lib/Puzzle/Tools';
	import { toolStore } from '$stores/BoardStore';
		import { localConstraintsStore } from '$stores/BoardStore';
	import ConstraintSelectionButton from './ConstraintSelectionButton.svelte';

	export let toolId: TOOLID;

	$: constraintRecord = $localConstraintsStore.get(toolId);
</script>

{#if constraintRecord && Object.entries(constraintRecord).length}
	<CollapsibleDiv isOpen={toolId === $toolStore}>
		<div class="constraint-list">
			{#each Object.entries(constraintRecord) as entry (entry[0])}
				<ConstraintSelectionButton constraint_id={entry[0]} tool_id={toolId}/>
			{/each}
		</div>
	</CollapsibleDiv>
{/if}

<style>
	.constraint-list {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
		gap: 1px;
		border-left: 1px solid var(--panel-radio-border-color);
		padding-left: 1px;
	}
</style>
