
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

export function average(a: number[]) : number{
    let total = 0;

    for(const num of a){
        total += num
    }

    return total / a.length;
}

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

export function mode(a: number[]): number{
let counts: Record<number, number> = {}
    a.forEach(function(e) {
        if(counts[e] === undefined) {
            counts[e] = 0
        }
        counts[e] += 1
    })

    var mode = 0
    var max = 0;
    Object.entries(counts).forEach(function([key, count]) {
        if(count > max){
            max = count
            mode = Number(key)
        }
    });

    return mode

}

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

export function median(a: number[]) : number{
    var isEven = false; 
    var result: number = 0.0;
    a.sort((x, y) => x - y);

    if(a.length % 2 == 0){
        isEven = true
    }
    else{
        isEven = false
    }
    

    for(let i = 0 ; i < a.length; i++){
        if(!isEven){
            var rounded_index = Math.ceil(a.length / 2) - 1;
            result = a[rounded_index] ?? 0
        }
        else{
            var rounded_index = (a.length / 2) - 1
            result = ((a[rounded_index] ?? 0) + (a[rounded_index + 1] ?? 0)) / 2 
        }
    }

    return result;
}

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

export function percentage(value: number, total: number){
    return ((value / total) * 100).toFixed(2)
}

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

export function range(min: number, max: number): number{
    return max - min
}

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

export function standard_deviation(n: number[]){
    let avg = average(n);
    let array = [];
    let total = 0;

    for(var num of n){
        let val = Math.pow(num - avg, 2);
        array.push(val);
    }

    for(var a in array){
        total += array[a] ?? 0;
    }


    return {
        population_deviation: Math.sqrt(total / n.length),
        sample_deviation: Math.sqrt(total / (n.length - 1))
    };
}

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

export function variance(n: number[]){
    let avg = average(n);
    let array = [];
    let total = 0;

    for(var num of n){
        let val = Math.pow(num - avg, 2);
        array.push(val);
    }

    for(var a in array){
        total += array[a] ?? 0;
    }

    return {
        population_variance: total / n.length,
        sample_variance: total / (n.length - 1)
    }
}

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

export function skewness(n : number[], deviation_type: string){
    let avg_value = average(n);
    let median_value = median(n);
    let mode_value = mode(n);
    let standard_value = 0;


    switch(deviation_type){
        case "sample_deviation":
            standard_value = standard_deviation(n).sample_deviation
            break;
        case "population_deviation":
            standard_value = standard_deviation(n).population_deviation
            break;
        default:
            standard_value = standard_deviation(n).sample_deviation
            break;
    }

    return {
        Pearson_First: (avg_value - mode_value) / standard_value,
        Pearson_Second: 3 * (avg_value - median_value) / standard_value,
    };
}

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

export function kurtosis(n: number[]) {
    const avg = average(n);

    let m2 = 0;
    let m4 = 0;

    for (const x of n) {
        const d = x - avg;
        m2 += d * d;
        m4 += d * d * d * d;
    }

    const mean2 = m2 / n.length;
    const mean4 = m4 / n.length;

    return {
        Kurtosis: mean4 / (mean2 * mean2),
        Kurtosis_Excess: (mean4 / (mean2 * mean2)) - 3
    };
}

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


export function percentile(numbers: number[], percentile: number): number {
  numbers.sort((a, b) => a - b);

  const position = numbers.length * (percentile / 100);
  const index = Math.floor(position);

  return numbers[index] ?? 0;
}

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

export function correlation(x: number[], y: number[]): number {
  const n = x.length;

  const meanX = x.reduce((a, b) => a + b, 0) / n;
  const meanY = y.reduce((a, b) => a + b, 0) / n;

  let numerator = 0;
  let denomX = 0;
  let denomY = 0;

  for (let i = 0; i < n; i++) {
    const dx = (x[i] ?? 0) - meanX;
    const dy = (y[i] ?? 0) - meanY;

    numerator += dx * dy;
    denomX += dx * dx;
    denomY += dy * dy;
  }

  return numerator / Math.sqrt(denomX * denomY);
}
