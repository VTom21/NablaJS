//Single-Variable Differential Calculus (I)
export function integrate(coefficient, power, symbol) {
    return {
        coefficient: coefficient / (power + 1),
        full: `${coefficient ? coefficient : ""}^${symbol}^${power + 1} / ${power + 1} = ${coefficient / (power + 1)}${symbol}^${power + 1} + c`
    };
}
//# sourceMappingURL=c.js.map