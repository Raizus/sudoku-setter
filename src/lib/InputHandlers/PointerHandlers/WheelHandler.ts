import { pointerEventToVector2D } from '$input/PointerEventUtils';
import { Vector2D } from '$src/lib/utils/Vector2D';

export interface PointerEventInfo {
	event: PointerEvent;
	point: Vector2D;
}

export interface WheelEventInfo {
	event: WheelEvent;
	point: Vector2D;
	ctrl: boolean;
	zoom_factor: number;
	delta: number;
}

export function getWheelEventInfo(event: WheelEvent, svgRef: SVGSVGElement | null) {
	if (!svgRef) return;
	const point = pointerEventToVector2D(event, svgRef);
	if (!point) return;

	const ctrl = event.ctrlKey;
	const delta = -event.deltaY;
	const zoom_factor = delta > 0 ? 1.1 : delta < 0 ? 1 / 1.1 : 0; // Zoom in or out
	const event_info: WheelEventInfo = {
		event,
		point,
		ctrl,
		zoom_factor,
		delta
	};

	return event_info;
}

export class WheelHandler {
	onTap: null | (() => void) = null;
	onDragStart: null | ((event_info: PointerEventInfo) => void) = null;
	onDrag: null | ((event_info: PointerEventInfo) => void) = null;
	onDragEnd: null | (() => void) = null;
	onMove: null | (() => void) = null;
	onWheel: null | ((wheel_info: WheelEventInfo) => void) = null;

	private _isDown = false;
	private _lastPoint: Vector2D | null = null;

	constructor() {}

	pointerDown(event: PointerEvent, svgRef: SVGSVGElement | null): void {
		// Check middle click
		if (event.button !== 1) return;
		if (!svgRef) return;

		// const point = pointerEventToVector2D(event, svgRef);
		const point = new Vector2D(event.clientX, event.clientY);
		if (!point) return;

		this._isDown = true;
		this._lastPoint = point;

		// Call onDragStart if it exists
		if (this.onDragStart) {
			const event_info: PointerEventInfo = {
				event,
				point
			};
			this.onDragStart(event_info);
		}
	}

	pointerMove(event: PointerEvent, svgRef: SVGSVGElement | null): void {
		if (!this._isDown) return;
		if (!svgRef) return;

		// const point = pointerEventToVector2D(event, svgRef);
		const point = new Vector2D(event.clientX, event.clientY);
		if (!point || !this._lastPoint) return;

		const delta_v = point.subtract(this._lastPoint);

		const event_info: PointerEventInfo = {
			event,
			point: delta_v
		};

		this._lastPoint = point;
		if (this.onDrag) this.onDrag(event_info);
	}

	pointerUp(event: PointerEvent) {
		// Only process middle-click releases
		if (event.button !== 1) return;

		if (this._isDown) {
			this._isDown = false;

			// Call onDragEnd if it exists
			if (this.onDragEnd) {
				this.onDragEnd();
			}
		}

		this._lastPoint = null;
	}

	wheel(event: WheelEvent, svgRef: SVGSVGElement | null): void {
		const wheel_info = getWheelEventInfo(event, svgRef);
		if (!wheel_info) return;
		if (this.onWheel) this.onWheel(wheel_info);
	}
}
