<script lang="ts">
	export let isOpen = true;
</script>

<div class="collapsible-wrapper" class:closed={!isOpen}>
	<slot />
</div>

<style>
	.collapsible-wrapper {
		height: auto;
		width: 100%;
	}

	.collapsible-wrapper.closed {
		height: 0;
		overflow: hidden;
	}
</style>
