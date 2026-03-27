<script lang="ts">
	import type { GridShape } from '../Types/types';

	export let grid_shape: GridShape;

	const bg_color = 'var(--grid-background-color)';
	const selection_color = 'var(--constraint-selected-color)';
	const x = -1;
	const y = -1;
	const width = grid_shape.nCols + 1;
	const height = grid_shape.nRows + 1;
    const stdDeviation = 0.02;
</script>

<defs class="outline-filter-defs">
	<!-- bg outline only -->
	<filter
		id="filter-bg-only"
		filterUnits="userSpaceOnUse"
		primitiveUnits="userSpaceOnUse"
		{x}
		{y}
		{width}
		{height}
	>
		<feGaussianBlur in="SourceAlpha" {stdDeviation} result="blurred" />
		<!-- Threshold the blur back to a hard edge -->
		<feComponentTransfer in="blurred" result="exp">
			<feFuncA type="linear" slope="20" intercept="0" />
		</feComponentTransfer>
		<!-- Color it -->
		<feFlood flood-color={bg_color} result="col" />
		<feComposite in="col" in2="exp" operator="in" result="outline" />
		<!-- Paint original on top -->
		<feComposite in="SourceGraphic" in2="outline" operator="over" />
	</filter>

	<!-- selection outline only -->
	<filter id="filter-sel-only" filterUnits="userSpaceOnUse" {x} {y} {width} {height}>
		<feGaussianBlur in="SourceAlpha" {stdDeviation} result="blurred" />
		<!-- Threshold the blur back to a hard edge -->
		<feComponentTransfer in="blurred" result="exp">
			<feFuncA type="linear" slope="20" intercept="0" />
		</feComponentTransfer>
		<!-- Color it -->
		<feFlood flood-color={selection_color} result="col" />
		<feComposite in="col" in2="exp" operator="in" result="outline" />
		<!-- Paint original on top -->
		<feComposite in="SourceGraphic" in2="outline" operator="over" />
    </filter>

	<!-- both: bg outline (outer) + selection outline (inner) -->
	<filter id="filter-both" filterUnits="userSpaceOnUse" {x} {y} {width} {height}>
		<feGaussianBlur in="SourceAlpha" {stdDeviation} result="bg-blurred" />
		<feComponentTransfer in="bg-blurred" result="bg-exp">
			<feFuncA type="linear" slope="20" intercept="0" />
		</feComponentTransfer>
		<feFlood flood-color={bg_color} result="bg-col" />
		<feComposite in="bg-col" in2="bg-exp" operator="in" result="bg-outline" />

		<!-- selection outline (inner, blue, smaller blur) -->
		<feGaussianBlur in="SourceAlpha" {stdDeviation} result="sel-blurred" />
		<feComponentTransfer in="sel-blurred" result="sel-exp">
			<feFuncA type="linear" slope="20" intercept="0" />
		</feComponentTransfer>
		<feFlood flood-color={selection_color} result="sel-col" />
		<feComposite in="sel-col" in2="sel-exp" operator="in" result="sel-outline" />

		<feMerge>
			<feMergeNode in="bg-outline" />
			<feMergeNode in="sel-outline" />
			<feMergeNode in="SourceGraphic" />
		</feMerge>
	</filter>
</defs>
