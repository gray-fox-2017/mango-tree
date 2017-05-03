const Mango = require('./fruit-child').Mango;
const Apple = require('./fruit-child').Apple;
const Pear = require('./fruit-child').Pear;

class FruitTree {
  constructor() {
    this.age = 0;
    this.height = 0;
    this.fruitBasket = [];
    this.fruitHarvested = {total:0,good:0,bad:0};
    this.harvested = 0;
    this.healthStatus = true;
    this.maxCapacity = 20;
    this.maxAge = 10;
    this.maxHarvestingAge = 9;
    this.maxGrowthAge = 8;
    this.minFertileAge = 2;
  }
  getAge() {
    console.log(`Age: ${this.age} years old`)
  }
  getHeight() {
    console.log(`Height: ${this.height} cm`)
  }
  getFruits() {
    console.log(this.fruitBasket)
  }
  getHealtyStatus() {
    if(this.healthStatus){
      console.log(`The tree is alive! :smile:`);
    } else {
      console.log(`Sadly, the tree has met its end. :sad:`);
    }
  }
  random() {
    return Math.random();
  }
  grow() {
    this.age ++;
    if(this.age<this.maxAge){
      if(this.age<=this.maxGrowthAge){
        this.height += Math.ceil(this.random()*50)
      }
    } else {
      this.healthStatus=false
    }
  }
  produce() {
    this.fruitBasket=[]
    if(this.age>=this.minFertileAge && this.age<=this.maxHarvestingAge){
      let top = Math.ceil(this.random()*this.maxCapacity);
      for(let i=0;i<top;i++){
        if(this.treeName === 'mango_tree'){
          if(this.random()<0.75){
            this.fruitBasket.push(new Mango('good'))
          } else {
            this.fruitBasket.push(new Mango('bad'))
          }
        } else if(this.treeName === 'apple_tree'){
          if(this.random()<0.75){
            this.fruitBasket.push(new Apple('good'))
          } else {
            this.fruitBasket.push(new Apple('bad'))
          }
        } else if (this.treeName === 'pear_tree') {
          if(this.random()<0.75){
            this.fruitBasket.push(new Pear('good'))
          } else {
            this.fruitBasket.push(new Pear('bad'))
          }
        }
      }
    }
  }
  harvest() {
    this.fruitHarvested={total:0,good:0,bad:0};
    this.harvested = 0;
    if(this.age>=this.minFertileAge){
      if(this.age<=this.maxHarvestingAge){
        for(let i=0;i<this.fruitBasket.length;i++){
          if(this.fruitBasket[i].quality=='good'){
            this.fruitHarvested.good ++
            this.fruitHarvested.total ++

          } else {
            this.fruitHarvested.bad ++
            this.fruitHarvested.total ++
          }
        }
      }
    }
    this.harvested = `${this.fruitHarvested.total} (${this.fruitHarvested.good} good, ${this.fruitHarvested.bad} bad)`
  }
}

module.exports = FruitTree;