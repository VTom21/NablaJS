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

export function Cosine_Law(a:number = 0, b:number = 0,c:number = 0, alpha:number = 0, beta:number = 0, gamma:number = 0){
    if(c == 0 && a !== 0 && b !== 0 && gamma !== 0){
        let value = Math.sqrt((Math.pow(a!, 2) + (Math.pow(b!, 2)) - (2 * a! * b! * Cos(gamma!))));
        return value;
    }
    if(b == 0 && a !== 0 && c !== 0 && beta !== 0){
        let value = Math.sqrt((Math.pow(a!, 2) + (Math.pow(c!, 2)) - (2 * a! * c! * Cos(beta!))));
        return value;
    }
    if(a == 0 && b !== 0 && c !== 0 && alpha !== 0){
        let value = Math.sqrt((Math.pow(b!, 2) + (Math.pow(c!, 2)) - (2 * b! * c! * Cos(alpha!))));
        return value;
    }
    if(a !== 0 && b !== 0 && c !== 0 && alpha == 0 && beta == 0 && gamma == 0){
        var alphaValue = Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)) * 180 / Math.PI
        var betaValue = Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c))  * 180 / Math.PI
        var gammaValue = Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b))  * 180 / Math.PI
        
        return {
            alpha: alphaValue,
            beta: betaValue,
            gamma: gammaValue
        }
    }
}