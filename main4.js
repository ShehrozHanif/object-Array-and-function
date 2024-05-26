"use strict";
//                                        Assignment 04
Object.defineProperty(exports, "__esModule", { value: true });
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
