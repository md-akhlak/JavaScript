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

let curDate = new Date();
console.log(curDate);

console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());
console.log(new Date().toLocaleDateString());
console.log(Date.now());
