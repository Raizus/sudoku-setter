export interface Point {
    x: number;
    y: number;
}

export class Vector2D implements Point{
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
    }
    
    equals(other: Vector2D): boolean {
        return this.x === other.x && this.y == other.y;
    }

	add(other: Vector2D): Vector2D {
		return new Vector2D(this.x + other.x, this.y + other.y);
	}

	subtract(other: Vector2D): Vector2D {
		return new Vector2D(this.x - other.x, this.y - other.y);
    }
    
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    scale(scalar: number): Vector2D {
        return new Vector2D(scalar * this.x, scalar * this.y);
    }

    dotProduct(other: Vector2D): number {
        return this.x * other.x + this.y * other.y;
    }

    normalise(): Vector2D {
        return this.scale(1.0/this.length())
    }

    distance(other: Vector2D): number {
        const diff = this.subtract(other);
        return diff.length()
    }

    rotate(angleRad: number): Vector2D {
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        return new Vector2D(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
    }

    /**
     * 
     * @returns angle of the vector in radians
     */
    angle(): number {
        return Math.atan2(this.y, this.x)
    }

    lerp(other: Vector2D, t: number): Vector2D {
        return this.scale(1-t).add(other.scale(t))
    }

    perpDotProduct(other: Vector2D): number {
        return this.x * other.y - this.y * other.x;
    }
}

export function vectorAverage(vectors: Vector2D[]): Vector2D {
    const avg = vectors.reduce((v1, v2) => v1.add(v2)).scale(1 / vectors.length)
    return avg;
}