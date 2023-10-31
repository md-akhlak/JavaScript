/*
what is Object literal ?
-> object literal is simply a key:value pair data structure
-> Storing variables and function together in one constianer,
we can refer this as an Objects

-> object = school bag

// how to create an Object ?

*/

// 1st way

// let bioData = {
//   myName: "Md Akhlak",
//   myAge: 20,

//   getData() {
//     console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   },
//   // getData : function(){
//   //     console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   // }
// };

// console.log(bioData.myAge);
// console.log(bioData.myName);
// bioData.getData();

// what is we want an object as a value inside an object ?

// let myBioData = {
//   // myName : "Md Akhlak",

//   myName: {
//     firstName: "MD",
//     lastName: "Akhlak",
//   },

//   myAge: 20,

//   getData() {
//     console.log(
//       `my name is ${myBioData.myName.firstName} and my age is ${myBioData.myAge}`
//     );
//   },
// };

// console.log(myBioData.myAge);
// console.log(myBioData.myName.firstName);
// console.log(myBioData.myName.lastName);
// myBioData.getData();

// what is this object in javaScript?
/*
-> The defination of "this" object is it contain the curent context 
-> The this Object can have different values depending on where it is placed 
*/

// ex-1
// console.log(this.alert('this is "this'));

// ex-2
// let names = "Md Akhlak"; 
// function name(){
//     console.log(this);
// }
// name();
// ex-3
// let names = "Md Akhlak"; 
// function myName(){
//     console.log(this.names);
// }
// myName();

// ex-4

const obj =  {
    age : 20,
    myName() {
        console.log(this)
    }
}
console.log(this.age);
obj.myName();