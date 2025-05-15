<script lang="ts">
	import Modal from '$components/Modal/Modal.svelte';
	import ModalButtonsContainer from '$components/Modal/ModalButtonsContainer.svelte';
	import ModalSectionHeader from '$components/Modal/ModalSectionHeader.svelte';
	import ValueSliderLabeled from '$components/ValueSliderLabeled.svelte';
	import { createNewPuzzle, resetUserState } from '$stores/BoardStore';
	import { resetZoom } from '$stores/BoundingBoxStore';
	import { range } from 'lodash';

	export let showModal = false;

	const minLength = 4;
	const maxLength = 20;
	let width = 9;
	let height = 9;
	let inputStr = '';
	let allowed_digits: number[] = range(1, 10);

	function cancelCb() {
		showModal = false;
	}

	function confirmCb() {
		resetUserState();
		createNewPuzzle(height, width, allowed_digits.sort());
		resetZoom();
		showModal = false;
	}

	function allowed_digits_to_str(allowed_digits: number[]): string {
		const out = allowed_digits.map((val) => String(val)).join(',');
		return out;
	}

	function updateDigits() {
		const max_v = Math.min(Math.max(height, width), 9);
		allowed_digits = range(1, max_v + 1);
	}

	function inputCb(text: string) {
		const regex = /^-?\d+(?:,-?\d+)*$/;
		if (!regex.test(text)) return;

		// Split the input by commas and convert each part to a number
		allowed_digits = text.replaceAll(' ', '').split(',').map(Number);
	}
</script>

<Modal bind:showModal title="New Puzzle">
	<div class="new-puzzle-content">
		<ValueSliderLabeled
			name="Width"
			min={minLength}
			max={maxLength}
			step={1}
			bind:value={width}
			onInputCb={updateDigits}
		/>
		<ValueSliderLabeled
			name="Height"
			min={minLength}
			max={maxLength}
			step={1}
			bind:value={height}
			onInputCb={updateDigits}
		/>
		<ModalSectionHeader title={`Allowed Digits (for the solver): ${allowed_digits_to_str(allowed_digits)}`} />
		<input
			class="text-input"
			type="text"
			placeholder={allowed_digits_to_str(allowed_digits)}
			bind:value={inputStr}
			on:input={() => inputCb(inputStr)}
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
</style>
