// primitive data type
let umur = 30; // typeof umur === 'number'
let nama = "syahiid"; // typeof nama === 'string'
// dst

// non primitive data types
/**
 * tipe data object itu (non primitive) itu adalah tipe data yang punya reference
 * (reference itu rujukan, merujukan pada)
 * di memory itu merujuk pada tempat yang berbeda
 * apa sih yang dimaksud reference? jadi itu reference itu bisa unik antara satu object dengan object walaupun bentuknya
 * CONTOH:
 * MISALNYA ORANG KEMBAR, APAKAH ORANG KEMBAR ITU SAMA?
 * PENAMPILANNYA YANG SAMA
 * TAPI MEREKA ADALAH DUA ORANG YANG BERBEDA
 */
let object = {}; // typeof object === 'object'
let array = []; // typeof array === 'object'

let kembar1 = {};
let kembar2 = {};

// di memory object kembar1 disimpan berbeda dengan object kembar2
// * BAYANGIN LAGI ANALOGI:
// * MISALNYA ORANG KEMBAR, APAKAH ORANG KEMBAR ITU SAMA?
// * PENAMPILANNYA YANG SAMA
// * TAPI MEREKA ADALAH DUA ORANG YANG BERBEDA
console.log("kembar1 === kembar2", kembar1 === kembar2);

// STRUKTUR DATA,
// adalah bagaimana data2 itu (yg punya banyak tipe) itu di organisasikan (disimpan dan diambil) secara efisien

// salah satu struktur data adalah array

const rakBukuContohArray = [
  "buku1 Sang Alkemis",
  "buku2 Harry Potter",
  "buku3 Laskar Pelangi",
];

console.log(
  "ada berapa buku? rakBukuContohArray.length",
  rakBukuContohArray.length
); // ada berapa buku? ada 3 buku

// disimpan
rakBukuContohArray.push("buku4");

// gimana cara ngambil datanya
const dataBuku3 = rakBukuContohArray[2];

console.log("dataBuku3", dataBuku3);

// struktur data object
const orangObject = {
  nama: "Febryan",
  umur: 27,
};

orangObject["nama"];
orangObject.nama;

orangObject.nama = "Febryan skibidi";
