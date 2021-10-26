export default class AgeCalculator {
  constructor(userAge) {
    this.earthAge = userAge;
  }

  calculateMercuryAge() {
    let ageOnMercury = this.earthAge / 0.24;
    return(ageOnMercury.toFixed(2));
  }
}