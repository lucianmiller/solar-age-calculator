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

  test('should return the age of the user and average life expectancy on Venus', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateVenusAge();
    expect(userAge.venusAge.toFixed(2)).toEqual("40.32");
    expect(userAge.venusLifeExpectancy.toFixed(2)).toEqual("129.03");
  });

  test('should return zero for Mars age if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    userAge.calculateMarsAge();
    expect(userAge.marsAge.toFixed(2)).toEqual("0.00");
  });

  test('should return the age of the user and life expectancy on Mars', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateMarsAge();
    expect(userAge.marsAge.toFixed(2)).toEqual("13.30");
    expect(userAge.marsLifeExpectancy.toFixed(2)).toEqual("42.55");
  });

  test('should return zero for Jupiter if Earth age equals zero', () => {
    const userAge = new AgeCalculator(0);
    userAge.calculateJupiterAge();
    expect(userAge.jupiterAge.toFixed(2)).toEqual("0.00");
  });

  test('should return the age of the user and life expectancy on Jupiter', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateJupiterAge();
    expect(userAge.jupiterAge.toFixed(2)).toEqual("2.11");
    expect(userAge.jupiterLifeExpectancy.toFixed(2)).toEqual("6.75");
  });

  test('should create an AgeCalculator object with a user age parameter and a life expectancy on Earth property', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
    expect(userAge.earthLifeExpectancy).toEqual(80);
  });

  test('should create an AgeCalculator object that saves how long someone has left for each planet', () => {
    const userAge = new AgeCalculator(0);
    expect(userAge.mercLifeLeft).toEqual(0);
    expect(userAge.venusLifeLeft).toEqual(0);
    expect(userAge.marsLifeLeft).toEqual(0);
    expect(userAge.jupiterLifeLeft).toEqual(0);
  });

  test('should calculate how long someone has left on Mercury', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateMercuryAge();
    expect(userAge.mercLifeLeft.toFixed(2)).toEqual("229.17");
  });

  test('should calculate how long someone has left on Venus', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateVenusAge();
    expect(userAge.venusLifeLeft.toFixed(2)).toEqual("88.71");
  });

  test('should calculate how long someone has left on Mars', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateMarsAge();
    expect(userAge.marsLifeLeft.toFixed(2)).toEqual("29.26");
  });

  test('should calculate how long someone has left on Jupiter', () => {
    const userAge = new AgeCalculator(25);
    userAge.calculateJupiterAge();
    expect(userAge.jupiterLifeLeft.toFixed(2)).toEqual("4.64");
  });

  test('should calculate how long someone has lived past the life expectancy on Mercury', () => {
    const userAge = new AgeCalculator(90);
    userAge.calculateMercuryAge();
    expect(userAge.mercLifeLeft.toFixed(2)).toEqual("-41.67");
  });
});