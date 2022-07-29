// Question 2
// Demonstrate the use of Switch case Statement
// A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each switch case.
let age = prompt("Enter the age");
age = Number.parseInt(age);
switch (age) {
  case 12:
    console.log("you are 12 year old");
    break;
  case 13:
    console.log("Your age is 13 Year old");
    break;
  case 14:
    console.log("your age is 14 Year old");
    break;
  default:
    console.log("Your age is not Special");
}
