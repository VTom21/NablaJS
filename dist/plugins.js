//Unit Conversion Plugin
export function Units(nabla) {
    const length = {
        m: { to: v => v, from: v => v },
        dm: { to: v => v / 10, from: v => v * 10 },
        cm: { to: v => v / 100, from: v => v * 100 },
        km: { to: v => v * 1000, from: v => v / 1000 },
        mm: { to: v => v / 1000, from: v => v * 1000 },
        micrometer: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
        nanometer: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
        mile: { to: v => v * 1609.344, from: v => v / 1609.344 },
        yard: { to: v => v * 0.9144, from: v => v / 0.9144 },
        foot: { to: v => v * 0.3048, from: v => v / 0.3048 },
        inch: { to: v => v * 0.0254, from: v => v / 0.0254 },
        light_year: { to: v => v * 9.46073047258E+15, from: v => v / 9.46073047258E+15 },
        exameter: { to: v => v * 1.0E+18, from: v => v / 1.0E+18 },
        petameter: { to: v => v * 1.0E+15, from: v => v / 1.0E+15 },
        terameter: { to: v => v * 1000000000000, from: v => v / 1000000000000 },
        gigameter: { to: v => v * 1000000000, from: v => v / 1000000000 },
        megameter: { to: v => v * 1000000, from: v => v / 1000000 },
        hectometer: { to: v => v * 100, from: v => v / 100 },
        picometer: { to: v => v * 1.0E-12, from: v => v / 1.0E-12 },
        femtometer: { to: v => v * 1.0E-15, from: v => v / 1.0E-15 },
        parsec: { to: v => v * 3.08567758128E+16, from: v => v / 3.08567758128E+16 },
        league: { to: v => v * 4828.032, from: v => v / 4828.032 },
        furlong: { to: v => v * 201.168, from: v => v / 201.168 },
        fathom: { to: v => v * 1.8288, from: v => v / 1.8288 },
        caliber: { to: v => v * 0.000254, from: v => v / 0.000254 },
    };
    const mass = {
        kg: { to: v => v, from: v => v },
        dkg: { to: v => v / 100, from: v => v * 100 },
        g: { to: v => v / 1000, from: v => v * 1000 },
        mg: { to: v => v / 1_000_000, from: v => v * 1_000_000 },
        tonne: { to: v => v * 1000, from: v => v / 1000 },
        exagram: { to: v => v * 1.0E+15, from: v => v / 1.0E+15 },
        petagram: { to: v => v * 1000000000000, from: v => v / 1000000000000 },
        teragram: { to: v => v * 1000000000, from: v => v / 1000000000 },
        gigagram: { to: v => v * 1000000, from: v => v / 1000000 },
        megagram: { to: v => v * 1000, from: v => v / 1000 },
        hectogram: { to: v => v * 0.1, from: v => v / 0.1 },
        microgram: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
        nanogram: { to: v => v * 1.0E-12, from: v => v / 1.0E-12 },
        picogram: { to: v => v * 1.0E-15, from: v => v / 1.0E-15 },
        femtogram: { to: v => v * 1.0E-18, from: v => v / 1.0E-18 },
        lbs: { to: v => v * 0.45359237, from: v => v / 0.45359237 },
        oz: { to: v => v * 0.0283495231, from: v => v / 0.0283495231 },
        carat: { to: v => v * 0.0002, from: v => v / 0.0002 },
    };
    const area = {
        m_2: { to: v => v, from: v => v },
        dm_2: { to: v => v / 100, from: v => v * 100 },
        cm_2: { to: v => v / 10_000, from: v => v * 10_000 },
        mm_2: { to: v => v / 1_000_000, from: v => v * 1_000_000 },
        km_2: { to: v => v * 1_000_000, from: v => v / 1_000_000 },
        acre: { to: v => v * 4046.8564224, from: v => v / 4046.8564224 },
        hectare: { to: v => v * 10_000, from: v => v / 10_000 },
        mile_2: { to: v => v * 2589988.110336, from: v => v / 2589988.110336 },
        yard_2: { to: v => v * 0.83612736, from: v => v / 0.83612736 },
        foot_2: { to: v => v * 0.09290304, from: v => v / 0.09290304 },
        inch_2: { to: v => v * 0.00064516, from: v => v / 0.00064516 },
    };
    const volume = {
        m_3: { to: v => v, from: v => v },
        dm_3: { to: v => v / 1000, from: v => v * 1000 },
        cm_3: { to: v => v / 1_000_000, from: v => v * 1_000_000 },
        mm_3: { to: v => v / 1_000_000_000, from: v => v * 1_000_000_000 },
        liter: { to: v => v / 1000, from: v => v * 1000 },
        gallon: { to: v => v * 0.00378541, from: v => v / 0.00378541 },
        quart: { to: v => v * 0.000946353, from: v => v / 0.000946353 },
        pint: { to: v => v * 0.000473176, from: v => v / 0.000473176 },
        cup: { to: v => v * 0.000236588, from: v => v / 0.000236588 },
        tablespoon: { to: v => v * 0.0000147868, from: v => v / 0.0000147868 },
        teaspoon: { to: v => v * 0.00000492892, from: v => v / 0.00000492892 },
    };
    const temperature = {
        celsius: { to: v => v, from: v => v },
        kelvin: { to: v => v - 273.15, from: v => v + 273.15 },
        fahrenheit: { to: v => ((v - 32) * 5) / 9, from: v => (v * 9) / 5 + 32 },
        rankine: { to: v => (v - 491.67) * 5 / 9 + 0, from: v => (v + 273.15) * 9 / 5 },
        reaumur: { to: v => (v * 5) / 4, from: v => (v * 4) / 5 },
    };
    const pressure = {
        pascal: { to: v => v, from: v => v },
        kilopascal: { to: v => v * 1000, from: v => v / 1000 },
        bar: { to: v => v * 100000, from: v => v / 100000 },
        psi: { to: v => v * 6894.7572931783, from: v => v / 6894.7572931783 },
        ksi: { to: v => v * 6894757.2931783, from: v => v / 6894757.2931783 },
        atm: { to: v => v * 101325, from: v => v / 101325 },
        microbar: { to: v => v / 0.1, from: v => v * 0.1 },
        millibar: { to: v => v * 100, from: v => v / 100 },
        exapascal: { to: v => v * 1.0E+18, from: v => v / 1.0E+18 },
        petapascal: { to: v => v * 1.0E+15, from: v => v / 1.0E+15 },
        terapascal: { to: v => v * 1000000000000, from: v => v / 1000000000000 },
        gigapascal: { to: v => v * 1000000000, from: v => v / 1000000000 },
        megapascal: { to: v => v * 1000000, from: v => v / 1000000 },
        hectopascal: { to: v => v * 100, from: v => v / 100 },
        decipascal: { to: v => v * 0.1, from: v => v / 0.1 },
        centipascal: { to: v => v * 0.01, from: v => v / 0.01 },
        millipascal: { to: v => v * 0.001, from: v => v / 0.001 },
        micropascal: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
        nanopascal: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
        femtopascal: { to: v => v * 1.0E-15, from: v => v / 1.0E-15 },
    };
    const angles = {
        degree: { to: v => v, from: v => v },
        radian: { to: v => v * 57.2957795131, from: v => v / 57.2957795131 },
        gradian: { to: v => v * 0.9, from: v => v / 0.9 },
        mil: { to: v => v * 0.05625, from: v => v / 0.05625 },
        quadrant: { to: v => v * 90, from: v => v / 90 },
        sextant: { to: v => v * 60, from: v => v / 60 },
    };
    const illuminance = {
        lux: { to: v => v, from: v => v },
        mc: { to: v => v * 1, from: v => v / 1 },
        cmc: { to: v => v * 10000, from: v => v / 10000 },
        fc: { to: v => v * 10.7639104167, from: v => v / 10.7639104167 },
        phot: { to: v => v * 10000, from: v => v / 10000 },
        nox: { to: v => v * 0.001, from: v => v / 0.001 },
        flame: { to: v => v * 43.0556416668, from: v => v / 43.0556416668 },
    };
    const time = {
        sec: { to: v => v, from: v => v },
        min: { to: v => v * 60, from: v => v / 60 },
        hour: { to: v => v * 3600, from: v => v / 3600 },
        day: { to: v => v * 86400, from: v => v / 86400 },
        week: { to: v => v * 604800, from: v => v / 604800 },
        month: { to: v => v * 2628000, from: v => v / 2628000 },
        year: { to: v => v * 31557600, from: v => v / 31557600 },
        century: { to: v => v * 3155760000, from: v => v / 3155760000 },
        decade: { to: v => v * 315576000, from: v => v / 315576000 },
        millenium: { to: v => v * 31557600000, from: v => v / 31557600000 },
        microsec: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
        nanosec: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
        picosec: { to: v => v * 1.0E-12, from: v => v / 1.0E-12 },
        femtosec: { to: v => v * 1.0E-15, from: v => v / 1.0E-15 },
        leap_year: { to: v => v * 31622400, from: v => v / 31622400 },
        fortnight: { to: v => v * 1209600, from: v => v / 1209600 },
        septennial: { to: v => v * 220752000, from: v => v / 220752000 },
        novennial: { to: v => v * 283824000, from: v => v / 283824000 },
    };
    const charge = {
        coulomb: { to: v => v, from: v => v },
        megacoulomb: { to: v => v * 1000000, from: v => v / 1000000 },
        kilocoulomb: { to: v => v * 1000, from: v => v / 1000 },
        millicoulomb: { to: v => v * 0.001, from: v => v / 0.001 },
        microcoulomb: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
        nanocoulomb: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
        picocoulomb: { to: v => v * 1.0E-12, from: v => v / 1.0E-12 },
        emu: { to: v => v * 10, from: v => v / 10 },
        esu: { to: v => v * 3.335640951982E-10, from: v => v / 3.335640951982E-10 },
        franklin: { to: v => v * 3.335640951982E-10, from: v => v / 3.335640951982E-10 },
        faraday: { to: v => v * 96485.309000004, from: v => v / 96485.309000004 },
        ampere_sec: { to: v => v * 1, from: v => v / 1 },
        ampere_min: { to: v => v * 60, from: v => v / 60 },
        ampere_hour: { to: v => v * 3600, from: v => v / 3600 },
    };
    const resistance = {
        ohm: { to: v => v, from: v => v },
        megohm: { to: v => v * 1000000, from: v => v / 1000000 },
        microhm: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
        volt_ampere: { to: v => v * 1, from: v => v * 1 },
        emu: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
        esu: { to: v => v * 898755200000, from: v => v / 898755200000 },
    };
    const magnetic_flux = {
        weber: { to: v => v, from: v => v },
        milliweber: { to: v => v * 0.001, from: v => v / 0.001 },
        microweber: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
        volt_second: { to: v => v * 1, from: v => v * 1 },
        megaline: { to: v => v * 0.01, from: v => v / 0.01 },
        kiloline: { to: v => v * 1.0E-5, from: v => v / 1.0E-5 },
        line: { to: v => v * 1.0E-8, from: v => v / 1.0E-8 },
        maxwell: { to: v => v * 1.0E-8, from: v => v / 1.0E-8 },
        unit_pole: { to: v => v * 1.256637061436E-7, from: v => v / 1.256637061436E-7 },
    };
    function createConverter(defs) {
        return function convert(value, from, to) {
            const fromUnit = defs[from];
            const toUnit = defs[to];
            if (!fromUnit)
                throw new Error(`Unknown unit: ${from}`);
            if (!toUnit)
                throw new Error(`Unknown unit: ${to}`);
            const base = fromUnit.to(value);
            return toUnit.from(base);
        };
    }
    return { createConverter, length, mass, volume, area, temperature, pressure, angles, illuminance, time, charge, resistance, magnetic_flux };
}
export class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    array() {
        return [this.x, this.y];
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    }
}
export class Vector3 {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    array() {
        return [this.x, this.y, this.z];
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
        return this;
    }
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        this.z /= vector.z;
        return this;
    }
}
export class Engine {
    fps;
    canvas;
    running = false;
    ctx;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }
    start(callback, fps = 60) {
        this.running = true;
        const interval = 1000 / fps;
        let lastTime = 0;
        const loop = (time) => {
            if (!this.running)
                return;
            if (time - lastTime >= interval) {
                lastTime = time;
                callback();
            }
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
    stop() {
        this.running = false;
    }
    drawRect(x, y, w, h, color = "black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }
    clearRect(x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    }
    clear(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawLine(x1, y1, x2, y2, color = "black", width = 1) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width;
        this.ctx.stroke();
    }
    drawCircle(x, y, radius, color = "black") {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
}
//# sourceMappingURL=plugins.js.map