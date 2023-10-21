/*
JavaScript Date objects represent a single momwnt in time in a 
platform-independent format. Date objects contain a Number that replresents 
milliseconds since 1 January 1970 UTC.

// Creating Date objects
// There are 4 ways to create a new Date object
*/

// new Date()
// new Date(year, monthm, day , hours, minutes, seconds , milliseconds);
// It takes 7 arguments
// new Date(milliseconds)
// we cannot avoid month section
// new Date(date String);

// new Date()
// Date objects are created with the new Date() constructor

const cuRDate = new Date();
console.log(curDate);

console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
console.log(new Date().toLocaleDateString());
console.log(Date.now());

var D = new Date(0);
var D = new Date(1697701586517);
var D = new Date(100000000000000);
var D = new Date(86400000*2);
console.log(D.toLocaleString());


// Date Mathods 

const curDate = new  Date();

// how get the individual dates 

console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());
// console.log(curDate.getHours());
console.log(curDate.getMinutes());



// how to set individual dates

console.log(curDate.setFullYear(2024));

console.log(curDate.setFullYear(2024, 20, 5));
console.log(curDate.setMonth(8));
console.log(curDate.setDate(10));
console.log(curDate.toLocaleString);


// time Methods

const curTime = new Date();

console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());



// how to set individual time

const timeSet = new Date();

// console.log(timeSet.setTime());
console.log(timeSet.setHours(5));
console.log(timeSet.setMinutes(23));
console.log(timeSet.setSeconds(32));
console.log(timeSet.setMilliseconds(24));