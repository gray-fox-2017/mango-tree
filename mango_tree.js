"use strict"

class FruitTree {
  constructor(tree,age,height,fruits,healthystatus){
    this._tree = tree || ""
    this._Age = age || 0
    this._Height = height || 0
    this._Fruitslength = fruits || 0
    this._HealthyStatus = healthystatus || true
  }

  getAge(){
    return this._Age
  }

  getHeight(){
    return this._Height
  }

  getFruits(){
    return this._Fruitslength
  }

  getHealthyStatus(){
    return this._HealthyStatus
  }

}
class Fruit {
  constructor(){
    this.quality()
  }
  
  quality(){
    let random = Math.floor(Math.random()*2)
    if(random === 0){
      return 'good'
    }
    else{
      return 'bad'
    }
  }
}


class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor(tree,age,height,fruits,healthystatus) {
    super(tree,age,height,fruits,healthystatus)

    this._maxAge = 20
    this._maxFruits = 20
    this._maxFruitsProduced = 4
    this._maxHeightCanGrow = 10
    this._HeightGrowth = 2
    this._fruit = []
    this._harvested = 0
  }

  getAge() {
    super.getAge()
  }

  getHeight() {
    super.getHeight()
  }

  getFruits() {
    super.getFruits()
  }

  getHealtyStatus() {
    super.getHealtyStatus()
  }


  // Get current states here

  // Grow the tree
  grow() {
      this.produceMangoes()
      this._Age += 1
      if (this._Height <= this._maxHeightCanGrow){
        this._Height += Math.floor(Math.random()*this._HeightGrowth)
      }
      if(this._Age >= this._maxAge){
        this._HealthyStatus = false
      }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._Age <= this._maxAge && this._fruit.length <= this._maxFruits){
      for(let i = 0; i < Math.floor(Math.random()*this._maxFruitsProduced)+4; i++){
        let newMango = new Mango
        this._fruit.push(newMango.quality())
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruit.length; i++){
      if(this._fruit[i] === 'good'){
        good += 1
      }
      else{
        bad += 1
      }
      this._harvested = `Fruits Harvested: ${this._fruit.length} (good: ${good} bad: ${bad})`


    }
    this._fruit = []
    return this._harvested
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super ()
  }
}

   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree._Age} Report] Height = ${mangoTree._Height} | Fruits harvested = ${mangoTree._harvested}`)
   } while (mangoTree._HealthyStatus != false)
  

// Release 1
class AppleTree extends FruitTree{
  constructor(tree,age,height,fruits,healthystatus){
    super(tree,age,height,fruits,healthystatus)
      this._maxAge = 15
      this._maxFruits = 15
      this._maxFruitsProduced = 5
      this._maxHeightCanGrow = 20
      this._HeightGrowth = 4
      this._fruit = []
      this._harvested = 0
  }

  getAge(){
    super.getAge()
  }

  getHeight(){
    super.getHeight()
  }

  getFruits(){
    super.getFruits()
  }

  getHealthyStatus(){
    super.getHealthyStatus()
  }

  grow(){
    this.produceApple()
    this._Age += 1
    if(this._Height <= this._maxHeightCanGrow){
      this._Height += Math.floor(Math.random()*this._HeightGrowth)
    }
    if(this._Age >= this._maxAge){
      this._HealthyStatus = false
    }
  }

  produceApple(){
    if(this._Age <= this._maxAge && this._Fruitslength <= this._maxFruitsProduced){
      for(let i = 0; i < Math.floor(Math.random()*this._maxFruitsProduced)+5;i++){
        let newApple = new Apple
        this._fruit.push(newApple)
      }
    }
  }
  
  harvest(){
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruit.length; i++){
      if(this._fruit[i]._quality == 'good'){
        good += 1
      }
      else{
        bad += 1
      }      
    }
    this._harvested = `Fruits Harvested: ${this._fruit.length} (good: ${good} bad: ${bad})`
    this._fruit = []
    return this._harvested
  }


}
class Apple extends Fruit {
  constructor(){
    super()
  }
}

class PearTree extends FruitTree{
  constructor(tree,age,height,fruits,healthystatus){
    super(tree,age,height,fruits,healthystatus)

    this._maxAge = 30
    this._maxFruits = 25
    this._maxFruitsProduced = 3
    this._maxHeightCanGrow = 40
    this._HeightGrowth = 5
    this._fruit = []
    this._harvested = 0
  }

  getAge(){
    super.getAge()
  }

  getHeight(){
    super.getHeight()
  }

  getFruits(){
    super.getFruits()
  }

  getHealthyStatus(){
    super.getHealthyStatus()
  }

  grow(){
    this.producePear()
    this._Age += 1
    if(this._Height <= this._maxHeightCanGrow){
      this._Height += Math.floor(Math.random()*this._HeightGrowth)
    }
    if(this._Age >= this._maxAge){
      this._HealthyStatus = false
    }
  }

  producePear(){
    if(this._Age <= this._maxAge && this._Fruitslength <= this._maxFruits){
      for(let i = 0; i < Math.floor(Math.random()*this._maxFruitsProduced)+3;i++){
        let newPear = new Pear
        this._fruit.push(newPear)
      }
    }
  }

  harvest(){
    let good = 0
    let bad = 0
    for(let i = 0; i < this._fruit.length; i++){
      if(this._fruit[i]._quality === 'good'){
        good += 1
      }
      else{
        bad+= 1
      }
    }
    this._harvested = `Fruits Harvested: ${this._fruit.length} (good: ${good} bad: ${bad})`
    this._fruit = []
    return this._harvested
  }
  

}

class Pear extends Fruit{
  constructor(){
    super()
  }
}

// Release 2

// Release 3
class TreeGrove {
  constructor(){
    this.trees = []
  }
  
  inputTree(tree,age,height,fruits,healthystatus){
    if(tree.toLowerCase() == 'mangotree'){
      let newMangoTree = new MangoTree(tree,age,height,fruits,healthystatus)
      this.trees.push(newMangoTree)
    }
    if(tree.toLowerCase() == 'peartree'){
      let newPearTree = new PearTree(tree,age,height,fruits,healthystatus)
      this.trees.push(newPearTree)
    }
    if(tree.toLowerCase() == 'appletree'){
      let newAppleTree = new AppleTree(tree,age,height,fruits,healthystatus)
      this.trees.push(newAppleTree)
    }
  }
  
  nextYear(){
    for(let i =0; i <this.trees.length;i++){
      this.trees[i].grow()
    }
  }
  
  showAge(){
    for(let i = 0; i < this.trees.length; i++){
      console.log(`${this.trees[i]._tree} Age: ${this.trees[i]._Age} years old`)
    }
  }
  
  showTrees(){
    for(let i = 0; i < this.trees.length; i++){
      console.log(`${this.trees[i]._tree}`)
    }
  }
  
  mature_trees(){
    for(let i = 0; i < this.trees.length;i++){
      if(this.trees[i]._fruit < this.trees[i]._maxFruits){
        console.log(this.trees[i]._tree + ' still fruitfull' )
      }
      else{
        console.log(`${this.trees[i]._tree} is not fruitfull anymore`);
      }
    }  
  }
  
  dead_trees(){
    for(let i = 0; i < this.trees.length; i++){
      if(this.trees[i]._Age >= this.trees[i]._maxAge){
        console.log(`Dead tree: ${this.trees[i]._tree}`)
      }
      else {
        console.log(`${this.trees[i]._tree} still alive`)
      }
    }
  
  }
}

var grove = new TreeGrove()
grove.inputTree('MangoTree',3,1.8,7,true)
grove.inputTree('MangoTree',5,2.4,12,true)
grove.inputTree('AppleTree',4,1.2,5,true)
grove.inputTree('PearTree',7,2,15,true)


grove.nextYear()

grove.showAge()

grove.showTrees()

grove.mature_trees()

grove.dead_trees()

grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

grove.dead_trees()


// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// 
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// 
// grove.dead_trees()