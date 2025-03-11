const numberList = [1, 2, 3, 4, 5];
console.log({ numberList });

const doubleNumberList = numberList.map((number) => {
  return number * 2;
});

console.log({ doubleNumberList });

const doubleStringNumberList = numberList.map((number) => {
  return `${number * 2}`;
});

console.log({ doubleStringNumberList });

const tripeNumberList = numberList.map((number) => number * 3);

console.log({ tripeNumberList });

const pizzaList = numberList.map((_number) => "🍕");

console.log({ pizzaList });

// const jsxList = numberList.map((number) => <div>JSX {number}</div>);

// console.log({ jsxList });
