<script lang="ts">
	import type { GridShape } from '../Types/types';

	export let grid_shape: GridShape;

	const bg_color = 'var(--grid-background-color)';
	const selection_color = 'var(--constraint-selected-color)';
</script>

<defs class="outline-filter-defs">
	<!-- bg outline only -->
	<filter
		id="filter-bg-only"
		filterUnits="userSpaceOnUse"
		x={-1}
		y={-1}
		width={grid_shape.nCols}
		height={grid_shape.nRows}
	>
		<feMorphology in="SourceAlpha" operator="dilate" radius="0.05" result="exp" />
		<feFlood flood-color={bg_color} result="col" />
		<feComposite in="col" in2="exp" operator="in" result="outline" />
		<feComposite in="SourceGraphic" in2="outline" operator="over" />
	</filter>

	<!-- selection outline only -->
	<filter
		id="filter-sel-only"
		filterUnits="userSpaceOnUse"
		x={-1}
		y={-1}
		width={grid_shape.nCols}
		height={grid_shape.nRows}
	>
		<feMorphology in="SourceAlpha" operator="dilate" radius="0.5" result="exp" />
		<feFlood flood-color={selection_color} result="col" />
		<feComposite in="col" in2="exp" operator="in" result="outline" />
		<feComposite in="SourceGraphic" in2="outline" operator="over" />
	</filter>

	<!-- both: bg outline (outer) + selection outline (inner) -->
	<filter
		id="filter-both"
		filterUnits="userSpaceOnUse"
		x={-1}
		y={-1}
		width={grid_shape.nCols}
		height={grid_shape.nRows}
	>
		<feMorphology in="SourceAlpha" operator="dilate" radius="0.05" result="bg-exp" />
		<feFlood flood-color={bg_color} result="bg-col" />
		<feComposite in="bg-col" in2="bg-exp" operator="in" result="bg-outline" />

		<feMorphology in="SourceAlpha" operator="dilate" radius="0.05" result="sel-exp" />
		<feFlood flood-color={selection_color} result="sel-col" />
		<feComposite in="sel-col" in2="sel-exp" operator="in" result="sel-outline" />

		<feMerge>
			<feMergeNode in="bg-outline" />
			<feMergeNode in="sel-outline" />
			<feMergeNode in="SourceGraphic" />
		</feMerge>
	</filter>
</defs>
