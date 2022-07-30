// Add first n natural number
let n = prompt("Enter the value of n");
n = parseInt(n);
let Sum = 0;
for (let i = 1; i <= n; i++) {
  Sum += i;
  if (i == n) {
    console.log(Sum);
  }
}
// Find factorial of Number 
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let factorial = 1
for (let i = 1; i <= n; i++) {

  factorial *= i;
  if (i == n) {
    console.log(factorial)
  }
}
if (n == 0) {
  console.log(factorial)
}