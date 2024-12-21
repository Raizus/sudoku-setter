<script lang="ts">
	export let clickCb: () => void;
	export let title: string;
</script>

<button class="menu-button" on:click|stopPropagation={clickCb} {title}>
	<div class="icon-wrapper">
		<slot />
	</div>
</button>

<style lang="scss">
	.menu-button {
		cursor: pointer;
		border-radius: 0.2em;
		background-color: var(--button-background-color);
		border: 0;
		height: 2rem;
		width: 2rem;

		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		width: 80%;
		height: 80%;
	}
</style>
