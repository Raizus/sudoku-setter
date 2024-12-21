<script lang="ts">
</script>

<div class="buttons-container">
	<slot />
</div>

<style lang="scss">
	$button-background: var(--button-background-color);
	$button-hover-background: var(--button-hover-background-color);

	.buttons-container {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 1rem;

		& :global(button) {
			max-width: 50%;
			flex-grow: 1;
			flex-basis: 0;

			&:hover {
				background: $button-hover-background;
			}

			&:focus {
				outline: transparent;
				box-shadow: var(--focus-shadow);
			}
		}
	}
</style>
