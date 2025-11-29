<script lang="ts">
	import { onMount, tick } from 'svelte';

	export let open = false;
	export let buttonEl: HTMLButtonElement | undefined = undefined;

	let dropdownEl: HTMLDivElement;
	let portalContainer: HTMLElement;

	// Position state
	let dropdownPosition = { top: 0, left: 0, width: 0 };

	function updatePosition() {
		if (buttonEl && open) {
			const rect = buttonEl.getBoundingClientRect();
			const containerRect = portalContainer.getBoundingClientRect();

			dropdownPosition = {
				top: rect.bottom - containerRect.top + 4, // 4px gap
				left: rect.left - containerRect.left,
				width: Math.max(160, rect.width)
			};
		}
	}

	// Update position when buttonEl changes
	$: if (buttonEl && open) {
		updatePosition();
	}

	export async function toggle() {
		open = !open;
		if (open) {
			await tick(); // Wait for DOM update
			updatePosition();
		}
	}

	export function close() {
		open = false;
	}

	// Handle clicks outside the dropdown to close it
	function handleClickOutside(event: MouseEvent) {
		const target = event.target;
		if (
			open &&
			dropdownEl &&
			target &&
			!dropdownEl.contains(target as HTMLElement) &&
			buttonEl &&
			!buttonEl.contains(target as HTMLElement)
		) {
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
			close();
			return false;
		}
	}

	// Handle window resize and scroll
	function handleWindowEvents() {
		if (open) {
			updatePosition();
		}
	}

	onMount(() => {
		// Find the App element or fallback to body
		let parentDialog: HTMLDialogElement | null = null;
		if (buttonEl) {
			parentDialog = buttonEl.closest('dialog');
		}

		// If inside a dialog, append to the dialog; otherwise use App or body
		const appElement = parentDialog || document.getElementById('App') || document.body;

		// Create portal container
		portalContainer = document.createElement('div');
		portalContainer.style.position = 'absolute';
		portalContainer.style.top = '0';
		portalContainer.style.left = '0';
		portalContainer.style.bottom = '0';
		portalContainer.style.right = '0';
		portalContainer.style.zIndex = '9000';
		portalContainer.style.pointerEvents = 'none'; // Allow clicks to pass through container
		appElement.appendChild(portalContainer);

		// Add global event listeners
		document.addEventListener('click', handleClickOutside, { capture: true, passive: false });
		document.addEventListener('pointerdown', handleClickOutside, { capture: true, passive: false });
		window.addEventListener('resize', handleWindowEvents);
		window.addEventListener('scroll', handleWindowEvents, true);

		// Clean up on destroy
		return () => {
			document.removeEventListener('click', handleClickOutside, { capture: true });
			document.removeEventListener('pointerdown', handleClickOutside, { capture: true });
			window.removeEventListener('resize', handleWindowEvents);
			window.removeEventListener('scroll', handleWindowEvents, true);
			if (portalContainer && portalContainer.parentNode) {
				portalContainer.parentNode.removeChild(portalContainer);
			}
		};
	});

	// Reactive statement to render dropdown in portal
	$: if (portalContainer && dropdownEl) {
		if (open) {
			portalContainer.appendChild(dropdownEl);
		} else if (dropdownEl.parentNode === portalContainer) {
			portalContainer.removeChild(dropdownEl);
		}
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="popup-container" bind:this={dropdownEl}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="dropdown-menu"
			style="top: {dropdownPosition.top}px; left: {dropdownPosition.left}px; min-width: {dropdownPosition.width}px;"
		>
			<slot {close} />
		</div>
	</div>
{/if}

<style lang="scss">
	.popup-container {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
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
		z-index: inherit;
		pointer-events: auto;
	}
</style>
