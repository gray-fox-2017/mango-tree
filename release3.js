"use strict"

// Release 2
class FruitTree {
  constructor(name, umur, tamp, max_umur, tinggi, max_tinggi, max_buah, buah, buah_diPetik, statusSehat, count_bagus, count_jelek) {
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
    this.name = 'INDUK POHON'
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
    //console.log(tamp);
    for (let i = 0; i<tamp; i++) {
      //-------------bisa ------------------
      let test = new Fruit()
      //test.name
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
      //console.log("tes : "+this.buah);
      this.buah.push(test)
      //this.buah_diPetik = "cobaaa "+this.buah.length
    }
     //let total_buah = (this.count_jelek + this.count_bagus);

    //return this.buah
  }
  // Get some fruits
  harvest() {
    //this.buah_diPetik = `${JSON.stringify(this.buah.length)}, (${this.count_bagus} bagus, ${this.count_jelek} jelek)`;
    this.buah_diPetik = `${this.buah.length}, (${this.count_bagus} bagus, ${this.count_jelek} jelek)`;
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

// console.log(`The tree is alive! :smile"`);
// let fuitTree = new FruitTree()
// console.log(`${fuitTree.name}`);
// do {
//    fuitTree.grow();
//    fuitTree.produceBuah();
//    fuitTree.harvest();
//    console.log(`[Year ${fuitTree.umur} Report] Height = ${fuitTree.tinggi.toFixed(2)}m | Fruits harvested = ${fuitTree.buah_diPetik}`)
// } while (fuitTree.getHealtyStatus() != false)
//
// console.log(`The tree has met its end. :sad:`)

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(name, umur, tinggi, buah, statusSehat) {
    super()
    this.name = name || 'mango'
    this.umur = umur || 0
    this.tinggi = tinggi || 0
    this.buah = buah || []
    this.statusSehat = statusSehat || true

  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
  super()
  }
}
console.log('--------------------------------------------------------------------------------------------------');
//console.log(`The tree is alive! :smile"`);

let mangoTree = new MangoTree()
console.log(`The ${mangoTree.name} tree is alive! :smile:`);
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
  }
}

class AppleTree extends FruitTree {
  constructor(name, umur, tinggi, buah, statusSehat) {
    super()
    this.name = name || 'apple'
    this.umur = umur || 0
    this.tinggi = tinggi || 0
    this.buah = buah || []
    this.statusSehat = statusSehat || true
  }
}
console.log('--------------------------------------------------------------------------------------------------');
let appleTree = new AppleTree()
console.log(`The ${appleTree.name} tree is alive! :smile:`);
do {
   appleTree.grow();
   appleTree.produceBuah();
   appleTree.harvest();
   console.log(`[Year ${appleTree.umur} Report] Height = ${appleTree.tinggi.toFixed(2)}m | Fruits harvested = ${appleTree.buah_diPetik}`)
} while (appleTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)

class Pear extends Fruit {
  constructor() {
    super()
  }
}

class PearTree extends FruitTree {
  constructor(name, umur, tinggi, buah, statusSehat) {
    super()
    this.name = name || 'pear'
    this.umur = umur || 0
    this.tinggi = tinggi || 0
    this.buah = buah || []
    this.statusSehat = statusSehat || true
  }
}
console.log('--------------------------------------------------------------------------------------------------');
let pearTree = new PearTree()
console.log(`The ${pearTree.name} tree is alive! :smile:`);
do {
   pearTree.grow();
   pearTree.produceBuah();
   pearTree.harvest();
   console.log(`[Year ${pearTree.umur} Report] Height = ${pearTree.tinggi.toFixed(2)}m | Fruits harvested = ${pearTree.buah_diPetik}`)
} while (pearTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)

//Release 3
class TreeGrove extends FruitTree {
  constructor() {
    super()
    this.tree = []
  }


  inputTree(name, umur, tinggi, buah, statusSehat) {
    if (name == "mango") {
      //let mangoTree = new MangoTree({namaBuah: namaBuah, umur: umur, tinggi: tinggi, buah: buah, healthy: statusSehat})
      let mangoTree = new MangoTree(name, umur, tinggi, buah, statusSehat)
      this.tree.push(mangoTree)
    } else if (name == "pear") {
      let pearTree = new PearTree(name, umur, tinggi, buah, statusSehat)
      this.tree.push(pearTree)
    } else {
      let appleTree = new AppleTree(name, umur, tinggi, buah, statusSehat)
      this.tree.push(appleTree)
    }
    //console.log(this.tree);
  }

  next_year() {
    console.log('******TAHUN*******');
    for (let i = 0; i< this.tree.length; i++) {
      this.tree[i].grow()
    }
  }

  show_ages() {
    console.log('****SHOW AGE***** ');
    for (let i = 0; i <this.tree.length; i++) {
      console.log(`Name : ${this.tree[i].name} , age : ${JSON.stringify(this.tree[i].umur)} `);
    }
  }

  show_tree() {
    console.log('*****SHOW TREES******');
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`Pohon : ${this.tree[i].name}`);
    }
  }

  mature_tree() {
    console.log('******SHOW MATURE TREES*******');
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i].buah >= 0) {
        console.log(`Nama : ${this.tree[i].name}, Banyaknya : ${this.tree[i].buah}, Tingginya : ${this.tree[i].tinggi.toFixed(2)}m`);
      }
    }
  }

  dead_tree() {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i].umur == 20 || this.tree[i].statusSehat == false) {
        console.log(`${this.tree[i].name}`);
      } else {
        console.log('Tidak Ada Pohon Yang Mati!');
      }
    }
  }




}

let grove = new TreeGrove()
grove.inputTree("mango", 3, 1.8, 7, true)
grove.inputTree("mango", 5, 2.4, 12, true)
grove.inputTree("apple", 4, 1.2, 5, true)
grove.inputTree("pear", 7, 2, 15, true)

grove.next_year()

grove.show_ages()
grove.show_tree()
grove.mature_tree()
grove.dead_tree()
