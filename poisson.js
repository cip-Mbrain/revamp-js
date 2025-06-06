// function to compute factorial

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

const poissonPMF = (k, lambda) => {
  return Math.pow;
};

// example usage of the Poisson PMF function
const k = 10;

const lambda = 6;

console.log(
  `The Poisson probability mass function for k=${k} and lambda=${lambda} is: ${poissonPMF(
    k,
    lambda
  )}`
);
