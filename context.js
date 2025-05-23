/*Execution Context
When you run any Javascript, a special environment is created to handle the transformation and execution of code. This is called the execution context. it contains the currently running code and everything that aids in its  in execution 

There is a global execution context as well as a function execution context for every function invoked.

javascript is single threaded and asynchronous

Execution context phase

Memory Phase:
- Create global object (browser = windows, Node.js = global)
- Create the `this` object and bind it to the global object
- setup memory heap for storing variables and function references
- store function and variables in global execution context and set to "undefined"


Execution  Phase:
- Execute code line by line
- Create a new execution context for each function call

*/

const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
