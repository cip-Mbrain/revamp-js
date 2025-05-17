// create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

const getCelsius = (Fahrenheit) => {
  // const convert = ((Fahrenheit - 32) * 5) / 9;
  // console.log(((Fahrenheit - 32) * 5) / 9);
  const result = Math.ceil(((Fahrenheit - 32) * 5) / 9);
  console.log(`The Temperature is ${result} \xB0C`);
};

getCelsius(150);
