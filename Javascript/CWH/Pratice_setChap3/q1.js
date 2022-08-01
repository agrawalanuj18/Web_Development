// Chapter 3 Pratice Set
// Loops and Function 

// Question 1 
// Write a program to print the marks of student.....
let marks = {
    harry : 98,
    rohan : 70,
    Aakhas : 7,
  }
  
  for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]])
  }