<script lang="ts">
	export let title: string;
	export let closeCb: () => void;
</script>

<div class="modal-header">
	<span class="modal-title">{title}</span>
	<button class="modal-header-close" on:click={closeCb}>&#10005;</button>
</div>

<style>
	.modal-header {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0.5rem;
		font-size: 2rem;
		background: var(--modal-header-background-color);
		border-bottom: 0.2rem solid black;
		margin-bottom: 0.5rem;
	}
	.modal-title {
		display: flex;
		justify-content: center;
		flex-grow: 1;
	}
	.modal-header-close {
		background: var(--modal-header-background-color);
		border: 0;
		border-radius: 10px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
	}

	.modal-header-close:hover {
		background: var(--button2-hover-background-color);
		cursor: pointer;
	}
</style>
