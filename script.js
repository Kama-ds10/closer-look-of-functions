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

*/

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
