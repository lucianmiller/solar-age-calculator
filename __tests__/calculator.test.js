import AgeCalculator from "../src/calculator";

describe('AgeCalculator', () => {

  test('should creat an AgeCalculator object with users age on Earth', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
  });

  test('should return zero for Mercury age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    userAge.calculateMercuryAge();
    expect(userAge.mercAge.toFixed(2)).toEqual("0.00");
  });
  
  test('should return the age of the user and average life expectancy on Mercury', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateMercuryAge();
    expect(userAge.mercAge.toFixed(2)).toEqual("104.17");
    expect(userAge.mercLifeExpectancy.toFixed(2)).toEqual("333.33");
  });

  test('should return zero for Venus age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    userAge.calculateVenusAge();
    expect(userAge.venusAge.toFixed(2)).toEqual("0.00");
  });

  test('should return the age of the user if they were on Venus', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateVenusAge();
    expect(userAge.venusAge.toFixed(2)).toEqual("40.32");
  });

  test('should return zero for Mars age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    userAge.calculateMarsAge();
    expect(userAge.marsAge.toFixed(2)).toEqual("0.00");
  });

  test('should return the age of the user if they were on Mars', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateMarsAge();
    expect(userAge.marsAge.toFixed(2)).toEqual("13.30");
  });

  test('should return zero for Jupiter if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    userAge.calculateJupiterAge();
    expect(userAge.jupiterAge.toFixed(2)).toEqual("0.00");
  });

  test('should return the age of the user if they were on Jupiter', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateJupiterAge();
    expect(userAge.jupiterAge.toFixed(2)).toEqual("2.11");
  });

  test('should create an AgeCalculator object with a user age parameter and a life expectancy on Earth property', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
    expect(userAge.earthLifeExpectancy).toEqual(80);
  });
});