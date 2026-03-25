<script lang="ts">
	import Panel from './Panel.svelte';
	import PanelHeader from './PanelHeader.svelte';

	export let title: string;
	let isOpen = true;

</script>

<Panel bind:isOpen>
	<svelte:fragment slot="panel-header">
		<PanelHeader {title} bind:isOpen>
			<slot name="title-icon" slot="title-icon" />
		</PanelHeader>
	</svelte:fragment>
	<svelte:fragment slot="panel-content">
		<slot name="panel-content" />
	</svelte:fragment>
</Panel>
