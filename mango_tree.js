"use strict"

class FruitTree {
  constructor(name,age,height,healthyStatus){

    this.name = name;
    this.age = age;
    this.height = height;
    this.healthyStatus = healthyStatus;
    this.fruits =[];
  }

  grow(){
    let randomHeight= Math.floor((Math.random()*2));
    let listTrees = {
      MangoTree: {maxHeight: 3, age: 10},
      AppleTree: {maxHeight: 5, age: 15},
      PearTree:  {maxHeight: 7, age: 20},
    }

    let tree = listTrees[this.name]
      let maxHeight=tree.maxHeight
      this.age+=1;

      if(maxHeight!==this.height){
        this.height+=randomHeight;
      }else {this.height=this.height;}

      if(this.age===tree.age){
        this.healthyStatus=false;
      }
  }//end of grow

}

class Fruit {
  constructor(){
    this.random=Math.floor((Math.random()*100));;
  }

  quality(){
    if(this.random%2===0)
    {
      return 'good'
    }else return 'bad'
  }
}

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(name,age,height,healthyStatus) {
    super(name,age,height,healthyStatus);
    this.fruits=[];
    this.age=age;

  }

  produceMangoes() {
    if(this.age>5){
        let random= Math.floor((Math.random()*10));
        let mango = new Mango();
        for(let i=0;i<random;i++){

        this.fruits.push(mango.quality())
      }
      return true;
    }
  }

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

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super();
  }

}


// Release 1
class AppleTree extends FruitTree {

  // Initialize a new AppleTree
  constructor(name,age,height,healthyStatus) {
    super(name,age,height,healthyStatus);
    this.fruits=[];
    this.age=age;
  }

  produceApples() {
    if(this.age>10){
        let random= Math.floor((Math.random()*10));
        let apple = new Apple();
        for(let i=0;i<random;i++){

        this.fruits.push(apple.quality())
      }
    }
    return true;
  }

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

//apple fruit
class Apple extends Fruit {
  constructor(){
    super()
  }

}

//  * driver code untuk release 1
// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.getAge()} Report] Height = ${appleTree.getHeight()} | Fruits harvested = ${appleTree.harvested}`)
//
// } while (appleTree.getHealtyStatus() != false)



class PearTree extends FruitTree {

  // Initialize a new AppleTree
  constructor(name,age,height,healthyStatus) {
    super(name,age,height,healthyStatus)
    this.age=age;
  }

  producePears() {
    if(this.age>8){
        let random= Math.floor((Math.random()*10));
        let pear = new Pear();
        for(let i=0;i<random;i++){

        this.fruits.push(pear.quality())
      }
    }
    return true;
  }

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

//pear fruit
class Pear extends Fruit {
  constructor(){
    super()
  }

}

class TreeGrove {
  constructor(){
    this.trees=[];
  }

  inputTree(name,age,height,healthyStatus){
    if(name==='MangoTree'){
      let mangoTree = new MangoTree(name,age,height,healthyStatus)
      this.trees.push(mangoTree);
    }
    else if(name==='AppleTree'){
      let appleTree = new AppleTree(name,age,height,healthyStatus)
      this.trees.push(appleTree)
    }
    else if(name==='PearTree'){
      let pearTree = new PearTree(name,age,height,healthyStatus)
      this.trees.push(pearTree)
    }
  }

  nextYear(){
    for(let i=0; i<this.trees.length; i++)
      this.trees[i].grow();
  }

  showAge(){
    for(let i=0; i<this.trees.length; i++)
      console.log(`${i+1}.${this.trees[i].name}: ${this.trees[i].age} Years`);
  }

  showTrees(){
    for(let i=0; i<this.trees.length; i++)
      console.log(`${i+1}.${this.trees[i].name}`);
  }

  mature_trees(){
    let no=1;
    for(let i=0; i<this.trees.length; i++){
      if(this.trees[i].name==="MangoTree" && this.trees[i].produceMangoes() && this.trees[i].healthyStatus){
        console.log(`${no}.${this.trees[i].name}`);
        no++
      }else if(this.trees[i].name==="AppleTree" && this.trees[i].produceApples() && this.trees[i].healthyStatus){
        console.log(`${no}.${this.trees[i].name}`);
        no++
      }else if(this.trees[i].name==="PearTree" && this.trees[i].producePears() && this.trees[i].healthyStatus){
        console.log(`${no}.${this.trees[i].name}`);
        no++
      }

    }
  }

  dead_trees(){
    for(let i=0; i<this.trees.length; i++)
      if(this.trees[i].healthyStatus===false)
        console.log(`${i+1}.${this.trees[i].name}`);
  }

}

var grove = new TreeGrove()

grove.inputTree("MangoTree",3,1.8,7,true)
grove.inputTree("MangoTree",5,2.4,12,true)
grove.inputTree("AppleTree",4,1.2,5,true)
grove.inputTree("PearTree",7,2,15,true)

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
console.log('\n');
console.log("Ages:")
grove.showAge()
console.log('\n');
console.log("All Trees :")
grove.showTrees()
console.log('\n');
console.log("Mature Trees :")
grove.mature_trees();
console.log('\n');
console.log("Dead Trees :")
grove.dead_trees();
