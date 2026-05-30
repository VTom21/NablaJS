import { E } from "../constants/c.js";

export function Sin(n: number) : number{
    return Math.sin(n * (Math.PI / 180));
}

export function Cos(n: number) : number{
    return Math.cos(n * (Math.PI / 180));
}

export function Tan(n: number) : number{
    return Math.tan(n * (Math.PI / 180));
}

export function Cot(n: number) : number{
    return 1 / Math.tan(n * (Math.PI / 180));
}

export function Sec(n: number) : number{
    return 1 / Math.cos(n * (Math.PI / 180));
}

export function Csc(n: number) : number{
    return 1 / Math.sin(n * (Math.PI / 180));
}

export function SinH(n: number): number{
    return (Math.pow(E(), n) - Math.pow(E(), -n)) / 2;
}

export function CosH(n: number): number{
    return (Math.pow(E(), n) + Math.pow(E(), -n)) / 2;
}

export function TanH(n: number): number{
    return SinH(n) / CosH(n);
}

export function CotH(n: number): number{
    return 1 / TanH(n);
}

export function SecH(n: number): number{
    return 1 / CosH(n);
}

export function CscH(n: number): number{
    return 1 / SinH(n);
}