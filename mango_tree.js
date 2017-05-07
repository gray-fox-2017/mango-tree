"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.height = 0;
    this.fruits = []
    this.harvested ='';
    this.healthy = true;
    this.max_GrowAge = 10;
    this.Fruit_Age = 3;
    this.max_Age = 20;
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
    return this.healthy;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.age++;
    if (this.getAge()>=this.max_Age) {
      this.healthy = false;
    }
    if(this.getAge()<=this.max_GrowAge) {
      this.height += getRandomNumber(100,1);
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.getAge() > this.Fruit_Age) {
      let totalFruits = getRandomNumber(20,0);
      for(let i = 0; i <totalFruits; i++) {
        let mango = new Mango()
        this.fruits.push(mango);
      }
    }
    this.harvest();
  }

  // Get some fruits
  harvest() {
    let goodHarvest = 0, badHarvest = 0;
    for (let i = 0; i < this.fruits.length; i++) {
    if(this.fruits[i].quality == "good") {
      goodHarvest++;
    } else {
      badHarvest++;
    }
  }

  this.harvested = `${this.fruits.length} (${goodHarvest} good, ${badHarvest} bad)`;
  this.fruits = []
}
}

class Mango {
  // Produce a mango
  constructor() {
    let qualityOptions = ["bad", "good"]
    this.quality = qualityOptions[getRandomNumber(1,0)]
  }
}

function getRandomNumber(max,min) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}


  // * driver code untuk release 0
let mangoTree = new MangoTree()

console.log(`The tree is alive! :smile:`);
 do {
 mangoTree.grow();
 mangoTree.produceMangoes();
 console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested} `);
} while (mangoTree.healthy != false)
console.log(`The tree has met its end. :sad:`);



// // Release 2
// Release 1
//parent class
class FruitTree {
  constructor(age,height,produce,status){
    this._age = age
    this._height = height
    this._produce = produce
    this._status = status
  }

  grow(){
    if(this._age == this._maxAge){
      this._status = false
    } else {
      this._age++
      if(this._age < this._stopHeight){
        let random = (this.getRandomNumber(1,5).toFixed(1))
        this._height += +random
      }
      if(this._age >= this._startProduce){
        this._produce += Math.floor(this.getRandomNumber(1,5))
      }
    }

  }

  getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
  }
}

// Release 0
class AppleTree extends FruitTree {
  constructor(age,height,produce,status){
    super(age,height,produce,status)
    this._name = "Pohon Apple"
    this._startProduce = 6
    this._stopHeight = 8
    this._maxAge = 10
  }

  grow(){
    super.grow()
  }

  harvest(){
    super.harvest()
  }
}

class ManggoTree extends FruitTree {
  constructor(age,height,produce,status) {
    super(age,height,produce,status)
    this._name = "Pohon Mangga"
    this._startProduce = 5
    this._stopHeight = 9
    this._maxAge = 14

  }

  grow(){
    super.grow()
  }

  harvest(){
    super.harvest()
  }
}

class PearTree extends FruitTree {
  constructor(age,height,produce,status) {
    super(age,height,produce,status)
    this._name = "Pohon Pear"
    this._startProduce = 6
    this._stopHeight = 10
    this._maxAge = 12
  }

  grow(){
    super.grow()
  }

  harvest(){
    super.harvest()
  }
}

class Fruit {
//   constructor(){

  }
}

class Apple {
  constructor(){

  }
}

class Manggo {
  constructor() {

  }
}

class Pear {
  constructor() {

  }
}

// Release 2
class TreeGrove {
  constructor(){
    this.trees = []
  }

  inputTree(name, age, height, produce, status){
    let pohon;
    if (name == "ManggoTree"){
      pohon = new ManggoTree(age,height,produce,status)
    } else if (name == "AppleTree") {
      pohon = new AppleTree(age,height,produce,status)
    } else {
      pohon = new PearTree(age,height,produce,status)
    }
    this.trees.push(pohon)
  }

  nextYear(){
    this.trees.map((element)=>{
      return element.grow()
    })
  }

  showAge(){
    this.trees.forEach((element)=>{
      console.log(`Umur dari ${element._name} : ${element._age} Tahun`);
    })
  }

  showTrees(){
    this.trees.forEach((element)=>{
      console.log(`${element._name} : Umur ${element._age} tahun berbuah dalam setahun ${element._produce} dan tinggi ${element._height.toFixed(1)}`);
    })
  }

  mature_trees(){
    this.trees.forEach((element)=>{
      if(element._produce > element._age){
        console.log(`${element._name} : berbuah sebanyak ${element._produce}`);
      }
    })
  }

  dead_trees(){
    this.trees.forEach((element)=>{
      if(element._status == true){
        console.log(`${element._name} Masih dalam pertumbuhan`);
      } else {
        console.log(`${element._name} pertumbuhan sudah berakhir`);
      }
    })
  }
}

let grove = new TreeGrove()
//input your trees data!!
grove.inputTree("ManggoTree",0,0,0,true)
grove.inputTree("ManggoTree",5,2,12,true)
grove.inputTree("AppleTree",4,2,5,true)
grove.inputTree("PearTree",7,2,15,true)

console.log(`********** Umur Pohon Pertama Kali ************`);
grove.showAge()

grove.nextYear()//1
grove.nextYear()//2
grove.nextYear()//3
grove.nextYear()//4
console.log();
console.log(`********** Setelah Berganti Tahun ************`);
grove.showAge()

console.log();
console.log(`********** Pohon yang Sudah Mature dan tidak Mature ************`);
grove.mature_trees()

console.log();
console.log(`********** Pohon yang sudah Dead / No Dead ************`);
grove.dead_trees()

console.log(`****************************************************`);
grove.showTrees()



module.exports = {
  MangoTree,
  Mango
}
