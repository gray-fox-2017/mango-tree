"use strict"

// Release 1
class FruitTree {
  constructor(age, height, fruit, healthy) {
    this._age = age;
    this._height = height;
    this._fruitCap = fruit;
    this._fruits = []; //menampung
    this._harvested = "";
    this._healthy = true;
  }

  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get fruits() {
    return this._fruits;
  }
  get healthy() {
    return this._healthy;
  }

  get fruitCap() {
    return this._fruitCap;
  }

  set age(age) {
    this._age = age;
  }

  set height(height) {
    this._height = height;
  }

  set fruits(fruits) {
    this._fruits = fruits;
  }

  set fruitCap(num) {
    this._fruitCap = num;
  }

  set healthy(bool) {
    this._healthy = bool;
  }

  grow(growRate, maxAge) {
    this._age += 1;
    this._fruitCap = this._fruitCap - getRandomNumber(2);
    let newHeight = this._height;
    if (this._age < maxAge - 5) {
      newHeight += growRate;
    }
    this._height = Math.round(newHeight*10)/10;
    if (this._age >= maxAge) {
      this._healthy = false;
    }
  }

}

class Fruit {
  constructor() {
    this.diameter = 5;
  }
}

// Release 0
function getRandomNumber(limit) {
  return Math.round(Math.floor(Math.random()*limit));
}

class MangoTree extends FruitTree {
  constructor(age, height, fruit, healthy) {
    super(age, height, fruit, healthy);
    this.growRate = (getRandomNumber(2) + 1)/10;
    this.minBearingAge = 3;
    this.maxAge = getRandomNumber(5) + 10;
    this.maxGrowAge = this.maxAge - getRandomNumber(5);
    this.mangoFruits = [];
    for (let i = 0; i < fruit; i ++) {
      let mango = new Mango();
      this.mangoFruits.push(mango);
    }
    super.fruits = this.mangoFruits;
    this.name = "MangoTree";
  }

  getAge() {
    return super.age;
  }
  getHeight() {
    return super.height;
  }
  getFruits() {
    return super.fruits;
  }
  getHealthStatus() {
    return super.healthy;
  }

  isMature() {
    if (super.age >= this.minBearingAge) {
      return true;
    } else {
      return false;
    }
  }

  grow() {
    super.grow(this.growRate, this.maxAge);
  }

  harvest() {
    if (this.getHealthStatus() && this.isMature()) {
      for (let i = 0; i < this.fruitCap; i++) {
        let mango = new Mango();
        this.mangoFruits.push(mango);
      }
      super.fruits = this.mangoFruits;
    } else {
      this.mangoFruits = [];
      super.fruits = this.mangoFruits;
    }
  }

}

class AppleTree extends FruitTree {
  constructor(age, height, fruit, healthy) {
    super(age, height, fruit, healthy);
    this.growRate = (getRandomNumber(4) + 3)/10;
    this.minBearingAge = 2;
    this.maxAge = getRandomNumber(5) + 12;
    this.maxGrowAge = this.maxAge - getRandomNumber(8);
    this.appleFruits = [];
    this.harvest();
    this.name = "AppleTree";
  }

  // Get current states here
  getAge() {
    return super.age;
  }
  getHeight() {
    return super.height;
  }
  getFruits() {
    return super.fruit;
  }
  getHealthStatus() {
    return super.healthy;
  }

  isMature() {
    if (super.age >= this.minBearingAge) {
      return true;
    } else {
      return false;
    }
  }

  grow() {
    super.grow(this.growRate, this.maxAge);
  }

  harvest() {
    if (this.getHealthStatus() && this.isMature()) {
      for (let i = 0; i < this.fruitCap; i++) {
        let apple = new Apple();
        this.appleFruits.push(apple);
      }
      super.fruits = this.appleFruits;
    } else {
      this.appleFruits = [];
      super.fruits = this.appleFruits;
    }
  }

}

class PearTree extends FruitTree {
  constructor(age, height, fruit, healthy) {
    super(age, height, fruit, healthy);
    this.growRate = (getRandomNumber(4) + 3)/10;
    this.minBearingAge = 2;
    this.maxAge = getRandomNumber(5) + 12;
    this.maxGrowAge = this.maxAge - getRandomNumber(8);
    this.pearFruits = [];
    this.harvest();
    this.name = "PearTree";
  }

  // Get current states here
  getAge() {
    return super.age;
  }
  getHeight() {
    return super.height;
  }
  getFruits() {
    return super.fruit;
  }
  getHealthStatus() {
    return super.healthy;
  }

  isMature() {
    if (super.age >= this.minBearingAge) {
      return true;
    } else {
      return false;
    }
  }

  grow() {
    super.grow(this.growRate, this.maxAge);
  }

  harvest() {
    if (this.getHealthStatus() && this.isMature()) {
      for (let i = 0; i < this.fruitCap; i++) {
        let apple = new Pear();
        this.pearFruits.push(apple);
      }
      super.fruits = this.pearFruits;
    } else {
      this.pearFruits = [];
      super.fruits = this.pearFruits;
    }
  }

}

class Mango extends Fruit {
  constructor() {
    super();
    this.diameter = this.diameter + 3 + getRandomNumber(5);
  }
}

class Apple extends Fruit{
  constructor() {
    super();
    this.diameter = this.diameter - getRandomNumber(3);
  }
}

class Pear extends Fruit{
  constructor() {
    super();
    this.diameter = this.diameter - getRandomNumber(6);
  }
}

// Release 2
class TreeGrove {
  constructor() {
    this.fruitTrees = []; //menampung proses dari class fruitTree
    this.year = 0;
    this.mangoTreeCount = 0;
    this.appleTreeCount = 0;
    this.pearTreeCount = 0;
  }

  inputTree(tree, age, height, fruit, healthy) {
    if (/mango/i.test(tree)) {
      this.mangoTreeCount++;
      let mangoTree = new MangoTree(age, height, fruit, healthy);
      mangoTree.name += this.mangoTreeCount;
      this.fruitTrees.push(mangoTree);
    } else if (/apple/i.test(tree)) {
      this.appleTreeCount++;
      let appleTree = new AppleTree(age, height, fruit, healthy);
      appleTree.name += this.appleTreeCount;
      this.fruitTrees.push(appleTree);
    }else {
      this.pearTreeCount++;
      let pearTree = new PearTree(age, height, fruit, healthy);
      pearTree.name += this.pearTreeCount;
      this.fruitTrees.push(pearTree);
    }
  }

  nextYear() {
    this.year += 1;
    for (let i = 0; i < this.fruitTrees.length; i++) {
      this.fruitTrees[i].grow();
      this.fruitTrees[i].harvest();
    }
  }

  showAge() {
    for (let i = 0; i < this.fruitTrees.length; i++) {
      console.log(`${this.fruitTrees[i].name}, age: ${this.fruitTrees[i].getAge()} years`);
    }
  }

  showTrees() {
    console.log(`Year ${this.year}`);
    for (let i = 0; i < this.fruitTrees.length; i++) {
      console.log(`${this.fruitTrees[i].name}, age: ${this.fruitTrees[i].getAge()} years, height: ${this.fruitTrees[i].getHeight()} m, fruits: ${this.fruitTrees[i].fruits.length}, healthy: ${this.fruitTrees[i].getHealthStatus()}, mature: ${this.fruitTrees[i].isMature()}`);

    }
  }

  matureTrees() {
    for (let i = 0; i < this.fruitTrees.length; i++) {
      if (this.fruitTrees[i].isMature() && this.fruitTrees[i].getHealthStatus()) {
        console.log(`${this.fruitTrees[i].name}, mature: ${this.fruitTrees[i].isMature()}`);
      }
    }
  }

  deadTrees() {
    let deadCount = 0;
    for (let i = 0; i < this.fruitTrees.length; i++) {
      if (!this.fruitTrees[i].getHealthStatus()) {
        deadCount ++;
        console.log(`${this.fruitTrees[i].name}, healthy: ${this.fruitTrees[i].getHealthStatus()}`);
      }
    }
    if (deadCount === 0) {
      console.log(`The trees are all healthy`);
    }
  }

  showHeight() {
    for (let i = 0; i < this.fruitTrees.length; i++) {
      console.log(`${this.fruitTrees[i].name}, height: ${this.fruitTrees[i].getHeight()} m`);
    }
  }

}


// Driver code
let grove = new TreeGrove();
grove.inputTree("MangoTree", 3, 1.8, 10, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 15, true);
grove.inputTree("PearTree", 6, 1.5, 18, true);

for (let i = 0; i < 5; i++) {
  grove.nextYear(); // menghitung tahun depan nya
  grove.showTrees(); //menampilkan status dai pohon
  grove.deadTrees(); //menampilkan status pohon yang mati
  grove.matureTrees(); //menampilkan status pohon yang sudah dewasa
  console.log();
}
