// map :- return new array

console.log("DISPLAYIN MAP");
let arr1 = [1, 2, 3, 4, 5];
let arr1a = arr1.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1; // display array index
});
console.log(arr1a);

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
