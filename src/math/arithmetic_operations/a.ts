import {Term} from "../symbols/s.js"



export function add(a: Term | number, b: Term | number) {

    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;

    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;

    if (left.symbol === "" && right.symbol === "") {

        return left.coefficient + right.coefficient;
    }

    if (left.symbol === right.symbol) {
        return `${left.coefficient + right.coefficient}${left.symbol}`
    }

    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;

        return `${term.coefficient}${term.symbol} + ${num}`
    }

    return `${left.coefficient}${left.symbol} + ${right.coefficient}${right.symbol}`

}

export function subtract(a : Term | number , b : Term | number) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;

    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;

    if (left.symbol === "" && right.symbol === "") {

        return left.coefficient - right.coefficient;
    }

    if (left.symbol === right.symbol) {
        return `${left.coefficient - right.coefficient}${left.symbol}`
    }

    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;

        return `${term.coefficient}${term.symbol} - ${num}`
    }

    return `${left.coefficient}${left.symbol} - ${right.coefficient}${right.symbol}`
}

export function multiply(a : Term | number , b : Term | number){
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;

    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;

    if (left.symbol === "" && right.symbol === "") {

        return left.coefficient * right.coefficient;
    }

    if (left.symbol === right.symbol) {
        return `${left.coefficient * right.coefficient}${left.symbol}`
    }

    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;

        return `${term.coefficient}${term.symbol} * ${num}`
    }

    return `${left.coefficient}${left.symbol} * ${right.coefficient}${right.symbol}`
}

export function divide(a : Term | number , b : Term | number) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;

    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;

    if (left.symbol === "" && right.symbol === "") {

        return left.coefficient / right.coefficient;
    }

    if (left.symbol === right.symbol) {
        return `${left.coefficient / right.coefficient}${left.symbol}`
    }

    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;

        return `${term.coefficient}${term.symbol} / ${num}`
    }

    return `${left.coefficient}${left.symbol} / ${right.coefficient}${right.symbol}`
}

export function power(a : Term | number , b : Term | number) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;

    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;

    if (left.symbol === "" && right.symbol === "") {

        return left.coefficient ** right.coefficient;
    }

    if (left.symbol === right.symbol) {
        return `${left.coefficient ** right.coefficient}${left.symbol}`
    }

    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;

        return {
        symbol: left.symbol,
        base: left.coefficient,
        power: right.coefficient,
        full:`${left.coefficient}${left.symbol}^${right.coefficient}${right.symbol}`
        }
    }

    return {
        base: a,
        power: b,
        full:`${left.coefficient}${left.symbol}^${right.coefficient}${right.symbol}`
    }
}

export function root(a: number | Term){
    if(typeof a === "number"){
        return Math.sqrt(a);
    }
    return {
        kind: "term",
        coefficient: Math.sqrt(a.coefficient),
        symbol: a.symbol,
        full: `√${a.coefficient}${a.symbol}`
    }
}


export function increment(a: number) : number {
    return a += 1;
}

export function decrement(a: number) : number {
    return a -= 1;
}

export function incrementBy(a: number, value: number) : number {
    return a += value;
}

export function decrementBy(a: number, value: number) : number {
    return a -= value;
}

export function modulus(value: number) : number{
    return Math.abs(value);
}

export function log(value: number) : number{
    return Math.log10(value);
}

export function ln(value: number) : number{
    return Math.log(value);
}

export function logCustom(base: number, value: number) : number{
    return Math.log(value) / Math.log(base);
}