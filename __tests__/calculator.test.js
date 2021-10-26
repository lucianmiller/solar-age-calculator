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
  })
});