"use strict"

class FruitTree {
  constructor(age=0, height=0, fruits=0, healthStatus=true, maxAge, maxFruits) {
    this.age = age;
    this.height = height;
    this.fruits = fruits;
    this.fruitBasket = [];
    this.harvested = "";
    this.healthStatus = healthStatus;
    this.maxAge = maxAge;
    this.maxFruits = maxFruits;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.fruits;
  }
  getHealtyStatus() {
    return this.healthStatus;
  }

  // Grow the tree
  grow() {
    if (this.age == this.maxAge) {
      this.healthStatus = false;
    } else {
      this.age += 1;
      this.height += this.getRandomHeight();
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let randomNum = this.getRandomFruitCount();
    this.fruits = randomNum;
    for (let i = 0; i < this.fruits; i++) {
      if (this.getRandomQuality() == 0) {
        this.fruitBasket.push(new Mango("bad"));
      } else {
        this.fruitBasket.push(new Mango("good"));
      }
    }
  }

  // Get some fruits
  harvest() {
    // let fruitsCount = this.getFruits();
    let good = 0;
    let bad = 0;
    let fruitName = this.fruitBasket[0].name;
    for (let i = 0; i < this.fruitBasket.length; i++) {
      if (this.fruitBasket[i].quality == 'good') {
        good++;
      } else if (this.fruitBasket[i].quality == 'bad') {
        bad++;
      }

    }
    this.fruitBasket = [];
    this.harvested = `${fruitName} Fruits Harvested: ${this.fruits} (good: ${good} bad: ${bad})`
  }

  getRandomHeight() {
    return Math.round(Math.random() * 1000) / 100;
  }

  getRandomFruitCount() {
    return Math.floor((Math.random() * this.maxFruits) + 1);
  }

  getRandomQuality() {
    return Math.floor(Math.random() * (2 - 0)) + 0;
  }
}

class Fruit {
  constructor(quality) {
    this.quality = quality;
  }
}

// release 0
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(age=0, height=0, fruits=0, healthStatus=true, maxAge=10, maxFruits=10) {
    super(age, height, fruits, healthStatus, maxAge, maxFruits)
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor(quality) {
    super(quality)
    this.name = "Mango";
  }
}


  //

// TEST Manggo >> done
// let mangoTree = new MangoTree()
// console.log(mangoTree);
// mangoTree.grow()
// mangoTree.produceMangoes()
// mangoTree.harvest();
// console.log(mangoTree);
// mangoTree.grow()
// mangoTree.produceMangoes()
// mangoTree.harvest();
// console.log(mangoTree);
// mangoTree.grow()
// mangoTree.produceMangoes()
// mangoTree.harvest();
// console.log(mangoTree);


// Release 1
class AppleTree extends FruitTree{
  constructor (age=0, height=0, fruits=0, healthStatus=true, maxHeight=10, maxFruits=50) {
    super(age, height, fruits, healthStatus, maxHeight, maxFruits)
  }
}

class Apple extends Fruit{
  constructor (quality) {
    super(quality)
    this.name = "Apple"
  }
}


// Release 3
class TreeGrove {
  constructor () {}

  inputTree (treeName, age, height, healthStatus) {}

  nextYear () {}

  showAge () {}

  showTrees () {}

  showMatureTrees () {

  }

  showDeadTrees () {

  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
