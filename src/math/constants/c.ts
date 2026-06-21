
/**
 * Returns an approximation of π (pi) truncated to a given number of digits
 * (excluding the decimal point).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns A floating-point approximation of π based on a truncated constant string.
 *
 * @remarks
 * This function does not perform mathematical computation; it slices a
 * pre-defined string representation of π. The result is not rounded — it is
 * truncated based on character count excluding the decimal point.
 *
 * @example
 * ```ts
 * PI(6); // 3.14159
 * PI(3); // 3.14
 * ```
 */

export function PI(digits = 6) : number{
    const pi = "3.141592653589793"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(pi[i] !== "."){
            counter++;
        }
        value += pi[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns an approximation of Euler’s constant (γ) truncated to a given number
 * of digits (excluding the decimal point).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns A floating-point approximation of Euler’s constant γ.
 *
 * @remarks
 * Despite the name `EULER`, this function returns the Euler–Mascheroni constant
 * (γ ≈ 0.57721), not Euler’s number e. The value is derived from a fixed string
 * and truncated rather than computed.
 *
 * @example
 * ```ts
 * EULER(5); // 0.57721
 * ```
 */

export function EULER(digits = 6) : number{
    const euler = "0.577215664901532"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(euler[i] !== "."){
            counter++;
        }
        value += euler[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the golden ratio (φ).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the golden ratio.
 *
 * @remarks
 * The golden ratio is φ ≈ 1.6180339887. This function truncates a constant
 * string representation rather than computing φ.
 *
 * @example
 * ```ts
 * GOLDEN_RATIO(5); // 1.61803
 * ```
 */

export function GOLDEN_RATIO(digits = 6) : number{
    const ratio = "1.618033988749895"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(ratio[i] !== "."){
            counter++;
        }
        value += ratio[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the silver ratio (δS).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the silver ratio.
 *
 * @remarks
 * The silver ratio is δS ≈ 2.4142135623. This implementation uses a fixed
 * string and truncates it by character count.
 *
 * @example
 * ```ts
 * SILVER_RATIO(5); // 2.41421
 * ```
 */

export function SILVER_RATIO(digits = 6) : number{
    const silver_ratio = "2.414213562373095"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(silver_ratio[i] !== "."){
            counter++;
        }
        value += silver_ratio[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of τ (tau), where τ = 2π.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of tau.
 *
 * @remarks
 * τ ≈ 6.283185307179586. This is a string-based truncation rather than a computed value.
 *
 * @example
 * ```ts
 * TAU(4); // 6.2831
 * ```
 */

export function TAU(digits = 6) : number{
    const tau = "6.283185307179586"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(tau[i] !== "."){
            counter++;
        }
        value += tau[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the lemniscate constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the lemniscate constant.
 *
 * @remarks
 * The lemniscate constant is approximately 2.6220575542. This function
 * slices a fixed string representation.
 *
 * @example
 * ```ts
 * LEMNISCATE(5); // 2.62205
 * ```
 */

export function LEMNISCATE(digits = 6) : number{
    const lemniscate = "2.622057554292119"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(lemniscate[i] !== "."){
            counter++;
        }
        value += lemniscate[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Omega constant (Ω).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Omega constant.
 *
 * @remarks
 * Ω ≈ 0.5671432904. This implementation uses a precomputed string value.
 *
 * @example
 * ```ts
 * OMEGA(5); // 0.56714
 * ```
 */

export function OMEGA(digits = 6) : number{
    const omega = "0.567143290409783"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(omega[i] !== "."){
            counter++;
        }
        value += omega[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Laplace constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Laplace constant.
 *
 * @remarks
 * The Laplace constant is approximately 0.6627434193. This function does not
 * compute it mathematically; it truncates a fixed string representation.
 *
 * @example
 * ```ts
 * LAPLACE(5); // 0.66274
 * ```
 */

export function LAPLACE(digits = 6) : number{
    const laplace = "0.662743419349181"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(laplace[i] !== "."){
            counter++;
        }
        value += laplace[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Wallis constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Wallis constant.
 *
 * @remarks
 * The Wallis constant is approximately 2.0945514815. This function uses a
 * precomputed string and truncates it based on digit count, not mathematical
 * derivation.
 *
 * @example
 * ```ts
 * WALLIS(5); // 2.09455
 * ```
 */

export function WALLIS(digits = 6) : number{
    const wallis = "2.094551481542326"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(wallis[i] !== "."){
            counter++;
        }
        value += wallis[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Gauss constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Gauss constant.
 *
 * @remarks
 * The Gauss constant is approximately 0.8346268416. This is a fixed-string
 * truncation.
 *
 * @example
 * ```ts
 * GAUSS(5); // 0.83462
 * ```
 */

export function GAUSS(digits = 6) : number{
    const gauss = "0.834626841674073"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(gauss[i] !== "."){
            counter++;
        }
        value += gauss[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Catalan constant (G).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Catalan constant.
 *
 * @remarks
 * Catalan’s constant is approximately 0.9159655941. This function does not
 * compute the constant; it truncates a predefined string.
 *
 * @example
 * ```ts
 * CATALAN(5); // 0.91596
 * ```
 */

export function CATALAN(digits = 6) : number{
    const catalan = "0.915965594177219"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(catalan[i] !== "."){
            counter++;
        }
        value += catalan[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Stephens constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Stephens constant.
 *
 * @remarks
 * This constant is less commonly referenced; value is taken from a fixed
 * string representation.
 *
 * @example
 * ```ts
 * STEPHENS(5); // 0.57595
 * ```
 */

export function STEPHENS(digits = 6) : number{
    const stephens = "0.575959968892945"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(stephens[i] !== "."){
            counter++;
        }
        value += stephens[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of the Bernstein constant.
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of the Bernstein constant.
 *
 * @remarks
 * This implementation uses a precomputed constant string.
 *
 * @example
 * ```ts
 * BERNSTEIN(5); // 0.28016
 * ```
 */

export function BERNSTEIN(digits = 6) : number{
    const bernstein = "0.280169499023869"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(bernstein[i] !== "."){
            counter++;
        }
        value += bernstein[i]
    }

    

    return parseFloat(value)
}

/**
 * Returns a truncated approximation of Euler’s number (e).
 *
 * @param digits - Number of digits to include after skipping the decimal point.
 * @returns Approximation of e.
 *
 * @remarks
 * Euler’s number is approximately 2.7182818284. This function truncates a
 * constant string representation.
 *
 * @example
 * ```ts
 * E(5); // 2.71828
 * ```
 */

export function E(digits = 6) : number{
    const bernstein = "2.718281828459045"
    let value = "" 
    let counter = 0;
    for(var i = 0; counter < digits; i++){
        if(bernstein[i] !== "."){
            counter++;
        }
        value += bernstein[i]
    }

    

    return parseFloat(value)
}
