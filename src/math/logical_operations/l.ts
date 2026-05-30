export function IsPositive(a: number) : boolean{
    if(a > 0){
        return true;
    }
    return false;
}

export function IsNegative(a: number) : boolean{
    if(a < 0){
        return true;
    }
    return false;
}

export function IsZero(a: number) : boolean{
    if(a == 0){
        return true;
    }
    return false;
}

export function IsEqual(a: number, b:number) : boolean{
    if(a == b && b == a){
        return true;
    }
    return false;
}


export function IsGreater(a: number, b:number) : boolean{
    if(a > b){
        return true;
    }
    return false;
}

export function IsLess(a: number, b:number) : boolean{
    if(a < b){
        return true;
    }
    return false;
}

export function isPrime(a: number) : boolean{

if(a < 2){
    return false;
}

if(a == 2){
    return true;
}

if(a % 2 == 0){
    return false;
}

for(let i = 3; i <= Math.sqrt(a); i += 2){
    if(a % i == 0){
        return false;
    }
}
return true;

}

export function IsEven(a: number) : boolean{
    if(a % 2 == 0){
        return true;
    }
    return false;
}

export function IsOdd(a: number) : boolean{
    if(a % 2 != 0){
        return true;
    }
    return false;
}

export function isPalindrome(n: number) : boolean {

    var num = n.toString();

    return num === num.split("").reverse().join("")
}