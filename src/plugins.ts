//Unit Conversion Plugin

export type Unit = {
  to: (v: number) => number;
  from: (v: number) => number;
};

export function Units(nabla: any) {

  const length: Record<string, Unit> = {
    m:  { to: v => v, from: v => v },
    dm: { to: v => v / 10, from: v => v * 10 },
    cm: { to: v => v / 100, from: v => v * 100 },
    km: { to: v => v * 1000, from: v => v / 1000 },
    mm: { to: v => v / 1000, from: v => v * 1000 },
    micrometer: { to: v => v * 1.0E-6, from: v => v / 1.0E-6 },
    nanometer: { to: v => v * 1.0E-9, from: v => v / 1.0E-9 },
    mile: { to: v => v * 1609.344, from: v => v / 1609.344 },
    yard: { to: v => v *  0.9144, from: v => v /  0.9144 },
    foot: { to: v => v *  0.3048, from: v => v /  0.3048 },
    inch: { to: v => v *  0.0254, from: v => v /  0.0254 },
    light_year: { to: v => v *  9.46073047258E+15, from: v => v /  9.46073047258E+15 },
    exameter: { to: v => v *  1.0E+18, from: v => v /  1.0E+18 },
    petameter: { to: v => v *  1.0E+15, from: v => v /  1.0E+15 },
    terameter: { to: v => v *  1000000000000, from: v => v /  1000000000000 },
    gigameter: { to: v => v *  1000000000, from: v => v /  1000000000 },
    megameter: { to: v => v *  1000000, from: v => v /  1000000 },
    hectometer: { to: v => v *  100, from: v => v /  100 },
    picometer: { to: v => v *  1.0E-12, from: v => v /  1.0E-12 },
    femtometer: { to: v => v *  1.0E-15, from: v => v /  1.0E-15 },
    parsec: { to: v => v *  3.08567758128E+16, from: v => v /  3.08567758128E+16 },
    league: { to: v => v *  4828.032, from: v => v /  4828.032 },
    furlong: { to: v => v *  201.168, from: v => v /  201.168 },
    fathom: { to: v => v *  1.8288, from: v => v /  1.8288 },
    caliber: { to: v => v *  0.000254, from: v => v /  0.000254 },
  };

  
  const mass: Record<string, Unit> = {
    kg:   { to: v => v, from: v => v },
    dkg:  { to: v => v / 100, from: v => v * 100 },
    g:    { to: v => v / 1000, from: v => v * 1000 },
    mg:   { to: v => v / 1_000_000, from: v => v * 1_000_000 },
    tonne:{ to: v => v * 1000, from: v => v / 1000 },
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

  const area: Record<string, Unit> = {
    m_2:     { to: v => v, from: v => v },
    dm_2:    { to: v => v / 100, from: v => v * 100 },
    cm_2:    { to: v => v / 10_000, from: v => v * 10_000 },
    mm_2:    { to: v => v / 1_000_000, from: v => v * 1_000_000 },
    km_2:    { to: v => v * 1_000_000, from: v => v / 1_000_000 },
    acre:    { to: v => v * 4046.8564224, from: v => v / 4046.8564224 },
    hectare: { to: v => v * 10_000, from: v => v / 10_000 },
    mile_2:  { to: v => v * 2589988.110336, from: v => v / 2589988.110336 },
    yard_2:  { to: v => v * 0.83612736, from: v => v / 0.83612736 },
    foot_2:  { to: v => v * 0.09290304, from: v => v / 0.09290304 },
    inch_2:  { to: v => v * 0.00064516, from: v => v / 0.00064516 },
  };

  const volume: Record<string, Unit> = {
    m_3:        { to: v => v, from: v => v },
    dm_3:       { to: v => v / 1000, from: v => v * 1000 },
    cm_3:       { to: v => v / 1_000_000, from: v => v * 1_000_000 },
    mm_3:       { to: v => v / 1_000_000_000, from: v => v * 1_000_000_000 },
    liter:      { to: v => v / 1000, from: v => v * 1000 },
    gallon:     { to: v => v * 0.00378541, from: v => v / 0.00378541 },
    quart:      { to: v => v * 0.000946353, from: v => v / 0.000946353 },
    pint:       { to: v => v * 0.000473176, from: v => v / 0.000473176 },
    cup:        { to: v => v * 0.000236588, from: v => v / 0.000236588 },
    tablespoon: { to: v => v * 0.0000147868, from: v => v / 0.0000147868 },
    teaspoon:   { to: v => v * 0.00000492892, from: v => v / 0.00000492892 },
  };

  const temperature: Record<string, Unit> = {
    celsius: { to: v => v, from: v => v },
    kelvin:  { to: v => v - 273.15, from: v => v + 273.15 },
    fahrenheit:  { to: v => ((v - 32) * 5) / 9, from: v => (v * 9) / 5 + 32 }, 
    rankine:  { to: v => (v - 491.67) * 5/9 + 0, from: v => (v + 273.15) * 9/5 }, 
    reaumur:  { to: v => (v * 5) / 4, from: v => (v * 4) / 5 }, 
  }

  function createConverter(defs: Record<string, Unit>) {
    return function convert(value: number, from: string, to: string): number {
      const fromUnit = defs[from];
      const toUnit = defs[to];

      if (!fromUnit) throw new Error(`Unknown unit: ${from}`);
      if (!toUnit) throw new Error(`Unknown unit: ${to}`);

      const base = fromUnit.to(value);
      return toUnit.from(base);
    };
  }

  return {createConverter, length, mass, volume, area, temperature}
}
