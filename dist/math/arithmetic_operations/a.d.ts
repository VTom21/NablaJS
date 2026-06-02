import { Term } from "../symbols/s.js";
export declare function add(a: Term | number, b: Term | number): string | number;
export declare function subtract(a: Term | number, b: Term | number): string | number;
export declare function multiply(a: Term | number, b: Term | number): string | number;
export declare function divide(a: Term | number, b: Term | number): string | number;
export declare function power(a: Term | number, b: Term | number): string | number | {
    symbol: string;
    base: number;
    power: number;
    full: string;
} | {
    base: number | Term;
    power: number | Term;
    full: string;
    symbol?: never;
};
export declare function root(a: number | Term): number | {
    kind: string;
    coefficient: number;
    symbol: string;
    full: string;
};
export declare function increment(a: number): number;
export declare function decrement(a: number): number;
export declare function incrementBy(a: number, value: number): number;
export declare function decrementBy(a: number, value: number): number;
export declare function modulus(value: number): number;
export declare function log(value: number): number;
export declare function ln(value: number): number;
export declare function logCustom(base: number, value: number): number;
//# sourceMappingURL=a.d.ts.map