"use strict"
const TreeGrove = require('./tree-grove')
const MangoTree = require('./fruit-tree-child').MangoTree;
const AppleTree = require('./fruit-tree-child').AppleTree;
const PearTree = require('./fruit-tree-child').PearTree;

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produce();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Manggo harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('\n');
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produce();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Apple harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log('\n');
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produce();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Pear harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)


// let groove = new TreeGrove();
// groove.inputTree('mangga')
// groove.inputTree('apple')
// groove.inputTree('manggo',3)
// groove.inputTree('pear',7)
// console.log('\n');
// groove.showTrees()
// groove.showAges()
// groove.deadTrees()
// groove.matureTrees()
// groove.nextYear(5)
// console.log('\n');
// groove.showTrees()
// groove.showAges()
// groove.deadTrees()
// groove.matureTrees()
// groove.nextYear(10)
// console.log('\n');
// groove.showTrees()
// groove.showAges()
// groove.deadTrees()
// groove.matureTrees()
