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
export function clamp(a, min, max) {
    if (a > max) {
        return max;
    }
    if (a < min) {
        return min;
    }
    return a;
}
/**
 * Scales a number by a scalar factor.
 *
 * @param x - Input value.
 * @param s - Scale factor.
 * @returns Scaled value.
 */
export function scale(x, s) {
    return x * s;
}
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
export function vector_scale(a, b) {
    return a.map(element => element * b);
}
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
export function updateVelocity2D(AccelerationX, AccelerationY, VelocityX, VelocityY, dt) {
    const vx = VelocityX + AccelerationX * dt;
    const vy = VelocityY + AccelerationY * dt;
    return { vx, vy };
}
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
export function updateVelocity3D(AccelerationX, AccelerationY, AccelerationZ, VelocityX, VelocityY, VelocityZ, dt) {
    const vx = VelocityX + AccelerationX * dt;
    const vy = VelocityY + AccelerationY * dt;
    const vz = VelocityZ + AccelerationZ * dt;
    return { vx, vy, vz };
}
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
export function moveTo(currentX, currentY, targetX, targetY, speed, dt) {
    const dx = targetX - currentX;
    const dy = targetY - currentY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) {
        return { x: currentX, y: currentY };
    }
    const dirX = dx / distance;
    const dirY = dy / distance;
    const moveX = dirX * speed * dt;
    const moveY = dirY * speed * dt;
    return {
        x: currentX + moveX,
        y: currentY + moveY
    };
}
/**
 * Applies linear friction to a velocity vector.
 *
 * @param vx - Velocity X.
 * @param vy - Velocity Y.
 * @param friction - Friction coefficient.
 * @param dt - Delta time.
 * @returns Damped velocity.
 */
export function ApplyFrictionLinear(vx, vy, friction, dt) {
    const factor = 1 - friction * dt;
    const clampedFactor = Math.max(0, factor);
    return {
        vx: vx * clampedFactor,
        vy: vy * clampedFactor
    };
}
/**
 * Applies exponential friction (continuous damping) to velocity.
 *
 * @param vx - Velocity X.
 * @param vy - Velocity Y.
 * @param friction - Friction coefficient.
 * @param dt - Delta time.
 * @returns Damped velocity.
 */
export function ApplyFrictionExp(vx, vy, friction, dt) {
    const factor = Math.exp(-friction * dt);
    return {
        vx: vx * factor,
        vy: vy * factor
    };
}
/**
 * Resets a velocity vector to zero.
 *
 * @returns Zero velocity object.
 */
export function ResetVelocity() {
    return { vx: 0, vy: 0 };
}
/**
 * Generates a random number in [0, 1).
 */
export function rand() {
    return Math.random();
}
/**
 * Generates a random number in a given range.
 *
 * @param min - Lower bound.
 * @param max - Upper bound.
 */
export function randRange(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Generates a random integer in [min, max].
 */
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Returns a random boolean value.
 */
export function randBool() {
    return Math.random() < 0.5;
}
/**
 * Returns true with a given probability percentage.
 *
 * @param percent - Probability (0–100).
 */
export function randWeight(percent) {
    return Math.random() * 100 < percent;
}
/**
 * Generates a random 2D vector with random direction and magnitude.
 *
 * @param min - Minimum magnitude.
 * @param max - Maximum magnitude.
 */
export function randVector2D(min = 1, max = 1) {
    const angle = Math.random() * Math.PI * 2;
    const magnitude = Math.random() * (max - min) + min;
    return {
        x: Math.cos(angle) * magnitude,
        y: Math.sin(angle) * magnitude
    };
}
/**
 * Generates a random 3D vector uniformly distributed on a sphere.
 *
 * @param min - Minimum magnitude.
 * @param max - Maximum magnitude.
 */
export function randVector3D(min = 1, max = 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const magnitude = Math.random() * (max - min) + min;
    return {
        x: Math.sin(phi) * Math.cos(theta) * magnitude,
        y: Math.sin(phi) * Math.sin(theta) * magnitude,
        z: Math.cos(phi) * magnitude
    };
}
//# sourceMappingURL=o.js.map