let FruitTree = require('./fruit-tree')

class MangoTree extends FruitTree {
  constructor(age=0,height=0){//age,height,fruitBasket,fruitHarvested,harvested,healthStatus) {
    super()//age,height,fruitBasket,fruitHarvested,harvested,healthStatus);
    this.age = age;
    this.height = height;
    this.maxCapacity = 30;
    this.maxAge = 15;
    this.maxGrowthAge = 14;
    this.maxHarvestingAge = 13;
    this.minFertileAge = 4;
    this.treeName = 'mango_tree'
  }
}

class AppleTree extends FruitTree {
  constructor(age=0,height=0){//age,height,fruitBasket,fruitHarvested,harvested,healthStatus) {
    super()//age,height,fruitBasket,fruitHarvested,harvested,healthStatus);
    this.age = age;
    this.height = height;
    this.maxCapacity = 45;
    this.maxAge = 14;
    this.maxGrowthAge = 13;
    this.maxHarvestingAge = 12;
    this.minFertileAge = 3;
    this.treeName = 'apple_tree'
  }
}

class PearTree extends FruitTree {
  constructor(age=0,height=0){//age,height,fruitBasket,fruitHarvested,harvested,healthStatus) {
    super()//age,height,fruitBasket,fruitHarvested,harvested,healthStatus);
    this.age = age;
    this.height = height;
    this.maxCapacity = 60;
    this.maxAge = 13;
    this.maxGrowthAge = 12;
    this.maxHarvestingAge = 11;
    this.minFertileAge = 2;
    this.treeName = 'pear_tree'
  }
}

module.exports = {
  MangoTree, AppleTree, PearTree
};