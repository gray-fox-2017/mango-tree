"use strict"

// Release 2
class FruitTree {
  constructor(umur, tamp, max_umur, tinggi, max_tinggi, max_buah, buah, buah_diPetik, statusSehat, count_bagus, count_jelek) {
    this.umur = 0
    this.tamp = []
    this.max_umur = 20
    this.tinggi = 0
    this.max_tinggi = 5
    this.max_buah = 20
    this.buah = []
    this.buah_diPetik = 0
    this.statusSehat = true
    this.count_bagus = 0
    this.count_jelek = 0
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
  // Get current states here
  // Grow the tree
  randomPertumbuhan() {
    return Math.random()
  }
  randomBuah() {
    return Math.floor(Math.random()* this.max_buah)+1
  }
  grow() {
    let random = this.randomPertumbuhan()
    this.umur++
    if (this.umur <= 17) {
      if (this.tinggi <= this.max_tinggi) {
        this.tinggi += random
      }
    } else if (this.umur == 20){
      this.statusSehat = false
    }
  }
  // Produce some mangoes
  produceBuah() {
    let tamp = this.randomBuah()
    for (let i = 0; i<tamp; i++) {
      //-------------bisa ------------------
      let test = new Fruit()
      if (test.kualitas === 'bagus') {
        this.count_bagus++
      } else {
        this.count_jelek++
      }
      //-------------bisa ------------------
      //-------------------------bisa----------------------
      // let rand = Math.floor(Math.random()* 2)
      // if (rand == 0) {
      //   this.count_bagus++
      // } else {
      //   this.count_jelek++
      // }
      //-------------------------bisa----------------------
    }
    let total_buah = (this.count_jelek + this.count_bagus);
    this.buah.push(total_buah)
    return this.buah
  }
  // Get some fruits
  harvest() {
    this.buah_diPetik = `${this.buah}, (${this.count_bagus} bagus, ${this.count_jelek} jelek)`;
    this.buah = []
    this.count_bagus = 0
    this.count_jelek = 0
  }
}

class Fruit {
  constructor() {
    this.kualitas = ''
    let rand = Math.floor(Math.random()* 2)
    if (rand == 0) {
      this.kualitas = 'bagus'
    } else {
      this.kualitas = 'jelek'
    }
    //console.log(this.kualitas);
    return this.kualitas
  }
}

console.log(`The tree is alive! :smile"`);
let fuitTree = new FruitTree()
do {
   fuitTree.grow();
   fuitTree.produceBuah();
   fuitTree.harvest();
   console.log(`[Year ${fuitTree.umur} Report] Height = ${fuitTree.tinggi.toFixed(2)}m | Fruits harvested = ${fuitTree.buah_diPetik}`)
} while (fuitTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor() {
    super()
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
  super()
  this.name = "mango"
  }
}

console.log(`The tree is alive! :smile"`);
let mangoTree = new MangoTree()
do {
   mangoTree.grow();
   mangoTree.produceBuah();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.umur} Report] Height = ${mangoTree.tinggi.toFixed(2)}m | Fruits harvested = ${mangoTree.buah_diPetik}`)
} while (mangoTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)

//let tes = new Mango()
//console.log(tes.kualitas);

// Release 1
class Apple extends Fruit {
  constructor() {
    super()
    this.name = "apple"
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super()
  }
}

console.log(`The tree is alive! :smile"`);
let appleTree = new AppleTree()
do {
   appleTree.grow();
   appleTree.produceBuah();
   appleTree.harvest();
   console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.tinggi.toFixed(2)}m | Fruits harvested = ${appleTree.buah_diPetik}`)
} while (appleTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)


// Release 3
class TreeGrove {
  constructor() {
    super()

  }

  inputTree() {
    
  }
}
