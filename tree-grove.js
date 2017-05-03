const MangoTree = require('./fruit-tree-child').MangoTree;
const AppleTree = require('./fruit-tree-child').AppleTree;
const PearTree = require('./fruit-tree-child').PearTree;

class TreeGrove {
  constructor(){
    this.garden = [];
  }
  inputTree(name,age){
    if(name==='manggo'){
      this.garden.push(new MangoTree(age))
    } else if (name==='apple') {
      this.garden.push(new AppleTree(age))
    } else if (name==='pear'){
      this.garden.push(new PearTree(age))
    } else {
      console.log('nama pohon yang dimasukkan salah');
    }
  }
  showAges(){
    let temp = []
    for(let i=0;i<this.garden.length;i++){
      temp.push(`${this.garden[i].treeName}: ${this.garden[i].age} years old`)
    }
    console.log(temp);
  }
  showTrees(){
    let temp = []
    for(let i=0;i<this.garden.length;i++){
      temp.push(this.garden[i].treeName)
    }
    console.log('My trees: '+temp.join());
  }
  matureTrees(){
    let temp = []
    for(let i=0;i<this.garden.length;i++){
      if(this.garden[i].age>=this.garden[i].minFertileAge){
        temp.push(this.garden[i].treeName)
      }
    }
    console.log('Mature trees: '+temp.join());
  }
  deadTrees(){
    let temp = []
    for(let i=0;i<this.garden.length;i++){
      if(this.garden[i].age>=this.garden[i].maxAge){
        temp.push(this.garden[i].treeName)
      }
    }
    console.log('Dead trees: '+temp.join());
  }
  nextYear(iteration=1){
    for(let j=0;j<iteration;j++){
      for(let i=0;i<this.garden.length;i++){
        this.garden[i].grow()
        this.garden[i].produce()
        //console.log(this.garden[i].fruitBasket)
      }
    }
  }
}

module.exports = TreeGrove;