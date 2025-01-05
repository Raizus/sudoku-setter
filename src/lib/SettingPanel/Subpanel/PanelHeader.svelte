<script lang="ts">
	export let isOpen: boolean;
	export let title: string;
</script>

<div
	role="button"
	tabindex={0}
	class="panel-header"
	on:click={() => (isOpen = !isOpen)}
	aria-keyshortcuts="Space Enter"
	on:keydown={(e) => {
		if (e.key !== "Enter" && e.key !== " ") return;
		e.preventDefault();
		e.currentTarget.click();
	}}
>
	<div class="add-button-container">
		<slot name="add-button" />
	</div>
	<span class="panel-header-title">
		<div class="title-icon-wrapper">
			<slot name="title-icon" />
		</div>
		{title}
	</span>
	<div class="panel-header-right">
		<span class="collapse-icon" class:open={isOpen}>&#10095</span>
	</div>
</div>

<style>
	.panel-header {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		user-select: none;
		padding: 0.25em;
		border-radius: 4px;
		cursor: pointer;
		background-color: transparent;
		border: 0;

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}
	}

	.panel-header-title {
		font-weight: bold;
		display: flex;
		align-items: center;
	}

	.panel-header-right {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		padding-left: 0.5rem;
	}

	.add-button-container {
		height: 1.5rem;
		width: 1.5rem;
		margin-right: 1rem;
	}

	.title-icon-wrapper {
		height: 1.5rem;
		width: 1.5rem;
		margin-right: 0.5rem;
	}

	.collapse-icon {
		flex-grow: 0;
		transition: transform 150ms ease-in-out;
	}

	.collapse-icon.open {
		transform: rotate(90deg);
	}
</style>
