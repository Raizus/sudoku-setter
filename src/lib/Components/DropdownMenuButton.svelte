<script lang="ts">
	export let clickCb: () => void;
</script>

<button class="dropdown-button" on:click|stopPropagation={clickCb}>
	<div class="icon-wrapper">
		<slot name="icon" />
	</div>
	<slot name="label" />
</button>

<style lang="scss">
	.dropdown-button {
		width: 100%;
		text-align: left;
		border: none;
		background: none;
		padding: 0.5em 0.7em;
		line-height: 1;
		display: flex;
		align-items: center;
		white-space: nowrap;
		cursor: pointer;

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	.icon-wrapper {
		width: 1.5em;
		height: 1.5em;
		padding: 0.2rem;
	}
</style>
