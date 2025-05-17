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
