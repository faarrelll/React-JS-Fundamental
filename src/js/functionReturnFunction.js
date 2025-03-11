const funcA = (id) => {
  return () => {
    console.log("ID", id);
  };
};

funcA("UUID"); // gak log apapun, karena funcA("UUID") hanya return function saja tanpa dipanggil lagi

funcA("UUID")(); // baru muncul

// funcA("UUID") mengembalikan function,
// dan dimasukan ke variable hasilReturnFuncA
const hasilReturnFuncA = funcA("UUID");

hasilReturnFuncA(); // muncul juga
