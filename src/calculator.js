export default class AgeCalculator {
  constructor(userAge) {
    this.earthAge = userAge;
    this.earthLifeExpectancy = 80;
  }

  calculateMercuryAge() {
    let ageOnMercury = this.earthAge / 0.24;
    return(ageOnMercury.toFixed(2));
  }

  calculateVenusAge(){
    let ageOnVenus = this.earthAge / 0.62;
    return(ageOnVenus.toFixed(2));
  }

  calculateMarsAge(){
    let ageOnMars = this.earthAge / 1.88;
    return(ageOnMars.toFixed(2));
  }

  calculateJupiterAge(){
    let ageOnJupiter = this.earthAge / 11.86;
    return(ageOnJupiter.toFixed(2));
  }
}