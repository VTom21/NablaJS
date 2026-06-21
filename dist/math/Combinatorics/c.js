import { factorial } from "../formulas/f.js";
/**
 * Computes the number of permutations (ordered arrangements) of choosing
 * `r` items from a set of `n` distinct items.
 *
 * @param n - The total number of distinct items.
 * @param r - The number of items to arrange.
 * @returns The number of possible permutations, calculated as n! / (n - r)!
 *
 * @remarks
 * This function assumes `n >= r`. If `r > n`, the factorial of a negative
 * number will be passed to `factorial`, which may produce incorrect results
 * or runtime issues depending on its implementation.
 *
 * @example
 * ```ts
 * Permutation(5, 3); // 60
 * // 5P3 = 5 * 4 * 3
 * ```
 */
export function Permutation(n, r) {
    return factorial(n) / factorial(n - r);
}
/**
 * Computes the number of combinations (unordered selections) of choosing
 * `r` items from a set of `n` distinct items.
 *
 * @param n - The total number of distinct items.
 * @param r - The number of items to choose.
 * @returns The number of possible combinations, calculated as n! / (r! * (n - r)!).
 *
 * @remarks
 * This function also assumes `n >= r`. If `r > n`, invalid factorial inputs
 * may occur. This uses the standard binomial coefficient formula, often
 * referred to as "n choose r".
 *
 * @example
 * ```ts
 * Combination(5, 2); // 10
 * // 5C2 = (5 * 4) / (2 * 1)
 * ```
 */
export function Combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
//# sourceMappingURL=c.js.map