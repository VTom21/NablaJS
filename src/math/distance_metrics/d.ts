import {Dot_Product} from "../linear_algebra/l.js"

/**
 * Computes the Euclidean distance between two points in 2D space.
 *
 * @param x1 - X coordinate of the first point.
 * @param x2 - X coordinate of the second point.
 * @param y1 - Y coordinate of the first point.
 * @param y2 - Y coordinate of the second point.
 * @returns The straight-line (L2) distance between the two points.
 *
 * @remarks
 * Uses the Pythagorean theorem: √((x2 - x1)² + (y2 - y1)²).
 *
 * @example
 * ```ts
 * Euclidean_Distance(0, 3, 0, 4); // 5
 * ```
 */


export function Euclidean_Distance(x1: number, x2: number, y1: number, y2: number) : number{
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

/**
 * Computes the Manhattan distance (L1 distance) between two points in 2D space.
 *
 * @param x1 - X coordinate of the first point.
 * @param x2 - X coordinate of the second point.
 * @param y1 - Y coordinate of the first point.
 * @param y2 - Y coordinate of the second point.
 * @returns The sum of absolute differences along each axis.
 *
 * @remarks
 * Also known as "taxicab distance", it measures distance along grid-aligned paths.
 *
 * @example
 * ```ts
 * Manhattan_Distance(0, 3, 0, 4); // 7
 * ```
 */

export function Manhattan_Distance(x1: number, x2: number, y1: number, y2: number): number{
    return Math.abs((x1 - x2)) + Math.abs((y1 - y2))
}

/**
 * Computes cosine similarity between two numeric vectors.
 *
 * @param a - First vector (2D array structure flattened internally).
 * @param b - Second vector (2D array structure flattened internally).
 * @returns A value in the range [-1, 1] representing similarity.
 *
 * @remarks
 * Cosine similarity measures the angle between two vectors:
 * dot(a, b) / (|a| * |b|).
 *
 * This implementation flattens both inputs and assumes they are compatible
 * in shape. If either vector has zero magnitude, the result may be NaN.
 *
 * @example
 * ```ts
 * Cosine_Similarity([[1, 0]], [[1, 0]]); // 1
 * Cosine_Similarity([[1, 0]], [[0, 1]]); // 0
 * ```
 */

export function Cosine_Similarity(a: number[][], b: number[][]): number {

    const dot = Dot_Product(a, b).flat().reduce((sum, x) => sum + x, 0);

    const magA = Math.sqrt(a.flat().reduce((sum, x) => sum + x * x, 0));
    const magB = Math.sqrt(b.flat().reduce((sum, x) => sum + x * x, 0));


    return dot / (magA * magB);
}

/**
 * Computes the Chebyshev distance (chessboard distance) between two points in 2D space.
 *
 * @param x1 - X coordinate of the first point.
 * @param x2 - X coordinate of the second point.
 * @param y1 - Y coordinate of the first point.
 * @param y2 - Y coordinate of the second point.
 * @returns The maximum absolute difference along either axis.
 *
 * @remarks
 * This corresponds to the number of king moves required on a chessboard.
 * Also known as L∞ (infinity norm) distance.
 *
 * @example
 * ```ts
 * Chessboard_Distance(0, 3, 0, 4); // 4
 * ```
 */

export function Chessboard_Distance(x1:number, x2:number, y1:number, y2:number){
    let x = Math.abs(x1 - y1);
    let y = Math.abs(x2 - y2);

    return x > y ? x : y;

}