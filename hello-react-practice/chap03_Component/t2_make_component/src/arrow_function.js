setTimeout(function() {
  console.log('hello world');
}, 1000);

setTimeout(() => {
  console.log('hello world2');
}, 2000);


// *
function BlackDog() {
  this.name = 'white';
  return {
    name: 'black',
    bark: function() {
      console.log(this.name + ' : bark bark!');
    }
  }
}
const blackDog = new BlackDog();
blackDog.bark();    // black : bark bark!


function WhiteDog() {
  this.name = 'white';
  return {
    name: 'black',
    bark: () => {
      console.log(this.name + ' : bark bark!');
    }
  }
}
const whiteDog = new WhiteDog();
whiteDog.bark();  //  white : bark bark!


// 
function twice(value) { return value * 2; }

const triple = (value) => value * 3;


// Tip) Reactjs Code Snippet
// 
// rsc : functional-Component
// rcc :      Class-Component