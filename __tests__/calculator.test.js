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
});