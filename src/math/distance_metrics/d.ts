import {Dot_Product} from "../linear_algebra/l.js"

export function Euclidean_Distance(x1: number, x2: number, y1: number, y2: number) : number{
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

export function Manhattan_Distance(x1: number, x2: number, y1: number, y2: number): number{
    return Math.abs((x1 - x2)) + Math.abs((y1 - y2))
}

export function Cosine_Similarity(a: number[][], b: number[][]): number {

    const dot = Dot_Product(a, b).flat().reduce((sum, x) => sum + x, 0);

    const magA = Math.sqrt(a.flat().reduce((sum, x) => sum + x * x, 0));
    const magB = Math.sqrt(b.flat().reduce((sum, x) => sum + x * x, 0));


    return dot / (magA * magB);
}