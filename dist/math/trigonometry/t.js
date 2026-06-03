import { E } from "../constants/c.js";
export function Sin(n) {
    return Math.sin(n * (Math.PI / 180));
}
export function Cos(n) {
    return Math.cos(n * (Math.PI / 180));
}
export function Tan(n) {
    return Math.tan(n * (Math.PI / 180));
}
export function Cot(n) {
    return 1 / Math.tan(n * (Math.PI / 180));
}
export function Sec(n) {
    return 1 / Math.cos(n * (Math.PI / 180));
}
export function Csc(n) {
    return 1 / Math.sin(n * (Math.PI / 180));
}
export function SinH(n) {
    return (Math.pow(E(), n) - Math.pow(E(), -n)) / 2;
}
export function CosH(n) {
    return (Math.pow(E(), n) + Math.pow(E(), -n)) / 2;
}
export function TanH(n) {
    return SinH(n) / CosH(n);
}
export function CotH(n) {
    return 1 / TanH(n);
}
export function SecH(n) {
    return 1 / CosH(n);
}
export function CscH(n) {
    return 1 / SinH(n);
}
export function Cosine_Law(a = 0, b = 0, c = 0, alpha = 0, beta = 0, gamma = 0) {
    if (c == 0 && a !== 0 && b !== 0 && gamma !== 0) {
        let value = Math.sqrt((Math.pow(a, 2) + (Math.pow(b, 2)) - (2 * a * b * Cos(gamma))));
        return value;
    }
    if (b == 0 && a !== 0 && c !== 0 && beta !== 0) {
        let value = Math.sqrt((Math.pow(a, 2) + (Math.pow(c, 2)) - (2 * a * c * Cos(beta))));
        return value;
    }
    if (a == 0 && b !== 0 && c !== 0 && alpha !== 0) {
        let value = Math.sqrt((Math.pow(b, 2) + (Math.pow(c, 2)) - (2 * b * c * Cos(alpha))));
        return value;
    }
    if (a !== 0 && b !== 0 && c !== 0 && alpha == 0 && beta == 0 && gamma == 0) {
        var alphaValue = Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)) * 180 / Math.PI;
        var betaValue = Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)) * 180 / Math.PI;
        var gammaValue = Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)) * 180 / Math.PI;
        return {
            alpha: alphaValue,
            beta: betaValue,
            gamma: gammaValue
        };
    }
}
//# sourceMappingURL=t.js.map