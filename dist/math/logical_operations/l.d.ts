/**
 * Checks whether a number is positive.
 *
 * @param a - The number to test.
 * @returns `true` if a > 0, otherwise `false`.
 *
 * @example
 * ```ts
 * IsPositive(5); // true
 * IsPositive(-1); // false
 * ```
 */
export declare function IsPositive(a: number): boolean;
/**
 * Checks whether a number is negative.
 *
 * @param a - The number to test.
 * @returns `true` if a < 0, otherwise `false`.
 *
 * @example
 * ```ts
 * IsNegative(-3); // true
 * ```
 */
export declare function IsNegative(a: number): boolean;
/**
 * Checks whether a number is zero.
 *
 * @param a - The number to test.
 * @returns `true` if a === 0, otherwise `false`.
 *
 * @example
 * ```ts
 * IsZero(0); // true
 * ```
 */
export declare function IsZero(a: number): boolean;
/**
 * Checks whether two numbers are equal.
 *
 * @param a - First number.
 * @param b - Second number.
 * @returns `true` if both values are equal.
 *
 * @remarks
 * Uses loose equality logic equivalent to strict numeric equality in practice.
 *
 * @example
 * ```ts
 * IsEqual(2, 2); // true
 * ```
 */
export declare function IsEqual(a: number, b: number): boolean;
/**
 * Checks whether a is greater than b.
 *
 * @param a - First number.
 * @param b - Second number.
 * @returns `true` if a > b.
 */
export declare function IsGreater(a: number, b: number): boolean;
/**
 * Checks whether a is less than b.
 *
 * @param a - First number.
 * @param b - Second number.
 * @returns `true` if a < b.
 */
export declare function IsLess(a: number, b: number): boolean;
/**
 * Determines whether a number is prime.
 *
 * @param a - Integer to test.
 * @returns `true` if a is prime.
 *
 * @remarks
 * Uses an optimized trial division method up to √a.
 *
 * @example
 * ```ts
 * isPrime(7); // true
 * isPrime(8); // false
 * ```
 */
export declare function isPrime(a: number): boolean;
/**
 * Checks whether a number is even.
 *
 * @param a - Number to test.
 * @returns `true` if even.
 */
export declare function IsEven(a: number): boolean;
/**
 * Checks whether a number is odd.
 *
 * @param a - Number to test.
 * @returns `true` if odd.
 */
export declare function IsOdd(a: number): boolean;
/**
 * Checks whether a number is a palindrome when written as a string.
 *
 * @param n - Number to test.
 * @returns `true` if the digit sequence reads the same forward and backward.
 *
 * @example
 * ```ts
 * isPalindrome(121); // true
 * isPalindrome(123); // false
 * ```
 */
export declare function isPalindrome(n: number): boolean;
//# sourceMappingURL=l.d.ts.map