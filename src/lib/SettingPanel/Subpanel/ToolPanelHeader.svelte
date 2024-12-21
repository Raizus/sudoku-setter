<script lang="ts">
	import PanelHeader from './PanelHeader.svelte';

	export let isOpen: boolean;
	export let title: string;
	export let showModal: boolean;

	function onOpenCallback() {
		showModal = !showModal;
	}
</script>

<PanelHeader {title} bind:isOpen>
	<button slot="add-button" class="add-button" title="Add Constraint" on:click|stopPropagation={() => onOpenCallback()}>
		<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 96 960 960"
			><path
				d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z"
			/></svg
		>
	</button>
	<slot name="title-icon" slot="title-icon"/>
</PanelHeader>

<style>
	.add-button {
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		border: none;
		border-radius: 5px;
		margin: 0;
		padding: 0;
		background-color: transparent;
		cursor: pointer;
	}

	.add-button:focus {
		outline: transparent;
		box-shadow: var(--focus-shadow);
	}

	.add-button:hover .icon {
		fill: var(--panel-icon-color-hover);
	}

	.icon {
		position: relative;
		fill: var(--panel-icon-color);
	}
</style>
