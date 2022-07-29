//Question 5
//Print "You can drive" or "You cannot Drive" based on age using ternary operator 
let age = prompt("Enter the age");
age = Number.parseInt(age);
console.log(age >= 18?"You can drive" : "You cannot drive"  )