<script lang="ts">
	import ModalButtonsContainer from '$components/Modal/ModalButtonsContainer.svelte';
	import Modal from '$lib/Components/Modal/Modal.svelte';
	import {
		resetPuzzle,
		resetUserState,
	} from '$stores/BoardStore';

	export let showModal = false;

	function cancelCb() {
		showModal = false;
	}

	function confirmCb() {
		// reset grid and cells
        resetPuzzle();

		// reset user state
		resetUserState();
		showModal = false;
	}
</script>

<Modal bind:showModal title="Restart Confirmation">
	<div class="restart-content">
		<h3>Are you sure you want to restart? All progress will be lost!</h3>
		<ModalButtonsContainer>
			<button class="modal-button" on:click={confirmCb}>Confirm</button>
			<button class="modal-button" on:click={cancelCb}>Cancel</button>
		</ModalButtonsContainer>
	</div>
</Modal>

<style>
	.restart-content {
		position: relative;
		margin-top: 0.5em;
		padding: 0.4em;
		max-height: 100%;
		overflow: auto;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		/* align-items: start; */
		font-size: 1rem;
	}

	h3 {
		text-align: center;
		margin: 0;
	}

</style>
