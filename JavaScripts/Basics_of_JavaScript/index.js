/* The code is creating an object named `X` with properties `name`, `class`, `Sect`, `roll`, and
`CGPA`. The values of these properties are "Akhlak", 10, 'G', 2, and 9.33 respectively. */

const X = {
  name: "Akhlak",
  class: "CSE",
  Sect: "G",
  roll: 2,
  CGPA: 9.33,
};

console.log(X);
console.log("My name is : ", X.name);
console.log("My CGPA in 2nd semester is : ", X["CGPA"]);
console.log("My Roll no. is : ", X["roll"]);
console.log("My class is : ", X.class);
console.log("My section is : ", X.Sect);

// Operators
// Arithematic Operators
console.log("Hello world!");
let a = 10;
console.log(a);
console.log(++a);
console.log(a++);
console.log(a);
console.log(a--);
console.log(--a);
console.log(a);
console.log(a--);
