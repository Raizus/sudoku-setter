<script lang="ts">
	import TabbedMenu from '$components/TabbedMenu.svelte';
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import ImageTab from './ImageTab.svelte';
	import PuzzleTab from './PuzzleTab.svelte';

	export let showModal = false;

	function cancelCb() {
		showModal = false;
	}

	const previewScale = 1;
	const tabs = [
		{ label: 'Project', component: PuzzleTab },
		{ label: 'Image', component: ImageTab }
	];
</script>

<Modal bind:showModal title="Save Puzzle">
	<div class="save-puzzle-content">
		<TabbedMenu {tabs} />
		<!-- <ModalButtonsContainer>
			<button class="modal-button" on:click={cancelCb}>Cancel</button>
		</ModalButtonsContainer>  -->
	</div>
</Modal>

<style lang="scss">
	.save-puzzle-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0.4em;
	}
</style>
