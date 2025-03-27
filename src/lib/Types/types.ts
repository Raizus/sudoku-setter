export interface GridShape {
	nRows: number;
	nCols: number;
}

export interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface CommandI {
	execute: () => void;
	unExecute: () => void;
}

export enum GAME_MODE {
	SETTING,
	SOLVING,
}

export interface PuzzleInfo {
	id: string;
	title: string;
	authors: string[];
	description: string;
	thumbnail: string;
	difficulty?: string;
}