// Before ES6
function Dog(name) {
  this.name = name;
}
Dog.prototype.say = function() {
  console.log(this.name + " : Wang Wang");
}
var dog = new Dog('Black Dog');
dog.say(); // Black Dog : Wang Wang


// Since ES6 ~
class Dog2 {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + " : Mong Mong");
  }
}
const dog2 = new Dog2('White Dog');
dog2.say(); // White Dog : Mong Mong