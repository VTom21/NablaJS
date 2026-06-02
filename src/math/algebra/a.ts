export function Pythagorean(a: number, b: number, c: number){

    if(!c || c == 0){
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }
    if(!b || b == 0){
        if(c > a){
            return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))
        }
    }
    if(!a || a == 0){
        if(c > b){
            return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2))
        }
    }
}

export function discriminant(a: number, b: number, c:number){
    let value = Math.pow(b, 2) - (4 * a * c);

    if(value > 0){
        return 2
    }
    if(value < 0){
        return 1
    }
    if(value == 0){
        return 0
    }
}

export function quadratic(a: number, b: number, c:number): [number, number]{
    let discriminant_value = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    let value1 = ((b * (-1)) + discriminant_value) / (2 * a)
    let value2 = ((b * (-1)) - discriminant_value) / (2 * a)

    return [
        value1,
        value2
    ]
}

export function slope(x1: number,x2: number, y1: number,y2: number): number{
    return (y2 - y1) / (x2 - x1)
}

export function midpoint(x1: number,x2: number, y1: number,y2: number): [number, number]{
    return [
        (x1 + x2) / 2, 
        (y1 + y2) / 2
    ]
}