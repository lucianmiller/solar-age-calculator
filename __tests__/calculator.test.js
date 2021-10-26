import AgeCalculator from "../src/calculator";

describe('AgeCalculator', () => {

  test('should creat an AgeCalculator object with users age on Earth', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
  });

  test('should creat an AgeCalculator object with users age on Earth and places to store age on other planets', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
    expect(userAge.mercuryAge).toEqual(0);
    expect(userAge.venusAge).toEqual(0);
    expect(userAge.marsAge).toEqual(0);
    expect(userAge.jupiterAge).toEqual(0);
  });

  test('should return zero for Mercury age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    const mercuryAge = userAge.calculateMercuryAge();
    expect(mercuryAge).toEqual(0);
  });
});