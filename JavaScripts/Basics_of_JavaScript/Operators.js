// Operatiors
/*
1- Assignments operator( = )
2- Aritematic operator(+,-,/,*,%);
3- Comparison operator(==, != , < , > , >=, <=, )
4- Logical operator( &&(and), ||(or), !(not))
5- String operator(+)
7- Increment operator and Decrement operator(x++, ++x , x-- , --x)
6- Condinational(Ternary) operator ()
*/

// let x = 10;
// let y = 10;

// console.log("Is x and y both equal or not equal" + x == y); // false bcoz here (+) is used

// console.log("Is x and y both equal or not equal", x == y); // true bcoz here (+) is not used

// console.log(`s x and y both equal or not equal  :  ${x != y}`); // true

// 5- String operator(+)
/*
string conacatenation(operator)
The conacatenation operator(+) conacanate two string values together
Returning another string that is union of the two operand strings
*/

// console.log("mohammad" + " Akhlak"); // (+) is concanation operator

// Exponentation operator(x**n = x^n)
console.log(3 ** 3); // executes as 3^3 == 27
console.log(9 ** 2); // executes as 9^2
console.log(10 ** -1);

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

// 6- Condinational(Ternary) operator
// :- it is a sorter version of if-else statement
// syntax :- variable = (condition) ? value1 : value2
// myAge = (myAge >= 18) ? "You can vote" : "You can't vote"

let myAge = 18;
// console.log(myAge)
console.log(myAge >= 18 ? "You can vote" : "You can't vote");
// console.log(myAge)
