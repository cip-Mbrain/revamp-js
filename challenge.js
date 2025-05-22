// create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

// function expression
// const getCelsius = (Fahrenheit) => {
//   const celsius = Math.ceil(((Fahrenheit - 32) * 5) / 9);
//   return `The Temperature is ${celsius} \xB0C`;
// };

// console.log(getCelsius(150));

// arrow function
const getCelsius = (f) => Math.ceil(((f - 32) * 5) / 9);
console.log(`The temp is ${getCelsius(100)}\xB0C`);

// challenge 3

/*
create an arrow function call minMax() that takes in an array of numbers and returns an object with the minimum number in an array
*/
minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  // console.log(max);
  return {
    min: min,
    max: max,
  };
};

x = minMax([1, 2, 3, 4, 5, 10]);

// console.log(x);

// create an IFE (immediately invoked function expression) that takes in the length and width of a rectangle outputs it ot the console in a message as soon as the page loads

(function (name) {
  console.log(`hello ${name}`);
})('james peters');

(function (lengthOfRectangle, widthOfRectangle) {
  // return lengthOfRectangle * widthOfRectangle;
  console.log(lengthOfRectangle * widthOfRectangle);
})(4, 3);

// program modification.
((length, width) => {
  const area = length * width;
  const output = ` The area if a rectangle with a length of ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(20, 10);
