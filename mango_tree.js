"use strict"
// Release 2
class FruitTree {
  //height, ageStop, ageBuah, jumlahBuah, jenis buah

  constructor(datas) {
    this._fruit_grow = [];
    this._height = datas.height;
    this._fruits = datas.fruits;
    this._totFruit = 0;
    this._age = datas.age;
    this._healthy_status = datas.healthy_status;
    this._die_age = datas.die_age;
    this._harvest_age = datas.harvest_age;
    this._jenis = datas.jenis;
    this._tree_harvested = '';
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get healty_status() {
    return (this._healthy_status === 0 ? false : true);
  }

  grow() {
    this._age += 1;
    let growth= Math.floor(Math.random()*2)+1;
    if (this._age >= this._die_age) {
      this._healthy_status = 0;
    } else if(this._age >= Math.floor(this.die_age/2)) {
    // this._height = Math.floor(this._height * 0.85);
    } else {
      this._height = Math.floor(this._height * growth);
    }

    if (this._age >= this._harvest_age && this._age < this._die_age) this.produceFruit();
  }

  produceFruit() {
    this._totFruit += (this.age >= this._harvest_age && this.age < this._die_age ? this._fruits.getTotalFruit(this._age) : 0);
  }

  harvest() {
    let bbaik = 0;
    let bburuk = 0;
    for (let i = 0; i < this._totFruit; i++) {
      let qlt = Math.floor(Math.random()*2)+0;
      if (qlt === 0) bburuk += 1;
      else if (qlt === 1 )bbaik +=1;
    }
    this._tree_harvested = ` ${this._totFruit} (${bbaik} good and ${bburuk} bad)`;
    this._totFruit = 0;
  }




}
class Fruit {
  //diameter, min, max, total
  constructor(datas) {
    this.diameter = datas.diameter;
    this.min = datas.min;
    this.max = datas.max;
  }

  getTotalFruit(age=0) {
    return Math.floor((Math.floor(Math.random() * this.max) + this.min) * (age/10)+1);
  }
}

// release 0

class MangoTree extends FruitTree{
  constructor(age = 0,height = (Math.floor(Math.random() * 3000) + 10) ) {
    super({
      height : height,
      fruits : new Mango({diameter:30,min:20,max:1000}),
      age : age,
      healthy_status : 1,
      die_age : 15,
      harvest_age: 2,
      jenis : 'mangga'
    });

  }



}

class Mango extends Fruit{
  // Produce a mango
  constructor(datas) {
    super(datas);
  }
}

/**
   driver code untuk release 0
**/
  let mangoTree = new MangoTree();

  console.log('The tree is alive');
   do {
     mangoTree.grow();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree._tree_harvested}`);

   } while (mangoTree.healty_status === true)
   console.log('The tree has met its end');

// Release 1
class AppleTree extends FruitTree{
  constructor(age = 0, height = Math.floor(Math.random() * 1500) + 10) {
    super({
      height : height,
      fruits : new Apple({diameter:15,min:5,max:250}),
      age : age,
      healthy_status : 1,
      die_age : 10,
      harvest_age: 1,
      jenis : 'apel'
    });
  }

}
class Apple extends Fruit{
  constructor(datas) {
    super(datas);
  }
}

let appleTree = new AppleTree();
console.log('\nThe tree is alive');
 do {
   appleTree.grow();
   appleTree.harvest();
   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree._tree_harvested}`);
 } while (appleTree.healty_status === true)

 console.log('The tree has met its end');

// Release 3
class TreeGrove {
  constructor() {
    this.trees = [];
  }
  inputTree(jenis,age,height) {
    let tree;
    switch (jenis) {
      case 'mangga' : tree = new MangoTree(age,height);break;
      case 'apel' : tree = new AppleTree(age,height);break;
      case 'pear' : tree = new PearTree(age,height);break;
    }
    this.trees.push(tree);
  }
  showAges() {
    return this.trees.map((x)=> `${x.age} tahun`).join('\n');
  }
  //semua tree
  showTrees() {
    return this.trees.map((x) => `pohon ${x._jenis}: height ${x.height}, umur ${x.age}, die_age ${x._die_age}, mature_age ${x._harvest_age}, diameter buah ${x._fruits.diameter}`).join('\n');
  }
  //lagi buah
  matureTrees() {
    return this.trees.filter((x) => x.age < x._die_age && x.age >= x._harvest_age ).map((x) => `pohon ${x._jenis} mature: height ${x.height}, umur ${x.age} diameter buah ${x._fruits.diameter}` ).join('\n');
  }
  deadTrees() {
    return this.trees.filter((x) => x.age >= x._die_age ).map((x) => `pohon ${x._jenis} mati: height ${x.height}, umur ${x.age}, diameter buah ${x._fruits.diameter}` ).join('\n');
  }
  youngTrees() {
    return this.trees.filter((x) => x.age < x._harvest_age).map((x) => `pohon ${x._jenis} muda: height ${x.height}, umur ${x.age} diameter buah ${x._fruits.diameter}` ).join('\n');

  }

}

class PearTree extends FruitTree{
  constructor(age = 0, height = Math.floor(Math.random() * 500) + 10) {
    super({
      height : height,
      fruits : new Pear({diameter:15,min:5,max:250}),
      age : age,
      healthy_status : 1,
      die_age : 12,
      harvest_age: 1,
      jenis : 'pear'
    });
  }

}
class Pear extends Fruit{
  constructor(datas) {
    super(datas);
  }
}

let treeg = new TreeGrove();
treeg.inputTree('mangga',15,3005); //mati
treeg.inputTree('mangga',1); //belum buah
treeg.inputTree('mangga',2); //mature
treeg.inputTree('apel',5); //mature
treeg.inputTree('apel',11); //mati
treeg.inputTree('apel',9); //mature
treeg.inputTree('mangga',0); //belum buah
treeg.inputTree('apel',0); //belum buah
treeg.inputTree('pear',0); //belum buah
treeg.inputTree('pear',10); //belum buah

console.log('semua umur');
console.log(treeg.showAges());
console.log('semua pohon');
console.log(treeg.showTrees());
console.log('pohon mature');
console.log(treeg.matureTrees());
//mangga 2
//apel 5
//apel 9
console.log('pohon muda');
console.log(treeg.youngTrees());
//mangga 1
//mangga 0
//apel 0
console.log('pohon mati');
console.log(treeg.deadTrees());
//mangga 15
//apel 11
