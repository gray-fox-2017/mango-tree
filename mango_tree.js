"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(name,age,height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.maxFruit = 15;
    this.sum = [];
    this.health = true;
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.sum.length;
  }
  getHealtyStatus() {
    return this.health;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age++;
    this.height+=Math.round(Math.floor(Math.random() * 15) / 12);
    if (this.age == 17) this.health = false;
    if (this.height >= 8) this.height=8
  }

  // Produce some mangoes
  produce() {
    this.harvested = 0;
    for (let i = 0; i < Math.random()*10; i++) {
        this.sum.push(new Fruit())
        this.harvested++;
      }
    }

  // Get some fruits
  harvest() {
    this.goodFruit = 0;
    this.badFruit = 0;
    for (let i = 0; i < this.sum.length; i++) {
      if (this.sum[i].quality === 'good') {
        this.goodFruit += 1;
      } else {
        this.badFruit += 1;
      }
    }
    this.sum = [];
  }
}

class Fruit {
  // Produce a mango
  constructor() {
    let state = ['good', 'bad'];
    this.quality = state[Math.floor(Math.random()*2)];
  }
}



// Release 1
class AppleTree extends FruitTree {
  constructor(name,age,height) {
    super(name,age,height);
  }
}
class Apple extends Fruit {
  constructor() {
    super();
  }
}

// let appleTree = new AppleTree()
//  console.log('The tree is alive!');
// do {
//   appleTree.grow();
//   appleTree.produce();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested} (${appleTree.goodFruit} good, ${appleTree.badFruit} bad)`)
// } while (appleTree.health != false)
// console.log('The tree has met its end.\n');


class PearTree extends FruitTree {
  constructor(name,age,height) {
    super(name,age,height);
  }
}
class Pear extends Fruit {
  constructor() {
    super();
  }
}

// let pearTree = new PearTree()
//  console.log('The tree is alive!');
// do {
//   pearTree.grow();
//   pearTree.produce();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested} (${pearTree.goodFruit} good, ${pearTree.badFruit} bad)`)
// } while (pearTree.health != false)
// console.log('The tree has met its end.\n');
// Release 2
class MangoTree extends FruitTree {
  constructor(name,age,height) {
    super(name,age,height);
  }
}
class Mango extends Fruit {
  constructor() {
    super();
  }
}

let mangoTree = new MangoTree("Mango Tree",0 , 2)
 console.log(`The ${mangoTree.name} is alive!`);
do {
  mangoTree.grow();
  mangoTree.produce();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested} (${mangoTree.goodFruit} good, ${mangoTree.badFruit} bad)`)
} while (mangoTree.health != false)
console.log('The tree has met its end.\n');
// Release 3
