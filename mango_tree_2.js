"use strict"

// Release 0
class FruitTree{
  constructor() {
    this.age = 0;
    this.height = 0;
    this.harvested = 0;
    this.healtyStatus = true;
    this.maxFruit = 30;
    this.minFruit = 3;
    this.maxAge = 17;
    this.maxGrowAge = 15;
    this.maxHarvetsAge = 19;
    this.minFertileAge = 2;
    this.fruitBox = [];
    this.thisMaxGrowthYear = 30;


  }

  getAge(){
    return this.age;
  }

  heighted() {
    return this.height;
  }

  getfruit() {
    console.log(this.fruitBox);
  }

  getHealtStatus(){
    if(this.healtyStatus == true){
      console.log(`the tree is alive :-)`);
    } else {
      console.log(`the tree has meet his end :-(`);
    }
  }

  randomGenerator(num){
    return Math.ceil(Math.random()*num)
  }

  grow() {
    this.age++;
    if (this.age < this.maxAge && this.age <= this.maxGrowAge) {
      this.height += this.randomGenerator(this.thisMaxGrowthYear);
      return this.height;
    } else {
      this.healtyStatus = false;
    }
  }

  produce(){
    this.fruitBox =[]
    if (this.age >= this.minFertileAge && this.age <= this.maxHarvetsAge) {
      let harvest = this.randomGenerator(this.maxFruit);
      for (var i = 0; i < harvest; i++) {
        if (this.treeName === 'TreeOfMango') {
          if (this.randomGenerator(this.minFruit) < 1.8) {
            this.fruitBox.push(new Mango('good'));
          } else {
            this.fruitBox.push(new Mango('bad'));
          }
        } else if (this.treeName === 'TreeOfApple') {
          if (this.randomGenerator(this.minFruit) < 1.8) {
            this.fruitBox.push(new Mango('good'));
          } else {
            this.fruitBox.push(new Mango('bad'));
          }
        } else if (this.treeName === 'TreeOfPeer') {
          if (this.randomGenerator(this.minFruit) < 1.8) {
            this.fruitBox.push(new Mango('good'));
          } else {
            this.fruitBox.push(new Mango('bad'));
          }
        }
      }
    }
  }

  harvest() {
    let objHarvestFruit = {total : 0, good : 0, bad : 0};
    if (this.age >= this.minFertileAge && this.age <= this.maxHarvetsAge) {
      for (var i = 0; i < this.fruitBox.length; i++) {
        let harvestQualityGood = this.fruitBox[i].quality === 'good' ?
        objHarvestFruit.good++ : objHarvestFruit.bad++ ;
        let harvestQualityBad = this.fruitBox[i].quality === 'bad' ?
        objHarvestFruit.bad++ : objHarvestFruit.good++ ;
        // let harvestTotal = this.fruitBox[i].quality === 'good' || 'bad' ?
        // objHarvestFruit.total++;
      }
    }
    this.harvested = `(${objHarvestFruit.good} good + ${objHarvestFruit.bad} bad) = ${objHarvestFruit.good+objHarvestFruit.bad} `
    return this.harvested;
    // this.harvested = `${objHarvestFruit.good} good + ${objHarvestFruit.bad} bad) = ${objHarvestFruit.good+objHarvestFruit.bad}`
  }
}

class MangoTree extends FruitTree{
  constructor(age , height){
    super()
    this.age = age || 0;
    this.height = height || 0;
    this.maxFruit = 60 ;
    this.maxAge = 25;
    this.maxGrowAge = 7;
    this.maxHarvetsAge = 18;
    this.minFertileAge = 4;
    this.treeName = 'TreeOfMango'
  }
}

class AppleTree extends FruitTree{
  constructor(age , height){
    super()
    this.age = age || 0;
    this.height = height || 0;
    this.maxFruit = 50 ;
    this.maxAge = 18;
    this.maxGrowAge = 7;
    this.maxHarvetsAge = 18;
    this.minFertileAge = 4;
    this.treeName = 'TreeOfApple'
  }
}

class PeerTree extends FruitTree{
  constructor(age , height){
    super()
    this.age = age || 0;
    this.height = height || 0;
    this.maxFruit = 40 ;
    this.maxAge = 25;
    this.maxGrowAge = 11;
    this.maxHarvetsAge = 18;
    this.minFertileAge = 3;
    this.treeName = 'TreeOfPeer'
  }
}

class Fruit {
  constructor(quality) {

  }
}

class Mango extends Fruit{
  constructor(quality) {
    super(quality)
    this.quality = quality;

  }
}

class Apple extends Fruit{
  constructor(quality) {
    super(quality)
    this.quality = quality;

  }
}

class Peer extends Fruit{
  constructor(quality) {
    super(quality)
    this.quality = quality;

  }
}

class TreeGrove {
  constructor(){
    this.trees = []
  }

  inputTree(name, age) {
    if (name.toLowerCase() == 'mango') {
      this.trees.push(new MangoTree(age))
    } else if (name.toLowerCase() == 'apple') {
      this.trees.push(new AppleTree(age))
    } else if (name.toLowerCase() == 'peer') {
      this.trees.push(new PeerTree(age))
    } else {
      console.log(`ada tiga pohon di kebun ini\n 1. mango,\n 2. apple, \n 3. peer`);
    }
  }

  showAges(){
    let arr = [];
    for (var i = 0; i < this.trees.length; i++) {
      arr.push(`${this.trees[i].treeName} : ${this.trees[i].age} years old`)
    }
    console.log(arr);
  }

  showTrees() {
    let arr = [];
    for (var i = 0; i < this.trees.length; i++) {
        arr.push(this.trees[i].treeName);
      }
    console.log('Tree in the garden : '+ arr.join());
  }

  matureTrees() {
    let arr = [];
    for (var i = 0; i < this.trees.length; i++) {
      if(this.trees[i].age >= this.trees[i].minFertileAge) {
        arr.push(this.trees[i].treeName);
      }
    }
    console.log('Mature trees are : '+arr.join());
  }

  deadTrees() {
    let arr = [];
    for (var i = 0; i < this.trees.length; i++) {
      if(this.trees[i].age >= this.trees[i].maxAge){
        arr.push(this.trees[i].treeName)
      }
    }
    console.log('Dead Tree :' + arr.join());
  }

  nextYear(interval=1) {
    for(let j = 0; j<interval; j++){
      for (let i = 0; i < this.trees.length; i++) {
        this.trees[i].grow();
        this.trees[i].produce();
      }
    }
  }
}



let mango = new MangoTree()
let apple = new AppleTree()
let peer = new PeerTree()



  mango.getHealtStatus();
do {
  mango.grow();
  mango.produce();
  console.log(`[Year ${mango.getAge()} Report] Height = ${mango.heighted()} | Fruit Harvested = ${mango.harvest()}`)

} while (mango.healtyStatus != false)
  mango.getHealtStatus();
// do {
//   apple.grow();
//   apple.produce();
//   console.log(`[Year ${apple.getAge()} Report] Height = ${apple.heighted()} | Fruit Harvested = ${apple.harvest()}`)
//
// } while (apple.healtyStatus != false)
//   apple.getHealtStatus();
// do {
//   peer.grow();
//   peer.produce();
//   console.log(`[Year ${peer.getAge()} Report] Height = ${peer.heighted()} | Fruit Harvested = ${peer.harvest()}`)
//
// } while (peer.healtyStatus != false)
//   peer.getHealtStatus();


let groove = new TreeGrove();
groove.inputTree('mangga')
groove.inputTree('apple')
groove.inputTree('mango',3)
groove.inputTree('peer',7)
console.log('\n');
groove.showTrees()
groove.showAges()
groove.deadTrees()
groove.matureTrees()
groove.nextYear(5)
console.log('\n');
groove.showTrees()
groove.showAges()
groove.deadTrees()
groove.matureTrees()
groove.nextYear(10)
console.log('\n');
groove.showTrees()
groove.showAges()
groove.deadTrees()
groove.matureTrees()
