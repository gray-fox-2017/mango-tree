"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {

    this.age =0;
    this.height=0;
    this.fruits=[];
    this.healthyStatus = true;
    this.harvested='';
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
    return this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    let randomHeight= Math.floor((Math.random()*2));
    let maxHeight=4

    if(maxHeight!==this.height)
      this.height+=randomHeight;
    else this.height=this.height;

    this.age+=1;

    if(this.age===20){
      this.healthyStatus=false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let randomQuality= Math.floor((Math.random()*5));
    let mango = new Mango(randomQuality);
    for(let i=0;i<randomQuality;i++){

      this.fruits.push(mango.quality())
    }
  }

  // Get some fruits
  harvest() {
    let goodFruit=0;
    let badFruit=0;
    for(let i=0;i<this.fruits.length;i++){
        if(this.fruits[i]==='good'){
          goodFruit+=1;
        }else badFruit+=1;

      this.harvested=`${this.fruits.length} (${goodFruit} good, ${badFruit} bad)`
    }
  }
}

class Mango {
  // Produce a mango
  constructor(random) {
    this.random=random;
  }

  quality(){
    if(this.random%2===0)
    {
      return 'good'
    }else return 'bad'
  }
}


//  * driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
        mangoTree.grow();
        mangoTree.produceMangoes();
        mangoTree.harvest();
        console.log(`[Year ${mangoTree.getAge()} Report] Height = ${mangoTree.getHeight()} | Fruits harvested = ${mangoTree.harvested}`)

      } while (mangoTree.getHealtyStatus() != false)


// Release 1
class AppleTree {{

  // Initialize a new AppleTree
  constructor() {

    this.age =0;
    this.height=0;
    this.fruits=[];
    this.healthyStatus = true;
    this.harvested='';
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
    return this.healthyStatus;
  }


  // Get current states here

  // Grow the tree
  grow() {
    let randomHeight= Math.floor((Math.random()*2));
    let maxHeight=6

    if(maxHeight!==this.height)
      this.height+=randomHeight;
    else this.height=this.height;

    this.age+=1;

    if(this.age===25){
      this.healthyStatus=false;
    }
  }

  // Produce some apples
  produceApples() {
    let mango = new Mango(randomQuality);
    for(let i=0;i<randomQuality;i++){

      this.fruits.push(mango.quality())
    }
  }

  // Get some fruits
  harvest() {
    let goodFruit=0;
    let badFruit=0;
    for(let i=0;i<this.fruits.length;i++){
        if(this.fruits[i]==='good'){
          goodFruit+=1;
        }else badFruit+=1;

      this.harvested=`${this.fruits.length} (${goodFruit} good, ${badFruit} bad)`
    }
  }
}
class Apple {
  constructor(){
    this.random=let randomQuality= Math.floor((Math.random()*5));;
  }

  quality(){
    if(this.random%2===0)
    {
      return 'good'
    }else return 'bad'
  }
}


//  * driver code untuk release 1
   let appleTree = new AppleTree()
   do {
        appleTree.grow();
        appleTree.produceMangoes();
        appleTree.harvest();
        console.log(`[Year ${appleTree.getAge()} Report] Height = ${appleTree.getHeight()} | Fruits harvested = ${appleTree.harvested}`)

      } while (appleTree.getHealtyStatus() != false)


// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
