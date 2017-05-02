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
  constructor(namaPohon, maxHeight, healthStatus, pengaliBadGrade) {
    this.jenis = namaPohon;
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
  constructor(namaPohon, healthStatus, maxHeight, pengaliBadGrade) {
    super(namaPohon, maxHeight, healthStatus, pengaliBadGrade);
    this.jenis = namaPohon;
    this.maxHeight = maxHeight;//ini juga beda lho
    this.healthStatus = healthStatus; //ini juga beda lho
    this.pengaliBadGrade = pengaliBadGrade
  }
}

// let pear = new pearTree('Pohon Pear', 200, 10, 2);
// do {
//   pear.grow();
//   pear.produceFruit();
//   pear.harvest();
//   console.log(`[Year ${pear.age} Report] Nama pohon = ${pear.jenis} | Height = ${pear.tinggi} | Fruits harvested = ${pear.harvested}\nKesehatan Pohon: ${pear.healthStatus}`)
// } while (pear.healthyStatus !== false)

// Release 3
class TreeGrove {
  constructor() {
    this.listPohon = []
    this.listMati = []
  }

  inputTree(namaPohon, maxTinggiPohon, healthPohon, pengurangHealth) {
    var pohonBaru = new FruitTree(namaPohon, maxTinggiPohon, healthPohon, pengurangHealth);
    this.listPohon.push(pohonBaru);
  }

  show_ages() {
    var umur = this.listPohon.map(x=>x.jenis + ': ' + x.age + ' tahun');

    return umur.join('\n')
  }

  show_trees() {
    var daftarPohon = this.listPohon.map(x=>x.jenis);
    return daftarPohon.join(', ')
  }

  mature_trees() {
    var berbuah = []
    for (let i=0; i<this.listPohon.length;i++) {
      if (this.listPohon[i].harvestedFruit > 0) {
        berbuah.push(this.listPohon[i].jenis);
        berbuah.push(this.listPohon[i].harvested)
      }
    }

    return berbuah.join('\n')
  }

  dead_trees() {
    if (this.listMati.length <= 0) {
      return `Selamat saat ini belum ada pohon mu yang mati`
    } else {
      var mati = this.listMati.map(x=>x.jenis)
      return 'Pohon yang sudah mati: ' + mati.join(', ')
    }
  }

  nextYear() {
    this.listPohon.map(x=>x.grow())
    this.listPohon.map(x=>x.produceFruit())
    this.listPohon.map(x=>x.harvest())

    for (let i=0; i<this.listPohon.length; i++) {
      if (this.listPohon[i].healthStatus <= 0) {
        this.listMati.push(this.listPohon[i]);
        this.listPohon.splice(i,1);
      }
    }
  }
}

var groove = new TreeGrove();
groove.inputTree('Pohon Mangga', 15,200,2);
groove.inputTree('Pohon Kelapa', 35,400,1);
groove.nextYear()
groove.nextYear()
groove.inputTree('Pohon Pepaya', 10,150,1);
groove.nextYear()
console.log(groove.show_ages());
console.log(groove.show_trees());
console.log(groove.mature_trees());
console.log(groove.dead_trees());
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.inputTree('Pohon Jeruk', 3,150,3);
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
groove.nextYear()
console.log(groove.show_ages());
console.log(groove.show_trees());
console.log(groove.mature_trees());
console.log(groove.dead_trees());
