// Operatiors
/*
1- Assignments operator( = )
2- Aritematic operator(+,-,/,*,%);
3- Comparison operator(==, != , < , > , >=, <=, )
4- Logical operator( &&(and), ||(or), !(not))
5- String operator(+)
7- Increment operator and Decrement operator(x++, ++x , x-- , --x)
6- Condinational(Ternary) operator
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

console.log("mohammad" + " Akhlak"); // (+) is concanation operator


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

// wap to swap two number using third Variable
var x = 50;
var y = 100;
