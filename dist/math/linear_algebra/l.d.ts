/**
 * Performs matrix multiplication (dot product) between two matrices.
 *
 * @param a - Left matrix (m × n).
 * @param b - Right matrix (n × p).
 * @returns Resulting matrix (m × p).
 *
 * @remarks
 * This implementation assumes valid matrix dimensions. No runtime checks are
 * performed for mismatched shapes, so invalid inputs may produce runtime errors.
 *
 * @example
 * ```ts
 * Dot_Product([[1, 2]], [[3], [4]]); // [[11]]
 * ```
 */
export declare function Dot_Product(a: number[][], b: number[][]): number[][];
/**
 * Adds two matrices element-wise.
 *
 * @param a - First matrix.
 * @param b - Second matrix.
 * @returns Sum of matrices a and b.
 *
 * @remarks
 * Assumes both matrices have identical dimensions. No validation is performed.
 *
 * @example
 * ```ts
 * Matrix_Add([[1,2]], [[3,4]]); // [[4,6]]
 * ```
 */
export declare function Matrix_Add(a: number[][], b: number[][]): number[][];
/**
 * Subtracts one matrix from another element-wise.
 *
 * @param a - First matrix.
 * @param b - Second matrix.
 * @returns Resulting matrix (a - b).
 *
 * @remarks
 * Assumes identical matrix dimensions.
 */
export declare function Matrix_Subtract(a: number[][], b: number[][]): number[][];
/**
 * Divides two matrices element-wise.
 *
 * @param a - Numerator matrix.
 * @param b - Denominator matrix.
 * @returns Element-wise division result.
 *
 * @remarks
 * No zero-division checks are performed. Undefined or Infinity values may occur.
 */
export declare function Matrix_Divide(a: number[][], b: number[][]): number[][];
/**
 * Computes the 3D cross product of two vectors.
 *
 * @param a - First vector (3×1 matrix form).
 * @param b - Second vector (3×1 matrix form).
 * @returns Cross product vector as a 3×1 matrix.
 *
 * @remarks
 * Expects both inputs to be 3D column vectors.
 */
export declare function Cross_Product(a: number[][], b: number[][]): number[][];
/**
 * Computes the Euclidean magnitude of a 2D vector.
 *
 * @param x - X component.
 * @param y - Y component.
 * @returns Vector magnitude √(x² + y²).
 */
export declare function magnitude(x: number, y: number): number;
/**
 * Computes the signed distance from a point to a line.
 *
 * @param x - Point x-coordinate.
 * @param y - Point y-coordinate.
 * @param A - Line coefficient A.
 * @param B - Line coefficient B.
 * @param C - Line coefficient C.
 * @returns Signed distance from point to line Ax + By + C = 0.
 */
export declare function point_line(x: number, y: number, A: number, B: number, C: number): number;
/**
 * Solves a 2×2 linear system using Cramer's Rule.
 *
 * @param a1 - Coefficient of x in equation 1.
 * @param b1 - Coefficient of y in equation 1.
 * @param c1 - Constant in equation 1.
 * @param a2 - Coefficient of x in equation 2.
 * @param b2 - Coefficient of y in equation 2.
 * @param c2 - Constant in equation 2.
 * @returns A tuple [x, y] representing the solution.
 *
 * @remarks
 * Assumes the determinant is non-zero. Division by zero will occur if the
 * system has no unique solution.
 */
export declare function Cramer_Rule(a1: number, b1: number, c1: number, a2: number, b2: number, c2: number): [number, number];
/**
 * Performs linear interpolation between two values.
 *
 * @param a - Start value.
 * @param b - End value.
 * @param t - Interpolation factor (0 to 1).
 * @returns Interpolated value.
 *
 * @remarks
 * When t = 0 returns a, when t = 1 returns b.
 */
export declare function lerp(a: number, b: number, t: number): number;
export declare function toPolar(x: number, y: number): {
    r: number;
    theta: number;
};
export declare function fromPolar(r: number, theta: number): {
    x: number;
    y: number;
};
//# sourceMappingURL=l.d.ts.map