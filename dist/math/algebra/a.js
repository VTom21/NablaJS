/**
 * Solves for a missing side of a right triangle using the
 * **Pythagorean theorem**: `a² + b² = c²`.
 *
 * Pass `0` (or omit/falsy) for exactly the one side you want solved for;
 * supply the other two.
 *
 * @param a - Length of leg A. Pass `0` to solve for A.
 * @param b - Length of leg B. Pass `0` to solve for B.
 * @param c - Length of the hypotenuse. Pass `0` to solve for C.
 * @returns The length of the missing side.
 *
 * @remarks
 * If all three sides are provided as non-zero, the function falls
 * through every branch and returns `undefined` — it does not validate
 * the triangle or compute anything in that case.
 *
 * @example
 * ```ts
 * Pythagorean(3, 4, 0); // 5  (solving for hypotenuse)
 * Pythagorean(0, 4, 5); // 3  (solving for leg a)
 * Pythagorean(3, 0, 5); // 4  (solving for leg b)
 * ```
 */
export function Pythagorean(a, b, c) {
    if (!c || c == 0) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    if (!b || b == 0) {
        if (c > a) {
            return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        }
    }
    if (!a || a == 0) {
        if (c > b) {
            return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
        }
    }
}
/**
 * Computes the discriminant of a quadratic equation `ax² + bx + c = 0`
 * and reports how many real roots it has, rather than the raw value.
 *
 * @param a - Quadratic coefficient.
 * @param b - Linear coefficient.
 * @param c - Constant term.
 * @returns
 * - `2` — two distinct real roots (discriminant > 0)
 * - `1` — exactly one real root (discriminant < 0) — see remarks
 * - `0` — exactly one repeated real root (discriminant == 0)
 *
 * @remarks
 * The `1` case is mislabeled relative to standard terminology: a
 * **negative** discriminant actually means **zero** real roots (the
 * roots are complex), not one. If you need standard semantics, that
 * branch's return value should likely change.
 *
 * @example
 * ```ts
 * discriminant(1, -3, 2); // 2 — roots are 1 and 2
 * discriminant(1, 2, 5);  // 1 — no real roots (complex), despite the label
 * ```
 */
export function discriminant(a, b, c) {
    let value = Math.pow(b, 2) - (4 * a * c);
    if (value > 0) {
        return 2;
    }
    if (value < 0) {
        return 1;
    }
    if (value == 0) {
        return 0;
    }
}
/**
 * Solves `ax² + bx + c = 0` for both roots using the quadratic formula.
 *
 * @param a - Quadratic coefficient (must be non-zero).
 * @param b - Linear coefficient.
 * @param c - Constant term.
 * @returns A tuple `[root1, root2]`.
 *
 * @remarks
 * Does not check the discriminant first. If `b² - 4ac` is negative,
 * `Math.sqrt` of a negative number is `NaN`, so this silently returns
 * `[NaN, NaN]` instead of throwing or signaling "no real roots."
 * Call {@link discriminant} first if you need to guard against that.
 *
 * @example
 * ```ts
 * quadratic(1, -3, 2);  // [2, 1]
 * quadratic(1, 2, 5);   // [NaN, NaN]  — no real roots
 * ```
 */
export function quadratic(a, b, c) {
    let discriminant_value = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    let value1 = ((b * (-1)) + discriminant_value) / (2 * a);
    let value2 = ((b * (-1)) - discriminant_value) / (2 * a);
    return [
        value1,
        value2
    ];
}
/**
 * Calculates the slope of the line through two points:
 * `(y2 - y1) / (x2 - x1)`.
 *
 * @param x1 - X coordinate of the first point.
 * @param x2 - X coordinate of the second point.
 * @param y1 - Y coordinate of the first point.
 * @param y2 - Y coordinate of the second point.
 * @returns The slope.
 *
 * @remarks
 * Returns `Infinity` (or `-Infinity`) for a vertical line, where
 * `x1 === x2`, since division by zero in JS doesn't throw.
 *
 * @example
 * ```ts
 * slope(1, 3, 2, 8); // 3
 * slope(5, 5, 1, 9); // Infinity — vertical line
 * ```
 */
export function slope(x1, x2, y1, y2) {
    return (y2 - y1) / (x2 - x1);
}
/**
 * Calculates the midpoint between two points.
 *
 * @param x1 - X coordinate of the first point.
 * @param x2 - X coordinate of the second point.
 * @param y1 - Y coordinate of the first point.
 * @param y2 - Y coordinate of the second point.
 * @returns A tuple `[midX, midY]`.
 *
 * @example
 * ```ts
 * midpoint(0, 4, 0, 8); // [2, 4]
 * ```
 */
export function midpoint(x1, x2, y1, y2) {
    return [
        (x1 + x2) / 2,
        (y1 + y2) / 2
    ];
}
//# sourceMappingURL=a.js.map