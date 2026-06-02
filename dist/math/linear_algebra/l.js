export function Dot_Product(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (b[0]?.length ?? 0); j++) {
            let cell = 0;
            for (let n = 0; n < b.length; n++) {
                cell += a[i][n] * b[n][j];
            }
            row.push(cell);
        }
        array.push(row);
    }
    return array;
}
export function Matrix_Add(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i][j] + b[i][j]);
        }
        array.push(row);
    }
    return array;
}
export function Matrix_Subtract(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i][j] - b[i][j]);
        }
        array.push(row);
    }
    return array;
}
export function Matrix_Divide(a, b) {
    const array = [];
    for (let i = 0; i < a.length; i++) {
        const row = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i][j] / b[i][j]);
        }
        array.push(row);
    }
    return array;
}
export function Cross_Product(a, b) {
    return [
        [a[1][0] * b[2][0] - a[2][0] * b[1][0]],
        [a[2][0] * b[0][0] - a[0][0] * b[2][0]],
        [a[0][0] * b[1][0] - a[1][0] * b[0][0]]
    ];
}
export function magnitude(x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
export function point_line(x, y, A, B, C) {
    let top = (A * x) + (B * y) + C;
    let bottom = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
    return top / bottom;
}
export function Cramer_Rule(a1, b1, c1, a2, b2, c2) {
    const D = a1 * b2 - a2 * b1;
    const x = (c1 * b2 - c2 * b1) / D;
    const y = (a1 * c2 - a2 * c1) / D;
    return [x, y];
}
export function lerp(a, b, t) {
    return a + (b - a) * t;
}
//# sourceMappingURL=l.js.map