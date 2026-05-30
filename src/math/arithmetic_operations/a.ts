export function add(a : number , b : number) : number{
    return a + b;
}

export function subtract(a : number , b : number) : number{
    return a - b;
}

export function multiply(a : number , b : number) : number{
    return a * b;
}

export function divide(a : number , b : number) : number {
    return a / b;
}

export function power(a : number , b : number) : number {
    return a ** b;
}

export function root(a: number) : number{
    return Math.sqrt(a);
}

export function rootBy(a: number, value: number) : number{
    return Math.pow(a, value);
}

export function increment(a: number) : number {
    return a += 1;
}

export function decrement(a: number) : number {
    return a -= 1;
}

export function incrementBy(a: number, value: number) : number {
    return a += value;
}

export function decrementBy(a: number, value: number) : number {
    return a -= value;
}

export function modulus(value: number) : number{
    return value * (-1);
}

export function log(value: number) : number{
    return Math.log10(value);
}

export function ln(value: number) : number{
    return Math.log(value);
}

export function logCustom(base: number, value: number) : number{
    return Math.log(value) / Math.log(base);
}