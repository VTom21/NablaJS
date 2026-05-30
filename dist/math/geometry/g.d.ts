export declare function Square(): {
    area: (a: number) => number;
    perimeter: (a: number) => number;
};
export declare function Rectangle(): {
    area: (a: number, b: number) => number;
    perimeter: (a: number, b: number) => number;
};
export declare function Circle(): {
    area: (r: number) => number;
    diameter: (r: number) => number;
    circumference: (r: number) => number;
};
export declare function Triangle(): {
    area: (b: number, h: number) => number;
    perimeter: (a: number, b: number, c: number) => number;
};
export declare function Trapezoid(): {
    area: (a: number, b: number, h: number) => number;
};
export declare function Ellipse(): {
    area: (a: number, b: number) => number;
};
export declare function Cube(): {
    volume: (a: number) => number;
};
export declare function Cone(): {
    volume: (r: number, h: number) => number;
    slant_height: (r: number, h: number) => number;
    surface_area: (r: number, h: number) => number;
};
export declare function Cylinder(): {
    volume: (r: number, h: number) => number;
    diameter: (r: number) => number;
    surface_area: (r: number, h: number) => number;
};
export declare function Sphere(): {
    volume: (r: number) => number;
    surface_area: (r: number) => number;
    circumference: (r: number) => number;
};
export declare function Cuboid(): {
    volume: (l: number, w: number, h: number) => number;
    surface_area: (l: number, w: number, h: number) => number;
    diagonal: (l: number, w: number, h: number) => number;
};
export declare function Prism(): {
    volume: (a: number, b: number, c: number, h: number) => number;
    height: (a: number, b: number, c: number, V: number) => number;
};
export declare function Tetrahedron(): {
    volume: (a: number) => number;
    height: (l: number) => number;
};
export declare function Hemisphere(): {
    volume: (r: number) => number;
    diameter: (r: number) => number;
    surface_area: (r: number) => number;
    cap_area: (r: number) => number;
};
export declare function Torus(): {
    volume: (i: number, o: number) => number;
    surface_area: (i: number, o: number) => number;
};
export declare function Paraboloid(): {
    volume: (a: number, b: number) => number;
};
export declare function Hyperboloid(): {
    volume: (a: number, b: number, h: number) => number;
};
//# sourceMappingURL=g.d.ts.map