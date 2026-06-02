export function clamp(a: number, min: number, max:number){
    if(a > max){
        return max
    }
    if(a < min){
        return min
    }
    return a;
}

export function scale(x:number, s:number){
    return x * s;
}

export function vector_scale(a: number[], b: number): number[] {
  return a.map(element => element * b);
}

export function updateVelocity2D(AccelerationX: number, AccelerationY: number, VelocityX: number, VelocityY: number, dt: number): { vx: number; vy: number } {

  const vx = VelocityX + AccelerationX * dt;
  const vy = VelocityY + AccelerationY * dt;

  return { vx, vy };
}

export function updateVelocity3D(AccelerationX: number, AccelerationY: number, AccelerationZ: number, VelocityX: number, VelocityY: number,VelocityZ: number, dt: number): { vx: number; vy: number, vz: number } {
    
  const vx = VelocityX + AccelerationX * dt;
  const vy = VelocityY + AccelerationY * dt;
  const vz = VelocityZ + AccelerationZ * dt;

  return { vx, vy, vz };
}

export function moveTo(currentX: number,currentY: number,targetX: number,targetY: number,speed: number,dt: number): { x: number; y: number } {

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

export function ApplyFrictionLinear(vx: number,vy: number,friction: number,dt: number): { vx: number; vy: number } {

  const factor = 1 - friction * dt;

  const clampedFactor = Math.max(0, factor);

  return {
    vx: vx * clampedFactor,
    vy: vy * clampedFactor
  };
}

export function ApplyFrictionExp(vx: number,vy: number,friction: number,dt: number): { vx: number; vy: number } {

  const factor = Math.exp(-friction * dt);

  return {
    vx: vx * factor,
    vy: vy * factor
  };
}

export function ResetVelocity() {
  return { vx: 0, vy: 0 };
}

export function rand(){
    return Math.random();
}
export function randRange(min:number,max:number){
    return Math.random() * (max - min) + min;
}

export function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randBool() {
  return Math.random() < 0.5;
}

export function randWeight(percent: number) {
  return Math.random() * 100 < percent;
}

export function randVector2D(min: number = 1, max: number = 1) {
  const angle = Math.random() * Math.PI * 2;

  const magnitude = Math.random() * (max - min) + min;

  return {
    x: Math.cos(angle) * magnitude,
    y: Math.sin(angle) * magnitude
  };
}

export function randVector3D(min: number = 1, max: number = 1) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  const magnitude = Math.random() * (max - min) + min;

  return {
    x: Math.sin(phi) * Math.cos(theta) * magnitude,
    y: Math.sin(phi) * Math.sin(theta) * magnitude,
    z: Math.cos(phi) * magnitude
  };
}