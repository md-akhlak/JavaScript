let marks = [90, 45, 78, 88, false, "not given", "fail", "true"];
console.log(marks);
console.log("the length of the array is : ", marks.length);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);
console.log(marks[8]); // gives undefined because 8th index not present
marks[8] = 100;
console.log(marks); //Adding new values to the array
marks[0] = 99; // Changing the value of intdex[0]
console.log(marks);
console.log(typeof marks); // array type is object type

// Methods or properties of arrays

let array = [2, 3, 5, 7, 8];
console.log(array); //
console.log(typeof array); // array type is object type
let a = array.toString(); // change type oject to string
console.log(typeof a); // print string
let c = array.join("-"); // join all elements together
console.log(c);
let p = array.pop(); //remove last element
console.log(array, p);
let q = array.push(23); // add 23 at the end
console.log(array, q);
let sh = array.shift(); // print first elemet from array
console.log(sh);
console.log(sh, array); //print first element and then rest array
let us = array.unshift(56); // add 56 to then first
console.log(us); // print new array length
console.log(array, us); // return updated array and new array length

// delete array[0]; // delete is a operator , delete the element at index[0]

// console.log(array); //
// console.log(array.length) // delete does not effect array length

let Array2 = [3, 52, 23, 2, 5, 35, 5, 3];
let Array3 = [2, 53, 54, 2, 14, 54, 532, 24, 2352, 4124, 32];
let newArray = array.concat(Array2, Array3);
console.log(newArray);
console.log(newArray.length);

// short method
let sortarray = [8, 9, 4, 62, 24, 6, 5, 12];
sortarray.sort(); // sort array in string term like :- 1's , 2's liken Dictionary
console.log(sortarray);

// sorting array
let compare = (a, b) => {
  // this compare function sort array in accending order
  return a - b;
};
sortarray.sort(compare);
console.log(sortarray);

let comp = (a, b) => {
  // this compare function sort array in decending order
  return b - a;
};
sortarray.sort(comp);
console.log(sortarray);
//  reversing array
console.log(marks.reverse()); // this reverse function reverse the original array

// splice  array
let SpliceArray = [3, 5, 6, 8, 9, 23, 46, 121, 823, 12, 43, 5]; // splice array delete index[2] , add 4 element to the existing array , and then print the rest elements of array
let spArray = SpliceArray.splice(2, 4, 31, 32, 33, 34, 35);
SpliceArray.splice(2, 4, 31, 32, 33, 34, 35, 36);
console.log(SpliceArray);
console.log(spArray); // print the deleted elements

// slice array
let sliceArray = [23, 6, 3, 64, 2, 342, 465];
let slaArray = sliceArray.slice(2); // print the elements after index[2]
console.log(slaArray);
let slpaArray = sliceArray.slice(2, 6); // print the elements after index[2] to index[5]
console.log(slpaArray);
