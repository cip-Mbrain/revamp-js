/*
Create a function called calculator that takes three parameters num1, num2, and operator. The operator can be +, -, *, /. The function should return the result of the calculation. if anything other than the four operators is passed in, the function should return an error message.
*/

const calculator = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
};

console.log(calculator(2, 3, '+'));
