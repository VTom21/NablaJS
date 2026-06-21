/**
 * Clamps a value between a minimum and maximum range.
 *
 * @param a - The value to clamp.
 * @param min - Lower bound.
 * @param max - Upper bound.
 * @returns The clamped value.
 *
 * @example
 * ```ts
 * clamp(10, 0, 5); // 5
 * ```
 */
export declare function clamp(a: number, min: number, max: number): number;
/**
 * Scales a number by a scalar factor.
 *
 * @param x - Input value.
 * @param s - Scale factor.
 * @returns Scaled value.
 */
export declare function scale(x: number, s: number): number;
/**
 * Multiplies each element of a vector by a scalar.
 *
 * @param a - Input vector.
 * @param b - Scalar value.
 * @returns Scaled vector.
 *
 * @example
 * ```ts
 * vector_scale([1,2,3], 2); // [2,4,6]
 * ```
 */
export declare function vector_scale(a: number[], b: number): number[];
/**
 * Updates 2D velocity using acceleration over time.
 *
 * @param AccelerationX - Acceleration on X axis.
 * @param AccelerationY - Acceleration on Y axis.
 * @param VelocityX - Current velocity X.
 * @param VelocityY - Current velocity Y.
 * @param dt - Delta time.
 * @returns Updated velocity vector.
 *
 * @remarks
 * Uses Euler integration: v = v + a * dt
 */
export declare function updateVelocity2D(AccelerationX: number, AccelerationY: number, VelocityX: number, VelocityY: number, dt: number): {
    vx: number;
    vy: number;
};
/**
 * Updates 3D velocity using acceleration over time.
 *
 * @param AccelerationX - Acceleration X.
 * @param AccelerationY - Acceleration Y.
 * @param AccelerationZ - Acceleration Z.
 * @param VelocityX - Velocity X.
 * @param VelocityY - Velocity Y.
 * @param VelocityZ - Velocity Z.
 * @param dt - Delta time.
 * @returns Updated velocity vector.
 */
export declare function updateVelocity3D(AccelerationX: number, AccelerationY: number, AccelerationZ: number, VelocityX: number, VelocityY: number, VelocityZ: number, dt: number): {
    vx: number;
    vy: number;
    vz: number;
};
/**
 * Moves a point toward a target at a constant speed.
 *
 * @param currentX - Current X position.
 * @param currentY - Current Y position.
 * @param targetX - Target X position.
 * @param targetY - Target Y position.
 * @param speed - Movement speed.
 * @param dt - Delta time.
 * @returns New position after movement step.
 */
export declare function moveTo(currentX: number, currentY: number, targetX: number, targetY: number, speed: number, dt: number): {
    x: number;
    y: number;
};
/**
 * Applies linear friction to a velocity vector.
 *
 * @param vx - Velocity X.
 * @param vy - Velocity Y.
 * @param friction - Friction coefficient.
 * @param dt - Delta time.
 * @returns Damped velocity.
 */
export declare function ApplyFrictionLinear(vx: number, vy: number, friction: number, dt: number): {
    vx: number;
    vy: number;
};
/**
 * Applies exponential friction (continuous damping) to velocity.
 *
 * @param vx - Velocity X.
 * @param vy - Velocity Y.
 * @param friction - Friction coefficient.
 * @param dt - Delta time.
 * @returns Damped velocity.
 */
export declare function ApplyFrictionExp(vx: number, vy: number, friction: number, dt: number): {
    vx: number;
    vy: number;
};
/**
 * Resets a velocity vector to zero.
 *
 * @returns Zero velocity object.
 */
export declare function ResetVelocity(): {
    vx: number;
    vy: number;
};
/**
 * Generates a random number in [0, 1).
 */
export declare function rand(): number;
/**
 * Generates a random number in a given range.
 *
 * @param min - Lower bound.
 * @param max - Upper bound.
 */
export declare function randRange(min: number, max: number): number;
/**
 * Generates a random integer in [min, max].
 */
export declare function randInt(min: number, max: number): number;
/**
 * Returns a random boolean value.
 */
export declare function randBool(): boolean;
/**
 * Returns true with a given probability percentage.
 *
 * @param percent - Probability (0–100).
 */
export declare function randWeight(percent: number): boolean;
/**
 * Generates a random 2D vector with random direction and magnitude.
 *
 * @param min - Minimum magnitude.
 * @param max - Maximum magnitude.
 */
export declare function randVector2D(min?: number, max?: number): {
    x: number;
    y: number;
};
/**
 * Generates a random 3D vector uniformly distributed on a sphere.
 *
 * @param min - Minimum magnitude.
 * @param max - Maximum magnitude.
 */
export declare function randVector3D(min?: number, max?: number): {
    x: number;
    y: number;
    z: number;
};
//# sourceMappingURL=o.d.ts.map