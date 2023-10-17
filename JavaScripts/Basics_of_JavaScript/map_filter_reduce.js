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
// flatten an array means to convert the 3rd or 2nd array into a single dimentional array
// The Reduce() method executed a reducer function(that your provide)
// on each element of ghe array, resulting in single output value

// The reducer function takes four arguments

// accumulator
// curElement
// index
// array

//  .recude((accumulator,curElements, index, array) =>{
// statements
// })

console.log("DISPLAYING REDUCE");

let redArray = [2, 53, 1, 4, 5, 1, 34, 5];

let reducedArray = redArray.reduce((accumulator, curElem, index, array) => {
  // console.log(`the index : ${index}-> current element : ${curElem} -> the array : ${array}`);
  // debugger;
  return (accumulator += curElem);
}, 5);

console.log(reducedArray);

let arr3 = [3, 2, 4, 2, 6];
// let newarr3 = arr3.reduce((a , b)=>{
//     return a + b; // add index element 1+2
// })
// console.log(newarr3);

const reduce_funct = (a, b) => a + b;
let newarr3 = arr3.reduce(reduce_funct); // reduce the array into a single value
console.log(newarr3);

// Chenable method

let mulArray = [2, 6, 5, 7, 8, 12];

let numArray = mulArray
  .map((curElem) => {
    return curElem * 2;
  })
  .filter((curElem) => {
    return curElem > 10;
  })
  .reduce((accumulator, curElem) => {
    return (accumulator += curElem);
  });
console.log(`total sum of ${mulArray} afrer the fiter is : ${numArray}`);

const fArray = [
                ["zone_1", "zone_2"],
                ["zone_3", "zone_4"],
                ["zone_5", "zone_6"],
              ];

let flattenArray = fArray.reduce((accumulator, curValue)=>{
  return accumulator.concat(curValue);
})

console.log(flattenArray)
