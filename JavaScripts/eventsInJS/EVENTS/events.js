// HTML events are 'things' that happen to html elements.
// When JavaScript is used in html pages, JavaScript can "react" on these events.


// HTMl Events
// an html events can be something the browser does , or something a user does 

// here are some HTML events:

/**
1- an html page has finished loading 
2- an html input was changed 
3- an html button was clicked
4- often , when events happen you may want to do something.

// JavaScript lets us execute code when events are detected 

// html allows events handler attributes , with javascript code to be added to the element

*/


// Section 1 :

//  4 ways of writing events in javascript
/*
1- using inline events alert();
2- by calling a function 
3- using inline events( HTML onclick= "" property and element.onclick)
4- using events listeners(addEventListener and IE's attachEvent)
*/


// //       2nd way for writing a function
// const callingFunction = () => {
//     alert("This is the most common way or writing a function");
// }

// //      3rd way for writing a function
// const thirdWay = document.getElementById('thirdWay');

// thirdWay.onclick = function () {
//     alert("This is the most common way or writing a function again");
// }

// // 4th way for writing a function
// const fourthWay = document.querySelector('#fourthWay');

// fourthWay.addEventListener('click', () => {
//     alert('i love this way of writing a function');
// })



// section 2:
// what is Event Object?
// Event Object is the parent object of the event object
// example:
// mouseevent , focusevent , keyboardevent etc;


// section 3:
// what is mouseEvent Object?
// events that occur when the mouse interact with the html document
// are belong to the mouseEvent object

// section 4:
// what is keyboardEvent in JavaScript?
// events that when user presses a key on the keyboard, are 
// belong to the keyboardEvent object

// section 5:
// inputEvents in javascript
//The onchange event occurs when the value of an element has been changed
//for radio-button and checkboxes, the onchange event occurs when the checked has been changed 






