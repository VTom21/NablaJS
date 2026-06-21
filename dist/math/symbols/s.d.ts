export interface Term {
    kind: "term";
    coefficient: number;
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
export declare function Symbols(...args: (number | string)[]): Term[];
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
export declare function parse(expr: string): any[];
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
export declare function substitute(expr: any, values: Record<string, number>): number;
//# sourceMappingURL=s.d.ts.map