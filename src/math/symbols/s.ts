import * as Nabla from "../../index.js" 

export interface Term {
  kind: "term";
  coefficient: number,
  symbol: string;
}

/**
 * Creates symbolic terms from a collection of symbols and optional coefficients.
 *
 * @param args - A sequence containing:
 * - An optional leading coefficient.
 * - One or more symbol names.
 * - An optional trailing substitution value.
 *
 * @returns An array of symbolic terms.
 *
 * @remarks
 * If the first argument is numeric, it is treated as the coefficient.
 * If the last argument is numeric, it is treated as a substitution value
 * and multiplied into the coefficient.
 *
 * Examples:
 * - `Symbols("x", "y")` → x, y
 * - `Symbols(3, "x")` → 3x
 * - `Symbols(3, "x", 2)` → coefficient becomes 6
 *
 * @example
 * ```ts
 * Symbols("x", "y");
 * // [
 * //   { kind: "term", coefficient: 1, symbol: "x" },
 * //   { kind: "term", coefficient: 1, symbol: "y" }
 * // ]
 *
 * Symbols(4, "x");
 * // [{ kind: "term", coefficient: 4, symbol: "x" }]
 *
 * Symbols(4, "x", 2);
 * // [{ kind: "term", coefficient: 8, symbol: "x" }]
 * ```
 */

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

/**
 * Parses a simple algebraic expression into symbolic terms.
 *
 * @param expr - Expression string consisting of terms joined by `+`.
 * @returns An array of parsed term objects.
 *
 * @remarks
 * Supported syntax:
 * - Numeric coefficients (`3x`)
 * - Variables (`x`)
 * - Constants (`5`)
 * - Square-root terms (`√x`, `√3x`)
 *
 * Unsupported operations such as subtraction, multiplication, powers,
 * parentheses, and division will throw errors.
 *
 * @example
 * ```ts
 * parse("3x+y+5");
 * ```
 *
 * @example
 * ```ts
 * parse("√x+2y");
 * ```
 */

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

/**
 * Evaluates a symbolic expression using supplied variable values.
 *
 * @param expr - Expression string, parsed object, root object, or term object.
 * @param values - Mapping of variable names to numeric values.
 * @returns Evaluated numeric result.
 *
 * @remarks
 * Supports three evaluation modes:
 * - String expressions (automatically parsed)
 * - Parsed root expressions
 * - Individual term objects
 *
 * Missing variables will throw an error.
 *
 * Root expressions are evaluated recursively before applying `Math.sqrt`.
 *
 * @example
 * ```ts
 * substitute("2x+3y", {
 *   x: 5,
 *   y: 2
 * });
 * // 16
 * ```
 *
 * @example
 * ```ts
 * substitute("x+10", {
 *   x: 4
 * });
 * // 14
 * ```
 *
 * @example
 * ```ts
 * const root = parse("√9")[0];
 * substitute(root, {});
 * // 3
 * ```
 */

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