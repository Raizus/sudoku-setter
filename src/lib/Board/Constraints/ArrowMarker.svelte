<script lang="ts">
    export let l = 0.2;
    export let id: string;
    export let strokeWidth: number;
    export let stroke: string = "black";

    const a = 0.5;
	const markerPath = `M${a - l},${a - l} L${a},${a} L${a - l},${a + l}`;
</script>

<marker
	id="{id}"
	markerUnits="userSpaceOnUse"
	viewBox={`0 0 1 1`}
	refX={a}
	refY={a}
	markerWidth={1}
	markerHeight={1}
	orient="auto"
>
	<path d={markerPath} fill="none" stroke-width={strokeWidth} {stroke} stroke-linejoin="miter" stroke-linecap='round'/>
</marker>