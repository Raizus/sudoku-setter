<script lang="ts">
	import { isCellInputTool } from '$lib/Puzzle/Tools';
	import { getCagePathStr } from '$lib/utils/SquareCellGridRenderUtils';
	import { toolStore } from '$stores/BoardStore';
	import { selectionStore } from '$stores/SelectionStore';
	import { settingsStore } from '$stores/SettingsStore';
	import type { GridShape } from '../Types/types';

	export let gridShape: GridShape;

	const inset = 0.1;
	const innerRadius = 0.05;
	const innerOpacity = '#080808';
	const outlineOpacity = '#b2b2b2';

	$: selection = $selectionStore.cells;
	$: fillPathStr = getCagePathStr(selection, 0);
	$: maskPathStr = getCagePathStr(selection, inset);

	$: showSelection = isCellInputTool($toolStore);

	$: selection_color = $settingsStore.selection_color;
</script>

<g class="selection-layer" visibility={showSelection ? 'visible' : 'hidden'}>
	<filter id="selection-blur">
		<feGaussianBlur in="SourceGraphic" stdDeviation={innerRadius} />
		<feComponentTransfer>
			<feFuncR type="identity" />
			<feFuncG type="identity" />
			<feFuncB type="identity" />
			<feFuncA type="linear" slope="20" intercept="-9.5" />
		</feComponentTransfer>
	</filter>
	<mask
		id="selection-mask"
		maskUnits="userSpaceOnUse"
		x={0}
		y={0}
		width={gridShape.nCols}
		height={gridShape.nRows}
	>
		<rect x={0} y={0} width={gridShape.nCols} height={gridShape.nRows} fill={outlineOpacity} />
		<path d={maskPathStr} fill={innerOpacity} stroke="none" filter="url(#selection-blur)" />
	</mask>
	<path class="selection" d={fillPathStr} mask="url(#selection-mask)" fill={selection_color}/>
</g>

<style>
	.selection {
		stroke: none;
	}
</style>
