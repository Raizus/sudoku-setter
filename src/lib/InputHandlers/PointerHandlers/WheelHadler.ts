import { pointerEventToVector2D } from '$input/PointerEventUtils';
import type { Vector2D } from '$src/lib/utils/Vector2D';

export interface WheelEventInfo {
	event: WheelEvent;
	point: Vector2D;
	ctrl: boolean;
    zoom_factor: number;
    delta: number
}

export function getWheelEventInfo(event: WheelEvent, svgRef: SVGSVGElement) {
	const point = pointerEventToVector2D(event, svgRef);
	if (!point) return;

	const ctrl = event.ctrlKey;
	const delta = -event.deltaY;
	const zoom_factor = delta > 0 ? 1.1 : 1 / 1.1; // Zoom in or out
	const event_info: WheelEventInfo = {
		event,
		point,
		ctrl,
        zoom_factor,
        delta
	};

	return event_info;
}
