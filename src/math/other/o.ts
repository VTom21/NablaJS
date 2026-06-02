export function clamp(a: number, min: number, max:number){
    if(a > max){
        return max
    }
    if(a < min){
        return min
    }
    return a;
}
