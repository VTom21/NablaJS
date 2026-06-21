/**
 * Returns an approximation of π (pi) truncated to a given number of digits
 * (excluding the decimal point).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns A floating-point approximation of π based on a truncated constant string.
 *
 * @remarks
 * This function does not perform mathematical computation; it slices a
 * pre-defined string representation of π. The result is not rounded — it is
 * truncated based on character count excluding the decimal point.
 *
 * @example
 * ```ts
 * PI(6); // 3.14159
 * PI(3); // 3.14
 * ```
 */
export declare function PI(digits?: number): number;
/**
 * Returns an approximation of Euler’s constant (γ) truncated to a given number
 * of digits (excluding the decimal point).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns A floating-point approximation of Euler’s constant γ.
 *
 * @remarks
 * Despite the name `EULER`, this function returns the Euler–Mascheroni constant
 * (γ ≈ 0.57721), not Euler’s number e. The value is derived from a fixed string
 * and truncated rather than computed.
 *
 * @example
 * ```ts
 * EULER(5); // 0.57721
 * ```
 */
export declare function EULER(digits?: number): number;
/**
 * Returns a truncated approximation of the golden ratio (φ).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the golden ratio.
 *
 * @remarks
 * The golden ratio is φ ≈ 1.6180339887. This function truncates a constant
 * string representation rather than computing φ.
 *
 * @example
 * ```ts
 * GOLDEN_RATIO(5); // 1.61803
 * ```
 */
export declare function GOLDEN_RATIO(digits?: number): number;
/**
 * Returns a truncated approximation of the silver ratio (δS).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the silver ratio.
 *
 * @remarks
 * The silver ratio is δS ≈ 2.4142135623. This implementation uses a fixed
 * string and truncates it by character count.
 *
 * @example
 * ```ts
 * SILVER_RATIO(5); // 2.41421
 * ```
 */
export declare function SILVER_RATIO(digits?: number): number;
/**
 * Returns a truncated approximation of τ (tau), where τ = 2π.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of tau.
 *
 * @remarks
 * τ ≈ 6.283185307179586. This is a string-based truncation rather than a computed value.
 *
 * @example
 * ```ts
 * TAU(4); // 6.2831
 * ```
 */
export declare function TAU(digits?: number): number;
/**
 * Returns a truncated approximation of the lemniscate constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the lemniscate constant.
 *
 * @remarks
 * The lemniscate constant is approximately 2.6220575542. This function
 * slices a fixed string representation.
 *
 * @example
 * ```ts
 * LEMNISCATE(5); // 2.62205
 * ```
 */
export declare function LEMNISCATE(digits?: number): number;
/**
 * Returns a truncated approximation of the Omega constant (Ω).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Omega constant.
 *
 * @remarks
 * Ω ≈ 0.5671432904. This implementation uses a precomputed string value.
 *
 * @example
 * ```ts
 * OMEGA(5); // 0.56714
 * ```
 */
export declare function OMEGA(digits?: number): number;
/**
 * Returns a truncated approximation of the Laplace constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Laplace constant.
 *
 * @remarks
 * The Laplace constant is approximately 0.6627434193. This function does not
 * compute it mathematically; it truncates a fixed string representation.
 *
 * @example
 * ```ts
 * LAPLACE(5); // 0.66274
 * ```
 */
export declare function LAPLACE(digits?: number): number;
/**
 * Returns a truncated approximation of the Wallis constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Wallis constant.
 *
 * @remarks
 * The Wallis constant is approximately 2.0945514815. This function uses a
 * precomputed string and truncates it based on digit count, not mathematical
 * derivation.
 *
 * @example
 * ```ts
 * WALLIS(5); // 2.09455
 * ```
 */
export declare function WALLIS(digits?: number): number;
/**
 * Returns a truncated approximation of the Gauss constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Gauss constant.
 *
 * @remarks
 * The Gauss constant is approximately 0.8346268416. This is a fixed-string
 * truncation.
 *
 * @example
 * ```ts
 * GAUSS(5); // 0.83462
 * ```
 */
export declare function GAUSS(digits?: number): number;
/**
 * Returns a truncated approximation of the Catalan constant (G).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Catalan constant.
 *
 * @remarks
 * Catalan’s constant is approximately 0.9159655941. This function does not
 * compute the constant; it truncates a predefined string.
 *
 * @example
 * ```ts
 * CATALAN(5); // 0.91596
 * ```
 */
export declare function CATALAN(digits?: number): number;
/**
 * Returns a truncated approximation of the Stephens constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Stephens constant.
 *
 * @remarks
 * This constant is less commonly referenced; value is taken from a fixed
 * string representation.
 *
 * @example
 * ```ts
 * STEPHENS(5); // 0.57595
 * ```
 */
export declare function STEPHENS(digits?: number): number;
/**
 * Returns a truncated approximation of the Bernstein constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Bernstein constant.
 *
 * @remarks
 * This implementation uses a precomputed constant string.
 *
 * @example
 * ```ts
 * BERNSTEIN(5); // 0.28016
 * ```
 */
export declare function BERNSTEIN(digits?: number): number;
/**
 * Returns a truncated approximation of Euler’s number (e).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of e.
 *
 * @remarks
 * Euler’s number is approximately 2.7182818284. This function truncates a
 * constant string representation.
 *
 * @example
 * ```ts
 * E(5); // 2.71828
 * ```
 */
export declare function E(digits?: number): number;
//# sourceMappingURL=c.d.ts.map