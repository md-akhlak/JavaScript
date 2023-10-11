// History of JavaScript
// JavaScript was created in 1996
// Ecma International :- 1997
// ES6 (Ecma Script)6 :- 2015  , decided to switch to anual releases of EcmaScript

// TimeLine
// ES6(2015)  ES7(2016) , ES8(2017)...... nd more

// Services
// ECMASCRIPT 2015 / ES6

// 1:- let and const
// 2:- template stings ,        destrubiting , object properties ,
// 3:- default arguments ,        arrow funtion , rest operators , spread operators

// *******************************************************************************

// 1:-  Difference between var , let and const

// var
/*Function-scoped: Variables declared with var are function-scoped, which means they are only accessible within the function in which they are declared.

Hoisting: Variables declared with var are hoisted to the top of their function or global scope. This means you can use a var variable before it's declared in the code, but it will be undefined until the declaration is reached.

Reassignable: Variables declared with var can be reassigned.
*/

function Name() {
  var firstame = "md";
  console.log(firstame);

  if (true) {
    var lastName = "Akhlak";
    console.log("First name: " + firstame);
    console.log("last name: " + lastName);
  }
  console.log("first name +  lastName : = " + firstame + lastName);
}
Name();

// *******************************************************************************

// let
/*
Block-scoped: Variables declared with let are block-scoped, which means they are only accessible within the block (enclosed by curly braces) in which they are defined.

Hoisting: Variables declared with let are hoisted, but they are not initialized, so you can't access them before the declaration.

Reassignable: Variables declared with let can be reassigned.
*/
function Name() {
  let firstame = "md";
  console.log(firstame);

  if (true) {
    let lastName = "Akhlak";
    console.log("First name: " + firstame);
    console.log("last name: " + lastName);
  }
  console.log("first name +  lastName : = " + firstame + lastName); // can't access not in block
}
Name();

// *******************************************************************************

// const
/*
Block-scoped: Variables declared with const are also block-scoped, just like let.

Hoisting: Like let, const variables are hoisted but not initialized, so you can't access them before the declaration.

Immutable: Variables declared with const cannot be reassigned after they are initially assigned a value. However, the value itself may be mutable if it is an object or an array.
*/
function Name() {
  const firstame = "md";
  console.log(firstame);

  if (true) {
    const lastName = "Akhlak";
    console.log("First name: " + firstame);
    console.log("last name: " + lastName);
  }
  console.log("first name +  lastName : = " + firstame + lastName); // can't access not in block
}
Name();

// *******************************************************************************

// 3 :- Template Literals (Template string)

for (let i = 1; i <= 10; i++) {
  let tableOf = 10;
  console.log(`${tableOf} * ${i} = ${i * tableOf}`);
}

const Add = () => `the sum of two number is : ${(a = 12) + (b = 43)}`;
console.log(Add());

// 4:- Default arguments / parameters

function MULTI(a, b = 21) {
  return a * b;
}
console.log(MULTI(3));

//5:- Fat Arrow Functions

// Normal function
console.log("using traditional method of function");
console.log(FUN());
function FUN() {
  let a = 12;
  let b = 13;
  let sum = a + b;
  return `the sum of ${a} + ${b} = ${sum}`;
}
// convert normal function to fat arrow function
console.log(`usng fat arrow method of funtion `);
const sum = () => {
  let x = 23;
  let y = 21;
  let s = y + x;
  //   return `the sum is ${(x =121) + (y = 312)}`
  return `the sum of ${x} + ${y} = ${s}`;
};
console.log(sum());
