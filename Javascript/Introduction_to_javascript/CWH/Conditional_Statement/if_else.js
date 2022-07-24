// If-else Statement

let a = prompt("What is Your age");
// console.log(typeof a);
// prompt gives always be String
// for Converting the String into the number
// We use
a = Number.parseInt(a);
if (a < 0) {
  alert("This is invalid age");
} else if (a < 18) {
  alert("You are Kid");
} else {
  alert("You are alert");
}
