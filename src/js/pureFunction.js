// 1. konsisten antara input dan output
const add = (angka1, angka2) => {
  return angka1 + angka2;
};

console.log(add(3, 5));
console.log(add(3, 5));
console.log(add(3, 5));
console.log(add(3, 5));
console.log(add(3, 5));

// 2. tidak meninggalkan efek samping (side effect) artinya tidak mengubah nilai diluar function

let someNumber = 2;
const someList = [];

// contoh BUKAN PURE FUNCTION
function funcWithSideEffect() {
  someNumber = someNumber + 1;
  someList.push(someNumber);
}

console.log({ someNumber, someList });

funcWithSideEffect();
console.log({ someNumber, someList });

funcWithSideEffect();
console.log({ someNumber, someList });

funcWithSideEffect();
console.log({ someNumber, someList });

funcWithSideEffect();
console.log({ someNumber, someList });

// Pure function itu
// 1 jika function dipanggil dengan argumen/parameter2 yang sama, hasilnya akan selalu sama
// 2 tidak meninggalkan efek samping (side effect)
