'use strict';
// default parameters

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
