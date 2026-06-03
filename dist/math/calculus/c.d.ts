export interface Fraction {
    numerator: number;
    denominator: number;
}
export interface Term {
    coefficient: number;
    symbol: string;
    power: Fraction;
    full: string;
}
export declare function single(numerator: number, denominator?: number): Fraction;
export declare function integrate(term: Term): Term;
export declare function derivative(term: Term): Term;
export declare function Gamma(n: number): number;
export declare function Digamma(n: number): number;
export declare function Trigamma(n: number): number;
//# sourceMappingURL=c.d.ts.map