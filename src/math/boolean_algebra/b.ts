export function AND(gate: Number[]){
    return {
        output: gate.every(x => x == 1),
        numeric: gate.every(x => x == 1) ? 1 : 0
    };
}

export function BUFFER(gate: Number){
    if(typeof(gate) !== "number"){
        return;
    }

    return {
        output: gate == 1,
        numeric: gate == 1 ? 1 : 0
    };
}

export function NOT(gate: Number){
    if(typeof(gate) !== "number"){
        return;
    }
    
    return {
        output: gate !== 1,
        numeric: gate !== 1 ? 1 : 0
    };
}

export function OR(gate: Number[]){
    return {
        output: gate.some(x => x == 1),
        numeric: gate.some(x => x == 1) ? 1 : 0
    }
}

export function NAND(gate: Number[]){
    return {
        output: !gate.every(x => x == 1),
        numeric: !gate.every(x => x == 1) ? 1 : 0
    }
}

export function NOR(gate: Number[]){
    return {
        output: !gate.some(x => x == 1),
        numeric: !gate.some(x => x == 1) ? 1 : 0
    }
}

export function XOR(gate: Number[]){
    const ones = gate.filter(x => x == 1).length; 
    return {
        output: ones % 2 == 1,
        numeric: (ones % 2 == 1) ? 1 : 0
    }
}


export function XNOR(gate: Number[]){
    const ones = gate.filter(x => x == 1).length; 
    return {
        output: ones % 2 == 0,
        numeric: (ones % 2 == 0) ? 1 : 0
    }
}