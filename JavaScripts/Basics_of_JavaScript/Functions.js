// Functions Defination
/*
A function definition (also called a function declaration or function statement) 
SYNTAX :- function functionName(parameters){
    // Statements
}
*/

// non-parameterised functions
function sumTwo() {
  var a = 10,
    b = 30;
  var total = a + b;
  console.log(total);
}

// Parameterised functions
function sumOfTwo(x, y) {
  // var a = 10 , b = 30;
  let total = y + x;
  console.log(total);
}
// console.log(sumOfTwo());  /// gives undefined

/*
Funciton Calling :-
A javaScript function is executed when "something" invokes it (call it)
*/

sumTwo();
sumOfTwo(20, 12);
sumOfTwo(3, 23);
sumOfTwo(78, 435);




// Funtion Expressions
// 