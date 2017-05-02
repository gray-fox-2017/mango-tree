"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0;
    this.tinggi = 0;
    this.maxHeight = 5;
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
    return `Tinggi Pohon: ${this.tinggi} Meter`;
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

    var tambahTinggi = Math.floor((Math.random()*10)/4);
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
  //  let mangoTree = new MangoTree()
  //  do {
  //    mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    mangoTree.harvest();
  //    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.tinggi} | Fruits harvested = ${mangoTree.harvested}\nKesehatan Pohon: ${mangoTree.healthStatus}`)
  // } while (mangoTree.healthyStatus !== false)


// Release 1
class AppleTree {
  constructor() {
    this.age = 0;
    this.tinggi = 0;
    this.maxHeight = 7;//ini juga beda lho
    this.currentGoodFruit = 0;
    this.currentBadFruit = 0;
    this.harvestedFruit = 0;
    this.totalHarvestedFruit = 0;
    this.healthStatus = 200;//ini juga beda lho
  }

  get Age() {
    return `Umur Pohon: ${this.age} Tahun`;
  }
  get Height() {
    return `Tinggi Pohon: ${this.tinggi} Meter`;
  }
  get Fruits() {
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

    var tambahTinggi = Math.floor((Math.random()*10)/4);
    if ((this.tinggi + tambahTinggi) <= this.maxHeight) {
      this.tinggi+=tambahTinggi;
    } else {
      this.tinggi = this.maxHeight;
    }

  }

  // Produce some mangoes
  produceApple() {

    var faktor = Math.floor((this.tinggi+this.age)*this.healthStatus/100)
    for (let i=0; i<=faktor; i++) {
      var apel = new Apple();
      if (apel.grade === 'good') {
        this.currentGoodFruit++
      } else if (apel.grade === 'bad') {
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
    var pengurangHealth = (1*this.currentGoodFruit)+(1*this.currentBadFruit);//nih beda lho
    this.healthStatus -= pengurangHealth;
    this.currentBadFruit = 0;
    this.currentGoodFruit = 0;

  }

}
class Apple {
  constructor() {
    var faktor = Math.floor(Math.random()*10);

    if (faktor % 2 === 0) {
      this.grade = 'good';
    } else {
      this.grade = 'bad';
    }
  }
}

let appleTree = new AppleTree();

// do {
//   appleTree.grow();
//   appleTree.produceApple();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.tinggi} | Fruits harvested = ${appleTree.harvested}\nKesehatan Pohon: ${appleTree.healthStatus}`)
// } while (appleTree.healthyStatus !== false)

// Release 2
class FruitTree {
  constructor(maxHeight, healthStatus, pengaliBadGrade) {
    this.age = 0;
    this.tinggi = 0;
    this.maxHeight = maxHeight;//ini juga beda lho
    this.currentGoodFruit = 0;
    this.currentBadFruit = 0;
    this.harvestedFruit = 0;
    this.totalHarvestedFruit = 0;
    this.healthStatus = healthStatus; //ini juga beda lho
    this.pengaliBadGrade = pengaliBadGrade //ini juga beda lho
  }

  get Age() {
    return `Umur Pohon: ${this.age} Tahun`;
  }
  get Height() {
    return `Tinggi Pohon: ${this.tinggi} Meter`;
  }
  get Fruits() {
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

    var tambahTinggi = Math.floor((Math.random()*10)/4);
    if ((this.tinggi + tambahTinggi) <= this.maxHeight) {
      this.tinggi+=tambahTinggi;
    } else {
      this.tinggi = this.maxHeight;
    }

  }

  // Produce some mangoes
  produceFruit() {

    var faktor = Math.floor((this.tinggi+this.age)*this.healthStatus/100)
    for (let i=0; i<=faktor; i++) {
      var fruit = new Fruit();
      if (fruit.grade === 'good') {
        this.currentGoodFruit++
      } else if (fruit.grade === 'bad') {
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
    var pengurangHealth = (1*this.currentGoodFruit)+(this.pengaliBadGrade*this.currentBadFruit);//nih beda lho
    this.healthStatus -= pengurangHealth;
    this.currentBadFruit = 0;
    this.currentGoodFruit = 0;

  }

}

class Fruit {
  constructor() {
    var faktor = Math.floor(Math.random()*10);

    if (faktor % 2 === 0) {
      this.grade = 'good';
    } else {
      this.grade = 'bad';
    }
  }
}

class pearTree extends FruitTree {
  constructor(healthStatus, maxHeight, pengaliBadGrade) {
    super(maxHeight, healthStatus, pengaliBadGrade);
    this.maxHeight = maxHeight;//ini juga beda lho
    this.healthStatus = healthStatus; //ini juga beda lho
    this.pengaliBadGrade = pengaliBadGrade
  }
}

let pear = new pearTree(200, 10, 2);
do {
  pear.grow();
  pear.produceFruit();
  pear.harvest();
  console.log(`[Year ${pear.age} Report] Height = ${pear.tinggi} | Fruits harvested = ${pear.harvested}\nKesehatan Pohon: ${pear.healthStatus}`)
} while (pear.healthyStatus !== false)

// Release 3
class TreeGrove {}
