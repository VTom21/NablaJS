export function average(a: number[]) : number{
    let total = 0;

    for(const num of a){
        total += num
    }

    return total / a.length;
}

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

export function percentage(value: number, total: number){
    return ((value / total) * 100).toFixed(2)
}

export function range(min: number, max: number): number{
    return max - min
}

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

export function percentile(numbers: number[], percentile: number): number {
  numbers.sort((a, b) => a - b);

  const position = numbers.length * (percentile / 100);
  const index = Math.floor(position);

  return numbers[index] ?? 0;
}

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
