function addOneToFraction(frac) {
    return {
        numerator: frac.numerator + frac.denominator,
        denominator: frac.denominator
    };
}
function formatPower(power) {
    if (power.denominator === 1)
        return power.numerator.toString();
    return `${power.numerator}/${power.denominator}`;
}
export function single(numerator, denominator = 1) {
    return { numerator, denominator };
}
export function integrate(term) {
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
export function derivative(term) {
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
    let full;
    if (newPower.numerator === 0) {
        full = `${newCoefficient}`;
    }
    else if (newPower.numerator === 1 &&
        newPower.denominator === 1) {
        full = `${newCoefficient}${term.symbol}`;
    }
    else {
        full = `${newCoefficient}${term.symbol}^(${formatPower(newPower)})`;
    }
    return {
        coefficient: newCoefficient,
        symbol: term.symbol,
        power: newPower,
        full
    };
}
//# sourceMappingURL=c.js.map