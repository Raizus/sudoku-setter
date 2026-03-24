<script lang="ts">
	import { gameModeStore } from '$stores/BoardStore';
	import { settingsStore } from '$stores/SettingsStore';
	import { stateStore } from '$stores/StateStore';
	import { GAME_MODE } from '../Types/types';
	import CellSolutionRender from './CellRender/CellSolutionRender.svelte';

	const solutionStore = stateStore.solutionStore;

	$: solution = $solutionStore;
    $: show_solution = $settingsStore.showSolution;
    $: game_mode = $gameModeStore;
</script>

{#if solution && show_solution && game_mode === GAME_MODE.SETTING}
	<g class="solution-layer">
		{#each solution as row, i}
			{#each row as val, j}
                <CellSolutionRender r={i} c={j} {val}/>
            {/each}
		{/each}
	</g>
{/if}
