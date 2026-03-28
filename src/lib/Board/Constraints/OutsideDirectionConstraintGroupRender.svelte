<script lang="ts">
	import type { OutsideDirectionToolI } from '$src/lib/Puzzle/puzzle_schema';
	import OutsideDirectionToolRenderAux from './OutsideDirectionToolRenderAux.svelte';

	export let tool: OutsideDirectionToolI;
	export let c_id: string | undefined = undefined;
</script>


<g class="outside-direction-constraint" id={`c-${c_id}`} data-id={`${c_id}`}>
	<OutsideDirectionToolRenderAux {tool} {c_id} />
</g>