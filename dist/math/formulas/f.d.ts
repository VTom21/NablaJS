/**
 * Computes the factorial of a non-negative integer.
 *
 * @param n - The number to compute the factorial of.
 * @returns n! (the product of all integers from 1 to n).
 *
 * @remarks
 * This implementation uses an iterative loop. It does not handle negative
 * inputs and will return 1 for n = 0 by convention.
 *
 * @example
 * ```ts
 * factorial(5); // 120
 * ```
 */
export declare function factorial(n: number): number;
/**
 * Computes the nth triangular number.
 *
 * @param n - The index of the triangular number.
 * @returns The sum of all integers from 1 to n.
 *
 * @remarks
 * Uses the closed-form formula n(n + 1)/2.
 *
 * @example
 * ```ts
 * triangular(5); // 15
 * ```
 */
export declare function triangular(n: number): number;
/**
 * Returns all positive divisors of a number.
 *
 * @param n - The number to find divisors of.
 * @returns An array containing all integers that divide n evenly.
 *
 * @remarks
 * This implementation is inefficient (O(n)) and also contains a potential
 * bug: starting from i = 0 causes a division by zero error.
 *
 * @example
 * ```ts
 * divisors(6); // [1, 2, 3, 6]
 * ```
 */
export declare function divisors(n: number): number[];
/**
 * Determines whether two numbers are coprime (relatively prime).
 *
 * @param a - First integer.
 * @param b - Second integer.
 * @returns `true` if the greatest common divisor of a and b is 1.
 *
 * @remarks
 * This implementation computes divisors of both numbers and checks for a
 * single shared divisor equal to 1. A more efficient approach would use
 * Euclid’s algorithm for GCD.
 *
 * @example
 * ```ts
 * coprime(8, 15); // true
 * coprime(8, 12); // false
 * ```
 */
export declare function coprime(a: number, b: number): boolean;
/**
 * Computes the summation of the first n natural numbers.
 *
 * @param n - The upper bound of the summation.
 * @returns The sum 1 + 2 + ... + n.
 *
 * @remarks
 * Uses the closed-form formula n(n + 1)/2.
 *
 * @example
 * ```ts
 * summation(5); // 15
 * ```
 */
export declare function summation(n: number): number;
/**
 * Returns the sign of a number.
 *
 * @param x - The input number.
 * @returns 1 if x is positive, -1 if negative, 0 if zero.
 *
 * @remarks
 * Equivalent to a simplified version of Math.sign.
 *
 * @example
 * ```ts
 * signum(10); // 1
 * signum(-3); // -1
 * signum(0); // 0
 * ```
 */
export declare function signum(x: number): number;
export declare function sigmoid(x: number): number;
export declare function softmax(a: number[]): number[];
export declare function Zeta(s: number, N?: number): number;
//# sourceMappingURL=f.d.ts.map