// IIFE (Immediately Invoked Function Expression)
(function () {
  const user = 'Annah tyler';
  console.log(user);
})();

(function () {
  const sayHello = 'Hellooooo everyone!!!!';
  console.log(sayHello);
})();

// IFFE
(function (name) {
  console.log(`Hello ${name}`);
})('james peter');
