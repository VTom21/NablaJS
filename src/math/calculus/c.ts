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


function addOneToFraction(frac: Fraction): Fraction {
    return {
        numerator: frac.numerator + frac.denominator,
        denominator: frac.denominator
    };
}


function formatPower(power: Fraction): string {
    if (power.denominator === 1) return power.numerator.toString();
    return `${power.numerator}/${power.denominator}`;
}

export function single(numerator: number, denominator = 1) : Fraction{
    return {numerator, denominator}
}


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

export function Gamma(n: number): number {
    if (n === 1) return 1;
    if (n === 0.5) return Math.sqrt(Math.PI);
    return (n - 1) * Gamma(n - 1);
}

export function Digamma(n:number): number{
    if (n === 1) return -0.5772156649;
    return Digamma(n - 1) + 1 /(n - 1);
}

export function Trigamma(n: number): number {
    if (n === 1) return Math.PI ** 2 / 6;
    return Trigamma(n - 1) - 1 / (n - 1) ** 2;
}