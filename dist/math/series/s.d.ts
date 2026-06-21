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
export declare function Catalan_Series(limit: number): {
    series: number[];
    sum: number;
};
/**
 * Generates the harmonic series up to a given limit.
 *
 * @param limit - Number of terms.
 * @returns Series values and their sum.
 *
 * @remarks
 * Harmonic series: Σ 1/n
 */
export declare function Harmonic_Series(limit: number): {
    series: number[];
    sum: number;
};
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
export declare function Geometric_Series(a: number, r: number, n: number): {
    series: number[];
    sum: number;
};
/**
 * Generates the Basel series approximation.
 *
 * @param n - Number of terms.
 * @returns Series values and sum.
 *
 * @remarks
 * Σ 1/n² converges to π²/6.
 */
export declare function Basel_Series(n: number): {
    series: number[];
    sum: number;
};
/**
 * Generates the Padovan sequence.
 *
 * @param n - Number of terms.
 * @returns Sequence array and sum of generated values.
 *
 * @remarks
 * Defined by: P(n) = P(n−2) + P(n−3), with base [1,1,1].
 */
export declare function Padovan_Sequence(n: number): {
    series: number[];
    sum: number;
};
//# sourceMappingURL=s.d.ts.map