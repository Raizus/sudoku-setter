<script lang="ts">
	export let clickCb: () => void;
	export let title: string;
</script>

<button class="form-button icon menu-button" on:click|stopPropagation={clickCb} {title}>
	<div class="icon-wrapper">
		<slot />
	</div>
</button>

<style lang="scss">
	.menu-button {
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
