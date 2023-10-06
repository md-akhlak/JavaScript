let array = [2, 4, 5, 7, 8, 9, 24, 4, 52, 42, 3, 5];
console.log("length of array is : " + array.length);
// using for loop
console.log("using for  loop");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// using for-each loop
console.log("using for each loop");
array.forEach((Element) => {
  console.log(Element);
});

//  array.from :- using to create a new array of string
console.log("array.from ");
let name = "akhlak";
let n = Array.from(name); // it will create a array of characters of string "akhlak";
console.log(n);

// for of loop
console.log("using for of loop");
for (let i of array) {
  console.log(i);
}

// for in loop
console.log("using for in loop");
for (let item in array) {
  // print the key value index of the array
  console.log(item);
}
