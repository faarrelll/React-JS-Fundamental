const person1 = {
  name: "John",
  age: 34,
  address: "123 Main St",
};

// const name = person1.name;
// const age = person1.age;
// const address = person1.address;

// sama dengan yang diatas
// bahasa kerennya adalah Object Destructuing
const { name: nameAlias, age, address } = person1;

console.log(nameAlias);
console.log(age);

// Spread operator untuk object
const person1Twin = {
  ...person1,
  name: "Kembaran John, namanya Joni",
};

console.log("person1Twin", person1Twin);

const nameList = ["John", "Agus", "Melody", "FA"];

// destruct list
const [a, b, c, d] = nameList;

console.log("b", b);
