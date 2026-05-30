import { factorial } from "../formulas/f.js";
export function Permutation(n, r) {
    return factorial(n) / factorial(n - r);
}
export function Combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}
//# sourceMappingURL=c.js.map