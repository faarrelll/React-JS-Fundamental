// higher order function =
// function yang
// 1. menerima parameter function
// DAN ATAU
// 2. mengembalikan function

// menerima parameter function (sebuahFunction)
const hofExample = (sebuahFunction) => {
  const functionBaru = function () {
    console.log("Mulai");
    sebuahFunction("Callback Jalan");
    console.log("Selesai");
  };

  return functionBaru; // return function
};
console.log(console.log); // [Function: log]

hofExample(console.log); // === functionBaru
// hofExample(console.log); kan adalah JavaScript Expression
// yang menghasilkan (return) Function
// === functionBaru

hofExample(console.log)(); // functionBaru();

// atau ditampung terlebih dahulu
const functioBaruTampung = hofExample(console.log);
functioBaruTampung();
