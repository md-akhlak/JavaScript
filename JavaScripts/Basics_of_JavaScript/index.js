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

// Question
// What is NaN(Not a Number)?
/*
NaN is a property of the global object
or it the variable in ther global scope
The initial value of NaN is undefined
*/

var myPhhoneNuber = 9834823493;
var myName = "Md Akhlak";

console.log(myPhhoneNuber);
console.log(myName);

console.log(isNaN(myPhhoneNuber));
console.log(isNaN(myName));

console.log(NaN === NaN); //false
console.log(Number.NaN === NaN); //false
console.log(isNaN(NaN)); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true
