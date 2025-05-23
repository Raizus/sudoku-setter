<script lang="ts">
	import {
		editableShapeToShape,
		type EditableShapeI,
		type ShapeI,
		shapeHasEditableProps,
		SHAPE_TYPES
	} from '$lib/Puzzle/Shape/Shape';
	import { toolStore, currentConstraintStore, updateCurrentConstraintShape } from '$stores/BoardStore';
	import PropertyBlock from './PropertyBlock.svelte';
	import SliderBlock from './SliderBlock.svelte';
	import ShapeRadioBlock from './ShapeRadioBlock.svelte';

	import Brush from '$icons/Brush.svelte';
	import Panel from '../Subpanel/Panel.svelte';
	import PanelHeader from '../Subpanel/PanelHeader.svelte';
		import type { ConstraintType } from '$src/lib/Puzzle/puzzle_schema';
	import { getToolInfo, type AbstractElementHandlers } from '$lib/Puzzle/ElementHandlersUtils';
	import ColorPicker from '$components/ColorPicker.svelte';

	let isOpen = true;
	export let elementHandlers: AbstractElementHandlers;

	function getShape(
		currentConstraint: ConstraintType | null,
		eShape?: EditableShapeI
	): ShapeI | undefined {
		const _shape = currentConstraint?.shape ?? (eShape ? editableShapeToShape(eShape) : undefined);
		updateCurrentConstraintShape(_shape);
		return _shape;
	}

	$: elementInfo = getToolInfo($toolStore, elementHandlers);
	$: editableShape = elementInfo.shape;
	$: shape = getShape($currentConstraintStore?.constraint ?? null, editableShape);

	// $: console.log($toolStore, shape);

	function updateShape<K extends keyof ShapeI>(key: K, value: ShapeI[K]) {
		if (!shape) return;
		shape[key] = value;
		updateCurrentConstraintShape(shape);
		// console.log(shape);
	}

	function resetShape() {
		if (!editableShape) return;
		shape = editableShapeToShape(editableShape);
		updateCurrentConstraintShape(shape);
	}

	function shapeHasR(shapeType: SHAPE_TYPES | undefined) {
		return (
			shapeType &&
			[
				SHAPE_TYPES.CIRCLE,
				SHAPE_TYPES.SQUARE,
				SHAPE_TYPES.POLYGON,
				SHAPE_TYPES.LINE_WITH_POLYGON_ENDS
			].includes(shapeType)
		);
	}

	function shapeHasN(shapeType: SHAPE_TYPES | undefined) {
		return (
			shapeType && [SHAPE_TYPES.POLYGON, SHAPE_TYPES.LINE_WITH_POLYGON_ENDS].includes(shapeType)
		);
	}

	function shapeHasWH(shapeType: SHAPE_TYPES | undefined) {
		return shapeType && [SHAPE_TYPES.ELLIPSE, SHAPE_TYPES.RECTANGLE].includes(shapeType);
	}
</script>

<Panel bind:isOpen>
	<PanelHeader slot="panel-header" title="Shape Editor" bind:isOpen>
		<Brush slot="title-icon" />
	</PanelHeader>
	<svelte:fragment slot="panel-content">
		{#if editableShape}
			{#if shapeHasEditableProps(editableShape)}
				<button class="reset-shape" on:click={resetShape}>Reset to default</button>
			{/if}
			{#if editableShape.allowedTypes && editableShape.allowedTypes.length && shape?.type}
				<ShapeRadioBlock
					possibleShapes={editableShape.allowedTypes}
					name="Shape"
					selectedShape={shape.type}
					updateShapeCb={(shape) => updateShape('type', shape)}
				/>
			{/if}
			{#if shape?.n !== undefined && editableShape?.n?.editable && shapeHasN(shape.type)}
				<SliderBlock
					name="Number of Sides"
					value={shape.n}
					min={editableShape.n.lb ?? 3}
					max={editableShape.n.ub ?? 10}
					step={1}
					onChangeCb={(val) => updateShape('n', val)}
				/>
			{/if}
			{#if shape?.r !== undefined && editableShape?.r?.editable && shapeHasR(shape.type)}
				<SliderBlock
					name="Radius"
					value={shape.r}
					min={editableShape.r.lb ?? 0}
					max={editableShape.r.ub ?? 1}
					step={editableShape.r.step ?? 0.05}
					onChangeCb={(val) => updateShape('r', val)}
				/>
			{/if}
			{#if shape?.width !== undefined && editableShape?.width?.editable && shapeHasWH(shape.type)}
				<SliderBlock
					name="Width"
					value={shape.width}
					min={editableShape.width.lb ?? 0}
					max={editableShape.width.ub ?? 1}
					step={editableShape.width.step ?? 0.05}
					onChangeCb={(val) => updateShape('width', val)}
				/>
			{/if}
			{#if shape?.height !== undefined && editableShape?.height?.editable && shapeHasWH(shape.type)}
				<SliderBlock
					name="Height"
					value={shape.height}
					min={editableShape.height.lb ?? 0}
					max={editableShape.height.ub ?? 1}
					step={editableShape.height.step ?? 0.05}
					onChangeCb={(val) => updateShape('height', val)}
				/>
			{/if}
			{#if shape?.angle !== undefined && editableShape?.angle?.editable}
				<SliderBlock
					name="Angle"
					value={shape.angle}
					min={editableShape.angle.lb ?? 0}
					max={editableShape.angle.ub ?? 360}
					step={editableShape.angle.step ?? 15}
					onChangeCb={(val) => updateShape('angle', val)}
				/>
			{/if}
			{#if shape?.inset !== undefined && editableShape?.inset?.editable}
				<SliderBlock
					name="Inset"
					value={shape.inset}
					min={editableShape.inset.lb ?? 0}
					max={editableShape.inset.ub ?? 0.5}
					step={editableShape.inset.step ?? 0.01}
					onChangeCb={(val) => updateShape('inset', val)}
				/>
			{/if}
			{#if shape?.stroke !== undefined && editableShape?.stroke?.editable}
				<PropertyBlock name="Stroke">
					<ColorPicker value={shape.stroke} onChangeCb={(val) => updateShape('stroke', val)} />
				</PropertyBlock>
			{/if}
			{#if shape?.strokeWidth !== undefined && editableShape?.strokeWidth?.editable}
				<SliderBlock
					name="Stroke Width"
					value={shape.strokeWidth}
					min={editableShape.strokeWidth.lb ?? 0}
					max={editableShape.strokeWidth.ub ?? 0.8}
					step={editableShape.strokeWidth.step ?? 0.01}
					onChangeCb={(val) => updateShape('strokeWidth', val)}
				/>
			{/if}
			{#if shape?.strokeDasharray !== undefined && editableShape?.strokeDasharray?.editable}
				<SliderBlock
					name="Stroke Dasharray"
					value={shape.strokeDasharray}
					min={editableShape.strokeDasharray.lb ?? 0}
					max={editableShape.strokeDasharray.ub ?? 1}
					step={editableShape.strokeDasharray.step ?? 0.01}
					onChangeCb={(val) => updateShape('strokeDasharray', val)}
				/>
			{/if}
			<!-- {#if shape?.strokeDashoffset !== undefined && editableShape?.strokeDashoffset?.editable}
				<SliderBlock
					name="Stroke Dashoffset"
					value={shape.strokeDashoffset}
					min={editableShape.strokeDashoffset.lb ?? 0}
					max={editableShape.strokeDashoffset.ub ?? 1}
					step={editableShape.strokeDashoffset.step ?? 0.01}
					onChangeCb={(val) => updateShape('strokeDashoffset', val)}
				/>
			{/if} -->
			{#if shape?.fill !== undefined && editableShape?.fill?.editable}
				<PropertyBlock name="Fill">
					<ColorPicker value={shape.fill} onChangeCb={(val) => updateShape('fill', val)} />
				</PropertyBlock>
			{/if}
			{#if shape?.fontColor !== undefined && editableShape?.fontColor?.editable}
				<PropertyBlock name="Font Color">
					<ColorPicker value={shape.fontColor} onChangeCb={(val) => updateShape('fontColor', val)} />
				</PropertyBlock>
			{/if}
		{/if}
	</svelte:fragment>
</Panel>

<style lang="scss">
	.reset-shape {
		background-color: var(--button-hover-background-color);
		border-radius: 5px;
		border: 1px solid transparent;
		height: 2rem;
		cursor: pointer;

		&:active {
			border-color: var(--panel-radio-border-active);
		}

		&:hover {
			background-color: var(--button2-hover-background-color);
		}

		&:focus {
			outline: transparent;
			box-shadow: var(--focus-shadow);
		}
	}
</style>
