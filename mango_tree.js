"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age=0, height=0, fruits=0, healthStatus=true) {
    this.age = age;
    this.height = height;
    this.fruits = fruits;
    this.fruitBasket = [];
    this.harvested = "";
    this.healthStatus = healthStatus;
    this.maxHeight = 30;
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
    this.fruits += randomNum;
    for (let i = 0; i < randomNum; i++) {
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
    this.harvested = `Fruits Harvested: ${this.fruits} (good: ${good} bad: ${bad})`
  }

  getRandomHeight() {
    return Math.round(Math.random() * 1000) / 100;
  }

  getRandomFruitCount() {
    return Math.floor(Math.random() * (6 - 0)) + 0;
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

// TEST
let mangoTree = new MangoTree()
console.log(mangoTree);
mangoTree.grow()
mangoTree.produceMangoes()
mangoTree.produceMangoes()
mangoTree.produceMangoes()
mangoTree.harvest();
console.log(mangoTree);

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
