'use strict';
// default parameters
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // Es5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('lMH123', 2, 5);
// how passing arguments works values vs reference

const flight = 'LM234';
const Kama = {
    name: 'Kama Seleye-fubara',
    passport: 283893994,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'Lm2566';
    passenger.name = 'Mr.' + passenger.name;
    
    if (passenger.passport === 283893994) {
        alert('checked in');
    } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, Kama);
// console.log(flight);
// console.log(Kama);

// is the same as doing..
// const flightNum = flight;
// const passenger = Kama;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() + 10000000000);
};

newPassport(Kama);
checkIn(flight, Kama);


// first-class and higher- order function
// functions that accept order function as call back functions

const oneWord = function (str) {
  return str.replace(/ /g, '').tolowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original strings: ${str}`);
  console.log(`Transformed strings: ${fn(str)}`);
  
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);

// transformer('javascript is the best!', oneWord);

// js uses callbacks all the time
const high5 = function () {
  console.log('Welcome');
};
document.body.addEventListener('click', high5);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Kama');
greeterHey('Joseph');

greet('Hello')('Kama');

// arrow fn

// const greet1 = greeting1 => {
  //   return function (name1) {
    //     console.log(`${greeting1} ${name1}`);
    //   };
    // };
    // const greeterHey1 = greet1('hey');
    // greeterHey1('Kama');
    // greeterHey1('Joseph');
    
    const greet1 = greeting1 => name1 => console.log(`${greeting1} ${name1}`);
    
    greet1('Hi')('Kama');
    
    */

// the call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(237, 'Kama Seleye-Fubara');
lufthansa.book(2334, 'Anju Seleye-Fubara');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// Does not work
// book(23,'james)

// call Method
book.call(eurowings, 23, 'Kama fubara');
console.log(eurowings);

book.call(lufthansa, 23, 'Mary cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Joe punk');
console.log(swiss);

// Apply method
const flightData = [583, 'George Joy'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// binding method
// book.call(eurowings, 23, 'Kama fubara');
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(23, 'Kate');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Kama seleye-fubara');
bookEw23('James mounre');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
