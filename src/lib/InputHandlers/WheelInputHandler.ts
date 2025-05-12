import type { InputHandler } from '$src/lib/InputHandlers/InputHandler';
import { throttle } from 'lodash';
import {
	WheelHandler,
	type PointerEventInfo,
	type WheelEventInfo
} from '$input/PointerHandlers/WheelHandler';
import {
	updateBoundindBoxOnZoom,
	updateBoundingBoxOnDrag,
	updateBoundingBoxOnScroll
} from '$stores/BoundingBoxStore';

const wheelInputHandler = new WheelHandler();

export function getWheelInputHandler(svgRef: SVGSVGElement | null): InputHandler {
	wheelInputHandler.onDrag = (event: PointerEventInfo): void => {
		updateBoundingBoxOnDrag(event);
	};

	wheelInputHandler.onWheel = (wheel_info: WheelEventInfo): void => {
		updateBoundindBoxOnZoom(wheel_info);
		updateBoundingBoxOnScroll(wheel_info);
	};

	// Use a higher quality smoothing with requestAnimationFrame instead of throttle
	let rafId: number | null = null;
	let lastEvent: PointerEvent | null = null;

	const processPointerMove = () => {
		if (lastEvent && svgRef) {
			wheelInputHandler.pointerMove(lastEvent, svgRef);
			lastEvent = null;
		}
		rafId = null;
	};

	const smoothMove = (event: PointerEvent) => {
		lastEvent = event;
		if (rafId === null) {
			rafId = requestAnimationFrame(processPointerMove);
		}
	};

	const throttledMove = throttle((event: PointerEvent) => {
		wheelInputHandler.pointerMove(event, svgRef);
	}, 10);

	const inputHandler: InputHandler = {
		pointerDown(event: PointerEvent): void {
			if (event.button === 1) {
				// Prevent default browser behavior for middle mouse button
				event.preventDefault();
			}
			wheelInputHandler.pointerDown(event, svgRef);
		},
		pointerMove(event: PointerEvent): void {
			throttledMove(event);
			// smoothMove(event);
		},
		pointerUp(event: PointerEvent): void {
			wheelInputHandler.pointerUp(event);
		},
		keyUp() {},
		keyDown() {},
		wheelEvent(event: WheelEvent) {
			wheelInputHandler.wheel(event, svgRef);
		}
	};

	return inputHandler;
}
