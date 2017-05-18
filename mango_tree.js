"use strict"

// release 0
"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0.0
    this._fruits = [];
    this._harvested = 0
    this._healty = true;

  }

  // Get current states here
  getAge(){
    return this._age
  }

  getHeight(){
    return this._height
  }

  getFruits(){
    return this._fruits.length
  }

  getHealty(){
    return this._health;
  }

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= 10){
      this._height = getRandomNumber() / 10
    }
    if (this._age === 20){
      this._health = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for(var i = 0; i < getRandomNumber() * 5; i++){
      this._fruits.push(new Mango());
    }
  }

  // Get some fruits
  harvest() {
    this._goodFruits = 0;
    this._badFruits = 0;

    this._harvested = this._fruits.length;
    for(var i = 0; i < this._fruits.length; i++){
      if (this._fruits[i]._quality== "good"){
        this._goodFruits += 1
      }
      else{
        this._badFruits += 1
      }
    }
    this._fruits = [];
  }
}

class Mango {
  // Produce a mango
  constructor() {
    let status = ['good','bad'];
    this._quality = status[Math.floor(Math.random()*2)];
  }
}

// let getRandomNumber = () => Math.floor(Math.random()) * 10
function getRandomNumber() {
  return Math.random();
}

var tree = new MangoTree()
console.log(`The tree is alive! : smile:`)

do{
  tree.grow()
  tree.produceMangoes()
  tree.harvest()
  console.log(`[Year ${tree._age}Report] Height = ${tree._height.toFixed(2)} | Fruits harvested = ${tree._harvested} ${tree._badFruits} bad ${tree._goodFruits} good`)

}while (tree._health != false)

console.log(`Three tree has met its end. : sad:`)


// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
//
// // Release 3
// class TreeGrove {}
