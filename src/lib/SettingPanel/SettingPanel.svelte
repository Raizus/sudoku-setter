<script lang="ts">
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import GlobalConstraintsPanel from './GlobalConstraints/GlobalConstraintsPanel.svelte';
	import LocalElementsPanel from './LocalElements/LocalElementsPanel.svelte';
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
		<LocalElementsPanel elementHandlers={squareCellElementHandlers} />
		<ShapePanel elementHandlers={squareCellElementHandlers} />
		<OthersPanel />
	</div>
</div>

<style lang="scss">
	@use '$src/vars' as vars;

	.setting-panel-wrapper {
		display: flex;
		flex: 1 1 100%;
		max-width: 25%;
		flex-direction: column;
		max-height: calc(100vh - vars.$header-height);
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
