export declare function average(a: number[]): number;
export declare function mode(a: number[]): number;
export declare function median(a: number[]): number;
export declare function percentage(value: number, total: number): string;
export declare function range(min: number, max: number): number;
export declare function standard_deviation(n: number[]): {
    population_deviation: number;
    sample_deviation: number;
};
export declare function variance(n: number[]): {
    population_variance: number;
    sample_variance: number;
};
export declare function skewness(n: number[], deviation_type: string): {
    Pearson_First: number;
    Pearson_Second: number;
};
export declare function kurtosis(n: number[]): {
    Kurtosis: number;
    Kurtosis_Excess: number;
};
export declare function percentile(numbers: number[], percentile: number): number;
export declare function correlation(x: number[], y: number[]): number;
//# sourceMappingURL=s.d.ts.map