import { E } from "../constants/c.js";
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
export function Sin(n) {
    return Math.sin(n * (Math.PI / 180));
}
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
export function Cos(n) {
    return Math.cos(n * (Math.PI / 180));
}
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
export function Tan(n) {
    return Math.tan(n * (Math.PI / 180));
}
/**
 * Computes the cotangent of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The cotangent of the angle.
 *
 * @remarks
 * Defined as 1 / tan(θ). Values may approach Infinity where tan(θ) = 0.
 */
export function Cot(n) {
    return 1 / Math.tan(n * (Math.PI / 180));
}
/**
 * Computes the secant of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The secant of the angle.
 *
 * @remarks
 * Defined as 1 / cos(θ).
 */
export function Sec(n) {
    return 1 / Math.cos(n * (Math.PI / 180));
}
/**
 * Computes the cosecant of an angle measured in degrees.
 *
 * @param n - Angle in degrees.
 * @returns The cosecant of the angle.
 *
 * @remarks
 * Defined as 1 / sin(θ).
 */
export function Csc(n) {
    return 1 / Math.sin(n * (Math.PI / 180));
}
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
export function SinH(n) {
    return (Math.pow(E(), n) - Math.pow(E(), -n)) / 2;
}
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
export function CosH(n) {
    return (Math.pow(E(), n) + Math.pow(E(), -n)) / 2;
}
/**
 * Computes the hyperbolic tangent of a number.
 *
 * @param n - Input value.
 * @returns tanh(n).
 *
 * @remarks
 * Defined as sinh(n) / cosh(n).
 */
export function TanH(n) {
    return SinH(n) / CosH(n);
}
/**
 * Computes the hyperbolic cotangent of a number.
 *
 * @param n - Input value.
 * @returns coth(n).
 *
 * @remarks
 * Defined as 1 / tanh(n).
 */
export function CotH(n) {
    return 1 / TanH(n);
}
/**
 * Computes the hyperbolic secant of a number.
 *
 * @param n - Input value.
 * @returns sech(n).
 *
 * @remarks
 * Defined as 1 / cosh(n).
 */
export function SecH(n) {
    return 1 / CosH(n);
}
/**
 * Computes the hyperbolic cosecant of a number.
 *
 * @param n - Input value.
 * @returns csch(n).
 *
 * @remarks
 * Defined as 1 / sinh(n).
 */
export function CscH(n) {
    return 1 / SinH(n);
}
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
export function Cosine_Law(a = 0, b = 0, c = 0, alpha = 0, beta = 0, gamma = 0) {
    if (c == 0 && a !== 0 && b !== 0 && gamma !== 0) {
        let value = Math.sqrt((Math.pow(a, 2) + (Math.pow(b, 2)) - (2 * a * b * Cos(gamma))));
        return value;
    }
    if (b == 0 && a !== 0 && c !== 0 && beta !== 0) {
        let value = Math.sqrt((Math.pow(a, 2) + (Math.pow(c, 2)) - (2 * a * c * Cos(beta))));
        return value;
    }
    if (a == 0 && b !== 0 && c !== 0 && alpha !== 0) {
        let value = Math.sqrt((Math.pow(b, 2) + (Math.pow(c, 2)) - (2 * b * c * Cos(alpha))));
        return value;
    }
    if (a !== 0 && b !== 0 && c !== 0 && alpha == 0 && beta == 0 && gamma == 0) {
        var alphaValue = Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)) * 180 / Math.PI;
        var betaValue = Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)) * 180 / Math.PI;
        var gammaValue = Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)) * 180 / Math.PI;
        return {
            alpha: alphaValue,
            beta: betaValue,
            gamma: gammaValue
        };
    }
}
//# sourceMappingURL=t.js.map