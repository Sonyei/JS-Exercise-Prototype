/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

const { prototype } = require("mocha");

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible) {
  if(this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};

//poop method

Person.prototype.poop = function() {
  this.stomach = [];
}

//toString method

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`; 
}

const personOne = new Person('William', 21);
const personTwo = new Person('Grady', 33);
const personThree = new Person('Cheree', 41);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
this.model = model;
this.milesPerGallon = milesPerGallon;
this.tank = 0;
this.odometer = 0;
}

//Fill method

Car.prototype.fill = function(gallons) {
 return this.tank += gallons;
}

//Drive method

Car.prototype.drive = function(distance){
  this.odometer += distance;
  if (this.odometer < this.milesPerGallon * this.tank) {
  this.tank -= (Math.floor(distance/this.milesPerGallon));
  }else{
    this.odometer = this.milesPerGallon * this.tank; 
    this.tank -= (Math.floor(distance / this.milesPerGallon));
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}







const carOne = new Car('Kia', 0);

carOne.fill(4);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/



function Baby(name, age, favoriteToy) {
Person.call(this, name, age);
this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);


//Play method

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}.`
}

const babyOne = new Baby('Sophia', '1', 'Rattle')

babyOne.play();

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1.  Window Binding: What happens when 'this' is not given any context. The exception is when using 'strict mode', in which case you will get undefined rather than a window binding.
  2.  Implicit Binding: Only applies to objects with methods. Look to the left of .this to find the binding.
  3. Explicit Binding: You are telling JS what 'this' refers to by which binding you use. Call is in IIFE and passes arguments 1 at a time; Apply is an IIFE and will pass arguments as an arry, and Bind is NOT an IIFE and thus returns a new function that can later be invoked.
  4. New Binding: 'this' points to the newly created object when using the new keyword.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}


