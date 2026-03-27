<script lang="ts">
	export let clickCb: () => void;
	export let title: string;
</script>

<button class="panel-button icon" on:click|stopPropagation={clickCb} {title}>
	<div class="icon-wrapper">
		<slot />
	</div>
</button>

<style lang="scss">
	.icon-wrapper {
		display: flex;
		align-items: center;
		width: 80%;
		height: 80%;
	}
</style>
