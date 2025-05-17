function run() {
  console.log(window.innerHeight);
}

// run();

function add(num1, num2) {
  return num1 * num2;
}

const result = add(3, 4);

// console.log(result);

// console.log(add(10, 12));

function multiply() {
  // function scope
  const y = 10;
  console.log(y + 100);
}

// multiply();

// global scope
x = 100;

if (true) {
  // console.log(x);
  // block scope
  const y = 200;
  // console.log(y + x);
}

for (let i = 0; i <= 5; i++) {
  // console.log(i);
}

// nested scope
function first() {
  const z = 100;

  function second() {
    const y = 200;
    console.log(y + z);
  }
  second();
}

// first();

// function declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(20));

// function expression
const addPoundSign = function (value) {
  return '£' + value;
};
console.log(addPoundSign(200));

// arrow function
const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 5));

const yourName = () => {
  console.log("what's your name");
};

yourName();

const arrowFunction = () => {
  console.log('arrow function with javascript');
};

// arrowFunction();

const single = (b) => b + 3;
console.log(single(20));

const number = [1, 2, 3, 4, 5, 6];

number.forEach(function (index) {
  console.log(index);
});

// arrow function in a call back

number.forEach((n) => console.log(n));
