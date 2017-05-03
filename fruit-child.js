const Fruit = require('./fruit');

class Mango extends Fruit{
  constructor(quality) {
    super(quality);
    this.name='mangga'
  }
}
class Apple extends Fruit{
  constructor(quality) {
    super(quality);
    this.name='apel'
  }
}
class Pear extends Fruit{
  constructor(quality) {
    super(quality);
    this.name='pir'
  }
}

module.exports = {
  Mango, Apple, Pear
};