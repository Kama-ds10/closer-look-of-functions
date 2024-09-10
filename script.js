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
*/
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
