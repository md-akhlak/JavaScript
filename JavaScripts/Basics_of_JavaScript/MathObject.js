// The javascript math object allows us to perform math operations 

// 1:-
console.log(Math.PI);

// 2:- Match.round() - returns the value of X rounded to is nearest integer
let num = 12.50;
console.log(Math.round(num));  //13

// 3- Math.pow()
console.log(Math.pow(3,2)); //3^2
console.log(3**2); //3^2

// 4:-Math.sqrt() - return the sq. of X
console.log(Math.sqrt(25));
console.log(Math.sqrt(88));
console.log(Math.sqrt(23));
console.log(Math.sqrt(81));

// 5:-Mat.abs() - returns the absulate value of X conver -ve to +ve value;

console.log(Math.abs(-32));  //32
console.log(Math.abs(-13.32));  // 13
console.log(Math.abs(-32.214));
console.log(Math.abs(32.5));
console.log(Math.abs(4-12)) ; // 8
console.log((4-12)) ;  // -8

// 6:-Math.ceil()- returns the value of X rounded up to its nearest integer

console.log(Math.ceil(4.51)) //5
console.log(Math.round(4.51)) //5
console.log(Math.ceil(99.01)) //100
console.log(Math.round(99.01)) //99

// 7:- floor() - returns the value of X rounded up to its nearest integer

console.log(Math.floor(4.8)) // 4
console.log(Math.floor(99.7)) // 99

//  8:- math.min() - return minimun number 
console.log(Math.min(5,3,23,4,123,4,-12,323,4)) //-12
//  9:- math.max() - return maximun number
console.log(Math.max(5,3,23,4,123,4,-12,323,4)) // 323


// 10:- Math.random() - return a random number between 0 (inclusive), and 1 (exclusive)


// console.log((Math.random()));

console.log( Math.floor(Math.random()*10) ); // 0 to 9 

// 11:- Math.trunc()- returns the integer part of a number , doesn't give decimal part of number

console.log(Math.trunc(4.8)) // 4
console.log(Math.trunc(-23.7)) // 33






