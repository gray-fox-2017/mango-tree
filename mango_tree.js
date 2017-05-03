"use strict"

// release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 1 //in years,
    this._height = 50; //in cm
    this.max_fruit = 30;
    this.max_age = 15;
    this._harvested = 0;
    this._quality = {bad : 0, good : 0};
    this._healthyStatus = true;
    this.a_mango = new Mango();
  }
  // Get current states here
  getAge() {
    return this._age;
  }
  getHeight() {
    return this._height;
  }
  getFruits() {
    return this._harvested;
  }
  getHealtyStatus() {
    return this.is_healthy;
  }

  // Grow the tree
  grow() {
    if(this.getAge() <= 1 ){
      console.log("The tree has planted :) ");
      this._age = this.getAge() + 1;
      this._height = this.getHeight() + this.height_increment()
    } else if (this.getAge() === this.max_age){
      console.log("The tree has meet it end :(")
      this._healthyStatus = false
    } else {
      this._age = this.getAge() + 1;
      this._height = this.getHeight() + this.height_increment()
    }
  }

  height_increment(){
    return Math.ceil(Math.random()*125);
  }

  // Produce some mangoes
  // Produce total quantity per harvest , not quality, input to this._harvested
  produceMangoes() {
    this._harvested = Math.ceil(Math.random()*this.max_fruit)
  }

  // Get some fruits , input data to this.quality from class Mango
  harvest() {
    let tmp = this.getFruits();
    //set to zero
    this._quality['bad'] = 0;
    this._quality['good'] = 0;
    while(tmp > 0){
      this.a_mango.getQuality();
      if (this.a_mango.quality === "bad"){
        //++ to bad key
        this._quality['bad'] = this._quality['bad'] + 1;
        tmp--;
      } else if (this.a_mango.quality === "good"){
        //++ to good key
        this._quality['good'] = this._quality['good'] + 1;
        tmp--
      }
    }
  }
}

class Mango {
  // Produce a mango, randomize bad good per mango
  constructor() {
    this.quality = ""
  }
  getQuality(){
    let tmp_1 = Math.ceil(Math.random()*2);
    if (tmp_1 === 1){
      this.quality = "bad";
      return this
    } else if (tmp_1 === 2){
      this.quality = "good";
      return this
    }
  }
}


  // driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested} ${JSON.stringify(mangoTree._quality)} `)
} while (mangoTree._healthyStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
