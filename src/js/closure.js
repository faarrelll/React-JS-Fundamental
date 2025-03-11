// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// perbedaan yang di highlight antara closure dan higher order function itu
// variable disekitarnya didapatkan dan diteruskan

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
// closure itu lebih kaya jadi 5 nya itu kebawa ke add5
// add5 = function (y) {
//     return 5 + y;
// };

console.log(add5(10));
