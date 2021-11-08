export default class AgeCalculator {
  constructor(userAge) {
    this.earthAge = userAge;
    this.earthLifeExpectancy = 80;
    this.mercAge = 0;
    this.mercLifeExpectancy = 0;
    this.mercLifeLeft = 0;
    this.venusAge = 0;
    this.venusLifeExpectancy = 0;
    this.venusLifeLeft = 0;
    this.marsAge = 0;
    this.marsLifeExpectancy = 0;
    this.marsLifeLeft = 0;
    this.jupiterAge = 0;
    this.jupiterLifeExpectancy = 0;
    this.jupiterLifeLeft = 0;
  }

  calculateMercuryAge() {
    let ageOnMercury = this.earthAge / 0.24;
    this.mercAge = ageOnMercury;
    this.mercLifeExpectancy = this.earthLifeExpectancy / 0.24;
    this.mercLifeLeft = this.mercLifeExpectancy - this.mercAge;
  }

  calculateVenusAge(){
    let ageOnVenus = this.earthAge / 0.62;
    this.venusAge = ageOnVenus;
    this.venusLifeExpectancy = this.earthLifeExpectancy / 0.62;
    this.venusLifeLeft = this.venusLifeExpectancy - this.venusAge;
  }

  calculateMarsAge(){
    let ageOnMars = this.earthAge / 1.88;
    this.marsAge = ageOnMars;
    this.marsLifeExpectancy = this.earthLifeExpectancy / 1.88;
  }

  calculateJupiterAge(){
    let ageOnJupiter = this.earthAge / 11.86;
    this.jupiterAge = ageOnJupiter;
    this.jupiterLifeExpectancy = this.earthLifeExpectancy /11.86;
  }
}