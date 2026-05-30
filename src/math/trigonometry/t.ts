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