export function AND(gate) {
    return {
        output: gate.every(x => x == 1),
        numeric: gate.every(x => x == 1) ? 1 : 0
    };
}
export function BUFFER(gate) {
    if (typeof (gate) !== "number") {
        return;
    }
    return {
        output: gate == 1,
        numeric: gate == 1 ? 1 : 0
    };
}
export function NOT(gate) {
    if (typeof (gate) !== "number") {
        return;
    }
    return {
        output: gate !== 1,
        numeric: gate !== 1 ? 1 : 0
    };
}
export function OR(gate) {
    return {
        output: gate.some(x => x == 1),
        numeric: gate.some(x => x == 1) ? 1 : 0
    };
}
export function NAND(gate) {
    return {
        output: !gate.every(x => x == 1),
        numeric: !gate.every(x => x == 1) ? 1 : 0
    };
}
export function NOR(gate) {
    return {
        output: !gate.some(x => x == 1),
        numeric: !gate.some(x => x == 1) ? 1 : 0
    };
}
export function XOR(gate) {
    const ones = gate.filter(x => x == 1).length;
    return {
        output: ones % 2 == 1,
        numeric: (ones % 2 == 1) ? 1 : 0
    };
}
export function XNOR(gate) {
    const ones = gate.filter(x => x == 1).length;
    return {
        output: ones % 2 == 0,
        numeric: (ones % 2 == 0) ? 1 : 0
    };
}
//# sourceMappingURL=b.js.map