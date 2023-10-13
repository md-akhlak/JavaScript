// // 2:- Searching and filter in an array



// // Array . push() mehtod :- Add new elements at the end of the array
// // push method :- returns the new array size

// const myArray = ['Addidas' , 'nike', 'gucchi', 'puma'];
// console.log(myArray);
// console.log(myArray.length); // return 4
// myArray.push("Wrong india");
// console.log(myArray);
// console.log(myArray.length);  //return 5

// // unshift method :- Adds new elements at the start of the array
// // sunhift method :- return the new array of array

// const unshiftArray = ["ramish" , "Akhlak", "samar" , 'Shahnwaz'];
// console.log(`The old array is : ${unshiftArray}`);
// console.log(unshiftArray.length); // return 4
// unshiftArray.unshift("Gotia" , 'dalal', 'chutiya'); // return 7
// console.log(`The new array is : ${unshiftArray}`);
// console.log(unshiftArray.length);

// // pop method() :- removes the last element from an array and return 
// // that element. This method changes the length of the array 

// const popArray = ['brockley ', 'cauliflower' ,'Cabbage', 'Coriender']
// console.log(`The old array is : ${popArray}`);
// console.log(popArray.length); // return 4
// // popArray.pop();
// console.log(popArray.pop());
// console.log(`The old array is : ${popArray}`);
// console.log(popArray.length); // return 3


// // shift method() :- removes the first element from an array and returns
// // that that removed element. This method changes the length of the array

// const shiftArray = [242,2,34,5,7,8,9,9,0];
// console.log("The old array is : "+shiftArray);
// console.log(shiftArray.length); // return 9
// console.log(shiftArray.shift())
// console.log("The new array is : "+shiftArray);
// console.log(shiftArray.length); // return 8

// *****************************************************************************************
// Splice method :-  used to add, remove, or replace elements in an array
// SYNTAX :- array.splice(start , deleteCount, item1 , item2, ...) 

// 1- removing element from an array
const fruitLists = ["mango", 'apple', "Orange", "Banana", "PinApple"];
console.log(fruitLists);

const newFruitList = fruitLists.indexOf('Banana');

// if(newFruitList != -1){
//     const newFruitList = fruitLists.splice(newFruitList , 1);
//     console.log(newFruitList);
// }
// else{
//     console.log("NO DATA FOUND! TO DELETE");
// }

// 2:- Update element in an array
const nameList = ['samar', 'akhlak', 'shahnwaz', 'ramish'];
console.log(nameList);

const indexOfName = nameList.indexOf('shawaz');

if(indexOfName != -1){
    const newNameList = nameList.splice(indexOfName,1,"SHAHNWAZ");
    console.log(nameList);
}
else{
    console.log("no such data found!");
}

// Replacing Element in an array
const Animal = ["tiger", 'lion', 'girrafe', 'dear'];
console.log(Animal);
Animal.splice(1, 1 , "Cheetah"); // replaces lion with cheetah
console.log(Animal);
