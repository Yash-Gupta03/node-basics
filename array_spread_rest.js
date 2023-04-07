let arr1 = ["apple", "oranges", " ", "mango", " ", "lemon"];
let arr2 = arr1.map((x) => {
  if (x == " ") {
    return "empty string";
  } else return x;
});

console.log(arr2);

// Q2 Ans - Arrays and objects are reference type and const points to the address where the arrays and objects is stored. So if we add or remove elements from array and object of constant type, it will not be an issue because we are not changing the address and it is pointing to the same location.

// Spread Operator
let a1 = [1, 2, 3, 4, 5];
let a2 = [5, 6, 7, 8];
let a3 = [...a1, ...a2];
console.log(a3);
// let a4 = a1.slice() + a2.slice();
// console.log(a4);

// Rest Operator
const arguments = (...args) => args;
console.log(arguments(1, 2, 3, 4, 5));
console.log(arguments(1, 2, 3));

// Destructuring
const [fruit1, fruit2] = arr1;
console.log(fruit1, fruit2);
