/**
 * Computes the logical AND of multiple binary inputs.
 *
 * @param gate - Array of binary values (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * The AND gate returns true only when all inputs are 1.
 *
 * @example
 * ```ts
 * AND([1, 1, 1]);
 * // { output: true, numeric: 1 }
 * ```
 *
 * @example
 * ```ts
 * AND([1, 0, 1]);
 * // { output: false, numeric: 0 }
 * ```
 */
export declare function AND(gate: Number[]): {
    output: boolean;
    numeric: number;
};
/**
 * Passes a binary input through unchanged.
 *
 * @param gate - A binary value (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * A BUFFER gate does not alter the input state.
 *
 * @example
 * ```ts
 * BUFFER(1);
 * // { output: true, numeric: 1 }
 * ```
 */
export declare function BUFFER(gate: Number): {
    output: boolean;
    numeric: number;
} | undefined;
/**
 * Computes the logical NOT of a binary input.
 *
 * @param gate - A binary value (0 or 1).
 * @returns An object containing the inverted boolean output and numeric equivalent.
 *
 * @remarks
 * The NOT gate returns the opposite logical state of its input.
 *
 * @example
 * ```ts
 * NOT(1);
 * // { output: false, numeric: 0 }
 * ```
 *
 * @example
 * ```ts
 * NOT(0);
 * // { output: true, numeric: 1 }
 * ```
 */
export declare function NOT(gate: Number): {
    output: boolean;
    numeric: number;
} | undefined;
/**
 * Computes the logical OR of multiple binary inputs.
 *
 * @param gate - Array of binary values (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * The OR gate returns true when at least one input is 1.
 *
 * @example
 * ```ts
 * OR([0, 1, 0]);
 * // { output: true, numeric: 1 }
 * ```
 */
export declare function OR(gate: Number[]): {
    output: boolean;
    numeric: number;
};
/**
 * Computes the logical NAND of multiple binary inputs.
 *
 * @param gate - Array of binary values (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * The NAND gate is the inverse of the AND gate.
 * It returns false only when all inputs are 1.
 *
 * @example
 * ```ts
 * NAND([1, 1]);
 * // { output: false, numeric: 0 }
 * ```
 */
export declare function NAND(gate: Number[]): {
    output: boolean;
    numeric: number;
};
/**
 * Computes the logical NOR of multiple binary inputs.
 *
 * @param gate - Array of binary values (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * The NOR gate is the inverse of the OR gate.
 * It returns true only when all inputs are 0.
 *
 * @example
 * ```ts
 * NOR([0, 0, 0]);
 * // { output: true, numeric: 1 }
 * ```
 */
export declare function NOR(gate: Number[]): {
    output: boolean;
    numeric: number;
};
/**
 * Computes the logical XOR (exclusive OR) of multiple binary inputs.
 *
 * @param gate - Array of binary values (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * XOR returns true when an odd number of inputs are 1.
 *
 * @example
 * ```ts
 * XOR([1, 0]);
 * // { output: true, numeric: 1 }
 * ```
 *
 * @example
 * ```ts
 * XOR([1, 1]);
 * // { output: false, numeric: 0 }
 * ```
 */
export declare function XOR(gate: Number[]): {
    output: boolean;
    numeric: number;
};
/**
 * Computes the logical XNOR (exclusive NOR) of multiple binary inputs.
 *
 * @param gate - Array of binary values (0 or 1).
 * @returns An object containing the boolean output and numeric equivalent.
 *
 * @remarks
 * XNOR returns true when an even number of inputs are 1.
 * It is the inverse of XOR.
 *
 * @example
 * ```ts
 * XNOR([1, 1]);
 * // { output: true, numeric: 1 }
 * ```
 *
 * @example
 * ```ts
 * XNOR([1, 0]);
 * // { output: false, numeric: 0 }
 * ```
 */
export declare function XNOR(gate: Number[]): {
    output: boolean;
    numeric: number;
};
//# sourceMappingURL=b.d.ts.map