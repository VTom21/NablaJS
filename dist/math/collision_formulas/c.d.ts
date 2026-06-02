interface Box2D {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface Sphere {
    x: number;
    y: number;
    z: number;
    radius: number;
}
interface Box3D {
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    depth: number;
}
interface Point2D {
    x: number;
    y: number;
}
interface Circle {
    x: number;
    y: number;
    radius: number;
}
export declare function CTC(x1: number, x2: number, y1: number, y2: number, r1: number, r2: number): boolean;
export declare function AABB2(boxA: Box2D, boxB: Box2D): boolean;
export declare function PVSC(point: Point2D, circle: Circle): boolean;
export declare function STS(a: Sphere, b: Sphere): boolean;
export declare function AABB3(boxA: Box3D, boxB: Box3D): boolean;
export {};
//# sourceMappingURL=c.d.ts.map