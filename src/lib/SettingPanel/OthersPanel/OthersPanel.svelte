<script lang="ts">
	import { stateStore } from '$stores/StateStore';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
	import Panel from '../Subpanel/Panel.svelte';

	let isOpen = false;

	function setSolution() {
		stateStore.setSolutionFromGridValues();
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Other Tools" bind:isOpen />
	<svelte:fragment slot="panel-content">
		<button
			class="panel-button"
			on:click={setSolution}
			title="Set current cell values as the puzzle solution"
		>
			Set Solution
		</button>
	</svelte:fragment>
</Panel>

