export function IsPositive(a) {
    if (a > 0) {
        return true;
    }
    return false;
}
export function IsNegative(a) {
    if (a < 0) {
        return true;
    }
    return false;
}
export function IsZero(a) {
    if (a == 0) {
        return true;
    }
    return false;
}
export function IsEqual(a, b) {
    if (a == b && b == a) {
        return true;
    }
    return false;
}
export function IsGreater(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}
export function IsLess(a, b) {
    if (a < b) {
        return true;
    }
    return false;
}
export function isPrime(a) {
    if (a < 2) {
        return false;
    }
    if (a == 2) {
        return true;
    }
    if (a % 2 == 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(a); i += 2) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}
export function IsEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    return false;
}
export function IsOdd(a) {
    if (a % 2 != 0) {
        return true;
    }
    return false;
}
export function isPalindrome(n) {
    var num = n.toString();
    return num === num.split("").reverse().join("");
}
//# sourceMappingURL=l.js.map