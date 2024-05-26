//                                        Assignment 04

/**
 * Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes 
student information like name, senior status (true/false), and whether they've completed 
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the 
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors 
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have 
a function that removes students who haven't completed their assignments 
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)
*/


type Student = {               // student data with the following properties.
    name:string,
    isSenior:boolean,
    isAssignmentCompleted:boolean
}

const students:Student[]=[                // student list in an Array in which we store student information
    {name:"Shehroz", isSenior:true, isAssignmentCompleted:true},
    {name:"Hasnain", isSenior:false, isAssignmentCompleted:true},
    {name:"Shahmeer", isSenior:true, isAssignmentCompleted:false},
    {name:"faraz", isSenior:true, isAssignmentCompleted:true},
    {name:"juni", isSenior:false, isAssignmentCompleted:false},
    {name:"Akhash", isSenior:true, isAssignmentCompleted:false},
]

// with the help of this function we identify that senior students who completed their Assignments
function findSeniorStudentWithAssignment(student:Student[]){
    return student.filter(student=>student.isSenior && student.isAssignmentCompleted)

}

let check = findSeniorStudentWithAssignment(students)
console.log("Students who are Senior and also Completed their assignments",check)

// Update List

// Students who didn't complete their assignment
function removeStudentWithOutAssignment(student:Student[]){
    return student.filter(student => student.isAssignmentCompleted)
}

let result = removeStudentWithOutAssignment(students)
console.log("Updated List",result)