import * as Nabla from "../../index.js" 

export interface Term {
  kind: "term";
  coefficient: number,
  symbol: string;
}

export function Symbols(...args: (number | string)[]): Term[] {
    let coefficient = 1;
    let names: string[] = [];
    let value: number | null = null;

    // detect substitution value (LAST number)
    if (typeof args[args.length - 1] === "number") {
        value = args.pop() as number;
    }

    if (typeof args[0] === "number") {
        coefficient = args[0];
        names = args.slice(1) as string[];
    } else {
        names = args as string[];
    }

    return names.map(symbol => {
        const resultCoeff = value !== null ? coefficient * value : coefficient;

        return {
            kind: "term",
            coefficient: resultCoeff,
            symbol,
            full: value !== null ? `${resultCoeff}`: `${coefficient}${symbol}`,
        };
    });
}

export function parse(expr: string): any[] {

    const tokens = expr
        .replace(/\s+/g, "")
        .split("+");

    return tokens.map(t => {

        // ROOT handling inside token
        if (t.startsWith("√")) {
            const inner = t.slice(1);

            const match = inner.match(/^(\d*)([a-zA-Z]*)$/);

            if (!match) throw new Error(`Invalid root term: ${t}`);

            const coefficient = match[1] === "" ? 1 : Number(match[1]);
            const symbol = match[2] ?? "";

            return {
                type: "root",
                value: {
                    kind: "term",
                    coefficient,
                    symbol
                }
            };
        }

        // NORMAL TERM
        const match = t.match(/^(\d*)([a-zA-Z]*)$/);

        if (!match) throw new Error(`Invalid term: ${t}`);

        const coefficient = match[1] === "" ? 1 : Number(match[1]);
        const symbol = match[2] ?? "";

        return {
            kind: "term",
            coefficient,
            symbol
        };
    });
}

export function substitute(expr: any, values: Record<string, number>): number {

    // CASE 1: string input → parse
    if (typeof expr === "string") {
        const terms = parse(expr);

        let result = 0;

        for (const term of terms) {
            if (term.symbol === "") {
                result += term.coefficient;
                continue;
            }

            const value = values[term.symbol];

            if (value === undefined) {
                throw new Error(`Missing value for ${term.symbol}`);
            }

            result += term.coefficient * value;
        }

        return result;
    }

    // CASE 2: root object
    if (expr.type === "root") {
        return Math.sqrt(substitute(expr.value, values));
    }

    // CASE 3: term object
    if (expr.kind === "term") {
        if (expr.symbol === "") return expr.coefficient;

        const value = values[expr.symbol];

        if (value === undefined) {
            throw new Error(`Missing value for ${expr.symbol}`);
        }

        return expr.coefficient * value;
    }

    throw new Error("Invalid expression type");
}