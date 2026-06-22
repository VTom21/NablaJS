/**
 * Computes the arithmetic mean of a dataset.
 *
 * @param a - Array of numeric values.
 * @returns The average (mean) of all values.
 *
 * @example
 * ```ts
 * average([1, 2, 3, 4]); // 2.5
 * ```
 */
export declare function average(a: number[]): number;
/**
 * Computes the mode of a dataset.
 *
 * @param a - Array of numeric values.
 * @returns The value that appears most frequently.
 *
 * @remarks
 * If multiple values share the highest frequency, the first one encountered
 * is returned.
 *
 * @example
 * ```ts
 * mode([1, 2, 2, 3]); // 2
 * ```
 */
export declare function mode(a: number[]): number;
/**
 * Computes the median of a dataset.
 *
 * @param a - Array of numeric values.
 * @returns The middle value, or the average of the two middle values.
 *
 * @remarks
 * The input array is sorted in-place.
 *
 * @example
 * ```ts
 * median([1, 5, 3]); // 3
 * median([1, 2, 3, 4]); // 2.5
 * ```
 */
export declare function median(a: number[]): number;
/**
 * Calculates what percentage a value represents of a total.
 *
 * @param value - Partial value.
 * @param total - Total value.
 * @returns Percentage as a string with two decimal places.
 *
 * @example
 * ```ts
 * percentage(25, 200); // "12.50"
 * ```
 */
export declare function percentage(value: number, total: number): string;
/**
 * Computes the range of a dataset.
 *
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns Difference between max and min.
 *
 * @example
 * ```ts
 * range(2, 10); // 8
 * ```
 */
export declare function range(min: number, max: number): number;
/**
 * Computes population and sample standard deviation.
 *
 * @param n - Dataset.
 * @returns Population and sample standard deviations.
 *
 * @example
 * ```ts
 * standard_deviation([1,2,3,4]);
 * ```
 */
export declare function standard_deviation(n: number[]): {
    population_deviation: number;
    sample_deviation: number;
};
/**
 * Computes population and sample variance.
 *
 * @param n - Dataset.
 * @returns Population and sample variances.
 *
 * @example
 * ```ts
 * variance([1,2,3,4]);
 * ```
 */
export declare function variance(n: number[]): {
    population_variance: number;
    sample_variance: number;
};
/**
 * Computes Pearson's skewness coefficients.
 *
 * @param n - Dataset.
 * @param deviation_type - Either `"sample_deviation"` or `"population_deviation"`.
 * @returns First and second Pearson skewness coefficients.
 *
 * @remarks
 * Positive values indicate right-skewed distributions, while negative values
 * indicate left-skewed distributions.
 *
 * @example
 * ```ts
 * skewness(data, "sample_deviation");
 * ```
 */
export declare function skewness(n: number[], deviation_type: string): {
    Pearson_First: number;
    Pearson_Second: number;
};
/**
 * Computes kurtosis and excess kurtosis of a dataset.
 *
 * @param n - Dataset.
 * @returns Kurtosis metrics.
 *
 * @remarks
 * Excess kurtosis compares the distribution against a normal distribution,
 * which has excess kurtosis equal to 0.
 *
 * @example
 * ```ts
 * kurtosis(data);
 * ``
 */
export declare function kurtosis(n: number[]): {
    Kurtosis: number;
    Kurtosis_Excess: number;
};
/**
 * Computes a percentile value from a dataset.
 *
 * @param numbers - Dataset.
 * @param percentile - Desired percentile (0–100).
 * @returns Value at the requested percentile position.
 *
 * @remarks
 * This implementation uses a simple index lookup and does not interpolate
 * between neighboring values.
 *
 * @example
 * ```ts
 * percentile([1,2,3,4,5], 50); // 3
 * ```
 */
export declare function percentile(numbers: number[], percentile: number): number;
/**
 * Computes the Pearson correlation coefficient between two datasets.
 *
 * @param x - First dataset.
 * @param y - Second dataset.
 * @returns Correlation coefficient in the range [-1, 1].
 *
 * @remarks
 * Values close to:
 * - 1 indicate strong positive correlation.
 * - -1 indicate strong negative correlation.
 * - 0 indicate little or no linear relationship.
 *
 * @example
 * ```ts
 * correlation([1,2,3], [2,4,6]); // 1
 * ```
 */
export declare function correlation(x: number[], y: number[]): number;
/**
 * Computes the probability mass of a Poisson-distributed random variable.
 *
 * @param u - Expected number of occurrences (λ), must be non-negative.
 * @param x - Number of occurrences to evaluate, typically a non-negative integer.
 * @returns The probability of observing exactly `x` occurrences.
 *
 * @remarks
 * The Poisson distribution models the probability of a given number of events
 * occurring in a fixed interval of time or space when events occur
 * independently and at a constant average rate.
 *
 * Formula:
 * P(X = x) = (λ^x * e^-λ) / x!
 *
 * @example
 * ```ts
 * poisson(3, 2); // ≈ 0.22404180765538775
 * ```
 *
 * @example
 * ```ts
 * poisson(5, 5); // ≈ 0.1754673697678507
 * ```
 */
export declare function poisson(u: number, x: number): number;
//# sourceMappingURL=s.d.ts.map