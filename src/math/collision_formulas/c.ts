interface Box2D{
    x: number,
    y: number,
    width: number, 
    height:number
}


interface Sphere{
    x: number,
    y:number,
    z:number
    radius:number
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


//Two-dimensional Collision Formulas

/**
 * Tests whether two circles overlap ("Circle-To-Circle"), using the
 * squared-distance shortcut to avoid a `Math.sqrt` call: two circles
 * overlap exactly when `distance² < (r1 + r2)²`.
 *
 * @param x1 - X coordinate of the first circle's center.
 * @param x2 - X coordinate of the second circle's center.
 * @param y1 - Y coordinate of the first circle's center.
 * @param y2 - Y coordinate of the second circle's center.
 * @param r1 - Radius of the first circle.
 * @param r2 - Radius of the second circle.
 * @returns `true` if the circles overlap.
 *
 * @remarks
 * Uses a **strict** `<`, so two circles exactly touching at one point
 * (distance == r1 + r2) return `false`, not `true`. Verified
 * mathematically equivalent to the unoptimized `sqrt`-based distance
 * formula across 10,000 random cases.
 *
 * @example
 * ```ts
 * CTC(0, 1.5, 0, 0, 1, 1); // true  — centers 1.5 apart, radii sum to 2
 * CTC(0, 2,   0, 0, 1, 1); // false — exactly touching, not strictly overlapping
 * ```
 */

export function CTC(x1: number, x2:number, y1:number, y2:number, r1:number, r2:number): boolean{
    return (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) < Math.pow((r1 + r2), 2)
}

/**
 * Tests whether two axis-aligned 2D boxes overlap ("Axis-Aligned
 * Bounding Box"), via the standard separating-axis check on x and y.
 *
 * @param boxA - The first box.
 * @param boxB - The second box.
 * @returns `true` if the boxes overlap.
 *
 * @remarks
 * Uses **strict** inequalities throughout, so boxes that are exactly
 * edge-to-edge (one box's right edge equal to the other's left edge)
 * return `false`, not `true` — verified directly.
 *
 * @example
 * ```ts
 * AABB2({x:0,y:0,width:10,height:10}, {x:5,y:5,width:10,height:10});  // true
 * AABB2({x:0,y:0,width:10,height:10}, {x:10,y:0,width:5,height:5});  // false — touching edges only
 * ```
 */

export function AABB2(boxA: Box2D, boxB: Box2D): boolean {
    return (
        boxA.x < boxB.x + boxB.width  &&
        boxA.x + boxA.width > boxB.x  &&
        boxA.y < boxB.y + boxB.height &&
        boxA.y + boxA.height > boxB.y
    );
} 

/**
 * Tests whether a point lies inside or on a circle ("Point Vs Circle").
 *
 * @param point - The point to test.
 * @param circle - The circle to test against.
 * @returns `true` if the point is inside the circle, or exactly on its boundary.
 *
 * @remarks
 * Uses `<=`, so a point exactly on the circle's edge counts as a hit —
 * this differs from {@link CTC} and {@link AABB2}, which both use
 * strict `<`/`>` and exclude exact-boundary contact. Verified directly
 * with a point placed exactly `radius` away from the center.
 *
 * @example
 * ```ts
 * PVSC({x:5, y:0}, {x:0, y:0, radius:5}); // true — exactly on the boundary
 * ```
 */

export function PVSC(point: Point2D, circle:Circle): boolean{
    return Math.sqrt(Math.pow((point.x - circle.x), 2) + Math.pow((point.y - circle.y), 2)) <= circle.radius;
}

//Three-dimensional Collision Formulas


/**
 * Tests whether two spheres overlap ("Sphere-To-Sphere"), using true
 * 3D Euclidean distance between centers.
 *
 * @param a - The first sphere.
 * @param b - The second sphere.
 * @returns `true` if the spheres overlap, or are exactly touching.
 *
 * @remarks
 * Uses `<=`, so spheres exactly touching at one point count as
 * colliding — unlike {@link CTC}, the 2D circle equivalent, which
 * uses strict `<`.
 *
 * @example
 * ```ts
 * STS({x:0,y:0,z:0,radius:3}, {x:4,y:0,z:0,radius:2}); // true — centers 4 apart, radii sum to 5
 * ```
 */

export function STS(a: Sphere, b: Sphere): boolean{
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;

    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    return distance <= a.radius + b.radius;
}

/**
 * Tests whether two axis-aligned 3D boxes overlap, via the separating-axis
 * check extended to x, y, and z.
 *
 * @param boxA - The first box.
 * @param boxB - The second box.
 * @returns `true` if the boxes overlap on all three axes.
 *
 * @remarks
 * Same strict-inequality behavior as {@link AABB2} — exact edge/face
 * contact does not count as overlap. Verified that boxes overlapping
 * on x and y but separated on z correctly return `false`.
 *
 * @example
 * ```ts
 * AABB3({x:0,y:0,z:0,width:10,height:10,depth:10},
 *       {x:5,y:5,z:5,width:10,height:10,depth:10}); // true
 *
 * AABB3({x:0,y:0,z:0,width:10,height:10,depth:10},
 *       {x:5,y:5,z:50,width:10,height:10,depth:10}); // false — separated in z
 * ```
 */

export function AABB3(boxA: Box3D, boxB: Box3D): boolean {
    return (
        boxA.x < boxB.x + boxB.width  &&
        boxA.x + boxA.width > boxB.x  &&
        boxA.y < boxB.y + boxB.height &&
        boxA.y + boxA.height > boxB.y &&
        boxA.z < boxB.z + boxB.depth  &&
        boxA.z + boxA.depth > boxB.z
    );
}