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
export function factorial(n) {
    var result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
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
export function triangular(n) {
    return (n * (n + 1)) / 2;
}
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
export function divisors(n) {
    var array = [];
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            array.push(i);
        }
    }
    return array;
}
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
export function coprime(a, b) {
    var a_divisors = divisors(a);
    var b_divisors = divisors(b);
    var mutual = [];
    for (var num1 of a_divisors) {
        for (var num2 of b_divisors) {
            if (num1 == num2 && num2 == num1) {
                mutual.push(num1);
            }
        }
    }
    for (var m of mutual) {
        if (mutual.length == 1 && m == 1) {
            return true;
        }
    }
    return false;
}
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
export function summation(n) {
    return (n * (n + 1)) / 2;
}
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
export function signum(x) {
    if (x > 0) {
        return 1;
    }
    if (x == 0) {
        return 0;
    }
    return -1;
}
export function sigmoid(x) {
    return (1 / (1 + Math.pow(Math.E, -x)));
}
export function softmax(a) {
    let exponentials = [];
    let results = [];
    for (let i = 0; i < a.length; i++) {
        exponentials[i] = Math.pow(Math.E, a[i]);
    }
    let sum = exponentials.reduce((a, b) => a + b, 0);
    for (let i = 0; i < exponentials.length; i++) {
        results.push(exponentials[i] / sum);
    }
    return results;
}
export function Zeta(s, N = 100000) {
    let sum = 0;
    for (let n = 1; n <= N; n++) {
        sum += 1 / Math.pow(n, s);
    }
    return sum;
}
//# sourceMappingURL=f.js.map