let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("length of array is : " + array.length);
// using for loop
console.log("using for  loop");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// //  array.from :- using to create a new array of string
// console.log("array.from ");
// let name = "akhlak";
// let n = name.from(name); // it will create a array of characters of string "akhlak";
// console.log(n);

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

// For each loop  :- contains elements , index , array ,

// using for-each loop
console.log("using for each loop");
array.forEach((Element) => {
  console.log(Element);
});

// 2nd Example of forEach loop
let Array = ["AKhlak", "Samar", "Ramish", "Gotiya", "Shahnwwaz"];
Array.forEach(function (element, index, array) {
  // console.log(index , array, element);
  console.log(`${array} :  ${element} : ${index}`);
});
