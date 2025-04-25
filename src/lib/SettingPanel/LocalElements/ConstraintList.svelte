<script lang="ts">
	import type { TOOLID } from '$src/lib/Puzzle/Tools';
	import { localConstraintsStore } from '$stores/BoardStore';
	import ConstraintSelectionButton from '../ToolButton/ConstraintSelectionButton.svelte';

	export let tool_id: TOOLID;
	$: constraintRecord = $localConstraintsStore.get(tool_id);
</script>

{#if constraintRecord && Object.entries(constraintRecord).length}
	<div class="constraint-list-wrapper">
		<div class="constraint-list">
			{#each Object.entries(constraintRecord) as entry (entry[0])}
				<ConstraintSelectionButton constraint_id={entry[0]} {tool_id} />
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.constraint-list-wrapper {
		margin: 0 -0.5rem;
	}

	.constraint-list {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
		background: #2f2f2f;
        padding: 0.5em;
	}
</style>
