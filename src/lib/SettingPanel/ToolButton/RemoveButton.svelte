<script lang="ts">
	import Trash from '$icons/Trash.svelte';

	export let onTrash: () => void = () => {
		console.log('Trash Clicked');
	};
</script>

<button class="remove-button" on:click|stopPropagation={onTrash}>
	<Trash />
</button>

<style>
	.remove-button {
		cursor: pointer;
		display: flex;
		border: none;
		width: 1.5rem;
		height: 1.5rem;
		margin: 0;
		padding: 0;
		border-radius: 5px;
		background-color: transparent;
		align-items: center;
		color: var(--panel-icon-color);
	}

	.remove-button:hover {
		color: var(--panel-icon-color-hover);
	}

	.remove-button:focus {
		outline: transparent;
		box-shadow: var(--focus-shadow);
	}
</style>
