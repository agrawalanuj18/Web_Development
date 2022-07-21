// Chapter 1
//****Question1****
// Create a variable of Type String
let a = "Add";
console.log(a + " " + 5);

// ****Question 2****
// find the datatype of a using typeof

console.log(typeof a);

// ****Queston3****

// Create a constant object
const b = 55;
// It cannot change in the code
// But we can change internally in objects

//Lets take an example

// ****Queston4****

const c = {
  name: "Akku",
  section: 1,
  isPrincipal: false,
};

c["friend"] = "Harry";
c["name"] = "Aman";

console.log(c);
// toh apan object ke aandar change kar sakte h
// but object ko alag nhi kar sakte h

// ****Question5****
// Create a dictionary of 5 words
const dictonary = {
  Hello: "Namaste",
  Number: "Digit",
  Byy: "Leave",
  Create: "Make",
  Question: "Probelm",
};
console.log(dictonary["Hello"]);
console.log(dictonary.Byy);
