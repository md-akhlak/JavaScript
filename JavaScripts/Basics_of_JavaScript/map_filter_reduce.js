// map :- return new array
/*
let newArray = arr.map(callBack(currentValue[,index[, array]]){
  return element for newArray , after executing something
}[, this args]);
*/

// Returns a new array containing the results of calling a function on every element in this array

console.log("DISPLAYIN MAP");
let arr1 = [1, 2, 3, 4, 5];
let arr1a = arr1.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1; // display array index
});
console.log(arr1a);
console.log("\n");

// 2 , num > 9

const myArray = [23, 4, 23, 1, 23];

let myNewArray = myArray.map((curValue, index, arr) => {
  return curValue > 9;
});
console.log(myNewArray);
console.log(myArray);

// in map call back function first argument is :- 1st array element , 2nd array index , rd array

let secondArray = [23, 42, 41, 2, 45, 122, 4, 12];
let newSecondArray = secondArray.map((curElem, index, Arr) => {
  return `Index : ${index} -> curElement -> ${curElem} -> Array : ${Arr}`;
});

console.log(newSecondArray);





//  Filter :- Filter the array after the some operation

console.log("DISPLAYING FILTER");
let arr2 = [6, 5, 4, 3, 2, 1, 0];
let arr2a = arr2.filter((value) => {
  return value > 4;
});
console.log(arr2a); // Does not effet the original array
console.log(arr2);

// Reduce :- Reduce the array after some operation
console.log("DISPLAYING REDUCE");
let arr3 = [3, 2, 4, 2, 6];
// let newarr3 = arr3.reduce((a , b)=>{
//     return a + b; // add index element 1+2
// })
// console.log(newarr3);

const reduce_funct = (a, b) => {
  return a + b;
};
let newarr3 = arr3.reduce(reduce_funct); // reduce the array into a single value
console.log(newarr3);
