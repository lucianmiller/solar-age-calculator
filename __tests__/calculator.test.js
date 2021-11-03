import AgeCalculator from "../src/calculator";

describe('AgeCalculator', () => {

  test('should creat an AgeCalculator object with users age on Earth', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
  });

  test('should return zero for Mercury age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    const mercuryAge = userAge.calculateMercuryAge();
    expect(mercuryAge).toEqual("0.00");
  });
  
  test('should return the age of the user if they were on Mercury', () => {
    const userAge = new AgeCalculator(25);
    const mercuryAge = userAge.calculateMercuryAge();
    expect(mercuryAge).toEqual("104.17");
  });

  test('should return zero for Venus age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    const venusAge = userAge.calculateVenusAge();
    expect(venusAge).toEqual("0.00");
  });

  test('should return the age of the user if they were on Venus', () => {
    const userAge = new AgeCalculator(25);
    const venusAge = userAge.calculateVenusAge();
    expect(venusAge).toEqual("40.32");
  });

  test('should return zero for Mars age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    const marsAge = userAge.calculateMarsAge();
    expect(marsAge).toEqual("0.00");
  });

  test('should return the age of the user if they were on Mars', () => {
    const userAge = new AgeCalculator(25);
    const marsAge = userAge.calculateMarsAge();
    expect(marsAge).toEqual("13.30");
  });

  test('should return zero for Jupiter if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    const jupiterAge = userAge.calculateJupiterAge();
    expect(jupiterAge).toEqual("0.00");
  });

  test('should return the age of the user if they were on Jupiter', () => {
    const userAge = new AgeCalculator(25);
    const jupiterAge = userAge.calculateJupiterAge();
    expect(jupiterAge).toEqual("2.11");
  });

  test('should create an AgeCalculator object with a user age parameter and a life expectancy on Earth parameter', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
    expect(userAge.earthLifeExpectancy).toEqual(80);
  });
  
});