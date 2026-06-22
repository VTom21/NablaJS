<div align="center">
  <img src="/assets/logo.png" alt="Logo" height="150px">
</div><br>
<div align="center">
<h2>NablaJS</h2>
  <img src="https://badgen.net/badge/Build/Passing/2597c4">
  <img src="https://badgen.net/github/last-commit/Vtom21/NablaJS?color=2597c4">
  <img src="https://badgen.net/badge/License/MIT/2597c4"/> <br>
  <img src="https://badgen.net/github/tag/Vtom21/NablaJS?color=2597c4&label=version" />
  <img src="https://badgen.net/github/commits/Vtom21/NablaJS?color=2597c4"><br><br>
  <h3 style="font-size: 1.2em; color: #555;">
    The derivative of great JavaScript
  </h3>
</div>



---

## ∇ What is NablaJS?

**NablaJS** is a lightweight, zero-dependency JavaScript math utility library built for developers who need precision and expressiveness. Named after the ∇ (nabla) operator used in vector calculus, NablaJS brings mathematical power to your JS/TS projects — from basic arithmetic to calculus, statistics, linear algebra, and symbolic computation.

---

## ✨ Features

- 📐 **Calculus** — symbolic differentiation and integration
- 📊 **Statistics** — mean, median, mode, variance, skewness, kurtosis, percentiles, and more
- 🧮 **Linear Algebra** — matrix operations, cross products, distance metrics
- 🔢 **Number Theory** — primes, factorials, divisors, coprimality, combinatorics
- 📐 **Geometry** — Pythagorean theorem, midpoint, quadratic formula, hyperboloid volumes
- 🔣 **Symbolic Math** — symbol creation, symbolic derivatives and integrals
- 🌀 **Trigonometry** — standard and hyperbolic trig functions
- ♾️ **Constants** — high-precision mathematical constants
- ⚡ **Lightweight** — zero dependencies, ESM support

---



## 🚀 Quick Start

```shell
npm i nabla-javascript
```

```js
import * as Nabla from "./node_modules/nabla-javascript/dist/index.js";
```
```js
console.log(Nabla.IsGreater(5, 2)); //true
```

---

## 📚 Library Content



#### Algebra 


| Function | Description |
|---|---|
| `Pythagorean(a, b, c)` | Returns `true` if the three sides satisfy a² + b² = c² |
| `discriminant(a, b, c)` | Calculates b² - 4ac |
| `quadratic(a, b, c)` | Returns the root(s) of a quadratic equation |
| `slope(x1, x2, y1, y2)` | Calculates (y2 - y1) / (x2 - x1) |
| `midpoint(x1, x2, y1, y2)` | Returns the midpoint coordinates between two points |
| `signum(n)` | Returns `-1`, `0`, or `1` based on the sign of `n` |
| `percentage(part, total)` | Calculates `(part / total) × 100` |

#### Arithmetic Operations


| Function | Description |
|---|---|
| `add(a, b)` | Adds two numbers or Terms |
| `subtract(a, b)` | Subtracts `b` from `a` |
| `multiply(a, b)` | Multiplies two numbers or Terms |
| `divide(a, b)` | Divides `a` by `b` |
| `power(a, b)` | Raises `a` to the power of `b` |
| `root(n)` | Square root of a number or Term |
| `rootBy(n, exp)` | Raises `n` to the power of `exp` |
| `modulus(n)` | Negates `n` |
| `log(n)` | Base-10 logarithm |
| `ln(n)` | Natural logarithm |
| `logCustom(base, n)` | Logarithm with a custom base |
| `increment(n)` | Returns `n + 1` |
| `decrement(n)` | Returns `n - 1` |
| `incrementBy(n, value)` | Returns `n + value` |
| `decrementBy(n, value)` | Returns `n - value` |

#### Calculus

| Function | Description |
|---|---|
| `integrate(term)` | Integrates a `Term`; returns a new `Term` |
| `derivative(term)` | Differentiates a `Term`; returns a new `Term` |
| `Gamma(n)` | Gamma function Γ(n); generalizes factorials to real numbers |
| `Digamma(n)` | Digamma function ψ(n); logarithmic derivative of Γ(n) |
| `Trigamma(n)` | Trigamma function ψ⁽¹⁾(n); derivative of ψ(n) |
| `Zeta(s, N?)` | Approximates the Riemann zeta function ζ(s) using a finite summation |

#### Collision Detection

| Function | Description |
|---|---|
| `CTC(x1, x2, y1, y2, r1, r2)` | Circle-to-circle collision (2D) |
| `AABB2(boxA, boxB)` | Axis-aligned bounding box collision (2D) |
| `PVSC(point, circle)` | Point-vs-circle collision (2D) |
| `STS(a, b)` | Sphere-to-sphere collision (3D) |
| `AABB3(boxA, boxB)` | Axis-aligned bounding box collision (3D) |

#### Constants
All constants accept an optional `digits` argument (default: `6`).

| Function | Value |
|---|---|
| `PI(digits?)` | π ≈ 3.14159… |
| `E(digits?)` | e ≈ 2.71828… |
| `EULER(digits?)` | Euler-Mascheroni constant γ ≈ 0.57721… |
| `TAU(digits?)` | τ = 2π ≈ 6.28318… |
| `GOLDEN_RATIO(digits?)` | φ ≈ 1.61803… |
| `SILVER_RATIO(digits?)` | δₛ ≈ 2.41421… |
| `CATALAN(digits?)` | Catalan's constant G ≈ 0.91596… |
| `GAUSS(digits?)` | Gauss's constant ≈ 0.83462… |
| `LEMNISCATE(digits?)` | Lemniscate constant ϖ ≈ 2.62205… |
| `LAPLACE(digits?)` | Laplace limit constant ≈ 0.66274… |
| `OMEGA(digits?)` | Omega constant Ω ≈ 0.56714… |
| `STEPHENS(digits?)` | Stephens' constant ≈ 0.57595… |
| `WALLIS(digits?)` | Wallis product ≈ 2.09455… |
| `BERNSTEIN(digits?)` | Bernstein's constant ≈ 0.28016… |

#### Distance Metrics

| Function | Description |
|---|---|
| `Euclidean_Distance(x1, x2, y1, y2)` | Straight-line distance between two points |
| `Manhattan_Distance(x1, x2, y1, y2)` | Sum of absolute differences per axis |
| `Cosine_Similarity(a, b)` | Cosine similarity between two 2D vectors |
| `Chessboard_Distance(x1, x2, y1, y2)` | Maximum difference across axes (Chebyshev) |

#### Number Theory

| Function | Description |
|---|---|
| `factorial(n)` | Returns `n!` |
| `triangular(n)` | Returns the `n`th triangular number |
| `divisors(n)` | Returns an array of all divisors of `n` |
| `coprime(a, b)` | Returns `true` if `a` and `b` share no common divisors |
| `summation(n)` | Returns the sum of integers from `1` to `n` |
| `signum(n)` | Returns `-1`, `0`, or `1` |

### Geometry

All geometry functions return an object with methods. Call them as `Shape().method(args)`.

**2D Shapes**

| Shape | Methods |
|---|---|
| `Square()` | `.area(a)`, `.perimeter(a)` |
| `Rectangle()` | `.area(a, b)`, `.perimeter(a, b)` |
| `Circle()` | `.area(r)`, `.diameter(r)`, `.circumference(r)` |
| `Triangle()` | `.area(b, h)`, `.perimeter(a, b, c)` |
| `Trapezoid()` | `.area(a, b, h)` |
| `Ellipse()` | `.area(a, b)` |

**3D Shapes**

| Shape | Methods |
|---|---|
| `Cube()` | `.volume(a)` |
| `Cuboid()` | `.volume(l, w, h)`, `.surface_area(l, w, h)`, `.diagonal(l, w, h)` |
| `Sphere()` | `.volume(r)`, `.surface_area(r)`, `.circumference(r)` |
| `Hemisphere()` | `.volume(r)`, `.diameter(r)`, `.surface_area(r)`, `.cap_area(r)` |
| `Cone()` | `.volume(r, h)`, `.surface_area(r, h)`, `.slant_height(r, h)` |
| `Cylinder()` | `.volume(r, h)`, `.diameter(r)`, `.surface_area(r, h)` |
| `Prism()` | `.volume(a, b, c, h)`, `.height(a, b, c, V)` |
| `Tetrahedron()` | `.volume(a)`, `.height(l)` |
| `Torus()` | `.volume(i, o)`, `.surface_area(i, o)` |
| `Paraboloid()` | `.volume(a, b)` |
| `Hyperboloid()` | `.volume(a, b, h)` |

#### Linear Algebra

| Function | Description |
|---|---|
| `Dot_Product(a, b)` | Matrix multiplication (dot product) of two matrices |
| `Matrix_Add(a, b)` | Element-wise addition of two matrices |
| `Matrix_Subtract(a, b)` | Element-wise subtraction of two matrices |
| `Matrix_Divide(a, b)` | Element-wise division of two matrices |
| `Cross_Product(a, b)` | Cross product of two 3D column vectors |
| `magnitude(x, y)` | Calculate the magnitude (length) of a 2D vector |
| `point_line(x, y, A, B, C)` | Distance from a point to a line |
| `Cramer_Rule(a1, b1, c1, a2, b2, c2)` | Solve a 2×2 system using Cramer's Rule |
| `lerp(a, b, t)` | Construct new data point using linear interpolation |
| `toPolar(x, y)` | Converts Cartesian coordinates to polar coordinates  |
| `fromPolar(r, theta)` | Converts polar coordinates to Cartesian coordinates |

#### Logical Operations

| Function | Description |
|---|---|
| `IsPositive(a)` | Returns `true` if `a > 0` |
| `IsNegative(a)` | Returns `true` if `a < 0` |
| `IsZero(a)` | Returns `true` if `a === 0` |
| `IsEqual(a, b)` | Returns `true` if `a === b` |
| `IsGreater(a, b)` | Returns `true` if `a > b` |
| `IsLess(a, b)` | Returns `true` if `a < b` |
| `isPrime(a)` | Checks if a number is prime |
| `IsEven(a)` | Returns `true` if number is even |
| `IsOdd(a)` | Returns `true` if number is odd |
| `isPalindrome(n)` | Checks if number reads the same forward and backward |

#### Statistics

| Function | Description |
|---|---|
| `average(a)` | Computes the mean of an array |
| `mode(a)` | Returns the most frequent value in an array |
| `median(a)` | Returns the middle value (or average of middle values) |
| `percentage(value, total)` | Converts a value into a percentage of a total |
| `range(min, max)` | Returns the difference between max and min |
| `standard_deviation(n)` | Returns population and sample standard deviation |
| `variance(n)` | Returns population and sample variance |
| `skewness(n, deviation_type)` | Computes Pearson skewness coefficients |
| `kurtosis(n)` | Computes kurtosis and excess kurtosis |
| `percentile(numbers, percentile)` | Returns value at a given percentile |
| `correlation(x, y)` | Computes Pearson correlation coefficient |
| `poisson(λ, x)` | Computes the probability of observing exactly x events in a Poisson distribution with mean λ |

### Trigonometry

| Function | Description |
|---|---|
| `Sin(n)` | Sine of angle in degrees |
| `Cos(n)` | Cosine of angle in degrees |
| `Tan(n)` | Tangent of angle in degrees |
| `Cot(n)` | Cotangent of angle in degrees |
| `Sec(n)` | Secant of angle in degrees |
| `Csc(n)` | Cosecant of angle in degrees |
| `SinH(n)` | Hyperbolic sine |
| `CosH(n)` | Hyperbolic cosine |
| `TanH(n)` | Hyperbolic tangent |
| `CotH(n)` | Hyperbolic cotangent |
| `SecH(n)` | Hyperbolic secant |
| `CscH(n)` | Hyperbolic cosecant |

#### Series & Sequences

| Function | Description |
|---|---|
| `Catalan_Series(limit)` | Returns Catalan numbers up to `limit`; converges via `(2n)! / ((n+1)! · n!)` |
| `Harmonic_Series(limit)` | Returns terms of 1 + 1/2 + 1/3 + … diverges to ∞ |
| `Geometric_Series(a, r, n)` | Returns `n` terms of a · rⁿ with first term `a` and ratio `r` |
| `Basel_Series(n)` | Returns terms of 1 + 1/4 + 1/9 + … converges to π²/6 |
| `Padovan_Sequence(n)` | Returns Padovan sequence up to `n`; recurrence P(n) = P(n-2) + P(n-3) |

#### Random / Procedural Utilities

| Function | Description |
|---|---|
| `rand()` | Returns a random value between 0 and 1 |
| `randRange(min, max)` | Returns a random float within a range |
| `randInt(min, max)` | Returns a random integer within a range |
| `randBool()` | Returns a random boolean (50/50 chance) |
| `randWeight(percent)` | Returns true based on probability percentage |
| `randVector2D(min, max)` | Random 2D direction vector with optional magnitude range |
| `randVector3D(min, max)` | Random 3D direction vector with optional magnitude range |

#### Physics / Game-Dev

| Function | Description |
|---|---|
| `scale(x, s)` | Scales a single value by a scalar |
| `vector_scale(a, b)` | Scales each element of a vector by a scalar |
| `updateVelocity2D(ax, ay, vx, vy, dt)` | Updates 2D velocity using acceleration and delta time |
| `updateVelocity3D(ax, ay, az, vx, vy, vz, dt)` | Updates 3D velocity using acceleration and delta time |
| `moveTo(cx, cy, tx, ty, speed, dt)` | Moves a point toward a target at constant speed |
| `ApplyFrictionLinear(vx, vy, friction, dt)` | Applies linear damping to velocity |
| `ApplyFrictionExp(vx, vy, friction, dt)` | Applies exponential (physically-based) damping |
| `ResetVelocity()` | Resets velocity to zero |


#### Machine Learning / Neural Networks

| Function | Description |
|---|---|
| `sigmoid(x)` | Computes the sigmoid activation function σ(x) |
| `softmax(a)` | Converts a vector of scores into a normalized probability distribution |

#### Boolean Algebra

| Function | Description |
|---|---|
| `AND(gate)` | Logical AND gate for multiple binary inputs |
| `OR(gate)` | Logical OR gate for multiple binary inputs |
| `NOT(gate)` | Logical NOT gate |
| `BUFFER(gate)` | Passes a binary input through unchanged |
| `NAND(gate)` | Logical NAND gate |
| `NOR(gate)` | Logical NOR gate |
| `XOR(gate)` | Logical exclusive OR gate |
| `XNOR(gate)` | Logical exclusive NOR gate |

---

## Built-in Plugins (will soon be available in latest-release)

```js
import {Units} from "./dist/plugins.js";
```

### Units

The `Units` plugin provides a flexible way to handle unit conversions, such as length, weight, mass and more. createConverter class defines conversion type whereas the sub-class inside it expects three mandatory parameters: `amount`,  `from-metric`, `to-metric` 

```js
const unit = Units();
const convert = unit.createConverter(unit.length);

console.log(convert(1, "m", "cm")); // 100 cm
```

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) before opening a PR.

```bash
git clone https://github.com/VTom21/NablaJS.git
cd NablaJS
npm install
npm test
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">
  <sub>Built with ∇ by <a href="https://github.com/Vtom21">Vtom21</a></sub>
</div>