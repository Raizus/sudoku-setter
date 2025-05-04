<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import GlobalConstraintsPanel from './GlobalConstraints/GlobalConstraintsPanel.svelte';
	import LocalElementsPanel from './LocalElements/LocalElementsPanel.svelte';
	import ShapePanel from './ShapeEditor/ShapePanel.svelte';
	import MenuPanel from './MenuPanel/MenuPanel.svelte';
	import OthersPanel from './OthersPanel/OthersPanel.svelte';
	import SolverPanel from './SolverPanel/SolverPanel.svelte';
</script>

<div class="setting-panel">
	<MenuPanel />
	<div class="container">
		<SolverPanel />
		<!-- <GlobalConstraintsPanel elementHandlers={squareCellElementHandlers} /> -->
		<LocalElementsPanel elementHandlers={squareCellElementHandlers} />
		<ShapePanel elementHandlers={squareCellElementHandlers} />
		<OthersPanel />
	</div>
</div>

<style lang="scss">
	@use '$src/vars' as vars;

	.setting-panel {
		position: absolute;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 5px;
	}

	.container {
		flex: 1;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		gap: 5px;
		padding-right: 0.5rem;
	}

	@include vars.breakpoint-mobile {
		.setting-panel {
			display: none;
		}
	}
</style>
