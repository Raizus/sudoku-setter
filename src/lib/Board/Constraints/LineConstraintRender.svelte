<script lang="ts">
	import { SHAPE_TYPES, type ShapeI } from '$src/lib/Puzzle/Shape/Shape';
	import type { Vector2D } from '$src/lib/utils/Vector2D';
	import LineRender from '../SvgComponents/LineRender.svelte';
	import LineWithCircleEndsToolRender from '../SvgComponents/LineWithCircleEndsToolRender.svelte';
	import LineWithPolygonEndsRender from '../SvgComponents/LineWithPolygonEndsRender.svelte';
	import ThermoRender from '../SvgComponents/ThermoRender.svelte';

	export let linePoints: Vector2D[];
	export let shape: ShapeI;

	$: type = shape?.type || SHAPE_TYPES.LINE;
</script>

{#if type === SHAPE_TYPES.LINE_WITH_CIRCLE_ENDS}
	<LineWithCircleEndsToolRender {linePoints} {shape} />
{:else if type === SHAPE_TYPES.LINE_WITH_POLYGON_ENDS}
	<LineWithPolygonEndsRender {linePoints} {shape} />
{:else if type === SHAPE_TYPES.THERMO_WITH_CIRCLE || type === SHAPE_TYPES.THERMO_WITH_POLYGON}
	<ThermoRender {linePoints} {shape} />
{:else}
	<LineRender {linePoints} {shape} />
{/if}
