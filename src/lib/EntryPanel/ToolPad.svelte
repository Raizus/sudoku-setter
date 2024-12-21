<script lang="ts">
	import Colors from '$icons/Colors.svelte';
	import Pen from '$icons/Pen.svelte';
	import { TOOLS, type TOOLID } from '$lib/Puzzle/Tools';
	import { settingsStore } from '$stores/SettingsStore';
	// import { settingsStore } from '$stores/SettingsStore';
	import ToolButton from './ToolButton.svelte';

	export let selectedTool: TOOLID;
</script>

<div class="tool-pad">
	<ToolButton value={TOOLS.DIGIT} bind:selectedTool title="Digit">
		<span aria-hidden="true">1</span>
	</ToolButton>
	<ToolButton value={TOOLS.CORNER_PM} bind:selectedTool title="Corner Pencilmarks">
		<span aria-hidden="true" style="font-size: 50%">
			<span aria-hidden="true" style="position: absolute; top: 5%; left:15%">1</span>
			<span aria-hidden="true" style="position: absolute; top: 5%; right:15%">2</span>
			<span aria-hidden="true" style="position: absolute; bottom: 5%; left:15%">3</span>
		</span>
	</ToolButton>
	<ToolButton value={TOOLS.CENTER_PM} bind:selectedTool title="Center Pencilmarks">
		<span aria-hidden="true" style="font-size: 50%">123</span>
	</ToolButton>
	<ToolButton value={TOOLS.HIGHLIGHTS} bind:selectedTool title="Highlights">
		<div class="icon-wrapper">
			<Colors />
		</div>
	</ToolButton>
	{#if $settingsStore.penToolActive}
		<ToolButton value={TOOLS.PEN_TOOL} bind:selectedTool title="Pen Tool">
			<div class="icon-wrapper">
				<Pen />
			</div>
		</ToolButton>
	{/if}
</div>

<style lang="scss">
	$button-size: var(--entry-panel-button-size);
	$button-gap: var(--entry-panel-button-gap);

	.tool-pad {
		display: grid;
		grid-auto-columns: $button-size;
		grid-template-rows: repeat(4, $button-size);
		grid-auto-flow: column;
		gap: $button-gap;
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		width: 80%;
		height: 80%;
	}
</style>
