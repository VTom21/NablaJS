export interface Term {
    kind: "term";
    coefficient: number;
    symbol: string;
}
export declare function Symbols(...args: (number | string)[]): Term[];
export declare function parse(expr: string): any[];
export declare function substitute(expr: any, values: Record<string, number>): number;
//# sourceMappingURL=s.d.ts.map