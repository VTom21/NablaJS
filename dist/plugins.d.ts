export type Unit = {
    to: (v: number) => number;
    from: (v: number) => number;
};
export declare function Units(nabla: any): {
    createConverter: (defs: Record<string, Unit>) => (value: number, from: string, to: string) => number;
    length: Record<string, Unit>;
    mass: Record<string, Unit>;
    volume: Record<string, Unit>;
    area: Record<string, Unit>;
    temperature: Record<string, Unit>;
    pressure: Record<string, Unit>;
    angles: Record<string, Unit>;
    illuminance: Record<string, Unit>;
    time: Record<string, Unit>;
    charge: Record<string, Unit>;
    resistance: Record<string, Unit>;
    magnetic_flux: Record<string, Unit>;
};
export declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
    array(): number[];
    add(vector: Vector2): this;
    subtract(vector: Vector2): this;
    multiply(vector: Vector2): this;
    divide(vector: Vector2): this;
}
export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    array(): number[];
    add(vector: Vector3): this;
    subtract(vector: Vector3): this;
    multiply(vector: Vector3): this;
    divide(vector: Vector3): this;
}
export declare class Engine {
    fps: any;
    canvas: HTMLCanvasElement;
    running: boolean;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement);
    start(callback: () => void, fps?: number): void;
    stop(): void;
    drawRect(x: number, y: number, w: number, h: number, color?: string): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    clear(color: string): void;
    drawLine(x1: number, y1: number, x2: number, y2: number, color?: string, width?: number): void;
    drawCircle(x: number, y: number, radius: number, color?: string): void;
}
//# sourceMappingURL=plugins.d.ts.map