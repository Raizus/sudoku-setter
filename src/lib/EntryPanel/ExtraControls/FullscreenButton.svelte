<script lang="ts">
	import Fullscreen from '$icons/Fullscreen.svelte';
	import FullscreenExit from '$icons/FullscreenExit.svelte';
	import ExtraControlButton from './ExtraControlButton.svelte';

	let fullscreenOn = false;

	function isFullscreen() {
		return document.fullscreenElement != null;
	}

	function requestFullscreen() {
		const docEl = document.documentElement;
		docEl.requestFullscreen();
	}

	function exitFullscreen() {
		document.exitFullscreen();
	}

	function toggleFullscreen() {
		isFullscreen() ? exitFullscreen() : requestFullscreen();
		fullscreenOn = !fullscreenOn;
	}
</script>

<ExtraControlButton title="Fullscreen" clickCb={toggleFullscreen}>
	{#if fullscreenOn}
		<FullscreenExit />
	{:else}
		<Fullscreen />
	{/if}
</ExtraControlButton>
