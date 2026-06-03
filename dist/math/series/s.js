import { factorial } from "../formulas/f.js";
export function Catalan_Series(limit) {
    let array = [];
    let sum = 0;
    for (var i = 0; i < limit; i++) {
        if (i < limit) {
            let value = factorial(2 * i) / (factorial(i + 1) * factorial(i));
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
export function Harmonic_Series(limit) {
    let array = [];
    let sum = 0;
    for (var i = 1; i < limit; i++) {
        if (i < limit) {
            let value = 1 / i;
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
export function Geometric_Series(a, r, n) {
    let array = [];
    let sum = 0;
    for (var i = 0; i < n; i++) {
        if (i < n) {
            let value = a * Math.pow(r, i);
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
export function Basel_Series(n) {
    let array = [];
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i <= n) {
            let value = 1 / Math.pow(i, 2);
            sum += value;
            array.push(value);
        }
    }
    return {
        series: array,
        sum: sum
    };
}
export function Padovan_Sequence(n) {
    let array = [1, 1, 1];
    let sum = 0;
    for (var i = 3; i <= n; i++) {
        array.push(array[i - 2] + array[i - 3]);
        sum += array[i - 2] + array[i - 3];
    }
    return {
        series: array,
        sum: sum + 3
    };
}
//# sourceMappingURL=s.js.map