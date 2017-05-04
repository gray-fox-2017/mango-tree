"use strict"

class TreeGrove {
  constructor() {
    this.trees = [];
  }

  inputTree(tree, age, height, harvested, healthyStatus) {
    let newTree = {};
    switch(tree) {
      case "MangoTree" : newTree = new MangoTree(tree, age, height, harvested, healthyStatus);
        break;
      case "AppleTree" : newTree = new AppleTree(tree, age, height, harvested, healthyStatus);
        break;
      case "PearTree" : newTree = new PearTree(tree, age, height, harvested, healthyStatus);
        break;
    }
    this.trees.push(newTree);
  }

  nextYear() {
    for (let i=0; i<this.trees.length; i++){
      this.trees[i].grow();
    }
  }

  showAge() {
    let ageTrees = [];
    for (let i=0; i<this.trees.length; i++) {
      ageTrees.push(this.trees[i]._age);
    }
    if (ageTrees.length !== 0) {
      console.log(`Pohon-pohon ini berusia: `);
      console.log(ageTrees.join(", ") + " tahun");
    }
    else {
      console.log(`Belum ada pohon di sini.`);
    }  
  }

  showTrees() {
    let availTrees = [];
    for (let i=0; i<this.trees.length; i++) {
      availTrees.push(this.trees[i]._name);
    }
    if (availTrees.length !== 0) {
      console.log(`Pohon-pohon yang tersedia: `);
      console.log(availTrees.join(", "));
    }
    else {
      console.log(`Belum ada pohon di sini.`);
    }
    //console.log(this.trees);
  }

  mature_trees() {
    let matureTrees = [];
    for (let i=0; i<this.trees.length; i++) {
      if (this.trees[i]._harvested !== 0) {
        matureTrees.push(this.trees[i]._name);
      }
    }
    if (matureTrees.length !== 0) {
      console.log(`Pohon-pohon yang sedang berbuah: `);
      console.log(matureTrees.join(", "));
    }
    else {
      console.log(`Sayang sekali, tidak ada pohon yang sedang berbuah`);
    }
  }

  dead_trees() {
    let deadTrees = [];
    for (let i=0; i<this.trees.length; i++) {
      if (this.trees[i]._healthyStatus === false) {
        deadTrees.push(this.trees[i]._name);
      }
    }
    if (deadTrees.length !== 0) {
      console.log(`Pohon-pohon yang sudah mati: `);
      console.log(deadTrees.join(", "));
    }
  }
}

class FruitTree {
  constructor (name, age=0, height=0, harvested=0, healthyStatus=true, maxAge=200) {
    this._name = name;
    this._age = age;
    this._maxAge = maxAge;
    this._healthyStatus = healthyStatus;
    this._height = height;
    this._fruits = [];
    this._harvested = harvested;
    this._good = 0;
    this._heightConst = 2;
    this._matureAge = 4;
  }

  // Grow the tree
  grow() {
    this._age ++;
    if (this._age < this._maxAge) {
      debugger
      this._height += this._heightConst * Math.random();
      if (this._age > this._matureAge && this._age < this._maxAge-30) {
        if (this._age < this._maxAge/2) {
          this._harvested = Math.floor((Math.random() * this._age) + 1);
        }
        else {
          this._harvested = Math.floor((Math.random() * (this._maxAge-this._age)) + 1);
        }
      }
      else {this._harvested = 0;}
    }
    else {
      this._healthyStatus = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    for (let i=0; i<this._harvested; i++){
      let fruit = true;
      switch(this._name.toLowerCase()) {
        case "mangga" : fruit = new Mango();
          break;
        case "apel" : fruit = new Apple();
          break
        case "pir" : fruit = new Pear();
          break
        default: fruit = new Fruit();
      }
      this._fruits.push(fruit.quality);
    }
  }

  // Harvest the fruits
  harvest() {
    debugger
    this._good = 0;
    //the "goodCount" keeps increasing itself. It doesn't start from 0 at every iteration. Is there any way to reset it?
    //this._good = this._fruits.reduce((goodCount, cur) => (cur===true)? goodCount+=1 : goodCount,0);
    for (let i=0; i<this._harvested; i++) {
      this._good = (this._fruits[i] === true) ? this._good+=1 : this._good;
    }
  }

  
  // Getter methods
  get age() {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruit;
  }

  get healthyStatus () {
    return this._healthyStatus;
  }

  get harvested () {
    return this._harvested;
  }
  
  get good () {
    return this._good;
  }
}

class MangoTree extends FruitTree {
  constructor(name="Mangga", age=0, height=0, harvested=0, healthyStatus=true, varieties="Harum manis", maxAge=200) {
    super (name, age, height, harvested, healthyStatus, varieties, maxAge);
    this._maxAge = maxAge;
    this._varieties = varieties;
    this._healthyStatus = healthyStatus;
    this._harvested = harvested;
    this._height = height;
    this._age = age;
    this._name = name;
    this._heightConst = 0.8;
    this._matureAge = 3;
  }
}

class AppleTree extends FruitTree {
  constructor(name="Apel", age=0, height=0, harvested=0, healthyStatus=true, varieties="Malang", maxAge=100) {
    super (name, age, height, harvested, healthyStatus, varieties, maxAge);
    this._maxAge = maxAge;
    this._varieties = varieties;
    this._healthyStatus = healthyStatus;
    this._harvested = harvested;
    this._height = height;
    this._age = age;
    this._name = name;
    this._heightConst = 1;
    this._matureAge = 2;
  }

  // This function is overriding the parents' function
  //grow() {
  //  console.log(this._harvested);
  //  this._harvested *= 2;
  //}
}

class PearTree extends FruitTree {
  constructor(name="Pir", age=0, height=0, harvested=0, healthyStatus=true, varieties="Madu", maxAge=150) {
    super (name, age, height, harvested, healthyStatus, varieties, maxAge);
    this._maxAge = maxAge;
    this._varieties = varieties;
    this._healthyStatus = healthyStatus;
    this._harvested = harvested;
    this._height = height;
    this._age = age;
    this._name = name;
    this._heightConst = 1;
    this._matureAge = 3;
    this._heightConst = 1.1;
    this._matureAge = 6;
  }
}

class Fruit {
  constructor(name="") {
    this.name = name;
    this.quality = Math.random () < 0.5;
  }
}

class Mango extends Fruit {
  constructor(name = "Mangga") {
    super(name);
  }
}

class Apple extends Fruit {
  constructor(name = "Apel") {
    super(name);
  }
}

class Pear extends Fruit {
  constructor(name = "Pir") {
    super(name);
  }
}

/*
// Driver code
let mangoTree = new AppleTree('apel');
console.log(`The tree is alive! :smile:`);

do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} m | Fruits harvested = ${mangoTree.harvested} (${mangoTree.good} good, ${mangoTree.harvested-mangoTree.good} bad)`);
} while (mangoTree.healthyStatus != false)

console.log(`The tree has met its end :sad:`);
*/

var grove = new TreeGrove();
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);

// next year
//grove.nextYear();
for (let i=0; i<50; i++) {
  grove.nextYear();
}

// show trees ages
grove.showAge();

// show trees
grove.showTrees();

// show mature trees
grove.mature_trees();

// show dead trees
grove.dead_trees();
