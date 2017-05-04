"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.ages    = 0;
    this.heights = 0;
    this.fruits = 0;
    this.health = true;
  }

  getAge() {
    return this.ages;
  }

  getHeight() {
    return this.heights;
  }

  getFruits() {
    return this.fruits;
  }

  getHealtyStatus() {
    return this.health;ClassName
  }


  // Get current states here

  // Grow the tree
  grow() {
    this.ages++;
    if(this.heights < 4.8 && this.health === true){
      this.heights += forRandom();
    }
    if (this.ages === 20) {
      this.health = false;
    }

  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = [];
    let jumlah = Math.floor((Math.random() * 15));
    for(let i=0; i<jumlah; i++){
      let mango = new Mango();
      mango.isiKondisi();
      this.fruits.push(mango);
    }
      return this.fruits.length;
  }

  // Get some fruitsMath.floor()
  harvest() {
    let good = 0;
    let bad = 0;
    for(let i=0; i<this.fruits.length; i++){
      if(this.fruits[i]['kondisi'] === 'bad'){
        bad++;
      }else {
        good++;
      }
    }
    return `( ${good} good, ${bad} bad )`;
  }


}

function forRandom(){
  let number = Math.round((Math.random() * 4) + 1) / 10 ;
  return number;
}

class Mango {
  // Produce a mango
  constructor() {
    this.kondisi = '';
  }
  isiKondisi(){
    let arrKondisi = ['bad','good'];
    let random = Math.floor((Math.random() *2 ) + 1 ) -1;
    this.kondisi = arrKondisi[random];
  }

}


  // driver code untuk release 0
   let mangoTree = new MangoTree();
   mangoTree.grow();
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.ages} Report] Height = ${mangoTree.heights} | Fruits harvested = ${mangoTree.produceMangoes()} ${mangoTree.harvest()}`)
   } while (mangoTree.health != false)


// Release 1
// class AppleTree extends MangoTree {
//   constructor(){}
//
//  class Apple extends MangoTree{
//
//  }
// /

//
// // Release 3
// class TreeGrove {}
