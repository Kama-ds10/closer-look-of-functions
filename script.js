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
// book(23,'james')

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
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: `What is your favourite programming language?`,
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // poll results are 13,2,4,1
      console.log(`Poll result are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'String');
