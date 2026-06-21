/**
 * Computes the sine of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The sine of the angle.
 *
 * @remarks
 * Internally converts degrees to radians before calling `Math.sin`.
 *
 * @example
 * ```ts
 * Sin(30); // 0.5
 * Sin(90); // 1
 * ```
 */
export declare function Sin(n: number): number;
/**
 * Computes the cosine of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The cosine of the angle.
 *
 * @example
 * ```ts
 * Cos(60); // 0.5
 * ```
 */
export declare function Cos(n: number): number;
/**
 * Computes the tangent of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The tangent of the angle.
 *
 * @example
 * ```ts
 * Tan(45); // 1
 * ```
 */
export declare function Tan(n: number): number;
/**
 * Computes the cotangent of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The cotangent of the angle.
 *
 * @remarks
 * Defined as 1 / tan(θ). Values may approach Infinity where tan(θ) = 0.
 */
export declare function Cot(n: number): number;
/**
 * Computes the secant of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The secant of the angle.
 *
 * @remarks
 * Defined as 1 / cos(θ).
 */
export declare function Sec(n: number): number;
/**
 * Computes the cosecant of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The cosecant of the angle.
 *
 * @remarks
 * Defined as 1 / sin(θ).
 */
export declare function Csc(n: number): number;
/**
 * Computes the hyperbolic sine of a number.
 *
 * @param n - Input value.
 * @returns sinh(n).
 *
 * @remarks
 * Uses the identity:
 * (eⁿ − e⁻ⁿ) / 2
 */
export declare function SinH(n: number): number;
/**
 * Computes the hyperbolic cosine of a number.
 *
 * @param n - Input value.
 * @returns cosh(n).
 *
 * @remarks
 * Uses the identity:
 * (eⁿ + e⁻ⁿ) / 2
 */
export declare function CosH(n: number): number;
/**
 * Computes the hyperbolic tangent of a number.
 *
 * @param n - Input value.
 * @returns tanh(n).
 *
 * @remarks
 * Defined as sinh(n) / cosh(n).
 */
export declare function TanH(n: number): number;
/**
 * Computes the hyperbolic cotangent of a number.
 *
 * @param n - Input value.
 * @returns coth(n).
 *
 * @remarks
 * Defined as 1 / tanh(n).
 */
export declare function CotH(n: number): number;
/**
 * Computes the hyperbolic secant of a number.
 *
 * @param n - Input value.
 * @returns sech(n).
 *
 * @remarks
 * Defined as 1 / cosh(n).
 */
export declare function SecH(n: number): number;
/**
 * Computes the hyperbolic cosecant of a number.
 *
 * @param n - Input value.
 * @returns csch(n).
 *
 * @remarks
 * Defined as 1 / sinh(n).
 */
export declare function CscH(n: number): number;
/**
 * Solves triangle measurements using the Law of Cosines.
 *
 * @param a - Side a.
 * @param b - Side b.
 * @param c - Side c.
 * @param alpha - Angle opposite side a (degrees).
 * @param beta - Angle opposite side b (degrees).
 * @param gamma - Angle opposite side c (degrees).
 * @returns Either:
 * - The missing side length, or
 * - An object containing `{ alpha, beta, gamma }` when all sides are provided.
 *
 * @remarks
 * Supported cases:
 * - Compute side c from a, b, and γ.
 * - Compute side b from a, c, and β.
 * - Compute side a from b, c, and α.
 * - Compute all three angles from sides a, b, and c.
 *
 * Angles are returned in degrees.
 *
 * @example
 * ```ts
 * Cosine_Law(3, 4, 0, 0, 0, 90);
 * // 5
 * ```
 *
 * @example
 * ```ts
 * Cosine_Law(3, 4, 5);
 * // {
 * //   alpha: 36.87...,
 * //   beta: 53.13...,
 * //   gamma: 90
 * // }
 * ```
 */
export declare function Cosine_Law(a?: number, b?: number, c?: number, alpha?: number, beta?: number, gamma?: number): number | {
    alpha: number;
    beta: number;
    gamma: number;
} | undefined;
//# sourceMappingURL=t.d.ts.map