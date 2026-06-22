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
/**
 * Computes the sigmoid (logistic) activation function.
 *
 * @param x - Input value.
 * @returns The sigmoid-transformed value in the range (0, 1).
 *
 * @remarks
 * The sigmoid function maps any real number to a value between 0 and 1.
 * It is commonly used in machine learning, neural networks, and logistic
 * regression to represent probabilities.
 *
 * Formula:
 * σ(x) = 1 / (1 + e^-x)
 *
 * @example
 * ```ts
 * sigmoid(0); // 0.5
 * ```
 *
 * @example
 * ```ts
 * sigmoid(2); // ≈ 0.8808
 * ```
 */
export function sigmoid(x) {
    return (1 / (1 + Math.pow(Math.E, -x)));
}
/**
 * Computes the softmax transformation of a vector.
 *
 * @param a - Array of input values.
 * @returns An array of normalized probabilities whose sum equals 1.
 *
 * @remarks
 * Softmax converts a set of real-valued scores into a probability
 * distribution. Larger input values receive higher probabilities while
 * preserving relative differences between inputs.
 *
 * Formula:
 * softmax(xᵢ) = e^(xᵢ) / Σ(e^(xⱼ))
 *
 * This implementation directly computes exponentials and may experience
 * numerical instability for very large input values.
 *
 * @example
 * ```ts
 * softmax([1, 2, 3]);
 * // ≈ [0.0900, 0.2447, 0.6652]
 * ```
 *
 * @example
 * ```ts
 * softmax([0, 0, 0]);
 * // [0.3333, 0.3333, 0.3333]
 * ```
 */
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
/**
 * Approximates the Riemann zeta function using a finite series.
 *
 * @param s - Exponent parameter of the zeta function.
 * @param N - Number of terms used in the approximation. Defaults to 100000.
 * @returns An approximation of ζ(s).
 *
 * @remarks
 * The Riemann zeta function is defined as:
 *
 * ζ(s) = Σ(1 / n^s)
 *
 * for n = 1 to ∞.
 *
 * This implementation truncates the infinite series after `N` terms,
 * providing an approximation that becomes more accurate as `N` increases.
 * The series converges for values of `s > 1`.
 *
 * @example
 * ```ts
 * Zeta(2);
 * // ≈ 1.644934
 * ```
 *
 * @example
 * ```ts
 * Zeta(3);
 * // ≈ 1.202057
 * ```
 */
export function Zeta(s, N = 100000) {
    let sum = 0;
    for (let n = 1; n <= N; n++) {
        sum += 1 / Math.pow(n, s);
    }
    return sum;
}
//# sourceMappingURL=f.js.map