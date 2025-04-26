<script lang="ts">
	import { SHAPE_TYPES, defaultEdgeCircleShape } from '$lib/Puzzle/Shape/Shape';
	import { getDefaultShape } from '$lib/Puzzle/ElementHandlersUtils';
	import { squareCellElementHandlers } from '$src/lib/Puzzle/ElementsInfo/SquareCellElementHandlers';
	import type { CenterCornerOrEdgeToolI } from '$src/lib/Puzzle/Constraints/CenterCornerOrEdgeConstraints';
	import RenderShape from '$components/SvgRender/RenderShape.svelte';
	import CellTextLabelRender from './CellTextLabelRender.svelte';
	import { currentConstraintStore } from '$stores/BoardStore';

	export let tool: CenterCornerOrEdgeToolI;
	export let c_id: string | undefined = undefined;

	$: currentConstraintId = $currentConstraintStore?.id;

	$: defaultShape =
		getDefaultShape(tool.toolId, squareCellElementHandlers) ??
		defaultEdgeCircleShape;
	$: shape = tool.shape ?? defaultShape;

	$: selectedOutlineShape = {
		...shape,
		stroke: 'var(--constraint-selected-color)',
		strokeWidth: shape.strokeWidth ? shape.strokeWidth + 0.07 : 0.07
	};

	$: center = tool.cell;
	$: type = shape?.type || SHAPE_TYPES.CIRCLE;
	$: fontSize = shape?.fontSize ?? 0.2;
	$: fontColor = shape?.fontColor ?? 'black';

	$: isCellCenter = center.r % 1 === 0.5 && center.c % 1 === 0.5;

	function getText(tool: CenterCornerOrEdgeToolI, type: SHAPE_TYPES): string {
		if (type === SHAPE_TYPES.TEXT_ONLY) {
			return tool.value ? tool.value : '-';
		}
		return tool.value ?? '';
	}
</script>

{#if c_id === currentConstraintId}
    <RenderShape cx={center.c} cy={center.r} shape={selectedOutlineShape}  />
{/if}
<RenderShape cx={center.c} cy={center.r} {shape} />
{#if isCellCenter}
    <CellTextLabelRender
        value = {getText(tool, type)}
        x={Math.floor(center.c)}
        y={Math.floor(center.r)}
        position="TL"
        {fontColor}
    />
{:else}
    <text
        x={center.c}
        y={center.r}
        text-anchor="middle"
        dominant-baseline="central"
        font-size={fontSize}
        fill={fontColor}
    >
        {getText(tool, type)}
    </text>
{/if}
