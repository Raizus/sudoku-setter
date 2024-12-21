<script lang="ts">
    export let title: string | undefined = undefined;
	export let clickCb: (() => void) | undefined = undefined;
</script>

<button class="controls-extra-button entry-panel-button settings" {title} on:click={clickCb}>
	<div class="icon-wrapper">
		<slot />
	</div>
</button>

<style>
	.controls-extra-button {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		width: 80%;
		height: 80%;
	}
</style>
