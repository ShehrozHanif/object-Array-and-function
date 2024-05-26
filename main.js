"use strict";
/**                                              Oject,Array and Function
 
                                      Assignment 01

Assignment 1: Building Your Friend List
 Learning Objective:Practice working with objects and arrays in TypeScript to create a data structure.
 Task: Create a program that manages a simple friend list.
 1. Define an object named people containing an empty array called friends.
 2. Create three seprate objects, each representing a friend, with properies like firstName, lastName and optionally id.
 3.Add these friend objects to the friends array within the people object.
 4.Output the entire people object to the console,displaying your informaion and your friend list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const friend1 = {
    firstName: "Shehroz",
    lastName: "Hanif",
    id: 1
};
const friend2 = {
    firstName: "Shahmeer",
    lastName: "Hassan",
    id: 2
};
const friend3 = {
    firstName: "Hasnain",
    lastName: "Ali",
    id: 2
};
// Now we have to shif these objects to an friend empty array
const people = {
    friend: []
};
people.friend.push(friend1);
people.friend.push(friend2);
people.friend.push(friend3);
console.log(people);
//                           Assignment 02
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
//                                    Assignment 03
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data
let inventory = []; // Define an Array to store product information
let mobile1 = {
    name: "I-Phone",
    model: "12 Pro-max",
    cost: 80000,
    quantity: 20
};
let mobile2 = {
    name: "Samsung",
    model: "A-32",
    cost: 70000,
    quantity: 35
};
let mobile3 = {
    name: "Infinix",
    model: "Hot-40",
    cost: 40000,
    quantity: 15
};
inventory.push(mobile1); //Add these three objects in inventory array
inventory.push(mobile2);
inventory.push(mobile3);
console.log(inventory); // Console.log to check the inventory Array
console.log("Quantity of the second product ", inventory[1].quantity); //Access and log the quantity property of a specific product
let mobile4 = {
    name: "Real-Me",
    model: "HOT-50",
    cost: 30000,
    quantity: 10
};
inventory.push(mobile4);
// Accessing more element within the inventor array 
let inventoryList = inventory.map(product => `${product.name} - ${product.model}- Cost:${product.cost} - Quantity:${product.quantity}`);
console.log(inventoryList.join("\n"));
const students = [
    { name: "Shehroz", isSenior: true, isAssignmentCompleted: true },
    { name: "Hasnain", isSenior: false, isAssignmentCompleted: true },
    { name: "Shahmeer", isSenior: true, isAssignmentCompleted: false },
    { name: "faraz", isSenior: true, isAssignmentCompleted: true },
    { name: "juni", isSenior: false, isAssignmentCompleted: false },
    { name: "Akhash", isSenior: true, isAssignmentCompleted: false },
];
// with the help of this function we identify that senior students who completed their Assignments
function findSeniorStudentWithAssignment(student) {
    return student.filter(student => student.isSenior && student.isAssignmentCompleted);
}
let check = findSeniorStudentWithAssignment(students);
console.log("Students who are Senior and also Completed their assignments", check);
// Update List
// Students who didn't complete their assignment
function removeStudentWithOutAssignment(student) {
    return student.filter(student => student.isAssignmentCompleted);
}
let result = removeStudentWithOutAssignment(students);
console.log("Updated List", result);
