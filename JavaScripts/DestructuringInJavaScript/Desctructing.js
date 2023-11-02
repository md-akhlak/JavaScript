// Array Destructuring

// const myBioData = ["Akhlak", "B-tech", 20];

// let [myName, branch, myAge, degree = "CSE"] = myBioData;

// console.log(myName);
// console.log(branch);
// console.log(myAge);
// console.log(degree);

// Object Destructuring

// const bioData = {
//   myFirstName: "Akhlak",
//   myDegree: "CSE",
//   myAge: 20,
// };

// let age = bioData.myAge;
// console.log(age);

// let { myFirstName, myDegree, myAge, branch = "B-tech" } = bioData;
// console.log(myFirstName);
// console.log(myDegree);
// console.log(branch);
// console.log(myAge);

// Object Properties
// -> we can use Dynamic Properties

let name = "Akhlak";

const details = {
  [name]: "Is my name",
  [20 + 1]: "is my age",
};

console.log(details);

