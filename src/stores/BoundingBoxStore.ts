import { derived, get, writable } from 'svelte/store';
import { elementsDictStore, gridStore, toolStore } from './BoardStore';
import type { Rectangle } from '$src/lib/Types/types';
import type { PointerEventInfo, WheelEventInfo } from '$input/PointerHandlers/WheelHandler';
import { getDefaultBoundingBox } from '$src/lib/Puzzle/BoardBoundingBox';

export function _updateBoundingBoxOnZoom(
	default_bbox: Rectangle,
	bbox: Rectangle,
	current_scale: number,
	wheel_event: WheelEventInfo
): Rectangle {
	const zoom_factor = wheel_event.zoom_factor;

	if (current_scale < 1) {
		// zooming out
		const centerX = bbox.x + bbox.width / 2;
		const centerY = bbox.y + bbox.height / 2;

		const newWidth = bbox.width / zoom_factor;
		const newHeight = bbox.height / zoom_factor;

		const newX = centerX - newWidth / 2;
		const newY = centerY - newHeight / 2;

		const new_bbox: Rectangle = {
			x: newX,
			y: newY,
			height: newHeight,
			width: newWidth
		};
		return new_bbox;
	} else if (current_scale > 1) {
		// zooming in;
		const newWidth = bbox.width / zoom_factor;
		const newHeight = bbox.height / zoom_factor;

		const min_x = default_bbox.x;
		const max_x = default_bbox.width;
		const min_y = default_bbox.y;
		const max_y = default_bbox.height;

		const curr_center_x = bbox.x + bbox.width / 2;
		const curr_center_y = bbox.y + bbox.height / 2;

		const new_center_x = (curr_center_x + wheel_event.point.x) / 2;
		const new_center_y = (curr_center_y + wheel_event.point.y) / 2;

		let new_x = new_center_x - newWidth / 2;
		let new_y = new_center_y - newHeight / 2;
		if (new_x < min_x) {
			new_x = min_x;
		}
		if (new_y < min_y) {
			new_y = min_y;
		}
		if (new_x + newWidth > max_x) {
			new_x = max_x - newWidth;
		}
		if (new_y + newHeight > max_y) {
			new_y = max_y - newHeight;
		}

		const new_bbox: Rectangle = {
			x: new_x,
			y: new_y,
			height: newHeight,
			width: newWidth
		};
		return new_bbox;
	}
	return bbox;
}

export function _updateBoundingBoxOnScroll(
	current_bbox: Rectangle,
	default_bbox: Rectangle,
	scale: number,
	wheel_event: WheelEventInfo
): Rectangle | undefined {
	if (wheel_event.ctrl) return;
	if (scale < 1) return;

	const delta = -(wheel_event.delta > 0 ? 1 : wheel_event.delta < 0 ? -1 : 0);
	const min_y = default_bbox.y;
	const max_y = min_y + default_bbox.height;

	const delta_y = 0.5 * delta * scale;

	// update y and height
	let new_y = current_bbox.y + delta_y;
	if (new_y < min_y) {
		new_y = min_y;
	}
	if (new_y + current_bbox.height > max_y) {
		new_y = max_y - current_bbox.height;
	}
	const new_bbox: Rectangle = {
		x: current_bbox.x,
		y: new_y,
		height: current_bbox.height,
		width: current_bbox.width
	};

	return new_bbox;
}

export function _updateBoundingBoxOnDrag(
	current_bbox: Rectangle,
	default_bbox: Rectangle,
	scale: number,
	event_info: PointerEventInfo
) {
	if (scale < 1) return;

	const delta_v = event_info.point;
	const min_x = default_bbox.x;
	const max_x = min_x + default_bbox.width;
	const min_y = default_bbox.y;
	const max_y = min_y + default_bbox.height;

	let new_x = current_bbox.x - ((0.012 * 1) / scale) * delta_v.x;
	let new_y = current_bbox.y - ((0.012 * 1) / scale) * delta_v.y;

	if (new_y < min_y) {
		new_y = min_y;
	}
	if (new_y + current_bbox.height > max_y) {
		new_y = max_y - current_bbox.height;
	}
	if (new_x < min_x) {
		new_x = min_x;
	}
	if (new_x + current_bbox.width > max_x) {
		new_x = max_x - current_bbox.width;
	}

	const new_bbox: Rectangle = {
		x: new_x,
		y: new_y,
		height: current_bbox.height,
		width: current_bbox.width
	};

	return new_bbox;
}

export const currentScaleStore = writable<number>(1);

export const defaultBoundingBoxStore = derived(
	[elementsDictStore, toolStore, gridStore],
	([$elementsDictStore, $toolStore, $gridStore]) => {
		return getDefaultBoundingBox($gridStore, $elementsDictStore, $toolStore);
	}
);

export const boundingBoxStore = writable<Rectangle>(get(defaultBoundingBoxStore));

export function updateBoundindBoxOnZoom(wheel_event: WheelEventInfo) {
	if (!wheel_event.ctrl) return;
	const current_scale = get(currentScaleStore);
	const min_zoom = 0.5;
	const max_zoom = 2;
	const zoom_factor = wheel_event.zoom_factor;
	let new_scale = current_scale * zoom_factor;

	// Apply min/max zoom constraints
	new_scale = Math.max(min_zoom, Math.min(max_zoom, new_scale));
	currentScaleStore.set(new_scale);
	if (new_scale === current_scale) return;

	const default_bbox = get(defaultBoundingBoxStore);
	boundingBoxStore.update((bbox) => {
		return _updateBoundingBoxOnZoom(default_bbox, bbox, new_scale, wheel_event);
	});
}

export function updateBoundingBoxOnScroll(wheel_event: WheelEventInfo) {
	const current_scale = get(currentScaleStore);
	const default_bbox = get(defaultBoundingBoxStore);
	const current_bbox = get(boundingBoxStore);

	const new_bbox = _updateBoundingBoxOnScroll(
		current_bbox,
		default_bbox,
		current_scale,
		wheel_event
	);
	if (!new_bbox) return;
	boundingBoxStore.set(new_bbox);
}

export function updateBoundingBoxOnDrag(event_info: PointerEventInfo) {
	const current_scale = get(currentScaleStore);
	const default_bbox = get(defaultBoundingBoxStore);
	const current_bbox = get(boundingBoxStore);

	const new_bbox = _updateBoundingBoxOnDrag(current_bbox, default_bbox, current_scale, event_info);
	if (!new_bbox) return;
	boundingBoxStore.set(new_bbox);
}
