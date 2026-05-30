import { E } from "../constants/c.js";
export function Sin(n) {
    return Math.sin(n * (Math.PI / 180));
}
export function Cos(n) {
    return Math.cos(n * (Math.PI / 180));
}
export function Tan(n) {
    return Math.tan(n * (Math.PI / 180));
}
export function Cot(n) {
    return 1 / Math.tan(n * (Math.PI / 180));
}
export function Sec(n) {
    return 1 / Math.cos(n * (Math.PI / 180));
}
export function Csc(n) {
    return 1 / Math.sin(n * (Math.PI / 180));
}
export function SinH(n) {
    return (Math.pow(E(), n) - Math.pow(E(), -n)) / 2;
}
export function CosH(n) {
    return (Math.pow(E(), n) + Math.pow(E(), -n)) / 2;
}
export function TanH(n) {
    return SinH(n) / CosH(n);
}
export function CotH(n) {
    return 1 / TanH(n);
}
export function SecH(n) {
    return 1 / CosH(n);
}
export function CscH(n) {
    return 1 / SinH(n);
}
//# sourceMappingURL=t.js.map