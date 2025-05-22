<script lang="ts">
	import MoreVertical from '$icons/MoreVertical.svelte';
	import Trash from '$icons/Trash.svelte';
	import Visibility from '$icons/Visibility.svelte';
	import VisibilityOff from '$icons/VisibilityOff.svelte';
	import { onMount, tick } from 'svelte';

	export let display = false;
	export let disabled = false;
	export let deleteElementCb: (() => void) | null = null;
	export let enableDisableElementCb: (() => void) | null = null;

	let dropdow_open = false;
	let dropdownEl: HTMLDivElement;
	let portalContainer: HTMLElement;
	let buttonEl: HTMLButtonElement;

	// Position state
	let dropdownPosition = { top: 0, left: 0, width: 0 };

	function updatePosition() {
		if (buttonEl && dropdow_open) {
			const rect = buttonEl.getBoundingClientRect();
			dropdownPosition = {
				top: rect.bottom + window.scrollY + 4, // 4px gap
				left: rect.left + window.scrollX,
				width: Math.max(160, rect.width) // At least 160px or button width
			};
		}
	}

	async function toggleDropdown() {
		dropdow_open = !dropdow_open;
		if (dropdow_open) {
			await tick(); // Wait for DOM update
			updatePosition();
		}
	}

	function closeCb() {
		dropdow_open = false;
	}

	// Handle clicks outside the dropdown to close it
	function handleClickOutside(event: MouseEvent) {
		const target = event.target;
		if (dropdow_open && dropdownEl && target && !dropdownEl.contains(target as HTMLElement)) {
			event.preventDefault();
			event.stopPropagation();
			closeCb();
		}
	}

	// Handle window resize and scroll
	function handleWindowEvents() {
		if (dropdow_open) {
			updatePosition();
		}
	}

	onMount(() => {
		// Find the App element or fallback to body
		const appElement = document.getElementById('App') || document.body;

		// Create portal container
		portalContainer = document.createElement('div');
		portalContainer.style.position = 'absolute';
		portalContainer.style.top = '0';
		portalContainer.style.left = '0';
		portalContainer.style.zIndex = '9999';
		portalContainer.style.pointerEvents = 'none'; // Allow clicks to pass through container
		appElement.appendChild(portalContainer);

		// Add global event listeners
		document.addEventListener('click', handleClickOutside, true);
		window.addEventListener('resize', handleWindowEvents);
		window.addEventListener('scroll', handleWindowEvents, true);

		// Clean up on destroy
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			window.removeEventListener('resize', handleWindowEvents);
			window.removeEventListener('scroll', handleWindowEvents, true);
			if (portalContainer && portalContainer.parentNode) {
				portalContainer.parentNode.removeChild(portalContainer);
			}
		};
	});

	// Reactive statement to render dropdown in portal
	$: if (portalContainer && dropdownEl) {
		if (dropdow_open) {
			portalContainer.appendChild(dropdownEl);
		} else if (dropdownEl.parentNode === portalContainer) {
			portalContainer.removeChild(dropdownEl);
		}
	}
</script>

{#if display}
	<div class="dropdown-container">
		<button
			bind:this={buttonEl}
			class="form-button icon header-button"
			on:click|stopPropagation={toggleDropdown}
		>
			<MoreVertical />
		</button>
	</div>

	{#if dropdow_open}
		<div
			bind:this={dropdownEl}
			class="dropdown-menu"
			style="top: {dropdownPosition.top}px; left: {dropdownPosition.left}px; min-width: {dropdownPosition.width}px;"
		>
			{#if enableDisableElementCb}
				<button
					class="dropdown-button"
					on:click|stopPropagation={() => {
						enableDisableElementCb();
						closeCb();
					}}
				>
					<div class="icon-wrapper">
						{#if disabled}
							<Visibility></Visibility>
						{:else}
							<VisibilityOff></VisibilityOff>
						{/if}
					</div>
					{disabled ? 'Enable' : 'Disable'}
				</button>
			{/if}
			{#if deleteElementCb}
				<button
					class="dropdown-button"
					on:click|stopPropagation={() => {
						deleteElementCb();
						closeCb();
					}}
				>
					<div class="icon-wrapper">
						<Trash></Trash>
					</div>
					Delete
				</button>
			{/if}
		</div>
	{/if}
{/if}

<style lang="scss">
	.dropdown-container {
		position: relative;
		display: inline-block;
	}

	.header-button {
		padding: 0 0.5em;
	}

	.dropdown-menu {
		position: absolute;
		margin-top: 4px;
		min-width: 160px;
		background-color: var(--panel-background-color);
		color: var(--text-primary-color);
		border: none;
		border-radius: 4px;
		box-shadow: 0 0.2rem 0.2rem #0003;
		z-index: 9999;
		pointer-events: auto;
	}

	.dropdown-button {
		width: 100%;
		text-align: left;
		border: none;
		background: none;
		padding: 0.5em 0.7em;
		line-height: 1;
		display: flex;
		align-items: center;
		white-space: nowrap;
		cursor: pointer;

		&:hover {
			background-color: var(--panel-radio-background-hover);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}

	.icon-wrapper {
		width: 1.5em;
		height: 1.5em;
		padding: 0.2rem;
	}
</style>
