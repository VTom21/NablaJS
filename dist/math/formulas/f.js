export function factorial(n) {
    var result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
export function triangular(n) {
    return (n * (n + 1)) / 2;
}
export function divisors(n) {
    var array = [];
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            array.push(i);
        }
    }
    return array;
}
export function coprime(a, b) {
    var a_divisors = divisors(a);
    var b_divisors = divisors(b);
    var mutual = [];
    for (var num1 of a_divisors) {
        for (var num2 of b_divisors) {
            if (num1 == num2 && num2 == num1) {
                mutual.push(num1);
            }
        }
    }
    for (var m of mutual) {
        if (mutual.length == 1 && m == 1) {
            return true;
        }
    }
    return false;
}
export function summation(n) {
    return (n * (n + 1)) / 2;
}
export function signum(x) {
    if (x > 0) {
        return 1;
    }
    if (x == 0) {
        return 0;
    }
    return -1;
}
//# sourceMappingURL=f.js.map