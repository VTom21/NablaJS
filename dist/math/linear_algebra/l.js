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
export function Dot_Product(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (b[0]?.length ?? 0); j++) {
            let cell = 0;
            for (let n = 0; n < b.length; n++) {
                cell += a[i][n] * b[n][j];
            }
            row.push(cell);
        }
        array.push(row);
    }
    return array;
}
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
export function Matrix_Add(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i][j] + b[i][j]);
        }
        array.push(row);
    }
    return array;
}
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
export function Matrix_Subtract(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i][j] - b[i][j]);
        }
        array.push(row);
    }
    return array;
}
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
export function Matrix_Divide(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i][j] / b[i][j]);
        }
        array.push(row);
    }
    return array;
}
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
export function Cross_Product(a, b) {
    return [
        [a[1][0] * b[2][0] - a[2][0] * b[1][0]],
        [a[2][0] * b[0][0] - a[0][0] * b[2][0]],
        [a[0][0] * b[1][0] - a[1][0] * b[0][0]]
    ];
}
/**
 * Computes the Euclidean magnitude of a 2D vector.
 *
 * @param x - X component.
 * @param y - Y component.
 * @returns Vector magnitude √(x² + y²).
 */
export function magnitude(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
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
export function point_line(x, y, A, B, C) {
    let top = (A * x) + (B * y) + C;
    let bottom = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
    return top / bottom;
}
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
export function Cramer_Rule(a1, b1, c1, a2, b2, c2) {
    const D = a1 * b2 - a2 * b1;
    const x = (c1 * b2 - c2 * b1) / D;
    const y = (a1 * c2 - a2 * c1) / D;
    return [x, y];
}
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
export function lerp(a, b, t) {
    return a + (b - a) * t;
}
export function toPolar(x, y) {
    let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let theta = Math.atan2(y, x) * (180 / Math.PI);
    return { r, theta };
}
export function fromPolar(r, theta) {
    let x = r * Math.cos(theta * (Math.PI / 180));
    let y = r * Math.sin(theta * (Math.PI / 180));
    return { x, y };
}
//# sourceMappingURL=l.js.map