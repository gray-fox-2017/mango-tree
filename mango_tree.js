"use strict"


class FruitTree {
  constructor(parameter) {
    this.umur = 0;
    if(parameter.hasOwnProperty("umur")) {
      this.umur = parameter["umur"];
    }

    this.max_umur = 20;
    if(parameter.hasOwnProperty("max_umur")) {
      this.max_umur = parameter["max_umur"];
    }

    this.tinggi = 0;
    if(parameter.hasOwnProperty("tinggi")) {
      this.tinggi = parameter["tinggi"];
    }

    this.max_tinggi = 5;
    if(parameter.hasOwnProperty("max_tinggi")) {
      this.max_tinggi = parameter["max_tinggi"];
    }

    this.buah = [];
    if(parameter.hasOwnProperty("buah")) {
      this.buah = parameter["buah"];
      this.produceBuah(this.buah)
    }

    this.max_buah = 20;
    if(parameter.hasOwnProperty("max_buah")) {
      this.max_tinggi = parameter["max_buah"];
    }

    this.buah_diPetik = 0;
    if(parameter.hasOwnProperty("buah_diPetik")) {
      this.buah_diPetik = parameter["buah_diPetik"];
      this.harvest(this.buah_diPetik)
    }

    this.count_bagus = 0;
    if(parameter.hasOwnProperty("count_bagus")) {
      this.count_bagus = parameter["count_bagus"];
    }

    this.count_jelek = 0;
    if(parameter.hasOwnProperty("count_jelek")) {
      this.count_jelek = parameter["count_jelek"];
    }

    this.statusSehat = true;
    if(parameter.hasOwnProperty("statusSehat")) {
      this.statusSehat = parameter["statusSehat"];
    }
  }

  getAge() {
    return this.umur
  }
  getHeight() {
    return this.tinggi
  }
  getFruits() {
    return this.buah
  }
  getHealtyStatus() {
    return this.statusSehat
  }

  randomPertumbuhan() {
    return Math.random()*2 + 1
  }

  randomBuah() {
    return Math.floor(Math.random()* this.max_buah)+1
  }

  randomKualitas() {
    return Math.floor(Math.random()* 2)
  }

  grow(paramGrow) {
    let random = this.randomPertumbuhan()
    this.umur++
    if (this.umur <= 17) {
      this.tinggi += random
    } else if (this.umur == 20){
      this.statusSehat = false
    }
  }
  // Produce some mangoes
  produceBuah(paramBuah) {
    let tamp = this.randomBuah()
    for (let i = 0; i<tamp; i++) {
      //-------------bisa ------------------
      let test = new Fruits()
      if (test.kualitas === 'bagus') {
        this.count_bagus++
      } else {
        this.count_jelek++
      }
    }
    let total_buah = (this.count_jelek + this.count_bagus);
    this.buah.push(total_buah)
    return this.buah
  }

  // Get some fruits
  harvest(paramHarvest) {
    this.buah_diPetik = `${this.buah}, (${this.count_bagus} bagus, ${this.count_jelek} jelek)`;
    this.buah = []
    this.count_bagus = 0
    this.count_jelek = 0
  }

}

class Fruit {
  constructor() {
    this.kualitas = (this.randomKualitas() == 0) ? "Bagus" : "Jelek";
  }
}

// console.log(`The tree is alive! :smile"`);
// let fruitTree = new FruitTree()
// do {
//    fruitTree.grow();
//    fruitTree.produceBuah();
//    fruitTree.harvest();
//    console.log(`[Year ${fruitTree.umur} Report] Height = ${fruitTree.tinggi.toFixed(2)}m | Fruits harvested = ${fruitTree.buah_diPetik}`)
// } while (fruitTree.getHealtyStatus() != false)
//
// console.log(`The tree has met its end. :sad:`)

/*
***********************************************************
*/

class Apple {}
class AppleTree {}


class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(parameter) {
    super(parameter)
  }
}
class Mango {
  // Produce a mango
  constructor() {
  }
}


let hidupkanMangoTree = new MangoTree({fruitName: "Mango"})
console.log(`The ${hidupkanMangoTree.fruitName}tree is alive! :smile"`);
// let mangoTree = new MangoTree({fruitName: "Mango"});
// console.log(`The ${mangoTree._fruitName} tree is alive! :smile:`);

do {
   hidupkanMangoTree.grow();
   hidupkanMangoTree.produceBuah();
   hidupkanMangoTree.harvest();
   console.log(`[Year ${hidupkanMangoTree.umur} Report] Height = ${hidupkanMangoTree.tinggi.toFixed(2)}m | Fruits harvested = ${hidupkanMangoTree.buah_diPetik}`)
} while (hidupkanMangoTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)





// Release 3
class TreeGrove {
  constructor() {

  }
}
