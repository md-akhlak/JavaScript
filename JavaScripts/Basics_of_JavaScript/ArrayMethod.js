// 2:- Searching and filter in an array



// Array . push() mehtod :- Add new elements at the end of the array
// push method :- returns the new array size

const myArray = ['Addidas' , 'nike', 'gucchi', 'puma'];
console.log(myArray);
console.log(myArray.length); // return 4
myArray.push("Wrong india");
console.log(myArray);
console.log(myArray.length);  //return 5

// unshift method :- Adds new elements at the start of the array
// sunhift method :- return the new array of array

const unshiftArray = ["ramish" , "Akhlak", "samar" , 'Shahnwaz'];
console.log(`The old array is : ${unshiftArray}`);
console.log(unshiftArray.length); // return 4
unshiftArray.unshift("Gotia" , 'dalal', 'chutiya'); // return 7
console.log(`The new array is : ${unshiftArray}`);
console.log(unshiftArray.length);

// pop method() :- removes the last element from an array and return 
// that element. This method changes the length of the array 

const popArray = ['brockley ', 'cauliflower' ,'Cabbage', 'Coriender']
console.log(`The old array is : ${popArray}`);
console.log(popArray.length); // return 4
// popArray.pop();
console.log(popArray.pop());
console.log(`The old array is : ${popArray}`);
console.log(popArray.length); // return 3


// shift method() :- removes the first element from an array and returns
// that that removed element. This method changes the length of the array

const shiftArray = [242,2,34,5,7,8,9,9,0];
console.log("The old array is : "+shiftArray);
console.log(shiftArray.length); // return 9
console.log(shiftArray.shift())
console.log("The new array is : "+shiftArray);
console.log(shiftArray.length); // return 8

// Splice method :- 