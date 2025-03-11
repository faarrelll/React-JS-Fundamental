/*
Pertanyaan:
"masih belajar tentang looping do-while & while,
tapi masih bingung terkait penerapan looping mas.
jadi ketiga itu biasanya akan digunakan untuk apa mas?
seberapa urgent/sering digunakan?"

Jawaban:
"Konsep Looping sangat sangat penting,
dan konsep selalu digunakan disetiap project javascript/typescript
Mau backend atau frontend 100% looping itu terpakai, dan sangat-sangat sering.
"
*/

// Philosophy dari looping
// Kenapa sih butuh looping?
// Untuk otomatisasi

console.log(
  "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
);
console.log(
  "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
);
console.log(
  "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
);
console.log(
  "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
);
console.log(
  "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
);

// bayangin gak ada feature copy and paste
// atau gak boleh misal dilarang
// (kisah nyata, jadi di hackerrank itu copy paste bisa terdeteksi
// dan diberikan peringatan)

// bayangin juga disuruh untuk console.log kalimat tersebut 100x tanpa boleh copy paste
// pasti mental kita kelelahan
// dan disitulah salah satu case dari sekian case looping bisa membantu

// syntax infinite loop
// for (;;) {
//   console.log(
//     "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
//   );
// }

// for (;;) {
//   console.log(
//     "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik"
//   );
//   break; // berhentiin looping
// }

// di bawah ini adalah blok kode
// {
//   const message =
//     "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik " +
//     "loopingKeSekian: " +
//     loopingKeSekian;
//   console.log(message);
//   loopingKeSekian = loopingKeSekian + 1;
// }
// looping adalah alat untuk menjalankan blok kode terus menerus

// let loopingKeSekian = 1;
// for (;;) {
//   const message =
//     "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik " +
//     "loopingKeSekian: " +
//     loopingKeSekian;
//   console.log(message);
//   loopingKeSekian = loopingKeSekian + 1;
// }

let loopingKeSekian = 1;
for (;;) {
  if (loopingKeSekian <= 3) {
    const message =
      "Saya berjanji akan berusaha membuat proses pembelajaran saya 10% lebih asik " +
      "loopingKeSekian: " +
      loopingKeSekian;
    console.log(message);
    loopingKeSekian = loopingKeSekian + 1;
  } else {
    break;
  }
}

for (
  let loopingKeSekian = 1;
  loopingKeSekian <= 3;
  loopingKeSekian = loopingKeSekian + 1
) {
  console.log("loopingKeSekian: " + loopingKeSekian);
}

// sugar syntax
