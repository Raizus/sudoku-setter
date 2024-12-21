<script lang="ts">
	import Modal from '$components/Modal/Modal.svelte';
	import ModalButtonsContainer from '$components/Modal/ModalButtonsContainer.svelte';
	import ModalSectionHeader from '$components/Modal/ModalSectionHeader.svelte';
	import ValueSliderLabeled from '$components/ValueSliderLabeled.svelte';
	import {
		createNewPuzzle,
		resetUserState,
	} from '$stores/BoardStore';
	import { range } from 'lodash';

	export let showModal = false;

	const minLength = 4;
	const maxLength = 20;
	let width = 9;
	let height = 9;
	let allowed_digits: number[] = range(1, 10);

	function cancelCb() {
		showModal = false;
	}

	function confirmCb() {
		resetUserState();
		createNewPuzzle(height, width);
		showModal = false;
	}

	function allowed_digits_to_str(allowed_digits: number[]): string {
		const out = allowed_digits.map((val) => String(val)).join(',');
		return out;
	}
</script>

<Modal bind:showModal title="New Puzzle">
	<div class="new-puzzle-content">
		<ValueSliderLabeled name="Width" min={minLength} max={maxLength} step={1} bind:value={width} />
		<ValueSliderLabeled
			name="Height"
			min={minLength}
			max={maxLength}
			step={1}
			bind:value={height}
		/>
		<ModalSectionHeader title="Allowed Digits" />
		<input
			class="allowed-digits"
			type="text"
			placeholder={allowed_digits_to_str(allowed_digits)}
			disabled={true}
		/>
		<ModalButtonsContainer>
			<button class="modal-button" on:click={confirmCb}>Confirm</button>
			<button class="modal-button" on:click={cancelCb}>Cancel</button>
		</ModalButtonsContainer>
	</div>
</Modal>

<style>
	.new-puzzle-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0.4em;
		max-height: 100%;
	}

	input {
		border: 2px solid var(--input-border-color);
		border-radius: 4px;
		background: var(--input-background-color);
	}

	input:focus {
		outline: none;
		border: 2px solid var(--input-outline-color);
	}
</style>
