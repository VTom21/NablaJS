export declare function clamp(a: number, min: number, max: number): number;
export declare function scale(x: number, s: number): number;
export declare function vector_scale(a: number[], b: number): number[];
export declare function updateVelocity2D(AccelerationX: number, AccelerationY: number, VelocityX: number, VelocityY: number, dt: number): {
    vx: number;
    vy: number;
};
export declare function updateVelocity3D(AccelerationX: number, AccelerationY: number, AccelerationZ: number, VelocityX: number, VelocityY: number, VelocityZ: number, dt: number): {
    vx: number;
    vy: number;
    vz: number;
};
export declare function moveTo(currentX: number, currentY: number, targetX: number, targetY: number, speed: number, dt: number): {
    x: number;
    y: number;
};
export declare function ApplyFrictionLinear(vx: number, vy: number, friction: number, dt: number): {
    vx: number;
    vy: number;
};
export declare function ApplyFrictionExp(vx: number, vy: number, friction: number, dt: number): {
    vx: number;
    vy: number;
};
export declare function ResetVelocity(): {
    vx: number;
    vy: number;
};
export declare function rand(): number;
export declare function randRange(min: number, max: number): number;
export declare function randInt(min: number, max: number): number;
export declare function randBool(): boolean;
export declare function randWeight(percent: number): boolean;
export declare function randVector2D(min?: number, max?: number): {
    x: number;
    y: number;
};
export declare function randVector3D(min?: number, max?: number): {
    x: number;
    y: number;
    z: number;
};
//# sourceMappingURL=o.d.ts.map