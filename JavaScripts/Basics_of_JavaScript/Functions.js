/*
Function Defination
Calling a Function
Function Parameter
Funtion Argument
Function Expression
return keyword 
Anonymous Function
*/

// Functions Defination
/*
A function definition (also called a function declaration or function statement) 
SYNTAX :- function functionName(parameters){
    // Statements
}
*/

// // non-parameterised functions
// function sumTwo() {
//   var a = 10,
//     b = 30;
//   var total = a + b;
//   console.log(total);
// }

// // Parameterised functions
// function sumOfTwo(x, y) {
//   // var a = 10 , b = 30;
//   let total = y + x;
//   console.log(total);
// }
// // console.log(sumOfTwo());  /// gives undefined

// /*

// Funciton Calling :-

// A javaScript function is executed when "something" invokes it (call it)

// sumTwo();
// sumOfTwo(20, 12);
// sumOfTwo(3, 23);
// sumOfTwo(78, 435);

// Funtion Expressions
// creat a function and put it into  the

// function SUM(a, b) {
//   var total = a + b;
//   console.log(total);
// }

// var funExp = SUM(5, 2);

// return keyword
/*
When js reaches a return statement , the function will stop executing.
Function often compute a return value.
The return value is "returned" back to the caller
*/
// var a, b;
// function SUM(a, b) {
//   return a + b;
// }
// var funExp = SUM(5, 2);
// console.log("The sum of two number is " + funExp);

// Anonymous function
/*
A function expression is similar to and has the same syntax as a function declaration
one can define "name" function expressoion( where the name of the expression might be used in the call stack ) or "anonymous" function expressoion
*/

var funExp = function (a, b) {
  return total = a + b;
}
// funExp(3, 23);  // not work
var sum  = funExp(3,33);
console.log(funExp(5,23));
console.log(sum);
