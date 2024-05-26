"use strict";
//                           Assignment 02
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
// convert the non-string to string
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
let stringArray = scrambledArray.map(element => element.toString());
console.log(stringArray);
//Another way to convert
// for(let i =0; i<scrambledArray.length; i++){
//     if(typeof scrambledArray[i] !== "string"){
//         scrambledArray[i]=scrambledArray[i].toString()
//     }
// }
// Re-arrange element eg;[i am a student of giaic]
let iElement = stringArray.pop(); // Remove element from last and store that element in a variable named iElement
console.log(stringArray);
let emA = stringArray.splice(4, 2); // Remove element from the middle of an Array and store in a variable named amA
console.log(stringArray);
stringArray.splice(0, 0, emA[0]); // Now adding the element from ema in stringArray at [0]index. emA[0] means we access [0] index at emA
stringArray.splice(1, 0, emA[1]); // Now adding the element from ema in stringArray at [1]index. emA[1] means we access [1] index at emA
console.log(stringArray);
stringArray.unshift(iElement); // Adding the removing element which is store in iElement in the start 
console.log(stringArray);
stringArray.splice(5, 2); // Remove the unwanted Array
console.log(stringArray);
// output the result using .join
let join = stringArray.join(' '); // with the .join() Method we remove , commas 
console.log(join);
