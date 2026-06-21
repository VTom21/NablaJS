//Two-dimensional shapes
/**
 * Provides area and perimeter calculations for a square.
 *
 * @returns An object containing:
 * - area(a): area of a square with side length a
 * - perimeter(a): perimeter of a square with side length a
 *
 * @example
 * ```ts
 * const s = Square();
 * s.area(4); // 16
 * s.perimeter(4); // 16
 * ```
 */
export function Square() {
    function area(a) {
        return a * a;
    }
    function perimeter(a) {
        return 4 * a;
    }
    return { area, perimeter };
}
/**
 * Provides area and perimeter calculations for a rectangle.
 *
 * @returns An object containing:
 * - area(a, b): area of a rectangle
 * - perimeter(a, b): perimeter of a rectangle
 *
 * @example
 * ```ts
 * const r = Rectangle();
 * r.area(4, 5); // 20
 * r.perimeter(4, 5); // 18
 * ```
 */
export function Rectangle() {
    function area(a, b) {
        return a * b;
    }
    function perimeter(a, b) {
        return 2 * (a + b);
    }
    return { area, perimeter };
}
/**
 * Provides geometric properties for a circle.
 *
 * @returns An object containing:
 * - area(r): area of a circle
 * - diameter(r): diameter of a circle
 * - circumference(r): circumference of a circle
 *
 * @example
 * ```ts
 * const c = Circle();
 * c.area(2);
 * c.diameter(2); // 4
 * ```
 */
export function Circle() {
    function area(r) {
        return Math.PI * Math.pow(r, 2);
    }
    function diameter(r) {
        return r * 2;
    }
    function circumference(r) {
        return 2 * r * Math.PI;
    }
    return { area, diameter, circumference };
}
/**
 * Provides geometric properties for a triangle.
 *
 * @returns An object containing:
 * - area(b, h): triangle area
 * - perimeter(a, b, c): triangle perimeter
 *
 * @example
 * ```ts
 * const t = Triangle();
 * t.area(10, 5); // 25
 * ```
 */
export function Triangle() {
    function area(b, h) {
        return (b * h) / 2;
    }
    function perimeter(a, b, c) {
        return a + b + c;
    }
    return { area, perimeter };
}
/**
 * Provides area calculation for a trapezoid.
 *
 * @returns An object containing:
 * - area(a, b, h): trapezoid area
 *
 * @example
 * ```ts
 * Trapezoid().area(2, 4, 3);
 * ```
 */
export function Trapezoid() {
    function area(a, b, h) {
        return ((a + b) / 2) * h;
    }
    return { area };
}
/**
 * Provides area calculation for an ellipse.
 *
 * @returns An object containing:
 * - area(a, b): ellipse area
 *
 * @example
 * ```ts
 * Ellipse().area(3, 2);
 * ```
 */
export function Ellipse() {
    function area(a, b) {
        return Math.PI * a * b;
    }
    return { area };
}
//Three-dimensional shapes
/**
 * Provides volume calculation for a cube.
 *
 * @returns An object containing:
 * - volume(a): cube volume
 */
export function Cube() {
    function volume(a) {
        return Math.pow(a, 3);
    }
    return { volume };
}
/**
 * Provides geometric properties of a cone.
 *
 * @returns An object containing:
 * - volume(r, h): cone volume
 * - slant_height(r, h): slant height
 * - surface_area(r, h): surface area
 *
 * @remarks
 * Uses Pythagorean theorem for slant height.
 */
export function Cone() {
    function volume(r, h) {
        return 1 / 3 * Math.PI * Math.pow(r, 2) * h;
    }
    function slant_height(r, h) {
        return Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    }
    function surface_area(r, h) {
        var left = Math.PI * Math.pow(r, 2);
        var right = Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
        return left + right;
    }
    return { volume, slant_height, surface_area };
}
/**
 * Provides geometric properties of a cylinder.
 *
 * @returns An object containing:
 * - volume(r, h)
 * - diameter(r)
 * - surface_area(r, h)
 */
export function Cylinder() {
    function volume(r, h) {
        return Math.PI * Math.pow(r, 2) * h;
    }
    function diameter(r) {
        return r * 2;
    }
    function surface_area(r, h) {
        var top_bottom = Math.PI * Math.pow(r, 2);
        var lateral = 2 * Math.PI * r * h;
        return lateral + 2 * top_bottom;
    }
    return { volume, diameter, surface_area };
}
/**
 * Provides geometric properties of a sphere.
 *
 * @returns An object containing:
 * - volume(r)
 * - surface_area(r)
 * - circumference(r)
 */
export function Sphere() {
    function volume(r) {
        return 4 / 3 * Math.PI * Math.pow(r, 3);
    }
    function surface_area(r) {
        return 4 * Math.PI * Math.pow(r, 2);
    }
    function circumference(r) {
        return 2 * Math.PI * r;
    }
    return { volume, surface_area, circumference };
}
/**
 * Provides geometric properties of a cuboid (rectangular prism).
 *
 * @returns An object containing:
 * - volume(l, w, h)
 * - surface_area(l, w, h)
 * - diagonal(l, w, h)
 */
export function Cuboid() {
    function volume(l, w, h) {
        return l * w * h;
    }
    function surface_area(l, w, h) {
        return 2 * ((l * w) + (l * h) + (w * h));
    }
    function diagonal(l, w, h) {
        return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2) + Math.pow(h, 2));
    }
    return { volume, surface_area, diagonal };
}
/**
 * Provides properties of a triangular prism.
 *
 * @returns An object containing:
 * - volume(a, b, c, h)
 * - height(a, b, c, V)
 *
 * @remarks
 * Uses Heron’s formula for triangle area.
 */
export function Prism() {
    function volume(a, b, c, h) {
        var left = 1 / 4 * h;
        var right = Math.sqrt((a + b + c) * (b + c - a) * (c + a - b) * (a + b - c));
        return left * right;
    }
    function height(a, b, c, V) {
        var top = 4 * V;
        var bottom = Math.sqrt((a + b + c) * (b + c - a) * (c + a - b) * (a + b - c));
        return top / bottom;
    }
    return { volume, height };
}
/**
 * Provides properties of a regular tetrahedron.
 *
 * @returns An object containing:
 * - volume(a)
 * - height(l)
 */
export function Tetrahedron() {
    function volume(a) {
        return (Math.pow(a, 3)) / (6 * Math.sqrt(2));
    }
    function height(l) {
        return ((Math.sqrt(6)) / (3)) * l;
    }
    return { volume, height };
}
/**
 * Provides properties of a hemisphere.
 *
 * @returns An object containing:
 * - volume(r)
 * - diameter(r)
 * - surface_area(r)
 * - cap_area(r)
 */
export function Hemisphere() {
    function volume(r) {
        return Sphere().volume(r) / 2;
    }
    function diameter(r) {
        return r * 2;
    }
    function surface_area(r) {
        return 3 * Math.PI * Math.pow(r, 2);
    }
    function cap_area(r) {
        return 2 * Math.PI * Math.pow(r, 2);
    }
    return { volume, diameter, surface_area, cap_area };
}
/**
 * Provides properties of a torus.
 *
 * @returns An object containing:
 * - volume(i, o)
 * - surface_area(i, o)
 *
 * @remarks
 * i = minor radius, o = major radius (as used in this implementation).
 */
export function Torus() {
    function volume(i, o) {
        return (Math.PI * Math.pow(i, 2)) * (2 * Math.PI * o);
    }
    function surface_area(i, o) {
        return Math.pow(Math.PI, 2) * (o - i) * (o + i);
    }
    return { volume, surface_area };
}
/**
 * Provides properties of a paraboloid.
 *
 * @returns An object containing:
 * - volume(a, b)
 */
export function Paraboloid() {
    function volume(a, b) {
        return 1 / 2 * Math.PI * Math.pow(b, 2) * a;
    }
    return { volume };
}
/**
 * Provides volume calculation for a hyperboloid.
 *
 * @returns An object containing:
 * - volume(a, b, h)
 */
export function Hyperboloid() {
    function volume(a, b, h) {
        return Math.PI * h * Math.pow(a, 2) * (1 + (Math.pow(h, 2) / (12 * Math.pow(b, 2))));
    }
    return { volume };
}
//# sourceMappingURL=g.js.map