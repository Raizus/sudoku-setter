<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import CosmeticToolsPanel from './CosmeticTools/CosmeticToolsPanel.svelte';
	import GlobalConstraintsPanel from './GlobalConstraints/GlobalConstraintsPanel.svelte';
	import LocalConstraintsPanel from './LocalConstraints/LocalConstraintsPanel.svelte';
	import ShapePanel from './ShapeEditor/ShapePanel.svelte';
	import MenuPanel from './MenuPanel/MenuPanel.svelte';
	import OthersPanel from './OthersPanel/OthersPanel.svelte';
	import SolverPanel from './SolverPanel/SolverPanel.svelte';
</script>

<div class="setting-panel-wrapper">
	<div class="setting-panel">
		<MenuPanel />
		<SolverPanel />
		<GlobalConstraintsPanel elementHandlers={squareCellElementHandlers} />
		<LocalConstraintsPanel elementHandlers={squareCellElementHandlers} />
		<CosmeticToolsPanel elementHandlers={squareCellElementHandlers} />
		<ShapePanel elementHandlers={squareCellElementHandlers} />
		<OthersPanel />
	</div>
</div>

<style lang="scss">
	@use '$src/vars' as vars;

	.setting-panel-wrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
		align-items: flex-start;
	}

	@include vars.breakpoint-mobile {
		.setting-panel-wrapper {
			display: none;
		}
	}

	.setting-panel {
		align-self: flex-end;
		display: flex;
		flex-direction: column;
		gap: 5px;
		min-width: 300px;
		overflow-y: scroll;
		margin-top: 2rem;
		margin-bottom: 2rem;
		padding: 0.5rem;
	}
</style>
