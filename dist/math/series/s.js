import { factorial } from "../formulas/f.js";
/**
 * Generates the Catalan number series up to a given limit.
 *
 * @param limit - Number of terms to generate.
 * @returns An object containing:
 * - series: array of Catalan numbers
 * - sum: sum of generated terms
 *
 * @remarks
 * Catalan numbers are computed using:
 * (2n)! / ((n + 1)! n!)
 *
 * @example
 * ```ts
 * Catalan_Series(5);
 * ```
 */
export function Catalan_Series(limit) {
    let array = [];
    let sum = 0;
    for (var i = 0; i < limit; i++) {
        if (i < limit) {
            let value = factorial(2 * i) / (factorial(i + 1) * factorial(i));
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
/**
 * Generates the harmonic series up to a given limit.
 *
 * @param limit - Number of terms.
 * @returns Series values and their sum.
 *
 * @remarks
 * Harmonic series: Σ 1/n
 */
export function Harmonic_Series(limit) {
    let array = [];
    let sum = 0;
    for (var i = 1; i < limit; i++) {
        if (i < limit) {
            let value = 1 / i;
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
/**
 * Generates a finite geometric series.
 *
 * @param a - First term.
 * @param r - Common ratio.
 * @param n - Number of terms.
 * @returns Series values and sum.
 *
 * @remarks
 * Each term is a * r^i.
 */
export function Geometric_Series(a, r, n) {
    let array = [];
    let sum = 0;
    for (var i = 0; i < n; i++) {
        if (i < n) {
            let value = a * Math.pow(r, i);
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
/**
 * Generates the Basel series approximation.
 *
 * @param n - Number of terms.
 * @returns Series values and sum.
 *
 * @remarks
 * Σ 1/n² converges to π²/6.
 */
export function Basel_Series(n) {
    let array = [];
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i <= n) {
            let value = 1 / Math.pow(i, 2);
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
/**
 * Generates the Padovan sequence.
 *
 * @param n - Number of terms.
 * @returns Sequence array and sum of generated values.
 *
 * @remarks
 * Defined by: P(n) = P(n−2) + P(n−3), with base [1,1,1].
 */
export function Padovan_Sequence(n) {
    let array = [1, 1, 1];
    let sum = 0;
    for (var i = 3; i <= n; i++) {
        array.push(array[i - 2] + array[i - 3]);
        sum += array[i - 2] + array[i - 3];
    }
    return {
        series: array,
        sum: sum + 3
    };
}
//# sourceMappingURL=s.js.map