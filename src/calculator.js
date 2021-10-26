export default class AgeCalculator {
  constructor(userAge) {
    this.earthAge = userAge;
  }

  calculateMercuryAge() {
    let ageOnMercury = this.earthAge / 0.24;
    return(ageOnMercury.toFixed(2));
  }

  calculateVenusAge(){
    let ageOnVenus = this.earthAge / 0.62;
    return(ageOnVenus.toFixed(2));
  }
}