<script lang="ts">
	import CellMarkersRender from './CellMarkersRender.svelte';
	import DraftLineRender from './DraftLineRender.svelte';
	import EdgeMarkersRender from './EdgeMarkersRender.svelte';
	import LineMarkersRender from './LineMarkersRender.svelte';
	import { stateStore } from '$stores/StateStore.js';

	const penToolStore = stateStore.penToolStore;

	$: draftLineMarker = {
		draftLine: $penToolStore.draftLine,
		mode: $penToolStore.mode
	};
</script>

<g class="pen-tool">
	<LineMarkersRender lineMarkers={$penToolStore.lineMarkers} />
	<EdgeMarkersRender markers={$penToolStore.edgeMarkers} />
	<CellMarkersRender markers={$penToolStore.cellMarkers} />
	<DraftLineRender {draftLineMarker} />
</g>
