import * as Nabla from "./dist/index.js"


console.log(Nabla.IsGreater(5, 2));
console.log(Nabla.IsLess(2, 5));

console.log(Nabla.modulus(-0.001));

console.log(Nabla.log(12));
console.log(Nabla.ln(12));
console.log(Nabla.logCustom(2,32));
console.log(Nabla.root(16));

console.log(Nabla.PI(16))
console.log(Nabla.EULER(16))
console.log(Nabla.GOLDEN_RATIO(16))
console.log(Nabla.SILVER_RATIO(16))
console.log(Nabla.TAU(16))
console.log(Nabla.CATALAN(16))
console.log(Nabla.GAUSS(16))
console.log(Nabla.LEMNISCATE(16))
console.log(Nabla.LAPLACE(16))
console.log(Nabla.OMEGA(16))
console.log(Nabla.STEPHENS(16))
console.log(Nabla.WALLIS(16))
console.log(Nabla.BERNSTEIN(16))

console.log(Nabla.average([1,2]))
console.log(Nabla.mode([1,1,1,2,2,2,2]))

console.log(Nabla.median([15,15,16,17,17,17,18,18,18,18,19,19,19]));

console.log(Nabla.factorial(6));
console.log(Nabla.isPrime(17));

console.log(Nabla.percentage(50,110));
console.log(Nabla.rootBy(3, 6));

console.log(Nabla.IsOdd(25607));
console.log(Nabla.triangular(5));

console.log(Nabla.divisors(10));
console.log(Nabla.isPalindrome(123));

console.log(Nabla.Combination(7,3));
console.log(Nabla.Sin(10));
console.log(Nabla.Cos(10));
console.log(Nabla.Tan(10));
console.log(Nabla.Cot(10));
console.log(Nabla.Sec(10));
console.log(Nabla.Csc(10));

console.log(Nabla.standard_deviation([76,84,69,92,58,89,73,97,85,77]));

let result = Nabla.variance([1,2,3,4,5,6]);

console.log(result.population_variance);
console.log(result.sample_variance);

let result2 = Nabla.skewness([5, 6, 7, 8, 9, 10, 11, 1], "sample_deviation");

console.log(result2.Pearson_First);
console.log(result2.Pearson_Second);
let result3 = Nabla.kurtosis([2, 4, 4, 4, 5, 5, 7, 9]);

console.log(result3.Kurtosis);
console.log(result3.Kurtosis_Excess);

let t = Nabla.Hyperboloid();

console.log(t.volume(1,2,3));

console.log(Nabla.percentile([80, 90, 70, 60, 100], 60));
console.log(Nabla.correlation([1,2,3,4,5], [2,4,5,4,5]));

console.log(Nabla.divisors(11))
console.log(Nabla.coprime(14,16));
console.log(Nabla.summation(11));

console.log(Nabla.Matrix_Divide([[1,2], [3,4]], [[5,6], [7,8]]));
console.log(Nabla.Cross_Product([[1],[2],[3]], [[4],[5],[6]]));

console.log(Nabla.SinH(4));
console.log(Nabla.CosH(4));
console.log(Nabla.TanH(4));

console.log(Nabla.Euclidean_Distance(1,2,3,4));
console.log(Nabla.Manhattan_Distance(1,2,3,4));
console.log(Nabla.Cosine_Similarity([[1,1]], [[2,0]]));

console.log(Nabla.clamp(4, 5, 20));
console.log(Nabla.signum(-11));

console.log(Nabla.Pythagorean(0, 3, 8));

console.log(Nabla.midpoint(0,10,0,20));

console.log(Nabla.quadratic(2, 5, -3));

console.log(Nabla.point_line(3, -2, 3, -4, 5));
console.log(Nabla.Cramer_Rule(2, 1, 5, 1, -1, 1))

const [x] = Nabla.Symbols(13, "x", 10);
const [x1] = Nabla.Symbols(6,"x", 10);


console.log(Nabla.add(6, x.coefficient));
console.log(Nabla.add(x.coefficient, x1.coefficient));

console.log(Nabla.root(x));
console.log(Nabla.power(x1, 1).power)

var variable = Nabla.power(x1, 1/2);

console.log(Nabla.integrate(variable.base, variable.power, variable.symbol).full);


