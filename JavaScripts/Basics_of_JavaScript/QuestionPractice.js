// Questions Practice
console.log(3 + "10"); // concate two string values = 310
console.log(3 - "10"); // this is bug in JavaScript and returns a Number

// wap to swap two number using third Variable
var a = 10;
var b = 20;
console.log("Before swap");
console.log("a = ", a);
console.log("b = ", b);
var c;
c = a;
a = b;
b = c;
console.log("After swap");
console.log("a = ", a);
console.log("b = ", b);

// wap to swap two number without using third Variable
var x = 50;
var y = 100;
console.log("Before swap");
console.log("x = ", x);
console.log("y = ", y);

x = x + y; // x = 150
y = x - y; // y = -50
x = x - y; // x = -50
console.log("After swap");
console.log("x = ", x);
console.log("y = ", y);

// What is difference between (==) and (===)
var a = 5;
var b = "5";
console.log(typeof a); //number
console.log(typeof b); // stirng
// case (==) :- check only value
console.log(a == b); // true

// case (===) :- check value as well as data type
console.log(a === b); //false

// WAP to check the year is leap year or not

// let year = prompt("Enter year ");
// year = Number.parseInt(year);

let year = 2004;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year " + year + "Is a leap year");
    } else {
      console.log("The year " + year + "Is not a leap year");
    }
  } else {
    console.log("Thea year " + year + " is leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}

// what is truthy and falsy value in javascript
// total 5 fasly values in javascript
// 👉 :- 0 , "", undefined , null, NaN , false** is false

if ((score = 0)) {
  console.log("We lose the game");
} else {
  console.log("We win the game");
}

// WAP to print table of 9

for (let i = 1; i <= 10; i++) {
  let tableOf = 9;
  console.log(tableOf + " + " + i + " = " + tableOf * i);
}



