import {factorial} from "../formulas/f.js"

export function Permutation(n: number, r: number) : number{
    return factorial(n) / factorial(n - r)
}

export function Combination(n: number, r: number): number{
    return factorial(n) / (factorial(r) * factorial(n - r))
}