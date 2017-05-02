"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._tall = 0;
    this._height = '';
    this._fruits = [];
    this._harvested = '';
    this.healthyStatus = true;
  }

  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._fruits;
  }
  getHealtyStatus() {
    return this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;

    let tumbuh = Math.ceil(Math.random() * 40) / 10;
    this._tall += tumbuh;
    if(this._tall >= 30) this._tall = 30;
    this._height = `${this._tall.toFixed(2)} m`

    if(this._age == 20) this.healthyStatus = false;
  }

  // Produce some mangoes
  produceMangoes() {
    let kapasitasBuah = Math.round(Math.random() * 10);
    for(let i = 0; i < kapasitasBuah; i++) {
      this._fruits[i] = new Mango();
    }
  }

  // Get some fruits
  harvest() {
    let good = 0,
        bad  = 0;

    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i].quality == 'good') {
        good++;
      } else bad++;
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`

    this._fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.qualitySetter();
  }

  qualitySetter() {
    let random = Math.round(Math.random());
    if(random == 1) {
      this.quality = 'good';
    } else this.quality = 'bad';
    return this.quality;
  }
}


  // * driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
   mangoTree.grow();
   mangoTree.produceMangoes();
  //  console.log(mangoTree.getFruits());
   mangoTree.harvest();
   console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
  } while (mangoTree.healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
