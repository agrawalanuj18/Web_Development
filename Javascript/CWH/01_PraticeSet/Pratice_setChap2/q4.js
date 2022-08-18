//Question 4
// Find the wheather a number is divisble either by 2 or 3
let num = prompt("Enter the number");
num = Number.parseInt(num);
if (num % 2 == 0 || num % 3 == 0) {
  console.log("a number is divisble either by 2 or 3")
}
else {
  console.log("a number is not divisble either by 2 or 3")
}