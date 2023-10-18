/*
1- Escape characters
2- Finding string in a string
3- searching string in a string
4- Extrating string parts
5- ReplacinG string content
6- Extrating string characters
7- Other Successful methods
*/

//1:- escape characters

console.log('my name is "mohammad akhlak" OK');

console.log('an my father name is "mohammad TAIYAB" OK');

// finding string length
let myName = "my name is mohammad akhlak";
console.log(myName);
console.log(myName.length);

//2:- finding string in a "string" or 'char'

console.log(myName.indexOf("akhlak"));

console.log(myName.indexOf("a", 3)); // search 'a' after 3rd index

console.log(myName.lastIndexOf("d"));

// ******************************************************************************************

// 3:- searching string in a 'string' or 'char'
// stirng.prototype.search(regexp)
// The search() method searched a string for a specified value and returns the poosition of the match

const searchName = "hii! i am mohammad akhlak";
let sName = searchName.search("am");
console.log(sName);
// ***************************************************************************************

// 4:- Extracting string parts

// there are 3 methods to extracting a part of string

/*
a :- slice(start, end); :- Extract a part of string and return the extracted part in a new string , take 2 parameters , the original array wil not be changed.
 */

let str = "apple , banana, juice , mango";
// let sResult = str.slice(0,5);

let res = str.slice(3, -3); //goes to last and delete the last -3 characters
console.log(res);

/*
b :- substring(start, end) :- similar to slice(start, end) , But it doesn't take negative parameters
*/

/*
c :- substr(start, length) :- similar to slice(start, end) , but difference is that 2nd
     parameter specifies the length extracted string
*/
// ***********************************************************************************************
// 5 :- ReplacinG string content :- String.prototype.replace(searchFor, replaceWith)
// Replaces the specified value with another value in string


// string.trim():- this method removes whitespace from both sides of a string

let trimString = "Hello     world    ";
console.log(trimString.trim());




// Method to convert string to a array
// this can be done by the string.split() method
