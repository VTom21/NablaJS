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

export function CTC(x1: number, x2:number, y1:number, y2:number, r1:number, r2:number): boolean{
    return (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) < Math.pow((r1 + r2), 2)
}

export function AABB2(boxA: Box2D, boxB: Box2D): boolean {
    return (
        boxA.x < boxB.x + boxB.width  &&
        boxA.x + boxA.width > boxB.x  &&
        boxA.y < boxB.y + boxB.height &&
        boxA.y + boxA.height > boxB.y
    );
} 

export function PVSC(point: Point2D, circle:Circle): boolean{
    return Math.sqrt(Math.pow((point.x - circle.x), 2) + Math.pow((point.y - circle.y), 2)) <= circle.radius;
}

//Three-dimensional Collision Formulas

export function STS(a: Sphere, b: Sphere): boolean{
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;

    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    return distance <= a.radius + b.radius;
}

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