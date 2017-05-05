"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age=0, height=0, fruits=0, healthStatus=true, maxHeight=30) {
    this.age = age;
    this.height = height;
    this.fruits = fruits;
    this.fruitBasket = [];
    this.harvested = "";
    this.healthStatus = healthStatus;
    this.maxHeight = maxHeight;
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


  // Get current states here

  // Grow the tree
  grow() {
    this.age += 1;
    this.height += this.getRandomHeight();
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
    let fruitsCount = this.getFruits();
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this.fruitBasket.length; i++) {
      if (this.fruitBasket[i].quality == 'good') {
        good++;
      } else if (this.fruitBasket[i].quality == 'bad') {
        bad++;
      }

    }
    this.fruitBasket = [];
    this.harvested = `Fruits Harvested: ${this.fruits} (good: ${good} bad: ${bad})`
  }

  getRandomHeight() {
    return Math.round(Math.random() * 1000) / 100;
  }

  getRandomFruitCount() {
    return Math.floor(Math.random() * (20 - 1)) + 1;
  }

  getRandomQuality() {
    return Math.floor(Math.random() * (2 - 0)) + 0;
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality = quality;
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// TEST Manggo >> done
let mangoTree = new MangoTree()
console.log(mangoTree);
mangoTree.grow()
mangoTree.produceMangoes()
mangoTree.harvest();
console.log(mangoTree);
// mangoTree.grow()
// mangoTree.produceMangoes()
// mangoTree.harvest();
// console.log(mangoTree);
// mangoTree.grow()
// mangoTree.produceMangoes()
// mangoTree.harvest();
// console.log(mangoTree);


// Release 1
class AppleTree extends MangoTree{
  constructor (age=0, height=0, fruits=0, healthStatus=true, maxHeight=10) {
    super(age, height, fruits, healthStatus, maxHeight)
  }
}

// Test Apple Tree
// let appleTree = new AppleTree()
// console.log(appleTree);

class Apple extends Mango{}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
