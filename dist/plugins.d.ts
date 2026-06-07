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
//# sourceMappingURL=plugins.d.ts.map