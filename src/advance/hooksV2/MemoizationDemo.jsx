import React, { useMemo } from "react";
import lodash from "lodash";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import CenterContainer from "../components/CenterContainer";

const createListOfObject = (listLength) => {
  const list = [];
  for (let i = 0; i < listLength; i++) {
    JSON.stringify(Array.from(Array(listLength).keys()));
    list.push({
      indexValue: i,
    });
  }
  return list;
};

// dengan memoize dia akan catat di memo nya (Caching nya di in memory browser)
// dengan parameter A hasilnya B
// misal dengan parameter 1000 hasilnya adalah list dengan length 1000 misalnya
// Karena itu di pemanggilan fungsi berikutnya,
// gak perlu hitung ulang
// cukup lihat di memo ada gak parameter tsb di catatannya, kalau ada kembalikan return sesuai dari catatannya
// MEMOIZATION=CACHING
// {parameter1000: returnnya[{},{}, ...,{}]}
const createListOfObjectWithMemo = lodash.memoize(createListOfObject);

// aturannya penggunaan memo adalah harus pure function, jadi jika parameternya A maka dipanggil berkali-kalipun hasilnya konsisten

const MemoizationDemo = () => {
  // let useState;
  // if (true) {
  //   useState = useState(0);
  // }

  const [counter, setCounter] = useState(0);

  // Lodash Memo Demo
  console.time("tanpaMemoize");
  const list = createListOfObject(2000);
  console.log("list tanpaMemoize", list);
  console.timeEnd("tanpaMemoize");

  console.time("dgnMemoize");
  const list2 = createListOfObjectWithMemo(2000);
  console.log("list dgnMemoize", list2);
  console.timeEnd("dgnMemoize");

  // React useMemo
  console.time("tanpaUseMemo");
  const listWithEvenIndexValueObject = list2.filter((item) => {
    // biar lemot
    createListOfObject(10);
    return item.indexValue;
  });
  console.timeEnd("tanpaUseMemo");

  console.time("dgnUseMemo");
  const listWithEvenIndexValueObject2 = useMemo(() => {
    return list2.filter((item) => {
      // biar lemot
      createListOfObject(10);
      return item.indexValue;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list2]);
  console.timeEnd("dgnUseMemo");

  return (
    <CenterContainer>
      <h1>Memoization Demo</h1>
      <h2>{counter}</h2>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>
    </CenterContainer>
  );
};

export default MemoizationDemo;
