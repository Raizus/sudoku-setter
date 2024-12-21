<script lang="ts">
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import SearchBar from '$lib/Components/SearchBar.svelte';

	export let showModal: boolean;
	export let searchPattern = '';
	export let title: string;
</script>

<Modal bind:showModal {title}>
	<div class="tool-selection-container">
		<SearchBar bind:searchPattern {showModal}/>
		<div class="tools-list-container-wrapper">
			<div class="tools-list-container">
				<slot />
			</div>
		</div>
	</div>
</Modal>

<style>
	.tool-selection-container {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
		width: 100%;
	}

	.tools-list-container-wrapper{
        flex: 1;
		position: relative;
    }    

	.tools-list-container {
        position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin-top: 0.5em;
		padding: 0.4em;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		align-items: start;
	}
</style>
