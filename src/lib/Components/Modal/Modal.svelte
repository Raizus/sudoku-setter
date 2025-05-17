<script lang="ts">
	import ModalHeader from './ModalHeader.svelte';

	export let showModal: boolean;
	export let title: string;
	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
	$: if (dialog && !showModal) dialog.close();

	function closeCb() {
		showModal = false;
		dialog.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => {
		showModal = false;
	}}
	on:click|self|stopPropagation={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<ModalHeader {title} {closeCb} />
		<div class="modal-content-wrapper">
			<div class="modal-content">
				<slot />
			</div>
		</div>
	</div>
</dialog>

<style lang="scss">
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.8);
	}
	dialog {
		cursor: default;
		border-radius: 10px;
		border: 3px solid black;
		max-width: 70vw;
		min-width: 50vw;
		max-height: 80vh;
		height: 80vh;
		background: var(--modal-background-color);
		padding: 0;
		overflow: hidden;

		&[open] {
			animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		}

		&[open]::backdrop {
			animation: fade 0.2s ease-out;
		}

		& > div {
			position: relative;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
		}
	}

	.modal-content-wrapper {
		flex: 1;
		position: relative;
	}

	.modal-content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
		margin-left: 1rem;
		margin-right: 1rem;
		margin-bottom: 1rem;
		/* margin-bottom: 1rem; */
	}
</style>
