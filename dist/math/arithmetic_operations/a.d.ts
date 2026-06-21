import { Term } from "../symbols/s.js";
/**
 * Adds two algebraic operands — numbers, like terms (`2x + 5x`), or a
 * mix of a term and a plain number.
 *
 * @param a - First operand: a plain number or a {@link Term}.
 * @param b - Second operand: a plain number or a {@link Term}.
 * @returns
 * - A `number`, if both operands are plain numbers or symbol-less terms.
 * - A `string` like `"7x"`, if both are like terms (same symbol).
 * - A `string` like `"2x + 5"`, if one side is a term and the other a number.
 * - A `string` like `"2x + 3y"`, if both are terms with different symbols
 *   (the terms are NOT actually combined — this is a textual concatenation).
 *
 * @example
 * ```ts
 * add(3, 4);                                              // 7
 * add({kind:"term", coefficient:2, symbol:"x"},
 *     {kind:"term", coefficient:5, symbol:"x"});           // "7x"
 * add({kind:"term", coefficient:2, symbol:"x"}, 5);        // "2x + 5"
 * ```
 */
export declare function add(a: Term | number, b: Term | number): string | number;
/**
 * Subtracts two algebraic operands. Same combination rules as {@link add},
 * with `-` instead of `+` in every output form.
 *
 * @param a - Minuend: a plain number or a {@link Term}.
 * @param b - Subtrahend: a plain number or a {@link Term}.
 * @returns A `number` (both plain/symbol-less) or a formatted `string`
 * otherwise — see {@link add} for the exact shape per case.
 *
 * @example
 * ```ts
 * subtract(10, 4); // 6
 * subtract({kind:"term", coefficient:5, symbol:"x"},
 *          {kind:"term", coefficient:2, symbol:"x"}); // "3x"
 * ```
 */
export declare function subtract(a: Term | number, b: Term | number): string | number;
/**
 * Multiplies two algebraic operands. Same combination rules as {@link add},
 * with `*` instead of `+`.
 *
 * @param a - First factor: a plain number or a {@link Term}.
 * @param b - Second factor: a plain number or a {@link Term}.
 * @returns A `number` (both plain/symbol-less) or a formatted `string`
 * otherwise — see {@link add} for the exact shape per case.
 *
 * @example
 * ```ts
 * multiply(3, 4); // 12
 * multiply({kind:"term", coefficient:2, symbol:"x"},
 *          {kind:"term", coefficient:3, symbol:"x"}); // "6x"
 * ```
 */
export declare function multiply(a: Term | number, b: Term | number): string | number;
/**
 * Divides two algebraic operands. Same combination rules as {@link add},
 * with `/` instead of `+`.
 *
 * @param a - Dividend: a plain number or a {@link Term}.
 * @param b - Divisor: a plain number or a {@link Term}.
 * @returns A `number` (both plain/symbol-less) or a formatted `string`
 * otherwise — see {@link add} for the exact shape per case.
 *
 * @remarks
 * No guard against dividing by a zero coefficient — `divide(5, 0)`
 * returns `Infinity`, same as plain JS division.
 *
 * @example
 * ```ts
 * divide(10, 2); // 5
 * ```
 */
export declare function divide(a: Term | number, b: Term | number): string | number;
/**
 * Raises one algebraic operand to the power of another.
 *
 * @param a - Base: a plain number or a {@link Term}.
 * @param b - Exponent: a plain number or a {@link Term}.
 * @returns
 * - A `number`, if both operands are plain numbers or symbol-less terms.
 * - A `string` like `"4x"` (coefficient²) — wait, see remarks — if both
 *   are like terms (same symbol): coefficients are exponentiated together.
 * - An object `{ symbol, base, power, full }`, if exactly one operand has
 *   a symbol (mixed term/number case).
 * - An object `{ base, power, full }`, if both are terms with **different**
 *   symbols — but see remarks, this branch is inconsistent with the one above.
 *
 * @remarks
 * The two object-returning branches are inconsistent with each other:
 * - Mixed branch: `base`/`power` are plain numbers (the coefficients).
 * - Different-symbol branch: `base`/`power` are the original
 *   {@link Term} objects, not their coefficients — and the resulting
 *   `full` string (e.g. `"2x^3y"`) reads as a single exponentiation
 *   rather than a combination of two unrelated terms, which may not be
 *   mathematically meaningful as written.
 *
 * @example
 * ```ts
 * power(2, 3); // 8
 * power({kind:"term", coefficient:2, symbol:"x"}, 3);
 * // { symbol: "x", base: 2, power: 3, full: "2x^3" }
 *
 * power({kind:"term", coefficient:2, symbol:"x"},
 *       {kind:"term", coefficient:3, symbol:"y"});
 * // { base: {kind:"term",coefficient:2,symbol:"x"},
 * //   power: {kind:"term",coefficient:3,symbol:"y"},
 * //   full: "2x^3y" }  — see remarks above
 * ```
 */
export declare function power(a: Term | number, b: Term | number): string | number | {
    symbol: string;
    base: number;
    power: number;
    full: string;
} | {
    base: number | Term;
    power: number | Term;
    full: string;
    symbol?: never;
};
/**
 * Computes the square root of a number, or of a {@link Term}'s
 * coefficient (the symbol is carried through unchanged, **not**
 * square-rooted itself).
 *
 * @param a - A plain number or a {@link Term}.
 * @returns
 * - A `number`, for plain number input.
 * - An object `{ kind, coefficient, symbol, full }`, for term input —
 *   `coefficient` is `√(original coefficient)`.
 *
 * @remarks
 * For term input, this assumes the symbol's exponent is implicitly 2
 * (e.g. `9x` is treated as if it meant `9x²`, so `√(9x²) = 3x`). If the
 * term doesn't actually represent a perfect square in `x`, the result
 * is not a valid simplification.
 *
 * @example
 * ```ts
 * root(16); // 4
 * root({kind:"term", coefficient:9, symbol:"x"});
 * // { kind: "term", coefficient: 3, symbol: "x", full: "√9x" }
 * ```
 */
export declare function root(a: number | Term): number | {
    kind: string;
    coefficient: number;
    symbol: string;
    full: string;
};
/**
 * Returns `a + 1`.
 *
 * @remarks
 * Despite the name, this does **not** mutate the caller's variable —
 * JS passes numbers by value. `increment(x)` has no effect unless you
 * use the return value, e.g. `x = increment(x)`.
 *
 * @example
 * ```ts
 * increment(5); // 6
 * ```
 */
export declare function increment(a: number): number;
/**
 * Returns `a - 1`.
 *
 * @remarks
 * Same caveat as {@link increment}: does not mutate the caller's
 * variable, only returns the decremented value.
 *
 * @example
 * ```ts
 * decrement(5); // 4
 * ```
 */
export declare function decrement(a: number): number;
/**
 * Returns `a + value`.
 *
 * @param a - The starting number.
 * @param value - The amount to add.
 *
 * @example
 * ```ts
 * incrementBy(5, 3); // 8
 * ```
 */
export declare function incrementBy(a: number, value: number): number;
/**
 * Returns `a - value`.
 *
 * @param a - The starting number.
 * @param value - The amount to subtract.
 *
 * @example
 * ```ts
 * decrementBy(5, 3); // 2
 * ```
 */
export declare function decrementBy(a: number, value: number): number;
/**
 * Returns the absolute value of a number.
 *
 * @example
 * ```ts
 * modulus(-7); // 7
 * ```
 */
export declare function modulus(value: number): number;
/**
 * Returns the base-10 logarithm of a number.
 *
 * @example
 * ```ts
 * log(1000); // 3
 * ```
 */
export declare function log(value: number): number;
/**
 * Returns the natural logarithm (base `e`) of a number.
 *
 * @example
 * ```ts
 * ln(Math.E); // 1
 * ```
 */
export declare function ln(value: number): number;
/**
 * Returns the logarithm of `value` in an arbitrary `base`, using the
 * change-of-base formula: `log_base(value) = ln(value) / ln(base)`.
 *
 * @param base - The logarithm base.
 * @param value - The number to take the logarithm of.
 *
 * @example
 * ```ts
 * logCustom(2, 8); // 3
 * ```
 */
export declare function logCustom(base: number, value: number): number;
//# sourceMappingURL=a.d.ts.map