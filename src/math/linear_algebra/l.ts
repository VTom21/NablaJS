export function Dot_Product(a: number[][], b:number[][]) : number[][] {

    
    const array: number[][] = [];

    for(let i = 0; i < a.length; i++){

        const row: number[] = [];

        for(let j = 0; j < (b[0]?.length ?? 0); j++){
            let cell = 0;
            for(let n = 0; n < b.length; n++){
                cell += a[i]![n]! * b[n]![j]!;
            }
            row.push(cell);
        }
        array.push(row)
    }
    return array;
}



export function Matrix_Add(a: number[][], b: number[][]): number[][] {
    const array: number[][] = [];

    for (let i = 0; i < a.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i]![j]! + b[i]![j]!);
        }
        array.push(row);
    }

    return array;
}

export function Matrix_Subtract(a: number[][], b: number[][]): number[][] {
    const array: number[][] = [];

    for (let i = 0; i < a.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i]![j]! - b[i]![j]!);
        }
        array.push(row);
    }

    return array;
}

export function Matrix_Divide(a: number[][], b: number[][]): number[][] {
    const array: number[][] = [];

    for (let i = 0; i < a.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < (a[i]?.length ?? 0); j++) {
            row.push(a[i]![j]! / b[i]![j]!);
        }
        array.push(row);
    }

    return array;
}

export function Cross_Product(a: number[][], b: number[][]): number[][] {
    return [
        [a[1]![0]! * b[2]![0]! - a[2]![0]! * b[1]![0]!],  
        [a[2]![0]! * b[0]![0]! - a[0]![0]! * b[2]![0]!],  
        [a[0]![0]! * b[1]![0]! - a[1]![0]! * b[0]![0]!]   
    ];
}

