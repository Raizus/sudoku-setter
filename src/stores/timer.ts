import { writable } from 'svelte/store';

export function createStopwatchStore() {
	const { subscribe, set } = writable(0);

    const update_time_milliseconds = 100;
	let startTime: number = Date.now();
	let intervalId: number;
	let elapsedTime = 0;
	let isRunning = false;

	const start = () => {
		if (!isRunning) {
			isRunning = true;
			startTime = Date.now() - elapsedTime;
			intervalId = setInterval(() => {
				elapsedTime = Date.now() - startTime;
				set(elapsedTime);
			}, update_time_milliseconds);
		}
	};

	const stop = () => {
		if (isRunning) {
			isRunning = false;
			clearInterval(intervalId);
			elapsedTime = Date.now() - startTime;
		}
	};

	const reset = () => {
		isRunning = false;
		clearInterval(intervalId);
		elapsedTime = 0;
		set(0);
	};

	const getStatus = () => ({
		isRunning,
		elapsedTime
	});

	return {
		subscribe,
		start,
		stop,
		reset,
		getStatus
	};
}
