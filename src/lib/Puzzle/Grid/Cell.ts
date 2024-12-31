import type { GridCoordI } from '$lib/utils/SquareCellGridCoords';
import { TOOLS, type TOOLID } from '../Tools';
import { getRegionIndex } from './gridSizes';

export interface CellRecord {
	outside?: boolean;
	value?: number;
	given?: boolean;
	fog?: boolean;
	centerMarks?: number[];
	cornerMarks?: number[];
	highlights?: number[];
	region?: number | null;
}

export interface CellI {
	r: number;
	c: number;
	outside: boolean;
	value: number | null;
	given: boolean;
	centerMarks: number[];
	cornerMarks: number[];
	highlights: number[];
	region: number | null;

	formatCell: () => string;
}

function enterArray(values: number[], newValue: number | null): number[] {
	if (newValue === null) return [];
	const newArray = [...values];
	const idx = values.findIndex((a) => a === newValue);

	if (idx === -1) {
		newArray.push(newValue);
		newArray.sort();
		return newArray;
	}

	newArray.splice(idx, 1);
	return newArray;
}

export class Cell implements CellI {
	r: number;
	c: number;
	outside: boolean = false;
	value: number | null = null;
	given: boolean = false;
	region: number | null = null;
	centerMarks: number[] = [];
	cornerMarks: number[] = [];
	highlights: number[] = [];
	fog: boolean = false;

	constructor(r: number, c: number) {
		this.r = r;
		this.c = c;
	}

	formatCell(): string {
		return `R${this.r + 1}C${this.c + 1}`;
	}

	enterGiven(value: number | null, clear: boolean): void {
		if (value === null || (clear && value === this.value && this.given)) {
			this.value = null;
			this.given = false;
			return;
		}
		this.value = value;
		this.given = true;
	}

	enterValue(value: number | null, clear: boolean): void {
		// cell value is given but value is not => do nothing
		if (this.given) return;

		// clear value
		if (value === null || (clear && value === this.value)) {
			this.value = null;
			return;
		}
		this.value = value;
	}

	enterRegion(region: number | null): void {
		this.region = region;
		if (region !== null) this.outside = false;
	}

	enterCenterPM(value: number | null): void {
		if (this.value) return;
		this.centerMarks = enterArray(this.centerMarks, value);
	}

	enterCornerPM(value: number | null): void {
		if (this.value) return;
		this.cornerMarks = enterArray(this.cornerMarks, value);
	}

	enterHighlight(value: number | null): void {
		this.highlights = enterArray(this.highlights, value);
	}

	enterFog(value: boolean): void {
		this.fog = value;
	}

	enterCell(value: number | null, tool: TOOLID, clear = false): void {
		if (tool === TOOLS.GIVEN) {
			this.enterGiven(value, clear);
		} else if (tool === TOOLS.DIGIT) {
			this.enterValue(value, clear);
		} else if (tool === TOOLS.CORNER_PM) {
			this.enterCornerPM(value);
		} else if (tool === TOOLS.CENTER_PM) {
			this.enterCenterPM(value);
		} else if (tool === TOOLS.HIGHLIGHTS) {
			this.enterHighlight(value);
		} else if (tool === TOOLS.REGIONS) {
			this.enterRegion(value);
		}
	}

	toJson(g_size: number | null) {
		const cellRecord: CellRecord = {};

		if (this.given) {
			cellRecord.given = this.given;
		}

		if (this.value !== null) {
			cellRecord.value = this.value;
		}

		if (this.region !== getRegionIndex(this.r, this.c, g_size))
			cellRecord['region'] = this.region;

		if (this.fog) {
			cellRecord.fog = this.fog;
		}

		if (this.cornerMarks.length) {
			cellRecord.cornerMarks = this.cornerMarks;
		}

		if (this.centerMarks.length) {
			cellRecord.centerMarks = this.centerMarks;
		}

		if (this.highlights.length) {
			cellRecord.highlights = this.highlights;
		}

		return cellRecord;
	}

	toCoords(): GridCoordI {
		const coords: GridCoordI = {
			r: this.r,
			c: this.c
		};
		return coords;
	}
}
