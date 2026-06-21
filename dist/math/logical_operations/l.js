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
export function IsPositive(a) {
    if (a > 0) {
        return true;
    }
    return false;
}
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
export function IsNegative(a) {
    if (a < 0) {
        return true;
    }
    return false;
}
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
export function IsZero(a) {
    if (a == 0) {
        return true;
    }
    return false;
}
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
export function IsEqual(a, b) {
    if (a == b && b == a) {
        return true;
    }
    return false;
}
/**
 * Checks whether a is greater than b.
 *
 * @param a - First number.
 * @param b - Second number.
 * @returns `true` if a > b.
 */
export function IsGreater(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}
/**
 * Checks whether a is less than b.
 *
 * @param a - First number.
 * @param b - Second number.
 * @returns `true` if a < b.
 */
export function IsLess(a, b) {
    if (a < b) {
        return true;
    }
    return false;
}
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
export function isPrime(a) {
    if (a < 2) {
        return false;
    }
    if (a == 2) {
        return true;
    }
    if (a % 2 == 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(a); i += 2) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}
/**
 * Checks whether a number is even.
 *
 * @param a - Number to test.
 * @returns `true` if even.
 */
export function IsEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    return false;
}
/**
 * Checks whether a number is odd.
 *
 * @param a - Number to test.
 * @returns `true` if odd.
 */
export function IsOdd(a) {
    if (a % 2 != 0) {
        return true;
    }
    return false;
}
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
export function isPalindrome(n) {
    var num = n.toString();
    return num === num.split("").reverse().join("");
}
//# sourceMappingURL=l.js.map