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
//# sourceMappingURL=l.js.map