<script lang="ts">
		import { penToolStore } from '$stores/PenToolStore';
	import CellMarkersRender from './CellMarkersRender.svelte';
	import DraftLineRender from './DraftLineRender.svelte';
	import EdgeMarkersRender from './EdgeMarkersRender.svelte';
	import LineMarkersRender from './LineMarkersRender.svelte';

    $: draftLineMarker = {
        draftLine: $penToolStore.draftLine,
        mode: $penToolStore.mode
    }
</script>

<g class="pen-tool">
    <LineMarkersRender lineMarkers={$penToolStore.lineMarkers} />
	<EdgeMarkersRender markers={$penToolStore.edgeMarkers} />
    <CellMarkersRender markers={$penToolStore.cellMarkers} />
    <DraftLineRender draftLineMarker={draftLineMarker} />
</g>
