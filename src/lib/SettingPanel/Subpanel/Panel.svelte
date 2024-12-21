<script lang="ts">
	import CollapsibleDiv from "$lib/Components/CollapsibleDiv.svelte";

	export let isOpen = true;
</script>

<div class="panel-container">
	<slot name="panel-header"/>
	<CollapsibleDiv {isOpen}>
		<div class="panel-content-wrapper">
			<slot name="panel-content"></slot>
		</div>
	</CollapsibleDiv>
</div>

<style>
	.panel-container {
        /* border: 1px solid var(--button-hover-background-color); */
		box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 0px;
        border-radius: 0.25em;
        padding: 0.5em;
		background-color: var(--panel-background-color);
    }

	.panel-content-wrapper {
		display:flex;
		flex-direction: column;
		gap: 5px;
		padding: 5px;
	}
</style>
