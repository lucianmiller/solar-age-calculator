import AgeCalculator from "../src/calculator";

describe('AgeCalculator', () => {

  test('should creat a AgeCalculator object with users age on Earth', () => {
    const userAge = new AgeCalculator(25);
    expect(userAge.earthAge).toEqual(25);
  });
});