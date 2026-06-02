export function add(a, b) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;
    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;
    if (left.symbol === "" && right.symbol === "") {
        return left.coefficient + right.coefficient;
    }
    if (left.symbol === right.symbol) {
        return `${left.coefficient + right.coefficient}${left.symbol}`;
    }
    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;
        return `${term.coefficient}${term.symbol} + ${num}`;
    }
    return `${left.coefficient}${left.symbol} + ${right.coefficient}${right.symbol}`;
}
export function subtract(a, b) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;
    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;
    if (left.symbol === "" && right.symbol === "") {
        return left.coefficient - right.coefficient;
    }
    if (left.symbol === right.symbol) {
        return `${left.coefficient - right.coefficient}${left.symbol}`;
    }
    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;
        return `${term.coefficient}${term.symbol} - ${num}`;
    }
    return `${left.coefficient}${left.symbol} - ${right.coefficient}${right.symbol}`;
}
export function multiply(a, b) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;
    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;
    if (left.symbol === "" && right.symbol === "") {
        return left.coefficient * right.coefficient;
    }
    if (left.symbol === right.symbol) {
        return `${left.coefficient * right.coefficient}${left.symbol}`;
    }
    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;
        return `${term.coefficient}${term.symbol} * ${num}`;
    }
    return `${left.coefficient}${left.symbol} * ${right.coefficient}${right.symbol}`;
}
export function divide(a, b) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;
    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;
    if (left.symbol === "" && right.symbol === "") {
        return left.coefficient / right.coefficient;
    }
    if (left.symbol === right.symbol) {
        return `${left.coefficient / right.coefficient}${left.symbol}`;
    }
    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;
        return `${term.coefficient}${term.symbol} / ${num}`;
    }
    return `${left.coefficient}${left.symbol} / ${right.coefficient}${right.symbol}`;
}
export function power(a, b) {
    const left = typeof a === "number" ? { kind: "term", coefficient: a, symbol: "" } : a;
    const right = typeof b === "number" ? { kind: "term", coefficient: b, symbol: "" } : b;
    if (left.symbol === "" && right.symbol === "") {
        return left.coefficient ** right.coefficient;
    }
    if (left.symbol === right.symbol) {
        return `${left.coefficient ** right.coefficient}${left.symbol}`;
    }
    if (left.symbol === "" || right.symbol === "") {
        const term = left.symbol === "" ? right : left;
        const num = left.symbol === "" ? left.coefficient : right.coefficient;
        return {
            symbol: left.symbol,
            base: left.coefficient,
            power: right.coefficient,
            full: `${left.coefficient}${left.symbol}^${right.coefficient}${right.symbol}`
        };
    }
    return {
        base: a,
        power: b,
        full: `${left.coefficient}${left.symbol}^${right.coefficient}${right.symbol}`
    };
}
export function root(a) {
    if (typeof a === "number") {
        return Math.sqrt(a);
    }
    return {
        kind: "term",
        coefficient: Math.sqrt(a.coefficient),
        symbol: a.symbol,
        full: `√${a.coefficient}${a.symbol}`
    };
}
export function increment(a) {
    return a += 1;
}
export function decrement(a) {
    return a -= 1;
}
export function incrementBy(a, value) {
    return a += value;
}
export function decrementBy(a, value) {
    return a -= value;
}
export function modulus(value) {
    return Math.abs(value);
}
export function log(value) {
    return Math.log10(value);
}
export function ln(value) {
    return Math.log(value);
}
export function logCustom(base, value) {
    return Math.log(value) / Math.log(base);
}
//# sourceMappingURL=a.js.map