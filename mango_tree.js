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

  // Get some fruits
  harvest() {
    // let fruitsCount = this.getFruits();
    if (this.healthStatus == false) {
      let treeName = this.name;
      this.fruits = 0;
      this.fruitBasket = [];
      this.harvested = `${treeName} is dead nothing to be harvested`
    } else {
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

// release 0
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(age=0, height=0, fruits=0, healthStatus=true, maxAge=10, maxFruits=10) {
    super(age, height, fruits, healthStatus, maxAge, maxFruits)
    this.name = "Mango Tree"
  }

  // Produce some fruits
  produceFruits() {
    if (this.healthStatus == false) {
      this.fruits = 0;
      this.fruitBasket = []
    } else {
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
  }
}

class AppleTree extends FruitTree{
  constructor (age=0, height=0, fruits=0, healthStatus=true, maxAge=3, maxFruits=50) {
    super(age, height, fruits, healthStatus, maxAge, maxFruits)
    this.name = "Apple Tree"
  }

  // Produce some fruits
  produceFruits() {
    if (this.healthStatus == false) {
      this.fruits = 0;
      this.fruitBasket = []
    } else {
      let randomNum = this.getRandomFruitCount();
      this.fruits = randomNum;
      for (let i = 0; i < this.fruits; i++) {
        if (this.getRandomQuality() == 0) {
          this.fruitBasket.push(new Apple("bad"));
        } else {
          this.fruitBasket.push(new Apple("good"));
        }
      }
    }
  }
}

class PearTree extends FruitTree {
  constructor (age=0, height=0, fruits=0, healthStatus=true, maxAge=4, maxFruits=4) {
    super(age, height, fruits, healthStatus, maxAge, maxFruits)
    this.name = "Pear Tree"
  }


  // Produce some fruits
  produceFruits() {
    if (this.healthStatus == false) {
      this.fruits = 0;
      this.fruitBasket = []
    } else {
      let randomNum = this.getRandomFruitCount();
      this.fruits = randomNum;
      for (let i = 0; i < this.fruits; i++) {
        if (this.getRandomQuality() == 0) {
          this.fruitBasket.push(new Pear("bad"));
        } else {
          this.fruitBasket.push(new Pear("good"));
        }
      }
    }
  }
}

class OtherTree extends FruitTree {
  constructor (age=0, height=0, fruits=0, healthStatus=true, maxHeight=50, maxFruits=5) {
    super(age, height, fruits, healthStatus, maxHeight, maxFruits)
    this.name = "Other Tree"
  }

  produceFruits() {
    if (this.healthStatus == false) {
      this.fruits = 0;
      this.fruitBasket = []
    } else {
      let randomNum = this.getRandomFruitCount();
      this.fruits = randomNum;
      for (let i = 0; i < this.fruits; i++) {
        if (this.getRandomQuality() == 0) {
          this.fruitBasket.push(new Fruit("bad"));
        } else {
          this.fruitBasket.push(new Fruit("good"));
        }
      }
    }
  }


}

class Fruit {
  constructor(quality) {
    this.quality = quality;
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor(quality) {
    super(quality)
    this.name = "Mango";
  }
}

class Apple extends Fruit{
  constructor (quality) {
    super(quality)
    this.name = "Apple"
  }
}

class Pear extends Fruit {
  constructor(quality) {
    super(quality)
    this.name = "Pear"
  }
}


// Release 3
class TreeGrove {
  constructor () {
    this.grove = [];
  }

  inputTree (treeName, age, height, fruits, healthStatus) {
    if (treeName == "AppleTree") {
      let tree = new AppleTree(age, height, fruits, healthStatus)
      this.grove.push(tree);
    } else if (treeName == "MangoTree") {
      let tree = new MangoTree(age, height, fruits, healthStatus)
      this.grove.push(tree);
    } else if (treeName == "PearTree") {
      let tree = new PearTree(age, height, fruits, healthStatus)
      this.grove.push(tree);
    } else {
      let tree = new OtherTree(age, height, fruits, healthStatus)
      this.grove.push(tree);
    }
  }

  nextYear () {
    for (let i = 0; i < this.grove.length; i++) {
      this.grove[i].grow()
      this.grove[i].produceFruits()
      this.grove[i].harvest()
    }
    return 1;
  }

  showAge () {
    for (let i = 0; i < this.grove.length; i++) {
      console.log(`Pohon ${this.grove[i].name} Sekarang berumur ${this.grove[i].age} tahun`);
    }
    return 1;
  }

  showTrees () {
    console.log(`Pohon yang sedang tumbuh adalah `);
    for (let i = 0; i < this.grove.length; i++) {
      console.log(`${i+1}. ${this.grove[i].name}`);
    }
    return 1
  }

  showMatureTrees () {
    console.log(`Pohon yang sedang berbuah adalah `);
    for (let i = 0; i < this.grove.length; i++) {
      if (this.grove[i].fruits > 0) {
        console.log(`${i+1}. ${this.grove[i].name}`);
      }

    }
    return 1;
  }

  showDeadTrees () {
    for (let i = 0; i < this.grove.length; i++) {
      if (this.grove[i].healthStatus == false) {
        console.log(`Pohon yang sudah mati antara lain :`);
        console.log(`${i+1}. ${this.grove[i].name}`);
      }
    }
    return 1;
  }
}


// driver code untuk release 0
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)


let groveTree = new TreeGrove()
groveTree.inputTree("AppleTree", 2, 1.23, 3, true);
groveTree.inputTree("MangoTree", 3, 2, 5, true);
groveTree.inputTree("PearTree", 2, 0.5, true);
// groveTree.inputTree("Pohon Uang", 1, 0.3, true);


groveTree.nextYear()

groveTree.nextYear()

groveTree.showAge();
groveTree.showTrees();
groveTree.showDeadTrees();
groveTree.showMatureTrees();
