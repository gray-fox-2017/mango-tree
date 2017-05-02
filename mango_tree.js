"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.tinggi = 0;
    this.maxHeight = 20;
    this.currentGoodFruit = 0;
    this.currentBadFruit = 0;
    this.harvestedFruit = 0;
    this.totalHarvestedFruit = 0;
    this.healthStatus = 150;
  }

  getAge() {
    return `Umur Pohon: ${this.age} Tahun`;
  }
  getHeight() {
    return `Tinggi Pohon: ${this.height} Meter`;
  }
  getFruits() {
    return `Jumlah buah yang sudah dipetik: ${this.harvestedFruit} Buah (${this.currentGoodFruit} good, ${this.currentBadFruit} bad)`;
  }
  get healthyStatus() {
    if (this.healthStatus > 0) {
      return true
    } else {
      return false
    }
  }

  grow() {
    this.age++;

    var tambahTinggi = Math.floor((Math.random()*10)/2);
    if ((this.tinggi + tambahTinggi) <= this.maxHeight) {
      this.tinggi+=tambahTinggi;
    } else {
      this.tinggi = this.maxHeight;
    }

  }

  // Produce some mangoes
  produceMangoes() {

    var faktor = Math.floor((this.tinggi+this.age)*this.healthStatus/100)
    for (let i=0; i<=faktor; i++) {
      var mangga = new Mango();
      if (mangga.grade === 'good') {
        this.currentGoodFruit++
      } else if (mangga.grade === 'bad') {
        this.currentBadFruit++
      }
    }
    this.harvestedFruit = this.currentBadFruit + this.currentGoodFruit;

    this.harvested = `${this.harvestedFruit} (${this.currentGoodFruit} Good ${this.currentBadFruit} Bad)`
    return faktor + 'buah';
  }

  // Get some fruits
  harvest() {
    this.totalHarvestedFruit+=this.harvestedFruit;
    var pengurangHealth = (1*this.currentGoodFruit)+(3*this.currentBadFruit);
    this.healthStatus -= pengurangHealth;
    this.currentBadFruit = 0;
    this.currentGoodFruit = 0;

  }

}

class Mango {
  // Produce a mango
  constructor() {
    var faktor = Math.floor(Math.random()*10);

    if (faktor % 2 === 0) {
      this.grade = 'good';
    } else {
      this.grade = 'bad';
    }
  }
}


   // driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.harvested}\nKesehatan Pohon: ${mangoTree.healthStatus}`)
  } while (mangoTree.healthyStatus !== false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}
