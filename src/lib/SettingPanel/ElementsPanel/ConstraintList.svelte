<script lang="ts">
	import { elementsDictStore } from '$stores/BoardStore';
	import ConstraintSelectionButton from './ConstraintSelectionButton.svelte';

	export let element_id: number;
	$: constraints_element = $elementsDictStore.get(element_id);
</script>

{#if constraints_element && constraints_element.constraints && Object.entries(constraints_element.constraints).length}
	<div class="constraint-list-wrapper">
		<div class="constraint-list">
			{#each Object.entries(constraints_element.constraints) as entry (entry[0])}
				<ConstraintSelectionButton constraint_id={entry[0]} {element_id} />
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
