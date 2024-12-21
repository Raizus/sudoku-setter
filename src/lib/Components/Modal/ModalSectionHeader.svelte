<script lang="ts">
	export let title: string;
	export let isOpen = true;
	export let isCollapsible = false;
</script>

{#if !isCollapsible}
	<div class="modal-section-header">
		<div class="left-side">
			<span class="section-title">{title}</span>
		</div>
		<div class="right-side">
			<slot />
		</div>
	</div>
{:else}
	<button class="modal-section-header" on:click={() => (isOpen = !isOpen)}>
		<div class="left-side">
			<span class="section-title">{title}</span>
		</div>
		<div class="right-side">
			<slot />
			<div class="collapse-icon" class:open={isOpen}>&#10095</div>
		</div>
	</button>
{/if}

<style>
	.modal-section-header {
		border: 0;
		border-bottom: 1px solid var(--text-primary-color);
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		width: 100%;
		display: flex;
		flex-direction: row;
		text-align: start;
		background-color: transparent;
	}

	button {
		cursor: pointer;
	}

	.left-side {
		flex-grow: 1;
		display: flex;
		align-items: end;
	}

	.section-title {
		font-weight: bold;
		font-size: 1.5rem;
	}

	.right-side {
		display: flex;
		margin-left: auto;
		padding-right: 1rem;
	}

	.collapse-icon {
		display: flex;
		transition: transform 150ms ease-in-out;
		align-items: center;
	}

	.collapse-icon.open {
		transform: rotate(90deg);
	}
</style>
