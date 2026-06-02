//Two-dimensional Collision Formulas
export function CTC(x1, x2, y1, y2, r1, r2) {
    return (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) < Math.pow((r1 + r2), 2);
}
export function AABB2(boxA, boxB) {
    return (boxA.x < boxB.x + boxB.width &&
        boxA.x + boxA.width > boxB.x &&
        boxA.y < boxB.y + boxB.height &&
        boxA.y + boxA.height > boxB.y);
}
export function PVSC(point, circle) {
    return Math.sqrt(Math.pow((point.x - circle.x), 2) + Math.pow((point.y - circle.y), 2)) <= circle.radius;
}
//Three-dimensional Collision Formulas
export function STS(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = b.z - a.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    return distance <= a.radius + b.radius;
}
export function AABB3(boxA, boxB) {
    return (boxA.x < boxB.x + boxB.width &&
        boxA.x + boxA.width > boxB.x &&
        boxA.y < boxB.y + boxB.height &&
        boxA.y + boxA.height > boxB.y &&
        boxA.z < boxB.z + boxB.depth &&
        boxA.z + boxA.depth > boxB.z);
}
//# sourceMappingURL=c.js.map