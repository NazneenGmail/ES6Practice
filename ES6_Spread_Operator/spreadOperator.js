"use strict";
let colors = ["red", "blue"];
let newColors = [...colors, "pink", "green", "purple"];
console.log("colors :" + colors); //colors :red,blue
console.log("new colors : "+ newColors); //new colors : red,blue,pink,green,purple

console.log("*** Spread vowels ***");
let vowels = ['A',...'EIO','U']; //[ 'A', 'E', 'I', 'O', 'U' ]
console.log(vowels);

console.log("*** Clone Object ***");
let testObject = { name: 'my name', address:'somewhere in the world', zip:12345 };
let cloneObject = {...testObject};
console.log("Cloned object name value = " + cloneObject.name); //Cloned object value = my name

// Array Example
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]

// Object Example
const human = Object.freeze({race: 'human'});
const john = { ...human, name: 'John' }; // {race: "human", name: "John"}
const alienJohn = { ...john, race: 'alien' }; // {race: "alien", name: "John"}
