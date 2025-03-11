# Unit Testing

unit testing adalah praktik dalam software dev (pengembangan perangkat lunak) dimana bagian terkecil dari kode, biasa disebut dengan "unit"
misal:
Function
Method
Class
Module
Component

unit teserbut di uji secara terisolir, secara independent dari unit lain (jadi si unit itu aja khusus diuji, dengan sebisa mungkin tanpa dependent dengan yang lain).

Tujuan utama unit testing adalah memastikan bahwa setiap bagian kode berfungsi dengan benar sesuai dengan requirement atau spesifikasi yang diharapkan

# Mengapa Unit Testing itu Penting?

1. **Deteksi Bug Lebih Awal**: Dengan unit testing, kita bisa menemukan dan memperbaiki bug pada tahap awal pengembahan, sebelum bug menyebar ke bagian lain dari aplikasi (maksudnya function sudah dipakai dibanyak tempat, dan sudah sangat terikat)
2. **Mempercepat Development**: Meski keliatan counter intuitive karena buat unit testing itu perlu waktu lebih, tapi
   unit testing bisa mempercepat proses development malah secara keseluruhan karena mengurangi Bug2 yang muncul, yang
   harus kita inspect dan debugging sumber bug atau errornya dimana. Tasknya gak bolak balik dari QA ke Dev dan di Dev sendiri misal ada Code Review. Kalau bug free dari awal maka development sekaligus testing itu akan lebih smooth.
   Karena Definition of Done (DoD) itu ketika featurenya sudah dibuat dan ditest oleh QA.
3. **Refactoring yang Aman**: Jadi semisalnya kalian itu ubah logic atau implementasi kodingannya, itu akan lebih aman dengan adanya Unit Test.
   kenapa gitu?
   misal kita udah bikin unit test untuk beberapa skenario
   kalau inputnya A maka outputnya B
   kalau inputnya C maka outputnya D
   nah kalau functionnya kita ubah, kita tinggal jalanin aja unit testingnya, sesuai gak input dan outputnya
   Karena kadang ketika kita Fix untuk nyelesaikan bug ABC bisa jadi kita malah membuat bug baru DFE
   nah ketauan apakah benar untuk semua skenario atau hanya bug yang berusaha di fix aja
4. **Design kode yang lebih baik**: Menulis unit test mendorong kita sebagai developer untuk membuat kode yang lolos di beberapa skenario dan karena unit testing itu ngetestnya itu independent, nah jadi kepaksa bikin kode yang modular, loosely coupled (bisa independent), misal pure function
5. **Dokumentasi kode yang lebih baik**: Developer lain bisa lihat unit testingnya, untuk mengetahui function ini tuh buat apa sih misal

# Test Driven Development (TDD)

Simpelnya: Sebelum dev itu bikin testnya dulu, atau pikirin skenario testingnya dulu

misal bikin function, biasa dev itu kan langsung bikin kodenya misal
const getName = (object) => obj.name;

nah kalau TDD itu dibalik, dipikirin dulu skenario testing dan lebih ininya dibikin unit testingnya, baru bikin kodenya

nah di TDD dipikirin dulu, gimana semisal ada yang input undefined sebagai argument/parameternya?
apa yang kita harapkan ketika hal tersebut terjadi? biarin error kah? atau return string ""
udah kebayang skenario2nya
udah dibikin unit testnya
akhirnya baru bikin function yang tahan terhadap bug
const getNameTdd = (object) => (object || {}).name || "";

# Pengenalan Unit Testing dengan Jest

## Apa itu Jest?

Jest adalah salah satu framework testing JavaScript.
Jest enak, dev experience (pengalaman ngebuat unit testingnya) itu enak, karena ada fitur2:

- Zero or Minimal Config untuk project JavaScript.
- Isolated test execution (ekseksusi test terisolir)
- Bisa generate Code Coverage dengan mudah
- Bisa mocking dengan berbagai cara (mock itu dalam konteks ini meniru, kaya versi dummynya)

## Mengapa Jest

mudah digunakan dan popular

## Installasi

npm i --save-dev jest


