// let r = require('readline');
// const f = r.createInterface({
//     input:process.stdin,
//     output:process.stdout

// });
// f.question('Please enter something ', (userInput) => {
//     console.log('user input: ', userInput);
//     f.close ();
// } )

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("done");
let x = 2;
// While loop
while (x <= 10) {
  console.log(x);
  x++;
}
console.log("done");
// do-while loop
let y = 0;
do {
  console.log(y);
  y++;
} while (y < 10);
console.log("done");
// Switch case
let b = 40;
switch (b) {
  case 10:
    console.log("b is 10");
    break;
  case 20:
    console.log("b is 20");
    break;
  case 30:
    console.log("b is 30");
    break;
  case 40:
    console.log("b is 40");
    break;
  case 50:
    console.log("b is 50");
    break;
  default:
    console.log("b is unknown");
}
