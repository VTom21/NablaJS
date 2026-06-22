import { factorial } from "../formulas/f.js";

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

export interface MultiTerm {
    coefficient: number;
    variables: Record<string, Fraction>;
}

/**
 * Adds `1` to a fraction: `numerator/denominator + 1`.
 *
 * @internal
 * @param frac - The fraction to increment.
 * @returns A new {@link Fraction} equal to `frac + 1`, expressed over
 * the same denominator (`(numerator + denominator) / denominator`).
 *
 * @example
 * ```ts
 * addOneToFraction({ numerator: 1, denominator: 2 }); // { numerator: 3, denominator: 2 } i.e. 3/2
 * ```
 */

function addOneToFraction(frac: Fraction): Fraction {
    return {
        numerator: frac.numerator + frac.denominator,
        denominator: frac.denominator
    };
}

/**
 * Formats a {@link Fraction} as a display string: just the numerator
 * if the denominator is `1`, otherwise `"numerator/denominator"`.
 *
 * @internal
 * @example
 * ```ts
 * formatPower({ numerator: 3, denominator: 1 }); // "3"
 * formatPower({ numerator: 3, denominator: 2 }); // "3/2"
 * ```
 */

function formatPower(power: Fraction): string {
    if (power.denominator === 1) return power.numerator.toString();
    return `${power.numerator}/${power.denominator}`;
}

/**
 * Builds a {@link Fraction} from a single integer (or numerator with
 * an optional denominator), e.g. for whole-number powers.
 *
 * @param numerator - The numerator (or the whole value, if `denominator` is omitted).
 * @param denominator - The denominator. Defaults to `1`.
 *
 * @example
 * ```ts
 * single(3);    // { numerator: 3, denominator: 1 }
 * single(1, 2); // { numerator: 1, denominator: 2 }  i.e. 1/2
 * ```
 */

export function single(numerator: number, denominator = 1) : Fraction{
    return {numerator, denominator}
}


/**
 * Integrates a single power term `coefficient · symbol^power` with
 * respect to `symbol`, using the power rule:
 * `∫xⁿ dx = xⁿ⁺¹ / (n+1)` (and the `n = -1` special case, `∫x⁻¹ dx = ln(x)`).
 *
 * @param term - The term to integrate.
 * @returns The integrated {@link Term}.
 *
 * @remarks
 * Does **not** add a constant of integration (`+ C`) — the result is
 * the antiderivative only. Verified against the power rule for integer
 * and fractional exponents, and the `ln(x)` special case at `n = -1`.
 *
 * @example
 * ```ts
 * integrate({ coefficient: 1, symbol: "x", power: { numerator: 2, denominator: 1 }, full: "x^2" });
 * // → coefficient ≈ 0.333..., power 3/1, full "0.333...x^(3)"  i.e. (1/3)x³
 *
 * integrate({ coefficient: 1, symbol: "x", power: { numerator: -1, denominator: 1 }, full: "x^-1" });
 * // → full: "1ln(x)"
 * ```
 */

export function integrate(term: Term): Term {

    if (term.power.numerator === -1 && term.power.denominator === 1) {
        return {
            coefficient: term.coefficient,
            symbol: term.symbol,
            power: { numerator: 0, denominator: 1 }, 
            full: `${term.coefficient}ln(${term.symbol})`
        };
    }

    const newPower = addOneToFraction(term.power);

    const newCoefficient = term.coefficient / (newPower.numerator / newPower.denominator);

    return {
        coefficient: newCoefficient,
        symbol: term.symbol,
        power: newPower,
        full: `${newCoefficient}${term.symbol}^(${formatPower(newPower)})`
    };
}

/**
 * Differentiates a single power term `coefficient · symbol^power` with
 * respect to `symbol`, using the power rule: `d/dx(xⁿ) = n·xⁿ⁻¹`.
 *
 * @param term - The term to differentiate.
 * @returns The differentiated {@link Term}.
 *
 * @remarks
 * Verified against the power rule for integer powers (e.g. `x³ → 3x²`),
 * and correctly collapses to a bare constant (`full: "5"`, no `symbol`)
 * when the new power is `0`, and drops the `^1` exponent display when
 * the new power is exactly `1`.
 *
 * @example
 * ```ts
 * derivative({ coefficient: 1, symbol: "x", power: { numerator: 3, denominator: 1 }, full: "x^3" });
 * // → coefficient: 3, power: 2/1, full: "3x^(2)"  i.e. 3x²
 *
 * derivative({ coefficient: 5, symbol: "x", power: { numerator: 0, denominator: 1 }, full: "5" });
 * // → coefficient: 0, full: "0"  (derivative of a constant)
 * ```
 */

export function derivative(term: Term): Term {

    if (term.power.numerator === 0) {
        return {
            coefficient: 0,
            symbol: term.symbol,
            power: single(0),
            full: "0"
        };
    }

    const newCoefficient = term.coefficient * (term.power.numerator / term.power.denominator);

    const newPower = {
        numerator: term.power.numerator - term.power.denominator,
        denominator: term.power.denominator
    };

    let full: string;

    if (newPower.numerator === 0) {
        full = `${newCoefficient}`;
    } else if (
        newPower.numerator === 1 &&
        newPower.denominator === 1
    ) {
        full = `${newCoefficient}${term.symbol}`;
    } else {
        full = `${newCoefficient}${term.symbol}^(${formatPower(newPower)})`;
    }

    return {
        coefficient: newCoefficient,
        symbol: term.symbol,
        power: newPower,
        full
    };
}

/**
 * Computes the Gamma function `Γ(n)` via the recursive identity
 * `Γ(n) = (n-1)·Γ(n-1)`, bottoming out at `Γ(1) = 1` and `Γ(0.5) = √π`.
 *
 * @param n - The input value. See remarks for which values terminate.
 *
 * @remarks
 * **This only terminates for positive integers and values of the form
 * `integer + 0.5`.** Any other input (e.g. `0.3`, or a large integer
 * like `100000`) recurses without hitting either base case and throws
 * `RangeError: Maximum call stack size exceeded` — verified directly.
 * There's no iteration limit or input validation guarding this.
 *
 * @example
 * ```ts
 * Gamma(5);   // 24   (4!)
 * Gamma(0.5); // √π
 * Gamma(0.3); // throws RangeError — never reaches a base case
 * ```
 */

export function Gamma(n: number): number {
    if (n === 1) return 1;
    if (n === 0.5) return Math.sqrt(Math.PI);
    return (n - 1) * Gamma(n - 1);
}

/**
 * Computes the Digamma function `ψ(n)`, the logarithmic derivative of
 * the Gamma function, via the recurrence `ψ(n) = ψ(n-1) + 1/(n-1)`,
 * bottoming out at `ψ(1) = -γ` (the negative Euler–Mascheroni constant).
 *
 * @param n - The input value.
 *
 * @remarks
 * **Only terminates when repeatedly subtracting `1` from `n` lands
 * exactly on `1`** — i.e. positive integers. Verified: `Digamma(0.3)`
 * throws `RangeError: Maximum call stack size exceeded`, since
 * subtracting `1` from `0.3` repeatedly never reaches `1` (it passes
 * through `-0.7`, `-1.7`, ... toward `-Infinity`).
 *
 * @example
 * ```ts
 * Digamma(1); // -0.5772156649 (-γ)
 * Digamma(2); // 1 - γ
 * Digamma(0.3); // throws RangeError
 * ```
 */

export function Digamma(n:number): number{
    if (n === 1) return -0.5772156649;
    return Digamma(n - 1) + 1 /(n - 1);
}

/**
 * Computes the Trigamma function `ψ₁(n)`, the derivative of {@link Digamma},
 * via the recurrence `ψ₁(n) = ψ₁(n-1) - 1/(n-1)²`, bottoming out at
 * `ψ₁(1) = π²/6`.
 *
 * @param n - The input value.
 *
 * @remarks
 * Same termination caveat as {@link Digamma}: only reliably terminates
 * for positive integers.
 *
 * @example
 * ```ts
 * Trigamma(1); // π²/6
 * ```
 */

export function Trigamma(n: number): number {
    if (n === 1) return Math.PI ** 2 / 6;
    return Trigamma(n - 1) - 1 / (n - 1) ** 2;
}


export function partial(term: MultiTerm, variable: string) {
    const power = term.variables[variable];

    if (!power) {
        return {
            coefficient: 0,
            variables: {},
            full: "0"
        };
    }

    const exponent = power.numerator / power.denominator;

    const newVariables = structuredClone(term.variables);

    newVariables[variable] = {
        numerator: power.numerator - power.denominator,
        denominator: power.denominator
    };

    if (newVariables[variable].numerator === 0) {
        delete newVariables[variable];
    }

    const result = {
        coefficient: term.coefficient * exponent,
        variables: newVariables
    };

    // 👇 inline "full" construction (no helper function)
    let full = `${result.coefficient}`;

    for (const key in result.variables) {
        const p = result.variables[key];
        const exp = p!.numerator / p!.denominator;

        if (exp === 1) {
            full += key;
        } else if (exp !== 0) {
            full += `${key}^(${p!.numerator}/${p!.denominator})`;
        }
    }

    return {
        ...result,
        full
    };
}

export function gradient2D( termX: MultiTerm, termY: MultiTerm, x?: number, y?: number) {

    if (x === undefined || y === undefined) {
        return {
            x: termX,
            y: termY
        };
    }

    const xVarX = termX.variables.x;
    const yVarX = termX.variables.y;

    const xVarY = termY.variables.x;
    const yVarY = termY.variables.y;

    const dx = termX.coefficient * Math.pow(x, xVarX ? xVarX.numerator / xVarX.denominator : 0) * Math.pow(y, yVarX ? yVarX.numerator / yVarX.denominator : 0);

    const dy = termY.coefficient * Math.pow(x, xVarY ? xVarY.numerator / xVarY.denominator : 0) * Math.pow(y, yVarY ? yVarY.numerator / yVarY.denominator : 0);

    return { x:dx, y:dy };
}
