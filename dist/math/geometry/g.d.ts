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
export declare function Square(): {
    area: (a: number) => number;
    perimeter: (a: number) => number;
};
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
export declare function Rectangle(): {
    area: (a: number, b: number) => number;
    perimeter: (a: number, b: number) => number;
};
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
export declare function Circle(): {
    area: (r: number) => number;
    diameter: (r: number) => number;
    circumference: (r: number) => number;
};
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
export declare function Triangle(): {
    area: (b: number, h: number) => number;
    perimeter: (a: number, b: number, c: number) => number;
};
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
export declare function Trapezoid(): {
    area: (a: number, b: number, h: number) => number;
};
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
export declare function Ellipse(): {
    area: (a: number, b: number) => number;
};
/**
 * Provides volume calculation for a cube.
 *
 * @returns An object containing:
 * - volume(a): cube volume
 */
export declare function Cube(): {
    volume: (a: number) => number;
};
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
export declare function Cone(): {
    volume: (r: number, h: number) => number;
    slant_height: (r: number, h: number) => number;
    surface_area: (r: number, h: number) => number;
};
/**
 * Provides geometric properties of a cylinder.
 *
 * @returns An object containing:
 * - volume(r, h)
 * - diameter(r)
 * - surface_area(r, h)
 */
export declare function Cylinder(): {
    volume: (r: number, h: number) => number;
    diameter: (r: number) => number;
    surface_area: (r: number, h: number) => number;
};
/**
 * Provides geometric properties of a sphere.
 *
 * @returns An object containing:
 * - volume(r)
 * - surface_area(r)
 * - circumference(r)
 */
export declare function Sphere(): {
    volume: (r: number) => number;
    surface_area: (r: number) => number;
    circumference: (r: number) => number;
};
/**
 * Provides geometric properties of a cuboid (rectangular prism).
 *
 * @returns An object containing:
 * - volume(l, w, h)
 * - surface_area(l, w, h)
 * - diagonal(l, w, h)
 */
export declare function Cuboid(): {
    volume: (l: number, w: number, h: number) => number;
    surface_area: (l: number, w: number, h: number) => number;
    diagonal: (l: number, w: number, h: number) => number;
};
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
export declare function Prism(): {
    volume: (a: number, b: number, c: number, h: number) => number;
    height: (a: number, b: number, c: number, V: number) => number;
};
/**
 * Provides properties of a regular tetrahedron.
 *
 * @returns An object containing:
 * - volume(a)
 * - height(l)
 */
export declare function Tetrahedron(): {
    volume: (a: number) => number;
    height: (l: number) => number;
};
/**
 * Provides properties of a hemisphere.
 *
 * @returns An object containing:
 * - volume(r)
 * - diameter(r)
 * - surface_area(r)
 * - cap_area(r)
 */
export declare function Hemisphere(): {
    volume: (r: number) => number;
    diameter: (r: number) => number;
    surface_area: (r: number) => number;
    cap_area: (r: number) => number;
};
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
export declare function Torus(): {
    volume: (i: number, o: number) => number;
    surface_area: (i: number, o: number) => number;
};
/**
 * Provides properties of a paraboloid.
 *
 * @returns An object containing:
 * - volume(a, b)
 */
export declare function Paraboloid(): {
    volume: (a: number, b: number) => number;
};
/**
 * Provides volume calculation for a hyperboloid.
 *
 * @returns An object containing:
 * - volume(a, b, h)
 */
export declare function Hyperboloid(): {
    volume: (a: number, b: number, h: number) => number;
};
//# sourceMappingURL=g.d.ts.map